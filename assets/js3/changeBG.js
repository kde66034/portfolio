gsap.utils.toArray(".backColor").forEach((elem) => {

let color = elem.getAttribute('data-color');
    
ScrollTrigger.create({
    trigger: elem,
    start: 'top 20%',
    end: 'bottom 20%',
    markers: false,
        onEnter: () => gsap.to('body', {
            backgroundColor: color,
            duration: 0.08
        }),
        onLeave: () => gsap.to('body', {
            backgroundColor: '#FFFFFF',
            duration: 0.08
        }),
        onLeaveBack: () => gsap.to('body', {
            backgroundColor: '#FFFFFF',
            duration: 0.08
        }),
        onEnterBack: () => gsap.to('body', {
            backgroundColor: color,
            duration: 0.08
        }),
    });
});