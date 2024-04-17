let secretNumber;

document.getElementById('ingNumForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    secretNumber = parseInt(document.getElementById('ingNumInput').value);
    document.getElementById('ingNumForm').style.display = 'none';
    document.getElementById('secretNumberLabel').textContent = "Número secreto ingresado";
    document.getElementById('secretNumberLabel').style.display = 'block';
    
});

document.getElementById('advNumForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var guess = parseInt(document.getElementById('advNumInput').value);
    var message = document.getElementById('message');

    if (guess === secretNumber) {
        message.textContent = '¡Felicitaciones! ¡Adivinaste el número!';
        message.style.color = 'green';
        document.getElementById('imagenCongratulation').style.display = 'flex'; // Mostrar la imagen de felicidad

    } else {
        message.textContent = '¡Incorrecto! Intenta de nuevo.';
        message.style.color = 'red';
    }
});
