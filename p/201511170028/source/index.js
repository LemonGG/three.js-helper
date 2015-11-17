var _w = window.innerWidth
var _h = window.innerHeight

var scene = new THREE.Scene()

var camera = new THREE.PerspectiveCamera()
camera.position.set(0,-5,0)
// camera.lookAt({x:0,y:0,z:0})

var light = new THREE.DirectionalLight(0xFFFFFF,0.5)
light.position.set(0,50,100)
scene.add(light)

var renderer = new THREE.WebGLRenderer()
renderer.setSize(_w,_h)
renderer.setClearColor(0xFF0000)
document.body.appendChild(renderer.domElement)

var plane = new THREE.Mesh(new THREE.PlaneGeometry(10,10000,1,1),new THREE.MeshPhongMaterial({color:0xCCCCCC,specular:0x009900}))
scene.add(plane)
plane.rotation.x = -1.6
plane.position.y = -10
plane.position.x = 0
plane.position.z = -20

renderer.render(scene,camera)
// function render(){
// 	requestAnimationFrame(render)
// 	//camera.position.y += 0.1
// 	 camera.position.z -= 0.1
// 	 camera.position.z -= 0.1
// 	renderer.clear()
// 	renderer.render(scene,camera)	
// }

// render()

