import request from "./request";
// import '../mock'
export async function getBanners() {
  return await request.get("/api/banner");
}