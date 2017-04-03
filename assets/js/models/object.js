'use strict'

var THREE = require('n3d-threejs')

function Object() {

}

Object.prototype.init = function(callback) {
	var geometry = new THREE.Geometry();
	var material = new THREE.LineBasicMaterial( { vertexColors: THREE.VertexColors} );
	var color1 = new THREE.Color( 0x444444 ), color2 = new THREE.Color( 0xFF0000 );

	// 线的材质可以由2点的颜色决定
	var p1 = new THREE.Vector3( -100, 0, 100 );
	var p2 = new THREE.Vector3(  100, 0, -100 );
	geometry.vertices.push(p1);
	geometry.vertices.push(p2);
	geometry.colors.push( color1, color2 );

	var line = new THREE.Line( geometry, material, THREE.LineSegments);
	console.log(line);
	callback(line);
}

module.exports = function() {
	return new Promise(function(resolve, reject) {
		var cube = new Object();
		cube.init(function(object) {
			resolve(object);
		})
	})
}