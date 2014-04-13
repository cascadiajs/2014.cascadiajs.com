// to use this file, run `beefy assets/js/index.js:assets/js/bundle.js`
var analytics = require('./analytics.js')
  , maps = require('./maps.js')

if(document.readyState === 'interactive') {
  onload()
} else {
  document.addEventListener('DOMContentLoaded', onload)
}

function onload() {
  analytics()
  maps()
}
