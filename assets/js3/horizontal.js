gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray(".section");

gsap.to(sections, {
    xPercent: -100 * (sections.length),
    ease: "none",
    scrollTrigger: {
        trigger: ".horizontalWrap",
        pin: true,
        scrub: 1,
        end: "+=4000",
        markers: false,
    },
});