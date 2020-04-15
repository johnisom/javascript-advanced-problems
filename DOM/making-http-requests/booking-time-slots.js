// Exercise 5

const select = document.getElementById('schedule');
const bookingForm = document.querySelector('main form');
const signupForm = document.querySelector('aside form');

// Populate the schedule select input element
const populateSchedules = function populateSchedules(schedules, staff) {
  const available = schedules.filter(({ student_email }) => !student_email);
  available.forEach(({ id, staff_id, date, time }) => {
    const option = document.createElement('option');
    const name = staff.find(({ id }) => id === staff_id).name;

    option.setAttribute('value', id);
    option.textContent = `${name} | ${date} | ${time}`;

    select.appendChild(option);
  });
};

const allStaffRequest = new XMLHttpRequest;
allStaffRequest.responseType = 'json';
allStaffRequest.open('GET', '/api/staff_members');

const allSchedulesRequest = new XMLHttpRequest;
allSchedulesRequest.responseType = 'json';
allSchedulesRequest.open('GET', '/api/schedules');

allStaffRequest.addEventListener('load', () => {
  if (allSchedulesRequest.readyState === XMLHttpRequest.DONE) {
    populateSchedules(allSchedulesRequest.response, allStaffRequest.response);
  }
});

allSchedulesRequest.addEventListener('load', () => {
  if (allStaffRequest.readyState === XMLHttpRequest.DONE) {
    populateSchedules(allSchedulesRequest.response, allStaffRequest.response);
  }
});

allStaffRequest.send();
allSchedulesRequest.send();

// Handle booking
const revealSignupForm = function revealSignupForm(bookingSequenceNum) {
  const email = document.getElementById('email');
  const email2 = document.getElementById('email-2');
  const bookingSequence = document.getElementById('booking-sequence');

  signupForm.parentElement.classList.remove('hidden');
  email2.value = email.value;
  bookingSequence.value = bookingSequenceNum;
};

const book = function book() {
  const request = new XMLHttpRequest;
  request.open(bookingForm.method, bookingForm.action);
  request.addEventListener('load', () => {
    if (request.status === 404) {
      const bookingSequence = request.responseText.match(/\d+$/);
      alert(request.responseText);
      if (bookingSequence) {
        revealSignupForm(bookingSequence);
      }

      return;
    }

    alert('Booked');
    bookingForm.reset();
  });

  request.send(new FormData(bookingForm));
};

bookingForm.addEventListener('submit', (e) => {
  e.preventDefault();
  book();
});

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const request = new XMLHttpRequest;
  request.open('POST', '/api/students');
  request.addEventListener('load', () => {
    alert(request.responseText);

    if (request.status === 201) {
      signupForm.reset();
      signupForm.parentElement.classList.add('hidden');
      book();
    }
  });

  request.send(new FormData(signupForm));
});
