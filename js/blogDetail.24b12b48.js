"use strict";(self["webpackChunktest_site"]=self["webpackChunktest_site"]||[]).push([[707],{279:function(t,e,a){a.r(e),a.d(e,{default:function(){return R}});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detail-container"},[a("Layout",{scopedSlots:t._u([{key:"right",fn:function(){return[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],staticClass:"right-container"},[t.data?a("BlogTOC",{attrs:{toc:t.data.toc}}):t._e()],1)]},proxy:!0}])},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],ref:"mainContainer",staticClass:"main-container"},[a("BlogDetail",{attrs:{blog:t.data,"v-if":t.data}}),t.isLoading?t._e():a("BlogComment")],1)])],1)},n=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"blog-comment-container"},[a("MessageArea",{attrs:{title:"评论列表",subTitle:"("+t.data.total+")",list:t.data.rows,isListLoading:t.isLoading},on:{submit:t.handleSubmit}})],1)},o=[],r=a(113),l=a(669),c=a(491),u=a(706),d={mixins:[(0,l.Z)({total:0,rows:[]})],components:{MessageArea:r.Z},data(){return{page:1,limit:10}},computed:{hasMore(){return this.data.rows.length<this.data.total}},created(){this.setSelectDebounce=(0,u.Ds)(this.handleScroll,50),this.$bus.$on("mainScroll",this.setSelectDebounce)},destroyed(){this.$bus.$off("mainaScroll",this.setSelectDebounce)},methods:{async fetchData(){return await(0,c.li)(this.$route.params.id,this.page,this.limit)},async fetchMore(){if(!this.hasMore)return;this.isLoading=!0,this.page++;const t=await this.fetchData();this.data.total=t.total,this.data.rows=this.data.rows.concat(t.rows),this.isLoading=!1},async handleSubmit(t,e){const a=await(0,c.w)({blogId:this.$route.params.id,...t});this.data.rows.unshift(a),this.data.total++,e("评论成功")},async handleScroll(t){if(this.isLoading||!t)return;const e=100,a=Math.abs(t.scrollTop+t.clientHeight-t.scrollHeight);a<=e&&this.fetchMore()}}},h=d,m=a(1),f=(0,m.Z)(h,s,o,!1,null,"7020fb8f",null),g=f.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.blog.category?a("div",{staticClass:"blog-detail-container"},[a("h1",[t._v(t._s(t.blog.title))]),a("div",{staticClass:"aside"},[a("span",[t._v("日期: "+t._s(t.formatDate(t.blog.createDate)))]),a("span",[t._v("浏览: "+t._s(t.blog.scanNumber))]),a("a",{attrs:{href:"#data-form-container"}},[t._v("评论: "+t._s(t.blog.commentNumber))]),a("router-link",{attrs:{to:{name:"CategoryBlog",params:{categotyId:t.blog.category.id}}}},[t._v(t._s(t.blog.category.name))])],1),a("div",{staticClass:"markdown-body",domProps:{innerHTML:t._s(t.blog.htmlContent)}})]):t._e()},v=[],b=a(481),_={props:{blog:{type:Object,required:!0}},methods:{formatDate:b.Z}},S=_,y=(0,m.Z)(S,p,v,!1,null,"166bbbca",null),D=y.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.toc?a("div",{staticClass:"blog-toc-container"},[a("h2",[t._v("目录")]),a("RightList",{attrs:{list:t.tocWithSelect},on:{select:t.handleSelect}})],1):t._e()},$=[],k=a(439),L={components:{RightList:k.Z},data(){return{activeAnchor:"article-md-title-1"}},props:{toc:{type:Array}},methods:{handleSelect(t){location.hash=t.anchor},setSelect(t){if(!t)return;const e=200;for(const a of this.doms){if(!a)continue;const t=a.getBoundingClientRect().top;if(t>=0&&t<=e)return void(this.activeAnchor=a.id);if(t>e)return;this.activeAnchor=a.id}}},computed:{tocWithSelect(){const t=(e=[])=>e.map((e=>({...e,isSelected:e.anchor===this.activeAnchor,children:t(e.children)})));return t(this.toc)},doms(){let t=[];const e=(a=[])=>{for(const i of a)t.push(document.getElementById(i.anchor)),i.children&&i.children.length&&e(i.children);return t};return e(this.toc)}},created(){this.setSelectDebounce=(0,u.Ds)(this.setSelect,50),this.$bus.$on("mainScroll",this.setSelectDebounce)},destroyed(){this.$bus.$off("mainScroll",this.setSelectDebounce)}},w=L,Z=(0,m.Z)(w,C,$,!1,null,"4e8f64c1",null),x=Z.exports,M=a(401),A=a(79),T=a(294),E={mixins:[(0,l.Z)(),(0,A.Z)("mainContainer")],components:{Layout:M.Z,BlogDetail:D,BlogTOC:x,BlogComment:g},computed:{...(0,T.mapState)("setting",{settingData:"data"})},methods:{async fetchData(){let t=await(0,c.x3)(this.$route.params.id);if(t)return u.YZ.setSiteTitle(t.title),t;this.$router.push("/404")}},updated(){const t=location.hash;location.hash="",setTimeout((()=>{location.hash=t}),50)},destroyed(){const t=this.settingData.siteTitle;t&&u.YZ.setSiteTitle(t)}},B=E,N=(0,m.Z)(B,i,n,!1,null,"1b408f20",null),R=N.exports},439:function(t,e,a){a.d(e,{Z:function(){return c}});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"right-list-container"},t._l(t.list,(function(e,i){return a("li",{key:i},[a("span",{class:{active:e.isSelected},on:{click:function(a){return t.handleClick(e)}}},[t._v(t._s(e.name))]),a("span",{staticClass:"aside",class:{active:e.isSelected},attrs:{"v-if":e.aside},on:{click:function(a){return t.handleClick(e)}}},[t._v(t._s(e.aside))]),a("RightList",{attrs:{list:e.children},on:{select:t.handleClick}})],1)})),0)},n=[],s={name:"RightList",props:{list:{type:Array,default:()=>[]}},methods:{handleClick(t){t.isSelected||this.$emit("select",t)}}},o=s,r=a(1),l=(0,r.Z)(o,i,n,!1,null,"54f68730",null),c=l.exports},113:function(t,e,a){a.d(e,{Z:function(){return C}});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"message-area-container"},[a("DataForm",t._g({},t.$listeners)),a("h3",[t._v(" "+t._s(t.title)+" "),a("span",[t._v(t._s(t.subTitle))])]),a("DataList",{attrs:{list:t.list}}),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isListLoading,expression:"isListLoading"}],staticClass:"loading"})],1)},n=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{ref:"form",staticClass:"data-form-container",attrs:{id:"data-form-container"},on:{submit:function(e){return e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[a("div",{staticClass:"form-item"},[a("div",{staticClass:"input-area"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.nickname,expression:"formData.nickname"}],attrs:{type:"text",maxlength:"10",placeholder:"用户昵称"},domProps:{value:t.formData.nickname},on:{input:function(e){e.target.composing||t.$set(t.formData,"nickname",e.target.value)}}}),a("span",{staticClass:"tip"},[t._v(t._s(t.formData.nickname.length)+"/10")])]),a("div",{staticClass:"error"},[t._v(t._s(t.error.nickname))])]),a("div",{staticClass:"form-item"},[a("div",{staticClass:"text-area"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.content,expression:"formData.content"}],attrs:{maxlength:"300",placeholder:"输入内容"},domProps:{value:t.formData.content},on:{input:function(e){e.target.composing||t.$set(t.formData,"content",e.target.value)}}}),a("span",{staticClass:"tip"},[t._v(t._s(t.formData.content.length)+"/300")])]),a("div",{staticClass:"error"},[t._v(t._s(t.error.content))])]),a("div",{staticClass:"form-item"},[a("div",{staticClass:"button-area"},[a("button",{attrs:{disabled:t.isSubmiting}},[t._v(" "+t._s(t.isSubmiting?"提交中...":"提交")+" ")])])])])},o=[],r={data(){return{formData:{nickname:"",content:""},error:{nickname:"",content:""},isSubmiting:!1}},methods:{handleSubmit(){this.error.nickname=this.formData.nickname?"":"请填写昵称",this.error.content=this.formData.content?"":"请填写内容",this.error.nickname||this.error.content||(this.isSubmiting=!0,this.$emit("submit",this.formData,(t=>{this.$showMessage({content:t,type:"success",duration:1e3,container:this.$refs.form,callback:()=>{this.isSubmiting=!1,this.formData.nickname="",this.formData.content=""}})})))}}},l=r,c=a(1),u=(0,c.Z)(l,s,o,!1,null,"0da4cd78",null),d=u.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"data-list-container"},t._l(t.list,(function(e){return a("li",{key:e.id},[a("Avatar",{attrs:{url:e.avatar,size:44}}),a("div",{staticClass:"data"},[a("div",{staticClass:"nickname"},[t._v(t._s(e.nickname))]),a("div",{staticClass:"content"},[t._v(t._s(e.content))]),a("div",{staticClass:"time"},[t._v(t._s(t.formatDate(e.createDate,!0)))])])],1)})),0)},m=[],f=a(360),g=a(706),p={components:{Avatar:f.Z},props:{list:{type:Array,default:()=>[]}},methods:{formatDate:g.p6}},v=p,b=(0,c.Z)(v,h,m,!1,null,"6bbcd1b2",null),_=b.exports,S={props:{title:{type:String,default:""},subTitle:{type:String,default:""},list:{type:Array,default:()=>[]},isListLoading:{type:Boolean,default:!1}},components:{DataForm:d,DataList:_}},y=S,D=(0,c.Z)(y,i,n,!1,null,"081b83b7",null),C=D.exports},491:function(t,e,a){a.d(e,{Dn:function(){return n},_Z:function(){return s},li:function(){return l},w:function(){return r},x3:function(){return o}});var i=a(908);async function n(){return await i.Z.get("/api/blogtype")}async function s(t=1,e=10,a=-1){return console.log(t,e,a),await i.Z.get("/api/blog",{params:{page:t,limit:e,categoryid:a}})}async function o(t){return await i.Z.get(`/api/blog/${t}`)}async function r(t){return await i.Z.post("/api/comment",t)}async function l(t,e=1,a=10){return await i.Z.get("/api/comment",{params:{blogId:t,page:e,limit:a}})}},669:function(t,e,a){function i(t={}){return{data(){return{isLoading:!0,data:t}},async created(){this.data=await this.fetchData(),this.isLoading=!1}}}a.d(e,{Z:function(){return i}})},79:function(t,e,a){function i(t){return{methods:{handleMainScroll(){this.$bus.$emit("mainScroll",this.$refs[t])},handleSetMainScroll(e){this.$refs[t].scrollTop=e}},mounted(){this.$bus.$on("setMainScoll",this.handleSetMainScroll),this.$refs[t].addEventListener("scroll",this.handleMainScroll)},beforeDestroyed(){this.$bus.$emit("mainScroll"),this.$bus.$off("setMainScoll",this.handleSetMainScroll),this.$refs[t].removeEventListener("scroll",this.handleMainScroll)}}}a.d(e,{Z:function(){return i}})}}]);
//# sourceMappingURL=blogDetail.24b12b48.js.map