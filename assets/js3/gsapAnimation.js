// split으로 쪼개는 애니메이션
document.querySelectorAll(".split").forEach(desc => {
    let splitText = desc.innerText;
    let splitWrap = splitText.split('').join("</span><span aria-hidden='true'>");
        splitWrap = "<span aria-hidden='true'>" + splitWrap + "</span>";
        desc.innerHTML = splitWrap;
        desc.setAttribute("aria-label", splitText);
})

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

// 인트로 애니메이션
setTimeout(() => {
    let tl = gsap.timeline();

    tl.to(".txt2 span", {duration: 0.6, x: 0, stagger: 0.09, scale: 1, opacity: 1, ease: Power4.easeIn})
    tl.to(".txt1", {duration: 0.5, y:0, opacity: 1, ease: Circ.easeOut}, "d")
    tl.to(".txt3", {duration: 0.5, y:0, opacity: 1, ease: Circ.easeOut}, "d")
    tl.to(".figureImg__inner .img1", {duration: 0.4, scale:1, rotation: 360, opacity: 1, ease: Power3.easeOut})
    tl.to(".figureImg__inner .img2", {duration: 0.4, scale:1, rotation: 360, opacity: 1, ease: Power3.easeOut})
    tl.to(".figureImg__inner .img3", {duration: 0.4, scale:1, rotation: 360, opacity: 1, ease: Power3.easeOut})
    tl.to("#header", {duration: 0.4, top: 0, ease: Power3.easeOut}, "e")
    tl.to(".scroll__btn", {duration: 0.4, y:0, opacity: 1, ease:Circ.easeOut}, "e")
}, 2000)

gsap.to(".txt1", {
    xPercent: -230,
    scrollTrigger: {
        scrub: 1,
    }
})
gsap.to(".txt3", {
    xPercent: 230,
    scrollTrigger: {
        scrub: 1,
    }
})
gsap.to(".figureImg__inner .img1, .figureImg__inner .img2, .figureImg__inner .img3", {
    rotation: -260,
    scrollTrigger: {
        scrub: 1,
    }
})

// script 인트로 애니메이션
setTimeout(() => {
    let tl = gsap.timeline();
    let tl2 = gsap.timeline();
    // let tl3 = gsap.timeline();

    tl.to(".webgl__title span", {trigger: "#webglType", duration: 0.6, x: 0, y: 0, stagger: 0.09, scale: 1, opacity: 1, ease: Power3.easeIn})
    tl2.to(".webgl__title span", {trigger: "#section01", duration: 0.6, x: 0, y: 160, stagger: 0.09, scale: 1, opacity: 0, ease: Power3.easeOut})
    // tl3.to(".webgl__title span", {trigger: "#section01", duration: 0.6, x: 0, y: 0, stagger: 0.09, scale: 1, opacity: 1, ease: Power3.easeIn})

    ScrollTrigger.create({
        trigger: "#webglType",
        start: "top 50%",
        markers: false,
        toggleClass: {targets: ".webgl__title"},
        animation: tl,
    });

    ScrollTrigger.create({
        trigger: "#section01",
        start: "right 50%",
        markers: false,
        toggleClass: {targets: ".webgl__title"},
        animation: tl2
    });
}, 1000)

// intro2Type 애니메이션
setTimeout(() => {
    let tl4 = gsap.timeline();

    tl4.to(".intro_txt1", {trigger: "#intro2Type", duration: 0.5, y:0, opacity: 1, stagger: 0.09, ease: Circ.easeOut})
    tl4.to(".intro_txt2", {trigger: "#intro2Type", duration: 0.5, y:0, opacity: 1, stagger: 0.09, ease: Circ.easeOut})
    tl4.to(".figureImg2__inner .img1", {trigger: "#intro2Type", duration: 0.5, scale:1, stagger: 0.09, rotation: 360, opacity: 1, ease: Power3.easeOut})
    tl4.to(".figureImg2__inner .img2", {trigger: "#intro2Type", duration: 0.5, scale:1, stagger: 0.09, rotation: 360, opacity: 1, ease: Power3.easeOut})

    ScrollTrigger.create({
        trigger: "#intro2Type",
        start: "top 50%",
        markers: false,
        toggleClass: {targets: ".intro2__title__wrap"},
        animation: tl4,
    });
}, 2000)

// outro 애니메이션
setTimeout(() => {
    let tl5 = gsap.timeline();

    tl5.to(".outro__title1", {trigger: "#outro", duration: 0.5, y:0, opacity: 1, stagger: 0.09, ease: Circ.easeOut})
    tl5.to(".outro__title2", {trigger: "#outro", duration: 0.5, y:0, opacity: 1, stagger: 0.09, ease: Circ.easeOut})
    tl5.to(".outro__copyright", {trigger: "#outro", duration: 0.5, y:0, opacity: 1, stagger: 0.09, ease: Circ.easeOut})
    tl5.to(".profile__image", {trigger: "#outro", duration: 0.5, scale:1, stagger: 0.09, opacity: 1, ease: Circ.easeOut})

    ScrollTrigger.create({
        trigger: "#outro",
        start: "top 50%",
        markers: false,
        toggleClass: {targets: ".outro__title__wrap"},
        animation: tl5,
    });
}, 2000)

// 아이콘 움직이기
const mouseMove = (e) => {
    // 마우스 좌표값
    let mousePageX = e.pageX;
    let mousePageY = e.pageY;

    // 마우스 좌표값 가운데로 초기화 : 전체길이 / 2 - 마우스 좌표값 == 0
    let centerPageX = window.innerWidth / 2 - mousePageX;
    let centerPageY = window.innerHeight / 2 - mousePageY;
    
    // GSAP를 통해서 움직이게 하기 
    // introType
    gsap.to(".figureImg__inner .img1", {duration: 0.4, x: -centerPageX/20, y: -centerPageY/20});
    gsap.to(".figureImg__inner .img2", {duration: 0.4, x: centerPageX/20, y: centerPageY/20});
    gsap.to(".figureImg__inner .img3", {duration: 0.4, x: -centerPageX/20, y: -centerPageY/20});
    
    // intro2Type
    gsap.to(".figureImg2__inner .img1", {duration: 0.4, x: -centerPageX/20, y: -centerPageY/20});
    gsap.to(".figureImg2__inner .img2", {duration: 0.4, x: centerPageX/20, y: centerPageY/20});

    // contactImg__inner
    gsap.to(".figure__wrap .img1", {duration: 0.4, x: centerPageX/70, y: centerPageY/120});
    gsap.to(".figure__wrap .img2", {duration: 0.4, x: centerPageX/70, y: centerPageY/120});
    gsap.to(".figure__wrap .img3", {duration: 0.4, x: centerPageX/70, y: centerPageY/120});
}
window.addEventListener("mousemove", mouseMove);