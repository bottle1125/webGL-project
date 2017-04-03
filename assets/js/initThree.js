'use strict'

var THREE = require('n3d-threejs');

var renderer;
function initThree(callback) {
	var canvasFrame = document.getElementById('canvas-frame');
	var width = canvasFrame.clientWidth;
	var height = canvasFrame.clientHeight;
	renderer = new THREE.WebGLRenderer({
		antialias: true
	});
	renderer.setSize(width, height);
	canvasFrame.appendChild(renderer.domElement);
	renderer.setClearColor(0xFFFFFF, 1.0);
	callback(renderer);
}

module.exports = function() {
	return new Promise(function(resolve, reject) {
		initThree(function(renderer) {
			resolve(renderer);
		})
	})
}