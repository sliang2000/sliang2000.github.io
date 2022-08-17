setInterval(() => {
  // let create_time = Math.round(new Date('2021-10-15 00:00:00').getTime() / 1000); //在此行修改建站时间
  // 有苹果用户发现safari浏览器不能正常运行，百度了一下发现是格式化的问题，改成下面这种应该就可以了。感谢反馈。
  let create_time = Math.round(
    new Date("2022/06/20 00:00:00").getTime() / 1000
  ); //在此行修改建站时间
  let timestamp = Math.round(new Date().getTime() / 1000);
  let second = timestamp - create_time;
  let time = new Array(0, 0, 0, 0, 0);

  var nol = function (h) {
    return h > 9 ? h : "0" + h;
  };
  if (second >= 365 * 24 * 3600) {
    time[0] = parseInt(second / (365 * 24 * 3600));
    second %= 365 * 24 * 3600;
  }
  if (second >= 24 * 3600) {
    time[1] = parseInt(second / (24 * 3600));
    second %= 24 * 3600;
  }
  if (second >= 3600) {
    time[2] = nol(parseInt(second / 3600));
    second %= 3600;
  }
  if (second >= 60) {
    time[3] = nol(parseInt(second / 60));
    second %= 60;
  }
  if (second >= 0) {
    time[4] = nol(second);
  }
  let currentTimeHtml = "";
  if (time[0] != 0) {
    currentTimeHtml += time[0] + " YEAR ";
  }
  currentTimeHtml +=
    time[1] + " DAYS " + time[2] + " : " + time[3] + " : " + time[4];
  document.getElementById("runtime").innerHTML = currentTimeHtml;
}, 1000);

// 新代码

// // 确保其他页面第一个不添加
if (location.pathname == "/") newPost();

// // 最新文章
function newPost() {
  let ls = document.querySelectorAll(".recent-post-info");
  // 先让时间和索引值都等于第一个的
  let time = new Date(
    ls[0].querySelector(".post-meta-date-created").getAttribute("datetime")
  ).getTime();
  let index = 0;
  // 遍历数组，如果有时间比time大的则替换
  ls.forEach((i, num) => {
    let t = new Date(
      i.querySelector(".post-meta-date-created").getAttribute("datetime")
    ).getTime();
    if (t > time) {
      time = t;
      index = num;
    }
  });
  // 单数在右，双数在左
  let className = index % 2 == 0 ? "newPost-right" : "newPost-left";
  ls[index].innerHTML += '<span class="' + className + '">最 新</span>';
  // 如果你不想让其一左一右，可以注释上面的启用下面的
  // ls[index].innerHTML += '<span class="newPost-left">最 新</span>';
}
