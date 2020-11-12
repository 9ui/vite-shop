import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return () => {
      return (
        <van-tabbar v-model="home" active-color="#ee0a24" inactive-color="#666">
          <van-tabbar-item name="home" icon="wap-home" replace to="/home">
            首页
          </van-tabbar-item>
          <van-tabbar-item name="category" icon="wap-nav" replace to="/category">
            分类
          </van-tabbar-item>
          <van-tabbar-item name="cart" icon="cart" replace to="/cart">
            购物车
          </van-tabbar-item>
          <van-tabbar-item name="my" icon="manager" replace to="/my">
            我的
          </van-tabbar-item>
        </van-tabbar>
      );
    };
  },
});
