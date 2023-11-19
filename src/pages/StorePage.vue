//Single file component
<template>
  <my-button @click="showModal">
    Create post
  </my-button>

  <my-button @click="loadMorePosts" class="get-posts">
    Get Posts
  </my-button>

  <my-select :model-value="selectedSort" 
             @update:model-value="setSelectedSort"
             :options="sortOptions"
  >
  </my-select>

  <my-input :model-value="searchQuery" 
            @update:model-value="setSearchQuery"
            placeholder="Searching..." 
            v-focus
  >
  </my-input>

  <div v-if="!isLoadingPosts" class="post">
    <my-dialog v-model:show="dialogVisible">
      <PostForm @create="createPost"/>
    </my-dialog>

    <PostList :posts="searchandSortFields" @remove="removePosts" />
  </div>

  <div v-else style="margin-top:20px">
    Загрузка...
  </div>
  <div class="observer" v-intersection="loadMorePosts">
    Load more pages
  </div> 
</template>

<script>
  import PostForm from "@/components/PostForm.vue";
  import PostList from "@/components/PostList.vue";

  import {mapState, mapGetters, mapActions, mapMutations} from 'vuex';

  export default {
    components: {
      PostForm,
      PostList
    },
    data() {
      return {
        dialogVisible: false
      }
    },
     methods: {
      ...mapMutations({
        setPage: 'post/setPage',
        setSearchQuery: 'post/setSearchQuery',
        setSelectedSort: 'post/setSelectedSort'
      }),
      ...mapActions({
        loadMorePosts: 'post/loadMorePosts',
      }),
      createPost(post) {
        this.posts.push(post);
        this.dialogVisible = false;
      },
      removePosts(post) {
        this.posts = this.posts.filter(p => p.id != post.id)
      },

      showModal() {
        this.dialogVisible = true;
      },
    },
    mounted() {
      this.loadMorePosts();
    }, 
    computed: {
      ...mapState({
        posts: state => state.post.posts,
        isLoadingPosts: state => state.post.isLoadingPosts,
        selectedSort: state => state.post.selectedSort,
        searchQuery: state => state.post.searchQuery,
        limit: state => state.post.limit,
        totalPages: state => state.post.totalPages,
        page: state => state.post.page,
        sortOptions: state => state.post.sortOptions
      }),
      ...mapGetters({
        sortedPost: 'post/sortedPost',
        searchandSortFields: 'post/searchandSortFields'
      }),
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
