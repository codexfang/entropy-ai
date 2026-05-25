/* ============================================
   Entropy AI — Password Strength Analyzer
   Core Logic
   ============================================ */

// ─── Common Passwords (Top 500) ─────────────
const COMMON = new Set([
  "123456","password","12345678","qwerty","123456789","12345","1234","111111","1234567",
  "sunshine","qwerty123","iloveyou","princess","admin","welcome","666666","abc123",
  "football","123123","monkey","dragon","1234567890","master","112233","letmein",
  "888888","654321","superman","batman","trustno1","1q2w3e","123321","987654321",
  "password1","blahblah","charlie","donald","michael","baseball","ashley","121212",
  "hunter","qwertyuiop","123qwe","solo","qwertz","whatever","ninja","mustang",
  "zaq1zaq1","password123","gfhjkm","shadow","zxcvbnm","whatever1","passw0rd",
  "password12","maggie","thomas","basketball","hello","pepper","aaaaaa","jennifer",
  "11111111","cheese","ashley1","ferrari","chester","whatever123","dallas","charlie1",
  "henry","lovely","bailey","andrew","joshua","yankees","1qaz2wsx","thunder",
  "jessica","pass123","george","thomas1","harley","maverick","victoria","qwerty1",
  "password1234","summer","robert","alexander","hockey","rangers","starwars",
  "matthew","jordan","buster","liverpool","12345678910","andy","martin","ginger",
  "james","merlin","butthead","cowboy","ncc1701","0987654321","steelers","sparky",
  "marina","nascar","fender","anthony","qwerty12345","dolphin","tigger","michelle",
  "buster1","nathan","panthers","test123","wolfgang","motocross","buddy","rocky",
  "eating","cheese1","computer","heather","marley","tigger1","austin","arsenal",
  "pumpkin","hunter1","midnight","colombia","slipknot","black","soccer","eagles",
  "michigan","madison","miller","turtle","tigers","butterfly","jaguar","harry",
  "raiders","nicholas","gandalf","phoenix","amanda","flower","joshua1","jake",
  "blowfish","pharmacy","brandon","carlos","samsung","tigger2","justin","daniel",
  "access","mercedes","cricket","sithlord","cocacola","nikon","samson","sierra",
  "viper","chester1","digital","hacking","yankees1","justin1","babygirl","aurora",
  "rainbow","police","samurai","brittany","jordan1","javier","spiderman","123456a",
  "canada","senha","123456q","qwerty123456","winston","51505150","scarface",
  "scorpion","wilson","jackson","212121","wasdwasd","r2d2","stargate","melissa",
  "banana","qwerty12","sasha","benjamin","muffin","chicago","monkey1","amsterdam",
  "sabrina","winter","norton","peter","heaven","1111111","pablo","motorola","bobmarley",
  "adidas","123456789a","virginia","wolverine","1q2w3e4r","marshal","friends",
  "jake1","buddy1","123456qwerty","21212121","apple","corvette","nissan","dylan",
  "james1","123qwert","jamaica","moscow","berlin","angela","godzilla","pakistan",
  "a12345","nathan1","qwerty1234","cartman","salmon","blessed","bullshit","987654",
  "a123456789","diablo","letmein1","peaches","welcome1","curtis","pookie","killer",
  "mike","alexis","josh","star","kamikaze","jack","london","gandalf1","success",
  "123456789q","cooper","fender1","jessica1","marlboro","samantha","1234567a",
  "a123456","hannah","bigdaddy","maria","cavalera","dakota","scooby","charlotte",
  "11111","121314","poohbear","passion","scooter","gabriel","kitten","love123",
  "flower1","steven","jasper","butter","david","alexandra","jasmine","arsenal1",
  "kangaroo","elephant","zombie","bailey1","andrea","toyota","jamesbond","warcraft",
  "internet","kenneth","pipol","garfield","aaaa","112358","caitlin","homer",
  "richard","alexandr","pandora","oliver","cowboys","testing","goodluck","cccccc",
  "juliet","valentina","hotdog","samuel","xavier","zxcvbnm1","cowboy1","fuckme",
  "123698745","starwars1","charlie2","fender2","ginger1","internet1","mercedes1",
  "555555","123654","30051980","killer1","indiana","water","bob","marcus",
  "rainbow1","qazwsx","viper1","august","boomer","pizza","zxcvb","scorpio",
  "snickers","trinity","tinker","ranger","maxwell","grizzly","diamond","playboy",
  "boston","tigger12","coolman","star","crystal","asshole","lucky","butterfly1",
  "midnight1","smokey","fender1","harley1","sparky1","mountain","lovely1","junior",
  "amanda1","25251325","qwert123","hello123","alejandra","doggy","charlie123",
  "access1","angel1","blue12","pepper1","dragon1","flower12","ranger1","nicole",
  "carlos1","jake123","victor","1111111111","london1","helpme","soccer1","sithlord1",
  "peter1","hockey1","mustang1","dallas1","austin1","pretty","alexis1","rangers1",
  "benjamin1","miller1","yankees12","thomas123","peaches1","winter1","wilson1",
  "princess1","ncc1701d","qwerty1234567","12345678901","password01","test1234",
  "samsung1","nokia","jordan23","michael1","patrick","daniel1","matthew1",
  "ashley12","fluffy","a1234567","jennifer1","tigger123","samantha1","computer1",
  "merlin1","shadow1","buster123","buddy123","andrew1","jackson1","justin123",
  "nathan123","sabrina1","a12345678","sunshine1","steelers1","raiders1","hunter12",
  "baseball1","football1","thunder1","monkey123","dragon123","batman1","phoenix1",
  "turtle1","tiger1","jaguar1","panther1","rocky1","midnight12","rainbow12",
  "butterfly12","lovely123","eagles1","liverpool1","chelsea","arsenal123",
  "barcelona","real_madrid","juventus","acmilan","inter_milan","bayern",
  "dortmund","paris","oliver1","jasmine1","maria1","carlos123","javier1",
  "alejandro","rodrigo","fernando","ricardo","eduardo","alejandra1","santiago",
  "matias","nicolas","camila","valentina","isabella","sofia","lucia","emma",
  "mia","olivia","emily","ava","charlotte1","amelia","harper","evelyn","abigail",
  "elizabeth","scarlett","grace","chloe","victoria1","riley","avery","lily",
  "aubrey","zoey","layla","hailey","hannah1","sarah","kaylee","mackenzie",
  "madelyn","bella","peyton","addison","brooklyn","aaliyah","maya","penelope",
  "ellie","nora","camilla","skylar","paisley","aria","naomi","kylie","stella",
  "katherine","jordyn","gabriella","autumn","savannah","audrey","allison",
  "claire","taylor","samantha1","natalie","lauren","brianna","stephanie",
  "julia","alexa","kaitlyn","jocelyn","sierra1","megan","morgan","jada","kelsey",
  "cheyenne","molly","marissa","reagan","miranda","katelyn","rachael","kaitlin",
  "alexandria","mackenna","sydney","mariah","madeline","ashlyn","katrina","bailee",
  "jacqueline","kendall","lillian","makenna","alaina","haley","jayla","jordyn1",
  "kennedy","makenzie","paige","mikayla","brynn","rylee","kate","caroline",
  "diana","juliana","lily1","alyssa","jadyn","kyla","kira","mya","briana",
  "lindsay","leslie","renee","jill","alison","cassidy","julie","katie","bridget",
  "colleen","shannon","meghan","kathryn","caitlin1","erin","kelly","kimberly",
  "paulina","raquel","trisha","esther","rebecca","nancy","tiffany","bethany",
  "monica","chrystal","janet","patricia","debra","susan","vera","jill1","megan1"
]);

// ─── Pattern Definitions ────────────────────

const SEQUENTIAL = [
  "abcdefghijklmnopqrstuvwxyz",
  "0123456789",
  "qwertyuiop",
  "asdfghjkl",
  "zxcvbnm"
];

// Keyboard adjacent pairs for pattern detection
const KEYBOARD_ROWS = [
  "qwertyuiop",
  "asdfghjkl",
  "zxcvbnm"
];

// ─── Core Analysis ──────────────────────────

function analyzePassword(password) {
  if (!password) {
    return {
      score: 0,
      entropy: 0,
      crackTimeSeconds: 0,
      weaknesses: [],
      suggestions: ["Enter a password to get started"]
    };
  }

  const entropy = calculateEntropy(password);
  const score = calculateScore(entropy, password);
  const crackTimeSeconds = estimateCrackTime(entropy);
  const weaknesses = detectWeaknesses(password);
  const suggestions = generateSuggestions(weaknesses, password);

  return { score, entropy, crackTimeSeconds, weaknesses, suggestions };
}

// Shannon entropy: E = L * log2(R)
// where L = length, R = pool size (possible characters)
function calculateEntropy(password) {
  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSymbol = /[^a-zA-Z0-9]/.test(password);

  let pool = 0;
  if (hasLower) pool += 26;
  if (hasUpper) pool += 26;
  if (hasDigit) pool += 10;
  if (hasSymbol) pool += 33;

  if (pool === 0) return 0;

  const length = password.length;
  return length * Math.log2(pool);
}

function calculateScore(entropy, password) {
  if (!password) return 0;
  // Raw score from entropy (target: 128 bits = perfect)
  let score = Math.min(100, (entropy / 128) * 100);

  // Penalty for common passwords
  if (COMMON.has(password.toLowerCase())) {
    score *= 0.2;
  }

  // Penalty for patterns
  if (hasSequentialPattern(password)) score *= 0.85;
  if (hasKeyboardPattern(password)) score *= 0.85;
  if (hasRepeatedChars(password)) score *= 0.9;

  // Short length hard cap
  if (password.length < 4) score = Math.min(score, 10);
  else if (password.length < 6) score = Math.min(score, 25);
  else if (password.length < 8) score = Math.min(score, 50);

  return Math.round(Math.max(0, Math.min(100, score)));
}

// Estimate crack time based on entropy bits
function estimateCrackTime(entropy) {
  // Assume 10^9 guesses/sec (online attack with rate limiting)
  const guessesPerSecond = 1e9;
  // Average guesses needed = 2^(bits - 1)
  const averageGuesses = Math.pow(2, entropy - 1);
  return averageGuesses / guessesPerSecond;
}

function detectWeaknesses(password) {
  const w = [];

  w.push({ id: "lowercase", pass: /[a-z]/.test(password), label: "Lowercase letter" });
  w.push({ id: "uppercase", pass: /[A-Z]/.test(password), label: "Uppercase letter" });
  w.push({ id: "digits",    pass: /\d/.test(password),       label: "Number" });
  w.push({ id: "symbols",   pass: /[^a-zA-Z0-9]/.test(password), label: "Symbol" });
  w.push({ id: "length",    pass: password.length >= 8,      label: "8+ characters" });
  w.push({ id: "common",    pass: !COMMON.has(password.toLowerCase()), label: "Not a common password" });

  // Pattern checks only shown if password is long enough
  if (password.length >= 4) {
    w.push({ id: "sequential", pass: !hasSequentialPattern(password), label: "No sequential patterns" });
    w.push({ id: "keyboard",   pass: !hasKeyboardPattern(password),   label: "No keyboard patterns" });
    w.push({ id: "repeated",   pass: !hasRepeatedChars(password),     label: "No repeated characters" });
  }

  return w;
}

function generateSuggestions(weaknesses, password) {
  const suggestions = [];

  const missing = weaknesses.filter(w => !w.pass);

  if (missing.length === 0) {
    suggestions.push("This password is strong!");
    return suggestions;
  }

  const types = {
    lowercase: "lowercase letter",
    uppercase: "uppercase letter",
    digits: "number",
    symbols: "symbol"
  };

  const missingTypes = missing.filter(w => types[w.id]).map(w => types[w.id]);
  if (missingTypes.length > 0) {
    suggestions.push(`Add ${missingTypes.join(", ")}`);
  }

  if (!weaknesses.find(w => w.id === "length")?.pass) {
    const needed = 8 - password.length;
    suggestions.push(needed > 0 ? `Add ${needed} more characters (at least 8)` : "Use at least 8 characters");
  }

  if (!weaknesses.find(w => w.id === "common")?.pass) {
    suggestions.push("Avoid common passwords — they're easily guessed");
  }

  if (!weaknesses.find(w => w.id === "sequential")?.pass) {
    suggestions.push("Avoid predictable sequences like \"12345\" or \"abcdef\"");
  }

  if (!weaknesses.find(w => w.id === "keyboard")?.pass) {
    suggestions.push("Avoid keyboard patterns like \"qwerty\" or \"asdfgh\"");
  }

  if (!weaknesses.find(w => w.id === "repeated")?.pass) {
    suggestions.push("Avoid repeated characters (e.g., \"aaa\", \"111\")");
  }

  if (suggestions.length > 4) {
    suggestions.length = 4;
    suggestions.push("Use a mix of character types for maximum strength");
  }

  return suggestions;
}

// ─── Pattern Detection ──────────────────────

function hasSequentialPattern(password) {
  const lower = password.toLowerCase();
  for (const seq of SEQUENTIAL) {
    for (let i = 0; i < seq.length - 2; i++) {
      const chunk = seq.slice(i, i + 3);
      if (lower.includes(chunk)) return true;
      // Check reverse
      const rev = chunk.split("").reverse().join("");
      if (lower.includes(rev)) return true;
    }
  }
  return false;
}

function hasKeyboardPattern(password) {
  const lower = password.toLowerCase();
  for (const row of KEYBOARD_ROWS) {
    for (let i = 0; i < row.length - 2; i++) {
      const chunk = row.slice(i, i + 3);
      if (lower.includes(chunk)) return true;
      const rev = chunk.split("").reverse().join("");
      if (lower.includes(rev)) return true;
    }
  }
  return false;
}

function hasRepeatedChars(password) {
  return /(.)\1{2,}/.test(password);
}

// ─── Password Generation ────────────────────

function generatePassword(length = 20) {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const digits = "0123456789";
  const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  const all = upper + lower + digits + symbols;

  const cryptoRand = (max) => {
    const arr = new Uint32Array(1);
    crypto.getRandomValues(arr);
    return arr[0] % max;
  };

  // Ensure at least one of each type
  let password = "";
  password += upper[cryptoRand(upper.length)];
  password += lower[cryptoRand(lower.length)];
  password += digits[cryptoRand(digits.length)];
  password += symbols[cryptoRand(symbols.length)];

  // Fill remaining
  for (let i = password.length; i < length; i++) {
    password += all[cryptoRand(all.length)];
  }

  // Fisher-Yates shuffle
  const arr = password.split("");
  for (let i = arr.length - 1; i > 0; i--) {
    const j = cryptoRand(i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr.join("");
}

// ─── Format Crack Time ──────────────────────

function formatCrackTime(seconds) {
  if (seconds <= 0) return "—";

  const units = [
    { limit: 1e-3, label: "millisecond", div: 1e-3 },
    { limit: 1, label: "second", div: 1 },
    { limit: 60, label: "second", div: 1 },
    { limit: 3600, label: "minute", div: 60 },
    { limit: 86400, label: "hour", div: 3600 },
    { limit: 2592000, label: "day", div: 86400 },
    { limit: 31536000, label: "month", div: 2592000 },
    { limit: 315360000, label: "year", div: 31536000 },
    { limit: Infinity, label: "centuries", div: 315360000 }
  ];

  // Find appropriate unit
  for (let i = 0; i < units.length; i++) {
    if (seconds < units[i].limit) {
      const unit = units[i];
      const val = seconds / unit.div;

      if (i === 0) {
        // Milliseconds
        const ms = seconds * 1000;
        return ms < 1 ? "Instantly" : `${Math.round(ms)} ms`;
      }

      if (seconds < 1) {
        return `${Math.round(seconds * 1000)} ms`;
      }

      // Handle plural
      const rounded = Math.round(val);
      const label = rounded === 1 ? unit.label : unit.label + "s";

      if (label === "centuries") {
        return "Centuries";
      }

      if (seconds >= 315360000) {
        const years = Math.round(seconds / 31536000);
        return years >= 1000 ? "Centuries" : `${years} years`;
      }

      return `${rounded} ${label}`;
    }
  }

  // Fallback for extremely large values
  const years = seconds / 31536000;
  if (years >= 1e6) return "Centuries";
  if (years >= 1000) return `${Math.round(years / 1000)}k years`;
  return `${Math.round(years)} years`;
}

// ─── Strength Label & Color ─────────────────

function getStrengthMeta(score) {
  if (score >= 80) return { label: "Very Strong", color: "var(--strength-5)" };
  if (score >= 60) return { label: "Strong", color: "var(--strength-4)" };
  if (score >= 40) return { label: "Fair", color: "var(--strength-3)" };
  if (score >= 20) return { label: "Weak", color: "var(--strength-2)" };
  return { label: "Very Weak", color: "var(--strength-1)" };
}

// ─── UI ──────────────────────────────────────

const $ = (id) => document.getElementById(id);

const elements = {
  input: $("passwordInput"),
  toggle: $("toggleVisibility"),
  fill: $("strengthFill"),
  label: $("strengthLabel"),
  score: $("strengthScore"),
  crackTime: $("crackTime"),
  crackSection: $("crackTimeSection"),
  resultsGrid: $("resultsGrid"),
  weaknessesList: $("weaknessesList"),
  patternsList: $("patternsList"),
  suggestionsList: $("suggestionsList"),
  generateBtn: $("generateBtn"),
  copyBtn: $("copyBtn"),
  toast: $("toast")
};

let currentPassword = "";

function updateUI(password) {
  currentPassword = password;
  const result = analyzePassword(password);

  // Strength bar
  const meta = getStrengthMeta(result.score);
  elements.fill.style.width = `${result.score}%`;
  elements.fill.style.background = meta.color;
  elements.label.textContent = password ? meta.label : "No password";

  // Score text
  elements.score.innerHTML = `${result.score} <span class="score-max">/ 100</span>`;

  // Crack time
  if (password) {
    elements.crackTime.textContent = formatCrackTime(result.crackTimeSeconds);
    elements.crackSection.classList.add("visible");
    elements.resultsGrid.classList.add("visible");
  } else {
    elements.crackTime.textContent = "—";
    elements.crackSection.classList.remove("visible");
    elements.resultsGrid.classList.remove("visible");
  }

  // Weaknesses (requirements)
  const reqChecks = result.weaknesses.filter(w =>
    ["lowercase","uppercase","digits","symbols","length","common"].includes(w.id)
  );
  renderChecklist(elements.weaknessesList, reqChecks);

  // Patterns
  const patChecks = result.weaknesses.filter(w =>
    ["sequential","keyboard","repeated"].includes(w.id)
  );

  // If no patterns shown (too short), show placeholder
  if (patChecks.length === 0 && password.length < 4 && password.length > 0) {
    elements.patternsList.innerHTML = `<li class="suggestion-item">Type more characters to check for patterns</li>`;
  } else {
    renderChecklist(elements.patternsList, patChecks);
  }

  // Suggestions
  elements.suggestionsList.innerHTML = "";
  if (result.suggestions.length === 0) {
    elements.suggestionsList.innerHTML = `<li class="suggestion-item">Enter a password to get started</li>`;
  } else {
    result.suggestions.forEach((s, i) => {
      const li = document.createElement("li");
      li.className = `suggestion-item${i === 0 && s.includes("strong") ? " highlight" : ""}`;
      li.textContent = s;
      elements.suggestionsList.appendChild(li);
    });
  }

  // Copy button state
  elements.copyBtn.disabled = !password;
}

function renderChecklist(container, items) {
  container.innerHTML = "";
  items.forEach(item => {
    const li = document.createElement("li");
    li.className = `result-item ${item.pass ? "pass" : "fail"}`;
    li.dataset.check = item.id;
    li.innerHTML = `<span class="result-icon">${item.pass ? "✓" : "○"}</span> ${item.label}`;
    container.appendChild(li);
  });
}

// ─── Toast Notification ─────────────────────

let toastTimeout;

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    elements.toast.classList.remove("show");
  }, 2000);
}

// ─── Event Listeners ────────────────────────

// Real-time analysis
elements.input.addEventListener("input", () => {
  updateUI(elements.input.value);
});

// Toggle visibility
elements.toggle.addEventListener("click", () => {
  const isPassword = elements.input.type === "password";
  elements.input.type = isPassword ? "text" : "password";
  const showIcon = elements.toggle.querySelector(".eye-icon");
  const hideIcon = elements.toggle.querySelector(".eye-off-icon");
  if (showIcon && hideIcon) {
    showIcon.style.display = isPassword ? "none" : "";
    hideIcon.style.display = isPassword ? "" : "none";
  }
});

// Generate password
elements.generateBtn.addEventListener("click", () => {
  const password = generatePassword(20);
  elements.input.value = password;
  elements.input.type = "password";
  // Reset toggle icon
  const showIcon = elements.toggle.querySelector(".eye-icon");
  const hideIcon = elements.toggle.querySelector(".eye-off-icon");
  if (showIcon && hideIcon) {
    showIcon.style.display = "";
    hideIcon.style.display = "none";
  }
  updateUI(password);
  // Focus and select
  elements.input.focus();
  elements.input.select();
  showToast("Password generated!");
});

// Copy password
elements.copyBtn.addEventListener("click", async () => {
  if (!currentPassword) return;
  try {
    await navigator.clipboard.writeText(currentPassword);
    showToast("Copied to clipboard!");
  } catch {
    // Fallback
    const ta = document.createElement("textarea");
    ta.value = currentPassword;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
    showToast("Copied to clipboard!");
  }
});

// Keyboard shortcut: Escape clears input
elements.input.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    elements.input.value = "";
    updateUI("");
    elements.input.blur();
  }
});

// ─── Init ──────────────────────────────────

updateUI("");