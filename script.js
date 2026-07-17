let hasUserInteracted = false;

function initMedia() {
  const backgroundVideo = document.getElementById('background');
  if (!backgroundVideo) {
    return;
  }

  backgroundVideo.muted = true;
  backgroundVideo.play().catch(() => {
    // Autoplay may be blocked; the page still renders normally.
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const startScreen = document.getElementById('start-screen');
  const startText = document.getElementById('start-text');
  const rainMusic = document.getElementById('rain-music');

  if (!startScreen || !startText) {
    return;
  }

  const startMessage = 'Coming soon <3';
  let startTextContent = '';
  let startIndex = 0;
  let startCursorVisible = true;

  function typeWriterStart() {
    if (startIndex < startMessage.length) {
      startTextContent = startMessage.slice(0, startIndex + 1);
      startIndex++;
    }

    startText.textContent = startTextContent + (startCursorVisible ? '|' : ' ');
    setTimeout(typeWriterStart, 100);
  }

  setInterval(() => {
    startCursorVisible = !startCursorVisible;
    startText.textContent = startTextContent + (startCursorVisible ? '|' : ' ');
  }, 500);

  if (rainMusic) {
    rainMusic.volume = 0.2;
    rainMusic.muted = true;
  }

  typeWriterStart();
});
