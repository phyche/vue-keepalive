import Vue from 'vue'
import Router from 'vue-router'
import userList from '@/components/userList'
import userDetail from '@/components/userDetail'
import teacherList from '@/components/teacherList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/userList',
      name: 'userList',
      component: userList,
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: '/userDetail',
      name: 'userDetail',
      component: userDetail,
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: '/teacherList',
      name: 'teacherList',
      component: teacherList,
      meta: {
        keepAlive: true // 需要被缓存
      }
    }
  ]
})
