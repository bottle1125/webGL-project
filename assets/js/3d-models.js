'use strict'
function CreateMtlObj() {

}


CreateMtlObj.prototype.create = function(options) {
	// options = {
	// 	mtlBaseUrl: '',
	// 	mtlPath: '',
	// 	mtlFileName: '',
	// 	objPath: '',
	// 	objFileName: '',
	// 	completeCallback: function(object) {

	// 	},
	// 	progress: function(persent) {

	// 	}
	// }

	THREE.Loader.Handlers.add(/\.dds$/i, new THREE.DDSLoader());
	var mtlLoader = new THREE.MTLLoader();
	mtlLoader.setBaseUrl(options.mtlBaseUrl); //设置材质路径
	mtlLoader.setPath(options.mtlPath); //设置mtl文件路径
	mtlLoader.load(options.mtlFileName, function(materials) {
		materials.preload();
		var objLoader = new THREE.OBJLoader();
		objLoader.setMaterials( materials );
		objLoader.setPath(options.objPath);
		objLoader.load( options.objFileName, function ( group ) {
		if(typeof options.completeCallback == 'function') {
			options.completeCallback(group);
		}

		} );
	})

}
