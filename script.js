// Basic garage functionality

// Default player data or load from localStorage
let playerData = JSON.parse(localStorage.getItem('playerData')) || {
  selectedCar: 'classic',
  upgrades: {
    speed: 1,
    armor: 1,
    ammo: 1,
  },
};

const cars = document.querySelectorAll('.car');
const speedLevel = document.getElementById('speed-level');
const armorLevel = document.getElementById('armor-level');
const ammoLevel = document.getElementById('ammo-level');

const speedUpBtn = document.getElementById('speed-up');
const speedDownBtn = document.getElementById('speed-down');
const armorUpBtn = document.getElementById('armor-up');
const armorDownBtn = document.getElementById('armor-down');
const ammoUpBtn = document.getElementById('ammo-up');
const ammoDownBtn = document.getElementById('ammo-down');

const startRaceBtn = document.getElementById('start-race');

function updateUI() {
  // Highlight selected car
  cars.forEach(car => {
    if (car.dataset.car === playerData.selectedCar) {
// Basic garage functionality

// Default player data or load from localStorage
let playerData = JSON.parse(localStorage.getItem('playerData')) || {
  selectedCar: 'classic',
  upgrades: {
    speed: 1,
    armor: 1,
    ammo: 1,
  },
};

const cars = document.querySelectorAll('.car');
const speedLevel = document.getElementById('speed-level');
const armorLevel = document.getElementById('armor-level');
const ammoLevel = document.getElementById('ammo-level');

const speedUpBtn = document.getElementById('speed-up');
const speedDownBtn = document.getElementById('speed-down');
const armorUpBtn = document.getElementById('armor-up');
const armorDownBtn = document.getElementById('armor-down');
const ammoUpBtn = document.getElementById('ammo-up');
const ammoDownBtn = document.getElementById('ammo-down');

const startRaceBtn = document.getElementById('start-race');

function updateUI() {
  // Highlight selected car
  cars.forEach(car => {
    if (car.dataset.car === playerData.selectedCar) {
      car.classList.add('selected');
    } else {
      car.classList.remove('selected');
    }
  });

  // Update upgrade levels
  speedLevel.textContent = playerData.upgrades.speed;
  armorLevel.textContent = playerData.upgrades.armor;
  ammoLevel.textContent = playerData.upgrades.ammo;
}

function saveData() {
  localStorage.setItem('playerData', JSON.stringify(playerData));
}

// Car selection
cars.forEach(car => {
  car.addEventListener('click', () => {
    playerData.selectedCar = car.dataset.car;
    updateUI();
    saveData();
  });
});

// Upgrade buttons handlers
speedUpBtn.addEventListener('click', () => {
  if (playerData.upgrades.speed < 5) {
    playerData.upgrades.speed++;
    updateUI();
    saveData();
  }
});
speedDownBtn.addEventListener('click', () => {
  if (playerData.upgrades.speed > 1) {
    playerData.upgrades.speed--;
    updateUI();
    saveData();
  }
});

armorUpBtn.addEventListener('click', () => {
  if (playerData.upgrades.armor < 5) {
    playerData.upgrades.armor++;
    updateUI();
    saveData();
  }
});
armorDownBtn.addEventListener('click', () => {
  if (playerData.upgrades.armor > 1) {
    playerData.upgrades.armor--;
    updateUI();
    saveData();
  }
});

ammoUpBtn.addEventListener('click', () => {
  if (playerData.upgrades.ammo < 5) {
    playerData.upgrades.ammo++;
    updateUI();
    saveData();
  }
});
ammoDownBtn.addEventListener('click', () => {
  if (playerData.upgrades.ammo > 1) {
    playerData.upgrades.ammo--;
    updateUI();
    saveData();
  }
});

// Start race button (for now, just alert)
startRaceBtn.addEventListener('click', () => {
  alert(`Starting race with:\nCar: ${playerData.selectedCar}\nSpeed Level: ${playerData.upgrades.speed}\nArmor Level: ${playerData.upgrades.armor}\nAmmo Level: ${playerData.upgrades.ammo}`);
  // TODO: Load gameplay page or level here
});

// Initialize UI
updateUI();￼Enter      car.classList.add('selected');
    } else {
      car.classList.remove('selected');
    }
  });

  // Update upgrade levels
  speedLevel.textContent = playerData.upgrades.speed;
  armorLevel.textContent = playerData.upgrades.armor;
  ammoLevel.textContent = playerData.upgrades.ammo;
}

function saveData() {
  localStorage.setItem('playerData', JSON.stringify(playerData));
}

// Car selection
cars.forEach(car => {
  car.addEventListener('click', () => {
    playerData.selectedCar = car.dataset.car;
    updateUI();
    saveData();
  });
});

// Upgrade buttons handlers
pBtn.addEventListener('click', () => {
  if (playerData.upgrades.speed < 5) {
    playerData.upgrades.speed++;
    updateUI();
    saveData();
  }
});
speedDownBtn.addEventListener('click', () => {
  if (playerData.upgrades.speed > 1) {
    playerData.upgrades.speed--;
    updateUI();
    saveData();
  }
});

armorUpBtn.addEventListener('click', () => {
  if (playerData.upgrades.armor < 5) {
    playerData.upgrades.armor++;
    updateUI();
    saveData();
  }
});
armorDownBtn.addEventListener('click', () => {
  if (playerData.upgrades.armor > 1) {
    playerData.upgrades.armor--;
    updateUI();
