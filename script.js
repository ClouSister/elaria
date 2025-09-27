// Simulación de usuario activo
const usuario = {
  nombre: "Clou",
  dibujos: [
    { id: "d1", titulo: "Paisaje nocturno", categoria: "paisajes", privado: false },
    { id: "d2", titulo: "Diseño abstracto", categoria: "diseño", privado: true },
    { id: "d3", titulo: "Personaje +18", categoria: "+18", privado: false }
  ],
  limite: 10
};

// Mostrar nombre en perfil
document.addEventListener("DOMContentLoaded", () => {
  const perfil = document.getElementById("perfil");
  if (perfil) {
    perfil.innerHTML += `<p>Bienvenido, <strong>${usuario.nombre}</strong></p>`;
  }

  // Cargar galería simulada
  const galeria = document.getElementById("galeria");
  if (galeria) {
    usuario.dibujos.forEach(dibujo => {
      const card = document.createElement("div");
      card.className = "dibujo";
      card.id = dibujo.id;
      card.dataset.categoria = dibujo.categoria;
      card.dataset.privado = dibujo.privado;

      card.innerHTML = `
        <h3>${dibujo.titulo}</h3>
        <p>Categoría: ${dibujo.categoria}</p>
        <p class="estado">${dibujo.privado ? "Privado" : "Público"}</p>
        <button onclick="togglePrivacidad('${dibujo.id}')">Cambiar privacidad</button>
      `;

      galeria.appendChild(card);
    });
  }
});

// Filtrar por categoría
function filtrarCategoria(categoria) {
  const dibujos = document.querySelectorAll('.dibujo');
  dibujos.forEach(d => {
    d.style.display = d.dataset.categoria === categoria || categoria === "todos"
      ? 'block'
      : 'none';
  });
}

// Cambiar privacidad
function togglePrivacidad(id) {
  const dibujo = document.getElementById(id);
  if (dibujo) {
    const estadoActual = dibujo.dataset.privado === "true";
    dibujo.dataset.privado = (!estadoActual).toString();
    dibujo.querySelector(".estado").textContent = estadoActual ? "Público" : "Privado";
  }
}

// Animación de carga
window.addEventListener("load", () => {
  document.body.classList.add("cargado");
});