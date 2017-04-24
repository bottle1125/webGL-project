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
	position: [95, -80, -145],
	rotation: [-0.3*Math.PI, 0, 0.05*Math.PI],
	scale: [0.08, 0.08, 0.08]
}, {
	mtlFileName: 'shelf-living.mtl',
	objFileName: 'shelf-living.obj',
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
	position: [150, -80, -295],
	rotation: [0, 0, 0],
	scale: [0.1, 0.1, 0.1]
}, {
	mtlFileName: 'xuanguan.mtl',
	objFileName: 'xuanguan.obj',
	name: '玄关',
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
	position: [-25, -76, -280],
	rotation: [1.1*Math.PI, -0.03*Math.PI, -0.75*Math.PI],
	scale: [0.01, 0.01, 0.01]
}, {
	mtlFileName: 'bed.mtl',
	objFileName: 'bed.obj',
	name: '厨柜',
	children: {
		material: {
			side: THREE.DoubleSide, //设置贴图模式为双面贴图
			emissive: [0, 0.01, 0.05], // //设置rgb通道RGB通道颜色
			transparent: true,
			opacity: 1,
			shading: THREE.SmoothShading //平滑渲染
		}
	},
	emissive: 0xffffff, //自发光颜色
	ambient: 0xffffff,
	position: [-100, -80, 280],
	rotation: [-0.5*Math.PI, 0.05*Math.PI, 0.12*Math.PI],
	scale: [1, 1, 1]
}, {
	mtlFileName: 'bed.mtl',
	objFileName: 'bed.obj',
	name: '床',
	children: {
		material: {
			side: THREE.DoubleSide, //设置贴图模式为双面贴图
			emissive: [0, 0.01, 0.05], // //设置rgb通道RGB通道颜色
			transparent: true,
			opacity: 1,
			shading: THREE.SmoothShading //平滑渲染
		}
	},
	emissive: 0xffffff, //自发光颜色
	ambient: 0xffffff,
	position: [150, -80, 230],
	rotation: [-0.5*Math.PI, -0.08*Math.PI, 1.14*Math.PI],
	scale: [1, 1, 1]
}, {
	mtlFileName: 'longtou.mtl',
	objFileName: 'longtou.obj',
	name: '龙头',
	children: {
		material: {
			side: THREE.DoubleSide, //设置贴图模式为双面贴图
			emissive: [0, 0.01, 0.05], // //设置rgb通道RGB通道颜色
			transparent: true,
			opacity: 1,
			shading: THREE.SmoothShading //平滑渲染
		}
	},
	emissive: 0xffffff, //自发光颜色
	ambient: 0xffffff,
	position: [-200, 15, -20],
	rotation: [0.5*Math.PI, 1.2*Math.PI, -0.5*Math.PI],
	scale: [0.1, 0.1, 0.05]
}, {
	mtlFileName: 'chair.mtl',
	objFileName: 'chair.obj',
	name: '龙头',
	children: {
		material: {
			side: THREE.DoubleSide, //设置贴图模式为双面贴图
			emissive: [0, 0.01, 0.05], // //设置rgb通道RGB通道颜色
			transparent: true,
			opacity: 1,
			shading: THREE.SmoothShading //平滑渲染
		}
	},
	emissive: 0xffffff, //自发光颜色
	ambient: 0xffffff,
	position: [-180, -50, -120],
	rotation: [0.5*Math.PI, 1*Math.PI, 0.25*Math.PI],
	scale: [0.1, 0.1, 0.1]
}, {
	mtlFileName: 'canzhuo.mtl',
	objFileName: 'canzhuo.obj',
	name: '龙头',
	children: {
		material: {
			side: THREE.DoubleSide, //设置贴图模式为双面贴图
			emissive: [0, 0.01, 0.05], // //设置rgb通道RGB通道颜色
			transparent: true,
			opacity: 1,
			shading: THREE.SmoothShading //平滑渲染
		}
	},
	emissive: 0xffffff, //自发光颜色
	ambient: 0xffffff,
	position: [-120, -80, -70],
	rotation: [-0.1*Math.PI, 0.35*Math.PI, 0.15*Math.PI],
	scale: [0.008, 0.008, 0.008]
}, {
	mtlFileName: 'bookshelf.mtl',
	objFileName: 'bookshelf.obj',
	name: '书房书架',
	children: {
		material: {
			side: THREE.DoubleSide, //设置贴图模式为双面贴图
			emissive: [0, 0.01, 0.05], // //设置rgb通道RGB通道颜色
			transparent: true,
			opacity: 1,
			shading: THREE.SmoothShading //平滑渲染
		}
	},
	emissive: 0xffffff, //自发光颜色
	ambient: 0xffffff,
	position: [210, -75, -60],
	rotation: [-0.1*Math.PI, 0, 0],
	scale: [0.05, 0.05, 0.05]
}, {
	mtlFileName: 'bookdesk.mtl',
	objFileName: 'bookdesk.obj',
	name: '书房书桌',
	children: {
		material: {
			side: THREE.DoubleSide, //设置贴图模式为双面贴图
			emissive: [0, 0.01, 0.05], // //设置rgb通道RGB通道颜色
			transparent: true,
			opacity: 1,
			shading: THREE.SmoothShading //平滑渲染
		}
	},
	emissive: 0xffffff, //自发光颜色
	ambient: 0xffffff,
	position: [185, -20, -20],
	rotation: [0.5*Math.PI, 0.8*Math.PI, 0.2],
	scale: [0.05, 0.05, 0.05]
}, {
	mtlFileName: 'booksofa.mtl',
	objFileName: 'booksofa.obj',
	name: '书房沙发',
	children: {
		material: {
			side: THREE.DoubleSide, //设置贴图模式为双面贴图
			emissive: [0, 0.01, 0.05], // //设置rgb通道RGB通道颜色
			transparent: true,
			opacity: 1,
			shading: THREE.SmoothShading //平滑渲染
		}
	},
	emissive: 0xffffff, //自发光颜色
	ambient: 0xffffff,
	position: [140, -50, 0],
	rotation: [0, 0.07*Math.PI, 0],
	scale: [0.05, 0.05, 0.05]
}, {
	mtlFileName: 'bookchair.mtl',
	objFileName: 'bookchair.obj',
	name: '书房椅子',
	children: {
		material: {
			side: THREE.DoubleSide, //设置贴图模式为双面贴图
			emissive: [0, 0.01, 0.05], // //设置rgb通道RGB通道颜色
			transparent: true,
			opacity: 1,
			shading: THREE.SmoothShading //平滑渲染
		}
	},
	emissive: 0xffffff, //自发光颜色
	ambient: 0xffffff,
	position: [180, -50, -25],
	rotation: [-0.5*Math.PI, -0.1*Math.PI, Math.PI],
	scale: [0.15, 0.15, 0.15]
}, {
	mtlFileName: 'shuzhuangtai.mtl',
	objFileName: 'shuzhuangtai.obj',
	name: '主卧梳妆台',
	children: {
		material: {
			side: THREE.DoubleSide, //设置贴图模式为双面贴图
			emissive: [0, 0.01, 0.05], // //设置rgb通道RGB通道颜色
			transparent: true,
			opacity: 1,
			shading: THREE.SmoothShading //平滑渲染
		}
	},
	emissive: 0xffffff, //自发光颜色
	ambient: 0xffffff,
	position: [220, -50, 160],
	rotation: [-0.7*Math.PI, 0, 0],
	scale: [0.1, 0.1, 0.1]
}, {
	mtlFileName: 'yigui.mtl',
	objFileName: 'yigui.obj',
	name: '主卧衣柜',
	children: {
		material: {
			side: THREE.DoubleSide, //设置贴图模式为双面贴图
			emissive: [0, 0.01, 0.05], // //设置rgb通道RGB通道颜色
			transparent: true,
			opacity: 1,
			shading: THREE.SmoothShading //平滑渲染
		}
	},
	emissive: 0xffffff, //自发光颜色
	ambient: 0xffffff,
	position: [140, -50, 110],
	rotation: [-0.2*Math.PI, 0.04, 0.1],
	scale: [0.03, 0.03, 0.03]
}, {
	mtlFileName: 'shuzhuangtai.mtl',
	objFileName: 'shuzhuangtai.obj',
	name: '次卧梳妆台',
	children: {
		material: {
			side: THREE.DoubleSide, //设置贴图模式为双面贴图
			emissive: [0, 0.01, 0.05], // //设置rgb通道RGB通道颜色
			transparent: true,
			opacity: 1,
			shading: THREE.SmoothShading //平滑渲染
		}
	},
	emissive: 0xffffff, //自发光颜色
	ambient: 0xffffff,
	position: [-220, -50, 180],
	rotation: [-0.7*Math.PI, 0, 0],
	scale: [0.1, 0.1, 0.1]
}, {
	mtlFileName: 'yigui.mtl',
	objFileName: 'yigui.obj',
	name: '次卧衣柜',
	children: {
		material: {
			side: THREE.DoubleSide, //设置贴图模式为双面贴图
			emissive: [0, 0.01, 0.05], // //设置rgb通道RGB通道颜色
			transparent: true,
			opacity: 1,
			shading: THREE.SmoothShading //平滑渲染
		}
	},
	emissive: 0xffffff, //自发光颜色
	ambient: 0xffffff,
	position: [-130, -50, 135],
	rotation: [-0.2*Math.PI, 0.04, 0.1],
	scale: [0.03, 0.03, 0.03]
}, {
	mtlFileName: 'matong.mtl',
	objFileName: 'matong.obj',
	name: '外厕马桶',
	children: {
		material: {
			side: THREE.DoubleSide, //设置贴图模式为双面贴图
			emissive: [0, 0.01, 0.05], // //设置rgb通道RGB通道颜色
			transparent: true,
			opacity: 1,
			shading: THREE.SmoothShading //平滑渲染
		}
	},
	emissive: 0xffffff, //自发光颜色
	ambient: 0xffffff,
	position: [-140, -50, 50],
	rotation: [-0.5*Math.PI, 0, 0],
	scale: [0.06, 0.06, 0.06]
}, {
	mtlFileName: 'yugang.mtl',
	objFileName: 'yugang.obj',
	name: '外侧浴缸',
	children: {
		material: {
			side: THREE.DoubleSide, //设置贴图模式为双面贴图
			emissive: [0, 0.01, 0.05], // //设置rgb通道RGB通道颜色
			transparent: true,
			opacity: 1,
			shading: THREE.SmoothShading //平滑渲染
		}
	},
	emissive: 0xffffff, //自发光颜色
	ambient: 0xffffff,
	position: [-220, -30, 50],
	rotation: [1.5, 1, 1.5],
	scale: [0.03, 0.03, 0.03]
}, {
	mtlFileName: 'matong.mtl',
	objFileName: 'matong.obj',
	name: '外厕马桶',
	children: {
		material: {
			side: THREE.DoubleSide, //设置贴图模式为双面贴图
			emissive: [0, 0.01, 0.05], // //设置rgb通道RGB通道颜色
			transparent: true,
			opacity: 1,
			shading: THREE.SmoothShading //平滑渲染
		}
	},
	emissive: 0xffffff, //自发光颜色
	ambient: 0xffffff,
	position: [45, -50, 210],
	rotation: [-0.5*Math.PI, 0, -0.5*Math.PI],
	scale: [0.06, 0.06, 0.06]
}, {
	mtlFileName: 'yugang.mtl',
	objFileName: 'yugang.obj',
	name: '外侧浴缸',
	children: {
		material: {
			side: THREE.DoubleSide, //设置贴图模式为双面贴图
			emissive: [0, 0.01, 0.05], // //设置rgb通道RGB通道颜色
			transparent: true,
			opacity: 1,
			shading: THREE.SmoothShading //平滑渲染
		}
	},
	emissive: 0xffffff, //自发光颜色
	ambient: 0xffffff,
	position: [45, -40, 280],
	rotation: [1.5, 1, 1.5],
	scale: [0.03, 0.03, 0.03]
}]