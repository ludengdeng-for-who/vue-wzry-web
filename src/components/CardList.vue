<template>
  <div>
    <mCard :iconName="iconName" :title="title">
      <div class="nav d-flex jc-between mt-3">
        <div
          class="nav-reserve"
          v-for="(item, index) in categories"
          :key="index"
          :class="{active:index === currenIndex}"
          @click="$refs.list.swiper.slideTo(index)"
        >
          <div>{{ item.type }}</div>
        </div>
      </div>
      <div class="mt-3">
        <swiper
          ref="list"
          @slide-change="() => currenIndex = $refs.list.swiper.realIndex"
          :options="{autoHeight:true}"
        >
          <swiper-slide v-for="(category, index) in categories" :key="index">
            <slot name="items" :category="category"></slot>
          </swiper-slide>
        </swiper>
      </div>
    </mCard>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    iconName: { type: String, required: true },
    categories: { type: Array, required: true }
  },
  data() {
    return {
      currenIndex: 0
    };
  }
};
</script>

<style></style>
