/* ============================================================
   script.js — Interactividad para mascotas.html
   Vanessa Fontalvo · Portafolio Personal

   Este archivo demuestra tres formas en que JavaScript puede
   modificar el contenido de una página y reaccionar a acciones
   del usuario:

   1. WELCOME TOAST   — muestra un mensaje de bienvenida en pantalla
   2. SHOW / HIDE     — un botón muestra u oculta contenido (párrafo)
   3. LIKE BUTTONS    — botones que responden con un efecto dinámico

   Cómo funciona la conexión HTML ↔ JS:
   - document.getElementById('id')  →  selecciona un elemento por su id
   - element.classList.add / remove / toggle  →  agrega o quita clases CSS
   - element.textContent = '...'  →  cambia el texto de un elemento
   - element.addEventListener('click', función)  →  escucha clics del usuario
   ============================================================ */


/* ============================================================
   FEATURE 1 — WELCOME TOAST
   ¿Qué hace? Cuando la página termina de cargar, aparece un
   mensaje verde desde abajo que se oculta solo 3 segundos después.

   Conceptos de JS usados:
   · document.getElementById()  — seleccionar un elemento del DOM
   · classList.add / remove     — activar/desactivar una clase CSS
   · setTimeout(fn, ms)         — ejecutar algo después de X milisegundos
   ============================================================ */

// Esperar a que todo el HTML esté listo antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function () {

  // 1. Seleccionamos el elemento toast por su id
  var toast = document.getElementById('welcome-toast');

  // Si el elemento no existe en la página, salimos sin errores
  if (!toast) return;

  // 2. Mostramos el toast 700ms después de cargar la página
  //    classList.add agrega la clase 'toast-visible', que CSS usa
  //    para aplicar la animación de entrada (definida en petstyles.css)
  setTimeout(function () {
    toast.classList.add('toast-visible');
  }, 700);

  // 3. Ocultamos el toast 3.5 segundos después de que apareció
  //    classList.remove quita la clase, lo que revierte la animación
  setTimeout(function () {
    toast.classList.remove('toast-visible');
  }, 4200);

});


/* ============================================================
   FEATURE 2 — MOSTRAR / OCULTAR CONTENIDO
   ¿Qué hace? El botón "¿Sabías que...?" abre y cierra un panel
   con un dato curioso. Cada vez que se abre, el dato cambia.
   El texto del botón también cambia para reflejar el estado actual.

   Conceptos de JS usados:
   · classList.toggle()           — alterna una clase (la agrega si no está, la quita si está)
   · element.textContent = '...'  — reemplaza el texto visible de un elemento
   · setAttribute()               — actualiza atributos HTML (como aria-expanded)
   · Arrays y el operador %       — para rotar entre varios elementos
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  var btn   = document.getElementById('btn-toggle-fact');
  var panel = document.getElementById('fact-panel');
  var text  = document.getElementById('fact-text');

  // Si alguno de los tres elementos no existe, salimos
  if (!btn || !panel || !text) return;

  // Lista de datos curiosos — JS rotará entre ellos cada vez que se abra el panel
  var facts = [
    '🐾 El vínculo entre humanos y mascotas existe hace más de 15,000 años. Los perros fueron los primeros animales domesticados.',
    '🐱 Los gatos ronronean a una frecuencia de 25–150 Hz, lo que puede acelerar la curación de huesos y tejidos.',
    '🥭 Los Golden Retrievers tienen la boca más delicada entre los perros: pueden llevar un huevo sin romperlo.',
    '🐇 Los conejos se comunican con su cuerpo: cuando saltan y giran en el aire, están expresando alegría pura.'
  ];

  // Índice para saber cuál dato mostrar. Empieza en -1 para que el primer clic muestre el [0]
  var factIndex = -1;

  // Escuchamos el evento 'click' del botón
  btn.addEventListener('click', function () {

    // toggle devuelve true si la clase fue AGREGADA, false si fue ELIMINADA
    var isOpen = panel.classList.toggle('panel-open');
    btn.classList.toggle('is-open', isOpen);

    // Actualizamos el atributo aria-expanded para accesibilidad
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

    if (isOpen) {
      // Avanzamos al siguiente dato curioso de la lista
      // El operador % (módulo) hace que el índice vuelva a 0 cuando llega al final
      factIndex = (factIndex + 1) % facts.length;

      // Cambiamos el texto del párrafo dentro del panel
      text.textContent = facts[factIndex];

      // Cambiamos el texto del botón para indicar que se puede cerrar
      btn.querySelector('.btn-text').textContent = '¡Ocultar!';

    } else {
      // Restauramos el texto original del botón al cerrar
      btn.querySelector('.btn-text').textContent = '¿Sabías que...?';
    }

  });

});


/* ============================================================
   FEATURE 3 — LIKE BUTTONS (efecto dinámico)
   ¿Qué hace? Cada tarjeta de mascota tiene un botón "Me gusta".
   Al hacer clic: el ícono cambia a ❤️, el texto cambia a
   "¡Me encanta!" y el botón adquiere color. Un segundo clic
   deshace el like y vuelve al estado original.

   Conceptos de JS usados:
   · querySelectorAll()    — seleccionar múltiples elementos a la vez
   · forEach()             — iterar sobre una lista de elementos
   · Variables booleanas   — guardar el estado (liked: true / false)
   · e.stopPropagation()   — evitar que el clic se propague al padre
   · void element.offsetWidth — forzar un reflow para reiniciar animaciones CSS
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  // Seleccionamos TODOS los botones de like en la página
  var likeButtons = document.querySelectorAll('.pet-like-btn');

  // Iteramos sobre cada botón con forEach
  likeButtons.forEach(function (btn) {

    // Cada botón tiene su propio estado independiente
    var liked = false;

    btn.addEventListener('click', function (e) {

      // Evitamos que el clic "suba" al artículo padre
      e.stopPropagation();

      // Invertimos el estado: si era true pasa a false, y viceversa
      liked = !liked;

      // Seleccionamos los sub-elementos del botón
      var heart = btn.querySelector('.like-heart');
      var label = btn.querySelector('.like-label');

      if (liked) {
        // — Estado: LE DI LIKE —
        heart.textContent = '❤️';
        label.textContent = '¡Me encanta!';

        // Agregamos la clase que activa el color y la animación CSS
        btn.classList.add('liked');

        // Para reiniciar la animación CSS, debemos quitarla y agregarla:
        // 1. Quitamos la animación
        heart.style.animation = 'none';
        // 2. Forzamos al navegador a "ver" el cambio (reflow)
        void heart.offsetWidth;
        // 3. Restauramos la animación para que vuelva a ejecutarse
        heart.style.animation = '';

      } else {
        // — Estado: QUITÉ EL LIKE —
        heart.textContent = '🤍';
        label.textContent = 'Me gusta';
        btn.classList.remove('liked');
      }

    });

  });

});


/* ============================================================
   HAMBURGER MENU
   Controla la apertura y cierre del menú de navegación móvil.
   Ya estaba funcionando en el HTML — aquí lo centralizamos
   en este archivo para tener toda la lógica JS en un solo lugar.
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  var hamburgerBtn = document.getElementById('hamburger');
  var mainNav      = document.getElementById('main-nav');

  if (!hamburgerBtn || !mainNav) return;

  hamburgerBtn.addEventListener('click', function () {
    var isOpen = mainNav.classList.toggle('nav-open');
    hamburgerBtn.classList.toggle('is-open', isOpen);
    hamburgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Cierra el menú automáticamente al tocar un enlace
  mainNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mainNav.classList.remove('nav-open');
      hamburgerBtn.classList.remove('is-open');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    });
  });

});
