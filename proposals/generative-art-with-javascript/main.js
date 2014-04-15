var aspect=5/3,
    cols=48,
    rows=Math.ceil(cols*(1/aspect)),
    gridSize=20,
    width=gridSize*cols,
    height=rows*gridSize;

function px(val) { return val + "px"; }
function constrainTo(val, min, max) {
  min || (min=0);
  max || (max=1);
  return Math.min(Math.max(min, val), max);
}

xDensityScale = function (x) {
  return Math.sin(x * Math.PI * 0.375) * 0.9;
}
var yDensityScale = d3.scale.pow().exponent(0.5);

var baseLayerDensityPass = function(seed, col, row, previous) {
  if (previous) { seed = seed * 2; }
  return seed < xDensityScale(col/cols) && seed < yDensityScale(row/rows);
}
var medLayerDensityPass = function(seed, col, row, previous) {
  if (previous) { if (Math.random() > seed) { return false }; }
  var colPct = col/cols;
  if (colPct < 0.33) { return false; }
  if (colPct > 0.9)  { return false; }
  seed = seed * 1.4;
  if (row/rows < 0.5) { seed = seed * 1.5; }
  if (colPct > 0.5 && colPct < 0.75){ seed = seed / 2; }
  return seed < xDensityScale(col/cols) && seed < yDensityScale(row/rows);
}
var accentDensityPass = function(seed, col, row, previous) {
  var colPct = col/cols;
  if (colPct < 0.5) { return false; }
  if (colPct > 0.75) { return false; }
  var rowPct = row/rows;
  seed = seed * (rowPct / rowPct);
  return seed < xDensityScale(colPct) && seed < yDensityScale(rowPct);
}

var svg = d3.select("body").append("svg")
  .attr('width',width).attr('height',height);

var base = [],
    med = [],
    accent = [];

var previous=false, seed;
_.times(cols, function(col){
  previous=false;
  _.times(rows, function(row){
    seed = Math.random();
    if (baseLayerDensityPass(seed, col, row, previous)) {
      base.push({x:col,y:row});
      previous=true;
    } else if(medLayerDensityPass(seed, col, row, previous)) {
      med.push({x:col, y:row});
      previous=true;
    } else if (accentDensityPass(seed, col, row, previous)) {
      accent.push({x:col, y:row});
      previous=false;
    } else { previous=false; }
  });
});

var xScale = function(point) {
  return point.x * gridSize;
}
var yScale = function(point) {
  return point.y * gridSize;
}

var translatePoint = function(point) {
  return 'translate('+ xScale(point) + ',' + yScale(point) +')'
}

var rightTriangle = function(point) {
  return '0,0 ' + gridSize + ',' + gridSize + ' 0,' + gridSize;
}
var rotate = function(amount) {
  return 'rotate('+ amount.toFixed(2) +')'
}
var scale = function(amount) {
  return 'scale('+ amount.toFixed(2) +')';
}

var genRightAngle = function(generator) {
  generator || (generator = Math.random)
  return function() {
    return Math.floor(generator() * 4) * 90;
  }
}
var genInteger = function(scale, generator){
  generator || (generator = Math.random)
  return function() {
    return Math.ceil(generator() * (scale+1)) - 1;
  }
}

var rotater = function(generator) {
  return function() { return rotate(generator()); }
}
var scaler = function(generator) {
  return function() { return scale(generator()); }
}


var stringJoiner = function(fns, joinStr) {
  joinStr || (joinStr=',')
  return function joiner(point) {
    return fns.map(function(fn){ return fn(point); }).join(joinStr);
  }
}

var get = function(prop) { return function(obj) { return obj[prop]; } };

var color = function(args) {
  var h=args.hue, s=args.sat, l=args.light;
  if (typeof h != 'function') { h = function(){ return args.hue || '0'; } }
  if (typeof s != 'function') { s = function(){ return args.sat || '50'; } }
  if (typeof l != 'function') { l = function(){ return args.light || '50'; } }
  return function(point) {
    return 'hsl('+ h(point) + ',' + s(point) + '%,' + l(point) + '%)'
  }
}

var sequence = function(fns) {
  return function seq(arg) {
    fns.forEach(function(fn){
      arg = fn(arg);
    });
    return arg;
  }
}

var multiply = function mulitply(x) {
  return function multiplier(num) { return num * x; }
};
var add = function add(x) {
  return function adder(num) { return num + x; }
};


svg.append('g').attr('class', 'base')
  .selectAll("polygon")
  .data(base).enter()
  .append('polygon')
  .attr('points', rightTriangle)
  .attr('transform', stringJoiner([
    translatePoint,
    rotater(genRightAngle()),
    scaler(genInteger(3))
  ]))
  .attr('opacity', 0.25)
  .attr('fill', color({
    hue: sequence([ get('x'),
      d3.scale.linear().domain([0,cols]).rangeRound([150,200])
    ]),
    sat: sequence([ Math.random, d3.scale.linear().range([40,60]) ]),
    light: sequence([ get('y'),
      d3.scale.linear().domain([0,rows]).rangeRound([60, 20])
    ])
  }))
  .attr('stroke-width', '1px')
  .attr('stroke', color({
    hue: sequence([get('x'),
      d3.scale.linear().domain([0,cols]).rangeRound([160,190])
    ])
  }))
  ;

svg.append('g').attr('class', 'med')
  .selectAll('polygon')
  .data(med).enter()
  .append('polygon')
  .attr('points', rightTriangle)
  .attr('transform', stringJoiner([
    translatePoint,
    rotater(genRightAngle()),
    scaler(sequence([Math.random, multiply(3), add(2), Math.ceil]))
  ]))
  .attr('opacity', 0.5)
  .attr('fill', color({
    hue: sequence([ get('y'),
      d3.scale.linear().domain([0,rows]).rangeRound([160, 70])
    ]),
    sat: sequence([ get('y'),
      d3.scale.linear().domain([0,rows]).rangeRound([0,100])
    ])
  }))
  .attr('stroke-width', '0.5px')
  .attr('stroke', color({
    hue: sequence([ get('y'),
      d3.scale.linear().domain([0, rows]).rangeRound([100,50])
    ]),
    light: 90
  }));

svg.append('g').attr('class', 'accent')
  .selectAll('polygon')
  .data(accent).enter()
  .append('polygon')
  .attr('points', rightTriangle)
  .attr('transform', stringJoiner([
    translatePoint,
    rotater(genRightAngle()),
    scaler(sequence([Math.random, multiply(3), Math.ceil]))
  ]))
  .attr('opacity', 0.6)
  .attr('fill', color({
    hue: sequence([ get('y'),
      d3.scale.linear().domain([0,rows]).rangeRound([70, 30])
    ]),
    sat: sequence([ Math.random, d3.scale.linear().range([70,100]) ]),
    light: sequence([ Math.random, d3.scale.linear().range([70,95]) ])
  }));
