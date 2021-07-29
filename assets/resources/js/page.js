
document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        document.addEventListener("DOMContentLoaded", function () {

            if (!isMobile) {
        
        
        
        
        
                const preloader = function () {
                    const loadOverlay = document.querySelector(".init-load")
                    const overlayInner = document.querySelector(".init-load .inner")
                    const count1 = document.querySelector(".c-first .count")
                    const count2 = document.querySelector(".c-second .count")
                    const count3 = document.querySelector(".c-third .count")
                    const percentage = document.querySelector(".init-load .percentage")
                    const countHeight1 = document.querySelector(".counter.c-first .count").offsetHeight
                    const countHeight2 = document.querySelector(".counter.c-second .count").offsetHeight
                    const countHeight3 = document.querySelector(".counter.c-third .count").offsetHeight
                    const counterFrag1 = countHeight1 / 2
                    const counterFrag2 = countHeight2 / 11
                    const counterFrag3 = countHeight3 / 101
                    console.log(countHeight3)
        
                    gsap.set(count3, { y: counterFrag3 })
                    gsap.set(count2, { y: counterFrag2 })
                    gsap.set(count1, { y: counterFrag1 })
                    gsap.set(loadOverlay, { opacity: 1 })
                    gsap.set(percentage, { opacity: 0 })
        
        
                    const countTimeline = gsap.timeline()
                    countTimeline.to(count3, {
                        y: -counterFrag1 * 25,
                        duration: 1,
                        ease: "power4.inOut"
                    })
                    countTimeline.to(count2, {
                        y: -counterFrag1 * 2,
                        duration: 1,
                        ease: "power4.inOut"
                    }, "-=1")
                    countTimeline.to(count1, {
                        y: 0,
                        duration: 1,
                        ease: "power4.inOut"
                    }, "-=1")
                    countTimeline.to(percentage, {
                        opacity: 1,
                        duration: 1,
                        ease: "power4.inOut"
                    }, "-=1")
                    countTimeline.to(count3, {
                        y: -counterFrag1 * 48,
                        duration: .5,
                        ease: "power4.inOut"
                    })
                    countTimeline.to(count2, {
                        y: -counterFrag1 * 4,
                        duration: .5,
                        ease: "power4.inOut"
                    }, "-=.5")
                    countTimeline.to(count3, {
                        y: -counterFrag1 * 74,
                        duration: .8,
                        ease: "power4.inOut"
                    })
                    countTimeline.to(count2, {
                        y: -counterFrag1 * 7,
                        duration: .8,
                        ease: "power4.inOut"
                    }, "-=.8")
                    countTimeline.to(count3, {
                        y: -counterFrag1 * 100,
                        duration: .65,
                        ease: "power4.inOut"
                    })
                    countTimeline.to(count2, {
                        y: -counterFrag1 * 10,
                        duration: .65,
                        ease: "power4.inOut",
                    }, "-=.65")
                    countTimeline.to(count1, {
                        y: -counterFrag1,
                        duration: .65,
                        ease: "power4.inOut",
                    }, "-=.65")
                    countTimeline.to(overlayInner, {
                        scale: 1,
                        duration: .3,
                        ease: "power4.inOut",
                        onComplete: intAnim
                    })
                    countTimeline.to(loadOverlay, {
                        x: "100%",
                        duration: 1,
                        ease: "power4.inOut"
                    }, "-=.3")
        
                }
                preloader()
        
        
        
            } else {
        
        
                const intAnim = function () {
                    gsap.timeline({}).from("#b", {
                        transform: ('scale(1)'), duration: 2, ease: 'power1.In', opacity: 0
                    }, "-=1")
        
                }
        
        
                const preloader = function () {
                    const loadOverlay = document.querySelector(".init-load")
                    const overlayInner = document.querySelector(".init-load .inner")
                    const count1 = document.querySelector(".c-first .count")
                    const count2 = document.querySelector(".c-second .count")
                    const count3 = document.querySelector(".c-third .count")
                    const percentage = document.querySelector(".init-load .percentage")
                    const countHeight1 = document.querySelector(".counter.c-first .count").offsetHeight
                    const countHeight2 = document.querySelector(".counter.c-second .count").offsetHeight
                    const countHeight3 = document.querySelector(".counter.c-third .count").offsetHeight
                    const counterFrag1 = countHeight1 / 2
                    const counterFrag2 = countHeight2 / 11
                    const counterFrag3 = countHeight3 / 101
                    console.log(countHeight3)
        
                    gsap.set(count3, { y: counterFrag3 })
                    gsap.set(count2, { y: counterFrag2 })
                    gsap.set(count1, { y: counterFrag1 })
                    gsap.set(loadOverlay, { opacity: 1 })
                    gsap.set(percentage, { opacity: 0 })
        
        
                    const countTimeline = gsap.timeline()
                    countTimeline.to(count3, {
                        y: -counterFrag1 * 25,
                        duration: 1,
                        ease: "power4.inOut"
                    })
                    countTimeline.to(count2, {
                        y: -counterFrag1 * 2,
                        duration: 1,
                        ease: "power4.inOut"
                    }, "-=1")
                    countTimeline.to(count1, {
                        y: 0,
                        duration: 1,
                        ease: "power4.inOut"
                    }, "-=1")
                    countTimeline.to(percentage, {
                        opacity: 1,
                        duration: 1,
                        ease: "power4.inOut"
                    }, "-=1")
                    countTimeline.to(count3, {
                        y: -counterFrag1 * 48,
                        duration: .5,
                        ease: "power4.inOut"
                    })
                    countTimeline.to(count2, {
                        y: -counterFrag1 * 4,
                        duration: .5,
                        ease: "power4.inOut"
                    }, "-=.5")
                    countTimeline.to(count3, {
                        y: -counterFrag1 * 74,
                        duration: .8,
                        ease: "power4.inOut"
                    })
                    countTimeline.to(count2, {
                        y: -counterFrag1 * 7,
                        duration: .8,
                        ease: "power4.inOut"
                    }, "-=.8")
                    countTimeline.to(count3, {
                        y: -counterFrag1 * 100,
                        duration: .65,
                        ease: "power4.inOut"
                    })
                    countTimeline.to(count2, {
                        y: -counterFrag1 * 10,
                        duration: .65,
                        ease: "power4.inOut",
                    }, "-=.65")
                    countTimeline.to(count1, {
                        y: -counterFrag1,
                        duration: .65,
                        ease: "power4.inOut",
                    }, "-=.65")
                    countTimeline.to(overlayInner, {
                        scale: 1,
                        duration: .3,
                        ease: "power4.inOut",
                        onComplete: intAnim
                    })
                    countTimeline.to(loadOverlay, {
                        x: "100%",
                        duration: 1,
                        ease: "power4.inOut"
                    }, "-=.3")
        
                }
                preloader()
        
        
            }
        
        });
        function isMobile() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        }

// locomotive Scroll

gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".smooth-scroll"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".smooth-scroll", {
    scrollTop(value) {
        return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
        };
    }

    // follwoing line is not required to work pinning on touch screen

    /* pinType: document.querySelector(".smooth-scroll").style.transform
      ? "transform"
      : "fixed"*/
});



locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

ScrollTrigger.config({
    autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
});
    }

// header sec

// canvas

const clip = document.querySelector('.iphone_aufnahme_2');
function redrawClipPath() {
    clip.style.clipPath = 'none';
    clip.offsetWidth; // force a style recalculation
    clip.style.clipPath = 'url(#myClip)';
}

const language_switch = window.location.href;

if (language_switch.indexOf('de-DE') > -1) {
    var language1 = 'schließen';
    var language2 = 'aktiv';
    var language3 = 'Backends';
    var language4 = 'Realität.';
    var language5 = 'Schmeckt gut, wa? 🎉';
} else {
    var language1 = 'close';
    var language2 = 'Disable';
    var language3 = 'about your backend security.';
    var language4 = 'Reality.';
    var language5 = 'Cookies accepted bro 🎉';
}
let gsap_teaser_video_sound_toggle = gsap.timeline({
    id: 'gsap_teaser_video_sound_toggle',
    paused: true,
});

gsap_teaser_video_sound_toggle.to('.iphone_aufnahme_2_player_ui_text_animation', { text: { value: language2 }, duration: 2, ease: 'power3.inOut' }, 0);
gsap_teaser_video_sound_toggle.to('.iphone_aufnahme_2_player_ui_icon_animation_1', { opacity: 1, duration: 1, ease: 'power3.inOut' }, 0);
gsap_teaser_video_sound_toggle.to('.iphone_aufnahme_2_player_ui_icon_animation_2', { opacity: 2, duration: 2, ease: 'power3.inOut' }, 0);

const teaser_video = document.getElementById('teaser_video');

window.teaser_video_sound = function teaser_video_sound_func() {
    if (teaser_video.classList.contains('sound_on')) {
        function teaser_video_sound_func_disable() {
            teaser_video.muted = true;
            teaser_video.classList.remove('sound_on');
            gsap_teaser_video_sound_toggle.reverse();
        }
        teaser_video_sound_func_disable();
    } else {
        gsap_teaser_video_sound_toggle.play();
        teaser_video.classList.add('sound_on');
        teaser_video.muted = false;
    }
};
// const canvas = document.getElementById('laptop_anim_inner_canvas');
// const context = canvas.getContext('2d');

// canvas.width = 1920;
// canvas.height = 1080;

// const frameCount = 27;

// if ('') {
//     var currentFrame = (index) => (
//         `anima/ezgif-frame-${(index + 1).toString().padStart(3, '0')}.jpg`
//     );
// } else {
//     var currentFrame = (index) => (
//         `anima/ezgif-frame-${(index + 1).toString().padStart(3, '0')}.jpg`
//     );
// }

// const images = [];
// const laptop = {
//     frame: 0,
// };

// for (let i = 0; i < frameCount; i++) {
//     const img = new Image();
//     img.src = currentFrame(i);
//     images.push(img);
// }

// images[0].onload = render;

// function render() {
//     context.clearRect(0, 0, canvas.width, canvas.height);
//     context.drawImage(images[laptop.frame], 0, 0);
// }




    const home_start = gsap.timeline({
        id: 'start_1',
        scrollTrigger: {
            trigger: '.start',
            start: 'top top',
            end: '5000 center',
            scroller: ".smooth-scroll",
            markers: false,
            pin: true,
            pinReparent: true,
            scrub: 2,
        },
    });
    // home_start.to('.container_start', {
    //     borderRadius: ('25px'), transform: ('scale(0.7)'), boxShadow: ('0px 0px 100px -20px rgba(0,0,0,0.4)'), duration: 5, ease: 'power1.inOut',
    // }, 0);
    home_start.to("#b", {
        transform: ('scale(1)'), duration: 5, ease: 'power1.inOut',
    }, ""),
        home_start.to("#r", {
            transform: ('scale(1)'), duration: 5, ease: 'power1.inOut', stagger: 0.2
        }, "-=4")
    home_start.to(" #i", {
        transform: ('scale(1)'), duration: 5, ease: 'power1.inOut', stagger: 0.2
    }, "-=4")
    home_start.to("#d", {
        transform: ('scale(1)'), duration: 5, ease: 'power1.inOut', stagger: 0.2
    }, "-=4.1")
    home_start.to("#g", {
        transform: ('scale(1)'), duration: 5, ease: 'power1.inOut', stagger: 0.2
    }, "-=4.2")
    home_start.to("#e", {
        transform: ('scale(1)'), duration: 5, ease: 'power1.inOut', stagger: 0.2
    }, "-=4.5")
    home_start.from(".small_heading", {
        opacity: 0, y: 100, duration: 6, ease: "power1.In"
    }, "10")
    home_start.to(".chapt-icon .inner", {
        rotation: 136,
        duration: 1, ease: 'none',
    })
    // home_start.to('.container_start', { opacity: 0.2, duration: 5, ease: 'power1.inOut' }, 15);
    home_start.to('.container_lets_get_shit', { opacity: 1, duration: 5, ease: 'power1.inOut' }, 5);
    home_start.to('.container_lets_get_shit', { display: ('block'), ease: 'power1.inOut' }, 4);
    home_start.to('.lets', { opacity: 1, duration: 2, ease: 'power1.inOut' }, 11);
    home_start.to('.get', { opacity: 1, duration: 2, ease: 'power1.inOut' }, 13);
    home_start.to('.shit', { opacity: 1, duration: 2, ease: 'power1.inOut' }, 15);
    home_start.to('.done', { opacity: 1, duration: 2, ease: 'power1.inOut' }, 17);
    home_start.to('.container_lets_get_shit', { scale: 1.5, duration: 10, ease: 'power2.in' }, 17);
      home_start.to('.container_lets_get_shit', { scale: 3, duration: 10, ease: 'power2.out' }, 27);
      home_start.to('.container_start', { scale: 0.5, duration: 10, ease: 'power2.out' }, 27);
      home_start.to('.container_lets_get_shit', { duration: 15, ease: 'power1.inOut' }, 25);
      home_start.to('.container_start', { duration: 15, ease: 'power1.inOut' }, 24);
      home_start.to('.container_start', { duration: 15, ease: 'power1.inOut' }, 24);
    home_start.set('.container_phone', { display: ('block') }, 30);
    home_start.to('.transition_to_phone', { opacity: 1, duration: 10, ease: 'power2.out' }, 26);
    home_start.to('.container_start', { display: ('none') }, 31);
    home_start.to('.container_lets_get_shit', { display: ('none') }, 31);
    home_start.set('.container_phone_content_together', {}, 31);
      home_start.fromTo('.iphone_bg_font_container', { opacity: 0, scale: 2.5 }, {
        scale: 1, opacity: 1, duration: 8, ease: 'power1.inOut',
      }, 31);
      home_start.to('.iphone_bg_font', { text: { value: 'push beyond imagination.', newClass: 'iphone_bg_font_2' }, duration: 8, ease: 'power1.inOut' }, 33);
      home_start.fromTo('.phone_x_box', { y: 500, scale: 2, opacity: 0 }, {
        y: 0, scale: 1, opacity: 1, duration: 8, ease: 'power1.inOut',
      }, 31);
      home_start.fromTo('.iphone_2', { opacity: 0 }, {
        x: -170, scale: 1, opacity: 1, duration: 8, ease: 'power1.inOut',
      }, 38);
      home_start.fromTo('.iphone_3', { opacity: 0 }, {
        x: 250, scale: 1, opacity: 1, duration: 8, ease: 'power1.inOut',
      }, 38);
      home_start.to('.iphone_bg_font', { opacity: 0, duration: 8, ease: 'power1.inOut' }, 44);
      home_start.to('.iphone_bg_font_container', { opacity: 0, duration: 8, ease: 'power1.inOut' }, 44);
      home_start.to('.container_phone_content_together', { duration: 8, ease: 'power1.inOut' }, 43);
    

      home_start.fromTo('.iphone_bg_font_2', { opacity: 0, scale: 0.5 }, {
        opacity: 0.2, scale: 1, duration: 10, ease: 'power1.inOut',
      }, 43);
      home_start.set('.iphone_aufnahme', { opacity: 1, duration: 15, ease: 'power1.inOut' }, 45);
      home_start.set('.tablet_container', { display: ('block') }, 45);
      home_start.to('.iphone_2', {
        x: -300, opacity: 1, duration: 8, ease: 'power1.inOut',
      }, 57);
      home_start.to('.iphone_3', {
        x: 350, opacity: 1, duration: 8, ease: 'power1.inOut',
      }, 57);
      home_start.to('.phone_x_box', { rotate: 90, duration: 5, ease: 'power1.inOut' }, 60);
      home_start.to('.iphone_aufnahme', { opacity: 0, duration: 5, ease: 'power1.inOut' }, 60);
      home_start.to('.phone_x_box', {
        scale: 3, opacity: 1, duration: 5.5, ease: 'power1.inOut',
      }, 65);
      home_start.set('.iphone_aufnahme_2', {
        display: 'block', width: "100vw", height: "100vh", opacity: 0,
      }, 65);
      home_start.set('.iphone_aufnahme_2_player_ui', { display: 'block', opacity: 0 }, 65);
      home_start.to('.iphone_aufnahme_2', { opacity: 1, duration: 2, ease: 'power1.inOut' }, 68);
      home_start.to('.container_phone_content_together', { display: 'none' }, 70);
      home_start.add(
        () => {
          teaser_video.pause();
        }, null, 67,
      );
      home_start.add(
        () => {
          teaser_video.play();
        }, null, 68,
      );
      home_start.to('.iphone_bg_font', { opacity: 0 }, 72);
      home_start.fromTo('.iphone_aufnahme_2_player_ui', { opacity: 0, y: 50 }, {
        y: 0, opacity: 1, duration: 5, ease: 'power1.inOut',
      }, 72);
      home_start.to('.iphone_bg_font_2', { opacity: 0 }, 72);
      home_start.to('.iphone_reel_teaser', { opacity: 0 }, 72);
      home_start.to('.iphone_aufnahme_2', { duration: 20, ease: 'power1.inOut' }, 72);
    const responsive_1 = window.matchMedia('(min-width:1100px) and (max-width: 1200px)');
const responsive_2 = window.matchMedia('(min-width:1200px) and (max-width: 1300px)');
const responsive_3 = window.matchMedia('(min-width:1300px) and (max-width: 1400px)');
const responsive_4 = window.matchMedia('(min-width:1400px) and (max-width: 1500px)');
const responsive_5 = window.matchMedia('(min-width:1500px) and (max-width: 1600px)');
const responsive_6 = window.matchMedia('(min-width:1600px) and (max-width: 1700px)');
const responsive_7 = window.matchMedia('(min-width:1700px) and (max-width: 1800px)');
const responsive_8 = window.matchMedia('(min-width:1800px) and (max-width: 1900px)');
const responsive_9 = window.matchMedia('(min-width:1900px) and (max-width: 2000px)');
const responsive_10 = window.matchMedia('(min-width:2000px)');
if (responsive_1.matches) {
    home_start.to('.iphone_aufnahme_2_evolves_mask_logo_path', {
        scale: 1, translateX: '30vw', translateY: '15vh', duration: 10, ease: 'power1.inOut', onUpdate: redrawClipPath,
    }, 90);
} else if (responsive_2.matches) {
    home_start.to('.iphone_aufnahme_2_evolves_mask_logo_path', {
        scale: 1, translateX: '33vw', translateY: '15vh', duration: 10, ease: 'power1.inOut', onUpdate: redrawClipPath,
    }, 90);
} else if (responsive_3.matches) {
    home_start.to('.iphone_aufnahme_2_evolves_mask_logo_path', {
        scale: 1, translateX: '34vw', translateY: '15vh', duration: 10, ease: 'power1.inOut', onUpdate: redrawClipPath,
    }, 90);
} else if (responsive_4.matches) {
    home_start.to('.iphone_aufnahme_2_evolves_mask_logo_path', {
        scale: 1, translateX: '34vw', translateY: '15vh', duration: 10, ease: 'power1.inOut', onUpdate: redrawClipPath,
    }, 90);
} else if (responsive_5.matches) {
    home_start.to('.iphone_aufnahme_2_evolves_mask_logo_path', {
        scale: 1, translateX: '35vw', translateY: '15vh', duration: 10, ease: 'power1.inOut', onUpdate: redrawClipPath,
    }, 90);
} else if (responsive_6.matches) {
    home_start.to('.iphone_aufnahme_2_evolves_mask_logo_path', {
        scale: 1, translateX: '36vw', translateY: '15vh', duration: 10, ease: 'power1.inOut', onUpdate: redrawClipPath,
    }, 90);
} else if (responsive_7.matches) {
    home_start.to('.iphone_aufnahme_2_evolves_mask_logo_path', {
        scale: 1, translateX: '37vw', translateY: '15vh', duration: 10, ease: 'power1.inOut', onUpdate: redrawClipPath,
    }, 90);
} else if (responsive_8.matches) {
    home_start.to('.iphone_aufnahme_2_evolves_mask_logo_path', {
        scale: 1, translateX: '38vw', translateY: '15vh', duration: 10, ease: 'power1.inOut', onUpdate: redrawClipPath,
    }, 90);
} else if (responsive_9.matches) {
    home_start.to('.iphone_aufnahme_2_evolves_mask_logo_path', {
        scale: 1, translateX: '39vw', translateY: '15vh', duration: 10, ease: 'power1.inOut', onUpdate: redrawClipPath,
    }, 90);
} else if (responsive_10.matches) {
    home_start.to('.iphone_aufnahme_2_evolves_mask_logo_path', {
        scale: 1, translateX: '39vw', translateY: '15vh', duration: 10, ease: 'power1.inOut', onUpdate: redrawClipPath,
    }, 90);
} else {

}
home_start.to('.iphone_aufnahme_2_player_ui', {
    opacity: 0, y: 50, duration: 5, ease: 'power1.inOut',
}, 90);
// home_start.to('.iphone_x', { display: ('none') }, 90);
// home_start.to('.iphone_2', { display: ('none') }, 90);
// home_start.to('.iphone_3', { display: ('none') }, 90);
home_start.to('.iphone_aufnahme_2', { duration: 10, ease: 'power1.inOut' }, 100);
home_start.to('.iphone_aufnahme_2', { y: -50, duration: 10, ease: 'power1.inOut' }, 110);
home_start.fromTo('.tablet_font', { y: 100, opacity: 0 }, {
    y: 0, opacity: 1, duration: 10, ease: 'power1.inOut',
}, 110);
home_start.add(
    () => {
        teaser_video.muted = true;
        teaser_video.classList.remove('sound_on');
        gsap_teaser_video_sound_toggle.reverse();
    }, null, 80,
);
let scroll_tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.gallerys',
        start: "top center",
        scroller: ".smooth-scroll",
        // pin: true,
        scrub: 2,
        end: "+=300",
        // markers: true,
    }
}),
    factss = [...document.querySelectorAll('.gallery__item')]
scroll_tl2.to('.gallery__item h2', {
    scale: 1,
    duration: 1,
    ease: "slow"
})

gsap.to("body", {
    "--color": "red",
    immediateRender: false,
    scrollTrigger: {
        trigger: ".gallerys",
        scroller: ".smooth-scroll",
        scrub: false,
        start: 'top center',
        toggleActions: 'play reset play reset',
        end: '+=500%'
    }
});
scroll_tl2.to(factss, {
    xPercent: -85 * (factss.length - 1),
    scrollTrigger: {
        trigger: ".gallery",
        start: "center center",
        scroller: ".smooth-scroll",
        pin: true,
        // horizontal: true,
        // pinSpacing:false,
        // markers: true,
        scrub: 2,
        snap: 2 / (factss.length - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        // end: () => `+=${smallFactsContainer.offsetWidth}`
        end: () => `+=6000`
    },


});
imagesLoaded(document.querySelectorAll('img'), () => {

});

// Array.from(document.querySelectorAll('#gallery__item-img')).forEach((el) => {
//     const imgs = Array.from(el.querySelectorAll('img'));
//     new hoverEffect({
//         parent: el,
//         intensity: el.dataset.intensity || undefined,
//         speedIn: el.dataset.speedin || undefined,
//         speedOut: el.dataset.speedout || undefined,
//         easing: el.dataset.easing || undefined,
//         hover: el.dataset.hover || undefined,
//         image1: imgs[0].getAttribute('src'),
//         image2: imgs[1].getAttribute('src'),
//         displacementImage: el.dataset.displacement
//     });
// });
gsap.to('progress', {
    value: 100,
    ease: 'none',
    scrollTrigger: {
        scroller: ".smooth-scroll",
        trigger: ".gallery",
        scrub: 2,
        end: () => `+=2000`
    }
});

};


let accordion = document.querySelector('.accordion-list');
let items = accordion.querySelectorAll('li');
let questions = accordion.querySelectorAll('.accordion-title');

questions.forEach(question => question.addEventListener('click', toggleAccordion));

function toggleAccordion(){

    thisItem = this.parentNode;
    
    items.forEach(item => {
        if (thisItem == item){
            thisItem.classList.toggle('open');
            return;
        }

        item.classList.remove('open');
    })

}