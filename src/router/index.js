import Vue from 'vue'
import VueRouter from 'vue-router' 
Vue.use(VueRouter)

function view(name){
  return () => import(`@/views/${name}`)
}

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: view('Home')
  },
  {
    path: '/infoBuf',
    name: 'infoBuf',
    component: view('infoBuf')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
