'use strict'

'use strict'
function CreateMtlObj() {

}


CreateMtlObj.prototype.create = function(options, callback) {

	options.mtlBaseUrl = './assets/3d-models/';
	options.mtlPath = './assets/3d-models/';
	options.objPath = './assets/3d-models/';

	THREE.Loader.Handlers.add(/\.dds$/i, new THREE.DDSLoader());

	var mtlLoader = new THREE.MTLLoader();
	mtlLoader.setBaseUrl(options.mtlBaseUrl); //设置材质路径
	mtlLoader.setPath(options.mtlPath); //设置mtl文件路径

	mtlLoader.load(options.mtlFileName, function(materials) {
		materials.preload();

		var objLoader = new THREE.OBJLoader();
		objLoader.setMaterials( materials );
		objLoader.setPath(options.objPath);

		objLoader.load( options.objFileName, function ( object ) {
			console.log(object)
			if(object.children) {
				object.children.forEach(function(child) {
					if(child.material.materials) {
						child.material.materials.forEach(function(material) {
							material.side = options.children.material.side || THREE.DoubleSide;
							material.emissive.r = options.children.material.emissive[0] || 0.01;//设置rgb通道R通道颜色
							material.emissive.g = options.children.material.emissive[1] || 0.01;//设置rgb通道G通道颜色
							material.emissive.b = options.children.material.emissive[2] || 0.05;//设置rgb通道B通道颜色
							material.transparent = options.children.material.transparent || true;//材质允许透明
							material.opacity = options.children.material.opacity || 1;//材质默认透明度                        
							material.shading = options.children.material.shading || THREE.SmoothShading;//平滑渲染
						})
					}
					else {
						child.material.side = options.children.material.side || THREE.DoubleSide;//设置贴图模式为双面贴图
			            child.material.emissive.r = options.children.material.emissive[0] || 0.01;//设置rgb通道R通道颜色
			            child.material.emissive.g = options.children.material.emissive[1] || 0.01;//设置rgb通道G通道颜色
			            child.material.emissive.b = options.children.material.emissive[2] || 0.05;//设置rgb通道B通道颜色
			            child.material.transparent = options.children.material.transparent || true;//材质允许透明
			            child.material.opacity = options.children.material.opacity || 1;//材质默认透明度                        
			            child.material.shading = options.children.material.shading || THREE.SmoothShading;//平滑渲染
					}
					
				})
			}
			object.name = options.name;
			object.emissive = options.emissive || 0x00ffff;//自发光颜色
			object.ambient = options.ambient || 0x00ffff;//环境光颜色
			var [positionX, positionY, positionZ] = options.position;
			object.position.set(positionX, positionY, positionZ);
			var [rotationX, rotationY, rotationZ] = options.rotation;
			object.rotation.set(rotationX, rotationY, rotationZ);
			var [scaleX, scaleY, scaleZ] = options.scale;
			object.scale.set(scaleX, scaleY, scaleZ);

			callback(object);
		});
	})

}
