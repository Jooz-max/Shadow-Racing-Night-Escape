let selectedMode = null;

function selectMode(mode) {
  selectedMode = mode;
  alert(`${mode.toUpperCase()} selected! Press START to begin.`);
}

function startGame() {
  if (!selectedMode) {
    alert("Please select a mode before starting the game.");
    return;
  }

  switch (selectedMode) {
    case 'rank':
      window.location.href = 'rank.html';
      break;
    case 'multiplayer':
      window.location.href = 'multiplayer.html';
      break;
    case 'story':
      window.location.href = 'story.html';
      break;
  }
}

function openSection(section) {
  alert(`Opening ${section} section...`);
}

function openUpdate() {
  alert("You're running the latest version.");
}

// Basic 3D visual using Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('garage-canvas').appendChild(renderer.domElement);

// Floor
const floorGeometry = new THREE.PlaneGeometry(100, 100);
const floorMaterial = new THREE.MeshBasicMaterial({ color: 0x202020 });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2;
scene.add(floor);

// Car placeholder (box)
const carGeometry = new THREE.BoxGeometry(2, 1, 4);
const carMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const car = new THREE.Mesh(carGeometry, carMaterial);
car.position.set(0, 0.5, 0);
scene.add(car);

// Character placeholder
const charGeometry = new THREE.CapsuleGeometry(0.5, 1.5, 4, 8);
const charMaterial = new THREE.MeshBasicMaterial({ color: 0xff00ff });
const character = new THREE.Mesh(charGeometry, charMaterial);
character.position.set(-2.5, 1, 0);
scene.add(character);

// Camera position
camera.position.set(0, 5, 10);
camera.lookAt(0, 0, 0);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();￼Enter
