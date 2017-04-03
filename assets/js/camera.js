'use strict'
var THREE = require('n3d-threejs')

/**
 * 透视投影相机
 * PerspectiveCamera(fov, aspect, near, far)
 * fov : 视角，眼睛睁开的角度
 * near : 近处的裁面的距离，或者说是眼睛距离近处的距离
 * far : 远处的裁面
 * aspect : 实际窗口的纵横比，即宽度/高度
 */

var camera;

function Camera() {

}

Camera.prototype.init = function(options, callback) {
	var fov = options.fov;
	var aspect = options.aspect;
	var near = options.near;
	var far = options.far;
	camera = new THREE.Perspective(fov, aspect, near, far);
	camera.position.x = 0;
	camera.position.y = 1000;
	camera.position.z = 0;
	camera.up.x = 0;
	camera.up.y = 0;
	camera.up.z = 1;
	camera.lookAt({
		x : 0,
		y : 0,
		z : 0
	});
	callback(camera);
}

module.exports = function() {
	var initCamera = new Camera();
	return new Promise(function(resolve, reject) {
		initCamera.init(function(camera) {
			resolve(camera);
		})
	})
}