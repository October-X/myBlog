import eventBus from "@/eventBus";
import debounce from "@/utils/debounce";
import defaultGif from "@/assets/default.gif";
//设置滚动的时候加载
let imgs = [];
//判断什么时候把改变图片的src地址
function setImage(img) {
  const rect = img.dom.getBoundingClientRect();
  const imgHeight = rect.height || 100;
  const documentHeight = document.documentElement.clientHeight;
  img.dom.src = defaultGif;
  if (rect.top >= -imgHeight && rect.top <= documentHeight) {
    console.log(img.dom, "在视口范围内");
    //处理图片
    const trueImg = new Image();
    console.log(trueImg.src)
    trueImg.src = img.src;
    trueImg.onload = () => {
      img.dom.src = img.src;
    };
    img.dom.src = img.src;
    imgs = imgs.filter((item) => item !== img);
  }
//   img.dom.src = img.src;
}
function setImages() {
  //要知道哪些图片需要加载，哪些不需要加载
  for (const img of imgs) {
    setImage(img);
  }
}
function handleScroll() {
  setImages();
}

eventBus.$on("mainScroll", debounce(handleScroll, 50));
export default {
  inserted(el, bindings) {
    //加到父元素之后
    const img = {
      dom: el,
      src: bindings.value,
    };
    imgs.push(img);
    setImage(img);
  },
  unbind(el) {
    imgs = imgs.filter((item) => item.dom !== el);
  },
};
