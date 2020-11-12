import type { MenuModule } from '/@/router/types.d';

const menu: MenuModule = {
  orderNo: 10,
  menu: {
    name: 'Mian',
    path: '/',
    children: [
      {
        path: '/home',
        name: '主页',
      },
      {
        path: '/category',
        name: '分类',
      },
      {
        path: '/cart',
        name: '购物车',
      },
      {
        path: '/my',
        name: '个人主页',
      },
    ],
  },
};
export default menu;
