document.addEventListener("DOMContentLoaded", function () {
    VANTA.NET({
        el: "#vanta-bg",
        color: 0x4474BA,
        backgroundColor: 0xF5F5F5,
        points: window.innerWidth < 768 ? 15 : 12,           // More points on mobile
        maxDistance: window.innerWidth < 768 ? 25 : 20,      // Bring lines closer on mobile
        spacing: window.innerWidth < 768 ? 18 : 20,          // Slightly tighter net on mobile
        showDots: true,
        mouseControls: true,
        touchControls: true,
        gyroControls: false
    });
});
