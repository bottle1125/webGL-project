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
		this.objMtlList = new MtlObj().haveObjects();//模型列表
		this.eventList = new ObjectEvent().haveEvents();//事件对象列表
		this.objects = [];
		this.models = [];
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
		var len1 = self.objList.length;
		var len2 = self.objMtlList.length;
		for(let i=0; i<len1; i++) {
			var stuff = new Stuff();

			stuff.init(self.objList[i], function(result) {
				self.objects.push(result);
				self.scene.add(result);
			})
		}

		for(let j=0; j<len2; j++) {
			var model = new CreateMtlObj();
			model.create(self.objMtlList[j], function(result) {
				self.objects = self.objects.concat(result.children);
				self.scene.add(result);
			})
		}

	},
	initEvent: function() {
		this.renderer.domElement.addEventListener('mousedown', this.onDocumentMouseDown);
		this.renderer.domElement.addEventListener('mousemove', this.onDocumentMouseMove);
		this.renderer.domElement.addEventListener( 'mousewheel', this.onDocumentMousewheel, false );  
		this.renderer.domElement.addEventListener( 'mouseup', this.onDocumentMouseUp, false );  
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
		event.preventDefault();	
		_this.dbclick++;
		var self = this;
		setTimeout(function () {
			if (_this.dbclick >= 2) {
				_this.onDocumentDbclick();
				_this.dbclick = 0;
			}
			else if(_this.dbclick === 1) {
				_this.onDocumentClick();
				_this.dbclick = 0;
			   
			}
		}, 500);
	},
	onDocumentDbclick: function() {
		var rotationXA = document.getElementById('rotationX-add');
		var rotationXP = document.getElementById('rotationX-plus');
		var rotationYA = document.getElementById('rotationY-add');
		var rotationYP = document.getElementById('rotationY-plus');
		var rotationZA = document.getElementById('rotationZ-add');
		var rotationZP = document.getElementById('rotationZ-plus');
		var rotation = document.getElementById('rotation');
		var recover = document.getElementById('recover');
		if(_this.dbSELECTED) {
			rotation.style.display = 'none';
			_this.dbSELECTED = null;
		}
	    _this.raycaster.setFromCamera(_this.mouseClick, _this.camera);
	    var intersects = _this.raycaster.intersectObjects(_this.objects);
	    if (intersects.length > 0) {
	        _this.dbSELECTED = intersects[0].object;
	        if (_this.eventList != null && _this.eventList.dbclick != null && _this.eventList.dbclick.length > 0) {
	            _this.eventList.dbclick.forEach((_obj, index) => {
	                if ("string" == typeof (_obj.obj_name)) {
	                    if (_obj.obj_name == _this.dbSELECTED.name) {
	                        _obj.obj_event(_this.dbSELECTED, _this.scene);
	                    }
	                } else if (_obj.findObject!=null||'function' == typeof (_obj.findObject)) {
	                    if (_obj.findObject(_this.dbSELECTED.name)) {
	                        _obj.obj_event(_this.dbSELECTED);
	                    }
	                }
	            });
	        }
	    }
	    if(_this.dbSELECTED.parent.type === 'Group') {
	    	console.log(_this.dbSELECTED)
	    	_this.dbSELECTED = _this.dbSELECTED.parent;

	    	var [rX,rY,rZ] = [_this.dbSELECTED.rotation.x, _this.dbSELECTED.rotation.y, _this.dbSELECTED.rotation.z];
	    	
	    	rotation.style.display = 'block';
	    	rotationXA.addEventListener('click', function(event) {
	    		_this.dbSELECTED.rotation.x += 0.01;
	    	})
	    	rotationXP.addEventListener('click', function(event) {
	    		_this.dbSELECTED.rotation.x -= 0.01;
	    	})
	    	rotationYA.addEventListener('click', function(event) {
	    		_this.dbSELECTED.rotation.z += 0.01;
	    	})
	    	rotationYP.addEventListener('click', function(event) {
	    		_this.dbSELECTED.rotation.z -= 0.01;
	    	})
	    	rotationZA.addEventListener('click', function(event) {
	    		_this.dbSELECTED.rotation.y += 0.01;
	    	})
	    	rotationZP.addEventListener('click', function(event) {
	    		_this.dbSELECTED.rotation.y -= 0.01;
	    	})
	    	recover.addEventListener('click', function(event) {
	    		_this.dbSELECTED.rotation.set(rX, rY, rZ)
	    	})
	    }
	    
	},
	onDocumentClick: function() {
	    _this.raycaster.setFromCamera(_this.mouseClick, _this.camera);
		var intersects = _this.raycaster.intersectObjects(_this.objects);
		if(intersects.length > 0) {
			_this.SELECTED = intersects[0].object;
			_this.vector = {
				x: _this.mv.x,
				y: _this.mv.y
			}
		}		
	},
	onDocumentMouseMove: function(event) {
		event.preventDefault();
		_this.mouseClick.x = (event.clientX / _this.width) * 2 - 1;
		_this.mouseClick.y = -(event.clientY / _this.height) * 2 + 1;
		_this.mv = new THREE.Vector3(_this.mouseClick.x, _this.mouseClick.y,
            0.5 );
		_this.mv.unproject(_this.camera);
		if(_this.SELECTED) {
			var subX = _this.mv.x - _this.vector.x;
			var subY = _this.mv.y - _this.vector.y;
			_this.vector.x = _this.mv.x;
			_this.vector.y = _this.mv.y;
			if(_this.SELECTED.parent.type === 'Group') {
				_this.SELECTED = _this.SELECTED.parent;
			}
			_this.SELECTED.position.x += 10*subX;
			_this.SELECTED.position.y += 10*subY;
		}
	},
	onDocumentMouseUp: function(event) {
		console.log('up')
		event.preventDefault();
		_this.SELECTED = null;
	},
	onDocumentMousewheel: function(event) {
		event.preventDefault();  
       //e.stopPropagation();  
       var fov = _this.camera.fov;
       var near = _this.camera.near;
       var far = _this.camera.far;
       if (event.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件  
           if (event.wheelDelta > 0) { //当滑轮向上滚动时  
               fov -= (near < fov ? 1 : 0);  
           }  
           if (event.wheelDelta < 0) { //当滑轮向下滚动时  
               fov += (fov < far ? 1 : 0);  
           }  
       } else if (event.detail) {  //Firefox滑轮事件  
           if (event.detail > 0) { //当滑轮向上滚动时  
               fov -= 1;  
           }  
           if (event.detail < 0) { //当滑轮向下滚动时  
               fov += 1;  
           }  
       }  
       _this.camera.fov = fov;  
       _this.camera.updateProjectionMatrix();  
       _this.render();  
	}
}




