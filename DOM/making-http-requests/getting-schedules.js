// Exercise 2

const getAllAvailableSchedules = function getAllAvailableSchedules() {
  const request = new XMLHttpRequest;

  request.addEventListener('load', () => {
    if (request.response.length === 0) {
      alert('There are no schedules available for booking.');
      return;
    }

    const counts = {};

    request.response.forEach(({ staff_id: id }) => {
      counts[id] = counts[id] || 0;
      counts[id] += 1;
    });

    alert(Object.entries(counts).map(
      ([ id, count ]) => `Staff ${id}: ${count}`
    ).join('\n'));
  });

  request.addEventListener('timeout', () => {
    alert('The request timed out, please try again.');
  });

  request.open('GET', '/api/schedules');
  request.timeout = 5000;
  request.responseType = 'json';
  request.send();
};
