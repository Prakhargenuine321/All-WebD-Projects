var timeout;

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
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
    })
    .to(".bounding-elem", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 1,
      stagger: 0.2,
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

function circleChaptaKaro() {
  // define default scale value
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    clearTimeout(timeout);

    xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

    xprev = dets.clientX;
    yprev = dets.clientY;

    circleMouseFollower(xscale, yscale);

    timeout = setTimeout(function () {
      document.querySelector(
        "#mini-circle"
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
    }, 0.5);
  });
}

function circleMouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#mini-circle"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
  });
}

circleChaptaKaro();
circleMouseFollower();
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
        opacity: .7,
        x: 0
      })
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
        opacity: .3,
        x: 30
      })
    });
  });