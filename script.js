// gsap.from("#left",{
//   x:-300,
//   duration:1,
//   delay:1
//  })
//  gsap.from("#middle",{
//   y:-300,
//   duration:1,
//   delay:1
//  })

//  gsap.from("#right",{
//   x:300,
//   duration:1,
//   delay:1
//  })
gsap.registerPlugin(ScrollTrigger);

gsap.from("#left", {
    x: -300,
    duration: 1,
    scrollTrigger: {
        trigger: "#left",
        start: "top 80%", // Animation starts when 80% of viewport sees it
        end: "top 30%",
        scrub: 1 // Smooth scrolling effect
    }
});

gsap.from("#middle", {
    y: -300,
    duration: 1,
    scrollTrigger: {
        trigger: "#middle",
        start: "top 80%",
        end: "top 30%",
        scrub: 1
    }
});

gsap.from("#right", {
    x: 300,
    duration: 1,
    scrollTrigger: {
        trigger: "#right",
        start: "top 80%",
        end: "top 30%",
        scrub: 1
    }
});