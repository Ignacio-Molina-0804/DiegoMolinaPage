// /public/scripts/accesoProtegido.js

document.addEventListener("DOMContentLoaded", () => {
  const CLAVE_ACCESO = "tiempoydinero"; // Cambiá esta clave si querés
  const STORAGE_KEY = "accesoAmwayOk";
  const CONTACTO_URL = "/contacto"; // Ruta a la página de contacto
  let intentos = 0;

  // Si ya ingresó antes, no pedimos clave otra vez
  if (localStorage.getItem(STORAGE_KEY)) return;

  // Crear overlay
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100vw";
  overlay.style.height = "100vh";
  overlay.style.background = "rgba(0,0,0,0.85)";
  overlay.style.backdropFilter = "blur(10px)";
  overlay.style.zIndex = "9999";
  overlay.style.display = "flex";
  overlay.style.flexDirection = "column";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";
  overlay.style.color = "white";
  overlay.style.fontFamily = "Poppins, sans-serif";

  // Contenido principal
  overlay.innerHTML = `
    <div style="
      background: rgba(30, 30, 30, 0.9);
      padding: 2rem 2.5rem;
      border-radius: 1rem;
      text-align: center;
      box-shadow: 0 0 20px rgba(0, 255, 127, 0.3);
      max-width: 320px;
    ">
      <h2 style="color: #00ff7f; margin-bottom: 1rem;">Acceso restringido</h2>
      <p style="margin-bottom: 1rem; font-size: 1rem;">Ingresá la clave para continuar</p>
      <input id="claveInput" type="password" placeholder="Clave de acceso"
        style="padding: 0.6rem 1rem; border-radius: 0.5rem; border: none; outline: none; text-align: center; font-size: 1rem; width: 100%;" />
      <button id="btnAcceder" style="
        display: block;
        margin: 1rem auto 0;
        background: #00ff7f;
        border: none;
        color: #000;
        font-weight: 600;
        border-radius: 0.5rem;
        padding: 0.6rem 1.5rem;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
      ">Ingresar</button>
      <p id="errorMsg" style="color: #ff6666; margin-top: 0.8rem; display: none;">Clave incorrecta</p>
      <div id="contactoMsg" style="display: none; margin-top: 1.2rem;">
        <p style="color: #aaa; margin-bottom: 0.8rem; font-size: 0.95rem;">
          Parece que no tenés acceso todavía.<br>
          Comunicate con Diego para obtener tu clave exclusiva.
        </p>
        <button id="btnContacto" style="
          background: #00ff7f;
          color: #000;
          font-weight: 600;
          border: none;
          border-radius: 0.5rem;
          padding: 0.6rem 1.5rem;
          cursor: pointer;
        ">Ir a contacto</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  const input = overlay.querySelector("#claveInput");
  const btn = overlay.querySelector("#btnAcceder");
  const errorMsg = overlay.querySelector("#errorMsg");
  const contactoMsg = overlay.querySelector("#contactoMsg");
  const btnContacto = overlay.querySelector("#btnContacto");

  const validar = () => {
    if (input.value.trim() === CLAVE_ACCESO) {
      localStorage.setItem(STORAGE_KEY, "true");
      overlay.remove();
    } else {
      intentos++;
      errorMsg.style.display = "block";
      input.value = "";
      input.focus();

      if (intentos >= 1) {
        // Mostrar mensaje de contacto
        contactoMsg.style.display = "block";
        input.style.display = "none";
        btn.style.display = "none";
        errorMsg.style.display = "none";
      }
    }
  };

  btn.addEventListener("click", validar);
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") validar();
  });

  btnContacto.addEventListener("click", () => {
    window.location.href = CONTACTO_URL;
  });
});
