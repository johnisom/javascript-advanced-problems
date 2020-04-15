// Exercise 7

const cancelSchedule = function cancelSchedule(scheduleId) {
  const request = new XMLHttpRequest;
  request.open('DELETE', `/api/schedules/${scheduleId}`);
  request.send();
  request.addEventListener('load', () => {
    if (request.status === 204) {
      alert('Schedule successfully canceled.');
    } else {
      alert(`Error ${request.status}: ${request.responseText}`);
    }
  });
};

const cancelBooking = function cancelBooking(bookingId) {
  const request = new XMLHttpRequest;
  request.open('PUT', `/api/bookings/${bookingId}`);
  request.send();
  request.addEventListener('load', () => {
    if (request.status === 204) {
      alert('Booking successfully canceled.');
    } else {
      alert(`Error ${request.status}: ${request.responseText}`);
    }
  });
};
