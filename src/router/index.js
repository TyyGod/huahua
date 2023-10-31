/**
 * 路由 主入口
 * @author LiQingSong
 * 路由参数说明：
 * path: '/home'                  链接 -  /home 内部路由 /^(https?:|mailto:|tel:)/.test(path)外链
 * hidden: true                   如果设置为 true ，项目将不会显示在 “导航栏” (默认为 false)
 * redirect: ''                   重定向
 * name:'router-name'             路由名称
 * meta : {
    roles: ['admin','editor']    权限控制页面角色(您可以设置多个角色), 不设置此参数 默认 所有角色都有权限
    title: 'title'               名称显示在侧栏和面包屑、浏览器title(推荐设置)
    icon: 'icon-class'           图标显示在侧栏中
    breadcrumb: [                面包屑内容：1、默认不配置按照路由自动读取；2、false,按照路由自动读取讲不读取此；3、配置对应的面包屑格式如下：
          {
            meta: { title: '标题' },   必填
            linkpath: '/demo',         链接 -  /demo 内部路由 /^(https?:|mailto:|tel:)/.test(path)外链 , 可不写
          }
    ],
    activeMenu: '/example/list'  侧栏选中，如果设置路径，侧栏将突出显示你设置的路径，默认 router.path
    belongTopMenu: '/news'       所属顶级菜单,用于选中顶部菜单，与菜单切换，默认不设置 path.split('/') 第1个；
                                            三级此参数的作用是选中顶级菜单 ，二级此参数的作用是所属某个顶级菜单的下面，两个层级的必须同时填写一致
  }
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 引入Index框架
// 我的建议 home 用作首页路由 layout用作个人中心/设置页面
import LayoutIndex from '@/layout/Index'

// 引入对应模块路由
import componentRouter from '@/router/modules/component' // 组件
import pagesampleRouter from '@/router/modules/pagesample' // 页面示例
import chartstatisticRouter from '@/router/modules/chartstatistic' // 图表统计

/**
 * 固定路由
 * 没有权限要求的路由
 * 所有角色可访问
 */
export const constantRoutes = [
  {
    path: '/login',
    meta: {
      title: '登录'
    },
    component: () => import('@/views/Login/login.vue'),
    hidden: true
  },
  {
    path: '/test',
    meta: {
      title: '测试各个组件'
    },
    component: () => import('@/views/testYa'),
    hidden: true
  },

  {
    path: '/404',
    meta: {
      title: 'Not Found'
    },
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/home',
    component: () => import('@/views/Home'),
    hidden: true,
    children: [
      {
        path: 'act',
        name: 'act',
        component: () => import('@/views/Home/Act.vue'),
        hidden: true,
        meta: {
          title: '首页'
        }
      },
      {
        path: 'capability',
        name: 'capability',
        component: () => import('@/views/Home/Capability.vue'),
        hidden: true,
        meta: {
          title: '产品能力'
        }
      },
      {
        path: 'solution',
        name: 'solution',
        component: () => import('@/views/Home/Solution.vue'),
        hidden: true,
        meta: {
          title: '解决方案'
        }
      },
      {
        path: 'market',
        name: 'market',
        component: () => import('@/views/Home/Market.vue'),
        hidden: true,
        meta: {
          title: '应用服务市场'
        }
      },
      {
        path: 'developer',
        name: 'developer',
        component: () => import('@/views/Home/Developer.vue'),
        hidden: true,
        meta: {
          title: '开发者'
        }
      },
      {
        path: 'support',
        name: 'support',
        component: () => import('@/views/Home/Support.vue'),
        hidden: true,
        meta: {
          title: '服务支持'
        }
      },
      {
        path: 'national',
        name: 'national',
        component: () => import('@/views/Home/National.vue'),
        hidden: true,
        meta: {
          title: '了解国能云'
        }
      },
      {
        path: 'coal',
        name: 'coal',
        component: () => import('@/views/Home/Coal.vue'),
        hidden: true,
        meta: {
          title: '煤炭行业云'
        }
      },
      {
        path: 'document',
        name: 'document',
        component: () => import('@/views/Home/Document.vue'),
        hidden: true,
        meta: {
          title: '文档手册'
        }
      },
      {
        path: 'search',
        name: 'search',
        component: () => import('@/views/Home/AllSearch.vue'),
        hidden: true,
        meta: {
          title: '搜索'
        }
      }
    ]
  },
  {
    path: '/control',
    name: '/control',
    component: () => import('@/views/ControlPanel/ControlPanel.vue'),
    meta: { title: '控制台' }
  },
  {
    path: '/',
    redirect: '/home/act',
    // component:LayoutIndex,
    meta: { title: '首页', icon: 'home' }
    // children: [
    //   {
    //     path: 'home',
    //     component: () => import('@/views/Home'),
    //     name: 'home',
    //     meta: { title: '主控台', icon: 'control', belongTopMenu: '/' }
    //   },
    //   {
    //     path: 'monitor',
    //     component: () => import('@/views/Home'),
    //     name: 'monitor',
    //     meta: {
    //         title: '自定义面包屑',
    //         icon: 'monitoring',
    //         belongTopMenu: '/',
    //         breadcrumb: [
    //           {
    //             meta: { title: '自定义面包屑' }
    //           },
    //           {
    //             meta: { title: '后台首页' },
    //             linkpath: '/home'
    //           },
    //           {
    //             meta: { title: '网页小功能' },
    //             linkpath: 'http://www.wyxgn.com'
    //           },
    //           {
    //             meta: { title: '监控页' }
    //           }
    //         ]
    //     }
    //   },
    //   {
    //     path: 'http://admin-element-vue.liqingsong.cc',
    //     name: 'document',
    //     meta: { title: '使用文档', icon: 'pagedetails' }
    //   }
    // ]
  }

]

/**
 * 异步路由
 * 需要根据用户角色动态加载的路由
 */
export const asyncRoutes = [

  // 引入其他模块路由
  componentRouter,
  pagesampleRouter,
  chartstatisticRouter,

  { path: '*', redirect: '/404', hidden: true }
]

/*
// 打印对应链接的权限
const consoleLogRouteRoles = (routes, level) => {
   let obj = {};
   routes.map((item, index) => {
      let { meta, children } = item;
      if (!meta) {
        return item;
      }
      let { title, roles } = meta;
      //console.log(meta);
      obj[title + index + '-' + level ] = roles[0] || '';
      // console.log(children);
      if (children) {
        obj = Object.assign(obj, consoleLogRouteRoles(children, level + 1));
      }
   })
   return obj;
}
console.log(JSON.stringify(consoleLogRouteRoles(asyncRoutes, 1)));
*/

const createRouter = () => new VueRouter({
  // mode: 'history', // 启用的话就是去除#
  scrollBehavior: () => ({ y: 0 }),
  base: process.env.BASE_URL,
  routes: constantRoutes
})

const router = createRouter()

// 细节见: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // 重置路由
}

export default router
