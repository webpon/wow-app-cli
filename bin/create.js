const path = require('path');
const fs = require('fs-extra');
const Generator = require('./generator');

module.exports = async function (name, options) {
  // process.cwd获取当前的工作目录
  const cwd = process.cwd();
  // path.join拼接 要创建项目的目录
  const targetAir = path.join(cwd, name);
  const args = require('./ask');
  // 如果该目录已存在
  if (fs.existsSync(targetAir)) {
    // 强制删除
    if (options.force) {
      await fs.remove(targetAir);
    } else {
      (async () => {
        import('inquirer').then(async (inquirer) => {
          // 通过inquirer：询问用户是否确定要覆盖 or 取消
          let { action } = await inquirer.default.prompt([
            {
              name: 'action',
              type: 'list',
              message: 'Target already exists',
              choices: [
                {
                  name: 'overwrite',
                  value: 'overwrite'
                },
                {
                  name: 'cancel',
                  value: false
                }
              ]
            }
          ]);

          if (!action) {
            return;
          } else {
            // 删除文件夹
            await fs.remove(targetAir);
            // 通过inquirer，让用户的输入的项目内容：作者和描述
            import('inquirer').then(async (inquirer) => {
              const ask = await inquirer.default.prompt(args);
              const template = options.template
              // 创建项目
              const generator = new Generator(name, targetAir, ask, template);
              generator.create();
            })
          }
        });
      })();
    }
  } else {
    // 通过inquirer，让用户的输入的项目内容：作者和描述
    import('inquirer').then(async (inquirer) => {
      const ask = await inquirer.default.prompt(args);
      const template = options.template
      // 创建项目
      const generator = new Generator(name, targetAir, ask, template);
      generator.create();
    })
  }
};
