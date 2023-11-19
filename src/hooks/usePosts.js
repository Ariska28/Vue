import { onMounted, ref } from "vue";

export function usePosts(limit) {
  const posts = ref([]);
  const totalPages = ref(0);
  const isLoadingPosts = ref(true);
  const fetching = async () => {
    try {
      const result = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=1`); 
      const resutJson =  await result.json();
  
      totalPages.value = Math.ceil(result.headers.get('X-Total-Count')/limit);
  
      posts.value = [...posts.value, ...resutJson] ;
  
      isLoadingPosts.value = false;
    } catch(e) {
      console.log(e, 'ERROR')
    }
  }
  onMounted(fetching);

  return {
    posts,
    totalPages,
    isLoadingPosts
  }
}