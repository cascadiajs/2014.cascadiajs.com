module.exports = setupMaps

require('mapbox.js')

function setupMaps() {
  if(!document.getElementById('map')) {
    return setTimeout(setupMaps, 0)
  }

  console.log('map!')

  var map = L.mapbox.map('map', 'cascadiajs.hnialcl0')

  map.setView([45.522751170795615, -122.65721440315247], 16)
  map.scrollWheelZoom.disable()
}
