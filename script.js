// script.js
document.addEventListener("DOMContentLoaded", () => {
    const videos = [
        document.getElementById("video1"),
        document.getElementById("video2"),
        document.getElementById("video3"),
    ];
    let currentVideoIndex = 0;

    // Function to switch videos
    const switchVideo = () => {
        const currentVideo = videos[currentVideoIndex];
        const nextVideoIndex = (currentVideoIndex + 1) % videos.length;
        const nextVideo = videos[nextVideoIndex];

        // Fade out current video
        currentVideo.style.opacity = "0";

        // Wait for fade-out to complete
        setTimeout(() => {
            currentVideo.pause(); // Pause current video
            currentVideo.style.zIndex = "0"; // Move it behind
            nextVideo.style.zIndex = "1"; // Bring next video to the front
            nextVideo.style.opacity = "1"; // Fade in next video
            nextVideo.play(); // Play next video
            currentVideoIndex = nextVideoIndex; // Update index
        }, 1500); // Matches the CSS transition time
    };

    // Switch video every 10 seconds
    setInterval(switchVideo, 10000);

    // Notify Button Action
    document.getElementById("notifyBtn").addEventListener("click", () => {
        alert("You’ll be notified when VividAI launches! Stay tuned.");
    });
});
