const axios = require('axios');

axios.interceptors.response.use((res) => {
  return res.data;
});

// 获取git上的项目列表
async function getRepolist() {
  return axios.get('https://8f2ad662-66cb-4a7c-8fa5-e7e9e2c18047.bspapp.com/http/templateList');
}
// 获取gitee上的项目列表
async function getGiteeRepolist () {
  return axios.get('https://gitee.com/gitopenchina/wow-app-cli/raw/master/templateList.json');
}

module.exports = {
  getRepolist,
  getGiteeRepolist
};
