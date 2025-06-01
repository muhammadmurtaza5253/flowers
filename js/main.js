
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
    setTimeout(() => appendTitle(callback), 50); // continue typing
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
  btn.style.display = "none";
  const audio = document.getElementById("audio");

  audio.play()
    .catch((error) => {
      console.warn("Playback failed:", error);
    });
}