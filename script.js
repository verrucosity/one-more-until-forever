// Initialize GSAP Scroll animations
gsap.registerPlugin(ScrollTrigger);

gsap.from(".content h1", {
    opacity: 0,
    y: -50,
    duration: 1.5,
    ease: "power3.out"
});

gsap.from(".content p", {
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".content",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

gsap.from(".release-info", {
    opacity: 0,
    y: 20,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".release-info",
        start: "top 90%",
        toggleActions: "play none none none"
    }
});

gsap.from(".album-link", {
    opacity: 0,
    scale: 0.5,
    duration: 1,
    ease: "elastic.out(1, 0.5)",
    scrollTrigger: {
        trigger: ".album-link",
        start: "top 90%",
        toggleActions: "play none none none"
    }
});
