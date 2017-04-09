'use strict'
var THREE = require('n3d-threejs')



var Renderer = require('./render.js');
var Camera = require('./camera.js');
var Stuff = require('./models/objectModel.js');
var objectList = require('./models/objectList.js');
var Light = require('./light.js')

var renderer;

var cube = [];
var light;

function Page() {
	this.init();
}
Page.prototype = {
	init: function() {
		var canvasFrame = document.getElementById('canvas-frame');

		var width = canvasFrame.clientWidth;
		var height = canvasFrame.clientHeight;
		var self = this;
		// 初始化场景
		this.scene = new THREE.Scene();
		// 初始化相机
		this.initCamera(width, height);
		this.scene.add(this.camera);
		// 初始化渲染器
		this.initRenderer(canvasFrame, width, height);
		// 初始化光线
		this.initLight(this.scene);
		// create cube
		this.createCube();
		// render
		this.render();
	},
	initLight: function(scene) {
		var light = new Light();
		light.init(scene)
	},
	initRenderer: function(canvasFrame, cWidth, cHeight) {
		var self = this;
		var renderer = new Renderer();
		renderer.init(canvasFrame, cWidth, cHeight, function(result) {
			self.renderer = result;
		});
	},
	initCamera: function(cWidth, cHeight) {
		var self = this;
		//相机参数
		var cameraParams = {
			perspective: {
				fov: 45,
				aspect: cWidth/cHeight,
				near: 0.1,
				far: 10000
			}
		}
		var camera = new Camera();
		camera.init(cameraParams, function(result) {
			self.camera = result;
		})
	},
	createCube: function() {
		var self = this;
		var params = [];
		var len = objectList.length;
		for(let i=0; i<len; i++) {
			var stuff = new Stuff();
			stuff.init(objectList[i], function(result) {
				self.scene.add(result);
			})
		}
	},
	render: function() {
		var self = this;
		var axis = new THREE.AxisHelper(200);
		self.scene.add(axis)
		var render = function() {
			self.renderer.render(self.scene, self.camera);
			var positionX = document.getElementById('axisX').value;
			var positionY = document.getElementById('axisY').value;
			var positionZ = document.getElementById('axisZ').value;
			self.camera.position.set(positionX, positionY, positionZ);
			self.camera.lookAt({
				x: 0,
				y: 0,
				z: 0
			})
			requestAnimationFrame(render);
		}
		render();
	}
}


module.exports = Page;


