<template>
  <div>
    <h1>
      It is main page
    </h1>

    <div class="header">
      <router-link to="/about">About</router-link>
      <router-link to="/posts">Posts</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  .header {
    display: flex;
  }

  .header a { 
    margin-left: 20px;
  }
</style>