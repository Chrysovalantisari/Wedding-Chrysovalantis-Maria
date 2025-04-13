document.getElementById("calculateBtn").addEventListener("click", function () {
  const name1 = document.getElementById("name1").value.trim().toLowerCase();
  const name2 = document.getElementById("name2").value.trim().toLowerCase();
  const resultBox = document.getElementById("resultBox");
  const scoreResult = document.getElementById("scoreResult");
  const scoreMessage = document.getElementById("scoreMessage");

  if (!name1 || !name2) {
    scoreResult.textContent = "❗ Συμπλήρωσε και τα δύο ονόματα!";
    scoreMessage.textContent = "";
    resultBox.classList.remove("d-none");
    return;
  }

  const combined = name1 + name2;
  let score = 0;
  for (let i = 0; i < combined.length; i++) {
    score += combined.charCodeAt(i);
  }

  const loveScore = (score % 101); // Ποσοστό από 0 έως 100
  scoreResult.textContent = `💖 Το Love Score σας: ${loveScore}%`;

  let message = "";
  if (loveScore > 90) {
    message = "Ταιριάζετε σαν δυο σταγόνες ροζ prosecco! 🥂";
  } else if (loveScore > 70) {
    message = "Σοβαρό match! Η αγάπη είναι στον αέρα 💘";
  } else if (loveScore > 50) {
    message = "Έχετε σίγουρα κάτι ξεχωριστό 👀";
  } else {
    message = "Η αγάπη θέλει δουλίτσα... ή και άλλη αγκαλιά! 😅";
  }

  scoreMessage.textContent = message;
  resultBox.classList.remove("d-none");
});

document.getElementById("horoscopeBtn").addEventListener("click", function () {
  const name = document.getElementById("horoscopeName").value.trim().toLowerCase();
  const messageBox = document.getElementById("horoscopeResultBox");
  const messageText = document.getElementById("horoscopeMessage");

  if (!name) {
    messageText.textContent = "❗ Γράψε ένα όνομα για να αποκαλυφθεί το ριζικό σου!";
    messageBox.classList.remove("d-none");
    return;
  }

  const messages = [
    "Οι πλανήτες ευθυγραμμίζονται για ένα ρομαντικό δείπνο με κεράκια... ή σουβλάκι. 🍷",
    "Η Αφροδίτη σε ευνοεί: σήμερα είναι η μέρα για να πεις 'σ' αγαπώ' ❤️",
    "Μην ψάχνεις άλλο. Η αγάπη σε ψάχνει πίσω 😍",
    "Προσοχή στα συναισθήματα… και στα stories που ανεβάζεις! 🤭",
    "Η καρδιά σου χτυπά δυνατά… αλλά μήπως είναι το κινητό; 📱",
    "Η μοίρα λέει: στείλε το πρώτο μήνυμα τώρα! 💌",
    "Αστρολογικά προβλέπεται έντονο πάθος και... πιθανό πονοκέφαλο από το Prosecco 🥂",
    "Το σύμπαν έχει σχέδια. Εσύ έχεις κουράγιο; 😉"
  ];

  // Δημιουργούμε έναν "τυχαίο" αριθμό με βάση το όνομα
  let charSum = 0;
  for (let i = 0; i < name.length; i++) {
    charSum += name.charCodeAt(i);
  }
  const index = charSum % messages.length;

  messageText.textContent = messages[index];
  messageBox.classList.remove("d-none");
});
document.getElementById("prophecyBtn").addEventListener("click", function () {
  const name = document.getElementById("prophecyName").value.trim().toLowerCase();
  const yearBox = document.getElementById("prophecyYear");
  const messageBox = document.getElementById("prophecyMessage");
  const resultBox = document.getElementById("prophecyResultBox");

  if (!name) {
    yearBox.textContent = "❗ Πρέπει να γράψεις το όνομά σου!";
    messageBox.textContent = "";
    resultBox.classList.remove("d-none");
    return;
  }

  const funnyYears = [2025, 2026, 2029, 2032, 2035, 2040, 2049, 2059, 2070, "…ποτέ 😅", "μετά το επόμενο lockdown", "σε άλλη ζωή"];
  const funnyMessages = [
    "Μόλις βρεις ποιο τραγούδι θέλεις στον πρώτο χορό, όλα θα πάρουν τον δρόμο τους 🎶",
    "Θα σε παντρευτεί όταν μάθει να μαγειρεύει... ή όταν σταματήσεις να παραγγέλνεις 🍕",
    "Η πρόταση θα γίνει στο drive-thru. Με πατάτες. 🍟💍",
    "Μόλις βρεθεί ο σωστός φωτογράφος, όλα θα πάρουν τον δρόμο τους 📸",
    "Θα γίνει πρόταση... αλλά θα νομίζεις ότι ήταν πλάκα. Μέχρι να πέσει στα γόνατα 😅",
    "Θα έρθει η στιγμή... απλά όχι πριν πάρεις καινούρια παπούτσια 👠",
    "Μην ανησυχείς. Το 2059 είναι η χρονιά σου 💫",
    "Η γιαγιά λέει: 'Καλά, ακόμα δεν σε ζήτησε;' 😆",
    "Η πρόταση θα έρθει όταν σταματήσεις να ψάχνεις. Ή όταν πάτε IKEA 🛒"
  ];

  // "Τυχαία" επιλογή βάσει του ονόματος
  let score = 0;
  for (let i = 0; i < name.length; i++) {
    score += name.charCodeAt(i);
  }

  const year = funnyYears[score % funnyYears.length];
  const message = funnyMessages[score % funnyMessages.length];

  yearBox.textContent = `💍 Θα παντρευτείς το: ${year}`;
  messageBox.textContent = message;
  resultBox.classList.remove("d-none");
});

window.addEventListener("DOMContentLoaded", function () {
  
var padding = {top:60, right:40, bottom:0, left:40},
    w = 400 - padding.left - padding.right,
    h = 400 - padding.top - padding.bottom,
    r = Math.min(w, h)/2,
    rotation = 0,
    oldrotation = 0,
    picked = 100000,
    oldpick = [],
    color = d3.scale.ordinal().range([
      "#e49fc8", "#f6c1d9", "#fcd7e4", "#fab9c4", "#f7e1f0",
      "#d29ad2", "#c084b2", "#b66e9e", "#ffcccb", "#f4b393"
    ]);

var data = [
  {"label":"💌 Μήνυμα"},
  {"label":"💋 Φιλί"},
  {"label":"🌹 Βράδυ"},
  {"label":"😍 Crush"},
  {"label":"🤗 Αγκαλιά"},
  {"label":"💘 Έρωτας"},
  {"label":"🤭 Πλάκα"},
  {"label":"👍 Like"},
  {"label":"🔥 Πάθος"},  
];

var svg = d3.select('#chart')
  .append("svg")
  .data([data])
  .attr("width",  w + padding.left + padding.right)
  .attr("height", h + padding.top + padding.bottom + 100);

// Προσθήκη βελάκι
svg.append("g")
  .attr("transform", "translate(" + ((w + padding.left + padding.right) / 2) + ", 40)")
  .append("path")
  .attr("d", "M0,10 L-10,-10 L10,-10 Z")
  .style({"fill":"#b66e9e"});

var container = svg.append("g")
  .attr("class", "chartholder")
  .attr("transform", "translate(" + (w/2 + padding.left) + "," + (h/2 + padding.top + 10) + ")");

var vis = container.append("g");

var pie = d3.layout.pie().sort(null).value(function(d){return 1;});
var arc = d3.svg.arc().outerRadius(r);

var arcs = vis.selectAll("g.slice")
  .data(pie)
  .enter()
  .append("g")
  .attr("class", "slice");

arcs.append("path")
  .attr("fill", function(d, i){ return color(i); })
  .attr("d", function (d) { return arc(d); });

arcs.append("text")
  .attr("transform", function(d){
    d.innerRadius = 0;
    d.outerRadius = r;
    d.angle = (d.startAngle + d.endAngle)/2;
    return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")translate(" + (d.outerRadius - 15) + ")";
  })
  .attr("text-anchor", "end")
  .attr("font-size", "12px")
  .text(function(d, i) { return data[i].label; });

container.on("click", spin);

function spin(){
  container.on("click", null);
  if(oldpick.length == data.length){
    return;
  }
  var ps = 360/data.length,
      pieslice = Math.round(1440/data.length),
      rng = Math.floor((Math.random() * 1440) + 360);

  rotation = (Math.round(rng / ps) * ps);
  picked = Math.round(data.length - (rotation % 360)/ps);
  picked = picked >= data.length ? (picked % data.length) : picked;
  if(oldpick.indexOf(picked) !== -1){
    spin();
    return;
  } else {
    oldpick.push(picked);
  }
  rotation += 90 - Math.round(ps/2);
  vis.transition()
    .duration(3000)
    .attrTween("transform", rotTween)
    .each("end", function(){
      oldrotation = rotation;
      container.on("click", spin);
    });
}

function rotTween(){
  var i = d3.interpolate(oldrotation % 360, rotation);
  return function(t){
    return "rotate(" + i(t) + ")";
  };
}

});