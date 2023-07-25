import * as THREE from 'three';

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshNormalMaterial();
const mesh = new THREE.Mesh(geometry, material);


scene.add(mesh);
const sizes = { width: 1024, height: 768 }
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 10);
camera.position.z = 4;


const renderer = new THREE.WebGLRenderer()
renderer.setSize(sizes.width, sizes.height);
document.body.appendChild(renderer.domElement);

// Mesh position

// mesh.position.x = 2;
// mesh.position.set(1, 2, -2);

 // const meshVector = new THREE.Vector3(2, 1, -2);
// mesh.position = meshVector; NO
// mesh.position.copy(meshVector); // YES

// mesh.position.x += 1;

// Vector sum ( all operations are included )
// mesh.position.add(meshVector);

// Clone mesh
const mesh2 = mesh.clone();
const mesh3 = mesh.clone();
mesh2.position.x = -2;
mesh3.position.x = 2;
// scene.add(mesh2);
// scene.add(mesh3);

// Scale
// mesh2.scale.set(0.8, 0.8, 0.8);
// mesh3.scale.set(1.2, 1.2, 1.2);

// mesh.scale.x = 0.5;

// mesh2.scale.multiplyScalar(0.8);
// mesh3.scale.multiplyScalar(1.2);


// Rotations
mesh.rotation.order = 'ZYX';
mesh.rotation.y = Math.PI * 0.25;
mesh.rotation.z = Math.PI * 0.25;
mesh2.rotation.y = THREE.MathUtils.degToRad(45);
console.log(THREE.MathUtils.radToDeg(mesh2.rotation.y));


// Group object

const group = new THREE.Group();
group.add(mesh2);
group.add(mesh3);
scene.add(group);

group.rotation.y = Math.PI * 0.1;
group.position.y = 1;
group.scale.y = 1.2;

// Camera

// camera.position.y = 1.3;
camera.position.set(-2, 1, 2);

// Automatic camera look at the object
camera.lookAt(mesh.position);

// Automatic camera look at one object in the group
const vector = new THREE.Vector3();
mesh3.getWorldPosition(vector);
camera.lookAt(vector);


// Axes helper
const axesHelper = new THREE.AxesHelper(2);
mesh.add(axesHelper.clone());
mesh2.add(axesHelper.clone());
mesh3.add(axesHelper.clone());

requestAnimationFrame(animate)
function animate() {

    renderer.render(scene, camera);
    requestAnimationFrame(animate);

}
