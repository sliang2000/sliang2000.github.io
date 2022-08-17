function dark() {
  window.requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;
  var n,
    e,
    i,
    h,
    t = 0.05,
    s = document.getElementById("universe"),
    o = !0,
    a = "180,184,240",
    r = "226,225,142",
    d = "226,225,224",
    c = [];

  function f() {
    (n = window.innerWidth),
      (e = window.innerHeight),
      (i = 0.216 * n),
      s.setAttribute("width", n),
      s.setAttribute("height", e);
  }
  function u() {
    h.clearRect(0, 0, n, e);
    for (var t = c.length, i = 0; i < t; i++) {
      var s = c[i];
      s.move(), s.fadeIn(), s.fadeOut(), s.draw();
    }
  }
  function y() {
    (this.reset = function () {
      (this.giant = m(3)),
        (this.comet = !this.giant && !o && m(10)),
        (this.x = l(0, n - 10)),
        (this.y = l(0, e)),
        (this.r = l(1.1, 2.6)),
        (this.dx = l(t, 6 * t) + (this.comet + 1 - 1) * t * l(50, 120) + 2 * t),
        (this.dy = -l(t, 6 * t) - (this.comet + 1 - 1) * t * l(50, 120)),
        (this.fadingOut = null),
        (this.fadingIn = !0),
        (this.opacity = 0),
        (this.opacityTresh = l(0.2, 1 - 0.4 * (this.comet + 1 - 1))),
        (this.do = l(5e-4, 0.002) + 0.001 * (this.comet + 1 - 1));
    }),
      (this.fadeIn = function () {
        this.fadingIn &&
          ((this.fadingIn = !(this.opacity > this.opacityTresh)),
          (this.opacity += this.do));
      }),
      (this.fadeOut = function () {
        this.fadingOut &&
          ((this.fadingOut = !(this.opacity < 0)),
          (this.opacity -= this.do / 2),
          (this.x > n || this.y < 0) && ((this.fadingOut = !1), this.reset()));
      }),
      (this.draw = function () {
        if ((h.beginPath(), this.giant))
          (h.fillStyle = "rgba(" + a + "," + this.opacity + ")"),
            h.arc(this.x, this.y, 2, 0, 2 * Math.PI, !1);
        else if (this.comet) {
          (h.fillStyle = "rgba(" + d + "," + this.opacity + ")"),
            h.arc(this.x, this.y, 1.5, 0, 2 * Math.PI, !1);
          for (var t = 0; t < 30; t++)
            (h.fillStyle =
              "rgba(" +
              d +
              "," +
              (this.opacity - (this.opacity / 20) * t) +
              ")"),
              h.rect(
                this.x - (this.dx / 4) * t,
                this.y - (this.dy / 4) * t - 2,
                2,
                2
              ),
              h.fill();
        } else
          (h.fillStyle = "rgba(" + r + "," + this.opacity + ")"),
            h.rect(this.x, this.y, this.r, this.r);
        h.closePath(), h.fill();
      }),
      (this.move = function () {
        (this.x += this.dx),
          (this.y += this.dy),
          !1 === this.fadingOut && this.reset(),
          (this.x > n - n / 4 || this.y < 0) && (this.fadingOut = !0);
      }),
      setTimeout(function () {
        o = !1;
      }, 50);
  }
  function m(t) {
    return Math.floor(1e3 * Math.random()) + 1 < 10 * t;
  }
  function l(t, i) {
    return Math.random() * (i - t) + t;
  }
  f(),
    window.addEventListener("resize", f, !1),
    (function () {
      h = s.getContext("2d");
      for (var t = 0; t < i; t++) (c[t] = new y()), c[t].reset();
      u();
    })(),
    (function t() {
      document.getElementsByTagName("html")[0].getAttribute("data-theme") ==
        "dark" && u(),
        window.requestAnimationFrame(t);
    })();
}
dark();

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

  document.getElementById("dark").addEventListener("click", function () {
    navFn.switchDarkMode();
  });
});
