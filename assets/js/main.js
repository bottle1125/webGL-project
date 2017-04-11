'use strict'
var THREE = require('n3d-threejs')



var Renderer = require('./render.js');
var Camera = require('./camera.js');
var Stuff = require('./models/objectModel.js');
var objectList = require('./models/objectList.js');
var eventsList = require('./event.js')
var Light = require('./light.js')

var renderer;

var cube = [];
var light;

var _this = null; 
function Page() {
	this.init();
	_this = this;
}

Page.prototype = {
	init: function() {
		var canvasFrame = document.getElementById('canvas-frame');

		this.width = canvasFrame.clientWidth;
		this.height = canvasFrame.clientHeight;
		var self = this;
		this.dbclick = 0;
		this.mouseClick = new THREE.Vector2();
		this.raycaster = new THREE.Raycaster();
		this.SELECTED = null;
		this.objList = objectList;//对象列表
		this.eventList = eventsList;//事件对象列表
		this.objects = [];
		// 初始化场景
		this.scene = new THREE.Scene();
		// 初始化相机
		this.initCamera(this.width, this.height);
		this.scene.add(this.camera);
		// 初始化渲染器
		this.initRenderer(canvasFrame, this.width, this.height);
		// 初始化光线
		this.initLight(this.scene);
		// create cube
		this.createCube();
		// 初始化事件
		this.initEvent();
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
				self.objects.push(result);
				self.scene.add(result);
			})
		}
	},
	initEvent: function() {
		this.renderer.domElement.addEventListener('mousedown', this.onDocumentMouseDown);
		this.renderer.domElement.addEventListener('mousemove', this.onDocumentMouseMove);
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
			var perspectiveX = document.getElementById('perspectiveX').value;
			var perspectiveY = document.getElementById('perspectiveY').value;
			var perspectiveZ = document.getElementById('perspectiveZ').value;
			self.camera.position.set(positionX, positionY, positionZ);
			self.camera.lookAt({
				x: perspectiveX,
				y: perspectiveY,
				z: perspectiveZ
			})
			requestAnimationFrame(render);
		}
		render();
	},
	onDocumentMouseDown: function(event) {
		_this.dbclick++;
		var self = this;
		setTimeout(function () { _this.dbclick =0}, 500);
		event.preventDefault();
		if (_this.dbclick >= 2) {
		    _this.raycaster.setFromCamera(_this.mouseClick, _this.camera);
		    var intersects = _this.raycaster.intersectObjects(_this.objects);
		    if (intersects.length > 0) {
		        _this.SELECTED = intersects[0].object;
		        console.log(_this.SELECTED)
		        if (_this.eventList != null && _this.eventList.dbclick != null && _this.eventList.dbclick.length > 0) {
		            _this.eventList.dbclick.forEach((_obj, index) => {
		                if ("string" == typeof (_obj.obj_name)) {
		                    if (_obj.obj_name == _this.SELECTED.name) {
		                        _obj.obj_event(_this.SELECTED, _this.scene);
		                    }
		                } else if (_obj.findObject!=null||'function' == typeof (_obj.findObject)) {
		                    if (_obj.findObject(_this.SELECTED.name)) {
		                        _obj.obj_event(_this.SELECTED);
		                    }
		                }
		            });
		        }
		    }
		}
	},
	onDocumentMouseMove: function(event) {
		console.log(5555)
		event.preventDefault();
		_this.mouseClick.x = (event.clientX / _this.width) * 2 - 1;
		_this.mouseClick.y = -(event.clientY / _this.height) * 2 + 1;
		_this.raycaster.setFromCamera(_this.mouseClick, _this.camera);
	}
}


module.exports = Page;


