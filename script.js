const cartes = document.querySelectorAll('.card');

jQuery.noConflict();

function dollars () {
    var $cards = $(".card");
    var $style = $(".hover");
    $cards.on("mousemove", function(e) {
    var $card = $(this);
    var l = e.offsetX;
    var t = e.offsetY;
    var h = $card.height();
    var w = $card.width();   
    var lp = Math.abs(Math.floor(100 / w * l)-100);
    var tp = Math.abs(Math.floor(100 / h * t)-100);
    var bg = 'background-position: ${lp}% ${tp}%;'
    var style = 'card.active:before { ${bg} }'
    $cards.removeClass("active");
    $card.addClass("active");
    $style.html(style);
    }).on("mouseout", function() {
        $cards.removeClass("active");
    });
};


// Exemple de structure JSON avec les informations sur les images des cartes
const cartesJSON = {
    "cartes": [
        {
            "nom": "card1",
            "url": "https://imgur.com/xiJF6at.png"
          },
          {
            "nom": "card2",
            "url": "https://imgur.com/7KPi4Vh.png"
          },
          {
            "nom": "card3",
            "url": "https://imgur.com/EJo1ZeT.png"
          },
          {
            "nom": "card4",
            "url": "https://imgur.com/Z76LqFi.png"
          },
          {
            "nom": "card5",
            "url": "https://imgur.com/nPetBtP.png"
          },
          {
            "nom": "card6",
            "url": "https://imgur.com/wf4e6zO.png"
          },
          {
            "nom": "card7",
            "url": "https://imgur.com/4DeHhgZ.jpg"
          },
          {
            "nom": "card8",
            "url": "https://imgur.com/Zi7eOJf.png"
          },
    ]
  };

  document.addEventListener('DOMContentLoaded', function () {
    chargerCartes();
  });

  function chargerCartes() {
    const conteneur = document.getElementById('card-container');
  
    // Assurez-vous que l'élément avec l'ID 'card-container' existe avant de continuer
    if (!conteneur) {
      console.error("Erreur : L'élément avec l'ID 'card-container' n'a pas été trouvé.");
      return;
    }
  
    // Simulation d'une chaîne JSON
    // Convertissez la chaîne JSON en un objet JavaScript avec JSON.parse
    const imagesJson = cartesJSON.cartes;
  
    // Assurez-vous que le conteneur est vide avant d'ajouter des cartes
    conteneur.innerHTML = '';
  
    // Boucle pour créer les éléments HTML pour chaque carte
    for (let i = 0; i < imagesJson.length; i++) {
      const carte = imagesJson[i];
  
      // Crée un élément div pour la carte
      const cardDiv = document.createElement('div');
      cardDiv.classList.add('card');
  
      // Ajoute un gestionnaire d'événements pour chaque carte
      cardDiv.addEventListener('mouseenter', function () {
        agrandirCarte(cardDiv);
      });
  
      // Crée un élément img avec l'URL de l'image
      const imgElement = document.createElement('img');
      imgElement.src = carte.url;
      imgElement.alt = carte.nom;
  
      // Ajoute l'élément img à l'élément div
      cardDiv.appendChild(imgElement);
  
      // Ajoute l'élément div au conteneur
      conteneur.appendChild(cardDiv);
    }
  }
  





  
  

  
  