require('./assets/css/index.css')
var render = require('./assets/js/render.js')

render().then(() => {
	console.log('success!');
})
