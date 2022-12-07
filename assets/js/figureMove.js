gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

gsap.to(".txt1", {
    x: -100,
    scrollTrigger: {
        scrub: 1,
    }
})
gsap.to(".txt3", {
    x: 100,
    scrollTrigger: {
        scrub: 1,
    }
})

gsap.to(".figureImg__inner .img1, .figureImg__inner .img2", {
    rotation: 550,
    scrollTrigger: {
        scrub: 1,
    }
})

gsap.to(".figureImg__inner .img3", {
    rotation: -400,
    scrollTrigger: {
        scrub: 1,
    }
})