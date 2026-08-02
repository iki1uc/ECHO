export function ECHO_HALL(cells, strength = 6){
  let pos = 0;

  const roll = () => {
    // alte Hall-Spuren löschen
    cells.forEach(c => c.style.boxShadow = "none");

    // Hall-Bereich berechnen
    for(let i = 0; i < strength; i++){
      const idx = (pos + i) % cells.length;
      const fade = 1 - (i / strength);

      cells[idx].style.boxShadow =
        `0 0 ${20 * fade}px ${fade * 10}px #00eaff`;
    }

    pos = (pos + 1) % cells.length;
    requestAnimationFrame(roll);
  };

  roll();
}
