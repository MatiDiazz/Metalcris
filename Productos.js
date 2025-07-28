document.addEventListener("DOMContentLoaded", function () {
  const productos = document.querySelectorAll(".producto");
  const modal = document.getElementById("modalProducto");
  const modalImg = modal.querySelector("img");
  const modalTitle = modal.querySelector(".modal-title");
  const modalDesc = modal.querySelector(".modal-desc");
  const modalNormas = modal.querySelector(".modal-normas");
  const modalAplicaciones = modal.querySelector(".modal-aplicaciones");
  const modalVariantes = modal.querySelector(".modal-variantes");
  const closeBtn = modal.querySelector(".cerrar");

  const datosProductos = [
    {
    nombre: "Delgas de Cu y Ag",
    imagen: "imagenes/Product/Delga.png",
    descripcion: "Delgas de cobre y plata para conexiones eléctricas de alta conductividad.",
    normas: "ASTM B187, DIN EN 13601",
    aplicaciones: "Conexiones eléctricas, colectores de corriente, contactos móviles.",
    variantes: "Atendemos requerimientos conforme a otras normas o especificaciones, previa consulta."
  },
  {
    nombre: "Planchuelas de cobre",
    imagen: "imagenes/Product/Planchuela Cu.jpg",
    descripcion: "Planchuelas de cobre electrolítico con excelente conductividad.",
    normas: "ASTM B187, NFA 51-105",
    aplicaciones: "Barramentos eléctricos, puesta a tierra, cuadros eléctricos.",
    variantes: "Atendemos requerimientos conforme a otras normas o especificaciones, previa consulta."
  },
  {
    nombre: "Barras de cobre",
    imagen: "imagenes/Product/barras de cu.png",
    descripcion: "Barras macizas de cobre para aplicaciones eléctricas e industriales.",
    normas: "ASTM B187, IEC 60439",
    aplicaciones: "Tableros eléctricos, conectores, sistemas de distribución.",
    variantes: "Atendemos requerimientos conforme a otras normas o especificaciones, previa consulta."
  },
  {
    nombre: "Planchuelas forradas",
    imagen: "imagenes/Product/Planchuela forrada.jpg",
    descripcion: "Planchuelas de cobre recubiertas para aislamiento eléctrico.",
    normas: "ASTM B187 + recubrimiento según IEC 60695",
    aplicaciones: "Sistemas de puesta a tierra, instalaciones en exteriores.",
    variantes: "Atendemos requerimientos conforme a otras normas o especificaciones, previa consulta."
  },
  {
    nombre: "Alambres de cobre",
    imagen: "imagenes/Product/Alambre de Cu.png",
    descripcion: "Alambre de cobre de alta pureza para usos eléctricos.",
    normas: "ASTM B1, ASTM B3",
    aplicaciones: "Bobinados, transformadores, motores eléctricos.",
    variantes: "Atendemos requerimientos conforme a otras normas o especificaciones, previa consulta."
  },
  {
    nombre: "Ánodos y chips",
    imagen: "imagenes/Product/Ánodo.jpg",
    descripcion: "Ánodos de cobre para procesos electrolíticos y refinación.",
    normas: "ASTM B115, ISO 431",
    aplicaciones: "Electrodeposición, minería, galvanoplastía.",
    variantes: "Atendemos requerimientos conforme a otras normas o especificaciones, previa consulta."
  },
  {
    nombre: "Perfil hilo de contacto",
    imagen: "imagenes/Product/Perfil Hilo contacto.png",
    descripcion: "Perfil de cobre diseñado para líneas de contacto ferroviarias.",
    normas: "UIC 870, DIN 48201",
    aplicaciones: "Líneas férreas, trolebuses, transporte eléctrico.",
    variantes: "Atendemos requerimientos conforme a otras normas o especificaciones, previa consulta."
  },
  {
    nombre: "Perfiles de cobre",
    imagen: "imagenes/Product/Perfiles Cu.jpg",
    descripcion: "Perfiles extruidos de cobre para usos industriales y eléctricos.",
    normas: "ASTM B124, EN 12167",
    aplicaciones: "Conectores, disipadores, componentes especiales.",
    variantes: "Atendemos requerimientos conforme a otras normas o especificaciones, previa consulta."
  },
  {
    nombre: "Planchuelas de latón",
    imagen: "imagenes/Product/Planchuela de latón.png",
    descripcion: "Planchuelas de latón de alta resistencia mecánica y buena maquinabilidad.",
    normas: "ASTM B36, EN 1652",
    aplicaciones: "Herrajes, componentes industriales, estructuras decorativas.",
    variantes: "Atendemos requerimientos conforme a otras normas o especificaciones, previa consulta."
  },
  {
    nombre: "Barra Latón (prensadas)",
    imagen: "imagenes/Product/Barra Latón 2.jpg",
    descripcion: "Barras de latón obtenidas por extrusión para trabajo mecánico.",
    normas: "ASTM B16, EN 12165",
    aplicaciones: "Piezas torneadas, válvulas, conexiones hidráulicas.",
    variantes: "Atendemos requerimientos conforme a otras normas o especificaciones, previa consulta."
  },
  {
    nombre: "Barra Latón trefilada",
    imagen: "imagenes/Product/Barra Latón 1.jpg",
    descripcion: "Barras trefiladas de latón para mayor precisión dimensional.",
    normas: "ASTM B16, EN 12164",
    aplicaciones: "Accesorios roscados, conectores, componentes de precisión.",
    variantes: "Atendemos requerimientos conforme a otras normas o especificaciones, previa consulta."
  },
  {
    nombre: "Alambre 65/35",
    imagen: "imagenes/Product/65-35.jpg",
    descripcion: "Alambre de latón con buena resistencia y formabilidad.",
    normas: "ASTM B134, EN 12166",
    aplicaciones: "Mallas, remaches, elementos de fijación.",
    variantes: "Atendemos requerimientos conforme a otras normas o especificaciones, previa consulta."
  },
  {
    nombre: "Alambre 70/30",
    imagen: "imagenes/Product/70-30.JPG",
    descripcion: "Alambre de latón con mayor contenido de cobre para mejor resistencia a la corrosión.",
    normas: "ASTM B134, ISO 1634",
    aplicaciones: "Terminales eléctricos, resortes, contactos.",
    variantes: "Atendemos requerimientos conforme a otras normas o especificaciones, previa consulta."
  },
  {
    nombre: "Alambre 85/15",
    imagen: "imagenes/Product/85-15.jpg",
    descripcion: "Latón rojo con alta conductividad y buena resistencia mecánica.",
    normas: "ASTM B135, EN 1652",
    aplicaciones: "Decoración, bijouterie, aplicaciones eléctricas.",
    variantes: "Atendemos requerimientos conforme a otras normas o especificaciones, previa consulta."
  },
  {
    nombre: "Perfiles de latón",
    imagen: "imagenes/Product/Perfiles Latón.png",
    descripcion: "Perfiles extruidos de latón para múltiples usos industriales y decorativos.",
    normas: "ASTM B124, EN 12167",
    aplicaciones: "Cerraduras, herrajes, carpintería metálica.",
    variantes: "Atendemos requerimientos conforme a otras normas o especificaciones, previa consulta."
  }
  ];

  productos.forEach((producto, index) => {
    producto.addEventListener("click", () => {
      const datos = datosProductos[index];
      if (datos) {
        modalImg.src = datos.imagen;
        modalTitle.textContent = datos.nombre;
        modalDesc.innerHTML = `<strong><em>${datos.descripcion}</em></strong>`;
        modalNormas.textContent = datos.normas;
        modalAplicaciones.textContent = datos.aplicaciones;
        modalVariantes.textContent = datos.variantes;
        modal.classList.add("activo");
      }
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("activo");
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("activo");
    }
  });
});