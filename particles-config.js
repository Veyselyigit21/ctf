/* particles-config.js - SİBER ATÜ CTF NEON GLITCH TEMA */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 110, // Parçacık yoğunluğu
      "density": {
        "enable": true,
        "value_area": 1200
      }
    },
    "color": {
      "value": "#FF4500" // Parçacık rengi (Parlak Turuncu)
    },
    "shape": {
      "type": "polygon", // Köşeli ve üçgen formasyonu için şekil
      "nb_sides": 3,     // Üçgen formasyonu
      "stroke": {
        "width": 1,
        "color": "#00FF41" // Çizgi rengi (Elektrik Yeşili)
      }
    },
    "opacity": {
      "value": 0.8,
      "random": true,
      "anim": {
        "enable": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 140, // Bağlantı mesafesi
      "color": "#00FF41", // Elektrik Yeşili
      "opacity": 0.5,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1, // Yavaş, arka plan hareketi
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab" // Mouse yaklaştığında çekerek üçgenleri belirginleştirme modu
      },
      "onclick": {
        "enable": true,
        "mode": "push" // Tıklayınca yeni parçacık ekleme
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 150, // Mouse'a yaklaştıkça bağlanma mesafesi
        "line_linked": {
          "opacity": 1 // Bağlantıların opaklığını artırır
        }
      },
      "push": {
        "particles_nb": 4
      }
    }
  },
  "retina_detect": true
});
