# 展示一个3d球体
---

#### 源文件列表
> 1.[index.js](source/index.js)

> 2.[index.html](source/index.html)

> 3.[three.js](../../source/three.js)


#### 众所周知，要展示一个3d对象，一般会包含以下几个核心内容：
1. 场景
2. 摄像机
3. 渲染器
4. 灯光
5. 物体
#### THREE.js也不例外，亦是如此

> ### 代码分解


##
	var scene 
	function initScene(){
		scene = new THREE.Scene()
	}
> ###### 创建场景



##
	var camera
	function initCamera(){
		camera = new THREE.PerspectiveCamera(45,w/h,1,2000)
		camera.position.set(0,50,100)
		camera.up.seet(0,1,0)
		camera.lookAt({x:0,y:0,z:0})
	}
> ###### 创建摄像机



##
	var renderer
	function initRenderer(){
		renderer = new THREE.WebGLRenderer()
		renderer.setSize(w,h)
		document.body.appendChild(renderer.domElement)
	}
> ###### 创建渲染器




##
	var light
	function initLight(){
		light = new THREE.DirectionalLight(0xFFFFFF,1.0)
		light.position.set(200,200,200)
		scene.add(light)
	}
> ###### 创建灯光





##
	var sphere
	function initSphere(){
		var geometry = new THREE.SphereGeometry(20,20)
		var material = new THREE.MeshLambertMaterial(0xFF00FF)
		sphere = new THREE.Mesh(geometry,material)
		sphere.position.set(0,0,0)
		scene.add(sphere)
	}
> ###### 创建球体



##
	function render(){
		requestAnimationFrame(render)
		sphere.rotation.x += 0.1
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
> ###### 初始化，开始渲染