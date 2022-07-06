import request from "./request";
// import '../mock'
export async function getSetting() {
  return await request.get("/api/setting");
}
