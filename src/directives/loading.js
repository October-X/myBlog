import loadingUrl from '@/assets/loading.svg'
import styles from "./loading.module.less";
//判断是否存在el中是否存在img
function exists(el){
    return el.querySelector('img[data-role=loading]');
}
function createLoadingImg(){
    const img = document.createElement('img');
    img.dataset.role = "loading";
    img.src = loadingUrl
    img.className = styles.loading;
    return img
}
//导出指令的配置对象
export default function(el,binding) {
    //根据binding.value决定创建或删除img元素
    const exist = exists(el)
    if(binding.value){
        if(!exist){
            const img = createLoadingImg();
            el.appendChild(img);
        }
    }else{
        if(exist){
            exist.remove();
        }
    }
}
