// === AGREGAR PRODUCTOS AL CARRITO ===
const botones = document.querySelectorAll(".agregar-carrito");

botones.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    const producto = e.target.closest(".producto");
    const nombre = producto.querySelector(".nombre").textContent;
    const precio = parseFloat(producto.querySelector(".precio").textContent.replace('$', ''));

    // Leer carrito actual o crear uno vacío
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    // Agregar producto nuevo (como objeto con nombre y precio)
    carrito.push({ nombre, precio });

    // Guardar en localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));

    alert(`${nombre} se agregó al carrito 🛒`);
  });
});
