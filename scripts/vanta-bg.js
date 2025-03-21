document.addEventListener("DOMContentLoaded", function () {
    const isMobile = window.innerWidth < 768;

    VANTA.NET({
        el: "#vanta-bg",
        color: 0x4474BA,
        backgroundColor: 0xF5F5F5,
        points: 14,
        maxDistance: 20,
        spacing: isMobile ? 16 : 20,     // Tighter spacing on phone
        showDots: true,
        mouseControls: true,
        touchControls: true,
        gyroControls: false
    });
});
