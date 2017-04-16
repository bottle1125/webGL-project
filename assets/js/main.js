'use strict'

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
		this.objList = new Shape().haveObjects();//对象列表
		this.eventList = new ObjectEvent().haveEvents();//事件对象列表
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
	initLight: function() {
		var light = new Light().init(this.scene)
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
		var len = self.objList.length;
		new CreateMtlObj().create({
			mtlBaseUrl: './assets/js/models/3d-models/',
			mtlPath: './assets/js/models/3d-models/',
			mtlFileName: 'test.mtl',
			objPath: './assets/js/models/3d-models/',
			objFileName: 'test.obj',
			completeCallback: function(object) {
				object.children.forEach(function(child) { 

				                child.material.side = THREE.DoubleSide;//设置贴图模式为双面贴图
				                child.material.emissive.r=0;//设置rgb通道R通道颜色
				                child.material.emissive.g=0.01;//设置rgb通道G通道颜色
				                child.material.emissive.b=0.05;//设置rgb通道B通道颜色
				                child.material.transparent=true;//材质允许透明
				                child.material.opacity=1;//材质默认透明度                        
				                child.material.shading=THREE.SmoothShading;//平滑渲染

				        });
				        object.emissive=0x00ffff;//自发光颜色
				        object.ambient=0x00ffff;//环境光颜色
				        // object.rotation.y= 0;//x轴方向旋转角度
				        object.position.y = 100;//位置坐标X
				        object.position.z = 0;//位置坐标y
				        object.position.x = 0;
				        object.scale.x=0.05;//缩放级别
				        object.scale.y=0.05;//缩放级别
				        object.scale.z=0.05;//缩放级别
				        // object.name="haven";//刚体名称
				        // object.rotation.y=-Math.PI;//初始Y轴方向旋转角度
				        self.scene.add(object);//添加到场景中
				        console.log(object)
			},
			progress: function(persent) {

			}
		})

		for(let i=0; i<len; i++) {
			var stuff = new Stuff();
			stuff.init(self.objList[i], function(result) {
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
		event.preventDefault();
		_this.mouseClick.x = (event.clientX / _this.width) * 2 - 1;
		_this.mouseClick.y = -(event.clientY / _this.height) * 2 + 1;
		_this.raycaster.setFromCamera(_this.mouseClick, _this.camera);
	}
}




