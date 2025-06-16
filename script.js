let selelet selectedMode = null;

function selectMode(mode) {
  selectedMode = mode;
  alert(`Mode selected: ${mode.toUpperCase()}`);
}

function startGame() {
  if (!selectedMode) {
    alert("Please select a mode first (Story, Rank, or Multiplayer).");
    return;
  }

  alert(`Loading ${selectedMode.toUpperCase()} mode...`);
  // Later: Redirect or load specific mode gameplay
}￼Enter
