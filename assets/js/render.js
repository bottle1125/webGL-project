'use strict'

var initThree = require('./initThree.js');
var initCamera = require('./camera.js');
var initScene = require('./scene.js');
var initObject = require('./models/objectModel.js');
var objectList = require('./models/objectList.js');
var initLight = require('./light.js')

var THREE = require('n3d-threejs')

var renderer;
var camera;
var scene;
var cube;
var light;

function init() {
	var canvasFrame = document.getElementById('canvas-frame');
	var width = canvasFrame.clientWidth;
	var height = canvasFrame.clientHeight;
	//相机参数
	var cameraParams = {
		perspective: {
			fov: 45,
			aspect: width/height,
			near: 0.1,
			far: 10000
		},
		position: {
			x: -410,
			y: 410,
			z: 410
		},
		lookAt: {
			x: 0,
			y: 0,
			z: 0
		}
		
	};
	// 物体参数
	var objectParams = objectList[0];
	var promiseA = initThree();
	var promiseB = initCamera(cameraParams);
	var promiseC = initScene();
	var promiseD = initLight();
	var promiseE = initObject(objectParams);
	return Promise.all([promiseA, promiseB, promiseC, promiseD, promiseE])
	.then(function(results) {
		renderer = results[0];
		camera = results[1];
		scene = results[2];
		light = results[3];
		cube = results[4];
		var axisHelper = new THREE.AxisHelper(200);
		console.log(axisHelper);
		scene.add(axisHelper);
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


