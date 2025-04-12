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

//   document.getElementById("spinBtn").addEventListener("click", function () {
//     const wheel = document.getElementById("wheelImage");
//     const resultBox = document.getElementById("wheelResultBox");
//     const messageText = document.getElementById("wheelMessage");
  
//     const outcomes = [
//       "Θα σου στείλει μήνυμα όταν το περιμένεις λιγότερο 📱",
//       "Ρομαντική βόλτα σε παραλία incoming! 🌊",
//       "Μήπως ο έρωτας της ζωής σου είναι ήδη φίλος στο Instagram; 😏",
//       "Ετοιμάσου για γλυκό φιλί κάτω από τα αστέρια 💋",
//       "Σήμερα… ίσως λάβεις ένα μήνυμα με ❤️",
//       "Θα σε πάρει αγκαλιά χωρίς λόγο – κι αυτό λέει πολλά 🤗",
//       "Ένας πρώην σκέφτεται να σου στείλει… μη το σηκώσεις! 📞",
//       "Πρόσεξε στο πάρτι. Εκεί θα είναι 👀",
//       "Μπορεί να φας μόνος/η, αλλά με πολύ αγάπη 🍕💕"
//     ];
  
//     // Περιστροφή εικόνας
//     const randomDeg = 360 * 3 + Math.floor(Math.random() * 360);
//     wheel.style.transform = `rotate(${randomDeg}deg)`;
  
//     // Τυχαίο μήνυμα
//     const message = outcomes[Math.floor(Math.random() * outcomes.length)];
  
//     setTimeout(() => {
//       messageText.textContent = message;
//       resultBox.classList.remove("d-none");
//     }, 2000); // περιμένει μέχρι να "σταματήσει" ο τροχός
//   });
  
var padding = {top:20, right:40, bottom:0, left:0},
    w = 360 - padding.left - padding.right,
    h = 360 - padding.top - padding.bottom,
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
  {"label":"Θα λάβεις μήνυμα με καρδιά 💌", "value":1},
  {"label":"Σύντομα ένα γλυκό φιλί 💋", "value":2},
  {"label":"Ρομαντική έξοδος πλησιάζει 🌹", "value":3},
  {"label":"Αναπάντεχο crush στο δρόμο σου 😍", "value":4},
  {"label":"Αγκαλιά που θα σε ζεστάνει 🤗", "value":5},
  {"label":"Έρωτας από το πουθενά 💘", "value":6},
  {"label":"Θα γελάσεις με κάποιον που σε γουστάρει 🤭", "value":7},
  {"label":"Ένα like θα σου αλλάξει τη μέρα 👍", "value":8},
  {"label":"Φλέρτ με ένταση 🔥", "value":9},
  {"label":"Θα ονειρευτείς τον/την μέλλοντα σύντροφό σου 🌙", "value":10}
];

var svg = d3.select('#chart')
  .append("svg")
  .data([data])
  .attr("width",  w + padding.left + padding.right)
  .attr("height", h + padding.top + padding.bottom);

var container = svg.append("g")
  .attr("class", "chartholder")
  .attr("transform", "translate(" + (w/2 + padding.left) + "," + (h/2 + padding.top) + ")");

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

arcs.append("text").attr("transform", function(d){
    d.innerRadius = 0;
    d.outerRadius = r;
    d.angle = (d.startAngle + d.endAngle)/2;
    return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")translate(" + (d.outerRadius -10) +")";
  })
  .attr("text-anchor", "end")
  .text( function(d, i) {
    return data[i].label;
  });

container.on("click", spin);

function spin(d){
  container.on("click", null);
  if(oldpick.length == data.length){
    container.on("click", null);
    return;
  }
  var ps = 360/data.length,
      pieslice = Math.round(1440/data.length),
      rng = Math.floor((Math.random() * 1440) + 360);
      
  rotation = (Math.round(rng / ps) * ps);
  picked = Math.round(data.length - (rotation % 360)/ps);
  picked = picked >= data.length ? (picked % data.length) : picked;
  if(oldpick.indexOf(picked) !== -1){
    spin(); return;
  } else {
    oldpick.push(picked);
  }
  rotation += 90 - Math.round(ps/2);
  vis.transition()
    .duration(3000)
    .attrTween("transform", rotTween)
    .each("end", function(){
      d3.select("#question h1").text(data[picked].label);
      oldrotation = rotation;
      container.on("click", spin);
    });
}

function rotTween(to) {
  var i = d3.interpolate(oldrotation % 360, rotation);
  return function(t) {
    return "rotate(" + i(t) + ")";
  };
}
const data = [
    { label: "Μήνυμα", emoji: "💌" },
    { label: "Φιλί", emoji: "💋" },
    { label: "Βράδυ", emoji: "🌹" },
    { label: "Crush", emoji: "🥰" },
    { label: "Αγκαλιά", emoji: "🤗" },
    { label: "Έρωτας", emoji: "💘" },
    { label: "Γέλιο", emoji: "🤣" },
    { label: "Like", emoji: "👍" },
    { label: "Πάθος", emoji: "🔥" },
    { label: "Όνειρο", emoji: "💫" },
  ];
  
  const colors = [
    "#fcd7e4", "#fab9c4", "#f7e1f0", "#d29ad2", "#c084b2",
    "#b66e9e", "#ffcccb", "#f4b393", "#f6c1d9", "#e49fc8"
  ];
  
  const width = 360;
  const height = 360;
  const radius = Math.min(width, height) / 2;
  let rotation = 0;
  let oldRotation = 0;
  let picked = 100;
  let oldPick = [];
  
  const svg = d3.select("#chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height + 40)
    .append("g")
    .attr("transform", `translate(${width / 2},${height / 2})`);
  
  const pie = d3.layout.pie().sort(null).value(() => 1);
  const arc = d3.svg.arc().outerRadius(radius);
  
  const arcs = svg.selectAll("g.slice")
    .data(pie(data))
    .enter()
    .append("g")
    .attr("class", "slice");
  
  arcs.append("path")
    .attr("fill", (d, i) => colors[i])
    .attr("d", arc);
  
  arcs.append("text")
    .attr("transform", d => `translate(${arc.centroid(d)}) rotate(${angle(d)})`)
    .attr("text-anchor", "middle")
    .text((d, i) => `${data[i].emoji} ${data[i].label}`);
  
  function angle(d) {
    const a = (d.startAngle + d.endAngle) / 2;
    return (a * 180 / Math.PI) - 90;
  }
  
  svg.append("g")
    .append("path")
    .attr("d", "M0,-10L10,0L0,10L-10,0Z")
    .attr("transform", `translate(0,-${radius + 10})`)
    .style({ fill: "#b66e9e" });
  
  svg.on("click", spin);
  
  function spin() {
    svg.on("click", null);
    const ps = 360 / data.length;
    const rng = Math.floor(Math.random() * 1440 + 360);
    rotation = (Math.round(rng / ps) * ps);
    picked = Math.round(data.length - (rotation % 360) / ps);
    picked = picked >= data.length ? picked % data.length : picked;
    rotation += 90 - Math.round(ps / 2);
  
    svg.transition()
      .duration(3000)
      .attrTween("transform", rotTween)
      .each("end", function () {
        d3.select("#wheel-result").text(`${data[picked].emoji} ${data[picked].label}`);
        oldRotation = rotation;
        oldPick.push(picked);
        svg.on("click", spin);
      });
  }
  
  function rotTween() {
    const i = d3.interpolate(oldRotation % 360, rotation);
    return function (t) {
      return `rotate(${i(t)})`;
    };
  }
  