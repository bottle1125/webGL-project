'use strict'

var THREE = require('n3d-threejs')
var floor = require('../../img/floor.jpg')
var door = require('../../img/doorL.jpg')

var objects = [{
	name: '地板',
	type: 'cube',
	size: [700, 5, 800],
	position: [0, -80, 0],
	style: {
		surfaceColor: 0x9cb2d1,
		surface: {
            surface_up: {
                surfaceColor: 0x98750f,
                imgurl: floor,
                repeatx: true,
                repeaty: true,
                width: 32,
                height: 32
            },
            surface_down: {
                surfaceColor: 0x8ac9e2,
            },
            surface_fore: {
                surfaceColor: 0x8ac9e2,
            }
        }
	}
}, {
	name: '墙面',
	type: 'cube',
	size: [500, 150, 10],
	position: [0, 0, 300],
	style: {
		surfaceColor: 0x9cb2d1,
		surface: {
            surface_up: {
                surfaceColor: 0xd6e4ec,
            },
            surface_down: {
                surfaceColor: 0xd6e4ec,
            }
        }
	}
}, {
	name: '墙面',
	type: 'cube',
	size: [610, 150, 10],
	position: [255, 0, 0],
	translate: 0.5*Math.PI,
	style: {
		surfaceColor: 0x9cb2d1,
		surface: {
            surface_up: {
                surfaceColor: 0xd6e4ec,
            },
            surface_down: {
                surfaceColor: 0xd6e4ec,
            }
        }
	}
}, {
	name: '墙面',
	type: 'cube',
	size: [610, 150, 10],
	position: [-250, 0, 0],
	translate: 0.5*Math.PI,
	style: {
		surfaceColor: 0x9cb2d1,
		surface: {
            surface_up: {
                surfaceColor: 0xd6e4ec,
            },
            surface_down: {
                surfaceColor: 0xd6e4ec,
            }
        }
	}
}, {
	name: '墙面',
	type: 'cube',
	size: [500, 150, 10],
	position: [0, 0, -300],
	style: {
		surfaceColor: 0x9cb2d1,
		surface: {
            surface_up: {
                surfaceColor: 0xd6e4ec,
            },
            surface_down: {
                surfaceColor: 0xd6e4ec,
            }
        }
	},
	childrens: [{
	    op: '-',
	    show: true,
	    uuid: "",
	    name: 'doorhole',
	    objType: 'doorhole',
	    size: [50, 80, 10],
	    position: [-95, -32, -300],
	    style: {
	    	surfaceColor: 0x9cb2d1,
		    surface: {
		        surface_up: {
		            skinColor: 0x9cb2d1,
		        },
		        surface_down: {
		            skinColor: 0x9cb2d1,
		        },
		        surface_fore: {
		            skinColor: 0x9cb2d1,
	            },
		        surface_behind: {
		            skinColor: 0x9cb2d1,
		        },
		        surface_left: {
		            skinColor: 0xffdddd,
		        },
		        surface_right: {
		            skinColor: 0x9cb2d1,
		        }
		    },
	    }
	}],
}, {
	name: '客厅分隔墙',
	type: 'cube',
	size: [220, 150, 10],
	position: [140, 0, -80],
	style: {
		surfaceColor: 0x9cb2d1,
		surface: {
            surface_up: {
                surfaceColor: 0xd6e4ec,
            },
            surface_down: {
                surfaceColor: 0xd6e4ec,
            }
        }
	}
}, {
	name: '客厅分隔墙',
	type: 'cube',
	size: [200, 150, 10],
	position: [-140, 0, -90],
	style: {
		surfaceColor: 0x9cb2d1,
		surface: {
            surface_up: {
                surfaceColor: 0xd6e4ec,
            },
            surface_down: {
                surfaceColor: 0xd6e4ec,
            }
        }
	}
}, {
	name: '次卧分隔墙',
	type: 'cube',
	size: [200, 150, 10],
	position: [-145, 0, 10],
	style: {
		surfaceColor: 0x9cb2d1,
		surface: {
            surface_up: {
                surfaceColor: 0xd6e4ec,
            },
            surface_down: {
                surfaceColor: 0xd6e4ec,
            }
        }
	}
}, {
	name: '书房分隔墙',
	type: 'cube',
	size: [220, 150, 10],
	position: [140, 0, 80],
	style: {
		surfaceColor: 0x9cb2d1,
		surface: {
            surface_up: {
                surfaceColor: 0xd6e4ec,
            },
            surface_down: {
                surfaceColor: 0xd6e4ec,
            }
        }
	}
}, {
	name: '走廊分隔墙A',
	type: 'cube',
	size: [280, 150, 10],
	position: [-50, 0, 155],
	translate: 0.5*Math.PI,
	style: {
		surfaceColor: 0x9cb2d1,
		surface: {
            surface_up: {
                surfaceColor: 0xd6e4ec,
            },
            surface_down: {
                surfaceColor: 0xd6e4ec,
            }
        }
	},
	childrens: [{
	    op: '-',
	    show: true,
	    uuid: "",
	    name: 'doorhole',
	    objType: 'doorhole',
	    size: [50, 60, 50],
	    position: [-50, 0, 60],
	    style: {
	    	surfaceColor: 0x9cb2d1,
		    surface: {
		        surface_up: {
		            skinColor: 0x9cb2d1,
		        },
		        surface_down: {
		            skinColor: 0x9cb2d1,
		        },
		        surface_fore: {
		            skinColor: 0x9cb2d1,
	            },
		        surface_behind: {
		            skinColor: 0x9cb2d1,
		        },
		        surface_left: {
		            skinColor: 0xffdddd,
		        },
		        surface_right: {
		            skinColor: 0x9cb2d1,
		        }
		    },
	    }
	}],
}, {
	name: '走廊分隔墙B',
	type: 'cube',
	size: [190, 150, 10],
	position: [-150, 0, 100],
	style: {
		surfaceColor: 0x9cb2d1,
		surface: {
            surface_up: {
                surfaceColor: 0xd6e4ec,
            },
            surface_down: {
                surfaceColor: 0xd6e4ec,
            }
        }
	},
}, {
	name: '主卧厕分隔墙A',
	type: 'cube',
	size: [140, 150, 10],
	position: [100, 0, 225],
	translate: 0.5*Math.PI,
	style: {
		surfaceColor: 0x9cb2d1,
		surface: {
            surface_up: {
                surfaceColor: 0xd6e4ec,
            },
            surface_down: {
                surfaceColor: 0xd6e4ec,
            }
        }
	},
}, {
	name: '主卧厕分隔墙B',
	type: 'cube',
	size: [66, 150, 10],
	position: [62, 0, 160],
	style: {
		surfaceColor: 0x9cb2d1,
		surface: {
            surface_up: {
                surfaceColor: 0xd6e4ec,
            },
            surface_down: {
                surfaceColor: 0xd6e4ec,
            }
        }
	},
}]


module.exports = objects;