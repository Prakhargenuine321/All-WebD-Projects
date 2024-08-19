gsap.registerPlugin(ScrollTrigger);
var timeout;

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

scroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// Example ScrollTrigger animation
gsap.from('#text-about', {
  scrollTrigger: {
    trigger: '#about',
    scroller: "#main", // Make sure to set the scroller
    start: "top 30%", // Adjust this based on when you want the animation to start
    end: "center center",
    scrub: true,
  },
  y:20,
  stagger:0.3,
  ease: Expo.easeInOut,
  duration:1,
  opacity:0
});

function firstPageAnim() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "20",
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 1,
  })
    .to(".bounding-elem", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 1,
      stagger: 0.2,
      delay: -1,
      rotate: 180,
    })
    .to(".bounding-elem", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 1,
      stagger: 0.2,
      rotate: 0,
    });

  gsap.from("#mini-heading h5", {
    opacity: 0,
    y: 20,
    stagger: 0.2,
    delay: 0.2,
    duration: 0.6,
  });

  gsap.from("#hero-footer", {
    opacity: 0,
    duration: 1,
    delay: 1,
  });
}

firstPageAnim();

//animating "#second"...
document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
    gsap.to(elem.querySelector("h1"), {
      opacity: 0.7,
      x: 0,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    let diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });

    gsap.to(elem.querySelector("h1"), {
      opacity: 0.3,
      x: 30,
    });
  });
});

//trying to build single function to get hover effect

function hoverEffect() {
  //taking element as an Input
  document
    .querySelector("#text-about a")
    .addEventListener("mouseover", function () {
      gsap.to("#text-about a", {
        backgroundColor: "white",
        color: "black",
        fontWeight: "900",
      });
    });
  document
    .querySelector("#text-about a")
    .addEventListener("mouseleave", function () {
      gsap.to("#text-about a", {
        backgroundColor: "black",
        color: "white",
        fontWeight: "400",
      });
    });
}

hoverEffect();

//putting real-time time update
let dateUpdate = document.querySelector("#date-update");

setInterval(function () {
  let date = new Date();
  const fullTimeString = date.toTimeString();
  const timeAndGMT =
    fullTimeString.split(" ")[0] +
    " " +
    fullTimeString.split(" ")[1].slice(0, 3);
  dateUpdate.innerHTML = timeAndGMT;
}, 1000);

//changing "icon"
document.querySelectorAll("#hero-footer a i").forEach(function (elem) {
  elem.parentElement.addEventListener("mouseover", function () {
    elem.classList.replace("ri-arrow-right-up-line", "ri-arrow-right-line");
  });

  elem.parentElement.addEventListener("mouseleave", function () {
    elem.classList.replace("ri-arrow-right-line", "ri-arrow-right-up-line");
  });
});

let subscribe = document.querySelector("#subscribe a i");

subscribe.parentElement.addEventListener("mouseover", function () {
  subscribe.classList.replace("ri-arrow-right-up-line", "ri-arrow-right-line");
});

subscribe.parentElement.addEventListener("mouseleave", function () {
  subscribe.classList.replace("ri-arrow-right-line", "ri-arrow-right-up-line");
});

//animating icon-set

document.querySelectorAll(".line-up").forEach(function (elem) {
  elem.parentElement.addEventListener("mouseover", function () {
    var t2 = gsap.timeline();
    t2.from(elem, {
      y: -20,
      ease: Expo.easeInOut,
    }).to(elem, {
      y: 0,
      ease: Expo.easeInOut,
    });
  });
});


// Refresh ScrollTrigger after Locomotive Scroll update
ScrollTrigger.addEventListener("refresh", () => scroll.update());
ScrollTrigger.refresh();