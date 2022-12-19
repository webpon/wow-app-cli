#! /usr/bin/env node

const program = require('commander');

program
  // 创建create 命令，用户可以通过 my-cli creat appName 创建项目
  .command('create <app-name>')
  // 命名的描述
  .description('create a new project(创建新项目)')
  // create命令的选项
  .option('-f, --force', 'overwrite target if it exist(覆盖已有同名称项目)')
  .action((name, options) => {
    // 执行'./create.js'，传入项目名称和 用户选项
    require('./create')(name, options);
  })
program
  // 创建create 命令，用户可以通过 my-cli creat appName 创建项目
  .command('list')
  // 命名的描述
  .description('show all template(展示所有列表)')
  // create命令的选项
  // .option('-f, --force', 'overwrite target if it exist(覆盖已有同名称项目)')
  .action(() => {
    // 执行'./showList.js'，展示所有列表
    require('./showList');
  });

program.parse();
