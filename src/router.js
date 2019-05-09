import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import HomePage from '@/views/HomePage'
import test from '@/views/test'

Vue.use(Router)
const components = {
    // index:() => import('@/views/index'),
    // top:() => import('@/components/MyHeader'),
    // container:() => import('@/components/Container')
}

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/test'
        },

        {
            path: '/homepage',
            name: 'homepage',
            component: HomePage
        },
        {
            path: '/helloword',
            name: 'helloword',
            component: HelloWorld
        },
        {
            path: '/test',
            component: test
        }
    ]
})
// 两个路由对应的设计图宽度不一样，所以需要手动切换（postcss.config.js）页面才能正常显示
