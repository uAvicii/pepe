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
camera.position.set(10, 30, -30)
// 将相机添加到场景之中
scene.add(camera)

// 引入第三方模型
const loader = new GLTFLoader()
export function loadModel() {
  loader.load('car/scene.gltf', function (gltf) {
    let car = gltf.scene
    car.position.set(3, 0, 3)
    scene.add(car)

    // 通过键盘实现对car的前进后退  左转后车头旋转 点击前进car朝车头方向前进
    let carForward = new Vector3(0, 0, 1)
    document.onkeydown = function (e) {
      // 判断同时按下 w 和 a 键
      if (e.keyCode === 87 && e.keyCode === 65) {
        console.log(1)
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
}
loadModel()

// 创建球体
const sphereGeometry = new THREE.SphereGeometry(1, 30, 30) // 设置球体的大小
const sphereMaterial = new THREE.MeshLambertMaterial({ color: 0x00ff00 }) // 设置球体的材质
// 根据几何体和材质创建物体
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
sphere.position.set(26, 26, 26)
// 将物体添加到场景之中
scene.add(sphere)

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
scene.add(rain)
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

// 3.添加物体，创建几何体
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
// 4.初始化渲染器
const renderer = new THREE.WebGLRenderer()
// 设置渲染的尺寸大小
renderer.setSize(window.innerWidth, window.innerHeight)
// 渲染阴影
renderer.shadowMap.enabled = true
// 将webgl渲染的canvas内容添加到body上
document.body.appendChild(renderer.domElement)
// // 使用渲染器，通过相机将场景渲染出来
// export const result = renderer.render(scene,camera)

// 创建地面网格参照
const planeGeometry = new THREE.PlaneGeometry(50, 50) // 平面几何的宽高
const PlaneMateial = new THREE.MeshLambertMaterial({ color: 0xf8f8ff }) // 几何平面的颜色
const plane = new THREE.Mesh(planeGeometry, PlaneMateial)
plane.rotation.x = -0.5 * Math.PI
plane.position.set(0, 0, 0)
plane.receiveShadow = true
scene.add(plane)

// 设置光源投影
const ambienLight = new THREE.AmbientLight(0xaaaaa)
scene.add(ambienLight)

// 设置光源
const spotLight = new THREE.SpotLight(0xffffff) // 设置聚光灯
spotLight.position.set(-60, 40, -65)
spotLight.castShadow = true //让聚光灯产生阴影
// 下面三行代码设置阴影效果
spotLight.shadow.mapSize = new THREE.Vector2(1024, 1024)
spotLight.shadow.camera.far = 130
spotLight.shadow.camera.near = 40
// 将阴影添加到场景中
scene.add(spotLight)

// 创建轨道控制器
new OrbitControls(camera, renderer.domElement)

// 添加坐标轴辅助器
// const axesHelper = new THREE.AxesHelper(5) // 数值代表线的长度
// scene.add(axesHelper) // 添加到场景之中

export function render() {
  cube.position.x += 0.01
  cube.rotation.x += 0.01
  if (cube.position.x > 5) {
    cube.position.x = 0
  }
  renderer.render(scene, camera)

  // 接下来渲染下一帧的时候就会调用render函数
  requestAnimationFrame(render)
  requestAnimationFrame(animateRain)
}

// 先开始就渲染一下
render()
