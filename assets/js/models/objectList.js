'use strict'

var THREE = require('n3d-threejs')
var floor = require('../../img/floor.jpg')
var door = require('../../img/doorL.jpg')
var desk = require('../../img/desk.jpg')
var windowImg = require('../../img/windowL.jpg')
var door2 = require('../../img/door2.jpg')
var frame = require('../../img/frame-door2.jpg')

var objects = [{
	name: 'floor',
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
	name: 'wallA',
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
	},
	childrens:[{
		op: '-',
	    show: true,
	    uuid: "",
	    name: 'windowhole',
	    type: 'cube',
	    objType: 'windowhole',
	    size: [32, 64, 10],
	    position: [60, 30, 300],
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
	}]
}, {
	name: '主卧厕-窗户',
	type: 'cube',
	size: [32, 64, 2],
	position: [60, 30, 300],
	style: {
		surfaceColor: 0x9cb2d1,
		surface: {
			surface_right: {
				surfaceColor: 0x9cb2d1,
				imgurl: windowImg
			},
			surface_left: {
				surfaceColor: 0x9cb2d1,
				imgurl: windowImg
			}
		}
	}
}, {
	name: 'wallB',
	type: 'cube',
	size: [610, 150, 10],
	position: [255, 0, 0],
	rotation: [0, 0.5*Math.PI, 0],
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
	    name: 'windowhole',
	    type: 'cube',
	    objType: 'windowhole',
	    size: [64, 64, 10],
	    position: [255, 30, 0],
	    rotation: [0, 0.5*Math.PI, 0],
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
	}, {
		op: '-',
	    show: true,
	    uuid: "",
	    name: 'windowhole',
	    type: 'cube',
	    objType: 'windowhole',
	    size: [128, 128, 10],
	    position: [255, -10, -180],
	    rotation: [0, 0.5*Math.PI, 0],
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
	}, {
		op: '-',
	    show: true,
	    uuid: "",
	    name: 'windowhole',
	    type: 'cube',
	    objType: 'windowhole',
	    size: [128, 128, 10],
	    position: [255, -10, 180],
	    rotation: [0, 0.5*Math.PI, 0],
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
	}]
}, {
	name: 'living-room-doorB',
	type: 'cube',
	size: [32, 128, 2],
	position: [255, -10, -162],
	rotation: [0, 0.5*Math.PI, 0],
	status: 'close',
	style: {
		surfaceColor: 0x7e1414,
		surface: {
			surface_right: {
				surfaceColor: 0xffff00,
				imgurl: frame,
				repeatx: false,
				repeaty: false,
				transparent: true,
				opacity: 0.5
			},
			surface_left: {
				surfaceColor: 0xffff00,
				imgurl: frame,
				repeatx: false,
				repeaty: false,
				transparent: true,
				opacity: 0.5
			},
		}
	}
}, {
	name: 'living-room-doorC',
	type: 'cube',
	size: [32, 128, 2],
	position: [255, -10, -195],
	rotation: [0, 0.5*Math.PI, 0],
	status: 'close',
	style: {
		surfaceColor: 0x7e1414,
		surface: {
			surface_right: {
				surfaceColor: 0xffff00,
				imgurl: frame,
				repeatx: false,
				repeaty: false,
				transparent: true,
				opacity: 0.5
			},
			surface_left: {
				surfaceColor: 0xffff00,
				imgurl: frame,
				repeatx: false,
				repeaty: false,
				transparent: true,
				opacity: 0.5
			},
		}
	}
}, {
	name: 'living-room-doorA',
	type: 'cube',
	size: [32, 128, 2],
	position: [255, -10, -133],
	rotation: [0, 0.5*Math.PI, 0],
	status: 'close',
	style: {
		surfaceColor: 0x7e1414,
		surface: {
			surface_right: {
				surfaceColor: 0xffff00,
				imgurl: frame,
				repeatx: false,
				repeaty: false,
				transparent: true,
				opacity: 0.5
			},
			surface_left: {
				surfaceColor: 0xffff00,
				imgurl: frame,
				repeatx: false,
				repeaty: false,
				transparent: true,
				opacity: 0.5
			},
		}
	}
}, {
	name: 'living-room-doorD',
	type: 'cube',
	size: [32, 128, 2],
	position: [255, -10, -225],
	rotation: [0, 0.5*Math.PI, 0],
	status: 'close',
	style: {
		surfaceColor: 0x7e1414,
		surface: {
			surface_right: {
				surfaceColor: 0xffff00,
				imgurl: frame,
				repeatx: false,
				repeaty: false,
				transparent: true,
				opacity: 0.5
			},
			surface_left: {
				surfaceColor: 0xffff00,
				imgurl: frame,
				repeatx: false,
				repeaty: false,
				transparent: true,
				opacity: 0.5
			},
		}
	}
}, {
	name: 'master-bedroom-doorA',
	type: 'cube',
	size: [32, 128, 2],
	position: [255, -12, 227],
	rotation: [0, 0.5*Math.PI, 0],
	status: 'close',
	style: {
		surfaceColor: 0x7e1414,
		surface: {
			surface_right: {
				surfaceColor: 0xffff00,
				imgurl: frame,
				repeatx: false,
				repeaty: false,
				transparent: true,
				opacity: 0.5
			},
			surface_left: {
				surfaceColor: 0xffff00,
				imgurl: frame,
				repeatx: false,
				repeaty: false,
				transparent: true,
				opacity: 0.5
			},
		}
	}
}, {
	name: 'master-bedroom-doorB',
	type: 'cube',
	size: [32, 128, 2],
	position: [255, -12, 193],
	rotation: [0, 0.5*Math.PI, 0],
	status: 'close',
	style: {
		surfaceColor: 0x7e1414,
		surface: {
			surface_right: {
				surfaceColor: 0xffff00,
				imgurl: frame,
				repeatx: false,
				repeaty: false,
				transparent: true,
				opacity: 0.5
			},
			surface_left: {
				surfaceColor: 0xffff00,
				imgurl: frame,
				repeatx: false,
				repeaty: false,
				transparent: true,
				opacity: 0.5
			},
		}
	}
}, {
	name: 'master-bedroom-doorC',
	type: 'cube',
	size: [32, 128, 2],
	position: [255, -12, 163],
	rotation: [0, 0.5*Math.PI, 0],
	status: 'close',
	style: {
		surfaceColor: 0x7e1414,
		surface: {
			surface_right: {
				surfaceColor: 0xffff00,
				imgurl: frame,
				repeatx: false,
				repeaty: false,
				transparent: true,
				opacity: 0.5
			},
			surface_left: {
				surfaceColor: 0xffff00,
				imgurl: frame,
				repeatx: false,
				repeaty: false,
				transparent: true,
				opacity: 0.5
			},
		}
	}
}, {
	name: 'master-bedroom-doorD',
	type: 'cube',
	size: [32, 128, 2],
	position: [255, -12, 133],
	rotation: [0, 0.5*Math.PI, 0],
	status: 'close',
	style: {
		surfaceColor: 0x7e1414,
		surface: {
			surface_right: {
				surfaceColor: 0xffff00,
				imgurl: frame,
				repeatx: false,
				repeaty: false,
				transparent: true,
				opacity: 0.5
			},
			surface_left: {
				surfaceColor: 0xffff00,
				imgurl: frame,
				repeatx: false,
				repeaty: false,
				transparent: true,
				opacity: 0.5
			},
		}
	}
}, {
	name: 'study-windowA',
	type: 'cube',
	size: [32, 64, 2],
	position: [255, 30, 10],
	rotation: [0, 0.5*Math.PI, 0],
	status: 'open',
	style: {
		surfaceColor: 0x9cb2d1,
		surface: {
			surface_right: {
				surfaceColor: 0x9cb2d1,
				imgurl: windowImg
			},
			surface_left: {
				surfaceColor: 0x9cb2d1,
				imgurl: windowImg
			}
		}
	}
}, {
	name: 'study-windowB',
	type: 'cube',
	size: [32, 64, 2],
	position: [255, 30, -5],
	rotation: [0, 0.5*Math.PI, 0],
	status: 'open',
	style: {
		surfaceColor: 0x9cb2d1,
		surface: {
			surface_right: {
				surfaceColor: 0x9cb2d1,
				imgurl: windowImg
			},
			surface_left: {
				surfaceColor: 0x9cb2d1,
				imgurl: windowImg
			}
		}
	}
}, {
	name: 'wallC',
	type: 'cube',
	size: [610, 150, 10],
	position: [-250, 0, 0],
	rotation: [0, 0.5*Math.PI, 0],
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
	    name: 'windowhole',
	    type: 'cube',
	    objType: 'windowhole',
	    size: [64, 64, 10],
	    position: [-250, 30, -100],
	    rotation: [0, 0.5*Math.PI, 0],
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
	}, {
		op: '-',
	    show: true,
	    uuid: "",
	    name: 'windowhole',
	    type: 'cube',
	    objType: 'windowhole',
	    size: [32, 64, 10],
	    position: [-250, 30, 60],
	    rotation: [0, 0.5*Math.PI, 0],
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
	}, {
		op: '-',
	    show: true,
	    uuid: "",
	    name: 'windowhole',
	    type: 'cube',
	    objType: 'windowhole',
	    size: [64, 64, 10],
	    position: [-250, 30, 200],
	    rotation: [0, 0.5*Math.PI, 0],
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
	}]
}, {
	name: 'kitchen-windowA',
	type: 'cube',
	size: [32, 64, 2],
	position: [-253, 30, -100],
	rotation: [0, 0.5*Math.PI, 0],
	status: 'open',
	style: {
		surfaceColor: 0x9cb2d1,
		surface: {
			surface_right: {
				surfaceColor: 0x9cb2d1,
				imgurl: windowImg
			},
			surface_left: {
				surfaceColor: 0x9cb2d1,
				imgurl: windowImg
			}
		}
	}
}, {
	name: 'kitchen-windowB',
	type: 'cube',
	size: [32, 64, 2],
	position: [-253, 30, -85],
	rotation: [0, 0.5*Math.PI, 0],
	style: {
		surfaceColor: 0x9cb2d1,
		surface: {
			surface_right: {
				surfaceColor: 0x9cb2d1,
				imgurl: windowImg
			},
			surface_left: {
				surfaceColor: 0x9cb2d1,
				imgurl: windowImg
			}
		}
	}
}, {
	name: 'toilets-window',
	type: 'cube',
	size: [32, 64, 2],
	position: [-253, 30, 60],
	rotation: [0, 0.5*Math.PI, 0],
	status: 'close',
	style: {
		surfaceColor: 0x9cb2d1,
		surface: {
			surface_right: {
				surfaceColor: 0x9cb2d1,
				imgurl: windowImg
			},
			surface_left: {
				surfaceColor: 0x9cb2d1,
				imgurl: windowImg
			}
		}
	}
}, {
	name: 'second-bedroom-windowA',
	type: 'cube',
	size: [32, 64, 2],
	position: [-253, 30, 180],
	rotation: [0, 0.5*Math.PI, 0],
	status: 'close',
	style: {
		surfaceColor: 0x9cb2d1,
		surface: {
			surface_right: {
				surfaceColor: 0x9cb2d1,
				imgurl: windowImg
			},
			surface_left: {
				surfaceColor: 0x9cb2d1,
				imgurl: windowImg
			}
		}
	}
}, {
	name: 'second-bedroom-windowB',
	type: 'cube',
	size: [32, 64, 2],
	position: [-253, 30, 210],
	rotation: [0, 0.5*Math.PI, 0],
	style: {
		surfaceColor: 0x9cb2d1,
		surface: {
			surface_right: {
				surfaceColor: 0x9cb2d1,
				imgurl: windowImg
			},
			surface_left: {
				surfaceColor: 0x9cb2d1,
				imgurl: windowImg
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
	    type: 'cube',
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
	name: 'main-door',
	type: 'cube',
	size: [50, 80, 2],
	position: [-95, -32, -300],
	status: 'close',
	style: {
		surfaceColor: 0x996967,
	    surface: {
	        surface_left: {
	            skinColor: 0xd6e4ec,
	            imgurl: door,
	            repeatx: false,
	            repeaty: false,
	            width: 50,
	            height: 80,
	        },
	        surface_right: {
	            skinColor: 0x9cb2d1,
	            imgurl: door,
	            repeatx: false,
	            repeaty: false,
	            width: 50,
	            height: 80
	        }
	    },
	}
}, {
	name: 'partition-wallA',
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
	},
}, {
	name: 'bar',
	type: 'cube',
	size: [200, 5, 25],
	position: [-140, 40, -90],
	rotation: [0, 0.5*Math.PI, 0],
	style: {
		surfaceColor: 0x9cb2d1,
		surface: {
            surface_up: {
                surfaceColor: 0xd6e4ec,
                imgurl: desk
            },
            surface_down: {
                surfaceColor: 0xd6e4ec,
                imgurl: desk
            },
            surface_fore: {
                surfaceColor: 0xd6e4ec,
                imgurl: desk
            },
            surface_behind: {
                surfaceColor: 0xd6e4ec,
                imgurl: desk
            },
            surface_right: {
            	surfaceColor: 0xd6e4ec,
            	imgurl: desk
            },
            surface_left: {
            	surfaceColor: 0xd6e4ec,
            	imgurl: desk
            }
        }
	},
}, {
	name: 'bar-legA',
	type: 'cube',
	size: [5, 120, 5],
	position: [-150, -20, -185],
	style: {
		surfaceColor: 0x9cb2d1,
		surface: {
			surface_left: {
            	surfaceColor: 0xd6e4ec,
            	imgurl: desk
            },
            surface_right: {
            	surfaceColor: 0xd6e4ec,
            	imgurl: desk
            },
            surface_up: {
            	surfaceColor: 0xd6e4ec,
            	imgurl: desk
            },
            surface_fore: {
            	surfaceColor: 0xd6e4ec,
            	imgurl: desk
            },
            surface_behind: {
            	surfaceColor: 0xd6e4ec,
            	imgurl: desk
            }
		}
	}
}, {
	name: 'bar-legB',
	type: 'cube',
	size: [5, 120, 5],
	position: [-135, -20, -185],
	style: {
		surfaceColor: 0x9cb2d1,
		surface: {
			surface_left: {
            	surfaceColor: 0xd6e4ec,
            	imgurl: desk
            },
            surface_right: {
            	surfaceColor: 0xd6e4ec,
            	imgurl: desk
            },
            surface_up: {
            	surfaceColor: 0xd6e4ec,
            	imgurl: desk
            },
            surface_fore: {
            	surfaceColor: 0xd6e4ec,
            	imgurl: desk
            },
            surface_behind: {
            	surfaceColor: 0xd6e4ec,
            	imgurl: desk
            }
		}
	}
}, {
	name: 'partition-wallB',
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
	name: 'partition-wallC',
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
	},
}, {
	name: 'partition-wallD',
	type: 'cube',
	size: [280, 150, 10],
	position: [-50, 0, 155],
	rotation: [0, 0.5*Math.PI, 0],
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
	    type: 'cube',
	    objType: 'doorhole',
	    size: [32, 100, 10],
	    position: [-50, -25, 150],
	    rotation: [0, -0.5*Math.PI, 0],
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
	}, {
	    op: '-',
	    show: true,
	    uuid: "",
	    name: 'doorhole',
	    type: 'cube',
	    objType: 'doorhole',
	    size: [32, 100, 10],
	    position: [-50, -25, 60],
	    rotation: [0, -0.5*Math.PI, 0],
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
	},],
}, {
	name: 'second-bedroom-door',
	type: 'cube',
	size: [32, 100, 2],
	position: [-50, -25, 150],
	rotation: [0, 0.5*Math.PI, 0],
	style: {
		surfaceColor: 0xE2CCA2,
		surface: {
			surface_right: {
				surfaceColor: 0x9cb2d1,
				imgurl: door2
			},
			surface_left: {
				surfaceColor: 0x9cb2d1,
				imgurl: door2
			}
		}
	}
}, {
	name: 'toilets-door',
	type: 'cube',
	size: [32, 100, 2],
	position: [-50, -25, 60],
	rotation: [0, 0.5*Math.PI, 0],
	style: {
		surfaceColor: 0xE2CCA2,
		surface: {
			surface_right: {
				surfaceColor: 0x9cb2d1,
				imgurl: door2
			},
			surface_left: {
				surfaceColor: 0x9cb2d1,
				imgurl: door2
			}
		}
	}
}, 
{
	name: 'partition-wallE',
	type: 'cube',
	size: [380, 150, 10],
	position: [25, 0, 105],
	rotation: [0, 0.5*Math.PI, 0],
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
	    type: 'cube',
	    size: [32, 100, 10],
	    position: [25, -25, 30],
	    rotation: [0, 0.5*Math.PI, 0],
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
	}, {
	    op: '-',
	    show: true,
	    uuid: "",
	    name: 'doorhole',
	    objType: 'doorhole',
	    type: 'cube',
	    size: [32, 100, 10],
	    position: [25, -25, 130],
	    rotation: [0, 0.5*Math.PI, 0],
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
	name: 'study-door',
	type: 'cube',
	size: [32, 100, 2],
	position: [25, -25, 30],
	rotation: [0, 0.5*Math.PI, 0],
	status: 'close',
	style: {
		surfaceColor: 0xE2CCA2,
		surface: {
			surface_right: {
				surfaceColor: 0x9cb2d1,
				imgurl: door2
			},
			surface_left: {
				surfaceColor: 0x9cb2d1,
				imgurl: door2
			}
		}
	}
}, {
	name: 'living-room-door',
	type: 'cube',
	size: [32, 100, 2],
	position: [25, -25, 130],
	rotation: [0, 0.5*Math.PI, 0],
	status: 'close',
	style: {
		surfaceColor: 0xE2CCA2,
		surface: {
			surface_right: {
				surfaceColor: 0x9cb2d1,
				imgurl: door2
			},
			surface_left: {
				surfaceColor: 0x9cb2d1,
				imgurl: door2
			}
		}
	}
},{
	name: 'partition-wallF',
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
	name: 'partition-wallG',
	type: 'cube',
	size: [140, 150, 10],
	position: [100, 0, 225],
	rotation: [0, 0.5*Math.PI, 0],
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
	name: 'partition-wallH',
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
	childrens: [{
	    op: '-',
	    show: true,
	    uuid: "",
	    name: 'doorhole',
	    type: 'cube',
	    objType: 'doorhole',
	    size: [32, 100, 10],
	    position: [62, -25, 160],
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
	}]
},{
	name: 'master-bedroom-toilet-door',
	type: 'cube',
	size: [32, 100, 2],
	position: [62, -25, 160],
	status: 'close',
	style: {
		surfaceColor: 0xE2CCA2,
		surface: {
			surface_right: {
				surfaceColor: 0x9cb2d1,
				imgurl: door2
			},
			surface_left: {
				surfaceColor: 0x9cb2d1,
				imgurl: door2
			}
		}
	}
},]


module.exports = objects;