/* particles-config.js */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 100, // Parçacık sayısını artırdık
      "density": {
        "enable": true,
        "value_area": 1000
      }
    },
    "color": {
      "value": "#007bff" // Elektrik Mavisi
    },
    "shape": {
      "type": "polygon", // Üçgen hissini vermek için çokgen tipi
      "nb_sides": 3, 
      "stroke": {
        "width": 1,
        "color": "#00ff66" // Neon Yeşil çizgi
      }
    },
    "opacity": {
      "value": 0.7,
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
      "distance": 120, // Bağlantı mesafesini azalttık (daha sıkı ağ)
      "color": "#00ff66", // Neon Yeşil çizgi
      "opacity": 0.6,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1.5, // Daha yavaş, loş bir hareket
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
        "mode": "repulse" // Mouse'un etrafında parçacıkları iterek üçgen boşluğu oluşturma
      },
      "onclick": {
        "enable": true,
        "mode": "push" 
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "repulse": {
        "distance": 100, // Mouse'dan itme mesafesi
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      }
    }
  },
  "retina_detect": true
});
