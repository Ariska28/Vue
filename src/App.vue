<template>
  <my-nav>
  </my-nav>
  <div id="app">
    <router-view>
    </router-view>
  </div>
</template>

<script>
import MyNav from '@/components/UI/MyNav.vue';
  export default {
    components: {
      MyNav
    }
  }
</script>

<style>
  #app {
  max-width: 1200px;
  margin: auto;
  }

  .nav button {
    margin-right: 20px;
  }
</style>