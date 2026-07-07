const vocab = ["hello", "goodbye", "morning", "name", "nice", "meet", "yes", "no", "please", "thank you"];

const fillBlanks = [
  "I ___ a student.",
  "She ___ my sister.",
  "They ___ from the United States.",
  "It ___ a nice morning.",
  "You ___ my friend.",
  "He ___ a doctor.",
  "We ___ happy to meet you.",
  "I ___ ready for class.",
  "It ___ a good book.",
  "They ___ here.",
];

const pronounReplacements = [
  "(David) ___ is a teacher.",
  "(Anna and Sarah) ___ are friends.",
  "(The apple) ___ is red.",
  "(Mr. Smith) ___ is very nice.",
  "(My brother and I) ___ are at home.",
  "(Mrs. Davis) ___ is in the classroom.",
  "(The books) ___ are on the desk.",
  "(The dog) ___ is happy.",
  "(The students) ___ are ready to learn.",
  "(My name) ___ is John.",
];

const dialogue = [
  { speaker: "David", line: "Hello, Sarah! Good morning." },
  { speaker: "Sarah", line: "Hello, David. What's up?" },
  { speaker: "David", line: "I am good, thank you. Please, sit down." },
  { speaker: "Sarah", line: "Yes, thank you. It is a nice morning." },
  { speaker: "David", line: "Sarah, meet my friend. He is John." },
  { speaker: "Sarah", line: "Hello, John. My name is Sarah. Nice to meet you." },
  { speaker: "John", line: "Nice to meet you, Sarah. You are in my English class!" },
  { speaker: "David", line: "Oh, no! We are late for class!" },
  { speaker: "Sarah", line: "Goodbye, John!" },
  { speaker: "John", line: "Goodbye!" },
];

const trueFalse = [
  "It is a nice morning.",
  'David says, "Please, sit down."',
  "John is Sarah's friend.",
  "They are late for class.",
];

const mcReading = [
  { q: 'Who says the idiom "What\'s up"?', options: ["David", "Sarah", "John"] },
  { q: "John is...", options: ["a teacher.", "David's friend.", "Sarah's brother."] },
  { q: "David, Sarah, and John are...", options: ["at home.", "in a class.", "going to class."] },
];

const readingFill = [
  '"{____}, thank you."',
  '"My {____} is Sarah."',
  '"We {____} late for class!"',
];

const listeningExercises = [
  {
    dialogueNum: 1,
    title: "Emma and Chris greet each other.",
    questions: [
      { q: "What is the woman's name?", options: ["Sarah", "Emma", "Chris"] },
      { q: 'Who uses the expression "What\'s up?"', options: ["Emma", "Chris", "The teacher"] },
      { q: 'Fill in the blank: "I am good, ______ you."', isFill: true },
    ],
  },
  {
    dialogueNum: 2,
    title: "A student arrives late to Mr. Smith's class.",
    questions: [
      { q: "Who is Mr. Smith?", options: ["A student", "A friend", "The teacher"] },
      { q: "What does Mr. Smith tell Alex to do?", options: ["Say hello", "Sit down", "Stand up"] },
      { q: 'True or False: Alex says "No, thank you."', isTF: true },
    ],
  },
  {
    dialogueNum: 3,
    title: "Paul introduces his friend Maria to Lisa.",
    questions: [
      { q: "Who is Paul's friend?", options: ["Lisa", "Maria", "Emma"] },
      { q: "Which subject pronoun does Paul use to introduce Maria?", options: ["He", "She", "It"] },
      { q: "What do they say at the end of the conversation?", options: ["Good morning", "What's up", "Goodbye"] },
    ],
  },
];

// Render vocab tags
const vocabGrid = document.getElementById("vocab-grid");
if (vocabGrid) {
  vocab.forEach((w) => {
    const span = document.createElement("span");
    span.className = "vocab-tag";
    span.textContent = w;
    vocabGrid.appendChild(span);
  });
}

// Helper: render blanks
function blankHTML() {
  return '<span class="blank"></span>';
}

// Fill-in-the-blanks
const fbList = document.getElementById("fill-blanks");
if (fbList) {
  fillBlanks.forEach((item) => {
    const li = document.createElement("li");
    const parts = item.split("___");
    li.innerHTML = parts[0] + blankHTML() + parts[1];
    fbList.appendChild(li);
  });
}

// Pronoun replacements
const prList = document.getElementById("pronoun-replacements");
if (prList) {
  pronounReplacements.forEach((item) => {
    const li = document.createElement("li");
    const parts = item.split("___");
    li.innerHTML = parts[0] + blankHTML() + parts[1];
    prList.appendChild(li);
  });
}

// Reading dialogue
const rdBox = document.getElementById("reading-dialogue");
if (rdBox) {
  dialogue.forEach((d) => {
    const div = document.createElement("div");
    div.className = "dialogue-line";
    div.innerHTML = `<div class="dialogue-speaker">${d.speaker}</div><div class="dialogue-text">${d.line}</div>`;
    rdBox.appendChild(div);
  });
}

// True/False
const tfList = document.getElementById("true-false");
if (tfList) {
  trueFalse.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${item}</span><span class="tf-tag">( True / False )</span>`;
    tfList.appendChild(li);
  });
}

// Multiple Choice Reading
const mcContainer = document.getElementById("mc-reading");
if (mcContainer) {
  mcReading.forEach((item, i) => {
    const div = document.createElement("div");
    div.className = "mc-block";
    let optionsHTML = '<ul class="mc-options">';
    item.options.forEach((opt, j) => {
      const letter = String.fromCharCode(97 + j);
      optionsHTML += `<li><span class="mc-letter">${letter}</span><span>${opt}</span></li>`;
    });
    optionsHTML += "</ul>";
    div.innerHTML = `<div class="mc-question"><span class="q-num">${i + 5}.</span>${item.q}</div>${optionsHTML}`;
    mcContainer.appendChild(div);
  });
}

// Reading Fill in the Blanks
const rfList = document.getElementById("reading-fill");
if (rfList) {
  readingFill.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = item.replace("{____}", blankHTML());
    rfList.appendChild(li);
  });
}

// Listening exercises
const listeningContainer = document.getElementById("listening-exercises");
if (listeningContainer) {
listeningExercises.forEach((ex) => {
  const card = document.createElement("div");
  card.className = "listening-card";
  let html = `<div class="lh-header"><span class="lh-bar"></span>Dialogue ${ex.dialogueNum}</div>`;
  html += `<div class="exercise-card"><p class="exercise-instr">${ex.title}</p>`;
  ex.questions.forEach((q, i) => {
    const num = i + 1;
    if (q.isFill) {
      html += `<p style="color:var(--cream);padding-top:0.5rem;border-top:1px dotted var(--border);"><strong class="q-num" style="margin-right:0.5rem;">${num}.</strong>${q.q}</p>`;
    } else if (q.isTF) {
      html += `<div class="mc-block"><div class="mc-question"><span class="q-num">${num}.</span>${q.q}</div><span class="tf-tag" style="margin-left:2rem;">( True / False )</span></div>`;
    } else {
      html += `<div class="mc-block"><div class="mc-question"><span class="q-num">${num}.</span>${q.q}</div><ul class="mc-options">`;
      q.options.forEach((opt, j) => {
        html += `<li><span class="mc-letter">${String.fromCharCode(97 + j)}</span><span>${opt}</span></li>`;
      });
      html += "</ul></div>";
    }
  });
  html += "</div>";
  card.innerHTML = html;
  listeningContainer.appendChild(card);
  });
}
