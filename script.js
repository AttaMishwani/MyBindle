gsap.from(".header-logo",{
    duration: 1,
    y: -100,
    opacity: 0,
    ease: "power2.out"
})

gsap.from(".home-container .left",{
    duration: 1,
    x: -100,
    opacity: 0,
    ease: "power2.out",
    delay: 0.5
})

gsap.from(".home-container .right img",{
    duration: 1,
    y: 100,
    opacity: 0,
    ease: "power2.out",
    delay: 0.5
})

gsap.from(".home-container .right .box-one",{
    duration: 1,
    x: 100,
    opacity: 0,
    ease: "power2.out",
    delay: 1.5
})

gsap.from(".home-container .right .box-two",{
    duration: 1,
    x: -100,
    opacity: 0,
    ease: "power2.out",
    delay: 1.5
})