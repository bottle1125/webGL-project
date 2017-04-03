'use strict'

var THREE = require('n3d-threejs')

var scene;
module.exports = function() {
	return new Promise((resolve, reject) => {
		scene = new THREE.Scene();
		resolve(scene);
	})
}