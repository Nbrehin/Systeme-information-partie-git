// ─── QUOTES DATABASE ─────────────────────────────────────────────────────────

const QUOTES = [
    // ── Français ──────────────────────────────────────────────────────────────
    { text: "Il faut imaginer Sisyphe heureux.", author: "Albert Camus", work: "Le Mythe de Sisyphe" },
    { text: "On ne naît pas femme on le devient.", author: "Simone de Beauvoir", work: "Le Deuxième Sexe" },
    { text: "Longtemps je me suis couché de bonne heure.", author: "Marcel Proust", work: "Du côté de chez Swann" },
    { text: "Je pense donc je suis.", author: "René Descartes", work: "Discours de la Méthode" },
    { text: "L'enfer c'est les autres.", author: "Jean-Paul Sartre", work: "Huis clos" },
    { text: "Aujourd'hui maman est morte.", author: "Albert Camus", work: "L'Étranger" },
    { text: "La vie est un songe et les songes sont des songes.", author: "Pedro Calderón de la Barca", work: "La vie est un songe" },
    { text: "Le bonheur est un choix que l'on doit faire chaque matin.", author: "Jean-Paul Sartre", work: "L'Existentialisme est un humanisme" },
    { text: "Être ou ne pas être telle est la question.", author: "William Shakespeare", work: "Hamlet (trad. fr.)" },
    { text: "Tout est pour le mieux dans le meilleur des mondes possibles.", author: "Voltaire", work: "Candide" },
    { text: "Il ne faut pas désespérer les hommes.", author: "André Malraux", work: "La Condition humaine" },
    { text: "On ne voit bien qu'avec le cœur l'essentiel est invisible pour les yeux.", author: "Antoine de Saint-Exupéry", work: "Le Petit Prince" },
    { text: "Les hommes ont oublié cette vérité mais tu ne dois pas l'oublier.", author: "Antoine de Saint-Exupéry", work: "Le Petit Prince" },
    { text: "Aimez ce que jamais on ne verra deux fois.", author: "Alfred de Vigny", work: "La Maison du Berger" },
    { text: "Je suis ce que je suis et voilà tout ce que j'en puis dire.", author: "Jean-Jacques Rousseau", work: "Les Confessions" },
    { text: "Hypocrite lecteur mon semblable mon frère.", author: "Charles Baudelaire", work: "Les Fleurs du Mal" },
    { text: "Les larmes qu'on ne pleure pas restent dans la gorge et empoisonnent le cœur.", author: "Simone de Beauvoir", work: "Mémoires d'une jeune fille rangée" },
    { text: "Le monde ne vaut pas une heure de peine.", author: "Honoré de Balzac", work: "Le Père Goriot" },
    { text: "La vraie vie est ailleurs.", author: "Arthur Rimbaud", work: "Une Saison en Enfer" },
    { text: "Il n'y a qu'un problème philosophique vraiment sérieux c'est le suicide.", author: "Albert Camus", work: "Le Mythe de Sisyphe" },
  
    // ── English ────────────────────────────────────────────────────────────────
    { text: "All animals are equal but some animals are more equal than others.", author: "George Orwell", work: "Animal Farm" },
    { text: "It was the best of times it was the worst of times.", author: "Charles Dickens", work: "A Tale of Two Cities" },
    { text: "Call me Ishmael.", author: "Herman Melville", work: "Moby-Dick" },
    { text: "The only way out of the labyrinth of suffering is to forgive.", author: "John Green", work: "Looking for Alaska" },
    { text: "It is a truth universally acknowledged that a single man in possession of a good fortune must be in want of a wife.", author: "Jane Austen", work: "Pride and Prejudice" },
    { text: "Not all those who wander are lost.", author: "J.R.R. Tolkien", work: "The Lord of the Rings" },
    { text: "It does not do to dwell on dreams and forget to live.", author: "J.K. Rowling", work: "Harry Potter" },
    { text: "So we beat on boats against the current borne back ceaselessly into the past.", author: "F. Scott Fitzgerald", work: "The Great Gatsby" },
    { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson", work: "Self-Reliance" },
    { text: "I took a deep breath and listened to the old brag of my heart I am I am I am.", author: "Sylvia Plath", work: "The Bell Jar" },
    { text: "Whatever you are be a good one.", author: "Abraham Lincoln", work: "Speech (1858)" },
    { text: "Two roads diverged in a wood and I took the one less traveled by.", author: "Robert Frost", work: "The Road Not Taken" },
    { text: "In the beginning was the Word and the Word was with God.", author: "John the Apostle", work: "The Bible, John 1:1" },
    { text: "The truth will set you free but first it will make you miserable.", author: "James A. Garfield", work: "Speech (1871)" },
    { text: "We are all just walking each other home.", author: "Ram Dass", work: "Be Here Now" },
    { text: "Do not go gentle into that good night rage rage against the dying of the light.", author: "Dylan Thomas", work: "Do Not Go Gentle" },
    { text: "Happiness can be found even in the darkest of times if one only remembers to turn on the light.", author: "J.K. Rowling", work: "Harry Potter" },
    { text: "The measure of intelligence is the ability to change.", author: "Albert Einstein", work: "Ideas and Opinions" },
    { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein", work: "Ideas and Opinions" },
    { text: "Yesterday is history tomorrow is a mystery today is a gift.", author: "Eleanor Roosevelt", work: "You Learn by Living" },
    { text: "There is no greater agony than bearing an untold story inside you.", author: "Maya Angelou", work: "I Know Why the Caged Bird Sings" },
    { text: "A reader lives a thousand lives before he dies the man who never reads lives only one.", author: "George R.R. Martin", work: "A Dance with Dragons" },
    { text: "Fantasy is hardly an escape from reality it is a way of understanding it.", author: "Lloyd Alexander", work: "The Book of Three" },
    { text: "The books that the world calls immoral are books that show the world its own shame.", author: "Oscar Wilde", work: "The Picture of Dorian Gray" },
  ];
  
  // ─── UTILITIES ────────────────────────────────────────────────────────────────
  
  /**
   * Fisher-Yates shuffle — returns a new shuffled array.
   */
  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  
  /**
   * Strips punctuation and normalises whitespace so the player only types words,
   * not commas/periods/etc.
   */
  function normalizeText(text) {
    return text
      .toLowerCase()
      .replace(/['']/g, "'")       // curly apostrophes → straight
      .replace(/[«»""]/g, '')      // guillemets / curly quotes
      .replace(/[.,;:!?…]/g, '')   // terminal punctuation
      .replace(/\s+/g, ' ')
      .trim();
  }
  
  // ─── DOM REFERENCES ───────────────────────────────────────────────────────────
  
  const wordDisplay  = document.getElementById('wordDisplay');
  const typeInput    = document.getElementById('typeInput');
  const attribution  = document.getElementById('attribution');
  const wpmDisplay   = document.getElementById('wpmDisplay');
  const timeDisplay  = document.getElementById('timeDisplay');
  const accDisplay   = document.getElementById('accDisplay');
  const scoreDisplay = document.getElementById('scoreDisplay');
  const timerFill    = document.getElementById('timerFill');
  const trackFill    = document.getElementById('trackFill');
  const trackCar     = document.getElementById('trackCar');
  
  // ─── GAME CONFIGURATION ───────────────────────────────────────────────────────
  
  /** Duration in seconds for each difficulty level. */
  const DURATIONS = { easy: 90, medium: 60, hard: 45 };
  
  // ─── GAME STATE ───────────────────────────────────────────────────────────────
  
  let quoteQueue      = [];   // shuffled list of quotes for this session
  let currentQuoteIdx = 0;    // index into quoteQueue
  let words           = [];   // normalised words of the active quote
  let currentWordIndex = 0;   // which word the player is currently typing
  
  let totalTyped      = 0;    // total characters submitted (for accuracy)
  let totalErrors     = 0;    // error characters counted
  let score           = 0;    // running score
  let quotesCompleted = 0;    // number of full quotes finished (for bonus points)
  
  let timeLeft        = 60;
  let timerInterval   = null;
  let startTime       = null;
  let gameActive      = false;
  let difficulty      = 'easy';
  
  // ─── DIFFICULTY BUTTONS ───────────────────────────────────────────────────────
  
  document.querySelectorAll('.diff-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      difficulty = btn.dataset.diff;
    });
  });
  
  // ─── OVERLAY NAVIGATION ───────────────────────────────────────────────────────
  
  document.getElementById('startBtn').addEventListener('click', startGame);
  document.getElementById('restartBtn').addEventListener('click', () => { hideEnd(); startGame(); });
  document.getElementById('menuBtn').addEventListener('click', () => { hideEnd(); showStart(); });
  
  function showStart() { document.getElementById('startScreen').classList.remove('hidden'); }
  function hideStart() { document.getElementById('startScreen').classList.add('hidden'); }
  function showEnd()   { document.getElementById('endScreen').classList.remove('hidden'); }
  function hideEnd()   { document.getElementById('endScreen').classList.add('hidden'); }
  
  // ─── QUOTE MANAGEMENT ─────────────────────────────────────────────────────────
  
  /**
   * Pulls the next quote from the queue (reshuffles when exhausted),
   * splits it into words, and updates the attribution line.
   */
  function loadNextQuote() {
    if (currentQuoteIdx >= quoteQueue.length) {
      quoteQueue = shuffle(QUOTES);
      currentQuoteIdx = 0;
    }
  
    const q = quoteQueue[currentQuoteIdx++];
    words = normalizeText(q.text).split(' ').filter(w => w.length > 0);
    currentWordIndex = 0;
  
    // Fade-in the attribution
    attribution.style.opacity = '0';
    setTimeout(() => {
      attribution.innerHTML =
        `— <span class="attr-author">${q.author}</span>, <em>${q.work}</em>`;
      attribution.style.opacity = '0.8';
    }, 200);
  }
  
  // ─── RENDERING ────────────────────────────────────────────────────────────────
  
  /**
   * Re-renders the visible portion of the current quote in the word display.
   * Shows a small window of past, current, and upcoming words.
   */
  function renderWords() {
    wordDisplay.innerHTML = '';
  
    const offset  = Math.max(0, currentWordIndex - 2);
    const visible = words.slice(offset, currentWordIndex + 22);
  
    visible.forEach((word, i) => {
      const idx  = i + offset;
      const span = document.createElement('span');
      span.className = 'word';
  
      if (idx < currentWordIndex) {
        // ── Already typed ──
        span.classList.add('done');
        span.textContent = word;
  
      } else if (idx === currentWordIndex) {
        // ── Currently typing — character-level feedback ──
        span.classList.add('current');
        const typed = typeInput.value;
  
        word.split('').forEach((ch, ci) => {
          const c = document.createElement('span');
          c.className = 'char';
  
          if (ci < typed.length) {
            c.classList.add(typed[ci] === ch ? 'correct' : 'wrong');
          } else if (ci === typed.length) {
            c.classList.add('pending', 'cursor'); // blinking cursor position
          } else {
            c.classList.add('pending');
          }
  
          c.textContent = ch;
          span.appendChild(c);
        });
  
      } else {
        // ── Not yet reached ──
        span.classList.add('pending');
        span.textContent = word;
      }
  
      wordDisplay.appendChild(span);
    });
  }
  
  // ─── STATS ────────────────────────────────────────────────────────────────────
  
  /**
   * Recalculates WPM and accuracy, then updates the HUD and progress track.
   */
  function updateStats() {
    if (!startTime) return;
  
    const elapsed = (Date.now() - startTime) / 60000; // minutes
  
    // Count total words typed across all completed quotes + current progress
    const wordsFromPastQuotes = quoteQueue
      .slice(0, currentQuoteIdx - 1)
      .reduce((sum, q) => sum + normalizeText(q.text).split(' ').length, 0);
    const totalWords = wordsFromPastQuotes + currentWordIndex;
  
    const wpm = elapsed > 0.05 ? Math.round(totalWords / elapsed) : 0;
    const acc = totalTyped > 0
      ? Math.round(((totalTyped - totalErrors) / totalTyped) * 100)
      : 100;
  
    wpmDisplay.textContent   = wpm;
    accDisplay.textContent   = acc + '%';
    scoreDisplay.textContent = score;
  
    // Progress bar — position within the current quote
    const progress = Math.min((currentWordIndex / words.length) * 100, 100);
    trackFill.style.width = progress + '%';
    trackCar.style.left   = Math.max(0, progress - 2) + '%';
  }
  
  // ─── GAME LIFECYCLE ───────────────────────────────────────────────────────────
  
  function startGame() {
    hideStart();
  
    // Reset state
    quoteQueue      = shuffle(QUOTES);
    currentQuoteIdx = 0;
    totalTyped      = 0;
    totalErrors     = 0;
    score           = 0;
    quotesCompleted = 0;
    timeLeft        = DURATIONS[difficulty];
    gameActive      = true;
  
    // Reset UI
    typeInput.value = '';
    typeInput.disabled = false;
    typeInput.classList.remove('error');
    typeInput.focus();
  
    timerFill.style.width = '100%';
    timerFill.className   = 'timer-fill';
    trackFill.style.width = '0%';
    trackCar.style.left   = '0%';
  
    wpmDisplay.textContent   = '0';
    timeDisplay.textContent  = timeLeft;
    accDisplay.textContent   = '100%';
    scoreDisplay.textContent = '0';
  
    loadNextQuote();
    renderWords();
  
    // Start countdown
    clearInterval(timerInterval);
    startTime = Date.now();
  
    timerInterval = setInterval(() => {
      timeLeft--;
      timeDisplay.textContent = timeLeft;
  
      const pct = (timeLeft / DURATIONS[difficulty]) * 100;
      timerFill.style.width = pct + '%';
  
      if      (pct < 25) timerFill.className = 'timer-fill danger';
      else if (pct < 50) timerFill.className = 'timer-fill warning';
  
      if (timeLeft <= 0) endGame();
    }, 1000);
  }
  
  function endGame() {
    clearInterval(timerInterval);
    gameActive = false;
    typeInput.disabled = true;
  
    // Final calculations
    const elapsed    = (Date.now() - startTime) / 60000;
    const wordsFromPastQuotes = quoteQueue
      .slice(0, currentQuoteIdx - 1)
      .reduce((sum, q) => sum + normalizeText(q.text).split(' ').length, 0);
    const totalWords = wordsFromPastQuotes + currentWordIndex;
  
    const wpm        = Math.round(totalWords / Math.max(elapsed, 0.01));
    const acc        = totalTyped > 0
      ? Math.round(((totalTyped - totalErrors) / totalTyped) * 100)
      : 100;
    const finalScore = Math.round(wpm * (acc / 100) * 10) + quotesCompleted * 50;
  
    document.getElementById('resWpm').textContent   = wpm;
    document.getElementById('resAcc').textContent   = acc + '%';
    document.getElementById('resScore').textContent = finalScore;
  
    const endTitle = document.getElementById('endTitle');
    const resLog   = document.getElementById('resLog');
  
    if (acc >= 95 && wpm >= 40) {
      endTitle.textContent = 'EXCELLENT';
      endTitle.className   = 'overlay-title';
      resLog.textContent   = `> ${quotesCompleted} CITATION(S) COMPLÉTÉE(S). PERFORMANCE SUPÉRIEURE.`;
    } else if (acc < 70) {
      endTitle.textContent = 'ERREURS';
      endTitle.className   = 'overlay-title fail';
      resLog.textContent   = '> TROP D\'ERREURS. RECALIBRATION NÉCESSAIRE.';
    } else {
      endTitle.textContent = 'RÉSULTATS';
      endTitle.className   = 'overlay-title';
      resLog.textContent   = `> ${quotesCompleted} CITATION(S) COMPLÉTÉE(S). BONNE PERFORMANCE.`;
    }
  
    showEnd();
  }
  
  // ─── INPUT HANDLING ───────────────────────────────────────────────────────────
  
  typeInput.addEventListener('input', () => {
    if (!gameActive) return;
  
    const val         = typeInput.value;
    const currentWord = words[currentWordIndex];
  
    // Space = submit current word
    if (val.endsWith(' ')) {
      const typed = val.trim();
      totalTyped += currentWord.length;
  
      if (typed === currentWord) {
        score += currentWord.length;
        typeInput.classList.remove('error');
      } else {
        // Count how many characters were wrong or missing
        const errorCount = [...typed].filter((ch, i) => ch !== (currentWord[i] || '')).length
          + Math.abs(typed.length - currentWord.length);
        totalErrors += Math.max(1, errorCount);
      }
  
      currentWordIndex++;
      typeInput.value = '';
      typeInput.classList.remove('error');
  
      // Quote finished — load the next one
      if (currentWordIndex >= words.length) {
        quotesCompleted++;
        score += 50; // bonus for completing a full quote
        loadNextQuote();
      }
  
      renderWords();
      updateStats();
      return;
    }
  
    // Live character feedback
    const hasError = val.length > currentWord.length ||
      [...val].some((ch, i) => ch !== currentWord[i]);
    typeInput.classList.toggle('error', hasError);
  
    renderWords();
    updateStats();
  });
  
  // Prevent backspacing into the previous word
  typeInput.addEventListener('keydown', e => {
    if (e.key === 'Backspace' && typeInput.value === '') {
      e.preventDefault();
    }
  });
  
  // ─── INIT ─────────────────────────────────────────────────────────────────────
  
  showStart();