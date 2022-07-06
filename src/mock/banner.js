import Mock from "mockjs";
Mock.mock("/api/banner", "get", {
  code: 0,
  msg: "",
  data: [
    {
      id: "1",
      midImg: "https://img1.baidu.com/it/u=2781281637,4119398334&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=319",
      bigImg: "https://october-x.github.io/future/media/r5.jpg",
      title: "凛冬将至",
      description: "人唯有恐惧的时候方能勇敢",
    },
    {
      id: "2",
      midImg: "https://img1.baidu.com/it/u=2781281637,4119398334&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=319",
      bigImg: "https://october-x.github.io/future/media/r1.jpg",
      title: "血火同源",
      description: "如果我回头，一切都完了",
    },
    {
      id: "3",
      midImg: "https://img1.baidu.com/it/u=2781281637,4119398334&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=319",
      bigImg: "https://october-x.github.io/future/media/r2.jpg",
      title: "听我怒吼",
      description: "兰尼斯特有债必偿",
    },
  ],
});
