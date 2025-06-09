function showSection(sectionId) {
  const warning = document.getElementById(sectionId + '-warning');
  const content = document.getElementById(sectionId + '-content');

  warning.classList.add('hidden');
  content.classList.remove('blurred');
}

const videos = document.querySelectorAll('video');
videos.forEach(video => {
  const container = video.parentElement;
  container.addEventListener('mouseenter', () => video.play());
  container.addEventListener('click', () => {
    if (video.paused) video.play();
    else video.pause();
  });
});