<template>
  <div id="home">
    <swiper :options="swiperOption " autoplay>
      <swiper-slide>
        <img class="w-100" src="//ossweb-img.qq.com/upload/adw/image/20200220/8fc5f6cb4931514b8a7847e359e86476.jpeg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="//ossweb-img.qq.com/upload/adw/image/20200219/a08b97efe43eb744ae2e536ca2af1c4e.jpeg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="//ossweb-img.qq.com/upload/adw/image/20200220/dc04ab70c5c037d4455908042c60f9dc.jpeg" alt="" />
      </swiper-slide>
      <div
        class="swiper-pagination pagination-home text-right"
        slot="pagination"
      ></div>
    </swiper>
    <!-- end of swiper -->
    <div class="nav-icons bg-white text-center mt-3 pt-3">
      <div class="d-flex flex-wrap  ai-center">
        <div class="nv-item mb-3 text-grey" v-for="n in classes" :key="n.title">
          <i class="sprite  pt-2" :class="n.icon"></i>
          <div>{{n.title}}</div>
        </div>
      </div>
      <div class="bg-light py-2">
        <i class="sprite sprite-arrow pr-1"></i> 收起
      </div>
    </div>
    <!-- end of nav icons -->

    <m-card-list
      iconName="cc-menu-circle"
      title="新闻咨询"
      :categories="listDatas"
    >
      <template #items="{category}">
        <router-link
          tag="div"
          :to="`/articles/${item._id}`"
          class=" d-flex ai-center py-3 fs-lg t"
          v-for="(item, index) in category.newsList"
          :key="index"
        >
          <span>[{{ category.type }}]</span>
          <span class="px-1">|</span>
          <span class="flex-1 font-es pr-2">{{ item.type }}</span>
          <span class="fs-xs">{{ item.updatedAt | date }}</span>
        </router-link>
      </template>
    </m-card-list>
    <!-- end of 新闻咨询 -->
    <m-card-list
      iconName="card-hero"
      title="英雄列表"
      :categories="heroesDatas"
    >
      <template #items="{category}">
        <div class="d-flex flex-wrap" style="margin:-.5rem">
          <router-link
          tag="div"
          :to="`/hero/${item._id}`"
            v-for="(item, index) in category.heroList"
            :key="index"
            class="text-center p-2"
            style="box-sizing:border-box; width:20%;"
          >
            <img :src="item.avatar" alt="" class="w-100" />
            <div>{{ item.type }}</div>
          </router-link>
        </div>
      </template>
    </m-card-list>
    <!-- end of heroes -->
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".pagination-home"
        },
        autoplay:true,
        autoplayDisableOnInteraction:false,
        loop:true
      },
      listDatas: [],
      heroesDatas: [],
      classes:[{title:'爆料站',icon:'sprite-news'},{title:'故事站',icon:'sprite-story'},{title:'周边商城',icon:'sprite-shop'},{title:'体验服',icon:'sprite-tiyanfu'},
      { title:'新手',icon:'sprite-player'},{title:'传承',icon:'sprite-chuancheng'},
      {title:'模拟',icon:'sprite-moni'},{title:'王者营地',icon:'sprite-wangzhe'},{title:'公众号',icon:'sprite-public'},{title:'版本',icon:'sprite-banben'},
      {title:'对局',icon:'sprite-duiju'},{title:'无限王者团',icon:'sprite-wuxian'},{title:'创意互动营',icon:'sprite-chuangyi'}]
    };
  },
  methods: {
    async foech() {
      const result = await this.$http.get("news/list");
      this.listDatas = result.data;
    },
    async foechHeroes() {
      const result = await this.$http.get("heroes/list");
      this.heroesDatas = result.data;
      
    }
  },
  created() {
    this.foech();
    this.foechHeroes();
  },
  filters: {
    date(val) {
      const res = dayjs(val).format("MM/DD");
      return res;
    }
  }
};
</script>

<style lang="scss">
@import "../assets/css/vasiable";
.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    background: map-get($map: $colors, $key: "white");
    &.swiper-pagination-bullet-active {
      background: map-get($map: $colors, $key: "info");
    }
  }
}
.nav-icons {
  .nv-item {
    width: 24.8%;
    border-right: 1px solid $base-border-color;
    &:nth-child(4n) {
      border-right: none;
    }
  }
}
</style>
