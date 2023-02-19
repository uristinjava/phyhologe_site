gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


if (ScrollTrigger.isTouch !== 1) {
    ScrollSmoother.create({

        start: '.start',
        smooth: 1.5,
        effects: true,

    })

    gsap.fromTo('.hero', { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.hero',
            start: '85',
            end: '850',
            scrub: true,
        }
    });


    let itemsL = gsap.utils.toArray('.box_start_left .item_start');
    itemsL.forEach(item => {
        gsap.fromTo(item, { x: -200, opacity: 0 }, {
            opacity: 1,
            x: 0,
            scrollTrigger: {
                trigger: item,
                scrub: true,
            }
        })
    })
    let itemsR = gsap.utils.toArray('.box_start_right .item_start');
    itemsR.forEach(item => {
        gsap.fromTo(item, { x: 200, opacity: 0 }, {
            opacity: 1,
            x: 0,
            scrollTrigger: {
                trigger: item,
                scrub: true,
            }
        })
    })






}

window.onload = function () {
    setTimeout(() => {

        document.body.classList.add('loaded')

        //плавно едвижение фона 
        Draggable.create('.gallery', {
            bounds: "main",
            inertia: true
        })
    }, 200);

}