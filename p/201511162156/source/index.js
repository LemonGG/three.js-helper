var width = window.innerWidth
var height = window.innerHeight


var scene 
function initScene(){
	scene = new THREE.Scene()
}



var camera 
function initCamera(){
	var fov = 45
	var aspect = width/height
	var near = 1
	var far = 2000
	camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
	camera.position.x = 0
	camera.position.y = 50
	camera.position.z = 100
	camera.up.x = 0
	camera.up.y = 1
	camera.up.z = 0
	camera.lookAt({x:0,y:0,z:0})
}



var renderer 
function initRenderer(){
	var parameters = {antialias:true}
	renderer = new THREE.WebGLRenderer( parameters );
	renderer.setSize(width,height)
	document.body.appendChild(renderer.domElement)
}



var light 
function initLight(){
	var hex = 0xFFFFFF
	var intensity = 1.0
	light = new THREE.DirectionalLight( hex, intensity );
	light.position.set(200,200,200)
	scene.add(light)
}




var sphere
function initSphere(){
	var radius = 20
	var segmentsWidth = 20
	var color = 0xFF00FF
	var geometry = new THREE.SphereGeometry( radius, segmentsWidth);
	var material = new THREE.MeshLambertMaterial( color);
	sphere = new THREE.Mesh( geometry, material);
	scene.add(sphere)
	sphere.position.set(0,0,0)
}






function render(){
	requestAnimationFrame(render)
	sphere.rotation.x += 0.01
	//sphere.rotation.y += 0.1
	renderer.clear()
	renderer.render(scene,camera)
}
function run(){
	initScene()
	initCamera()
	initRenderer()
	initLight()
	initSphere()
	render()
}


run()