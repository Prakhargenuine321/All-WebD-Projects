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