<template>
  <div class="nav">
    <div @click="$router.push('/')">
      Vue 3
    </div>
    <my-button @click="$router.push('/about')">About</my-button>
    <my-button @click="$router.push('/posts')">Posts</my-button>
    <my-button @click="$router.push('/store')">Store</my-button>
    <my-button @click="$router.push('/composition')">Composition</my-button>
  </div>
</template>

<script>
  export default {
    name: 'my-nav',
  }
</script>

<style scoped>
  .nav {
    padding: 20px;
    background-color: gray;
  }
</style>