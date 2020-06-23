import Vue from 'vue'
import VueRouter from 'vue-router' 
Vue.use(VueRouter)

function view(name){
  return () => import(`@/views/${name}`)
}

  const routes = [
    {
      path: '/',
      name: 'login',
      component: view('login')
    },
     {
    path: '/register',
    name: 'register',
    component: view('register')
  },
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
  
  {
    path: '/homeAdmin',
    name: 'homeAdmin',
    component: view('admin/homeAdmin')
  },
  {
    path: '/reportAdmin',
    name: 'reportAdmin',
    component: view('admin/reportAdmin')
  },
  {
    path: '/checkUser',
    name: 'checkUser',
    component: view('admin/checkUser')
  },
  {
    path: '/setPassword',
    name: 'setPassword',
    component: view('admin/setPassword')
  },
  {
    path: '/setDetail',
    name: 'setPasswordDetail',
    component: view('admin/setPasswordDetail')
  },
  {
    path: '/setDetail',
    name: 'setPasswordDetail',
    component: view('admin/setPasswordDetail')
  },
  {
    path: '/reportBuffalo',
    name: 'reportBuffalo',
    component: view('admin/reportBuffalo')
  },
  {
    path: '/reportMap',
    name: 'reportMap',
    component: view('admin/reportMap')
  },
  {
    path: '/reportSystem',
    name: 'reportSystem',
    component: view('admin/reportSystem')
  },

  


  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
