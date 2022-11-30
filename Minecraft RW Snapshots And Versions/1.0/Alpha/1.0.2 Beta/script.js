0// The three.js scene: the 3D world where you put objects
const scene = new THREE.Scene();

// The camera
const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  1,
  10000
);

const loader = new THREE.TextureLoader();

const color3 = new THREE.Color("rgb(87, 49, 49)");
const colorsky = new THREE.Color("rgb(135, 206, 235)");
const colorgrass = new THREE.Color("rgb(39, 143, 16)");


const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(colorsky, 1);
// Append the renderer canvas into <body>
document.body.appendChild(renderer.domElement);

const land = {
  geometry: new THREE.BoxGeometry(9, 0.5, 9),
  material: new THREE.MeshBasicMaterial({ color: colorgrass })
};

// The mesh: the geometry and material combined, and something we can directly add into the scene (I had to put this line outside of the object literal, so that I could use the geometry and material properties)
land.mesh = new THREE.Mesh(land.geometry, land.material);

// Add the cube into the scene

const treelog = {
  geometry: new THREE.BoxGeometry(1, 5, 1),
  material: new THREE.MeshBasicMaterial({ color: color3 })

};

treelog.mesh = new THREE.Mesh(treelog.geometry, treelog.material);

scene.add(land.mesh);
scene.add(treelog.mesh);

camera.position.z = 5;
camera.position.y = 1.5;
camera.position.x = -1.5

function render() {
  // Render the scene and the camera
  renderer.render(scene, camera);

  // Rotate the cube every frame
  land.mesh.rotation.y += 0.02;
  treelog.mesh.rotation.y += 0.02;
  

  // Make it call the render() function about every 1/60 second
  requestAnimationFrame(render);
}

render();
