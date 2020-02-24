<template>
  <div id="card" class=" mt-3  bg-white  p-3 ">
    <div class="d-flex ai-center pb-3 card-header">
      <i class="iconfont" :class="`icon-${iconName}`"></i>
      <div class="fs-xl flex-1 px-3">{{ title }}</div>
      <i v-if="!plugin" class="iconfont icon-menu1  " style="font-size:24px;"></i>
    </div>
    <div v-if="!plugin" class="just-border"></div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    iconName: { type: String, required: true },
    plugin:{type:Boolean}
  }
};
</script>

<style lang='scss'>
@import "../assets/css/vasiable";
// .card-header{
//     border-bottom: 1px solid $base-border-color;
// }
</style>
