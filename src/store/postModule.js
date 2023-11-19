export const postModule = {
  state: () => ({
    posts: [],
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
  }),
  getters: {
    sortedPost(state) {
      return [...state.posts].sort((post1, post2) => post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]))
    },

    searchandSortFields(state, getters) {
     return getters.sortedPost.filter((post) => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
    }
  },
  mutations: {
    setPost(state, posts) {
      state.posts = posts;
    },
    setLoadingPosts(state, bool) {
      state.isLoadingPosts = bool;
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages
    },
    setPage(state, page) {
      state.page = page;
    }
  },
  actions: {
    async loadMorePosts({state, commit}) {
      try {
      commit('setPage', state.page + 1);

      const result = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${state.page}`); 
      const resutJson =  await result.json();

      commit('setTotalPages', Math.ceil(result.headers.get('X-Total-Count')/state.limit));

      commit('setPost', [...state.posts, ...resutJson]);

      commit('setLoadingPosts', false);
      } catch(err) {
        console.log(err, "ERR"); // TypeError: failed to fetch
      }
    },
  },
  namespaced: true
}