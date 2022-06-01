import { Experience, Info } from '@src/types';

export const info: Info = {
  name: '林雨钦',
  position: '前端开发',
  age: '22岁',
  expectedWorkplace: '广东地区',
  phoneNumber: '19128451011',
  email: 'linyu_qin@163.com',
  github: ['github 学习笔记', 'https://github.com/izumiiAoba/learning'],
};

export const education: Experience = {
  key: 'education',
  title: '武汉理工大学',
  duration: '2017年09月 - 2021年06月',
  description: '软件工程 本科 计算机科学与技术学院',
  content: [
    '3.5 / 5.0 专业前30%',
    '相关课程：数据结构、计算机网络、操作系统、编译原理',
  ],
};

export const skills: string[] = [
  '熟悉 React、Typescript、Less 等前端开发技术',
  '了解并日常使用 Ant Design、ECharts 等工具库',
  '了解并使用 Webpack 构建前端应用，并配合 ESLint、StyleLint 等工具规范代码风格',
  '了解 NodeJS、Express、NestJS，并在项目中使用',
];

export const internship: Experience = {
  key: 'analysis',
  title: '安赛斯（北京）科技有限公司',
  duration: '2019年03月 - 2020年07月',
  description: '前端开发实习生',
  content: [
    '参与「SMS 测序管理系统」的开发与维护',
    '负责「SMS」在微信小程序端的设计与落地',
  ],
};

export const work: Experience = {
  key: 'tx',
  title: '腾讯科技（深圳）有限公司',
  duration: '2021年06月 - 2022年06月',
  description: '前端开发',
  content: [
    '主导「技术原力」公众号的系统设计与需求开发',
    '参与「TTES 技术人才洞察系统」、「TMAP 业务数字化管理平台」的系统设计与需求开发',
  ],
};

export const projects: Experience[] = [
  {
    key: 'tmap',
    title: 'TMAP 业务数字化管理平台',
    duration: '2022年02月 - 2022年06月',
    content: [
      '项目描述：基于研效数据指标体系，形成业务平台化能力。通过报告和指标形式，完成业务、产品、研发E2E的度量，实现业务端到端数字化管理。',
      '技术实现：React、Typescript、Less、NestJS、MobX',
      [
        '责任描述：',
        '业务需求、功能模块的开发；',
        '使用懒加载，开发、优化大数据量树形业务列表组件；',
        '负责富文本编辑器的技术选型，以及在项目中定制化落地。并配置 COS 来实现文本编辑器内的图片粘贴上传、访问；',
        '参与技术调研选型，采用 MobX 管理全局状态。集中管理数据的同时，让组件以细粒度跟踪数据变更，优化渲染过程；',
        '参与项目中事件中心的设计与开发，实现跨组件的数据通信，完善整个系统的数据管理与通信；',
      ],
    ],
  },
  {
    key: 'ttes',
    title: 'TTES 技术人才洞察系统',
    duration: '2021年06月 - 2022年02月',
    content: [
      '项目描述：标准化采集技术人员研发活动数据，建立技术人才评价模型体系，辅助技术评价流程。',
      '技术实现：React、Typescript、Less、NestJS、React-Query',
      [
        '责任描述：',
        '和产品评审需求实现；',
        '和交互设计沟通页面细节；',
        '和后端开发同事讨论接口定义；',
        '对协作开发同事的代码提交进行 Code Review；',
        '提取公共 Hook，复用宽表的分页、搜索筛选功能；',
        '调研引入 React-Query，实现透明化的请求结果缓存；',
        '使用 Echarts 完成定制化图表需求开发，实现了如：饼图均匀分布、柱状图滚动条；',
        '规范、完善 ESlint，并增加 StyleLint 规范样式代码；',
      ],
    ],
  },
];
