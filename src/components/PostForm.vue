<template>
    <form class="post-form" @submit.prevent>
        <my-input
            :value="post.title"
            v-focus
            @input="post.title = $event.target.value"
            placeholder="Input title" 
        ></my-input>

        <my-input
            placeholder="Input description" 
            v-model="post.body"
        ></my-input>

        <my-button @click="createPost">
          Submit 
        </my-button>
    </form>
</template>

<script>
  export default {
    data() {
      return {
        post: {
          title: '',
          body: ''
        }
      }
    },
    methods: {
      createPost() {
        this.post.id = Date.now();
        this.$emit('create', this.post)
        this.post = {
          title: '',
          body: ''
        }
      }
    },
    // watch: {
    //   post: {
    //     handler(newValue) {
    //       console.log(newValue);
    //     },
    //     deep: true
    //   }
    // }
  }
</script>


<style scoped>
  .post-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>