// 公共页面
const common = [
  {
    index: '/PageOne',
    icon: 'i-carbon:bot',
    title: 'menu.PageOne',
  },
]

// user权限
export const userList = [
  ...common,
]

// admin权限
export const adminList = [
  ...common,
  {
    index: '/PageTwo',
    icon: 'i-carbon:battery-half',
    title: 'menu.PageTwo',
    children: [
      {
        index: '/PageTwo',
        title: 'menu.PageTwo',
      },
      {
        index: '/PageTwo/info',
        title: 'menu.PageTwoInfo',
      },
    ],
  },
]