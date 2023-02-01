// 引入ora工具：命令行loading 动效
const ora = require('ora');
// 控制台输出样式
const chalk = require('chalk');
// 控制台链接
const terminalLink = require('terminal-link');
// 获取git项目列表
const { getRepolist, getGiteeRepolist } = require('./http');

async function wrapLoading (fn, message, ...args) {
  const spinner = ora(message);
  // 下载开始
  spinner.start();
  try {
    const result = await fn(...args);
    // 下载成功
    spinner.succeed();
    return result;
  } catch (error) {
    spinner.fail('地址一获取列表失败')
    throw error
  }
}
async function getRepo () {
  let templateData = []
  try {
    templateData = await wrapLoading(getRepolist, 'waiting fetch template');
  } catch (error) {
    try {
      templateData = await wrapLoading(getGiteeRepolist, 'waiting fetch template');
    } catch (error) {
      console.log(error);
      const spinner = ora('');
      // 下载失败
      spinner.fail('Request failed ……');
    }
  }
  // 获取git仓库的项目列表
  let listStr = ''
  templateData.list.map(item => {
    listStr += chalk.yellow(`______________${item.name}________________\n`);
    if (item.options) {
      item.options.child.map(item => {
        listStr += (item.githubUrl || item.giteeUrl) ? chalk.green(`${item.name}\n`) : chalk.blue(`${item.name}:\n`);
        if (item.options) {
          item.options.child.map(item => {
            listStr += chalk.green(`${item.name}\n`);
          })
        }
      })

    }
  })
  console.log(listStr);
  const link = terminalLink('http://gitopenchina.gitee.io/wow-app-cli-doc/', '官网');
  console.log('更多模板信息请访问：', chalk.blue(link));
}
getRepo();