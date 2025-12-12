/* particles-config.js */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80, // Parçacık sayısı
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#5e72e4" // Parçacık rengi (var(--color-primary))
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
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
      "distance": 150, // Çizgilerin bağlanma mesafesi
      "color": "#00f2fe", // Çizgi rengi (var(--color-secondary))
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3, // Parçacık hareket hızı
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab" // Mouse üzerine gelince çekme/bağlanma modu
      },
      "onclick": {
        "enable": true,
        "mode": "push" // Tıklayınca yeni parçacık ekleme
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1 // Mouse yaklaştığında çizgilerin opaklığını artırır
        }
      },
      "push": {
        "particles_nb": 4
      }
    }
  },
  "retina_detect": true
});