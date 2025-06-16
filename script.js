let selectedMode = '';

function chooseMode(mode) {
  selectedMode = mode;
  alert(`Selected: ${mode.toUpperCase()}`);
}

function startGame() {
  if (!selectedMode) {
    alert("Please select a mode first!");
    return;
  }
  window.location.href = `${selectedMode}.html`; // Placeholder
}￼Enter
