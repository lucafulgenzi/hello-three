import * as THREE from 'three';
import gsap from 'gsap';
import g from "three/addons/libs/lil-gui.module.min.js";

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshNormalMaterial();
const mesh = new THREE.Mesh(geometry, material);


scene.add(mesh);
const sizes = { width: 1024, height: 768 }
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 10);
camera.position.z = 4;
camera.position.y = 1;


const renderer = new THREE.WebGLRenderer()
renderer.setSize(sizes.width, sizes.height);
document.body.appendChild(renderer.domElement);


const speed = 1.4;
// let time = Date.now();
let clock = new THREE.Clock();
mesh.scale.multiplyScalar(0)


requestAnimationFrame(animate)
function animate() {

    // const currentTime = Date.now();
    // const deltaTime = (currentTime - time) / 1000;
    // time = currentTime;
    const deltaTime = clock.getDelta();
    const time = clock.getElapsedTime();

    // mesh.rotation.x += speed * deltaTime;
    // mesh.rotation.y += speed * deltaTime;

    camera.position.y = Math.sin(time * speed);
    camera.lookAt(mesh.position);
    // mesh.position.x = Math.cos(time * speed);
    // mesh.position.z = Math.cos(time * speed);


    renderer.render(scene, camera);
    requestAnimationFrame(animate);

}

function pop(){
    gsap.to(mesh.scale, { duration: 1, x: 1, y: 1, z: 1 })
    gsap.to(mesh.rotation, { duration: 1, x: 3.14, y: 3.14, z: 3.14 })
}

window.addEventListener('click', pop)
