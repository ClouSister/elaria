const usuario = {
  nombre: "Clou",
  dibujos: [
    { id: "d1", titulo: "Paisaje nocturno", categoria: "paisajes", privado: false },
    { id: "d2", titulo: "Diseño abstracto", categoria: "diseño", privado: true },
    { id: "d3", titulo: "Personaje +18", categoria: "+18", privado: false }
  ],
  limite: 10
};

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("cargado");

  const perfil = document.getElementById("perfil");
  if (perfil) {
    perfil.innerHTML += `<p>Bienvenido, <strong>${usuario.nombre}</strong></p>`;
  }

  const galeria = document.getElementById("galeria");
  if (galeria) {
    usuario.dibujos.forEach(dibujo => {
      const card = document.createElement("div");
      card.className = "dibujo";
      card.id = dibujo.id;
      card.dataset.categoria = dibujo.categoria;
      card.dataset.privado = dibujo.privado;

      card.innerHTML = `
        <h3>${dibujo.titulo}</
