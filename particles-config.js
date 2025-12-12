/* particles-config.js */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 120, 
      "density": {
        "enable": true,
        "value_area": 1200
      }
    },
    "color": {
      "value": "#00FF00" // Neon Yeşil Parçacık
    },
    "shape": {
      "type": "polygon", 
      "nb_sides": 3,     
      "stroke": {
        "width": 1,
        "color": "#FF00FF" // Magenta Çizgi
      }
    },
    "opacity": {
      "value": 0.8,
      "random": true,
    },
    "size": {
      "value": 3,
      "random": true,
    },
    "line_linked": {
      "enable": true,
      "distance": 140, 
      "color": "#FF00FF", // Magenta Çizgiler
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1, 
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
        "mode": "grab" // Mouse'a yaklaşınca çekerek üçgenleri belirginleştirme
      },
      "onclick": {
        "enable": true,
        "mode": "push" 
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 150, 
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
