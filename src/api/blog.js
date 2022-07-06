import request from "./request";
// import '../mock'

/**
 * 获取博客的所有分类
 * @returns 
 */
export async function getBlogTypes(){
    return await request.get("/api/blogtype")
}

/**
 * 获取博客的列表数据，分页获取博客
 * @param {*} page 
 * @param {*} limit 
 * @param {*} categoryid 
 * @returns 
 */
export async function getBlogs(page=1,limit=10,categoryid=-1) {
    console.log(page,limit,categoryid);
  return await request.get("/api/blog",{
      params: {
          page,
          limit,
          categoryid,
      }
  });
}

export async function getBlog(id){
    return await request.get(`/api/blog/${id}`)
}
/**
 * 提交评论
 * @returns 
 */
export async function postComment(commentInfo){
    return await request.post(`/api/comment`,commentInfo)
}

export async function getComments(blogId,page=1,limit=10){
    return await request.get(`/api/comment`,{
        params: {
            blogId,
            page,
            limit
        }
    })
}