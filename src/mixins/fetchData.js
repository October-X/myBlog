//公共的远程获取数据的代码
//具体的组件中需要一个远程获取数据的方法fetchData
// export default{
//     data(){
//         return{
//             isLoading:true,
//             data:[],
//         }
//     },
//     async created(){
//         this.data = await this.fetchData();
//         isLoading = false;
//     }
// }
export default function(defaultDataValue = {}) {
    return {
      data() {
        return {
          isLoading: true,
          data: defaultDataValue,
        };
      },
      async created() {
        this.data = await this.fetchData();
        this.isLoading = false;
      },
    };
  }