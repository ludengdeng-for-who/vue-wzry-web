<template>
  <div v-if="model">
    <div class="topbar bg-black py-2 px-3 d-flex ai-center">
      <img src="../assets/images/logo.png" height="30" alt="" />
      <div class="px-2 flex-1">
        <span class="text-white">王者荣耀</span>
        <span class="text-white ml-2 fs-lg">攻略战</span>
      </div>
      <div class="text-light  fs-sm">更多英雄 &nbsp;&gt;</div>
    </div>
    <!-- end of top -->
    <div
      class="hero-bg "
      :style="{ 'background-image': `url(${model.banner})` }"
    >
      <div class="bs p-3 info text-white h-100 flex-column jc-end d-flex">
        <div class="fs-sm pb-1">{{ model.title }}</div>
        <div class="fs-xl pb-1">{{ model.type }}</div>
        <div class="fs-sm pb-1">
          {{ model.categories.map(v => v.type).join("/") }}
        </div>
        <div class="d-flex ai-center jc-between ">
          <div>
            <span>难度</span>
            <span class="bange  bg-primary">{{ model.scores.attack }}</span>
            <span>技能</span>
            <span class="bange  bg-info">{{ model.scores.skills }}</span>
            <span>攻击</span>
            <span class="bange  bg-danger">{{ model.scores.difficult }}</span>
            <span>生存</span>
            <span class="bange  bg-green">{{ model.scores.survive }}</span>
          </div>
          <router-link to="/" tag="div" class="text-grey fs-sm"
            >皮肤:2 &gt;
          </router-link>
        </div>
      </div>
    </div>
    <!-- end of banner -->
    <div class="px-3 bg-white">
      <div class="d-flex jc-around bg-white nav pt-3 pb-2 fs-lg">
        <div class="nav-reserve active">英雄初识</div>
        <div>进阶攻略</div>
      </div>
      <div class="just-border"></div>
      <div class="d-flex jc-between bg-white nav pt-3 pb-2 fs-lg">
        <router-link
          class="button p-2 flex-1 py-2 bg-white fs-lg d-flex ai-center jc-around"
          tag="button"
          to="/"
          ><i class="iconfont icon-shipin fs-xl "></i> 英雄介绍视频</router-link
        >
        <router-link
          class="button p-2 flex-1 ml-2 py-2  bg-white fs-lg d-flex ai-center jc-around"
          tag="button"
          to="/"
          ><i class="iconfont icon-tupian "></i> 一图识英雄</router-link
        >
      </div>
      <div class="skills">
        <div class="d-flex jc-around pt-4">
          <div
            class="skills-item"
            v-for="(item, index) in model.skills"
            :key="item.name"
            @click="currenSkillsIndex = index"
            :class="{ active: currenSkillsIndex === index }"
          >
            <img :src="item.icon" alt="" />
          </div>
        </div>
        <div class="skills-info">
          <div class="skills-top  mt-4">
            <strong class="fs-xl">{{
              model.skills[currenSkillsIndex].name
            }}</strong>
            <span class="text-grey  fs-sm ml-5"
              >(冷却值：{{
                model.skills[currenSkillsIndex].delay
              }}
              &nbsp;消耗：{{ model.skills[currenSkillsIndex].cost }})</span
            >
            <div class="skills-des mt-3 fs-lg-1 text-grey-1">
              {{ model.skills[currenSkillsIndex].description }}
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
    <!-- end of skills -->
    <div class="items">
      <mCard plugin title="出装推荐" iconName="zhuangbei">
        <div class="fs-xl mt-2 text-grey-1">顺风出装</div>
        <div class="d-flex jc-around  mt-2 text-center ">
          <div class="item-icon" v-for="item in model.items1" :key="item.name">
            <img :src="item.icon" alt="" />
            <div class="fs-xxs my-2">{{ item.type }}</div>
          </div>
        </div>
        <div class="just-border"></div>
        <div class="fs-xl mt-2 text-grey-1">逆风出装</div>
        <div class="d-flex jc-around  mt-2 text-center ">
          <div class="item-icon" v-for="item in model.items2" :key="item.name">
            <img :src="item.icon" alt="" />
            <div class="fs-xxs mt-1">{{ item.type }}</div>
          </div>
        </div>
      </mCard>
    </div>
    <!-- end of items -->
    <mCard plugin title="使用技巧" iconName="cc-menu-circle">
      <div class="tigs fs-lg text-grey-1">{{ model.usageTips }}</div>
    </mCard>
    <mCard plugin title="对抗技巧" iconName="cc-menu-circle">
      <div class="tigs fs-lg text-grey-1">{{ model.battleTips }}</div>
    </mCard>
    <mCard plugin title="团战思路" iconName="cc-menu-circle">
      <div class="tigs fs-lg text-grey-1">{{ model.teamTips }}</div>
    </mCard>
    <mCard plugin title="最佳搭档" iconName="cc-menu-circle">
      <div  class="parents">
        <div  class="d-flex ai-center pb-2" v-for="item in model.parents" :key="item.type">
        <img :src="item.hero.avatar" alt="">
        <div class="pl-2">{{item.description}}</div>
      </div>
      </div>
    </mCard>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      required: true
    }
  },
  data() {
    return {
      model: null,
      currenSkillsIndex: 0
    };
  },
  methods: {
    async foech() {
      const result = await this.$http.get(`hero/${this.id}`);
      this.model = result.data;
    }
  },
  created() {
    this.foech();
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/vasiable";

.hero-bg {
  height: 50vw;
  background: #fff no-repeat top center;
  background-size: auto 100%;
  .bange {
    margin: 0 0.2rem;
    display: inline-block;
    line-height: 1.1rem;
    text-align: center;
    width: 1.1rem;
    height: 1.1rem;
    font-size: 0.7rem;
    border-radius: 50%;
  }
  .info {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  }
}
.iconfont {
  font-size: 1.5rem;
  color: map-get($map: $colors, $key: primary);
}

.skills {
  .skills-des {
    line-height: 1.5rem;
  }
  .skills-item {
    height: 50px;
    border: 3px solid #fff;
    border-radius: 50%;
  }
  .skills-item img {
    width: 50px;
    height: 50px;
  }
  .active {
    border-color: map-get($map: $colors, $key: primary);
  }
}
.items {
  .item-icon img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
}
.tigs {
  line-height: 1.5rem;
  font-weight: 500;
}
.parents img{
  width: 50px;
  height: 50px;
}
</style>
