import * as THREE from 'three'

// 导入轨道控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

// 1.创建场景
const scene = new THREE.Scene()
// 2.创建相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
// 设置x、y、z轴坐标，即设置相机位置
camera.position.set(0, 0, 10)
// 将相机添加到场景之中
scene.add(camera)
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
const planeGeometry = new THREE.PlaneGeometry(30, 30) // 平面几何的宽高
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
const axesHelper = new THREE.AxesHelper(5) // 数值代表线的长度
scene.add(axesHelper) // 添加到场景之中

export function render() {
  cube.position.x += 0.01
  cube.rotation.x += 0.01
  if (cube.position.x > 5) {
    cube.position.x = 0
  }
  renderer.render(scene, camera)
  // 接下来渲染下一帧的时候就会调用render函数
  requestAnimationFrame(render)
}
// 先开始就渲染一下
render()
