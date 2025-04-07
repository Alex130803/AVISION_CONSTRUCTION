document.addEventListener("DOMContentLoaded", function () {
    // Animate entrance
    gsap.from(".landing_page", { opacity: 0, duration: 1 });

    // Smooth page transition
    document.querySelectorAll(".smooth-link").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = this.getAttribute("href");

            // Create a white overlay animation
            gsap.to(".landing_page", {
                opacity: 0,
                duration: 0.8,
                onComplete: () => (window.location = target)
            });
        });
    });
});
