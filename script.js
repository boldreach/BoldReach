// (function () {
//     var all = document.getElementsByTagName("*");
//     var el;
//     for (var i = 0, max = all.length; i < max; i++) {
//         el = all[i];
//         if (el.offsetWidth > document.documentElement.clientWidth) {
//             console.log(el);
//         }
//     }
// })();

const hamburger = document.querySelector('.hamburger');
const full = document.querySelector('.full-screen');
const navItems = document.querySelectorAll('.nav-list li a');

flag = 0;

hamburger.addEventListener('click', () => {
    if (flag == 0) {
        full.style.top = 0;
        flag = 1;
    }
    else {
        full.style.top = '-100%';
        flag = 0;
    }
});

navItems.forEach((item) => {
    item.addEventListener('click', () => {
        full.style.top = '-100%';
    });
})

const crsr = document.querySelector(".cursor")


window.addEventListener("mousemove", function (dets) {

    // crsr.style.top = dets.y - 12 + "px"
    // crsr.style.left = dets.x - 12 + "px"
    // crsr_blur.style.top = dets.y - 200 + "px"
    // crsr_blur.style.left = dets.x - 200 + "px"

    crsr.animate({
        top: `${dets.y}px`,
        left: `${dets.x}px`,
    }, { duration: 1000, fill: "forwards" })

})