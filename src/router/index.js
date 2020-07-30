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
    path: '/user/home',
    name: 'dashFarmer',
    component: view('dashFarmer')
  },
  {
    path: '/user/profile',
    name: 'infoFarmer',
    component: view('infoFarmer')
  },
  {
    path: '/user/buffalo',
    name: 'infoBuf',
    component: view('infoBuf')
  },
  {
    path: '/user/buffaloinformation',
    name: 'infoBuf1',
    component: view('infoBuf1')
  },
  {
    path: '/user/buffaloage',
    name: 'addAgeBuff',
    component: view('addAgeBuff') 
  },
  {
    path: '/user/buffaloadd',
    name: 'addBuf',
    component: view('addBuf')
  }, 
  
  {
    path: '/user/report',
    name: 'report',
    component: view('report')
  },
  {
    path: '/user/reportsum',
    name: 'sumReport',
    component: view('sumReport')
  },
  {
    path: '/user/reportgrow',
    name: 'growReport',
    component: view('growReport')
  },
  {
    path: '/user/resetpassword',
    name: 'setPassFarmer',
    component: view('setPassFarmer')
  },
  
  {
    path: '/admin/home',
    name: 'homeAdmin',
    component: view('admin/homeAdmin')
  },
  {
    path: '/admin/adminedit',
    name: 'checkUser',
    component: view('admin/checkUser')
  },
  {
    path: '/admin/editadmin',
    name: 'editAdmin',
    component: view('admin/editAdmin')
  },
  {
    path: '/admin/admindetail',
    name: 'adminDetail',
    component: view('admin/adminDetail')
  },
  {
    path: '/admin/addadmin',
    name: 'addAdmin',
    component: view('admin/addAdmin')
  },
  {
    path: '/admin/userprofile',
    name: 'setPassword',
    component: view('admin/setPassword')
  },
  {
    path: '/admin/userprofiledetail',
    name: 'setFarmerDetai',
    component: view('admin/setFarmerDetai')
  },
  {
    path: '/admin/addfarmer',
    name: 'addFarmer',
    component: view('admin/addFarmer')
  },
  {
    path: '/admin/resetpassword',
    name: 'setPasswordDetail',
    component: view('admin/setPasswordDetail')
  },
  {
    path: '/admin/resetpasswordadmin',
    name: 'setPasswordDetailAdmin',
    component: view('admin/setPasswordDetailAdmin')
  },
  {
    path: '/admin/buffalo',
    name: 'infoBufAdmin',
    component: view('admin/infoBufAdmin')
  },
  {
    path: '/admin/buffaloadd',
    name: 'addBufAdmin',
    component: view('admin/addBufAdmin')
  },
  {
    path: '/admin/buffaloinformation',
    name: 'infoBuffDetail',
    component: view('admin/infoBuffDetail')
  },
  {
    path: '/admin/buffaloage',
    name: 'ageBuffAdmin',
    component: view('admin/ageBuffAdmin')
  },
  {
    path: '/admin/password',
    name: 'askPassword',
    component: view('admin/askPassword')
  },

  {
    path: '/admin/report',
    name: 'reportAdmin',
    component: view('admin/reportAdmin')
  }, 
  {
    path: '/admin/reportbuffalo',
    name: 'reportBuffalo',
    component: view('admin/reportBuffalo')
  },
  {
    path: '/admin/reportmap',
    name: 'reportMap',
    component: view('admin/reportMap')
  },
  {
    path: '/admin/reportsystem',
    name: 'reportSystem',
    component: view('admin/reportSystem')
  },
 

  // {
  //   path: '/menuFarmer',
  //   name: 'menuFarmer',
  //   component: view('admin/menuFarmer')
  // },
  // {
  //   path: '/setFarmer',
  //   name: 'setFarmer',
  //   component: view('admin/setFarmer')
  // },
  
  {
    path: '/forgotPassword',
    name: 'forgotPassword',
    component: view('forgotPassword')
  },
   
  
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
