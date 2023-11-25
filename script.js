document.addEventListener('DOMContentLoaded', function () {
  const cookie = document.getElementById('cookie');
  const scoreValue = document.getElementById('scoreValue');
  const multiplierMessage = document.getElementById('multiplierMessage');

  let score = 0;
  let ultraClicksActive = false;
  let ultraMasterActive = false;

  cookie.addEventListener('click', function () {
    if (ultraMasterActive) {
      // Si ULTRAMASTER está activado, se dan 3 puntos por clic
      score += 3;
    } else if (ultraClicksActive) {
      // Si ULTRACLICKS está activado, se dan 2 puntos por clic
      score += 2;
    } else {
      // Si no, se da 1 punto por clic
      score++;
    }

    scoreValue.textContent = score;

    // Verificar si se ha alcanzado la cantidad de clics para activar ULTRACLICKS
    if (score >= 200 && !ultraClicksActive) {
      activateUltraClicks();
    }

    // Verificar si se ha alcanzado la cantidad de clics para activar ULTRAMASTER
    if (score >= 600 && !ultraMasterActive) {
      activateUltraMaster();
    }

    // Verificar si se ha alcanzado la cantidad de clics para mostrar el mensaje de desbloqueo
    if (score >= 1500) {
      unlockSecretPage();
    }
  });

  function activateUltraClicks() {
    ultraClicksActive = true;
    scoreValue.style.color = 'gold'; // Cambia el color según tus preferencias
    multiplierMessage.textContent = '¡Multiplicador x2 activado!';
    alert('¡ULTRACLICKS activado! ¡Ahora obtienes 2 puntos por clic!');
  }

  function activateUltraMaster() {
    ultraMasterActive = true;
    scoreValue.style.color = 'purple'; // Cambia el color según tus preferencias
    multiplierMessage.textContent = '¡Multiplicador x3 activado!';
    alert('¡ULTRAMASTER activado! ¡Ahora obtienes 3 puntos por clic!');
  }

  function unlockSecretPage() {
    alert('¡Has desbloqueado la página web secreta!');
    // Cambia 'https://tupagina.secreta' por el enlace de tu página secreta
    window.location.href = 'https://tupagina.secreta';
  }
});
