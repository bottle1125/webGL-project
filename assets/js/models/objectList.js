'use strict'

var THREE = require('n3d-threejs')
var floor = require('../../img/floor.jpg')
var door = require('../../img/doorL.jpg')

var objects = [{
	name: '地板',
	type: 'cube',
	size: [700, 5, 800],
	position: [0, -80, 0],
	material: [{'color': '#87ceeb'}, {'color': '#87ceeb'}, {'image': floor, 'repeat': true, 'repeatSize': [30, 30]}, {'color': '#87ceeb'}, {'color': '#87ceeb'}, {'color': '#87ceeb'}]
}, {
	name: '墙面',
	type: 'cube',
	size: [500, 150, 10],
	position: [0, 0, 300],
	material: [{'color': 0x9cb2d1 }, {'color': 0xafc0ca}, {'color': 0xd6e4ec}, {'color': 0x9cb2d1}, {'color': 0x9cb2d1}, {'color': 0x9cb2d1}]
}, {
	name: '墙面',
	type: 'cube',
	size: [610, 150, 10],
	position: [255, 0, 0],
	translate: 0.5*Math.PI,
	material: [{'color': 0x9cb2d1 }, {'color': 0xafc0ca}, {'color': 0xd6e4ec}, {'color': 0x9cb2d1}, {'color': 0x9cb2d1}, {'color': 0x9cb2d1}]
}, {
	name: '墙面',
	type: 'cube',
	size: [610, 150, 10],
	position: [-250, 0, 0],
	translate: 0.5 * Math.PI,
	material: [{'color': 0x9cb2d1 }, {'color': 0xafc0ca}, {'color': 0xd6e4ec}, {'color': 0x9cb2d1}, {'color': 0x9cb2d1}, {'color': 0x9cb2d1}]
}, {
	name: '墙体挖洞',
	type: 'cube',
	size: [500, 150, 10],
	accessory: {
		name: '门洞',
		type: 'cube',
		size: [50, 80, 10],
		position: [-95, -32, -300],
		material: [{'color': 0x9cb2d1 }, {'color': 0xafc0ca}, {'color': 0xd6e4ec}, {'color': 0x9cb2d1}, {'color': 0x9cb2d1}, {'color': 0x9cb2d1}]
	},
	position: [0, 0, -300],
	translate: 1*Math.PI,
	material: [{'color': 0x9cb2d1 }, {'color': 0xafc0ca}, {'color': 0xd6e4ec}, {'color': 0x9cb2d1}, {'color': 0x9cb2d1}, {'color': 0x9cb2d1}]
}, {
	name: '门',
	type: 'cube',
	size: [48, 78, 10],
	position: [-96, -30, -300],
	translate: 1*Math.PI,
	material: [{'color': '#ffff00' }, {'color': 0xafc0ca}, {'color': 0xd6e4ec}, {'color': 0x9cb2d1}, {'image': door, 'repeat': false}, {'image': door, 'repeat': false}]
}, {
	name: '客厅分隔墙',
	type: 'cube',
	size: [220, 150, 10],
	position: [140, 0, -80],
	material: [{'color': 0x9cb2d1 }, {'color': 0xafc0ca}, {'color': 0xd6e4ec}, {'color': 0x9cb2d1}, {'color': 0x9cb2d1}, {'color': 0x9cb2d1}]
}, {
	name: '厨房分隔墙',
	type: 'cube',
	size: [200, 150, 10],
	position: [-140, 0, -90],
	translate: 0.5 * Math.PI,
	material: [{'color': 0x9cb2d1 }, {'color': 0xafc0ca}, {'color': 0xd6e4ec}, {'color': 0x9cb2d1}, {'color': 0x9cb2d1}, {'color': 0x9cb2d1}]
}, {
	name: '次卧分隔墙',
	type: 'cube',
	size: [200, 150, 10],
	position: [-145, 0, 10],
	material: [{'color': 0x9cb2d1 }, {'color': 0xafc0ca}, {'color': 0xd6e4ec}, {'color': 0x9cb2d1}, {'color': 0x9cb2d1}, {'color': 0x9cb2d1}]
}, {
	name: '书房分隔墙',
	type: 'cube',
	size: [220, 150, 10],
	position: [140, 0, 80],
	material: [{'color': 0x9cb2d1 }, {'color': 0xafc0ca}, {'color': 0xd6e4ec}, {'color': 0x9cb2d1}, {'color': 0x9cb2d1}, {'color': 0x9cb2d1}]
}, {
	name: '走廊分隔墙A',
	type: 'cube',
	size: [280, 150, 10],
	position: [-50, 0, 155],
	translate: 0.5*Math.PI,
	material: [{'color': 0x9cb2d1 }, {'color': 0xafc0ca}, {'color': 0xd6e4ec}, {'color': 0x9cb2d1}, {'color': 0x9cb2d1}, {'color': 0x9cb2d1}]
}, {
	name: '洗手间分隔墙',
	type: 'cube',
	size: [200, 150, 10],
	position: [-145, 0, 100],
	material: [{'color': 0x9cb2d1 }, {'color': 0xafc0ca}, {'color': 0xd6e4ec}, {'color': 0x9cb2d1}, {'color': 0x9cb2d1}, {'color': 0x9cb2d1}]
}, {
	name: '走廊分隔墙B',
	type: 'cube',
	size: [382, 150, 10],
	position: [32, 0, 105],
	translate: 0.5*Math.PI,
	material: [{'color': 0x9cb2d1 }, {'color': 0xafc0ca}, {'color': 0xd6e4ec}, {'color': 0x9cb2d1}, {'color': 0x9cb2d1}, {'color': 0x9cb2d1}]
}]

module.exports = objects;