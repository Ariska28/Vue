//Single file component
<template>
  <my-button @click="showModal">
    Create post
  </my-button>

  <my-button @click="loadMorePosts" class="get-posts">
    Get Posts
  </my-button>

  <my-select v-model="selectedSort" :options="sortOptions">
  </my-select>

  <my-input v-model="searchQuery" placeholder="Searching..." v-focus>
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

  <!-- <div class="page">
    <div class="page__wrapper"
         v-for="pageNumber in totalPages" 
         :key="pageNumber"
         :class="{'is-actieve': page === pageNumber}"
         @click = "changePage(pageNumber)"
    >
     {{ pageNumber }}
    </div>
  </div> -->
</template>

<script>
  import PostForm from "@/components/PostForm.vue";
  import PostList from "@/components/PostList.vue";

  export default {
    components: {
      PostForm,
      PostList
    },
    data() {
      return {
        posts: [],
        dialogVisible: false,
        isLoadingPosts: true,
        selectedSort: ' ',
        searchQuery: '',
        limit: 10,
        totalPages: 0,
        page: 0,
        sortOptions: [
          { value: 'title', name: 'по названию'},
          { value: 'body',  name: 'по тексту'}
        ]
      }
    },
     methods: {
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

      async loadMorePosts() {
        this.page = this.page + 1;
        const result = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${this.page}`); 
        const resutJson =  await result.json();
 
        this.totalPages = Math.ceil(result.headers.get('X-Total-Count')/this.limit);

        this.posts = [...this.posts, ...resutJson] ;

        this.isLoadingPosts = false;
      },

      // async getPosts() {
      //   this.isLoadingPosts = true;
      //   const result = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${this.page}`);  
 
      //   this.totalPages = Math.ceil(result.headers.get('X-Total-Count')/this.limit);

      //   this.posts = await result.json();
        
      //   this.isLoadingPosts = false;
      // },

      // changePage(activePage) {
      //   this.page = activePage; 

      //   this.getPosts();
      // },
    },
    mounted() {
      this.loadMorePosts();
    }, 
    computed: {
      sortedPost() {
        return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
      },

      searchandSortFields() {
       return this.sortedPost.filter((post) => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
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
