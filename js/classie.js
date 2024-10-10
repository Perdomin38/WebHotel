/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

var deluxeSwiper = new Swiper('.swiper-deluxe', {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-deluxe .swiper-button-next', // Específico para deluxe
    prevEl: '.swiper-deluxe .swiper-button-prev', // Específico para deluxe
  },
});

var deluxeViewSwiper = new Swiper('.swiper-deluxe-view', {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-deluxe-view .swiper-button-next', // Específico para deluxe view
    prevEl: '.swiper-deluxe-view .swiper-button-prev', // Específico para deluxe view
  },
});

// Mostrar el pop-up al cargar la página
document.addEventListener('DOMContentLoaded', function() {
  var cookiePopup = document.getElementById('cookie-popup');
  cookiePopup.style.display = 'block'; // Mostrar el pop-up
  
  // Manejar el clic en el botón "Aceptar"
  document.getElementById('accept-cookies').addEventListener('click', function() {
      cookiePopup.style.display = 'none'; // Ocultar el pop-up
      // Aquí puedes agregar lógica para guardar la aceptación de cookies, si es necesario
  });
  
  // Manejar el clic en el botón "Denegar"
  document.getElementById('deny-cookies').addEventListener('click', function() {
      alert('No puedes acceder a la página.'); // Mensaje informativo
      window.location.href = "https://www.google.com"; // Redirigir a otra página (ejemplo)
  });
  
  // Manejar el clic en el botón de cerrar
  document.getElementById('close-popup').addEventListener('click', function() {
      cookiePopup.style.display = 'none'; // Ocultar el pop-up
  });
});



( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );
