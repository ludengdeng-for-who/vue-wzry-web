<template>
  <div id="article" v-if="model"  >
    <div  class="d-flex ai-center px-1 py-3 article-nav">
      <i class="iconfont icon-fanhui" @click="$router.go(-1)"></i>
      <strong  class="fs-sm flex-1 text-info-1  pl-2">{{model.type }}</strong>
      <div class="fs-xs text-grey ">{{model.createdAt | date }}</div>
    </div>
    <div class="px-3 fs-xl articles-body">
      <div v-html="model.body"></div>
    </div>
  </div>
</template>

<script>
import dayjs  from 'dayjs';
export default {
  props:{
    id:{
      require:true
    }
  },
  data(){
    return {
      model:null
    }
  },
  methods:{
    async foech(){
      const result = await this.$http.get(`articles/${this.id}`);
      this.model = result.data;
      console.log(result);
      
    }
  },
  created(){
    this.foech();
  },
  filters:{
    date(val) {
      const res = dayjs(val).format("YYYY/MM/DD");
      return res;
    }
  }
}
</script>

<style lang='scss'>
@import "../assets/css/vasiable";
.article-nav{
  border-bottom: 1px solid $base-border-color;
}
.articles-body{
  line-height: 2.2rem;
}
</style>