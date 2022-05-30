import { Experience, Info } from '@src/types';

export const info: Info = {
  name: '林雨钦',
  position: '前端开发',
  phoneNumber: '15623958611',
  email: 'linyu_qin@163.com',
  github: ['github.com/izumiiAoba/notebooks_cloud', 'github.com/izumiiAoba/notebooks_cloud'],
};

export const education: Experience = {
  key: 'education',
  title: '武汉理工大学',
  duration: '2017年09月 - 2021年06月',
  description: '软件工程 本科 计算机科学与技术学院',
  content: [
    '3.5/5.0 专业前30%',
    '相关课程：数据结构、数据库原理、计算机网络、Python语言程序设计',
  ],
};

export const skills: string[] = [
  '熟悉 HTML5，CSS3，JavaScript，React等前端开发技术',
  '了解 Redux，Ant Design，微信小程序，Bizcharts',
  '了解 Git 版本控制工具',
  '了解 Docker 容器技术',
  '通过 CET-6考试，能够顺利阅读英文文档',
];

export const internship: Experience = {
  key: 'internship',
  title: '安赛斯（北京）科技有限公司',
  duration: '2019年03月 - 2020年07月',
  description: '软件开发实习生 Web开发部',
  content: [
    '参与测序管理系统的开发与维护',
    '参与后台管理系统的设计与开发',
    '参与微信小程序端的测序管理系统的设计与开发',
  ],
};

export const projects: Experience[] = [
  {
    key: 'sms',
    title: '测序管理系统（微信小程序端）',
    duration: '2020年05月 - 2020年07月',
    content: [
      '项目描述：将测序管理系统中销售相关的功能，以及基本的用户功能，在微信小程序端实现。',
      '技术实现：微信小程序，Laravel，JWT，MySQL，JSON',
      [
        '责任描述：',
        '用户相关功能：登录验证和Token校验',
        '界面设计和实现',
        '工具函数编写',
      ],
    ],
  },
  {
    key: 'wx-program',
    title: '任务分配管理小程序',
    duration: '2020年03月 - 2020年05月',
    content: [
      '项目描述：对一组定期打卡/考勤制度的自动化实现服务。可实现：自动分配任务，考勤打卡，自定义考勤模板',
      '技术实现：微信小程序，微信云开发能力，Vant组件库',
      [
        '责任描述：',
        '部分页面设计与实现',
        '过渡效果和动画实现',
      ],
    ],
  },
];
