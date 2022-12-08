const cursor = document.querySelector(".mouse__cursor");
const figure = document.querySelectorAll("figure");
const black = document.querySelectorAll(".black")

window.addEventListener("mousemove", e => {
    // GSAP
    gsap.to(cursor, {duration: 0.3, left: e.pageX -15, top:e.pageY -15});

    // 오버 효과
    // mouseenter / mouseover / 이벤트 버블링
    figure.forEach(figure => {
        figure.addEventListener("mouseenter", () => {
            cursor.classList.add("active");
        });
        figure.addEventListener("mouseleave", () => {
            cursor.classList.remove("active");
        });
    });
    
    // 오버 효과 2 - 흰색배경에서 블랙 커서로
    black.forEach(black => {
        black.addEventListener("mouseenter", () => {
            cursor.classList.add("black");
        });
        black.addEventListener("mouseleave", () => {
            cursor.classList.remove("black");
        });
    });
});