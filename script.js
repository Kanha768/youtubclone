// Mock video data
let videos = [];

// DOM Elements
const videoList = document.getElementById('videoList');
const uploadForm = document.getElementById('uploadForm');
const videoFileInput = document.getElementById('videoFile');
const adModal = document.getElementById('adModal');
const closeAdModal = document.getElementById('closeAdModal');
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Display videos
function displayVideos() {
  videoList.innerHTML = '';
  videos.forEach((video, index) => {
    const videoElement = document.createElement('video');
    videoElement.src = video.url;
    videoElement.controls = true;
    videoElement.addEventListener('play', () => {
      showAd();
    });
    videoList.appendChild(videoElement);
  });
}

// Show ad modal
function showAd() {
  adModal.style.display = 'block';
}

// Close ad modal
closeAdModal.addEventListener('click', () => {
  adModal.style.display = 'none';
});

// Handle video upload
uploadForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const file = videoFileInput.files[0];
  if (file) {
    const videoURL = URL.createObjectURL(file);
    videos.push({ url: videoURL });
    displayVideos();
    uploadForm.reset();
  }
});

// Toggle dark mode
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    themeToggle.textContent = '☀️ Light Mode';
  } else {
    themeToggle.textContent = '🌙 Dark Mode';
  }
});

// Initial display
displayVideos();
