const path = require('path');
const fs = require('fs-extra');
// 引入ora工具：命令行loading 动效
const ora = require('ora');
const inquirer = require('inquirer');
// 控制台输出样式
const chalk = require('chalk');
// 控制台链接
const terminalLink = require('terminal-link');
// 引入download-git-repo工具
const downloadGitRepo = require('download-git-repo');
// download-git-repo 默认不支持异步调用，需要使用util插件的util.promisify 进行转换
const util = require('util');
// 获取git项目列表
const { getRepolist } = require('./http');
// 完成后的提示信息
const { commonTips } = require('./tips');

async function wrapLoading(fn, message, ...args) {
  const spinner = ora(message);
  // 下载开始
  spinner.start();

  try {
    const result = await fn(...args);
    // 下载成功
    spinner.succeed();
    return result;
  } catch (e) {
    console.log(e);
    // 下载失败
    spinner.fail('Request failed ……');
  }
}

// 创建项目类
class Generator {
  // name 项目名称
  // target 创建项目的路径
  // 用户输入的 作者和项目描述 信息
  constructor(name, target, ask, template) {
    this.name = name;
    this.template = template;
    this.target = target;
    this.ask = ask;
    // download-git-repo 默认不支持异步调用，需要使用util插件的util.promisify 进行转换
    this.downloadGitRepo = util.promisify(downloadGitRepo);
  }
  async getRepo() {
    // 获取git仓库的项目列表
    const templateData = await wrapLoading(getRepolist, 'waiting fetch template');
    const repolist = templateData.list
    if (!repolist) return;
    if(this.template) {
      const templateList = []
      repolist[0].options.child.forEach(item => {
        templateList.push(...item.options.child)
      })

      repolist[1].options.child.forEach(item => {
        templateList.push(...item.options.child)
      })

      templateList.push(repolist[2].options.child)
      let currentData = templateList.find((item) => item.path === this.template);
      if(currentData) {
        return currentData
      } else {
        throw new Error('找不到该模板');
      }
    }
    const repos = repolist.map((item) => item.name);
    // 通过inquirer 让用户选择要下载的项目模板
    const { repo } = await inquirer.prompt({
      name: 'repo',
      type: 'list',
      choices: repos,
      message: 'Please choose a template'
    });
    let currentData = repolist.find((item) => item.name === repo) || {};
    // 如果有二级菜单的话
    if (currentData.options) {
      const choices = currentData.options.child;
      const { name: childName } = await inquirer.prompt([
        {
          message: currentData.options.title,
          name: 'name',
          type: 'list',
          choices,
        },
      ]);
      currentData = choices.find((item) => item.name === childName);
      // 如果有三级菜单的话
      if (currentData.options) {
        const choices = currentData.options.child;
        const { name: childName } = await inquirer.prompt([
          {
            message: currentData.options.title,
            name: 'name',
            type: 'list',
            choices,

          },
        ]);
        currentData = choices.find((item) => item.name === childName);
      }
    }
    return currentData;
  }

  // 下载用户选择的项目模板
  async download(repo, tag) {
    await wrapLoading(this.downloadGitRepo, 'waiting download template', `direct:${repo}`, path.resolve(process.cwd(), this.target), { clone: true });
  }

  // 文件入口，在create.js中 执行generator.create();
  async create() {
    const repo = await this.getRepo();
    console.log('你选择了：', chalk.green(repo.name));
    console.log('模板描述：', chalk.yellow(repo.description));
    const link = terminalLink(repo.giteeUrl || repo.githubUrl, '详情');
    console.log('模板详情：', chalk.blue(link));
    // 下载用户选择的项目模板
    await this.download(repo.giteeUrl || repo.githubUrl);

    // 下载完成后，获取项目里的package.json
    // 将用户创建项目的填写的信息（项目名称、作者名字、描述），写入到package.json中
    let targetPath = path.resolve(process.cwd(), this.target);

    let jsonPath = path.join(targetPath, 'package.json');

    if (fs.existsSync(jsonPath)) {
      // 读取已下载模板中package.json的内容
      const data = fs.readFileSync(jsonPath).toString();
      let json = JSON.parse(data);
      json.name = this.name;
      // 让用户输入的内容 替换到 package.json中对应的字段
      Object.keys(this.ask).forEach((item) => {
        json[item] = this.ask[item];
      });
      //修改项目文件夹中 package.json 文件
      fs.writeFileSync(jsonPath, JSON.stringify(json, null, '\t'), 'utf-8');
      commonTips(this.name)
    }
    
  }
}

module.exports = Generator;
