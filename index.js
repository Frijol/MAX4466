var tessel = require('tessel');
var myPin = tessel.port['GPIO'].pin['A1'];

setInterval(function () {
  console.log(myPin.read());
});
