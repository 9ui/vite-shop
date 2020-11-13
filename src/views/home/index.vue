<template>
  <!-- search -->
  <van-sticky>
    <van-search v-model="value" placeholder="请输入搜索关键词" />
  </van-sticky>
  <!-- swiper -->
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="(b, index) in banners" :key="index">
      <img :src="b.img" class="swiper-img"
    /></van-swipe-item>
  </van-swipe>
  <!-- tabs -->
  <van-grid square :border="false" clickable class="home-grid">
    <van-grid-item v-for="(item, index) in tabs" :key="index" :text="item.navName">
      <template #icon>
        <van-image :src="item.icon" class="home-tab_icon" />
      </template>
    </van-grid-item>
  </van-grid>
</template>

<script lang="ts">
  import { reactive, toRefs, defineComponent, onMounted } from 'vue';
  import { tabs, banners } from '../../mock/home';
  export default defineComponent({
    setup() {
      const homeData = reactive({
        value: '',
        tabs,
        banners,
      });
      onMounted(() => {
        console.log(homeData.tabs);
      });
      return {
        onMounted,
        ...toRefs(homeData),
      };
    },
  });
</script>

<style lang="less">
  /** swiper */
  .my-swipe .van-swipe-item {
    font-size: 20px;
    line-height: 150px;
    color: #fff;
    text-align: center;
    background-color: #39a9ed;
  }

  .swiper-img {
    display: block;
    width: 100%;
  }

  /** tab */
  .home-grid {
    .van-grid-item__content {
      padding: 0;
      line-height: 22px;
    }

    .home-tab_icon {
      width: 35px;
      height: 35px;
    }
  }
</style>
