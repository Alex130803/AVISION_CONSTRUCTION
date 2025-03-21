// Set initial positions (logo parts outside the screen)
gsap.set("#logo-part1", { x: "-100vw", opacity: 0, scale: 0.9 });
gsap.set("#logo-part2", { x: "100vw", opacity: 0, y: 30, scale: 0.9 }); // Slight downward shift

// Animate first part
gsap.to("#logo-part1", { 
    x: 0, 
    opacity: 1, 
    scale: 1, 
    duration: 2.2, 
    ease: "elastic.out(1, 0.6)" // Adds a smooth bounce effect
});

// Animate second part AFTER first part finishes
gsap.to("#logo-part2", { 
    x: 0, 
    opacity: 1, 
    y: 0,  // Moves up to align perfectly
    scale: 1, 
    duration: 1.2, 
    ease: "elastic.out(1, 0.6)", // Same smooth bounce effect
    delay: 0.4  // Slightly longer delay for a better effect
});

// Final subtle pulse effect after the logo forms
gsap.to("#logo-container", { 
    scale: 1.05, 
    duration: 0.3, 
    ease: "power2.inOut", 
    delay: 1.8, 
    yoyo: true, 
    repeat: 1 
});

const navItems = document.querySelectorAll(".nav ul li a");
const logo = document.querySelector("#logo-container");

// Animate logo based on hovered button position
navItems.forEach((item) => {
    item.addEventListener("mouseenter", (event) => {
        let itemRect = event.target.getBoundingClientRect(); // Get button position
        let logoRect = logo.getBoundingClientRect(); // Get logo position

        let newX = itemRect.left + (itemRect.width / 2) - (logoRect.width / 2); // Calculate center position

        gsap.to(logo, { x: newX - logoRect.left, y: -80, scale: 0.8, duration: 0.4, ease: "power3.out" });
    });

    item.addEventListener("mouseleave", () => {
        gsap.to(logo, { x: 0, y: 0, scale: 1, duration: 0.4, ease: "power3.out" });
    });
});
