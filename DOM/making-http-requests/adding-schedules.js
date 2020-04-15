// Exercise 4

const form = document.querySelector('form');
const submitButton = document.querySelector('input[type=submit]');
const addMoreSchedulesButton = document.getElementById('add-more-schedules');
const firstFieldSet = document.querySelector('fieldset');

// Populate the ‘select’ input for the staff names and ids
const staffMembersRequest = new XMLHttpRequest;
staffMembersRequest.responseType = 'json';
staffMembersRequest.open('GET', '/api/staff_members');

staffMembersRequest.addEventListener('load', () => {
  const selectInput = firstFieldSet.querySelector('select');

  staffMembersRequest.response.forEach(({ id, name }) => {
    const option = document.createElement('option');
    option.setAttribute('value', id);
    option.textContent = name;

    selectInput.appendChild(option);
  });
});

staffMembersRequest.send();

// Clone the fieldSet and increment the fieldSet number when the ‘Add more
// schedules’ button is pressed
let fieldSetNo = 1;

addMoreSchedulesButton.addEventListener('click', () => {
  const clonedFieldSet = firstFieldSet.cloneNode(true);
  fieldSetNo += 1;

  clonedFieldSet.querySelector('.fieldset-no').textContent = fieldSetNo;
  clonedFieldSet.querySelector('select').id = `staff-name-${fieldSetNo}`;

  [...clonedFieldSet.getElementsByTagName('input')].forEach((input) => {
    input.id = input.id.slice(0, -1) + fieldSetNo;
  });

  [...clonedFieldSet.getElementsByTagName('label')].forEach((label) => {
    label.setAttribute(
      'for',
      label.getAttribute('for').slice(0, -1) + fieldSetNo,
    );
  });

  form.insertBefore(clonedFieldSet, submitButton);
});

// TODO: fill out this comment

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const request = new XMLHttpRequest;
  request.open(form.method, form.action);
  request.setRequestHeader('Content-Type', 'application/json');
  request.addEventListener('load', () => {
    if (request.status === 400) {
      alert(request.responseText);
      return;
    }

    alert('Schedules added');
    form.reset();
  });

  const data = { schedules: [] };

  const fieldSets = [...document.getElementsByTagName('fieldset')];
  fieldSets.forEach((fieldSet) => {
    const fieldSetData = {};

    [...fieldSet.elements].forEach(({ name, value }) => {
      fieldSetData[name] = value;
    });

    data.schedules.push(fieldSetData);
  });

  request.send(JSON.stringify(data));
});
