/* ==========================================================================
   Speed Typer - Logic & Features
   ========================================================================== */

// Word Datasets for different difficulty modes
const WORD_LISTS = {
  easy: [
    "the", "of", "to", "and", "a", "in", "is", "it", "you", "that", "he", "was", "for", "on", "are", "as", 
    "with", "his", "they", "i", "at", "be", "this", "have", "from", "or", "one", "had", "by", "word", "but", 
    "not", "what", "all", "were", "we", "when", "your", "can", "said", "there", "use", "an", "each", "which", 
    "she", "do", "how", "their", "if", "will", "up", "other", "about", "out", "many", "then", "them", "these", 
    "so", "some", "her", "would", "make", "like", "him", "into", "time", "has", "look", "two", "more", "write", 
    "go", "see", "number", "no", "way", "could", "people", "my", "than", "first", "water", "been", "call", 
    "who", "oil", "its", "now", "find", "long", "down", "day", "did", "get", "come", "made", "may", "part",
    "over", "new", "sound", "take", "only", "little", "work", "know", "place", "year", "live", "me", "back", 
    "give", "most", "very", "after", "thing", "our", "just", "name", "good", "sentence", "man", "think", 
    "say", "great", "where", "help", "through", "much", "before", "line", "right", "too", "mean", "old", 
    "any", "same", "tell", "boy", "follow", "came", "want", "show", "also", "around", "form", "three", "small"
  ],
  medium: [
    "However,", "Therefore,", "Usually,", "science", "beautiful", "journey", "tomorrow", "history", "knowledge", 
    "society", "experience", "language", "understand", "system", "information", "computer", "program", "design", 
    "creative", "special", "question", "important", "different", "possible", "together", "friends", "family", 
    "learning", "focused", "development", "personal", "strength", "health", "forest", "mountain", "ocean", 
    "river", "valley", "weather", "summer", "winter", "spring", "autumn", "morning", "evening", "Indeed,",
    "Consequently,", "Moreover,", "Meanwhile,", "nature", "atmosphere", "universe", "planet", "galaxy", 
    "exploration", "discovery", "technology", "architecture", "literature", "philosophy", "psychology", 
    "biology", "chemistry", "physics", "mathematics", "engineering", "education", "classroom", "student", 
    "teacher", "challenge", "solution", "problem", "progress", "success", "failure", "growth", "future"
  ],
  hard: [
    "juxtaposition", "exquisite", "cacophony", "ephemeral", "quintessential", "solitude", "melancholy", "serendipity", 
    "nostalgia", "resilience", "javascript", "const", "let", "function()", "async/await", "document.getElementById", 
    "array.push()", "console.log()", "window.location", "100%", "variables_name", "#id-selector", ".class-style", 
    "border-radius: 12px;", "rgba(0,0,0,0.5)", "Math.random()", "2026-07-02", "speed_typer_test", "user@domain.com", 
    "process.env.PORT", "JSON.stringify()", "localStorage.setItem()", "new Promise((resolve) => {})", 
    "import { useState } from 'react';", "git commit -m 'feat'", "const [state, setState] = useState(init);", 
    "document.querySelector('.app')", "window.addEventListener('scroll', () => {})", "Math.floor(Math.random() * 10)",
    "try { await fetchData() } catch (err)", "Object.keys(myObj).map(key => key)", "margin: 0 auto; display: flex;"
  ]
};

// Essays for "Type on Topic" Feature
const ESSAYS = {
  mountains: "Mountains are massive landforms that rise high above their surroundings. Created by tectonic forces, they shape the climate and provide fresh water to half of humanity. Standing at the peak of a mountain offers a breathtaking view, reminding us of the scale of nature. Climbers from around the world challenge themselves on these rocky slopes, testing their endurance against cold winds and steep cliffs. Yet, mountains are also fragile ecosystems, home to unique plants and animals that survive in extreme altitudes. Protecting them is vital for our planet's future.",
  water: "Water is the source of all life on Earth. Covering over seventy percent of our planet's surface, it flows through rivers, fills oceans, and falls as rain. Every cell in our body requires water to function, making it our most precious resource. We use it to grow food, generate power, and keep our surroundings clean. Despite its abundance, fresh water is limited, and many regions face severe droughts. Conservation is essential to ensure that future generations have access to clean, safe drinking water. Saving water today secures life tomorrow.",
  technology: "Technology reshapes the way we live, work, and communicate. From the invention of the wheel to modern artificial intelligence, human progress is driven by innovation. Devices like computers and smartphones connect us across vast distances, making information instantly accessible. We can learn new skills, run businesses, and share ideas with a single click. However, rapid technological advancement also brings challenges, such as privacy concerns and screen addiction. Finding a healthy balance between the digital world and real life is crucial. Technology should serve humanity, not control it.",
  space: "Space is the ultimate frontier, a vast and silent void filled with billions of galaxies. For centuries, humans have looked at the night sky and wondered about other worlds. Rockets and satellites now allow us to explore our solar system, sending rovers to Mars and telescopes to the edge of the universe. Every discovery reveals how small and special our own planet is. Space exploration inspires curiosity and drives scientific breakthroughs. As we aim for the stars, we learn more about who we are and where we came from.",
  forests: "Forests are the green lungs of our planet, absorbing carbon dioxide and releasing vital oxygen. They are home to a majority of Earth's land species, creating rich habitats for plants, birds, and insects. Forests regulate climate, prevent soil erosion, and provide materials like wood and medicine. Walking through a quiet forest brings peace and relieves stress, connecting us to the natural world. Unfortunately, deforestation threatens these ancient ecosystems daily. Planting trees and preserving forests are key steps to combat climate change and protect biodiversity.",
  history: "History is the study of the past, helping us understand how our world was shaped. By looking at ancient civilizations, great battles, and inventions, we learn about human resilience and culture. Time flows in one direction, leaving behind ruins and stories for us to discover. Every era has its own struggles and achievements, from the dark ages to the space age. Studying history allows us to avoid past mistakes and make better choices for the future. We are all writers of history, creating the world of tomorrow today.",
  art: "Art is the expression of human imagination and emotion, taking many forms like painting, music, and writing. Through creative works, we share our unique view of the world and connect with others on a deeper level. Creativity has no boundaries, allowing us to experiment, innovate, and break old rules. Whether it is a classical symphony or a modern street mural, art inspires curiosity and brings beauty to our lives. Developing our creative skills enriches our minds and helps us solve complex problems. Art speaks where words fail.",
  sports: "Sports and physical fitness play a vital role in maintaining a healthy lifestyle. Engaging in games like soccer, basketball, or running strengthens our body, improves heart health, and boosts mood. Team sports also teach cooperation, leadership, and how to deal with failure and success. Regular exercise reduces stress and increases energy levels, helping us focus better on daily tasks. Fitness is not about being better than someone else; it is about being better than you used to be. A healthy mind resides in a healthy body.",
  food: "Food is not just fuel; it is a central part of human culture and connection. Sharing a meal brings families and friends together, creating lasting memories. Cooking is an art form that uses fresh ingredients, spices, and heat to create delicious flavors. Every region has its own culinary traditions, reflecting its history and geography. Eating a balanced diet rich in vegetables, fruits, and grains keeps our body strong and energized. Exploring new recipes encourages creativity and introduces us to different cultures through taste. Healthy cooking leads to happy living.",
  music: "Music is a universal language that transcends borders and unites people across the globe. Made of rhythm, melody, and harmony, it has the power to change our mood and touch our soul. Different instruments like the piano, violin, and drums create unique sounds that express joy, sadness, or excitement. Listening to music can lower stress, increase productivity, and spark creative ideas. From ancient tribal chants to modern digital beats, humans have always used sound to tell stories. Music is the soundtrack of our lives, keeping us company on every journey."
};

// Global App State
let timerLimit = 30;
let timeLeft = 30;
let difficulty = 'easy';
let typeMode = 'words'; // words, essay
let selectedTopic = 'mountains';
let testState = 'idle'; // idle, running, finished
let timerInterval = null;
let soundEnabled = true;

// Key Tracking for Accuracy & Typo Analysis
let totalKeystrokes = 0;
let typosCount = 0;
let mistakeLogs = []; // Array of objects: { target: char, typed: char }

// DOM Cache
const themeSelector = document.getElementById('theme-selector');
const soundToggle = document.getElementById('sound-toggle');
const soundOnIcon = document.querySelector('.sound-on-icon');
const soundOffIcon = document.querySelector('.sound-off-icon');
const statsTrigger = document.getElementById('stats-trigger');

const modeTabs = document.getElementById('mode-tabs');
const difficultyGroup = document.getElementById('difficulty-group');
const difficultyTabs = document.getElementById('difficulty-tabs');
const topicGroup = document.getElementById('topic-group');
const topicSelector = document.getElementById('topic-selector');
const timeTabs = document.getElementById('time-tabs');

const hudTimer = document.getElementById('hud-timer');
const hudWpm = document.getElementById('hud-wpm');
const hudAccuracy = document.getElementById('hud-accuracy');

const typingCard = document.getElementById('typing-card');
const wordsWrapper = document.getElementById('words-wrapper');
const customCaret = document.getElementById('custom-caret');
const hiddenInput = document.getElementById('hidden-input');
const focusAlert = document.getElementById('focus-alert');
const restartBtn = document.getElementById('restart-btn');

// Dialog Elements
const resultsDialog = document.getElementById('results-dialog');
const resWpm = document.getElementById('res-wpm');
const resAccuracy = document.getElementById('res-accuracy');
const resChars = document.getElementById('res-chars');
const resErrors = document.getElementById('res-errors');
const resultsEmoji = document.getElementById('results-emoji');
const resultsRank = document.getElementById('results-rank');
const dialogRestartBtn = document.getElementById('dialog-restart-btn');
const closeResultsBtn = document.getElementById('close-results-btn');

const statsDialog = document.getElementById('stats-dialog');
const bestEasy = document.getElementById('best-easy');
const bestMedium = document.getElementById('best-medium');
const bestHard = document.getElementById('best-hard');
const bestEssay = document.getElementById('best-essay');
const clearStatsBtn = document.getElementById('clear-stats-btn');
const statsDoneBtn = document.getElementById('stats-done-btn');
const closeStatsBtn = document.getElementById('close-stats-btn');

// Caret Blinking Timeout
let caretTypingTimeout = null;

// Audio Context Lazy Initialization
let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// Flat array of all letter spans currently in the container
let charSpans = [];

/* ==========================================================================
   Sound Synthesis Methods (Web Audio API)
   ========================================================================== */

function playKeySound(isSpace = false) {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    if (isSpace) {
      // Space key is a lower frequency, slightly longer thump sound
      osc.frequency.setValueAtTime(260, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.08);
      gainNode.gain.setValueAtTime(0.08, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } else {
      // Regular key click is a short, higher frequency sweep
      osc.frequency.setValueAtTime(650, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(180, ctx.currentTime + 0.04);
      gainNode.gain.setValueAtTime(0.06, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
      osc.start();
      osc.stop(ctx.currentTime + 0.04);
    }
  } catch (err) {
    console.warn("Could not play synthesized sound:", err);
  }
}

function playErrorSound() {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    
    // Sawtooth double oscillator for a clean retro error buzzer
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc1.type = 'sawtooth';
    osc2.type = 'sawtooth';

    osc1.frequency.setValueAtTime(125, ctx.currentTime);
    osc2.frequency.setValueAtTime(128, ctx.currentTime); // Slight detune for grit

    osc1.connect(gainNode);
    osc2.connect(gainNode);
    gainNode.connect(ctx.destination);

    gainNode.gain.setValueAtTime(0.08, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 0.16);

    osc1.start();
    osc2.start();
    osc1.stop(ctx.currentTime + 0.16);
    osc2.stop(ctx.currentTime + 0.16);
  } catch (err) {
    console.warn("Could not play error buzzer:", err);
  }
}

/* ==========================================================================
   Word Management and Setup
   ========================================================================== */

// Select random words based on mode
function getRandomWord(mode) {
  const list = WORD_LISTS[mode];
  return list[Math.floor(Math.random() * list.length)];
}

// Generate the paragraphs to type
function generateWords() {
  wordsWrapper.innerHTML = '';
  charSpans = [];
  let charIndex = 0;
  
  if (typeMode === 'words') {
    // Render ~70 words initially. We will auto-extend if user somehow types faster than 70 words.
    const wordCount = 70;
    
    for (let i = 0; i < wordCount; i++) {
      const wordText = getRandomWord(difficulty);
      const wordDiv = document.createElement('div');
      wordDiv.className = 'word';
      
      // Letters in word
      for (let j = 0; j < wordText.length; j++) {
        const charSpan = document.createElement('span');
        charSpan.className = 'char';
        charSpan.textContent = wordText[j];
        charSpan.dataset.index = charIndex++;
        wordDiv.appendChild(charSpan);
        charSpans.push(charSpan);
      }
      
      // Append space character span after every word
      const spaceSpan = document.createElement('span');
      spaceSpan.className = 'char space';
      spaceSpan.innerHTML = '&nbsp;';
      spaceSpan.dataset.index = charIndex++;
      wordDiv.appendChild(spaceSpan);
      charSpans.push(spaceSpan);
      
      wordsWrapper.appendChild(wordDiv);
    }
  } else {
    // Essay Mode
    const essayText = ESSAYS[selectedTopic];
    const essayWords = essayText.split(' ');
    
    for (let i = 0; i < essayWords.length; i++) {
      const wordText = essayWords[i];
      const wordDiv = document.createElement('div');
      wordDiv.className = 'word';
      
      // Letters in word
      for (let j = 0; j < wordText.length; j++) {
        const charSpan = document.createElement('span');
        charSpan.className = 'char';
        charSpan.textContent = wordText[j];
        charSpan.dataset.index = charIndex++;
        wordDiv.appendChild(charSpan);
        charSpans.push(charSpan);
      }
      
      // Append space character span after every word, EXCEPT the last word of the essay
      if (i < essayWords.length - 1) {
        const spaceSpan = document.createElement('span');
        spaceSpan.className = 'char space';
        spaceSpan.innerHTML = '&nbsp;';
        spaceSpan.dataset.index = charIndex++;
        wordDiv.appendChild(spaceSpan);
        charSpans.push(spaceSpan);
      }
      
      wordsWrapper.appendChild(wordDiv);
    }
  }
  
  // Highlight first character as active initially
  if (charSpans.length > 0) {
    charSpans[0].classList.add('active');
  }
  
  // Set caret to home position
  setTimeout(updateCaretPosition, 50);
}

// Check if we need to append more words dynamically to prevent running out of text
function checkAndAppendWords() {
  if (typeMode === 'essay') return; // Do not append in essay mode
  const currentLength = charSpans.length;
  // If user is within 15 words of the end, append more words
  if (hiddenInput.value.length > currentLength - 60) {
    let charIndex = currentLength;
    for (let i = 0; i < 30; i++) {
      const wordText = getRandomWord(difficulty);
      const wordDiv = document.createElement('div');
      wordDiv.className = 'word';
      
      for (let j = 0; j < wordText.length; j++) {
        const charSpan = document.createElement('span');
        charSpan.className = 'char';
        charSpan.textContent = wordText[j];
        charSpan.dataset.index = charIndex++;
        wordDiv.appendChild(charSpan);
        charSpans.push(charSpan);
      }
      
      const spaceSpan = document.createElement('span');
      spaceSpan.className = 'char space';
      spaceSpan.innerHTML = '&nbsp;';
      spaceSpan.dataset.index = charIndex++;
      wordDiv.appendChild(spaceSpan);
      charSpans.push(spaceSpan);
      
      wordsWrapper.appendChild(wordDiv);
    }
  }
}

/* ==========================================================================
   Typing Caret Position Coordination
   ========================================================================== */

function updateCaretPosition() {
  const typedLength = hiddenInput.value.length;
  const activeSpan = charSpans[typedLength];
  
  if (activeSpan) {
    const wrapperRect = wordsWrapper.getBoundingClientRect();
    const spanRect = activeSpan.getBoundingClientRect();
    
    // Calculate caret offsets relative to container (constant 3px width configured in CSS)
    customCaret.style.left = `${spanRect.left - wrapperRect.left - 1}px`;
    customCaret.style.top = `${spanRect.top - wrapperRect.top}px`;
    customCaret.style.height = `${spanRect.height}px`;
    
    // Custom line scrolling mechanism
    const activeWord = activeSpan.parentElement;
    const wordOffsetTop = activeWord.offsetTop;
    
    // If we've scrolled down more than the first line (~35px), shift viewport upwards
    if (wordOffsetTop > 30) {
      wordsWrapper.style.transform = `translateY(-${wordOffsetTop - 15}px)`;
    } else {
      wordsWrapper.style.transform = 'translateY(0)';
    }
  } else if (charSpans.length > 0) {
    // Caret at the end of the text
    const lastSpan = charSpans[charSpans.length - 1];
    const wrapperRect = wordsWrapper.getBoundingClientRect();
    const lastRect = lastSpan.getBoundingClientRect();
    
    customCaret.style.left = `${lastRect.right - wrapperRect.left}px`;
    customCaret.style.top = `${lastRect.top - wrapperRect.top}px`;
    customCaret.style.height = `${lastRect.height}px`;
  }
}

function startCaretBlinking() {
  customCaret.classList.add('blinking');
  customCaret.classList.remove('typing');
}

function setCaretTypingState() {
  customCaret.classList.remove('blinking');
  customCaret.classList.add('typing');
  
  // Debounce blinking state if typing stops for 500ms
  clearTimeout(caretTypingTimeout);
  caretTypingTimeout = setTimeout(startCaretBlinking, 500);
}

/* ==========================================================================
   Core Typing States & Mechanics
   ========================================================================== */

function startTest() {
  testState = 'running';
  timeLeft = timerLimit;
  hudTimer.textContent = timeLeft;
  totalKeystrokes = 0;
  typosCount = 0;
  
  // Start countdown interval
  timerInterval = setInterval(() => {
    timeLeft--;
    hudTimer.textContent = timeLeft;
    
    // Live calculations
    calculateStats();
    
    if (timeLeft <= 0) {
      endTest();
    }
  }, 1000);
}

function calculateStats() {
  const typedVal = hiddenInput.value;
  const typedLength = typedVal.length;
  
  if (typedLength === 0) {
    hudWpm.textContent = '0';
    hudAccuracy.textContent = '100%';
    return { wpm: 0, accuracy: 100, correctCount: 0 };
  }
  
  // Count correct characters currently matching
  let correctCount = 0;
  for (let i = 0; i < typedLength; i++) {
    const span = charSpans[i];
    if (span && span.classList.contains('correct')) {
      correctCount++;
    }
  }
  
  // Time elapsed in minutes
  const secondsElapsed = timerLimit - timeLeft;
  const minutesElapsed = secondsElapsed > 0 ? secondsElapsed / 60 : 1 / 60;
  
  // Standard WPM formula: (correct characters / 5) / time elapsed in minutes
  const wpm = Math.round((correctCount / 5) / minutesElapsed);
  
  // Accuracy = (correct characters / total characters typed so far) * 100
  // Note: we track keystrokes separately to catch double spaces, incorrect backspaces, etc.
  const accuracy = Math.round((correctCount / Math.max(typedLength, totalKeystrokes)) * 100);
  
  hudWpm.textContent = wpm;
  hudAccuracy.textContent = `${Math.min(100, Math.max(0, accuracy))}%`;
  
  return { wpm, accuracy, correctCount };
}

function endTest() {
  clearInterval(timerInterval);
  testState = 'finished';
  hiddenInput.blur();
  
  // Calculate final numbers
  const stats = calculateStats();
  const finalWpm = stats.wpm;
  const finalAccuracy = Math.min(100, Math.max(0, stats.accuracy));
  const finalCorrect = stats.correctCount;
  const finalErrors = Math.max(0, typedLengthDiffCount() + typosCount); // catch any discrepancies
  
  // Pop values to result modal
  resWpm.textContent = finalWpm;
  resAccuracy.textContent = `${finalAccuracy}%`;
  resChars.textContent = finalCorrect;
  resErrors.textContent = finalErrors;
  
  // Set ranks and emojis
  const rank = getRating(finalWpm, finalAccuracy);
  resultsEmoji.textContent = rank.emoji;
  resultsRank.textContent = rank.title;
  
  // Check and save High Score
  if (typeMode === 'essay') {
    saveHighScore('essay', finalWpm);
  } else {
    saveHighScore(difficulty, finalWpm);
  }
  
  // Calculate level progress & rank badge
  updateTypistLevel(finalWpm);
  
  // Analyze typos & generate personalized tips
  analyzeMistakes(finalWpm, finalAccuracy);
  
  // Open Results Dialog
  resultsDialog.showModal();
}

function typedLengthDiffCount() {
  let errors = 0;
  const val = hiddenInput.value;
  for (let i = 0; i < val.length; i++) {
    const span = charSpans[i];
    if (span && span.classList.contains('incorrect')) {
      errors++;
    }
  }
  return errors;
}

// Get qualitative rating
function getRating(wpm, accuracy) {
  if (accuracy < 70) {
    return { title: "Draft Typist (Low Accuracy)", emoji: "✏️" };
  }
  if (wpm >= 90) return { title: "Speed Demon ⚡️", emoji: "🏆" };
  if (wpm >= 70) return { title: "Keyboard Warrior ⚔️", emoji: "🔥" };
  if (wpm >= 45) return { title: "Professional Typist ⌨️", emoji: "💻" };
  if (wpm >= 25) return { title: "Steady Typist 🐢", emoji: "☕" };
  return { title: "Novice Typer", emoji: "🌱" };
}

// Typist Level & XP Progress Indicator
function updateTypistLevel(wpm) {
  const badge = document.getElementById('level-badge-tag');
  const name = document.getElementById('level-name');
  const fill = document.getElementById('level-xp-fill');
  const tip = document.getElementById('level-next-text');
  
  let lvl = 1;
  let lvlName = "Novice Typist 🐢";
  let progress = 0;
  let targetWpm = 15;
  
  if (wpm < 15) {
    lvl = 1;
    lvlName = "Novice Typist 🐢";
    targetWpm = 15;
    progress = (wpm / 15) * 100;
  } else {
    lvl = Math.floor((wpm - 15) / 5) + 2;
    targetWpm = 15 + (lvl - 1) * 5;
    progress = ((wpm - (targetWpm - 5)) / 5) * 100;
    
    if (lvl <= 3) {
      lvlName = "Competent Typist ⌨️";
    } else if (lvl <= 6) {
      lvlName = "Fluent Typist 🚀";
    } else if (lvl <= 10) {
      lvlName = "Pro Typist 🔥";
    } else if (lvl <= 15) {
      lvlName = "Master Typist ⚡️";
    } else {
      lvlName = "Speed Demon 🏆";
    }
  }
  
  const remaining = targetWpm - wpm;
  const nextTip = `Type ${targetWpm} WPM to reach Level ${lvl + 1}! (Need ${remaining} WPM more)`;
  
  // Update UI Elements
  badge.textContent = `LVL ${lvl}`;
  name.textContent = lvlName;
  fill.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  tip.textContent = nextTip;
}

// Muscle Memory Typo Analysis & Speed Tip Generator
function analyzeMistakes(wpm, accuracy) {
  const commonTypoEl = document.getElementById('analysis-common-typo');
  const tipTextEl = document.getElementById('analysis-tip-text');
  
  if (mistakeLogs.length === 0) {
    commonTypoEl.textContent = 'None! 🎯';
    commonTypoEl.className = 'analysis-badge-val perfect';
    
    if (wpm >= 75) {
      tipTextEl.textContent = "Incredible run! You achieved flawless accuracy at a blistering pace. Focus on pushing your raw WPM limits or try coding snippets in Hard Mode.";
    } else {
      tipTextEl.textContent = "Perfect accuracy! Your muscle memory is extremely solid. Try typing a bit faster, pushing your limits gently since your base technique is stable.";
    }
    return;
  }
  
  commonTypoEl.className = 'analysis-badge-val';
  
  // Calculate most frequent typo target key
  const targetCounts = {};
  let mostFrequentKey = '';
  let maxCount = 0;
  
  // Custom categories
  let spaceMistakes = 0;
  let shiftMistakes = 0;
  let punctuationMistakes = 0;
  
  mistakeLogs.forEach(log => {
    const t = log.target;
    // Count frequency
    targetCounts[t] = (targetCounts[t] || 0) + 1;
    if (targetCounts[t] > maxCount) {
      maxCount = targetCounts[t];
      mostFrequentKey = t;
    }
    
    // Categories
    if (t === ' ') {
      spaceMistakes++;
    } else if (/[A-Z]/.test(t)) {
      shiftMistakes++;
    } else if (/[.,\/#!$%\^&\*;:{}=\-_`~()?]/.test(t)) {
      punctuationMistakes++;
    }
  });
  
  // Build readable key representation
  let displayKey = mostFrequentKey;
  if (mostFrequentKey === ' ') {
    displayKey = '[Spacebar]';
  }
  commonTypoEl.textContent = `Key "${displayKey}" (${maxCount}x)`;
  
  // Generate advice tip based on error analysis
  let tip = '';
  
  if (accuracy < 85) {
    tip = "Your accuracy is under 85%. Focus on slowing down! Try typing in a slow, steady rhythm, matching keystrokes to a steady beat. Do not rush to finish; accuracy generates speed naturally.";
  } else if (spaceMistakes >= mistakeLogs.length * 0.4) {
    tip = "Many of your errors were spacebar timing issues. Concentrate on completing each word fully before striking the spacebar with your thumb. Keep a steady cadence at word boundaries.";
  } else if (shiftMistakes >= mistakeLogs.length * 0.3) {
    tip = "You had multiple capitalization errors. Make sure you are fully holding down the Shift key *before* striking the letter key. Release the Shift key only after the character is typed.";
  } else if (punctuationMistakes >= mistakeLogs.length * 0.3) {
    tip = "You made multiple typos on punctuation keys. Keep your hands relaxed, and remember that punctuation keys lie on the bottom and right rows. Slow down slightly when approaching commas, periods, or symbols.";
  } else {
    // Check adjacent key errors (fat fingering)
    const QWERTY_NEIGHBORS = {
      a: 'qwsz', b: 'vghn', c: 'xdfv', d: 'ersfxc', e: 'wsdr',
      f: 'rtgvcd', g: 'tyhbvf', h: 'yujnbg', i: 'ujko', j: 'uikmnh',
      k: 'ijlm', l: 'okp', m: 'njk', n: 'bhjm', o: 'iklp',
      p: 'ol', q: 'wa', r: 'edft', s: 'wedxza', t: 'rfgy',
      u: 'yhji', v: 'cfgb', w: 'qase', x: 'zsdc', y: 'tghu', z: 'asx'
    };
    
    let adjacentErrorsCount = 0;
    mistakeLogs.forEach(log => {
      const targetLower = log.target.toLowerCase();
      const typedLower = log.typed.toLowerCase();
      const neighbors = QWERTY_NEIGHBORS[targetLower];
      if (neighbors && neighbors.includes(typedLower)) {
        adjacentErrorsCount++;
      }
    });
    
    if (adjacentErrorsCount >= mistakeLogs.length * 0.5) {
      tip = "Most of your mistakes were adjacent key 'fat-finger' errors (e.g. hitting adjacent letters). This means your hands are drifting. Keep your fingers anchored lightly on the home row (A-S-D-F and J-K-L-;) and tap key centers.";
    } else if (wpm > 80) {
      tip = "Great typing run! You type very fast. To reach the next level, practice relaxation exercises for your wrists and arms, as muscular tension creates tiny micro-hesitations.";
    } else {
      tip = "Good effort! Try focusing on clean, deliberate key strokes. Visualize the keys before striking them, and try to keep your eye on the upcoming word ahead of the caret.";
    }
  }
  
  tipTextEl.textContent = tip;
}

// Resets everything to initial state
function resetTest() {
  clearInterval(timerInterval);
  testState = 'idle';
  timeLeft = timerLimit;
  hudTimer.textContent = timerLimit;
  hudWpm.textContent = '0';
  hudAccuracy.textContent = '100%';
  hiddenInput.value = '';
  totalKeystrokes = 0;
  typosCount = 0;
  mistakeLogs = [];
  
  generateWords();
  wordsWrapper.style.transform = 'translateY(0)';
  
  // Reset test progress bar width
  const progressBar = document.getElementById('test-progress-bar');
  if (progressBar) {
    progressBar.style.width = '0%';
  }
  
  // Reset typist level XP bar fill width
  const xpFill = document.getElementById('level-xp-fill');
  if (xpFill) {
    xpFill.style.width = '0%';
  }
  
  // Reset card shake visual state
  typingCard.classList.remove('shake-anim');
  
  // Reset focus UI state
  if (document.activeElement === hiddenInput) {
    focusAlert.style.opacity = '0';
  } else {
    focusAlert.style.opacity = '1';
  }
  
  startCaretBlinking();
}

/* ==========================================================================
   Local Storage High Scores & Settings
   ========================================================================== */

function saveHighScore(diffMode, wpm) {
  const currentBest = parseInt(localStorage.getItem(`speed-typer-best-${diffMode}`)) || 0;
  if (wpm > currentBest) {
    localStorage.setItem(`speed-typer-best-${diffMode}`, wpm);
    updateHighScoresDisplay();
  }
}

function loadHighScores() {
  const easy = localStorage.getItem('speed-typer-best-easy') || 0;
  const medium = localStorage.getItem('speed-typer-best-medium') || 0;
  const hard = localStorage.getItem('speed-typer-best-hard') || 0;
  const essay = localStorage.getItem('speed-typer-best-essay') || 0;
  
  bestEasy.textContent = easy;
  bestMedium.textContent = medium;
  bestHard.textContent = hard;
  bestEssay.textContent = essay;
}

// Global update display
function updateHighScoresDisplay() {
  loadHighScores();
}

function clearHighScores() {
  if (confirm("Are you sure you want to reset your high scores? This cannot be undone.")) {
    localStorage.removeItem('speed-typer-best-easy');
    localStorage.removeItem('speed-typer-best-medium');
    localStorage.removeItem('speed-typer-best-hard');
    localStorage.removeItem('speed-typer-best-essay');
    loadHighScores();
  }
}

function saveSettings() {
  localStorage.setItem('speed-typer-sound', soundEnabled.toString());
  localStorage.setItem('speed-typer-theme', themeSelector.value);
}

function loadSettings() {
  // Load Theme
  const savedTheme = localStorage.getItem('speed-typer-theme') || 'cyberpunk';
  themeSelector.value = savedTheme;
  document.documentElement.setAttribute('data-theme', savedTheme);
  
  // Load Sound Toggle
  const savedSound = localStorage.getItem('speed-typer-sound');
  if (savedSound !== null) {
    soundEnabled = savedSound === 'true';
  } else {
    soundEnabled = true;
  }
  
  updateSoundToggleUI();
}

function updateSoundToggleUI() {
  if (soundEnabled) {
    soundOnIcon.classList.remove('hidden');
    soundOffIcon.classList.add('hidden');
    soundToggle.classList.add('active');
  } else {
    soundOnIcon.classList.add('hidden');
    soundOffIcon.classList.remove('hidden');
    soundToggle.classList.remove('active');
  }
}

/* ==========================================================================
   Event Handlers
   ========================================================================== */

// Input processor that matches characters
hiddenInput.addEventListener('input', (e) => {
  if (testState === 'finished') return;
  
  const val = hiddenInput.value;
  const typedLength = val.length;
  
  // Auto-start test on first keypress
  if (testState === 'idle' && typedLength > 0) {
    startTest();
  }
  
  setCaretTypingState();
  
  // Compare values key by key
  for (let i = 0; i < charSpans.length; i++) {
    const span = charSpans[i];
    span.classList.remove('active', 'correct', 'incorrect', 'extra');
    
    if (i < typedLength) {
      const typedChar = val[i];
      const targetChar = span.textContent === '\u00A0' ? ' ' : span.textContent;
      
      if (typedChar === targetChar) {
        span.classList.add('correct');
      } else {
        span.classList.add('incorrect');
      }
    }
  }
  
  // Set current active cursor
  if (typedLength < charSpans.length) {
    charSpans[typedLength].classList.add('active');
  }
  
  // Handle Keyboard Sound Synthesis & Typo Shake
  if (e.inputType === 'deleteContentBackward') {
    // backspace sounds
    playKeySound(false);
  } else if (typedLength > 0) {
    const lastChar = val[typedLength - 1] || '';
    const targetSpan = charSpans[typedLength - 1];
    
    if (targetSpan && targetSpan.classList.contains('incorrect')) {
      playErrorSound();
      typosCount++;
      
      // Log details of the typo for post-test analysis
      const targetChar = targetSpan.textContent === '\u00A0' ? ' ' : targetSpan.textContent;
      mistakeLogs.push({
        target: targetChar,
        typed: lastChar
      });
      
      // Trigger card shake visual on mistake
      typingCard.classList.remove('shake-anim');
      void typingCard.offsetWidth; // Force layout reflow
      typingCard.classList.add('shake-anim');
    } else {
      playKeySound(lastChar === ' ');
    }
  }
  
  // Update live progress bar visual indicator
  const progressBar = document.getElementById('test-progress-bar');
  if (progressBar && charSpans.length > 0) {
    const progressPercent = (typedLength / charSpans.length) * 100;
    progressBar.style.width = `${progressPercent}%`;
  }
  
  totalKeystrokes++;
  updateCaretPosition();
  
  // Auto-end test if user finishes the essay
  if (typeMode === 'essay' && typedLength === charSpans.length) {
    setTimeout(endTest, 120);
  } else {
    checkAndAppendWords();
  }
});

// Focus state controls
typingCard.addEventListener('click', () => {
  hiddenInput.focus();
});

hiddenInput.addEventListener('focus', () => {
  focusAlert.style.opacity = '0';
  startCaretBlinking();
});

hiddenInput.addEventListener('blur', () => {
  // Only show focus prompt if the test isn't finished
  if (testState !== 'finished') {
    focusAlert.style.opacity = '1';
  }
  customCaret.classList.remove('blinking', 'typing');
});

// Configuration Handlers (Type Mode: Words vs Essay)
modeTabs.addEventListener('change', (e) => {
  typeMode = e.target.value;
  if (typeMode === 'words') {
    difficultyGroup.classList.remove('hidden');
    topicGroup.classList.add('hidden');
  } else {
    difficultyGroup.classList.add('hidden');
    topicGroup.classList.remove('hidden');
  }
  resetTest();
  hiddenInput.focus();
});

// Configuration Handlers (Topic Selector)
topicSelector.addEventListener('change', (e) => {
  selectedTopic = e.target.value;
  resetTest();
  hiddenInput.focus();
});

// Configuration Handlers (Difficulty)
difficultyTabs.addEventListener('change', (e) => {
  difficulty = e.target.value;
  resetTest();
  hiddenInput.focus();
});

// Configuration Handlers (Time Limit)
timeTabs.addEventListener('change', (e) => {
  timerLimit = parseInt(e.target.value);
  resetTest();
  hiddenInput.focus();
});

// Sound Button Toggle
soundToggle.addEventListener('click', () => {
  soundEnabled = !soundEnabled;
  updateSoundToggleUI();
  saveSettings();
  
  // play a testing sound if enabled
  if (soundEnabled) {
    playKeySound(false);
  }
});

// Theme selection trigger
themeSelector.addEventListener('change', (e) => {
  const selectedTheme = e.target.value;
  document.documentElement.setAttribute('data-theme', selectedTheme);
  saveSettings();
});

// Stats Dialog controls
statsTrigger.addEventListener('click', () => {
  loadHighScores();
  statsDialog.showModal();
});

clearStatsBtn.addEventListener('click', clearHighScores);
statsDoneBtn.addEventListener('click', () => statsDialog.close());
closeStatsBtn.addEventListener('click', () => statsDialog.close());

// Results Dialog controls
dialogRestartBtn.addEventListener('click', () => {
  resultsDialog.close();
  resetTest();
  hiddenInput.focus();
});

closeResultsBtn.addEventListener('click', () => {
  resultsDialog.close();
  resetTest();
});

// Restart buttons
restartBtn.addEventListener('click', () => {
  resetTest();
  hiddenInput.focus();
});

// Window resize adjust caret positions
window.addEventListener('resize', () => {
  updateCaretPosition();
});

// Global Keyboard Shortcuts
window.addEventListener('keydown', (e) => {
  // 1. Esc or Tab key to reset instantly
  if (e.key === 'Escape' || e.key === 'Tab') {
    // Only intercept if we are typing inside the wrapper, or if modals are closed
    if (!resultsDialog.open && !statsDialog.open) {
      e.preventDefault();
      resetTest();
      hiddenInput.focus();
    }
  }
});

/* ==========================================================================
   Initialization on Load
   ========================================================================== */
window.addEventListener('DOMContentLoaded', () => {
  loadSettings();
  loadHighScores();
  
  // Clean up shake animation class on end
  typingCard.addEventListener('animationend', (e) => {
    if (e.animationName === 'shakeCard') {
      typingCard.classList.remove('shake-anim');
    }
  });

  // Set default mode based on selected tab
  const checkedMode = modeTabs.querySelector('input[name="typemode"]:checked');
  if (checkedMode) {
    typeMode = checkedMode.value;
    if (typeMode === 'words') {
      difficultyGroup.classList.remove('hidden');
      topicGroup.classList.add('hidden');
    } else {
      difficultyGroup.classList.add('hidden');
      topicGroup.classList.remove('hidden');
    }
  }

  // Set default topic
  selectedTopic = topicSelector.value;

  // Set default difficulty based on selected tab (Easy)
  const checkedDiff = difficultyTabs.querySelector('input[name="difficulty"]:checked');
  if (checkedDiff) difficulty = checkedDiff.value;

  // Set default time limit
  const checkedTime = timeTabs.querySelector('input[name="time"]:checked');
  if (checkedTime) timerLimit = parseInt(checkedTime.value);
  
  resetTest();
});
