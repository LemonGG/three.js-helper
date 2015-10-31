var __w = window.innerWidth
var __h = window.innerHeight


var scene = new THREE.Scene()

	var __scale = __w/__h
var camera = new THREE.PerspectiveCamera(75,__scale,0.1,1000)


var renderer = new THREE.WebGLRenderer()
renderer.setSize(__w,__h)
document.body.appendChild(renderer.domElement)

var geometry = new THREE.CubeGeometry( 1, 1, 1);
	var __color = Math.random()*0xFFFFFF
var material = new THREE.MeshBasicMaterial( { color: __color } );

var cube = new THREE.Mesh( geometry, material);
scene.add(cube)

camera.position.z = 5

function render(){
	cube.rotation.x += 0.1
	cube.rotation.y += 0.1
	renderer.render(scene,camera)
	requestAnimationFrame(render)
	console.log('running');
}
render()

