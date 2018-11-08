window.addEventListener(
  'load',
  function() {
    var selector = document.querySelector('.selector');
    var scrumCardElement = document.querySelector('.scrum-card');

    selector.addEventListener('click', event => {
      const hidden = event.currentTarget.classList.contains('hidden');
      if (hidden === false) {
        const value = event.target.dataset.value;
        if (value) {
          scrumCardElement.innerHTML = value;
        }
      }
      event.currentTarget.classList.toggle('hidden');
    });
  },
  false
);
