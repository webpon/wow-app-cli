## wow-app-cli

```
一个含有丰富优质模板的脚手架
```

### 安装

```
npm install wow-app-cli@latest -g
```

### 使用说明

1）通过 **wow create appName** 创建项目

```
wow create appName
```

![image-20221204051732639](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20221204051732639.png)

2）按需选择项目模板

![image-20221205232548833](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20221205232548833.png)

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20221205232627892.png" alt="image-20221205232627892" style="zoom:80%;" />

3）安装选择的模板

![image-20221204051839160](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20221204051839160.png)

![image-20221204051906138](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20221204051906138.png)

4）查看所有模板

```
wow list
```

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20221204104432219.png" alt="image-20221204104432219" style="zoom: 80%;" />

### 模板详情以及预览

```
注意：安装依赖失败时请尝试：npm cache clear --force
```

### 移动端

#### Vue2

##### 1、vue2-base

> 1. 名称：vue2-base(vue2官方默认模板 + router + vuex)
> 2. 描述：vue2官方默认模板 + router + vuex
> 3. 技术栈：Vue2.x + vue-router + Vuex + js
> 4. 仓库地址：https://gitee.com/gitopenchina/template-vue2-base.git
> 5. 预览地址：https://static-8f2ad662-66cb-4a7c-8fa5-e7e9e2c18047.bspapp.com/wow-app-test/vue2-base/index.html

开发流程：

```
npm i
```

```
npm run serve
```

##### 2、vant-finance-mobile

> 1. 名称：vue2-base(vue2官方默认模板 + router + vuex)
> 2. 描述：vant-finance-mobile(基于Vant的理财产品页面)
> 3. 技术栈：Vue2.x + vue-router + Vuex + vant+ less = js
> 4. 仓库地址：https://github.com/huzongyao/vant-finance-mobile.git
> 5. 预览地址：https://static-8f2ad662-66cb-4a7c-8fa5-e7e9e2c18047.bspapp.com/wow-app-test/mobile/vue2/vant-finance-mobile/index.html

开发流程：

```
npm i
```

```
npm run dev
```

项目运行截图：

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20221204060724247.png" alt="image-20221204060724247" style="zoom:50%;" />

#### Vue3

##### 1、vue3-base-js

> 1. 名称：vue3-base-js(vue3官方默认模板 + router + pinia)
> 2. 描述：vue3官方默认模板 + router + pinia
> 3. 技术栈：vite + Vue3.x + vue-router + pinia + js
> 4. 仓库地址：https://github.com/webpon/template-vue3-js.git
> 5. 预览地址：https://static-8f2ad662-66cb-4a7c-8fa5-e7e9e2c18047.bspapp.com/wow-app-test/mobile/vue3/vue3-base/index.html

开发流程：

```
npm i
```

```
npm run dev
```

##### 2、vue3-base-ts

> 1. 名称：vue3-base-ts(vue3官方默认模板 + router + pinia)
> 2. 描述：vue3官方默认模板 + router + pinia
> 3. 技术栈：vite + Vue3.x + vue-router + pinia + ts
> 4. 仓库地址：https://github.com/webpon/template-vue3-ts.git
> 5. 预览地址：https://static-8f2ad662-66cb-4a7c-8fa5-e7e9e2c18047.bspapp.com/wow-app-test/mobile/vue3/vue3-base/index.html

开发流程：

```
npm i
```

```
npm run dev
```

##### 3、vue3-vant4-mobile

> 1. 名称：vvue3-vant4-mobile(技术栈Vue3.2、Vite3、Vant4、Pinia2)
> 2. 描述：👋👋👋 Vue3 Vant4 Mobile 使用了最新的Vue3.2、Vite3、Vant4、Pinia2、Typescript、Windicss等主流技术开发，集成 Dark Mode(暗黑)模式和系统主题色，并且持久化保存，集成 Mock 数据，顺便写了个 登录/注册/找回密码 页面（包括逻辑），你只需要替换你的 API 即可，顺便写了个包含 NavBar、TabBar的 Layout，顺便集成了Axios、useEcharts、IconSvg
> 3. 技术栈：vite + Vue3.x + vant + vue-router + pinia + ts
> 4. 仓库地址：https://github.com/xiangshu233/vue3-vant4-mobile.git#main
> 5. 预览地址：https://static-8f2ad662-66cb-4a7c-8fa5-e7e9e2c18047.bspapp.com/wow-app-test/mobile/vue3/vue3-vant4-mobile/vant-mobile/index.html

开发流程：

```
//初始化git
git init
//安装依赖
npm i
// 运行项目
npm run dev
```

项目运行截图：

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20221204063007104.png" alt="image-20221204063007104" style="zoom:50%;" />

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20221204063022043.png" alt="image-20221204063022043" style="zoom:50%;" />

##### 4、vue-mobile-template

> 1. 名称：vue-mobile-template(基于vue3.x的开源免费移动端模板)
> 2. 描述：基于 vue3.x + CompositionAPI + javascript + vite + vant + vue-router-next + pinia 的开源免费移动端模板，希望减少工作量，帮助大家实现快速开发移动端。
> 3. 技术栈： vue3.x + CompositionAPI + javascript + vite + vant + vue-router-next + pinia
> 4. 仓库地址：https://github.com/Coder-XiaoYi/vue-mobile-template.git#master
> 5. 预览地址：https://liupeiqiang.gitee.io/vue-mobile-template
> 6. 备注：
>    - Admin账号密码：admin/admin123
>    - user账号密码：user1/user1

开发流程：

```
npm i
```

```
npm run dev
```

项目运行截图：

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20221204065155332.png" alt="image-20221204065155332" style="zoom:50%;" />

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20221204065300505.png" alt="image-20221204065300505" style="zoom:50%;" />

#### React

##### 1、vite-react-ts-antd

> 1. 名称：vite-react-ts-antd(react-vite默认模板)
> 2. 描述：**该项目是由 Vite 构建,基于 React Hooks 框架配合 Typescript 语言的 H5 端快速开发的模板项目,该项目适配屏幕使用的`postcss-px-to-viewport`直接写 px 自动转换为 vw 或者 rem,项目也添加了路由切换动画,适配`chrome safari底部工具栏`**
> 3. 技术栈： vite + react17.x + ant-mobile
> 4. 仓库地址：https://github.com/swcbo/react-ts-h5-template.git#master
> 5. 预览地址：https://github.huangb.top/

开发流程：

```
yarn install
```

```
yarn dev
```

项目运行截图：

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20221204102600076.png" alt="image-20221204102600076" style="zoom:25%;" />

### PC端

#### Vue2

##### 1、vue2-base

> 1. 名称：vue2-base(vue2官方默认模板 + router + vuex)
> 2. 描述：vue2官方默认模板 + router + vuex
> 3. 技术栈：Vue2.x + vue-router + Vuex + js
> 4. 仓库地址：https://gitee.com/gitopenchina/template-vue2-base.git
> 5. 预览地址：https://static-8f2ad662-66cb-4a7c-8fa5-e7e9e2c18047.bspapp.com/wow-app-test/vue2-base/index.html

开发流程：

```
npm i
```

```
npm run serve
```

##### 2、vue-admin-template

> 1. 名称：vue-admin-template(这是一个极简的 vue admin 管理后台)
> 2. 描述：这是一个极简的 vue admin 管理后台。它只包含了 Element UI & axios & iconfont & permission control & lint，这些搭建后台必要的东西。
> 3. 技术栈：vue-cli + Vue2.x +element-ui + vue-router + Vuex + js
> 4. 仓库地址：https://github.com/PanJiaChen/vue-admin-template.git#master
> 5. 预览地址：https://static-8f2ad662-66cb-4a7c-8fa5-e7e9e2c18047.bspapp.com/wow-app-test/pc/vue2/vue-admin-template/index.html

开发流程：

```
npm i
npm run dev
```

项目运行截图：

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20221204070826248.png" alt="image-20221204070826248" style="zoom:33%;" />

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20221204070852343.png" alt="image-20221204070852343" style="zoom:33%;" />

##### 3、vue2-manage

> 1. 名称：vue2-manage(后台项目node-elm的管理系统)
> 2. 描述：此项目是 vue + element-ui 构建的后台管理系统，是后台项目node-elm 的管理系统，所有的数据都是从服务器实时获取的真实数据，具有真实的注册、登陆、管理数据、权限验证等功能。
> 3. 技术栈：vue-cli + Vue2.x +element-ui + vue-router + Vuex + js
> 4. 仓库地址：https://github.com/bailicangdu/vue2-manage.git#master
> 5. 预览地址：https://static-8f2ad662-66cb-4a7c-8fa5-e7e9e2c18047.bspapp.com/wow-app-test/pc/vue2/vue2-manage/index.html

开发流程：

```
npm i
npm run dev
```

项目运行截图：

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20221204070826248.png" alt="image-20221204070826248" style="zoom:33%;" />

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20221204071955464.png" alt="image-20221204071955464" style="zoom:33%;" />

##### 4、tdesign-vue-starter

> 1. 名称：tdesign-vue-starter(tdesign官方管理后台模板)
> 2. 描述：TDesign Vue Starter 是一个基于 tdesign-vue，使用 Vue2、Vite开发，可进行个性化主题配置，旨在提供项目开箱即用的、配置式的中后台项目。
> 3. 技术栈：vite + Vue2.x +tdesign+ vue-router + Vuex + js
> 4. 仓库地址：https://github.com/Tencent/tdesign-vue-starter.git#main
> 5. 预览地址：https://tdesign.tencent.com/starter/vue/

开发流程：

```
npm i
npm run dev
```

项目运行截图：

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20221204072430895.png" alt="image-20221204072430895" style="zoom: 33%;" />

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20221204072448525.png" alt="image-20221204072448525" style="zoom:33%;" />

#### Vue3

##### 1、vue3-base-js

> 1. 名称：vue3-base-js(vue3官方默认模板 + router + pinia)
> 2. 描述：vue3官方默认模板 + router + pinia
> 3. 技术栈：vite + Vue3.x + vue-router + pinia + js
> 4. 仓库地址：https://github.com/webpon/template-vue3-js.git
> 5. 预览地址：https://static-8f2ad662-66cb-4a7c-8fa5-e7e9e2c18047.bspapp.com/wow-app-test/mobile/vue3/vue3-base/index.html

开发流程：

```
npm i
```

```
npm run dev
```

##### 2、vue3-base-ts

> 1. 名称：vue3-base-ts(vue3官方默认模板 + router + pinia)
> 2. 描述：vue3官方默认模板 + router + pinia
> 3. 技术栈：vite + Vue3.x + vue-router + pinia + ts
> 4. 仓库地址：https://github.com/webpon/template-vue3-ts.git
> 5. 预览地址：https://static-8f2ad662-66cb-4a7c-8fa5-e7e9e2c18047.bspapp.com/wow-app-test/mobile/vue3/vue3-base/index.html

开发流程：

```
npm i
```

```
npm run dev
```

##### 3、vue-admin-box

> 1. 名称：vue-admin-box (vue3+vite+element-plus免费并且开源的中后台管理系统模板)
> 2. 描述：vue-admin-box是一个免费并且开源的中后台管理系统模板。使用最新版本的vue3+vite+element-plus开发而成，目的是为了解决通用型的业务中后台系统复杂的配置。
> 3. 技术栈：vite + Vue3.x + element-plus + vue-router + vuex+ ts
> 4. 仓库地址：https://github.com/cmdparkour/vue-admin-box.git#master
> 5. 预览地址：https://static-8f2ad662-66cb-4a7c-8fa5-e7e9e2c18047.bspapp.com/wow-app-test/pc/vue3/vue-admin-box/index.html

开发流程：

```
npm i
npm run dev
```

项目运行截图：

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20221204073114660.png" alt="image-20221204073114660" style="zoom:33%;" />

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20221204073148535.png" alt="image-20221204073148535" style="zoom:33%;" />

##### 4、tdesign-vue-next-starter

> 1. 名称：tdesign-vue-next-starter(tdesign官方管理后台模板)
> 2. 描述：tdesign-vue-next-starter 是一个基于 tdesign-vue，使用 Vue3、Vite开发，可进行个性化主题配置，旨在提供项目开箱即用的、配置式的中后台项目。
> 3. 技术栈：vite + Vue3.x +tdesign+ vue-router + pinia + ts
> 4. 仓库地址：https://github.com/Tencent/tdesign-vue-starter.git#main
> 5. 预览地址：https://tdesign.tencent.com/starter/vue-next

开发流程：

```
npm i
npm run dev
```

项目运行截图：

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20221204072430895.png" alt="image-20221204072430895" style="zoom: 33%;" />

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20221204072448525.png" alt="image-20221204072448525" style="zoom:33%;" />

#### React

##### 1、react-base

> 1. 名称：react-base-js(react默认模板)
> 2. 描述：react默认模板
> 3. 技术栈：create-react+ react18.x + react-app-rewired + customize-cra + js
> 4. 仓库地址：https://github.com/webpon/template-react-js.git#master
> 5. 预览地址：https://static-8f2ad662-66cb-4a7c-8fa5-e7e9e2c18047.bspapp.com/wow-app-test/react18.x-base/index.html

开发流程：

```
npm i
npm start
```

##### 2、react-base-vite-ts

> 1. 名称：react-base-vite-ts(react-vite默认模板)
> 2. 描述：react-vite默认模板
> 3. 技术栈：vite+ react18.x + ts
> 4. 仓库地址：https://github.com/webpon/template-react-vite-ts.git#master
> 5. 预览地址：https://static-8f2ad662-66cb-4a7c-8fa5-e7e9e2c18047.bspapp.com/wow-app-test/vite-react18.x-ts/index.html#/

开发流程：

```
npm i
npm run dev
```

##### 3、react-antd-admin-template

> 1. 名称：react-base-vite-ts(react-vite默认模板)
> 2. 描述：react-antd-admin-template(基于 React 和 Ant Design 的后台管理系统模板)
> 3. 技术栈：create-react-app + react-app-rewired + react16.13.x + antd + js
> 4. 仓库地址：https://github.com/NLRX-WJC/react-antd-admin-template.git#master
> 5. 预览地址：https://static-8f2ad662-66cb-4a7c-8fa5-e7e9e2c18047.bspapp.com/wow-app-test/pc/react/react-antd-admin-template/index.html

开发流程：

```
npm i
npm run dev
```

项目运行截图：

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20221204082544199.png" alt="image-20221204082544199" style="zoom:33%;" />

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20221204082752420.png" alt="image-20221204082752420" style="zoom:33%;" />

##### 4、tdesign-react-starter

> 1. 名称：tdesign-react-starter(tdesign官方管理后台模板)
> 2. 描述：TDesign React Starter 是一个基于 tdesign-react，使用 React、Vite2开发，可进行个性化主题配置，旨在提供项目开箱即用的、配置式的中后台项目。
> 3. 技术栈：vite+ react17.x + tdesign + ts
> 4. 仓库地址：https://github.com/Tencent/tdesign-react-starter.git#main
> 5. 预览地址：https://tdesign.tencent.com/starter/react

开发流程：

```
npm i
npm run dev
```

项目运行截图：

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20221204072448525.png" alt="image-20221204072448525" style="zoom:33%;" />

### uniapp小程序

##### 1、uniapp默认模板

> 1. 名称：uniapp默认模板
> 2. 描述：uniapp默认模板 
> 3. 技术栈：vue-cli + Vue2.x + js
> 4. 仓库地址：https://gitee.com/gitopenchina/template-uniapp-vue2-base.git
> 5. 预览地址：暂无

开发流程：

```
npm i
```

```
npm run dev:mp-weixin
```

##### 2、uniapp vite js默认模板

> 1. 名称：uniapp vite js默认模板
> 2. 描述：uniapp vite js默认模板
> 3. 技术栈：vite+ Vue3.x + js
> 4. 仓库地址：https://gitee.com/dcloud/uni-preset-vue.git#vite
> 5. 预览地址：暂无

开发流程：

```
npm i
```

```
npm run dev:mp-weixin
```

##### 3、uniapp vite ts默认模板

> 1. 名称：uniapp vite ts默认模板
> 2. 描述：uniapp vite ts默认模板
> 3. 技术栈：vite+ Vue3.x + ts
> 4. 仓库地址：https://gitee.com/dcloud/uni-preset-vue.git#vite-ts
> 5. 预览地址：暂无

开发流程：

```
npm i
```

```
npm run dev:mp-weixin
```

##### 4、hello uniapp vue2 uni-ui

> 1. 名称：hello uniapp vue2 uni-ui
> 2. 描述：hello uniapp vue2 uni-ui模板
> 3. 技术栈：vuecli + uniapp + vue2 + uni-ui
> 4. 仓库地址：https://gitee.com/gitopenchina/template-hello-uniapp.git
> 5. 预览地址：<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imggh_33446d7f7a26_430.jpg" alt="img" style="zoom:33%;" />

开发流程：

```
npm i
```

```
npm run dev:mp-weixin
```

项目运行截图：

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20221204090631917.png" alt="image-20221204090631917" style="zoom:25%;" />

模板持续更新中...



### 推荐模板请加微信：wx2249096563



