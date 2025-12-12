/* particles-config.js */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 110, // Yoğunluk artırıldı
      "density": {
        "enable": true,
        "value_area": 1200
      }
    },
    "color": {
      "value": "#FF4500" // Turuncu Parçacık
    },
    "shape": {
      "type": "star", // Yıldız şekli (daha agresif)
      "stroke": {
        "width": 1,
        "color": "#00FF41" // Yeşil Çizgi
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
      "color": "#00FF41", // Elektrik Yeşili
      "opacity": 0.5,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1, // Çok yavaş hareket
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
        "mode": "repulse" // Mouse'un etrafında parçacıkları şiddetle iterek boş alan (üçgen hissi) oluşturma
      },
      "onclick": {
        "enable": true,
        "mode": "push" 
      },
      "resize": true
    },
    "modes": {
      "repulse": {
        "distance": 120, // İtme mesafesi
        "duration": 0.5
      },
      "push": {
        "particles_nb": 4
      }
    }
  },
  "retina_detect": true
});
