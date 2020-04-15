// Exercise 6

const dates = document.getElementById('dates');
const datesRequest = new XMLHttpRequest;

datesRequest.responseType = 'json';
datesRequest.open('GET', '/api/bookings');
datesRequest.addEventListener('load', () => {
  datesRequest.response.forEach((date) => {
    const dateLi = document.createElement('li');

    let clicked = false;

    dateLi.textContent = date;
    dateLi.addEventListener('click', () => {
      if (clicked) return;

      const detailsUl = document.createElement('ul');
      const detailsRequest = new XMLHttpRequest;

      detailsRequest.responseType = 'json';
      detailsRequest.open('GET', `/api/bookings/${date}`);
      detailsRequest.addEventListener('load', () => {
        detailsRequest.response.forEach((details) => {
          const detailsLi = document.createElement('li');

          detailsLi.textContent = details.join(' | ');
          detailsUl.appendChild(detailsLi);
        });
      });

      dateLi.appendChild(detailsUl);
      detailsRequest.send();

      clicked = true;
    });

    dates.appendChild(dateLi);
  });
});

datesRequest.send();
