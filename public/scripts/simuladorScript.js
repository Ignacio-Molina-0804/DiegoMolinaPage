function formatNumber(num) {
  return new Intl.NumberFormat("es-AR").format(num);
}

function formatCurrency(num) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(num);
}

function calculateScenario(id) {
  const valorPunto =
    parseFloat(document.getElementById("valorPunto").value) || 0;
  let nuevosPorMes =
    parseFloat(document.getElementById(`nuevos-${id}`).value) || 0;

  // Clamp to 1-5
  if (nuevosPorMes < 1) nuevosPorMes = 1;
  if (nuevosPorMes > 5) nuevosPorMes = 5;
  const puntosPromedio =
    parseFloat(document.getElementById(`promedio-${id}`).value) || 0;
  const tableBody = document.getElementById(`table-body-${id}`);
  const factorDisplay = document.getElementById(`factor-display-${id}`);

  // Update factor display
  const factor = nuevosPorMes + 1; // Logic: 1 person brings N => Next month total is Previous * (1+N)? No.
  // Excel logic check:
  // Left: 1 nuevo/mes. Month 1: 2. Month 2: 4. (Factor 2). Formula: Previous * 2? Or (1+1)^Month. 2^1=2, 2^2=4.
  // Right: 3 nuevo/mes. Month 1: 4. Month 2: 16. (Factor 4). Formula: Previous * 4? Or (3+1)^Month. 4^1=4, 4^2=16.
  // So the 'base' multiplier is (NuevosPorMes + 1).

  // BUT, the screenshot shows "Socios" starting at the multiplier value.
  // Month 1 Left: 2. (1+1).
  // Month 1 Right: 4. (3+1).
  // So distinct socio counts starts at (Nuevos + 1).

  // Let's assume standard geometric progression starting at (Nuevos + 1).

  // Correction based on rows:
  // Row 1: (Input + 1)^1
  // Row 2: (Input + 1)^2

  // Wait, the screenshot shows:
  // Left (1 Nuevo/Mes): Month 1 -> 2 socios. Month 6 -> 64. 2^6 = 64. Correct.
  // Right (3 Nuevo/Mes): Month 1 -> 4 socios. Month 6 -> 4096. 4^6 = 4096. Correct.

  // So Logic is: Socios = (1 + NuevosPorMes) ^ Mes

  const multiplier = nuevosPorMes + 1;
  factorDisplay.textContent = multiplier;

  let html = "";

  for (let mes = 1; mes <= 12; mes++) {
    const socios = Math.pow(multiplier, mes);
    const volumen = socios * puntosPromedio;
    const valor = volumen * valorPunto * 0.05;

    // Apply highlighting for month 6 and 12 like in screenshot (optional visual cue)
    const isHighlight = mes === 6 || mes === 12;
    const rowClass = isHighlight
      ? "bg-white/10 font-bold ring-2 ring-primary-500/50 ring-inset"
      : "";

    html += `
        <tr class="hover:bg-white/5 transition-colors ${rowClass}">
          <td class="py-3 px-2 text-right border-r border-gray-700">${mes}</td>
          <td class="py-3 px-2 text-right border-r border-gray-700">${formatNumber(socios)}</td>
          <td class="py-3 px-2 text-right border-r border-gray-700">${formatNumber(volumen)}</td>
          <td class="py-3 px-2 text-right text-green-400">${formatCurrency(valor)}</td>
        </tr>
      `;
  }

  tableBody.innerHTML = html;
}

function init() {
  // Initial Calc
  calculateScenario(1);
  calculateScenario(2);

  // Listeners
  const inputs = [
    "valorPunto",
    "nuevos-1",
    "promedio-1",
    "nuevos-2",
    "promedio-2",
  ];
  inputs.forEach((id) => {
    document.getElementById(id).addEventListener("input", () => {
      calculateScenario(1);
      calculateScenario(2);
    });
  });
}

// Run on load
init();

// Re-run on view transitions if enabled
document.addEventListener("astro:page-load", init);
