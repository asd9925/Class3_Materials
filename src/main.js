import './style.css'
import * as THREE from 'three'
//call helper function
import {addDefaultMeshes} from './addDefaultMeshes'
import {addStandardMeshes} from './addStandardMeshes'
import {addPhongMeshes} from './addPhongMeshes'
import {addLambertMeshes} from './addLambertMeshes'
import { addPhysicalMeshes } from './addPhysicalMeshes'

//referencing scene in THREE library (anything with THREE prefix is refering something in the THREE library)
//THREE.Scene

//calling three library with our own variable scene
const scene = new THREE.Scene();

//FOV, ASPECT RATIO, NEAR, FAR
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

//antialias makes rendering smoother, less pixels, just turn on by default
const renderer = new THREE.WebGLRenderer({ antialias: true});

//set up over, now add things to scene
//meshes means something 3d btw
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color: 0xff0000});
// const mesh = new THREE.Mesh(geometry, material);

// //call function
// const mesh = addDefaultMeshes();
// //now add mesh to scene (pass thing you're adding in argument)
// //won't add things to scene manually
// scene.add(mesh);

//global function, curly brackets means object (currently empty)
const meshes = {}

init();
//all setup stuff goes here
function init(){
  //render full screen (choose size, can change)
  renderer.setSize(window.innerWidth, window.innerHeight)
  //created screen caputre, drew image, so put it on the screen
  document.body.appendChild(renderer.domElement);

  //by defalt everything is at 0,0,0 so move your camera back by 5
  camera.position.z = 5;

  //Lights
  //colour and intensity as arguments
  const keyLight = new THREE.DirectionalLight(0xffffff, 2)
  keyLight.position.set(5, 5, 5);
  scene.add(keyLight)
  //add light beam to know where it comes from
  const keyHelper = new THREE.DirectionalLightHelper(keyLight, 5)
  scene.add(keyHelper)

  //point is like a little light particle shooting light in all directions
  //third argument is distance light travels (how far from point), then past the point how fast does light fade out = decay
  const rimLight = new THREE.PointLight(0xff77ff, 5, 20)
  rimLight.position.set(-3,2,7)
  scene.add(rimLight)
  //add light beam to know where it comes from
  const rimLightHelper = new THREE.PointLightHelper(rimLight, 0.6)
	scene.add(rimLightHelper)

  
  const fillLight = new THREE.PointLight(0xffffff,1)
  fillLight.position.set(2,2,2)
  scene.add(fillLight)
  //add light beam to know where it comes from

  //Materials test
  //call function (creates standard mesh and stores it in object)
  meshes.standard = addStandardMeshes()
  scene.add(meshes.standard)

  meshes.phong = addPhongMeshes()
  meshes.phong.position.x = 2
  scene.add(meshes.phong)

  meshes.lambert = addLambertMeshes()
  meshes.lambert.position.x = -2
  scene.add(meshes.lambert)

  meshes.physical = addPhysicalMeshes()
  meshes.physical.position.x = 4
  scene.add(meshes.physical)

  console.log(meshes)

  animate();
}

function animate(){

  //create loop
  requestAnimationFrame(animate);

  //tell renderer to render whats in arguments (current scene and camera)
  renderer.render(scene, camera);

  //rotate cube on x-axis
  // mesh.rotation.x += 0.1

  //tell renderer to render whats in arguments (current scene and camera)
  renderer.render(scene, camera);

  meshes.standard.rotation.y += 0.05
  meshes.phong.rotation.y += 0.05
  meshes.lambert.rotation.y += 0.05
  meshes.physical.rotation.y += 0.05
}