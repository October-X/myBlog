import Home from "@/Views/Home";
import Blog from "@/Views/Blog";
import About from "@/Views/About";
import Project from "@/Views/Project";
import Message from "@/Views/Message";

export default [
  { name: 'Home', path: "/", component: Home },
  { name: 'Blog', path: "/blog", component:Blog  },
  { name: 'About', path: "/about", component: About },
  { name: 'Project', path: "/project", component: Project },
  { name: 'Message', path: "/message", component: Message },
];
