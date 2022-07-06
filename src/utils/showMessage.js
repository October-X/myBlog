import getComponentRootDom from "./getComponentRootDom";
import Icon from "@/components/Icon";
import styles from "./showMessage.module.less";

/**
 * 弹出消息
 * @param {String} content 消息内容
 * @param {String} type 消息类型  info  error  success  warn
 * @param {Number} duration 多久后消失
 * @param {HTMLElement} container 容器，消息会显示到该容器的正中；如果不传，则显示到页面正中
 */
export default function (options = {}) {
  const content = options.content || "";
  const type = options.type || "info";
  const duration = options.duration || 1000;
  const container = options.container || document.body;
  //创建消息dom
  const div = document.createElement("div");
  const iconDom = getComponentRootDom(Icon, {
    type,
  });
  div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><span>${content}</span>`;
  div.className = `${styles.message} ${styles[`message-${type}`]}`;
  //判断容器的定位，是否需要更改
  if(options.container){
    getComputedStyle(container).position === "static"
    ? (container.style.position = "relative")
    : "";
  }
  container.appendChild(div);
  //强行渲染。直接reflow
  div.clientHeight;

  div.style.opacity = 1;
  div.style.transform = `translate(-50%, -50%)`
  //使其上移消失
  setTimeout(function() {
      div.style.opacity = 0;
      div.style.transform = `translate(-50%, -50%) translateY(-25px)`
      div.addEventListener('transitionend',()=>{
          div.remove();
          options.callback && options.callback()
      },{once:true})
      //并且只执行一次
  },duration);
}
