import Vue from 'vue'
import VueRouter from 'vue-router' 
Vue.use(VueRouter)

function view(name){
  return () => import(`@/views/${name}`)
}

  const routes = [
  {
    path: '/dashFarmer',
    name: 'dashFarmer',
    component: view('dashFarmer')
  },
  {
    path: '/infoBuf',
    name: 'infoBuf',
    component: view('infoBuf')
  },
  {
    path: '/infoBuf1',
    name: 'infoBuf1',
    component: view('infoBuf1')
  }, 
  {
    path: '/addBuf',
    name: 'addBuf',
    component: view('addBuf')
  }, 
  {
    path: '/infoFarmer',
    name: 'infoFarmer',
    component: view('infoFarmer')
  },
  {
    path: '/report',
    name: 'report',
    component: view('report')
  },
  {
    path: '/sumReport',
    name: 'sumReport',
    component: view('sumReport')
  },
  {
    path: '/growReport',
    name: 'growReport',
    component: view('growReport')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
