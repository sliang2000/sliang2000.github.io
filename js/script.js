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

// 黑夜切换
document.addEventListener("DOMContentLoaded", function () {
  const navFn = {
    switchDarkMode: () => {
      // Switch Between Light And Dark Mode
      const nowMode =
        document.documentElement.getAttribute("data-theme") === "dark"
          ? "dark"
          : "light";
      if (nowMode === "light") {
        activateDarkMode();
        saveToLocal.set("theme", "dark", 2);
        GLOBAL_CONFIG.Snackbar !== undefined &&
          btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night);
        document.getElementById("darkmode-switch").innerHTML = " 白天";
      } else {
        activateLightMode();
        saveToLocal.set("theme", "light", 2);
        GLOBAL_CONFIG.Snackbar !== undefined &&
          btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day);
        document.getElementById("darkmode-switch").innerHTML = " 黑夜";
      }
      // handle some cases
      typeof utterancesTheme === "function" && utterancesTheme();
      typeof FB === "object" && window.loadFBComment();
      window.DISQUS &&
        document.getElementById("disqus_thread").children.length &&
        setTimeout(() => window.disqusReset(), 200);
    },
  };

  document.getElementById("darkmodeBt").addEventListener("click", function () {
    navFn.switchDarkMode();
  });
});
