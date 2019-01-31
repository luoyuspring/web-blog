<template>
  <div>
    <div class="header"></div>
    <nuxt />
    <div class="footer"></div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/variable.scss';
@media (min-width: 1200px) {
  .header {
    height: 80px;
    background-color: $header-color;
  }
}
@media (min-width: 1024px) and (max-width: 1200px) {
  .header {
    height: 80px;
    background-color: #f00;
  }
}
@media (min-width: 900px) and (max-width: 1024px) {
  .header {
    height: 80px;
    background-color: #0f0;
  }
}
@media (min-width: 768px) and (max-width: 900px) {
  .header {
    height: 80px;
    background-color: #00f;
  }
}
@media (min-width: 480px) and (max-width: 768px) {
  .header {
    height: 80px;
    background-color: #ff0;
  }
}
@media (min-width: 320px) and (max-width: 480px) {
  .header {
    height: 80px;
    background-color: #0ff;
  }
}
</style>
