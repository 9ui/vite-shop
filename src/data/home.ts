export interface TabsType {
  navId?: string; // id
  icon: string; // 图标
  path: string; // 路径
  navName: string; // tab名
}

export interface SwiperType {
  img: string;
  link?: string;
  path?: string;
}

export const tabs: TabsType[] = [
  {
    navId: '1',
    icon:
      'https://m.360buyimg.com/mobilecms/jfs/t5668/159/160398199/14046/acfe1fa3/591d9424N068a7ad0.png',
    path: '/supermarket/home',
    navName: '小美超市',
  },
  {
    navId: '2',
    path: '',
    icon:
      'https://m.360buyimg.com/mobilecms/jfs/t11425/73/2288282326/13451/e11c7697/5a14d167Ne5414496.png',
    navName: '全球购',
  },
  {
    navId: '3',
    path: '/apparel/home',
    icon:
      'https://m.360buyimg.com/mobilecms/jfs/t5656/351/153181074/12227/e35aa8d/591d9456Naa85e195.png',
    navName: '小美服饰',
  },
  {
    navId: '4',
    path: '',
    icon:
      'https://m.360buyimg.com/mobilecms/jfs/t18070/307/838093843/18240/52379b09/5aaa4e87N6a8fed40.png',
    navName: '小美生鲜',
  },
];

export const banners: SwiperType[] = [
  {
    img:
      'https://img1.360buyimg.com/da/jfs/t15709/11/2430150336/220545/3f5cc0e3/5aab3c69Nc474a047.jpg',
  },
  {
    img:
      'https://img1.360buyimg.com/da/s750x366_jfs/t19675/228/840583646/175061/a1f5f172/5aabb773Neea35063.jpg',
  },
  {
    img:
      'https://m.360buyimg.com/mobilecms/s750x366_jfs/t14707/84/2542830077/174762/b216ac33/5aa88d13N11c283cb.jpg!q70.jpg',
  },
  {
    img:
      'https://img1.360buyimg.com/da/s750x366_jfs/t16189/213/2411125927/99415/ff4dd5ac/5aa895a3N2c1ef4c1.jpg',
  },
];
