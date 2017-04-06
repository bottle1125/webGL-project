'use strict'

var THREE = require('n3d-threejs')
var ThreeBSP = require('three-js-csg')(THREE)

function Stuff() {

}
Stuff.prototype = {
	init: function(object, callback) {
		var self = this;
		var type = object.type;
		var resultShape;
		if(type === 'cube') {
			var geometry = self.createShape(object);
			var multiMaterial = self.createMaterial(object);
			var shape = new THREE.Mesh(geometry, multiMaterial);
			shape.name = object.name;
			var [positionX, positionY, positionZ] = object.position;
			shape.position.set(positionX, positionY, positionZ);
			if(object.translate) {
				shape.rotation.y = object.translate;
			}
			if(object.accessory) {
				var accessoryGeometry = self.createShape(object.accessory);
				var accessoryMaterial = self.createMaterial(object.accessory);
				var accessoryShape = new THREE.Mesh(accessoryGeometry, accessoryMaterial);
				var [aPositionX, aPositionY, aPositionZ] = object.accessory.position;
				accessoryShape.position.set(aPositionX, aPositionY, aPositionZ);
				console.log(accessoryShape)
				self.subtract(shape, accessoryShape, function(result) {
					callback(result);
				});
			}else {
				callback(shape);
			}
		}
	},
	createShape: function(object) {
		var [width, height, depth] = object.size;
		var geometry = new THREE.CubeGeometry(width, height, depth);
		return geometry;
	},
	createMaterial: function(object) {
		var materials = [];
		object.material.forEach((val, i) => {
			if(val.color) {
				materials[i] = new THREE.MeshBasicMaterial({
					color: val.color
				})
			}
			else if(val.image) {
				materials.push(new THREE.MeshBasicMaterial({
					map: new THREE.TextureLoader().load(val.image, function(texture) {
						console.log(val.repeat)
						if(val.repeat) {
							texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
							texture.repeat.set(30, 30);
						}
						
					})
				}))
			}
		})
		var multiMaterial = new THREE.MultiMaterial(materials);
		return multiMaterial;
	},
	subtract: function(mainObject, extraObject, callback) {
		var faceMaterial = mainObject.material.materials;
		var sphereBSP = new ThreeBSP(mainObject);
		var cubeBSP = new ThreeBSP(extraObject);
		var resultBSP = sphereBSP.subtract(cubeBSP);
		var result = resultBSP.toMesh(new THREE.MeshFaceMaterial(faceMaterial));
		result.material.shading = THREE.FlatShading;
		result.geometry.computeFaceNormals();
		result.geometry.computeVertexNormals();
		result.material.needsUpdate = true;
		result.geometry.uvsNeedUpdate = true;
		result.geometry.buffersNeedUpdate = true;
		callback(result);
	}
}

module.exports = Stuff;
