import request from "./request";
// import '../mock'
export async function getAbout() {
  return await request.get("/api/about");
}