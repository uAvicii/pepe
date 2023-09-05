import * as THREE from 'three'
import { Vector3, Euler } from 'three'

// 导入轨道控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

// 1.创建场景
const scene = new THREE.Scene()
// 2.创建相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
// 设置x、y、z轴坐标，即设置相机位置
camera.position.set(-10, 20, -40)
// 将相机添加到场景之中
scene.add(camera)

// 引入第三方模型
const loader = new GLTFLoader()
export function loadModel() {
  loader.load('./isColorCar/scene.gltf', function (gltf) {
    let car = gltf.scene
    car.position.set(3, 0, 3)
    car.castShadow = true
    car.receiveShadow = true
    scene.add(car)

    // 通过键盘实现对car的前进后退  左转后车头旋转 点击前进car朝车头方向前进
    let carForward = new Vector3(0, 0, 1)
    let aKeyPressed = false
    let bKeyPressed = false
    document.onkeydown = function (e) {
      if (e.key === 'w') {
        aKeyPressed = true
      } else if (e.key === 'a') {
        bKeyPressed = true
      }
      if (aKeyPressed && bKeyPressed) {
        // 执行你的函数或逻辑
        console.log('同时按下了A和B键')

        // 重置键的状态
        aKeyPressed = false
        bKeyPressed = false
      }

      let x
      let z
      switch (e.keyCode) {
        // 左转时更新前进方向向量
        case 65:
          car.rotation.y += 0.1
          carForward.x = Math.sin(car.rotation.y)
          carForward.z = Math.cos(car.rotation.y)
          break

        // 右转时更新前进方向向量
        case 68:
          car.rotation.y -= 0.1
          carForward.x = Math.sin(car.rotation.y)
          carForward.z = Math.cos(car.rotation.y)
          break

        // 前进时使用更新后的前进方向向量
        case 87:
          x = carForward.x * 0.3
          z = carForward.z * 0.3
          car.position.x += x
          car.position.z += z
          break

        // 后退使用反方向
        case 83:
          x = -carForward.x * 0.3
          z = -carForward.z * 0.3
          car.position.x += x
          car.position.z += z
          break
      }
    }
    document.onkeyup = function (event) {
      if (event.key === 'a') {
        aKeyPressed = false
      } else if (event.key === 'w') {
        bKeyPressed = false
      }
    }

    // 设置car的动画效果 循环执行
    function animateCar() {
      car.position.z += 0.05
      // car.position.x = 0
      // car.position.y = 0
      if (car.position.z > 13) {
        // 旋转九十度
        car.rotation.y = Math.PI / 2
        // 停止动画 向x轴移动
        car.position.z = 13
        car.position.x += 0.05
        if (car.position.x > 13) {
          // 停止动画 向z轴移动
          car.rotation.y = Math.PI / 1
          car.position.x = 13
          car.position.z -= 0.1
        }
      }
      requestAnimationFrame(animateCar)
    }
    // animateCar()
  })
  loader.load('./spider/scene.gltf', function (spider) {
    let spiderModel = spider.scene
    spiderModel.position.set(-25, 0, -25)
    spiderModel.scale.set(3, 3, 3)
    spiderModel.castShadow = true
    spiderModel.receiveShadow = true
    scene.add(spiderModel)
  })
  loader.load('./spider/scene.gltf', function (spiders) {
    let spiderModels = spiders.scene
    spiderModels.position.set(-25, 0, 25)
    // 旋转九十度
    spiderModels.rotation.y = Math.PI / 2
    spiderModels.scale.set(3, 3, 3)
    spiderModels.castShadow = true
    spiderModels.receiveShadow = true
    scene.add(spiderModels)
  })
  loader.load('./vr_sunroom_hallway/scene.gltf', function (gltf) {
    let vr = gltf.scene
    vr.position.set(19, 0, 0)
    vr.scale.set(2, 2, 2)
    vr.castShadow = true
    vr.receiveShadow = true
    scene.add(vr)
  })
}
loadModel()

// 创建球体 地球
const sphereGeometry = new THREE.SphereGeometry(1, 30, 30) // 设置球体的大小
// 纹理贴图
const textureLoader = new THREE.TextureLoader()
const texture = textureLoader.load('./earth.jpg')
const sphereMaterial = new THREE.MeshLambertMaterial({ map: texture }) // 设置球体的材质
// 根据几何体和材质创建物体
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
sphere.position.set(26, 26, 26)
// 将物体添加到场景之中
scene.add(sphere)

// 创建球体 太阳
const sunGeometry = new THREE.SphereGeometry(3, 30, 30) // 设置球体的大小
const sunMaterial = new THREE.MeshLambertMaterial({ color: 'gold' }) // 设置球体的材质
// 根据几何体和材质创建物体
const sun = new THREE.Mesh(sunGeometry, sunMaterial)
sun.position.set(36, 36, 36)
// 将物体添加到场景之中
scene.add(sun)

// 创建球体 火星
const marsGeometry = new THREE.SphereGeometry(1, 30, 30) // 设置球体的大小
const marsMaterial = new THREE.MeshLambertMaterial({ color: 'gray' }) // 设置球体的材质
// 根据几何体和材质创建物体
const mars = new THREE.Mesh(marsGeometry, marsMaterial)
mars.position.set(26, 35, 26)
// 将物体添加到场景之中
scene.add(mars)

// 创建球体 水星
const mercuryGeometry = new THREE.SphereGeometry(1, 30, 30) // 设置球体的大小
const mercuryMaterial = new THREE.MeshLambertMaterial({ color: 'pink' }) // 设置球体的材质
// 根据几何体和材质创建物体
const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial)
mercury.position.set(33, 27, 20)
// 将物体添加到场景之中
scene.add(mercury)

// 创建球体 金星
const venusGeometry = new THREE.SphereGeometry(1, 30, 30) // 设置球体的大小
const venusMaterial = new THREE.MeshLambertMaterial({ color: 'purple' }) // 设置球体的材质
// 根据几何体和材质创建物体
const venus = new THREE.Mesh(venusGeometry, venusMaterial)
venus.position.set(20, 26, 33.5)
// 将物体添加到场景之中
scene.add(venus)

// 创建球体 木星
const jupiterGeometry = new THREE.SphereGeometry(2, 30, 30) // 设置球体的大小
const jupiterMaterial = new THREE.MeshLambertMaterial({ color: 'hotpink' }) // 设置球体的材质
// 根据几何体和材质创建物体
const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial)
jupiter.position.set(30, 20, 30)
// 将物体添加到场景之中
scene.add(jupiter)

// 创建一个下雨的效果 通过粒子系统来实现
const rainGeo = new THREE.BufferGeometry() // 创建一个几何体
const rainCount = 15000 // 设置雨滴的数量
// 设置雨滴的位置
const positions = new Float32Array(rainCount * 3)
for (let i = 0; i < rainCount * 3; i++) {
  positions[i] = (Math.random() - 0.5) * 100
}
rainGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3)) // 设置几何体的位置
// 设置雨滴的材质
const rainMaterial = new THREE.PointsMaterial({
  color: 0xaaaaaa,
  size: 0.1,
  transparent: true
})
const rain = new THREE.Points(rainGeo, rainMaterial)
// scene.add(rain)
// 雨滴的动画效果
function animateRain() {
  const positions = rainGeo.attributes.position.array
  for (let i = 0; i < positions.length; i++) {
    if (i % 3 === 1) {
      positions[i] -= 0.1
    }
    if (positions[i] < -50) {
      positions[i] = 50
    }
  }
  rainGeo.attributes.position.needsUpdate = true
  rain.rotation.y += 0.002
}
animateRain()

// 添加物体，创建几何体
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1) // 设置几何体大小
const cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000 }) // 设置几何体材质
// 根据几何体和材质创建物体
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
// 修改物体的位置
// cube.position.set(5,0,0)
cube.position.y = 1.5
// 实现物体的缩放
cube.scale.set(3, 2, 1) // x、y、z轴的缩放倍数
// Math.PI是180度，rotation也是以x、y、z进行设置
cube.rotation.set(Math.PI / 4, 0, 0, 'XYZ')
cube.castShadow = true
// 将几何体添加到场景之中
scene.add(cube)

// 初始化渲染器
const renderer = new THREE.WebGLRenderer()
// 设置渲染的尺寸大小
renderer.setSize(window.innerWidth, window.innerHeight)
// 渲染阴影
renderer.shadowMap.enabled = true
// 将webgl渲染的canvas内容添加到body上
document.body.appendChild(renderer.domElement)
// // 使用渲染器，通过相机将场景渲染出来
export const result = renderer.render(scene, camera)

// 创建地面网格参照
const planeGeometry = new THREE.PlaneGeometry(50, 50) // 平面几何的宽高
const PlaneMateial = new THREE.MeshPhongMaterial({ color: '#1e1e1e' }) // 几何平面的颜色
const plane = new THREE.Mesh(planeGeometry, PlaneMateial)
plane.rotation.x = -0.5 * Math.PI
plane.position.set(0, 0, 0)
plane.receiveShadow = true
scene.add(plane)

// 设置光源投影
const ambienLight = new THREE.AmbientLight('#fff')
scene.add(ambienLight)

// 聚光光源
const spotLight = new THREE.SpotLight('purple', 5)
// 设置聚光光源位置
spotLight.position.set(36, 36, 36)
// 聚光灯光源指向网格模型
spotLight.target = plane
// 设置聚光光源发散角度
spotLight.angle = Math.PI / 6
// 设置聚光光源的阴影
spotLight.castShadow = true
// 设置聚光光源阴影的分辨率
spotLight.shadow.mapSize.width = 2048
spotLight.shadow.mapSize.height = 2048
// 设置聚光光源的阴影范围
// let cam = spotLight.shadow.camera
//光对象添加到scene场景中
scene.add(spotLight)
const spotLightHelp = new THREE.SpotLightHelper(spotLight)
scene.add(spotLightHelp)

// 创建轨道控制器
new OrbitControls(camera, renderer.domElement)

// 添加坐标轴辅助器
const axesHelper = new THREE.AxesHelper(50) // 数值代表线的长度
scene.add(axesHelper) // 添加到场景之中

export function render() {
  cube.position.x += 0.01
  cube.rotation.x += 0.01
  if (cube.position.x > 20) {
    cube.position.x = 0
  }
  renderer.render(scene, camera)

  // 接下来渲染下一帧的时候就会调用render函数
  requestAnimationFrame(render)
  requestAnimationFrame(animateRain)
}

// 先开始就渲染一下
render()
