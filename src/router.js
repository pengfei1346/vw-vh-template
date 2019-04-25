import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import HomePage from '@/views/HomePage'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/homepage',
            name: 'homepage',
            component: HomePage
        },
        {
            path: '/',
            name: 'helloword',
            component: HelloWorld
        }
    ]
})
// 两个路由对应的设计图宽度不一样，所以需要手动切换（postcss.config.js）页面才能正常显示
