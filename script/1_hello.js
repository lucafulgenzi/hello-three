import * as THREE from 'three';

// The base of three.js
const scene = new THREE.Scene();

/*
    Every object in three.js is a mesh.
    Mesh is a combination of geometry and material
* */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshNormalMaterial();
const mesh = new THREE.Mesh(geometry, material);

// Add mesh to the scene
scene.add(mesh);

const sizes = { width: 720, height: 400 }

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 10);
/*
    For default camera and object are at the same position (0, 0, 0).
    So we need to move the camera back to see the object.
* */
camera.position.z = 4;


/*
*   Renderer is the one that renders the scene and camera to the screen.
*   We need to set the size of the renderer.
*   We also need to append the renderer to the DOM.
*
* */
const renderer = new THREE.WebGLRenderer()
renderer.setSize(sizes.width, sizes.height);
document.body.appendChild(renderer.domElement);

/*
*   Request animation frame is a function that calls a function every frame.
*   We need to pass the animate function to the requestAnimationFrame.
*   The animate function will be called every frame.
* */
requestAnimationFrame(animate)
function animate() {

    // Render the scene and camera
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
    // mesh.position.y -= 0.01;

}
