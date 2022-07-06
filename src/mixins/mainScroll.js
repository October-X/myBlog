export default function(container){
   return{
    methods:{
        handleMainScroll(){
            //滚动条变化
            this.$bus.$emit('mainScroll',this.$refs[container])
        },
        handleSetMainScroll(top){
            this.$refs[container].scrollTop = top;
        },
    },
    mounted(){
        this.$bus.$on('setMainScoll',this.handleSetMainScroll)
        this.$refs[container].addEventListener('scroll',this.handleMainScroll)
    },
    beforeDestroyed() {
        this.$bus.$emit('mainScroll');
        this.$bus.$off('setMainScoll',this.handleSetMainScroll)
        this.$refs[container].removeEventListener('scroll',this.handleMainScroll)
    },
   }
}