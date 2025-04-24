document.getElementById('calculate').addEventListener('click', function() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operation = document.getElementById('operation').value;
    let result;

    if (operation === 'add') {
        result = num1 + num2;
    } else if (operation === 'subtract') {
        result = num1 - num2;
    } else if (operation === 'multiply') {
        result = num1 * num2;
    } else if (operation === 'divide') {
        if (num2 === 0) {
            alert("On ne divise pas par zéro !");
            return;
        }
        result = num1 / num2;
    }

    alert('Le résultat est : ' + result);
});
const textElement = document.getElementById('colorText');

// Change la couleur au survol
textElement.addEventListener('mouseover', function() {
    textElement.style.color = 'blue'; // Couleur au survol
});

// Rétablit la couleur d'origine lorsque la souris quitte
textElement.addEventListener('mouseout', function() {
    textElement.style.color = '#ffcc00'; // Couleur par défaut
});
const test = document.getElementById('test');
test.addEventListener('click', function() {
    test.style.color = 'red';
});