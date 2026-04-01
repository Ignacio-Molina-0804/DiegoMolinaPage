import { supabase } from "../../src/lib/supabase";

declare global {
  interface Window {
    eliminarItem: (tabla: string, id: string) => Promise<void>;
    editarCliente: (id: string) => void;
    editarProducto: (id: string) => void;
    verDetalle: (htmlContent: string) => void;
    quitarDelCarrito: (index: number) => void;
  }
}

let stateClientes: any[] = [];
let stateProductos: any[] = [];
let stateVentas: any[] = [];
let editandoClienteId: string | null = null;
let editandoProductoId: string | null = null;

const PASSPHRASE = "admin123";

document.addEventListener("DOMContentLoaded", () => {
  const authOverlay = document.getElementById("auth-overlay");
  const dashboard = document.getElementById("dashboard");
  const loginForm = document.getElementById("login-form");
  const authError = document.getElementById("auth-error");
  const btnLogout = document.getElementById("btn-logout");

  if (!authOverlay || !dashboard || !loginForm || !authError || !btnLogout) return;

  if (localStorage.getItem("adminAuth") === "true") {
    authOverlay.classList.add("hidden");
    dashboard.classList.remove("hidden");
    initDashboard();
  }

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const passInput = document.getElementById("auth-pass") as HTMLInputElement;
    if (passInput && passInput.value === PASSPHRASE) {
      localStorage.setItem("adminAuth", "true");
      authOverlay.classList.add("hidden");
      dashboard.classList.remove("hidden");
      initDashboard();
    } else {
      authError.classList.remove("hidden");
    }
  });

  btnLogout.addEventListener("click", () => {
    localStorage.removeItem("adminAuth");
    window.location.reload();
  });

  const tabBtns = document.querySelectorAll<HTMLButtonElement>(".tab-btn");
  const tabContents = document.querySelectorAll<HTMLElement>(".tab-content");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach((b) => {
        b.classList.remove(
          "bg-[#00ff7f]",
          "text-black",
          "shadow-[0_0_10px_rgba(0,255,127,0.2)]",
        );
        b.classList.add("bg-white/5", "text-white");
      });
      tabContents.forEach((c) => c.classList.add("hidden"));

      btn.classList.add(
        "bg-[#00ff7f]",
        "text-black",
        "shadow-[0_0_10px_rgba(0,255,127,0.2)]",
      );
      btn.classList.remove("bg-white/5", "text-white");
      const targetId = btn.dataset.target;
      if (targetId) {
        document.getElementById(targetId)?.classList.remove("hidden");
      }
    });
  });
});

const getIcon = (id: string) => document.getElementById(id)?.innerHTML || "";
const svgPencil = () => getIcon("tpl-pencil");
const svgTrash = () => getIcon("tpl-trash");
const svgEye = () => getIcon("tpl-eye");

window.eliminarItem = async function (tabla, id) {
  if (!confirm(`¿Seguro que quieres eliminar este registro?`)) return;
  const { error } = await supabase.from(tabla).delete().eq("id", id);
  if (error) {
    alert("Error al eliminar: " + error.message);
  } else {
    if (tabla === "ventas") await cargarVentas();
    if (tabla === "clientes") await initDashboard();
    if (tabla === "productos") await initDashboard();
  }
};

window.editarCliente = function(id) {
  const c = stateClientes.find((x) => x.id === id);
  if(!c) return;
  (document.getElementById("c-nombre") as HTMLInputElement).value = c.nombre || "";
  (document.getElementById("c-tel") as HTMLInputElement).value = c.telefono || "";
  (document.getElementById("c-domicilio") as HTMLInputElement).value = c.domicilio || "";
  editandoClienteId = c.id;
  const btn = document.querySelector('#form-cliente button[type="submit"]');
  if (btn) btn.textContent = "Actualizar";
  document.getElementById("tab-clientes")?.scrollIntoView({ behavior: 'smooth' });
};

window.editarProducto = function(id) {
  const p = stateProductos.find((x) => x.id === id);
  if(!p) return;
  (document.getElementById("p-nombre") as HTMLInputElement).value = p.nombre || "";
  (document.getElementById("p-tipo") as HTMLInputElement).value = p.tipo || "";
  (document.getElementById("p-precio") as HTMLInputElement).value = p.precio || 0;
  editandoProductoId = p.id;
  const btn = document.querySelector('#form-producto button[type="submit"]');
  if (btn) btn.textContent = "Actualizar";
  document.getElementById("tab-products")?.scrollIntoView({ behavior: 'smooth' });
};

window.verDetalle = function (htmlContent) {
  const content = document.getElementById("detalle-content");
  if(content) content.innerHTML = decodeURIComponent(htmlContent);
  const overlay = document.getElementById("detalle-overlay");
  if(!overlay) return;
  
  overlay.classList.remove("hidden");
  overlay.classList.add("flex");
  const modal = overlay.querySelector("div");
  if (modal) setTimeout(() => modal.classList.replace("scale-95", "scale-100"), 10);

  overlay.onclick = function (e) {
    if (e.target === overlay) {
      if(modal) modal.classList.replace("scale-100", "scale-95");
      setTimeout(() => {
        overlay.classList.remove("flex");
        overlay.classList.add("hidden");
      }, 150);
    }
  };
};

async function initDashboard() {
  await cargarClientes();
  await cargarProductos();
  await cargarVentas();
}

const formatearDinero = (num: number) =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  }).format(num);

async function cargarClientes() {
  const { data, error } = await supabase
    .from("clientes")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) return console.error(error);

  stateClientes = data || [];
  const tbody = document.getElementById("lista-clientes");
  const combo = document.getElementById("v-cliente");
  if(!tbody || !combo) return;

  tbody.innerHTML = "";
  combo.innerHTML = '<option value="" disabled selected>Seleccione cliente...</option>';

  stateClientes.forEach((c) => {
    tbody.innerHTML += `
      <tr class="hover:bg-white/5 transition">
        <td class="p-4 font-medium text-[#00ff7f]">${c.nombre}</td>
        <td class="p-4 text-white/80">${c.telefono || "-"}</td>
        <td class="p-4 text-white/50">${c.domicilio || "-"}</td>
        <td class="p-4 text-right flex gap-1 justify-end">
          <button onclick="editarCliente('${c.id}')" class="text-blue-400 hover:text-blue-300 px-2 py-1 rounded hover:bg-blue-500/10 transition" title="Editar">${svgPencil()}</button>
          <button onclick="eliminarItem('clientes', '${c.id}')" class="text-red-500 hover:text-red-400 px-2 py-1 rounded hover:bg-red-500/10 transition" title="Eliminar">${svgTrash()}</button>
        </td>
      </tr>
    `;
    combo.innerHTML += `<option value="${c.id}">${c.nombre}</option>`;
  });
}

document.getElementById("form-cliente")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const btn = form.querySelector('button[type="submit"]');
  if (btn) btn.textContent = "...";
  
  const insertData = {
    nombre: (document.getElementById("c-nombre") as HTMLInputElement).value,
    telefono: (document.getElementById("c-tel") as HTMLInputElement).value,
    domicilio: (document.getElementById("c-domicilio") as HTMLInputElement).value,
  };

  let currentError;
  if (editandoClienteId) {
    const { error } = await supabase.from("clientes").update(insertData).eq("id", editandoClienteId);
    currentError = error;
  } else {
    const { error } = await supabase.from("clientes").insert([insertData]);
    currentError = error;
  }

  if (!currentError) {
    form.reset();
    editandoClienteId = null;
    await cargarClientes();
  } else {
    alert("Error al guardar cliente");
  }
  if (btn) btn.textContent = "Guardar";
});

async function cargarProductos() {
  const { data, error } = await supabase
    .from("productos")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) return console.error(error);

  stateProductos = data || [];
  const tbody = document.getElementById("lista-productos");
  const combo = document.getElementById("v-producto");
  if(!tbody || !combo) return;

  tbody.innerHTML = "";
  combo.innerHTML = '<option value="" disabled selected>Seleccione producto...</option>';

  stateProductos.forEach((p) => {
    tbody.innerHTML += `
      <tr class="hover:bg-white/5 transition">
        <td class="p-4 font-medium text-[#00ff7f]">${p.nombre}</td>
        <td class="p-4"><span class="bg-[#1b0123] px-2 py-1 rounded text-xs text-white/70">${p.tipo}</span></td>
        <td class="p-4 text-white/90 font-mono">${formatearDinero(p.precio)}</td>
        <td class="p-4 text-right flex gap-1 justify-end">
          <button onclick="editarProducto('${p.id}')" class="text-blue-400 hover:text-blue-300 px-2 py-1 rounded hover:bg-blue-500/10 transition" title="Editar">${svgPencil()}</button>
          <button onclick="eliminarItem('productos', '${p.id}')" class="text-red-500 hover:text-red-400 px-2 py-1 rounded hover:bg-red-500/10 transition" title="Eliminar">${svgTrash()}</button>
        </td>
      </tr>
    `;
    combo.innerHTML += `<option value="${p.id}" data-precio="${p.precio}">${p.nombre} (${formatearDinero(p.precio)})</option>`;
  });
}

document.getElementById("form-producto")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const btn = form.querySelector('button[type="submit"]');
  if (btn) btn.textContent = "...";
  
  const insertData = {
    nombre: (document.getElementById("p-nombre") as HTMLInputElement).value,
    tipo: (document.getElementById("p-tipo") as HTMLInputElement).value,
    precio: parseFloat((document.getElementById("p-precio") as HTMLInputElement).value),
  };

  let currentError;
  if (editandoProductoId) {
    const { error } = await supabase.from("productos").update(insertData).eq("id", editandoProductoId);
    currentError = error;
  } else {
    const { error } = await supabase.from("productos").insert([insertData]);
    currentError = error;
  }

  if (!currentError) {
    form.reset();
    editandoProductoId = null;
    await cargarProductos();
  } else {
    alert("Error al guardar producto");
  }
  if (btn) btn.textContent = "Guardar";
});

async function cargarVentas() {
  const { data: ventas, error } = await supabase
    .from("ventas")
    .select(
      `
      id, created_at, total,
      clientes ( nombre ),
      venta_detalles ( cantidad, precio_historico, productos ( nombre ) )
    `,
    )
    .order("created_at", { ascending: false })
    .limit(50);

  if (error) {
    console.error("Error al cargar ventas", error);
    return;
  }

  stateVentas = ventas || [];
  renderVentas();
}

function renderVentas(filtro = "") {
  const tbody = document.getElementById("lista-ventas");
  const dGlobal = document.getElementById("total-revenue");
  if (!tbody || !dGlobal) return;
  tbody.innerHTML = "";

  let sum = 0;
  let targetVentas = stateVentas;

  if (filtro.trim() !== "") {
    const lowerFiltro = filtro.toLowerCase();
    targetVentas = stateVentas.filter((v) => {
      const cName = v.clientes ? v.clientes.nombre.toLowerCase() : "cliente borrado";
      return cName.includes(lowerFiltro);
    });
  }

  if (targetVentas.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" class="p-4 text-center text-white/40">Aún no hay ventas registradas o la búsqueda no coincide</td></tr>`;
    dGlobal.textContent = "$0.00";
    return;
  }

  targetVentas.forEach((v) => {
    sum += parseFloat(v.total);
    const fecha = new Date(v.created_at).toLocaleDateString("es-AR", {
      day: "2-digit",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    });
    const clienteTag = v.clientes ? v.clientes.nombre : "Cliente Borrado";

    let detalleHtml = "";
    if (v.venta_detalles && v.venta_detalles.length > 0) {
      v.venta_detalles.forEach((d: any) => {
        const prodName = d.productos ? d.productos.nombre : "Prod. Borrado";
        detalleHtml += `<div class="flex justify-between bg-black/40 p-3 rounded-lg border border-white/5 mb-2"><span class="font-medium flex items-center gap-2"><span class="bg-white/10 px-2 py-0.5 rounded text-xs">${d.cantidad}x</span> ${prodName}</span> <span class="text-[#00ff7f] font-mono">${formatearDinero(d.precio_historico * d.cantidad)}</span></div>`;
      });
    }

    const botonOjo = `<button onclick="verDetalle('${encodeURIComponent(detalleHtml)}')" class="text-[#00ff7f] bg-[#00ff7f]/10 hover:bg-[#00ff7f]/20 hover:scale-105 px-3 py-1.5 rounded-lg text-sm transition-all font-medium flex items-center gap-1.5 border border-[#00ff7f]/20">${svgEye()} Ver</button>`;

    tbody.innerHTML += `
      <tr class="hover:bg-white/5 transition">
        <td class="p-4 text-white/50">${fecha}</td>
        <td class="p-4 font-medium">${clienteTag}</td>
        <td class="p-4">${botonOjo}</td>
        <td class="p-4 text-right font-mono font-bold text-[#00ff7f]">${formatearDinero(v.total)}</td>
        <td class="p-4 text-right"><button onclick="eliminarItem('ventas', '${v.id}')" class="text-red-500 hover:text-red-400 px-2 py-1 rounded hover:bg-red-500/10 transition" title="Eliminar">${svgTrash()}</button></td>
      </tr>
    `;
  });

  dGlobal.textContent = formatearDinero(sum);
}

const filtroInput = document.getElementById("filtro-ventas-cliente") as HTMLInputElement | null;
if (filtroInput) {
  filtroInput.addEventListener("input", (e) => {
    renderVentas((e.target as HTMLInputElement).value);
  });
}

let carritoVenta: any[] = [];

function renderCarrito() {
  const container = document.getElementById("carrito-container");
  const lista = document.getElementById("lista-carrito");
  const totalEl = document.getElementById("carrito-total");
  if (!container || !lista || !totalEl) return;

  if (carritoVenta.length === 0) {
    container.classList.add("hidden");
    return;
  }

  container.classList.remove("hidden");
  lista.innerHTML = "";
  let sum = 0;

  carritoVenta.forEach((item, index) => {
    sum += item.subtotal;
    lista.innerHTML += `
      <li class="flex justify-between items-center bg-black/40 p-2 rounded-lg border border-white/5">
        <span class="text-sm"><span class="bg-white/10 px-2 py-0.5 rounded text-xs mr-2 font-mono">${item.cantidad}x</span> ${item.nombre}</span>
        <div class="flex items-center gap-4">
          <span class="font-mono text-[#00ff7f] text-sm">${formatearDinero(item.subtotal)}</span>
          <button type="button" onclick="quitarDelCarrito(${index})" class="text-red-400 hover:text-red-300 hover:bg-red-500/10 p-1.5 rounded transition" title="Quitar">${svgTrash()}</button>
        </div>
      </li>
    `;
  });
  totalEl.textContent = formatearDinero(sum);
}

window.quitarDelCarrito = function (index) {
  carritoVenta.splice(index, 1);
  renderCarrito();
};

document.getElementById("btn-add-carrito")?.addEventListener("click", () => {
  const productoId = (document.getElementById("v-producto") as HTMLSelectElement).value;
  const cant = parseInt((document.getElementById("v-cantidad") as HTMLInputElement).value);

  if (!productoId || cant < 1) {
    return;
  }

  const prodSelect = stateProductos.find((p) => p.id === productoId);
  if (!prodSelect) return;

  carritoVenta.push({
    id: prodSelect.id,
    nombre: prodSelect.nombre,
    precio: prodSelect.precio,
    cantidad: cant,
    subtotal: parseFloat(prodSelect.precio) * cant,
  });

  (document.getElementById("v-producto") as HTMLSelectElement).value = "";
  (document.getElementById("v-cantidad") as HTMLInputElement).value = "1";
  renderCarrito();
});

document.getElementById("btn-finalizar-venta")?.addEventListener("click", async () => {
  const btn = document.getElementById("btn-finalizar-venta") as HTMLButtonElement | null;
  const clienteId = (document.getElementById("v-cliente") as HTMLSelectElement).value;

  if (!clienteId) {
    alert("Debes seleccionar un cliente arriba");
    return;
  }
  if (carritoVenta.length === 0) {
    alert("Agrega al menos un producto al pedido");
    return;
  }

  if (btn) {
    btn.textContent = "Procesando...";
    btn.disabled = true;
  }

  const totalCalculado = carritoVenta.reduce((acc, item) => acc + item.subtotal, 0);

  const { data: vData, error: vErr } = await supabase
    .from("ventas")
    .insert([{ cliente_id: clienteId, total: totalCalculado }])
    .select()
    .single();

  if (vErr || !vData) {
    alert("Error al registrar venta principal");
    if (btn) {
      btn.textContent = "Confirmar Venta";
      btn.disabled = false;
    }
    return;
  }

  const detallesAInsertar = carritoVenta.map((item) => ({
    venta_id: vData.id,
    producto_id: item.id,
    cantidad: item.cantidad,
    precio_historico: item.precio,
  }));

  const { error: detErr } = await supabase.from("venta_detalles").insert(detallesAInsertar);
  if (detErr) {
    alert("Venta creada pero hubo un error con sus detalles");
  }

  carritoVenta = [];
  (document.getElementById("v-cliente") as HTMLSelectElement).value = "";
  renderCarrito();
  await cargarVentas();

  if (btn) {
    btn.textContent = "Confirmar Venta";
    btn.disabled = false;
  }
});
