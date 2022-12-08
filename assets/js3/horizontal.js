gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray(".section");
// const sectionsDesc = gsap.utils.toArray(".section__titleDescWrap");

gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".horizontalWrap",
        pin: true,
        scrub: 1,
        end: "+=5000",
        markers: true,
    },
});

// gsap.to(sectionsDesc, {
//     xPercent: -100 * (sectionsDesc.length),
//     ease: "none",
//     scrollTrigger: {
//         trigger: ".horizontalDescWrap",
//         pin: true,
//         scrub: 1,
//         end: "+=5000",
//         markers: true,
//     },
// });