const video = document.getElementById('bg-video');
const videoBackground = document.querySelector('.video-background');

// Function to adjust the zoom based on window size
function adjustVideoZoom() {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    // Calculate the zoom level based on the window size
    const zoomLevel = Math.max(720 / 720, 1280 / 1280); // Adjust these values based on your video resolution

    videoBackground.style.transform = `translate(-50%, -50%) scale(${zoomLevel})`;
}

// Initial adjustment
adjustVideoZoom();

// Adjust on resize
window.addEventListener('resize', adjustVideoZoom);