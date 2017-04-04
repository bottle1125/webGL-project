'use strict'

var THREE = require('n3d-threejs')

function Object() {

}

Object.prototype.init = function(object, callback) {
	var geometry;
	var material;
	var type = object.type;
	var shape;
	if(type === 'cube') {
		geometry = new THREE.CubeGeometry(object.width, object.height, object.depth);
		var loader = new THREE.TextureLoader();
		loader.load(object.style.image, function(texture) {
			texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
			texture.repeat.set(60, 60);
			material = new THREE.MeshBasicMaterial({
				map: texture
			})
			shape = new THREE.Mesh(geometry, material);
			callback(shape);
		});

	}


}

module.exports = function(params) {
	var object = new Object();
	return new Promise(function(resolve, reject) {
		object.init(params, function(shape) {
			resolve(shape);
		})
	})
}