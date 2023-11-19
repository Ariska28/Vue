//Single file component
<template>
  <my-select v-model="selectedSort" :options="sortOptions">
  </my-select>

  <my-input v-model="searchQuery" placeholder="Searching..." v-focus>
  </my-input>

  <div v-if="!isLoadingPosts" class="post">
    <my-dialog v-model:show="dialogVisible">
      <PostForm/>
    </my-dialog>

    <PostList :posts="sortedAndSearchedPosts"/>
  </div>

  <div v-else style="margin-top:20px">
    Загрузка...
  </div>
</template>

<script>
  import PostForm from "@/components/PostForm.vue";
  import PostList from "@/components/PostList.vue";
  import {usePosts} from '@/hooks/usePosts.js';
  import {useSortedPosts} from '@/hooks/useSortedPosts.js';
  import {useSortedAndSearchedPosts} from '@/hooks/useSortedAndSearchedPosts.js';

  export default {
    components: {
      PostForm,
      PostList
    },
    data() {
      return {
        dialogVisible: false,
        sortOptions: [
          { value: 'title', name: 'по названию'},
          { value: 'body',  name: 'по тексту'}
        ]
      }
    },

    setup()  {
      const {posts, totalPages, isLoadingPosts} = usePosts(10);
      const {sortedPosts, selectedSort} = useSortedPosts(posts);
      const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts)

      return {
        posts,
        totalPages,
        isLoadingPosts,
        sortedPosts,
        selectedSort,
        searchQuery,
        sortedAndSearchedPosts
      }
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .get-posts {
    margin-left: 30px;
  }

  .page {
    display: flex;
    justify-content: center;
  }

  .page__wrapper {
    padding: 15px;
    border: 1px solid black;
  }

  .page__wrapper.is-actieve {
    background-color: gray;
    color: white;
  }

  .observer {
    width: 100%;
    margin: 30px;
    height: 50px;
  }
</style>
