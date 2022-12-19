/**
 * 创建成功提示
 */
const doneTips = (projectName) => {
    console.log("");
    console.log("\033[42;30m DONE \033[40;32m project create done.");
    console.log("");
    console.log("Thank you for using wow-app-cli.");
    console.log("");
    console.log("\033[40;31m ❤ \033[40;34m cd " + projectName);
    console.log("");
    console.log("\033[40;31m ❤ \033[40;34m npm install");
    console.log("");
    console.log("\033[40;31m ❤ \033[40;34m npm run serve");
    console.log("");
    console.log("\033[0m");
  };
  const uniappDenoTips = (projectName) => {
    console.log("");
    console.log("\033[42;30m DONE \033[40;32m project create done.");
    console.log("");
    console.log("Thank you for using wow-app-cli.");
    console.log("");
    console.log("\033[40;31m ❤ \033[40;34m Please import the " + projectName + " project into HBuilderX startup.");
    console.log("");
    console.log("\033[0m");
  };
  const koaDoneTips = (projectName) => {
    console.log("");
    console.log("\033[42;30m DONE \033[40;32m project create done.");
    console.log("");
    console.log("Thank you for using wow-app-cli.");
    console.log("");
    console.log("\033[40;31m ❤ \033[40;34m cd " + projectName);
    console.log("");
    console.log("\033[40;31m ❤ \033[40;34m npm install");
    console.log("");
    console.log("\033[40;31m ❤ \033[40;34m npm run dev");
    console.log("");
    console.log("\033[0m");
  };
  const commonTips = (projectName) => {
    console.log("");
    console.log("\033[42;30m DONE \033[40;32m project create done.");
    console.log("");
    console.log("Thank you for using wow-app-cli.");
    console.log("");
    console.log("\033[40;31m ❤ \033[40;34m cd " + projectName);
    console.log("");
    console.log("\033[40;31m ❤ \033[40;34m npm i / yarn install ...");
    console.log("");
    console.log("\033[40;31m ❤ \033[40;34m 运行项目");
    console.log("");
    console.log("\033[0m");
  };
  module.exports = {
    doneTips,
    uniappDenoTips,
    koaDoneTips,
    commonTips
  };
  