const profile = {
  heroTitle: "valentine's day",
  heroSubtitle: {
    sweet: "วาเลนไทน์นี้ ไม่มีรูปก็ยังจำได้ เพราะเพลงเดิมพาเราย้อนกลับไปหาเธอเสมอ",
    playful: "วาเลนไทน์ปีนี้ ไม่ต้องมีคำใบ้ เพราะคำตอบมีแค่คำว่าใช่"
  },
  questionText: "รักไหม คิดถึงไหม",
  onlyYesText: "ตอบได้คำเดียวเท่านั้น: ใช่",
  endingFast: "ตอบใช่ทันทีเลย น่ารักเกินไปแล้ว",
  endingMid: "มีงอนนิดหน่อย แต่สุดท้ายก็ยอมรับว่าคิดถึง",
  endingLate: "ดื้อหลายรอบ แต่บทสรุปก็ยังเป็น: ใช่",
  defaultTheme: "sweet",
  playlist: [
    {
      title: "เพลงที่ 1",
      src: "./songs/song1.mp3"
    },
    {
      title: "เพลงที่ 2",
      src: "./songs/song2.mp3"
    },
    {
      title: "เพลงที่ 3",
      src: "./songs/song3.mp3"
    }
  ]
};

const storageKeys = {
  theme: "memory_mix_theme"
};

const themePacks = {
  sweet: {
    teasingLines: [
      "ตอบใหม่ได้ไหม ข้อนี้ยากไปนิดนึง",
      "ลองอีกทีนะ เผื่อเมื่อกี้มือพลาด",
      "ปุ่มใช่กำลังรออยู่ตรงนี้",
      "แอบคิดถึงกันอยู่ใช่ไหม",
      "คำตอบที่ถูกต้อง มีคำเดียวจริงๆ",
      "โอเค ถามใหม่แบบตั้งใจอีกครั้ง",
      "เฉลยข้อนี้คือ ใช่ เท่านั้น"
    ],
    noButtonTexts: ["ไม่", "ยังไม่", "ขอคิดก่อน", "เดี๋ยวก่อน", "โอเคยอม"],
    gifs: [
      "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif",
      "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif",
      "https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif",
      "https://media.giphy.com/media/v6aOjy0Qo1fIA/giphy.gif"
    ]
  },
  playful: {
    teasingLines: [
      "แกล้งกดไม่ได้ แต่หัวใจโกหกยากนะ",
      "ระบบบอกให้ตอบใหม่ จนกว่าจะเป็นใช่",
      "ปุ่มไม่เริ่มเหนื่อยแล้วนะ",
      "เฉลยหล่นอยู่ตรงปุ่มสีเขียวแล้ว",
      "นี่คือข้อสอบที่มีคำตอบเดียว",
      "อย่าเนียนเลย เรารู้นะ",
      "โอเค เอาคำตอบจริงอีกที"
    ],
    noButtonTexts: ["ไม่", "ยังไม่", "ไม่มั้ง", "เอ๊ะ", "ยอมแล้ว"],
    gifs: [
      "https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif",
      "https://media.giphy.com/media/l4FGuhL4U2WyjdkaY/giphy.gif",
      "https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif",
      "https://media.giphy.com/media/26xBFg4zXVwzdI9lS/giphy.gif"
    ]
  }
};

const finalGifPacks = {
  sweet: [
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDV4bjR2cDlkNm5zdnplOThxeWFzeXRoY2RlaGp0OTB2bWVrd3l5aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5VKbvrjxpVJCM/giphy.gif"
  ],
  playful: [
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDV4bjR2cDlkNm5zdnplOThxeWFzeXRoY2RlaGp0OTB2bWVrd3l5aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5VKbvrjxpVJCM/giphy.gif"
  ]
};

const finalGifFallback =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    "<svg xmlns='http://www.w3.org/2000/svg' width='500' height='500' viewBox='0 0 500 500'>" +
      "<defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>" +
      "<stop offset='0%' stop-color='#ffe1ec'/>" +
      "<stop offset='100%' stop-color='#ffd6b8'/>" +
      "</linearGradient></defs>" +
      "<rect width='500' height='500' fill='url(#g)'/>" +
      "<text x='250' y='240' text-anchor='middle' font-size='110'>🐱💞🐱</text>" +
      "<text x='250' y='320' text-anchor='middle' font-size='36' fill='#25314d'>hug mode</text>" +
    "</svg>"
  );

const heroTitleEl = document.getElementById("heroTitle");
const heroSubtitleEl = document.getElementById("heroSubtitle");
const nowPlayingEl = document.getElementById("nowPlaying");
const questionTextEl = document.getElementById("questionText");
const teasingTextEl = document.getElementById("teasingText");
const questionSectionEl = document.getElementById("questionSection");
const finalSectionEl = document.getElementById("finalSection");
const finalTitleEl = document.getElementById("finalTitle");
const finalTextEl = document.getElementById("finalText");
const finalGifEl = document.getElementById("finalGif");
const finalDayNoteEl = document.getElementById("finalDayNote");
const reactionGifEl = document.getElementById("reactionGif");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const choiceAreaEl = document.getElementById("choiceArea");
const confettiLayerEl = document.getElementById("confettiLayer");
const replayBtn = document.getElementById("replayBtn");
const playPauseBtn = document.getElementById("playPauseBtn");
const themeSweetBtn = document.getElementById("themeSweetBtn");
const themePlayfulBtn = document.getElementById("themePlayfulBtn");
const bgMusic = document.getElementById("bgMusic");

let noCount = 0;
let activeSongIndex = null;
let currentTheme = profile.defaultTheme;

function readStorage(key) {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    return null;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    // ignore storage errors
  }
}

function randomFrom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function isMobileViewport() {
  return window.matchMedia("(max-width: 600px)").matches;
}

function getCurrentPack() {
  return themePacks[currentTheme] || themePacks.sweet;
}

function buildFinalDayNote() {
  const today = new Date();
  const year = today.getFullYear();
  return `Happy Valentine's ${year}`;
}

function applyProfileText() {
  heroTitleEl.textContent = profile.heroTitle;
  heroSubtitleEl.textContent = profile.heroSubtitle[currentTheme] || profile.heroSubtitle.sweet;
  questionTextEl.textContent = profile.questionText;
  finalTitleEl.textContent = "โอเค สรุปว่า ใช่";
  finalDayNoteEl.textContent = buildFinalDayNote();
}

function applySongButtonTitles() {
  const buttons = document.querySelectorAll(".song-btn");
  buttons.forEach((button) => {
    const index = Number(button.dataset.songIndex);
    if (profile.playlist[index]) {
      button.textContent = profile.playlist[index].title;
    }
  });
}

function randomTease() {
  teasingTextEl.textContent = randomFrom(getCurrentPack().teasingLines);
}

function setActiveSongButton(index) {
  const buttons = document.querySelectorAll(".song-btn");
  buttons.forEach((button) => {
    const isActive = Number(button.dataset.songIndex) === index;
    button.classList.toggle("active", isActive);
  });
}

function updateReaction() {
  const gifList = getCurrentPack().gifs;
  const stage = Math.min(Math.floor(noCount / 2), gifList.length - 1);
  reactionGifEl.src = gifList[stage];
}

function updateNoButtonText() {
  const labels = getCurrentPack().noButtonTexts;
  const textIndex = Math.min(noCount, labels.length - 1);
  noBtn.textContent = labels[textIndex];
}

function updateFinalGif() {
  const currentFinalPack = finalGifPacks[currentTheme] || finalGifPacks.sweet;
  const stage = Math.min(Math.floor(noCount / 2), currentFinalPack.length - 1);
  finalGifEl.src = currentFinalPack[stage];
}

function setTheme(themeName) {
  if (!themePacks[themeName]) {
    return;
  }

  currentTheme = themeName;
  document.body.dataset.theme = themeName;
  writeStorage(storageKeys.theme, themeName);

  themeSweetBtn.classList.toggle("active", themeName === "sweet");
  themePlayfulBtn.classList.toggle("active", themeName === "playful");

  applyProfileText();
  updateReaction();
  updateFinalGif();
  updateNoButtonText();
  updateButtonScale();

  teasingTextEl.textContent = noCount === 0 ? profile.onlyYesText : randomFrom(getCurrentPack().teasingLines);
}

async function playSong(index) {
  const song = profile.playlist[index];
  if (!song) {
    return;
  }

  const isNewSong = activeSongIndex !== index;
  activeSongIndex = index;

  if (isNewSong) {
    bgMusic.src = song.src;
    bgMusic.load();
  }

  try {
    await bgMusic.play();
    nowPlayingEl.textContent = `กำลังเล่น: ${song.title}`;
    playPauseBtn.textContent = "พักเพลง";
    setActiveSongButton(index);
  } catch (error) {
    nowPlayingEl.textContent = `แตะอีกครั้งเพื่อเล่น: ${song.title}`;
  }
}

async function togglePlayPause() {
  if (activeSongIndex === null) {
    await playSong(0);
    return;
  }

  if (bgMusic.paused) {
    await bgMusic.play();
    playPauseBtn.textContent = "พักเพลง";
  } else {
    bgMusic.pause();
    playPauseBtn.textContent = "เล่นต่อ";
  }
}

function moveNoButton() {
  const mobile = isMobileViewport();
  const areaRect = choiceAreaEl.getBoundingClientRect();
  const noRect = noBtn.getBoundingClientRect();
  const yesRect = yesBtn.getBoundingClientRect();

  const minCenterX = Math.max(12 + noRect.width / 2, areaRect.width * (mobile ? 0.52 : 0.2));
  const maxCenterX = Math.min(areaRect.width - 12 - noRect.width / 2, areaRect.width * 0.9);
  const minCenterY = Math.max(12 + noRect.height / 2, areaRect.height * (mobile ? 0.48 : 0.3));
  const maxCenterY = Math.min(areaRect.height - 12 - noRect.height / 2, areaRect.height * 0.84);

  const yesCenterX = yesRect.left - areaRect.left + yesRect.width / 2;
  const yesCenterY = yesRect.top - areaRect.top + yesRect.height / 2;
  const safeDistance = mobile ? 84 : 112;

  let targetX = minCenterX;
  let targetY = minCenterY;
  for (let i = 0; i < 16; i += 1) {
    const candidateX = minCenterX + Math.random() * (maxCenterX - minCenterX);
    const candidateY = minCenterY + Math.random() * (maxCenterY - minCenterY);
    const distance = Math.hypot(candidateX - yesCenterX, candidateY - yesCenterY);
    targetX = candidateX;
    targetY = candidateY;
    if (distance >= safeDistance) {
      break;
    }
  }

  noBtn.classList.add("escaping");
  noBtn.style.left = `${targetX}px`;
  noBtn.style.top = `${targetY}px`;

  setTimeout(() => {
    noBtn.classList.remove("escaping");
  }, 180);
}

function updateButtonScale() {
  const mobile = isMobileViewport();
  const growthRate = mobile
    ? (currentTheme === "playful" ? 0.12 : 0.1)
    : (currentTheme === "playful" ? 0.2 : 0.17);
  const shrinkRate = mobile
    ? (currentTheme === "playful" ? 0.07 : 0.06)
    : (currentTheme === "playful" ? 0.13 : 0.12);
  const maxYesScale = mobile ? 2.2 : 3.6;
  const minNoScale = mobile ? 0.45 : 0.2;

  const yesScale = Math.min(1 + noCount * growthRate, maxYesScale);
  const noScale = Math.max(1 - noCount * shrinkRate, minNoScale);

  yesBtn.style.setProperty("--yes-scale", yesScale.toFixed(2));
  noBtn.style.setProperty("--no-scale", noScale.toFixed(2));
  choiceAreaEl.style.setProperty("--area-glow", Math.min(noCount, 5));
}

function pulseYes() {
  yesBtn.classList.remove("surge");
  void yesBtn.offsetWidth;
  yesBtn.classList.add("surge");
}

function shakeArea() {
  choiceAreaEl.classList.remove("shock");
  void choiceAreaEl.offsetWidth;
  choiceAreaEl.classList.add("shock");
}

function launchConfetti() {
  confettiLayerEl.innerHTML = "";
  const colors = currentTheme === "playful"
    ? ["#ff7a00", "#ffd166", "#00d2a0", "#118ab2", "#ff4d6d"]
    : ["#ff5d6c", "#ffd166", "#06d6a0", "#118ab2", "#ef476f"];

  for (let i = 0; i < 48; i += 1) {
    const piece = document.createElement("span");
    piece.className = "piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.backgroundColor = colors[i % colors.length];
    piece.style.animationDelay = `${Math.random() * 240}ms`;
    confettiLayerEl.appendChild(piece);
  }
}

function onNoClick() {
  noCount += 1;
  randomTease();
  updateButtonScale();
  updateReaction();
  updateNoButtonText();
  pulseYes();
  shakeArea();
  moveNoButton();
}

function onYesClick() {
  questionSectionEl.classList.add("hidden");
  finalSectionEl.classList.remove("hidden");
  updateFinalGif();

  if (noCount === 0) {
    finalTextEl.textContent = profile.endingFast;
  } else if (noCount <= 3) {
    finalTextEl.textContent = profile.endingMid;
  } else {
    finalTextEl.textContent = profile.endingLate;
  }

  launchConfetti();
}

function resetFlow() {
  noCount = 0;
  questionSectionEl.classList.remove("hidden");
  finalSectionEl.classList.add("hidden");
  noBtn.style.left = "65%";
  noBtn.style.top = "56%";
  teasingTextEl.textContent = profile.onlyYesText;
  updateButtonScale();
  updateReaction();
  updateFinalGif();
  updateNoButtonText();
}

document.querySelectorAll(".song-btn").forEach((button) => {
  button.addEventListener("click", async () => {
    const index = Number(button.dataset.songIndex);
    await playSong(index);
  });
});

playPauseBtn.addEventListener("click", togglePlayPause);
yesBtn.addEventListener("click", onYesClick);
noBtn.addEventListener("click", onNoClick);
replayBtn.addEventListener("click", resetFlow);

themeSweetBtn.addEventListener("click", () => setTheme("sweet"));
themePlayfulBtn.addEventListener("click", () => setTheme("playful"));
window.addEventListener("resize", updateButtonScale);

noBtn.addEventListener("mouseenter", () => {
  if (noCount >= 1) {
    moveNoButton();
  }
});

reactionGifEl.addEventListener("error", () => {
  reactionGifEl.src = "https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif";
});

finalGifEl.addEventListener("error", () => {
  finalGifEl.src = finalGifFallback;
});

bgMusic.addEventListener("pause", () => {
  if (activeSongIndex !== null) {
    playPauseBtn.textContent = "เล่นต่อ";
  }
});

bgMusic.addEventListener("play", () => {
  if (activeSongIndex !== null) {
    playPauseBtn.textContent = "พักเพลง";
  }
});

const savedTheme = readStorage(storageKeys.theme);
if (themePacks[savedTheme]) {
  currentTheme = savedTheme;
}

applySongButtonTitles();
setTheme(currentTheme);
teasingTextEl.textContent = profile.onlyYesText;
updateFinalGif();
updateNoButtonText();
