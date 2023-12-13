import * as THREE from 'three';

const scene = new THREE.Scene();

// there are 3 types of cams, we're gonna use perspective
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// 75 is FOV (degrees)
// window.innerWidth / window.innerHeight in aspect ratio
//0.1 ad 1000 are nera and far attributes (don't need to know rn)

const renderer = new THREE.WebGLRenderer();

//set size for canvas
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

//crete box -> use box geometry that has ()
const geometry = new THREE.BoxGeometry(1, 1, 1);
//add materal (basic mesh w/color)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

//a mesh is an object that takes geometry and applies material to it
const cube = new THREE.Mesh(geometry, material);


//add cube to scene @ coords (0,0,0) (x,y,z)
scene.add(cube);

//moved cam out a bit so object and cam arent on same z
camera.position.z = 5;

function animate() {

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

cube.rotation.x += 0.01;
cube.rotation.y += 0.01;