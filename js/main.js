
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('Munira,you glow always beautifully!').split('')
    const titleElement = document.getElementById('title');
    const words = ('Your beauty isn’t just seen — it’s felt, like sunlight gently touching everything around you. ✨').split('')
    const wordsElement = document.getElementById('words');
    let index = 0;
    let wordsIndex = 0;

function appendTitle(callback) {
  if (index < titles.length) {
    titleElement.innerHTML += titles[index];
    index++;
    setTimeout(() => appendTitle(callback), 100); // continue typing
  } else {
    if (callback) callback(); // call appendWords when done
  }
}

    function appendWords() {
    if (wordsIndex === 0) {
      const btn = document.getElementsByClassName('sound-btn')[0];
      btn.style.display = "flex";
    }
      if (wordsIndex < words.length) {
        wordsElement.innerHTML += words[wordsIndex];
        wordsIndex++;
        setTimeout(appendWords, 100); // 1000ms delay
      }
    }

    appendTitle(appendWords);

    clearTimeout(c);
  }, 1000);
};

function playSound() {
  const btn = document.getElementsByClassName('sound-btn')[0];
  const audio = document.getElementById("audio");

  audio.volume = 0.6; // reset volume to max
  audio.play()
    .then(() => {
      btn.style.display = "none";

      const fadeDuration = 5; // seconds to fade out
      audio.addEventListener('timeupdate', () => {
        const timeLeft = audio.duration - audio.currentTime;

        if (timeLeft <= fadeDuration && timeLeft > 0) {
          // Calculate new volume: linear fade from 1 to 0 over fadeDuration
          audio.volume = timeLeft / fadeDuration;
        } else if (timeLeft <= 0) {
          audio.volume = 0;
        }
      });
    })
    .catch((error) => {
      console.warn("Playback failed:", error);
    });
}