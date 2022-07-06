"use strict";(self["webpackChunktest_site"]=self["webpackChunktest_site"]||[]).push([[676],{768:function(t,a,e){e.r(a),e.d(a,{default:function(){return p}});var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{ref:"messageContainer",staticClass:"message-container"},[e("MessageArea",{attrs:{title:"留言板",subTitle:""+t.data.total,isListLoading:t.isLoading,list:t.data.rows},on:{submit:t.handleSubmit}})],1)},i=[],n=e(113),r=e(669),o=e(908);async function l(t=1,a=10){return await o.Z.get("/api/message",{param:{page:t,limit:a}})}async function c(t){return await o.Z.post("/api/message",t)}var m=e(79),u={mixins:[(0,r.Z)({total:0,rows:[]}),(0,m.Z)("messageContainer")],components:{MessageArea:n.Z},data(){return{page:1,limit:10}},created(){this.$bus.$on("mainScroll",this.handleScroll)},destroyed(){this.$bus.$off("mainScroll",this.handleScroll)},computed:{hasMore(){return this.data.rows.length<this.data.total}},methods:{async fetchData(){return l(this.page,this.limit)},handleScroll(t){if(this.isLoading||!t)return;const a=100,e=Math.abs(t.scrollTop+t.clientHeight-t.scrollHeight);e<=a&&this.fetchMore()},async fetchMore(){if(!this.hasMore)return;this.isLoading=!0,this.page++;const t=await this.fetchData();this.data.total=t.total,this.data.rows=this.data.rows.concat(t.rows),this.isLoading=!1},async handleSubmit(t,a){const e=await c(t);a("感谢您的留言"),this.data.rows.unshift(e)}}},d=u,h=e(1),f=(0,h.Z)(d,s,i,!1,null,"1705f08f",null),p=f.exports},113:function(t,a,e){e.d(a,{Z:function(){return C}});var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"message-area-container"},[e("DataForm",t._g({},t.$listeners)),e("h3",[t._v(" "+t._s(t.title)+" "),e("span",[t._v(t._s(t.subTitle))])]),e("DataList",{attrs:{list:t.list}}),e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isListLoading,expression:"isListLoading"}],staticClass:"loading"})],1)},i=[],n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("form",{ref:"form",staticClass:"data-form-container",attrs:{id:"data-form-container"},on:{submit:function(a){return a.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[e("div",{staticClass:"form-item"},[e("div",{staticClass:"input-area"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.nickname,expression:"formData.nickname"}],attrs:{type:"text",maxlength:"10",placeholder:"用户昵称"},domProps:{value:t.formData.nickname},on:{input:function(a){a.target.composing||t.$set(t.formData,"nickname",a.target.value)}}}),e("span",{staticClass:"tip"},[t._v(t._s(t.formData.nickname.length)+"/10")])]),e("div",{staticClass:"error"},[t._v(t._s(t.error.nickname))])]),e("div",{staticClass:"form-item"},[e("div",{staticClass:"text-area"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.content,expression:"formData.content"}],attrs:{maxlength:"300",placeholder:"输入内容"},domProps:{value:t.formData.content},on:{input:function(a){a.target.composing||t.$set(t.formData,"content",a.target.value)}}}),e("span",{staticClass:"tip"},[t._v(t._s(t.formData.content.length)+"/300")])]),e("div",{staticClass:"error"},[t._v(t._s(t.error.content))])]),e("div",{staticClass:"form-item"},[e("div",{staticClass:"button-area"},[e("button",{attrs:{disabled:t.isSubmiting}},[t._v(" "+t._s(t.isSubmiting?"提交中...":"提交")+" ")])])])])},r=[],o={data(){return{formData:{nickname:"",content:""},error:{nickname:"",content:""},isSubmiting:!1}},methods:{handleSubmit(){this.error.nickname=this.formData.nickname?"":"请填写昵称",this.error.content=this.formData.content?"":"请填写内容",this.error.nickname||this.error.content||(this.isSubmiting=!0,this.$emit("submit",this.formData,(t=>{this.$showMessage({content:t,type:"success",duration:1e3,container:this.$refs.form,callback:()=>{this.isSubmiting=!1,this.formData.nickname="",this.formData.content=""}})})))}}},l=o,c=e(1),m=(0,c.Z)(l,n,r,!1,null,"0da4cd78",null),u=m.exports,d=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",{staticClass:"data-list-container"},t._l(t.list,(function(a){return e("li",{key:a.id},[e("Avatar",{attrs:{url:a.avatar,size:44}}),e("div",{staticClass:"data"},[e("div",{staticClass:"nickname"},[t._v(t._s(a.nickname))]),e("div",{staticClass:"content"},[t._v(t._s(a.content))]),e("div",{staticClass:"time"},[t._v(t._s(t.formatDate(a.createDate,!0)))])])],1)})),0)},h=[],f=e(360),p=e(706),v={components:{Avatar:f.Z},props:{list:{type:Array,default:()=>[]}},methods:{formatDate:p.p6}},g=v,b=(0,c.Z)(g,d,h,!1,null,"6bbcd1b2",null),_=b.exports,S={props:{title:{type:String,default:""},subTitle:{type:String,default:""},list:{type:Array,default:()=>[]},isListLoading:{type:Boolean,default:!1}},components:{DataForm:u,DataList:_}},D=S,$=(0,c.Z)(D,s,i,!1,null,"081b83b7",null),C=$.exports},669:function(t,a,e){function s(t={}){return{data(){return{isLoading:!0,data:t}},async created(){this.data=await this.fetchData(),this.isLoading=!1}}}e.d(a,{Z:function(){return s}})},79:function(t,a,e){function s(t){return{methods:{handleMainScroll(){this.$bus.$emit("mainScroll",this.$refs[t])},handleSetMainScroll(a){this.$refs[t].scrollTop=a}},mounted(){this.$bus.$on("setMainScoll",this.handleSetMainScroll),this.$refs[t].addEventListener("scroll",this.handleMainScroll)},beforeDestroyed(){this.$bus.$emit("mainScroll"),this.$bus.$off("setMainScoll",this.handleSetMainScroll),this.$refs[t].removeEventListener("scroll",this.handleMainScroll)}}}e.d(a,{Z:function(){return s}})}}]);
//# sourceMappingURL=message.343b8221.js.map