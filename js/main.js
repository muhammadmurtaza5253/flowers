
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('Munira,you glow always beautifully!').split('')
    const titleElement = document.getElementById('title');
    const words = ('Your beauty isn’t just seen — it’s felt, like sunlight gently touching everything around you. ✨');
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

    function showWords() {
      const btn = document.getElementsByClassName('sound-btn')[0];
      btn.style.display = "flex";

      wordsElement.textContent = words;
      wordsElement.classList.add('fade-in');
    }

    appendTitle(showWords);
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