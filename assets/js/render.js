'use strict'

var initThree = require('./initThree.js');
var initCamera = require('./camera.js');
var initScene = require('./scene.js');
var initObject = require('./models/object.js');
var initLight = require('./light.js')

var renderer;
var camera;
var scene;
var cube;
var light;

function init() {
	var canvasFrame = document.getElementById('canvas-frame');
	var width = canvasFrame.clientWidth;
	var height = canvasFrame.clientHeight;
	var options = {
		fov: 45,
		aspect: width/height,
		near: 1,
		far: 10000
	};
	var promiseA = initThree();
	var promiseB = initCamera(options);
	var promiseC = initScene();
	var promiseD = initLight();
	var promiseE = initObject();
	return Promise.all([promiseA, promiseB, promiseC, promiseD, promiseE])
	.then(function(results) {
		renderer = results[0];
		camera = results[1];
		scene = results[2];
		light = results[3];
		cube = results[4];
		scene.add(light);
		scene.add(cube);
	})

}

function render() {
	renderer.clear();
	renderer.render(scene, camera);
	requestAnimationFrame(render);
}

module.exports = function() {
	return new Promise(function(resolve, reject) {
		init().then(function() {
			render();
			resolve('success!')
		})
	})
}


