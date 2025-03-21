document.addEventListener("DOMContentLoaded", function () {
    VANTA.NET({
        el: "#vanta-bg",
        color: 0x4474BA,  // Your requested blue color
        backgroundColor: 0xF5F5F5, // Whitesmoke background
        points: 9,  // Number of points in the net
        maxDistance: 45,  // Distance between points
        spacing: 30,  // Space between net lines
        showDots: true,  // Enables small moving dots
        mouseControls: true,
        touchControls: true,
        gyroControls: false
    });
});
