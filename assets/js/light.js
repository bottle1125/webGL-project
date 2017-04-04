'use strict'

var THREE = require('n3d-threejs')

function Light() {

}


Light.prototype.init = function(callback) {
	var light = new THREE.DirectionalLight(0xFF000, 1.0, 0);
	light.position.set(0,0,1);
	callback(light);
}

module.exports = function() {
	return new Promise(function(resolve, reject) {
		var initLight = new Light();
		initLight.init(function(light) {
			resolve(light);
		})
	})
}