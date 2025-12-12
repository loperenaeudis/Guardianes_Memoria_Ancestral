function mostrarDefinicion(termino) {
    var definicion = termino.nextElementSibling;
    if (definicion.style.display === "none" || definicion.style.display === "") {
      definicion.style.display = "block"; 
    } else {
      definicion.style.display = "none"; 
    }
  }


  document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopButton = document.getElementById("scrollToTop");
  
    // Mostrar el botón cuando el usuario hace scroll hacia abajo
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        scrollToTopButton.classList.add("visible"); // Aparecer con animación
      } else {
        scrollToTopButton.classList.remove("visible"); // Desaparecer
      }
    });
  
    // Acción al hacer clic en el botón
    scrollToTopButton.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth" // Desplazamiento suave
      });
    });
  });
  

function cerrarAviso() {
  document.getElementById('avisoWiwa').style.display = 'none';
}