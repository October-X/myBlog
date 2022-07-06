import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar: "http://mms1.baidu.com/it/u=2634133699,1982295504&fm=253&app=138&f=JPEG&fmt=auto&q=75?w=500&h=500",
    siteTitle: "October-X",
    github: "https://github.com/October-X",
    qq: "2290512627",
    qqQrCode:
      "https://img2.baidu.com/it/u=4244269751,4000533845&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    weixin: "c2290512627",
    weixinQrCode:
      "https://img2.baidu.com/it/u=4244269751,4000533845&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    mail: "duyi@gmail.com",
    icp: "黑ICP备17001719号",
    githubName: "October-X",
    favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
  },
});
