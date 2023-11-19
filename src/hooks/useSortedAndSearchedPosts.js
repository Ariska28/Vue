import {ref, computed} from 'vue';

export function useSortedAndSearchedPosts(sortedPosts) {
  const searchQuery = ref('');

  const sortedAndSearchedPosts = computed(() => {
    return sortedPosts.value.filter((sortedPost) => sortedPost.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
  })

  return {
    searchQuery, sortedAndSearchedPosts
  }
}