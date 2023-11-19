<template>
  <transition-group v-if="posts.length > 0" class="post-list" name="post-list" tag="ul">
    <PostItem  
      class="post-list-item"
      v-for="post in posts" 
      :key="post.id" 
      :post="post"
      @remove="$emit('remove', post)"
    />
</transition-group>

  <h2 v-else>
    Posts list is empty
  </h2>
</template>

<script>
  import PostItem from "./PostItem.vue";

  export default {
    components: {
      PostItem
    },
    props: {
      posts: {
        type: Array,
        required: true,
      }
    }
  }
</script>

<style scoped>
  .post-list {
    list-style-type: none;
    widows: 100%;
    padding: 30px;
  }

  .post-list-item {
    transition: all 0.5s;
  }

  .post-list-enter, .post-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }

</style>
