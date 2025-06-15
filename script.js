gsap.from(".header-logo", {
    duration: 1,
    y: -100,
    opacity: 0,
    ease: "power2.out"
})

gsap.from(".home-container .left", {
    duration: 1,
    x: -100,
    opacity: 0,
    ease: "power2.out",
    delay: 0.5
})

gsap.from(".home-container .right img", {
    duration: 1,
    y: 100,
    opacity: 0,
    ease: "power2.out",
    delay: 0.5
})

gsap.from(".home-container .right .box-one", {
    duration: 1,
    x: 100,
    opacity: 0,
    ease: "power2.out",
    delay: 1.5
})

gsap.from(".home-container .right .box-two", {
    duration: 1,
    x: -100,
    opacity: 0,
    ease: "power2.out",
    delay: 1.5
})



// SERVICE PAGE ANIMATION

gsap.registerPlugin(ScrollTrigger);

gsap.from(".service .section-heading", {
    scrollTrigger: {
        trigger: ".service",
        start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
});

gsap.from(".service p", {
    scrollTrigger: {
        trigger: ".service",
        start: "top 80%",
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    ease: "power2.out"
});

gsap.from(".service-card", {
    scrollTrigger: {
        trigger: ".services-container",
        start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out"
});


// SERVICE PAGE ANIMATION

// ABOUT PAGE ANIMATION

const aboutTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".about",
        start: "top 80%",
    }
});

// Left Image
aboutTimeline.from(".about-left img", {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
});

// Heading
aboutTimeline.from(".about-right .section-heading", {
    y: -50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
}, "-=0.6");

// Paragraph
aboutTimeline.from(".about-right p", {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
}, "-=0.6");

// Cards (Stagger)
aboutTimeline.from(".about-card", {
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out"
}, "-=0.4");
// ABOUT PAGE ANIMATION

// HOW IT WORKS PAGE ANIMATION

// Animate section fade-in
gsap.from(".howitworks-content", {
    scrollTrigger: {
        trigger: ".howitworks",
        start: "top 80%",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out"
});


gsap.from(".work-card", {
    scrollTrigger: {
        trigger: ".work-cards",
        start: "top 80%",
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.2 // cards animate one by one
});

// DONATE PAGE ANIMATION
gsap.from(".donate-info", {
    scrollTrigger: {
        trigger: ".donate",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out"
});

gsap.from(".donate-info button", {
    scrollTrigger: {
        trigger: ".donate",
        start: "top 75%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    scale: 0.8,
    duration: 0.6,
    delay: 0.2,
    ease: "back.out(1.7)"
});

// DONATE PAGE ANIMATION    

// TESTIMONIALS PAGE ANIMATION
gsap.from(".test-card", {
    scrollTrigger: {
        trigger: ".testimonials",
        start: "top 80%",
        toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out"
});

gsap.from(".testimonials button", {
    scrollTrigger: {
        trigger: ".testimonials",
        start: "top 75%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    scale: 0.9,
    duration: 0.6,
    delay: 1.2,
    ease: "back.out(1.7)"
});

// TESTIMONIALS PAGE ANIMATION

// FOOTER ANIMATION

// Animate the entire footer on scroll
gsap.from("footer", {
    scrollTrigger: {
        trigger: "footer",
        start: "top 80%",
        toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out"
});

// Stagger animation for the App Store and Play Store buttons
gsap.from(".playstore img", {
    scrollTrigger: {
        trigger: "footer",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    y: 20,
    stagger: 0.3,
    delay: 0.5,
    duration: 0.8,
    ease: "power2.out"
});
// FOOTER ANIMATION