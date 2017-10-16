import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index.vue'
import loading from '@/components/loading.vue'
import A from '@/components/c.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
      ,
      children:[
        {
          path:"a",
          name:"a",
          component:A
        }
      ]
    },
    {
      path: '/loading',
      name: 'loading',
      component: loading
    },

  ]
})
