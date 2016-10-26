import Vue from 'vue'

//导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import App from './App.vue'
import Foo from './views/Foo.vue'
import Bar from './views/Bar.vue'
import page404 from './views/404.vue'

var router = new VueRouter({
  routes:[
    {
      path:"/",
      component:App
    },
    {
      path:"/Foo",
      component:Foo
    },
    {
      path:"/Bar",
      component:Bar
    },
    {
      path:"*",
      component:page404
    }
  ]
})
const app = new Vue({
  router
}).$mount('#app')


// new Vue({
//   el: '#app',
//   render: h => h(App)
// })
//启动一个启用了路由的应用
//router.start(App,'app')