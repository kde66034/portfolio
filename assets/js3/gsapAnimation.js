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
        toggleClass: {targets: "webgl__title"},
        animation: tl2
    });
}, 1000)

// 배경색 변경
window.addEventListener("load", function () {
    const scrollColorElems = document.querySelectorAll("[data-bgcolor]");
    scrollColorElems.forEach((colorSection, i) => {
      const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.bgcolor;
      const prevText = i === 0 ? "" : scrollColorElems[i - 1].dataset.textcolor;
  
      ScrollTrigger.create({
        trigger: colorSection,
        scroller: "#main",
        start: "top 50%",
        onEnter: () =>
          gsap.to("body", {
            backgroundColor: colorSection.dataset.bgcolor,
            color: colorSection.dataset.textcolor,
            overwrite: "auto"
          }),
        onLeaveBack: () =>
          gsap.to("body", {
            backgroundColor: prevBg,
            color: prevText,
            overwrite: "auto"
          })
      });
    });
  });