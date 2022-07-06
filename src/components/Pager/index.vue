<template>
<!-- 只有总页数大于1时才显示改div -->
  <div v-if="pagerNumber > 1" class="pager-container">
      <a :class="{disabled : current === 1}" @click = "handleClick(1)">|&lt;&lt;</a>
      <a :class="{disabled : current === 1}" @click = "handleClick(current-1)">&lt;&lt;</a>
      <a v-for="(n,i) in numbers" :key="i" :class="{active: current === n}" @click = "handleClick(n)">{{n}}</a>
      <a :class="{disabled : current === pagerNumber}" @click = "handleClick(current+1)">&gt;&gt;</a>
      <a :class="{disabled : current === pagerNumber}" @click = "handleClick(pagerNumber)">&gt;&gt;|</a>
  </div>
</template>

<script>
export default {
    props: {
        current:{
            type:Number,
            default:1,
        },
        total:{
            type:Number,
            default:0,
        },
        limit:{
            type:Number,
            default:10,
        },
        visibleNumber:{
            type:Number,
            default:10,
        }
    },
    computed:{
      pagerNumber(){
          return Math.ceil(this.total/this.limit)
      },
      //得到显示页码中最小的
      visibleMin(){
          let min = this.current - Math.floor(this.visibleNumber/2)
          min < 1 ? min = 1 : min;
          return min
      },
      visibleMax(){
          let max = this.visibleMin + this.visibleNumber - 1;
          max > this.pagerNumber ? max = this.pagerNumber : max
          return max
      },
      numbers(){
          let arr = [];
          for (let i = this.visibleMin; i <= this.visibleMax; i++) {
            arr.push(i)              
          }
          return arr
      }
    },
    methods: {
        handleClick(newPage){
            if(newPage < 1){
                newPage = 1
            }
            if(newPage >= this.pagerNumber){
                newPage = this.pagerNumber
            }
            if(newPage === this.current){
                return
            }
            this.$emit("pageChange",newPage)
        },
    },
}
</script>

<style lang="less" scoped>
    @import '~@/styles/var.less';
    .pager-container{
        display:flex;
        align-items: center;
        justify-content: center;
        margin: 20px 0;
        a{
            color: @primary;
            font-size:16px;
            margin: 0 10px;
            cursor: pointer;
            &:hover{
                color:@dark;
            }
            &.disabled{
                color:@lightWords;
                cursor: not-allowed;
            }
            &.active{
                color:@words;
                cursor: text;
            }
        }
    }
</style>