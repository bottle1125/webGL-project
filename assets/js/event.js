'use strict'

function ObjectEvent() {

};

ObjectEvent.prototype.haveEvents = function() {
    return events;
}
var events = {
    dbclick: [
        {
            obj_name: "study-windowA",
            obj_uuid: "",
            obj_event: function (_mesh) {
                if(_mesh.status === 'open') {
                    _mesh.position.set(255, 30, 15);
                    _mesh.status = 'close';
                }
                else {
                    _mesh.position.set(255, 30, 10);
                    _mesh.status = 'open';
                }
                
            }
        },
        {
            obj_name: "study-windowB",
            obj_event: function(_mesh) {
                if(_mesh.status === 'open') {
                   _mesh.position.set(255, 30, -15);
                   _mesh.status = 'close'; 
                }
                else {
                    _mesh.position.set(255, 30, -5);
                    _mesh.status = 'open';
                }
                
            }
        },
        {
            obj_name: 'living-room-doorB',
            obj_event: function(_mesh) {
                if(_mesh.status === 'open') {
                   _mesh.position.set(255, -10, -162);
                   _mesh.status = 'close'; 
                }
                else {
                    _mesh.position.set(255, -10, -142);
                    _mesh.status = 'open';
                }
            }
        },
        {
            obj_name: 'living-room-doorC',
            obj_event: function(_mesh) {
                if(_mesh.status === 'open') {
                   _mesh.position.set(255, -10, -195);
                   _mesh.status = 'close'; 
                }
                else {
                    _mesh.position.set(255, -10, -215);
                    _mesh.status = 'open';
                }
            }
        },
        {
            obj_name: 'master-bedroom-doorB',
            obj_event: function(_mesh) {
                if(_mesh.status === 'open') {
                   _mesh.position.set(255, -12, 193);
                   _mesh.status = 'close'; 
                }
                else {
                    _mesh.position.set(255, -12, 213);
                    _mesh.status = 'open';
                }
            }
        },
        {
            obj_name: 'master-bedroom-doorC',
            obj_event: function(_mesh) {
                if(_mesh.status === 'open') {
                   _mesh.position.set(255, -12, 163);
                   _mesh.status = 'close'; 
                }
                else {
                    _mesh.position.set(255, -12, 143);
                    _mesh.status = 'open';
                }
            }
        },
        {
            obj_name: 'toilets-window',
            obj_event: function(_mesh, _scene) {
                if(_mesh.status === 'open') {
                    var parent = new THREE.Object3D();
                    parent.add(_mesh);
                    parent.position.set(-253,30,44)
                    parent.rotation.y = 0.5*Math.PI;
                    _mesh.position.set(-16, 0, 0);
                    _mesh.rotation.y = 0;
                    _scene.add(parent)
                    
                    _mesh.status = 'close'; 
                }
                else {
                    var parent = new THREE.Object3D();
                    parent.add(_mesh);
                    parent.position.set(-253,30,44)
                    parent.rotation.y = 0.2*Math.PI;
                    _mesh.position.set(-16, 0, 0);
                    _mesh.rotation.y = 0;
                    _scene.add(parent)
                    
                    _mesh.status = 'open';
                }
            }
        },
        {
            obj_name: 'second-bedroom-windowA',
            obj_event: function(_mesh) {
                if(_mesh.status === 'open') {
                    _mesh.position.set(-253, 30, 180);
                    _mesh.status = 'close';
                }
                else {
                    _mesh.position.set(-253, 30, 200);
                    _mesh.status = 'open';
                }
            }
        },{
           obj_name: 'kitchen-windowA',
           obj_event: function(_mesh) {
               if(_mesh.status === 'open') {
                   _mesh.position.set(-253, 30, -115);
                   _mesh.status = 'close';
               }
               else {
                   _mesh.position.set(-253, 30, -100);
                   _mesh.status = 'open';
               }
           } 
        }, {
            obj_name: 'main-door',
            obj_event: function(_mesh, _scene) {
                if(_mesh.status === 'open') {
                    var parent = new THREE.Object3D();
                    parent.add(_mesh);
                    parent.position.set(-95, -32, -300)
                    _mesh.position.set(0, 0, 0);
                    _scene.add(parent)
                    
                    _mesh.status = 'close'; 
                }
                else {
                    var parent = new THREE.Object3D();
                    parent.add(_mesh);
                    parent.position.set(-120, -32, -300)
                    _mesh.position.set(35, 0, 0);
                    _scene.add(parent)
                    parent.rotation.y = 0.5*Math.PI;
                    _mesh.status = 'open';
                }
            } 
        },
        {
            obj_name: 'study-door',
            obj_event: function(_mesh, _scene) {
               if(_mesh.status === 'open') {
                    var parent = new THREE.Object3D();
                    parent.add(_mesh);
                    parent.position.set(25, -25, 45);
                    parent.rotation.y = 0.5*Math.PI;
                    _mesh.position.set(15, 0, 0);
                    _mesh.rotation.y = 0;
                    _scene.add(parent)
                    _mesh.status = 'close';
               }
               else {
                    var parent = new THREE.Object3D();
                    parent.add(_mesh);
                    parent.position.set(25, -25, 45);
                    parent.rotation.y = 0.1*Math.PI;
                    _mesh.position.set(15, 0, 0);
                    _mesh.rotation.y = 0;
                    _scene.add(parent)
                    _mesh.status = 'open';
               }
           } 
        },
        {
            obj_name: 'living-room-door',
            obj_event: function(_mesh, _scene) {
                if(_mesh.status === 'open') {
                     var parent = new THREE.Object3D();
                     parent.add(_mesh);
                     parent.position.set(25, -25, 145);
                     parent.rotation.y = 0.5*Math.PI;
                     _mesh.position.set(15, 0, 0);
                     _mesh.rotation.y = 0;
                     _scene.add(parent)
                     _mesh.status = 'close';
                }
                else {
                     var parent = new THREE.Object3D();
                     parent.add(_mesh);
                     parent.position.set(25, -25, 145);
                     parent.rotation.y = 0.1*Math.PI;
                     _mesh.position.set(15, 0, 0);
                     _mesh.rotation.y = 0;
                     _scene.add(parent)
                     _mesh.status = 'open';
                }
            } 
        },
        {
            obj_name: 'master-bedroom-toilet-door',
            obj_event: function(_mesh, _scene) {
                if(_mesh.status === 'open') {
                     var parent = new THREE.Object3D();
                     parent.add(_mesh);
                     parent.position.set(46, -25, 160);
                     _mesh.position.set(16, 0, 0);
                     _scene.add(parent)
                     _mesh.status = 'close';
                }
                else {
                     var parent = new THREE.Object3D();
                     parent.add(_mesh);
                     parent.position.set(46, -25, 160);
                     parent.rotation.y = -0.5*Math.PI;
                     _mesh.position.set(16, 0, 0);
                     _scene.add(parent)
                     _mesh.status = 'open';
                }
            } 
        },
        {
            obj_name: 'master-bedroom-toilet-door',
            obj_event: function(_mesh, _scene) {
                if(_mesh.status === 'open') {
                     var parent = new THREE.Object3D();
                     parent.add(_mesh);
                     parent.position.set(46, -25, 160);
                     _mesh.position.set(16, 0, 0);
                     _scene.add(parent)
                     _mesh.status = 'close';
                }
                else {
                     var parent = new THREE.Object3D();
                     parent.add(_mesh);
                     parent.position.set(46, -25, 160);
                     parent.rotation.y = -0.5*Math.PI;
                     _mesh.position.set(16, 0, 0);
                     _scene.add(parent)
                     _mesh.status = 'open';
                }
            } 
        },
        {
            obj_name: 'second-bedroom-door',
            obj_event: function(_mesh, _scene) {
                if(_mesh.status === 'open') {
                     var parent = new THREE.Object3D();
                     parent.add(_mesh);
                     parent.position.set(-50, -25, 150);
                     parent.rotation.y = 0.5*Math.PI;
                     _mesh.position.set(0, 0, 0);
                     _mesh.rotation.y = 0;
                     _scene.add(parent)
                     _mesh.status = 'close';
                }
                else {
                     var parent = new THREE.Object3D();
                     parent.add(_mesh);
                     parent.position.set(-50, -25, 135);
                     parent.rotation.y = -0.8*Math.PI;
                     _mesh.position.set(15, 0, 0);
                     _mesh.rotation.y = 0;
                     _scene.add(parent)
                     _mesh.status = 'open';
                }
            } 
        },
        {
            obj_name: 'toilets-door',
            obj_event: function(_mesh, _scene) {
                if(_mesh.status === 'open') {
                     var parent = new THREE.Object3D();
                     parent.add(_mesh);
                     parent.position.set(-50, -25, 60);
                      parent.rotation.y = 0.5*Math.PI;
                     _mesh.position.set(0, 0, 0);
                     _mesh.rotation.y = 0;
                     _scene.add(parent)
                     _mesh.status = 'close';
                }
                else {
                     var parent = new THREE.Object3D();
                     parent.add(_mesh);
                     parent.position.set(-50, -25, 45);
                     parent.rotation.y = -0.7*Math.PI;
                     _mesh.position.set(15, 0, 0);
                     _mesh.rotation.y = 0;
                     _scene.add(parent)
                     _mesh.status = 'open';
                }
            }
        },
         {
             findObject:function(_objname){//查找某一类符合名称的对象
                 if (_objname.indexOf("cabinet") >= 0 && _objname.indexOf("door") >= 0) {
                     return true;
                 } else {
                     return false;
                 }
             },
             obj_uuid: "",
             obj_event: function (_obj) {
                 opcabinetdoor(_obj);
             }
         },
         {
             findObject: function (_objname) {//查找某一类符合名称的对象
                 if (_objname.indexOf("equipment") >= 0 && _objname.indexOf("card") >= 0) {
                     return true;
                 } else {
                     return false;
                 }
             },
             obj_uuid: "",
             obj_event: function (_obj) {
                 var cardstate = "in";
                 if (_obj.cardstate != null && typeof (_obj.cardstate) != 'undefined') {
                     cardstate = _obj.cardstate;
                 } else {
                     _obj.cardstate = "out";
                 }
                 new TWEEN.Tween(_obj.position).to({
                     x: (cardstate == "in" ? _obj.position.x - 50 : _obj.position.x + 50),
                 }, 1000).onComplete(function () { _obj.cardstate = cardstate == "in" ? "out" : "in"; }).start();
             }
         }
    ],
    mouseDown: {
    },
    mouseUp: {
    },
    mouseMove: {
    }
};
