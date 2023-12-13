

  const cartes = document.querySelectorAll('.card');

  cartes.forEach(carte => {
    carte.addEventListener('mouseenter', jouerBruitage);
  });

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
              "nom": "Arceus EX full art",
              "url": "https://imgur.com/xiJF6at.png"
            },
            {
              "nom": "Kaio EX full Art",
              "url": "https://imgur.com/7KPi4Vh.png"
            },
            {
              "nom": "Hydre Terrestre EX full art",
              "url": "https://imgur.com/68S8rg0.jpg"
            },
            {
              "nom": "Jet Bahamut EX full art",
              "url": "https://imgur.com/Hb00mGF.jpg"
            },
            {
              "nom": "Lugia EX full art",
              "url": "https://imgur.com/1mfJW83.jpg"
            },
            {
              "nom": "Missigno, 1ère forme full art",
              "url": "https://imgur.com/7idD1EY.png"
            },
            {
              "nom": "Missigno, forme semi-complète",
              "url": "https://imgur.com/vnD64v3.png"
            },
            {
              "nom": "Boss ultime de la 4e classe : Missigno forme complète full art",
              "url": "https://imgur.com/mNSoej9.jpg"
            },
            {
              "nom": "Yveltal EX full art alternative",
              "url": "https://imgur.com/bBuMv7u.jpg"
            },
            {
              "nom": "Meta Knight EX full art alternative",
              "url": "https://imgur.com/quXi5q1.jpg"
            },
            {
              "nom": "Asta EX full art alternative",
              "url": "https://imgur.com/AEjZxhE.jpg"
            },
            {
              "nom": "Exagide forme parade EX full art alternative",
              "url": "https://imgur.com/3rlreK6.jpg"
            },
            {
              "nom": "Exagide forme assaut EX full art alternative",
              "url": "https://imgur.com/agMtZRc.jpg"
            },
            {
              "nom": "Chevalier Dragon EX full art alternative",
              "url": "https://imgur.com/KRrVfEH.jpg"
            },
            {
              "nom": "Flamerax EX full art",
              "url": "https://imgur.com/MrdxRFO.jpg"
            },
            {
              "nom": "Mizusar EX full art",
              "url": "https://imgur.com/6t4UpDH.jpg"
            },
            {
              "nom": "Optoger EX full art",
              "url": "https://imgur.com/aadpmZs.jpg"
            },
            {
              "nom": "Sonic Trinité full art",
              "url": "https://imgur.com/OWDY5cM.jpg"
            },
            {
              "nom": "Totegarda chromatique trinité full art",
              "url": "https://imgur.com/9O95me9.jpg"
            },
            {
              "nom": "Poussifeu EX full art alternative",
              "url": "https://imgur.com/HoFPWep.jpg"
            },
            {
              "nom": "Méga Braségali EX full art alternative",
              "url": "https://imgur.com/Cd0szrc.jpg"
            },
            {
              "nom": "Shulk EX full art alternative",
              "url": "https://imgur.com/9iVbGS4.jpg"
            },
            {
              "nom": "Projet Yasuo EX full art",
              "url": "https://imgur.com/j6cT5CQ.jpg"
            },
            {
              "nom": "True damage Yasuo EX full art",
              "url": "https://imgur.com/hEjyxzz.jpg"
            },
            {
              "nom": "Le champion du tachi EX full art alternative",
              "url": "https://imgur.com/ZyQImQv.jpg"
            },
            {
              "nom": "Rallen EX full art alternative",
              "url": "https://imgur.com/y8M2WKR.jpg"
            },
            {
              "nom": "Sonic trinité full art fantôme",
              "url": "https://imgur.com/DwvAi5b.jpg"
            },
            {
              "nom": "Totegarda chromatique trinité full art fantôme",
              "url": "https://imgur.com/uZnX1K3.jpg"
            },
            {
              "nom": "Le dragon dorée évolué gold secrète full art",
              "url": "https://imgur.com/7cSt9e4.jpg"
            },
            {
              "nom": "Flamerax EX full art gold secrète",
              "url": "https://imgur.com/TWYWTVW.jpg"
            },
            {
              "nom": "Mizusar EX full art gold secrète",
              "url": "https://imgur.com/ebfNtD3.jpg"
            },
            {
              "nom": "Optoger EX full art gold secrète",
              "url": "https://imgur.com/69bby4P.jpg"
            },
            {
              "nom": "Exagide et Palkia Légende Partie 1",
              "url": "https://imgur.com/WptwKaa.jpg"
            },
            {
              "nom": "Exagide et Palkia Légende Partie 2",
              "url": "https://imgur.com/29EV2lU.jpg"
            },
            {
              "nom": "Exagide et Palkia Légende Partie 3",
              "url": "https://imgur.com/kbRIwQg.jpg"
            },
      ]
    };

    document.addEventListener('DOMContentLoaded', function () {

      const cartes = document.querySelectorAll('.card');
      

      // Ajoutez un gestionnaire d'événements à chaque carte
      cartes.forEach(carte => {
          carte.addEventListener('mouseenter', function () {
              // Jouez le son
              carteAudio.play();

              // Ajoutez d'autres actions, par exemple agrandir la carte
              agrandirCarte(carte);
          });

          carte.addEventListener('mouseleave', function () {
              // Ajoutez d'autres actions, par exemple réduire la carte
              retrecirCarte(carte);
          });
      });

      // Fonction pour agrandir la carte
      function agrandirCarte(carte) {
        carte.style.transform = 'scale(1.2)';
      }
  
      // Fonction pour réduire la carte
      function retrecirCarte(carte) {
        carte.style.transform = 'scale(1)';
      }
  
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

      const cartesParPage = 10;
      let pageActuelle = 1;
      let largeurPage;
      const nombreTotalDePages = Math.ceil(cartesJSON.cartes.length / cartesParPage);

      function chargerPage(page, direction) {

        const conteneur = document.getElementById('card-container');

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

      function rétrécirCartes() {
        const cartes = document.querySelectorAll('.carte');
        cartes.forEach(carte => {
            carte.classList.add('rétrécir');
        });
      }

      function chargerPageSuivante() {
        const nouvellesCartes = document.querySelectorAll('.nouvelle-carte');
        nouvellesCartes.forEach(carte => {
            carte.classList.add('agrandir');
        });
      }

        // Ajoutez cet écouteur d'événements une fois que le DOM est chargé
        document.addEventListener('DOMContentLoaded', function () {
        // Assurez-vous de sélectionner les bons boutons avec les bons ID
        document.getElementById('precedent').addEventListener('click', function () {
            changerPage('précédent');
        });

        document.getElementById('suivant').addEventListener('click', function () {
            changerPage('suivant');
        });
      });


      document.querySelector('#carte-agrandie');
    
      cartes.forEach((carte) => {
          carte.addEventListener('mouseenter', () => {
              // Lorsque la souris survole la carte, agrandissez-la et jouez le bruitage
              agrandirCarte(carte);
              jouerBruitage();
          });

          carte.addEventListener('mouseleave', () => {
              // Lorsque la souris quitte la carte, rétablissez sa taille normale
              retrecirCarte(carte);
          });
      });
      
      document.addEventListener('DOMContentLoaded', function () {
        const boutonMusique = document.getElementById('btnMusique');
        const musique = document.getElementById('musique');

        boutonMusique.addEventListener('click', function () {
            if (musique.paused) {
                // Si la musique est en pause, démarrez-la
                musique.play();
                boutonMusique.textContent = 'Éteindre la musique';
            } else {
                // Si la musique est en cours de lecture, mettez-la en pause
                musique.pause();
                boutonMusique.textContent = 'Ajoutons une petite musique d\'ambiance ?';
            }
        });
    });

    /* Bruitage au survol d'une carte */

      document.addEventListener("DOMContentLoaded", function () {
        // Vérification de la compatibilité avec l'API Audio Web
        if (window.HTMLAudioElement) {
            // Initialisation de Howler.js
            var carte = document.getElementById("carte-agrandie");
    
            var carteAudio = new Howl({
                src: ['./Bruitage_carte.mp3'],
                onload: function () {
                    console.log("Fichier audio chargé:", carteAudio);
                    var duree = carteAudio.duration();
                    console.log("Durée du fichier audio:", duree);
                }
            });
    
            if (carte) {
                carte.addEventListener("mouseenter", function () {
                    // Jouer le son lorsque la carte est survolée
                    carteAudio.play();
                });
    
                // Si vous souhaitez arrêter le son lorsque le survol se termine
                carte.addEventListener("mouseleave", function () {
                    carteAudio.stop();
                });
            } else {
                console.error("L'élément avec l'ID 'carte-agrandie' n'a pas été trouvé.");
            }
        } else {
            console.error("Votre navigateur ne prend pas en charge l'API Audio Web.");
        }
    });
    



  
  

  
  