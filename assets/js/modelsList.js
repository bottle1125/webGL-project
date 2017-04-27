function MtlObj() {

}

MtlObj.prototype.haveObjects = function() {
	return models;
}

var models = [{
	mtlFileName: 'sofa2.mtl',
	objFileName: 'sofa2.obj',
	name: '沙发',
	children: {
		material: {
			side: THREE.DoubleSide, //设置贴图模式为双面贴图
			emissive: [0, 0.01, 0.05], // //设置rgb通道RGB通道颜色
			transparent: true,
			opacity: 1,
			shading: THREE.SmoothShading //平滑渲染
		}
	},
	emissive: 0x00ffff, //自发光颜色
	ambient: 0x00ffff,
	position: [95, -110, -145],
	rotation: [-0.3*Math.PI, -0.01, 0.08],
	scale: [0.08, 0.08, 0.08]
}]