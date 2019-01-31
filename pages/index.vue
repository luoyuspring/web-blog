<template>
  <section class="container">
    <div class="logo">
      <img src="@/assets/images/logo.png" alt="">
    </div>
    <div class="test" v-html="content"></div>
  </section>
</template>

<script>
import { test } from '@/api/test'

export default {
  // async asyncData (context) {
  //   let data = await context.$axios({
  //     url: '/teachPlatform/conf/getYear',
  //     headers: {'X-User-Token': '08fd81c956db48f0a4ca29ccc6b5b883'}
  //   })
  //   return {content: data}
  // },
  asyncData (context) {
    return test({input: 'K11864'}).then(res => {
      console.log(res);
      
      return {content: res.data.listInfo}
    })
  },

  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 90vw;
  margin: 0 auto;
  .logo {
    width: 300px;
    margin: 0 auto;
    background-color: #f00;
    img {
      height: 50px;
    }
  }
  .test {
    width: 100%;
    text-align: center;
    font-size: 2rem;
    margin: 0 auto;
    border-radius: 5px;
    background: linear-gradient(90deg,#17aafe,#42baff);
  }
}
</style>