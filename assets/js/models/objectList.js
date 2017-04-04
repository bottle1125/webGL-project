'use strict'

var THREE = require('n3d-threejs')
var img = require('../../img/floor.jpg')

var objects = [{
	name: '地板',
	type: 'cube',
	width: 700,
	height: 5,
	depth: 800,

	style: {
		'color': '#87ceeb',
		'image': img
	}
}]

module.exports = objects;