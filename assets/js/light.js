'use strict'

var THREE = require('n3d-threejs')

function Light() {

}


Light.prototype.init = function(scene) {
    var light = new THREE.AmbientLight(0xcccccc);
    light.position.set(0, 0,0);
    scene.add(light);
    var light2 = new THREE.PointLight(0x555555);
    light2.shadow.camera.near =1;
    light2.shadow.camera.far = 5000;
    light2.position.set(0, 350, 0);
    light2.castShadow = true;//表示这个光是可以产生阴影的
    scene.add(light2);
}

module.exports = Light;