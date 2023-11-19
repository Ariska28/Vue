import MainPage from '@/pages/MainPage.vue';
import PostPage from '@/pages/PostPage.vue';
import AboutPage from '@/pages/AboutPage.vue';
import PostPageId from '@/pages/PostPageId.vue'
import StorePage from '@/pages/StorePage.vue'
import CompositionAPIPage from '@/pages/CompositionAPIPage.vue'
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { 
    path: '/', component: MainPage 
  },
  { 
    path: '/posts', component: PostPage 
  },
  {
    path: '/about', component: AboutPage 
  },
  {
    path: '/posts/:id', component: PostPageId
  },
  {
    path: '/store', component: StorePage
  },
  {
    path: '/composition', component: CompositionAPIPage
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router;