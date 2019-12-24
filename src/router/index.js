import Vue from 'vue'
import Router from 'vue-router'

import circles from "../../views/circles"
import AClassname from '../../views/AClassname'
import Bclassname from "../../views/BClassname"
import Radarchart from "../../views/Radarchart"
import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    
    {
      path: '/aclassname',
      name: 'AClassname',
      component: AClassname
    },
    {
      path: '/',
      name: 'circles',
      component: circles
    },
    {
      path: '/bclassname',
      name: 'Bclassname',
      component: Bclassname
    },
    {
      path: '/radarchart',
      name: 'Radarchart',
      component: Radarchart
    }
   
  ]
})
