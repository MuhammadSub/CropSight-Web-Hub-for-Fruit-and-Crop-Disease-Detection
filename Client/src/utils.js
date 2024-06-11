export const doAnimations = (elements) => {
  var animationEndEvents =
    "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
  // console.log(elements.getData());
  // var $animationDelay = elements.data("delay");
  // var $animationType = "animated " + elements.data("animation");
  // elements.css({
  //   "animation-delay": $animationDelay,
  //   "-webkit-animation-delay": $animationDelay,
  // });
  // elements.classList.add($animationType).one(animationEndEvents, function () {
  //   elements.classList.remove($animationType);
  // });
};

// Animation with wowjs
export const animation = () => {
  if (typeof window !== "undefined") {
    window.WOW = require("wowjs");
  }
  new WOW.WOW().init();
};

// Sticky nav
export const stickyNav = () => {
  window.addEventListener("scroll", () => {
    let offset = window.scrollY;
    const sticky = document.querySelectorAll(".header-navigation");
    for (let i = 0; i < sticky.length; i++) {
      const stick = sticky[i];
      if (stick) {
        if (offset > 10) {
          stick.classList.add("sticky");
        } else {
          stick.classList.remove("sticky");
        }
      }
    }
  });
};

// Pagination
export const getPagination = (totalNumber, sort) => {
  let arr = new Array(Math.ceil(totalNumber / sort))
    .fill()
    .map((_, idx) => idx + 1);
  return arr;
};

// change pagination and update pagination and content
export const pagination = (listClass, sort, active) => {
  let list = document.querySelectorAll(listClass);
  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    if (active === 1) {
      if (i < sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    } else {
      if (i >= (active - 1) * sort && i < active * sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    }
  }
};

export const scrollTopFun = () => {
  let scrollUp = document.getElementById("scroll-top"),
    lastScrollTop = 0;

  window.addEventListener("scroll", () => {
    let st = window.scrollY;
    if (st < 600) {
      scrollUp.style.display = "none";
    } else {
      scrollUp.style.display = "inline-block";
    }
  });
};
