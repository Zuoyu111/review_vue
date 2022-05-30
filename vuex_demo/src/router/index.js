import VueRouter from "vue-router";
import About from "@/pages/About";
import Home from "@/pages/Home";
import message from "@/pages/Message";
import news from "@/pages/News";
import detail from "@/pages/Detail";

const router =  new VueRouter({
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'message',
          component: message,
          meta: {isAuth: true, title: '消息'},
          beforeEnter: (to,from,next) => {

          }
        },
        {
          path: 'news',
          component: news,
          children: [
            {
              name: 'news_detail',
              // path: 'detail/:id/:title',
              path: 'detail',
              component: detail,

              //props的第一种写法，值为对象，该对象中的所以key-value都会以props的形式传递
              // props: {id: 1,title: 'hello'}

              //props的第二种写法，值为布尔值，若为真，就会把该路由组件收到的所有params参数，以props的方式传递给组件
              // props: true,

              // props的第三种写法，值为函数
              // props($route) {
              //   console.log($route,999)
              //   return {id: $route.query.id,title: $route.query.title}
              // }
              // 优化 =》 利用解构
              // props({query}) {
              //   return {id: query.id,title: query.title}
              // }
              // props({query:{id,title}}) {
              //   return {id,title}
              // }
              props({query:{id,title}}) {
                return {id,title}
              }



            }
          ]
        }
      ]
    }
  ]
})

//全局前置路由守卫 -- 初始话的时候被调用，每次路由切换之前调用
router.beforeEach((to,from,next) => {
  next()
})

//全局后置路由守卫
router.afterEach((to,from) => {

})

export default router