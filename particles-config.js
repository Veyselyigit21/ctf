/* particles-config.js */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 110, 
      "density": {
        "enable": true,
        "value_area": 1200
      }
    },
    "color": {
      "value": "#00FFFF" // Parçacık rengi (Elektrik Mavi)
    },
    "shape": {
      "type": "polygon", 
      "nb_sides": 3,     
      "stroke": {
        "width": 1,
        "color": "#00FF00" // Çizgi rengi (Neon Yeşil)
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
      "distance": 140, 
      "color": "#00FF00", 
      "opacity": 0.5,
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
        "mode": "grab" // Mouse yaklaştığında parçacıkları çekerek üçgenleri belirginleştirir
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
