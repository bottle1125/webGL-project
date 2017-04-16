'use strict'

var renderer;
function Renderer() {

}
Renderer.prototype.init = function(canvasFrame, width, height, callback) {
	renderer = new THREE.WebGLRenderer({
		antialias: true
	});
	renderer.setSize(width, height);
	canvasFrame.appendChild(renderer.domElement);
	renderer.setClearColor(0xFFFFFF, 1.0);
	callback(renderer);
}
