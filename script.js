const cartes = document.querySelectorAll('.card');

function dollars () {
    console.log("La fonction dollars est appelée !");
    var $cards = $(".card");

    $cards.on("mousemove", function(e) {
      console.log("Souris déplacée sur une carte !");
      var $card = $(this);
      var l = e.offsetX;
      var t = e.offsetY;
      var h = $card.height();
      var w = $card.width();   
      var lp = Math.abs(Math.floor(100 / w * l)-100);
      var tp = Math.abs(Math.floor(100 / h * t)-100);
      var bg = 'background-position: ' + lp + '% ' + tp + '%;';
      var style = '.card.active:before { ' + bg + ' }';
      $cards.removeClass("active");
      $card.addClass("active");
      console.log("Style :", style);
      '$(".hover").css("background-position", "50% 50%");'
    }).on("mouseout", function() {
        console.log("Souris sortie de la carte !");
        $cards.removeClass("active");
    });
}


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
          {
            "nom": "card9",
            "url": "https://imgur.com/7Qm9rxm.png"
          },
          {
            "nom": "card10",
            "url": "https://imgur.com/fY1rDd8.png"
          },
          {
            "nom": "card11",
            "url": "https://imgur.com/vnD64v3.png"
          },
          {
            "nom": "card12",
            "url": "https://imgur.com/1XrrAC2.png"
          },
          {
            "nom": "card13",
            "url": "https://imgur.com/MrdxRFO.jpg"
          },
          {
            "nom": "card14",
            "url": "https://imgur.com/6t4UpDH.jpg"
          },
          {
            "nom": "card15",
            "url": "https://imgur.com/aadpmZs.jpg"
          },
          {
            "nom": "card16",
            "url": "https://imgur.com/TWYWTVW.jpg"
          },
          {
            "nom": "card17",
            "url": "https://imgur.com/ebfNtD3.jpg"
          },
          {
            "nom": "card18",
            "url": "https://imgur.com/69bby4P.jpg"
          },
    ]
  };

  document.addEventListener('DOMContentLoaded', function () {


    const conteneur = document.getElementById('card-container');
    const carteAgrandie = document.getElementById('carte-agrandie');
  
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
      cardDiv.classList.add('card', 'hover');
  
      // Crée un élément img avec l'URL de l'image
      const imgElement = document.createElement('img');
      imgElement.src = carte.url;
      imgElement.alt = carte.nom;
  
      // Ajoutez un gestionnaire d'événements pour afficher la carte agrandie
      cardDiv.addEventListener('mouseenter', function () {
        agrandirCarte(carteAgrandie, carte.url);
      });

      // Ajoute l'élément img à l'élément div
      cardDiv.appendChild(imgElement);
  
      // Ajoute l'élément div au conteneur
      conteneur.appendChild(cardDiv);
    }

      chargerPage(pageActuelle, 'initial');
  });

// Déclarer la variable carteAgrandie en dehors de la fonction
const carteAgrandie = document.getElementById('carte-agrandie');


function agrandirCarte(carte) {
  
  // Assurez-vous que carteAgrandie est défini
  if (carteAgrandie && carte && carte.querySelector('img')) {

      const imgSrc = carte.querySelector('img').src;

      // Afficher la carte agrandie
      carteAgrandie.innerHTML = `<img src="${imgSrc}" alt="Objet agrandi">`;
      carteAgrandie.style.display = 'block';

      // Désactiver les effets de mise en page normaux pendant l'agrandissement
      document.body.style.overflow = 'hidden';
  }
}
  
function reduireCarte() {
  // Assurez-vous que carteAgrandie est défini
  if (carteAgrandie) {
      // Cacher la carte agrandie
      carteAgrandie.style.display = 'none';

      // Réactiver les effets de mise en page normaux après l'agrandissement
      document.body.style.overflow = 'auto';
  }
}

function activerEffetAgrandissement() {
  const toutesLesCartes = document.querySelectorAll('.card');

  toutesLesCartes.forEach(carte => {
      carte.addEventListener('mouseenter', function () {
          agrandirCarte(carte);
      });

      carte.addEventListener('mouseleave', function () {
          // Réinitialiser l'effet au survol lorsque la souris quitte la carte
          reduireCarte();
      });
  });
}


const cartesParPage = 8;
let pageActuelle = 1;
const nombreTotalDePages = Math.ceil(cartesJSON.cartes.length / cartesParPage);

function chargerPage(page, direction) {

  const nouvellePosition = (page - 1) * largeurPage * -1;
  document.getElementById('card-container').style.transform = `translateX(${nouvellePosition}px)`;


  // Gestion de l'opacité des boutons
  const precedent = document.getElementById('precedent');
  const suivant = document.getElementById('suivant');
  precedent.style.opacity = page === 1 ? 0.5 : 1;
  suivant.style.opacity = page === nombreTotalDePages ? 0.5 : 1;

  // Gestion de l'animation des boutons
  const navigationContainer = document.getElementById('navigation-container');
  navigationContainer.style.opacity = '0'; // Masque les boutons pendant l'animation
  setTimeout(() => {
    navigationContainer.style.opacity = '1'; // Réaffiche les boutons après l'animation
  }, 500);

  // Ajouter une classe de direction pour l'animation CSS
  conteneur.classList.add(direction);

  // Effacer le contenu actuel après l'animation
  setTimeout(() => {
    conteneur.innerHTML = '';

  const debut = (page - 1) * cartesParPage;
  const fin = debut + cartesParPage;
  
  for (let i = debut; i < fin && i < cartesJSON.cartes.length; i++) {
    const carte = cartesJSON.cartes[i];
    // Créez et ajoutez vos éléments de carte ici
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    const imgElement = document.createElement('img');
    imgElement.src = carte.url;
    imgElement.alt = carte.nom;

    cardDiv.appendChild(imgElement);
    conteneur.appendChild(cardDiv);

  }

    // Retirez la classe de direction après le chargement de la page
    conteneur.classList.remove(direction);
  }, 500); // Réglez la durée de l'animation ici (en millisecondes)
}

function changerPage(direction) {

  const nouvellePage = pageActuelle + direction;

  // Vérifier si la nouvelle page est valide
  if (nouvellePage >= 1 && nouvellePage <= nombreTotalDePages) {
    pageActuelle = nouvellePage;
    chargerPage(pageActuelle, direction > 0 ? 'slide-gauche' : 'slide-droite');
  }
}



  
  

  
  