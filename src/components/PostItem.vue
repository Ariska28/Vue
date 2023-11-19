<template>
  <li class="post-list__item">
    <div class="post-list__item-text">
      <span>{{ post.id }}</span>
      <span>{{ post.title }}</span>
      <span>{{ post.body }}</span>
    </div>

    <div class="post-list__item-btns">
      <my-button class="post-list__item-btn"
                @click = "$router.push(`/posts/${post.id}`)"    
                style= "margin-right:20px"    
      >
        Открыть
      </my-button>

      <my-button class="post-list__item-btn"
                @click = "$emit('remove', post)"        
      >
        Удалить
      </my-button>
    </div>
  </li>
</template>

<script>
  export default {
    props: {
      post: {
        type: Object,
        required: true,
      }
    }
  }
</script>

<style scoped>
  .post-list__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding: 20px;
    border: 1px solid #2c3e50;
    background-color: rgb(251, 251, 251);
  }

  .post-list__item-text span {
    text-align: left;
    display: block;
  }

  .post-list__item-btns {
    display: flex;
    justify-content: space-between;
  }

  .post-list__item-btn {
    background-color: rgb(139, 63, 63);
  }
</style>
    