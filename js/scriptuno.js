  // Paso 1: declarar variables y elementos
  const accordeon = document.querySelector(".accordion");
  const headersAll = document.querySelectorAll(".accordion-header");
  const accordionItems = document.querySelectorAll(".accordion-item");

  //Paso 2: nuestras funciones

  headersAll.forEach(header => {

      header.addEventListener("click", () => {

          const item = header.closest(".accordion-item");

          // cerrar todos los content (quitar el active)

          cerrarTodas();
          // abrir el content al que le hice click (agregar active)

          item.classList.toggle("active");

      });

  });

  header[0].click();
  //Paso 3: ejecutar nuestro codigo
  // activar el primer accordion


  function cerrarTodas() {
      accordionItems.forEach(elemento => {
          elemento.classList.remove("active");
      })
  }
