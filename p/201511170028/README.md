# 一条路面
---

#### 源文件列表
> 1.[index.js](source/index.js)

> 2.[index.html](source/index.html)

> 3.[three.js](../../source/three.js)


#### 本文主要内容就是创建一条路

##
	var plane = new THREE.Mesh(new THREE.PlaneGeometry(10,10000,1,1),new THREE.MeshPhongMaterial({color:0xCCCCCC,specular:0x009900}))
	scene.add(plane)
	plane.rotation.x = -1.6
	plane.position.y = -10
	plane.position.x = 0
	plane.position.z = -20

> ###### 参数可自行设置调节


> 本来想做成一个一直往前走的效果，试了几次，camera的参数不管怎么调不是不行，总是不能保持正常的画面，如果有人看到并且知道怎么处理，请不吝赐教，非常感谢，今天就行学到这了,88