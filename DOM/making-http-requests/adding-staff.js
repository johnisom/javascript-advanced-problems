// Exercise 3

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const request = new XMLHttpRequest;

  request.addEventListener('load', () => {
    if (request.status === 400) {
      alert(request.responseText);
      return;
    }

    const response = JSON.parse(request.response);

    alert(`Successfully created staff with id: ${response.id}`);

    form.reset();
  });

  request.open(form.getAttribute('method'), form.getAttribute('action'));
  request.send(new FormData(form));
});
