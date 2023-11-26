
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

 
  
  function chargerCartes() {
    const conteneur = document.getElementById('card-container');
  
    // Récupère les informations sur les cartes du JSON
    const cartes = cartesJSON.cartes;
  
    // Boucle pour créer les éléments HTML pour chaque carte
    for (let i = 0; i < cartes.length; i++) {
      const carte = cartes[i];
  
      // Crée un élément div pour la carte
      const cardDiv = document.createElement('div');
      cardDiv.classList.add('card');

       // Utilise une fonction anonyme pour capturer la valeur actuelle de cardDiv
    (function (currentCardDiv) {
        cardDiv.onclick = function () { agrandirCarte(currentCardDiv); };
      })(cardDiv);

  
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
  
  function agrandirCarte(carte) {
    const conteneur = document.getElementById('card-container');
    conteneur.appendChild(carte);
   
    
    // Détache la classe 'agrandie' des autres cartes
    const cartes = conteneur.getElementsByClassName('card');
    for (let i = 0; i < cartes.length; i++) {
        if (cartes[i] !== carte && cartes[i].classList.contains('agrandie')) {
        cartes[i].classList.remove('agrandie');
        }
    }

    carte.classList.toggle('agrandie');
}

    // Appel de la fonction pour charger les cartes
    chargerCartes();

  

  
  