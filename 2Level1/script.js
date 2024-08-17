const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function circleMouseFollower(){
    window.addEventListener("mousemove", function(details){
        document.querySelector("#mini-circle").style.transform = `translate(${details.clientX}px, ${details.clientY}px)`;
    })
}

circleMouseFollower();

function circleChaptaKaro(){
    let xscale = 1;
    let yscale = 1;

    let xprev = 0;
    let yprev = 0;
    window.addEventListener("mousemove", function(details){
        details.clientX - xprev;
        xprev = details.clientX;
    });
}

function firstPageAnim(){
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: '20',
        opacity: 0,
        ease: Expo.easeInOut,
        duration:1
    })
    .to(".bounding-elem", {
        y: 0,
        ease: Expo.easeInOut,
        duration:1,
        stagger:0.2,
        delay:-1
    })
    .to(".bounding-elem", {
        y: 0,
        ease: Expo.easeInOut,
        duration:1,
        stagger:0.2
    })

    gsap.from("#mini-heading h5", {
        opacity: 0,
        y: 20,
        stagger: 0.2,
        delay:0.2,
        duration:0.6
    })

    gsap.from("#hero-footer", {
        opacity: 0,
        duration:1,
        delay:1
    })
}

firstPageAnim();