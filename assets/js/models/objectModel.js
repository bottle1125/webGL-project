'use strict'

var THREE = require('n3d-threejs')
var ThreeBSP = require('three-js-csg')(THREE)

function Stuff() {

}
Stuff.prototype = {
	init: function(object, callback) {
		var self = this;
		var type = object.type;
		if(type === 'cube') {
			var geometry = self.createShape(object);
			var multiMaterial = self.createMaterial(geometry, object);
			var shape = new THREE.Mesh(geometry, multiMaterial);
			shape.castShadow = true;
			shape.receiveShadow = true;
			shape.name = object.name;
			var [positionX, positionY, positionZ] = object.position;
			shape.position.set(positionX, positionY, positionZ);
			if(object.status) {
				shape.status = object.status;
			}
			if(object.rotation) {
				[shape.rotation.x, shape.rotation.y, shape.rotation.z] = object.rotation;
			}
			if (object.childrens && object.childrens.length > 0) {
				var newShape = null;
				object.childrens.forEach((childObj, index) => {
					var _newobj = null;
					_newobj = self.createHole(childObj);
					shape = self.mergeModel(childObj.op, shape, _newobj);
				})
				callback(shape)
			}
			else {
				callback(shape);
			}
		}
	},
	createHole: function (object) {
		var self = this;
		var geometry = self.createShape(object);
		var multiMaterial = self.createMaterial(geometry, object);
		var shape = new THREE.Mesh(geometry, multiMaterial);
		shape.castShadow = true;
		shape.receiveShadow = true;
		shape.name = object.name;
		var [positionX, positionY, positionZ] = object.position;
		shape.position.set(positionX, positionY, positionZ);
		if(object.rotation) {
			[shape.rotation.x, shape.rotation.y, shape.rotation.z] = object.rotation;
		}

        return shape;
	},
	createShape: function(object) {
		var [width, height, depth] = object.size;
		var geometry = new THREE.CubeGeometry(width, height, depth, 0, 0, 1);
		return geometry;
	},
	createMaterial: function(cubeGeometry, object) {
		var self = this;
		var [_width, _height, _depth] = object.size;

		//六面颜色
		for(let i=0; i < cubeGeometry.faces.length; i+=2) {
			var hex = object.style.surfaceColor || 0x9cb2d1;
			cubeGeometry.faces[i].color.setHex(hex);
			cubeGeometry.faces[i + 1].color.setHex(hex);
		}
		//六面纹理
		var surface_up_obj = {
		    vertexColors: THREE.FaceColors
		}
		var surface_down_obj = surface_up_obj,
		    surface_fore_obj = surface_up_obj,
		    surface_behind_obj = surface_up_obj,
		    surface_left_obj = surface_up_obj,
		    surface_right_obj = surface_up_obj;
		if (object.style != null && typeof (object.style) != 'undefined'
		    && object.style.surface != null && typeof (object.style.surface) != 'undefined') {
		    //上
		    surface_up_obj = self.createSurface(_width, _depth, object.style.surface.surface_up, cubeGeometry, 4);
		    //下
		    surface_down_obj = self.createSurface(_width, _depth, object.style.surface.surface_down, cubeGeometry, 6);
		    //前
		    surface_fore_obj = self.createSurface(_width, _height, object.style.surface.surface_fore, cubeGeometry, 0);
		    //后
		    surface_behind_obj = self.createSurface(_width, _height, object.style.surface.surface_behind, cubeGeometry, 2);
		    //左
		    surface_left_obj = self.createSurface(_depth, _height, object.style.surface.surface_left, cubeGeometry, 8);
		    //右
		    surface_right_obj = self.createSurface(_depth, _height, object.style.surface.surface_right, cubeGeometry, 10);
		}

		var cubeMaterialArray = [];
		cubeMaterialArray.push(new THREE.MeshBasicMaterial(surface_fore_obj));
		cubeMaterialArray.push(new THREE.MeshBasicMaterial(surface_behind_obj));
		cubeMaterialArray.push(new THREE.MeshBasicMaterial(surface_up_obj));
		cubeMaterialArray.push(new THREE.MeshBasicMaterial(surface_down_obj));
		cubeMaterialArray.push(new THREE.MeshBasicMaterial(surface_right_obj));
		cubeMaterialArray.push(new THREE.MeshBasicMaterial(surface_left_obj));
		var cubeMaterials = new THREE.MeshFaceMaterial(cubeMaterialArray);
		return cubeMaterials;

	},
	createSurface: function (fWidth, fHeight, _obj, _cube, _cubefacenub) {
		var self = this;
		if(_obj) {
			if (_obj.imgurl) {
				
			    return {
			        map: self.createTexture(fWidth, fHeight, _obj),transparent:true
			    }
			} else {
			    if (_obj.surfaceColor) {
			        _cube.faces[_cubefacenub].color.setHex(_obj.surfaceColor);
			        _cube.faces[_cubefacenub + 1].color.setHex(_obj.surfaceColor);
			    }
			    if(_obj.transparent) {
			    	return {
			    		vertexColors: THREE.FaceColors,
			    		transparent: true,
			    		opacity: _obj.opacity
			    	}
			    }else {
			    	return {
			    	    vertexColors: THREE.FaceColors
			    	}
			    }
			   
			}
		}
		else {
			return {
				vertexColors: THREE.FaceColors
			}
		}
        
	},
	createTexture: function(fWidth, fHeight, _obj) {
		var imgwidth = 128,imgheight=128;
		if (_obj.width != null&& typeof (_obj.width) != 'undefined') {
		    imgwidth = _obj.width;
		}
		if (_obj.height != null && typeof (_obj.height) != 'undefined') {
		    imgheight = _obj.height;
		}
		var texture = new THREE.TextureLoader().load(_obj.imgurl);
		var _repeat = false;
		if (_obj.repeatx != null && typeof (_obj.repeatx) != 'undefined' && _obj.repeatx==true) {
		    texture.wrapS = THREE.RepeatWrapping;
		    _repeat = true;
		}
		if (_obj.repeaty != null && typeof (_obj.repeaty) != 'undefined' && _obj.repeaty == true) {
		    texture.wrapT = THREE.RepeatWrapping;
		    _repeat = true;
		}
		if (_repeat) {
		    texture.repeat.set(fWidth / imgwidth, fHeight / imgheight);
		}
		return texture;
	},
	mergeModel: function(mergeOP, fObj, sObj) {
		var self = this;
		var fobjBSP = new ThreeBSP(fObj);
	    var sobjBSP = new ThreeBSP(sObj);
		var resultBSP = null;
		if (mergeOP == '-') {
		    resultBSP = fobjBSP.subtract(sobjBSP);
		} else if (mergeOP == '+') {
		    sObj.updateMatrix();
		    fObj.geometry.merge(sObj.geometry, sObj.matrix);
		    return fObj;
		    // resultBSP = fobjBSP.union(sobjBSP);
		} else if (mergeOP == '&') {//交集
		    resultBSP = fobjBSP.intersect(sobjBSP);
		} else {
		    return fObj;
		}
		var cubeMaterialArray = [];
		for (var i = 0; i < 1; i++) {
		    cubeMaterialArray.push(new THREE.MeshBasicMaterial({
		        vertexColors: THREE.FaceColors
		    }));
		}
		var cubeMaterials = new THREE.MeshFaceMaterial(cubeMaterialArray);
		var result = resultBSP.toMesh(cubeMaterials);
		result.material.shading = THREE.FlatShading;
		result.geometry.computeFaceNormals();
		result.geometry.computeVertexNormals();
		result.name=fObj.name+mergeOP+sObj.name;
		result.material.needsUpdate = true;
		result.geometry.buffersNeedUpdate = true;
		result.geometry.uvsNeedUpdate = true;
		var _foreFaceSkin = null;
		for (var i = 0; i < result.geometry.faces.length; i++) {
		    var _faceset = false;
		    for (var j = 0; j < fObj.geometry.faces.length; j++) {
		        if (result.geometry.faces[i].normal.x === fObj.geometry.faces[j].normal.x
		            && result.geometry.faces[i].normal.y === fObj.geometry.faces[j].normal.y
		            && result.geometry.faces[i].normal.z === fObj.geometry.faces[j].normal.z) {
		            result.geometry.faces[i].color.setHex(fObj.geometry.faces[j].color.r * 0xff0000 + fObj.geometry.faces[j].color.g * 0x00ff00 + fObj.geometry.faces[j].color.b * 0x0000ff);
		            _foreFaceSkin = fObj.geometry.faces[j].color.r * 0xff0000 + fObj.geometry.faces[j].color.g * 0x00ff00 + fObj.geometry.faces[j].color.b * 0x0000ff;
		            _faceset =true;
		        }
		    }
		    if (_faceset == false){
		        for(var j = 0; j < sObj.geometry.faces.length; j++) {
		            if (result.geometry.faces[i].vertexNormals[0].x === sObj.geometry.faces[j].normal.x
		                && result.geometry.faces[i].normal.y === sObj.geometry.faces[j].normal.y
		                && result.geometry.faces[i].normal.z === sObj.geometry.faces[j].normal.z) {
		                result.geometry.faces[i].color.setHex(sObj.geometry.faces[j].color.r * 0xff0000 + sObj.geometry.faces[j].color.g * 0x00ff00 + sObj.geometry.faces[j].color.b * 0x0000ff);
		                _foreFaceSkin = sObj.geometry.faces[j].color.r * 0xff0000 + sObj.geometry.faces[j].color.g * 0x00ff00 + sObj.geometry.faces[j].color.b * 0x0000ff;
		                _faceset = true;
		            }
		        }
		    }
		    if (_faceset == false) {
		        result.geometry.faces[i].color.setHex(_foreFaceSkin);
		    }
		 // result.geometry.faces[i].materialIndex = i
		}
		result.castShadow = true;
		result.receiveShadow = true;
		return result;
	},
	getRandomColor: function() {
	  var str16=(Math.random() * 0x1000000 << 0).toString(16);
	  function done(h) {
	    return new Array(7 - h.length).join("0") + h
	  }
	  var perfectStr=done(str16);
	  return '#'+perfectStr;
	}
}

module.exports = Stuff;
