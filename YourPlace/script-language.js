function chooseLanguage() {
  const englishButton = document.getElementById('english');
  const bulgarianButton = document.getElementById('bulgarian');

  function redirectToLanguage(language) {
      if (language === 'english') {
          window.location.href = 'english/index.html';
      } else if (language === 'bulgarian') {
          window.location.href = 'bulgarian/index.html';
      }
  }

  englishButton.addEventListener('click', function(event) {
      event.preventDefault();
      redirectToLanguage('english');
  });

  bulgarianButton.addEventListener('click', function(event) {
      event.preventDefault();
      redirectToLanguage('bulgarian');
  });
}

window.onload = chooseLanguage;
