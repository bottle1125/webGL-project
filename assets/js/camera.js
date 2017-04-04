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
	var fov = options.perspective.fov;
	var aspect = options.perspective.aspect;
	var near = options.perspective.near;
	var far = options.perspective.far;
	camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
	camera.position.set(options.position.x, options.position.y, options.position.z);
	camera.lookAt(new THREE.Vector3(options.lookAt.x, options.lookAt.y, options.lookAt.z));
	callback(camera);
}

module.exports = function(params) {
	var initCamera = new Camera();
	return new Promise(function(resolve, reject) {
		initCamera.init(params, function(camera) {
			resolve(camera);
		})
	})
}