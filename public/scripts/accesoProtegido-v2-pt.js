// /public/scripts/accesoProtegido-v3.js

document.addEventListener("DOMContentLoaded", () => {
  const CLAVE_ACCESO = "tiempoydinero"; // Cambiá esta clave si querés
  const STORAGE_KEY = "accesoAmwayOk";
  const CONTACTO_URL = "/contacto";
  let intentos = 0;

  // Si ya ingresó antes, no pedimos clave otra vez
  if (localStorage.getItem(STORAGE_KEY)) return;

  // Crear overlay
  const overlay = document.createElement("div");
  overlay.style = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.85);
    backdrop-filter: blur(32px);
    z-index: 9999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: Poppins, sans-serif;
  `;

  // Contenedor principal
  overlay.innerHTML = `
    <div style="
      background: rgba(15, 15, 15, 0.9);
      padding: 2.2rem 2.6rem;
      border-radius: 1rem;
      text-align: center;
      box-shadow: 0 0 25px rgba(0, 255, 127, 0.25);
      max-width: 340px;
      width: 90%;
    ">
      <h2 style="color: #00ff7f; margin-bottom: 1rem; font-size: 1.3rem;">Acesso restrito</h2>
      <p style="margin-bottom: 1.3rem; font-size: 1rem; color: #ddd;">Digite a senha para continuar</p>
      
      <div style="position: relative;">
        <input id="claveInput" type="password" placeholder="Senha de acesso"
          style="
            padding: 0.75rem 1rem;
            border-radius: 0.7rem;
            border: 1px solid rgba(255,255,255,0.15);
            outline: none;
            text-align: center;
            font-size: 1rem;
            width: 100%;
            background: rgba(255, 255, 255, 0.05);
            color: #fff;
            transition: all 0.2s ease-in-out;
          " />
      </div>

      <button id="btnAcceder" style="
        display: block;
        margin: 1.2rem auto 0;
        background: #00ff7f;
        border: none;
        color: #000;
        font-weight: 600;
        border-radius: 0.7rem;
        padding: 0.7rem 1.5rem;
        cursor: pointer;
        font-size: 1rem;
        transition: all 0.2s ease-in-out;
      ">Entrar</button>

      <p id="errorMsg" style="color: #ff6666; margin-top: 0.8rem; display: none; font-size: 0.9rem;">Senha incorreta</p>
      
      <div id="contactoMsg" style="display: none; margin-top: 1.3rem;">
        <p style="color: #aaa; margin-bottom: 0.8rem; font-size: 0.95rem;">
          Parece que você ainda não tem acesso.<br>
          Entre em contato com Diego para obter sua senha exclusiva.
        </p>
        <button id="btnContacto" style="
          background: #00ff7f;
          color: #000;
          font-weight: 600;
          border: none;
          border-radius: 0.7rem;
          padding: 0.6rem 1.5rem;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
        ">Ir para contato</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  const input = overlay.querySelector("#claveInput");
  const btn = overlay.querySelector("#btnAcceder");
  const errorMsg = overlay.querySelector("#errorMsg");
  const contactoMsg = overlay.querySelector("#contactoMsg");
  const btnContacto = overlay.querySelector("#btnContacto");

  // Efectos de hover
  btn.addEventListener("mouseenter", () => {
    btn.style.background = "#00e676";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.background = "#00ff7f";
  });

  btnContacto.addEventListener("mouseenter", () => {
    btnContacto.style.background = "#00e676";
  });
  btnContacto.addEventListener("mouseleave", () => {
    btnContacto.style.background = "#00ff7f";
  });

  // Validación
  const validar = () => {
    if (input.value.trim().toLowerCase() === CLAVE_ACCESO.toLowerCase()) {
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
