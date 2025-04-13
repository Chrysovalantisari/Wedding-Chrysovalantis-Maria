

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
  {"label":"🔥 Πάθος"},
  {"label":"🔥 Πάθος"},

]  

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
