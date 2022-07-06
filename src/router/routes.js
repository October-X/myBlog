// import Home from "@/Views/Home";
// import Blog from "@/Views/Blog";
// import About from "@/Views/About";
// import Project from "@/Views/Project";
// import Message from "@/Views/Message";
// import BlogDetail from "@/Views/Blog/Detail";
import "nprogress/nprogress.css";
import { start, done, configure } from "nprogress";
import NotFound from '@/Views/NotFound.vue';

configure({
  trickleSpeed: 20, //速度
  showSpinner: false, //旋转的圈圈不需要
});

function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

function getPageComponent(pageCompResolver) {
  return async () => {
    // console.log('开始加载')
    start();
    if (process.env.NODE_ENV === "development") {
      //开发模式
      await delay(2000);
    }
    const comp = await pageCompResolver();
    done();
    // console.log('加载结束');
    return comp;
  };
}

export default [
  // 路由懒加载
  {
    name: "Home",
    path: "/",
    //使用异步组件，异步组件加载一次后不会重复加载
    component: getPageComponent(() => {
      return import(/* webpackChunkName:"home" */ "@/Views/Home");
    }),
    meta: { title: "首页" },
  },
  {
    name: "Blog",
    path: "/blog",
    component: getPageComponent(() =>
      import(/* webpackChunkName:"blog" */ "@/Views/Blog")
    ),
    meta: { title: "博客" },
  },
  {
    name: "About",
    path: "/about",
    component: getPageComponent(() => {
      return import(/* webpackChunkName:"about" */ "@/Views/About");
    }),
    meta: { title: "关于我" },
  },
  {
    name: "CategoryBlog",
    path: "/blog/cate/:categoryId",
    component: getPageComponent(() =>
      import(/* webpackChunkName:"blog" */ "@/Views/Blog")
    ),
    meta: { title: "博客" },
  }, //添加博客部分的动态路由
  {
    name: "BlogDetail",
    path: "/blog/:id",
    component: getPageComponent(() =>
      import(/* webpackChunkName:"blogDetail" */ "@/Views/Blog/Detail")
    ),
    meta: { title: "博客详情" },
  },
  {
    name: "Project",
    path: "/project",
    component: getPageComponent(() =>
      import(/* webpackChunkName:"project" */ "@/Views/Project")
    ),
    meta: { title: "项目&效果" },
  },
  {
    name: "Message",
    path: "/message",
    component: getPageComponent(() =>
      import(/* webpackChunkName:"message" */ "@/Views/Message")
    ),
    meta: { title: "留言板" },
  },
  {
    name:'NotFound',
    path:'*',//表示前面都没有匹配就匹配这个
    component:NotFound,
  },
];
