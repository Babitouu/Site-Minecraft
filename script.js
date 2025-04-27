// Ajoute un écouteur d'événement au bouton avec l'ID 'calculate'
document.getElementById('calculate').addEventListener('click', function() {
    // Récupère les valeurs des champs d'entrée et les convertit en nombres
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operation = document.getElementById('operation').value; // Récupère l'opération sélectionnée
    let result;

    // Effectue l'opération en fonction de la valeur sélectionnée
    if (operation === 'add') {
        result = num1 + num2; // Addition
    } else if (operation === 'subtract') {
        result = num1 - num2; // Soustraction
    } else if (operation === 'multiply') {
        result = num1 * num2; // Multiplication
    } else if (operation === 'divide') {
        if (num2 === 0) { // Vérifie si le dénominateur est zéro
            alert("On ne divise pas par zéro !"); // Alerte l'utilisateur
            return; // Arrête l'exécution
        }
        result = num1 / num2; // Division
    }

    // Affiche le résultat dans une alerte
    alert('Le résultat est : ' + result);
});

// Récupère l'élément avec l'ID 'colorText'
const textElement = document.getElementById('colorText');

// Change la couleur du texte au survol de la souris
textElement.addEventListener('mouseover', function() {
    textElement.style.color = 'blue'; // Définit la couleur bleue au survol
});

// Rétablit la couleur d'origine lorsque la souris quitte l'élément
textElement.addEventListener('mouseout', function() {
    textElement.style.color = '#ffcc00'; // Définit la couleur par défaut
});

// Récupère l'élément avec l'ID 'test'
const test = document.getElementById('test');

// Change la couleur du texte en rouge lorsqu'on clique sur l'élément
test.addEventListener('click', function() {
    test.style.color = 'red'; // Définit la couleur rouge au clic
});
// Récupère les éléments avec le nom 'sympathique'
const elements = document.getElementsByName('sympathique');

// Ajoute un écouteur d'événement à chaque élément récupéré
elements.forEach(function(element) {
    // Ajoute un écouteur d'événement 'click' à chaque élément
    element.addEventListener('click', function() {
        // Affiche une alerte lorsqu'un élément avec le nom 'sympathique' est cliqué
        alert('Vous avez cliqué sur un élément avec le nom "sympathique" !');
    });
    });