import { Experience, Info } from '@src/types';

export const info: Info = {
  name: '林雨钦',
  position: '前端开发',
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
];

export const internship: Experience = {
  key: 'analysis',
  title: '安赛斯（北京）科技有限公司',
  duration: '2019年03月 - 2020年07月',
  description: '软件开发实习生 Web开发部',
  content: [
    '参与内部系统的开发与维护',
    '负责内部系统在微信小程序端的设计与落地',
  ],
};

export const work: Experience = {
  key: 'tx',
  title: '腾讯科技（深圳）有限公司',
  duration: '2021年06月 - 2022年06月',
  description: '前端开发 工程效能部',
  content: [
    '参与「TTES 技术人才洞察系统」、「TMAP 业务数字化管理平台」的系统设计与需求开发',
    '独立负责内部平台「技术原力」公众号前端部分',
  ],
};

export const projects: Experience[] = [
  {
    key: 'ttes',
    title: 'TTES 技术人才洞察系统',
    duration: '2021年06月 - 2022年02月',
    content: [
      '项目描述：标准化采集研发人员日常活动数据，建立技术人才评价模型体系，辅助技术评价流程。',
      '技术实现：React、Typescript、Less、NestJS',
      [
        '责任描述：',
        '业务需求、功能模块的开发',
        '提取公共 Hook，复用宽表的分页、搜索筛选功能',
        '使用 Echarts 完成定制化图表需求开发',
        '规范、完善 ESlint，并增加 StyleLint 规范样式代码',
      ],
    ],
  },
  {
    key: 'tmap',
    title: 'TMAP 业务数字化管理平台',
    duration: '2022年02月 - 2022年06月',
    content: [
      '项目描述：基于研效数据指标体系，形成业务平台化能力。通过报告和指标形式，完成业务、产品、研发E2E的度量，实现业务端到端数字化管理。',
      '技术实现：React、Typescript、Less、NestJS',
      [
        '责任描述：',
        '业务需求、功能模块的开发',
        '使用懒加载，开发、优化大数据量树形业务列表组件',
        '负责富文本编辑器的技术选型，以及在项目的定制化实现',
        '参与项目中事件中心的设计与开发，实现跨组件的数据通信',
        '对协作开发同事的代码提交进行 Code Review',
      ],
    ],
  },
];
