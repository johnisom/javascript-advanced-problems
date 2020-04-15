$(() => {
  const $form = $('form');
  const $serializedForm = $('.serialized-form');
  const $formOutput = $serializedForm.find('.form-output');
  const $inputs = $form.find('input:not([type=submit])');
  const $nameInputs = $inputs.filter('[name$=name]');
  const $creditCardInputs = $inputs.filter('[name=credit-card]');

  const errorFor = function errorFor(input) {
    const $input = $(input);
    const type = $input.attr('type');
    const name = $input.attr('name');
    const val = $input.val();

    if (type !== 'tel' && name !== 'credit-card' && val.length === 0) {
      return $input.parent().prev('dt').text() + 'is a required field.';
    }

    if (name === 'credit-card') {
      if (!/^(?:|\d{4})$/.test(val)) {
        return 'Please enter a valid Credit Card Number';
      } else return undefined;
    }

    switch (type) {
    case 'text':
      if (!/^[a-z'\s]+$/i.test(val)) {
        return $input.parent().prev('dt').text() + 'is not valid.';
      } else break;
    case 'password':
      if (val.length < 10) {
        return 'Password must be at least 10 characters long.';
      } else break;
    case 'email':
      if (!/^.+@.+$/.test(val)) {
        return 'Please enter a valid Email.';
      } else break;
    case 'tel':
      if (!/^(?:|\d{3}-\d{3}-\d{4})$/.test(val)) {
        return 'Please enter a valid Phone Number';
      } else break;
    }

    return undefined;
  };

  const formErrors = function formErrors() {
    return $inputs.map((_, input) => ({
      input,
      message: errorFor(input),
    })).toArray().filter(({ message }) => message);
  };

  const displayError = function displayError($input, message) {
    $input.addClass('invalid');
    console.log($input.nextAll('.error-message'), message);
    $input.nextAll('.error-message').html(message);
  };

  $form.on('submit', (e) => {
    e.preventDefault();
    const errors = formErrors();
    if (errors.length > 0) {
      $form.find('> .error-message')
           .text('Form cannot be submitted until errors are corrected.');
      errors.forEach(({ input, message }) => displayError($(input), message));
    } else {
      const $inputs = $form.find(
        'input:not([name=credit-card]):not([type=submit])',
      );

      let serialized = $inputs.serialize() + '&credit-card=';

      $creditCardInputs.each((_, input) => serialized += $(input).val());
      $formOutput.text(serialized);
      $serializedForm.show();
      $form[0].reset();
    }
  });

  $inputs.on('focus', function(e) {
    $(this).removeClass('invalid').nextAll('.error-message').text('');
  });

  $inputs.on('blur', function(e) {
    const $input = $(this);
    const message = errorFor(this);

    if (message) {
      displayError($input, message);
    } else if (formErrors().length === 0) {
      $form.find('> .error-message').text('');
    }
  });

  $nameInputs.on('keydown', (e) => {
    if (e.key.length > 1 || /[a-z'\s]/i.test(e.key)) return;
    e.preventDefault();
  });

  $creditCardInputs.on('keydown', (e) => {
    if (e.key.length > 1 || /\d/.test(e.key)) return;
    e.preventDefault();
  });

  $creditCardInputs.slice(0, 3).on('keydown', function(e) {
    const $input = $(this);
    if ($input.val().length === 3) {
      e.preventDefault();
      $input.val($input.val() + e.key);
      $input.nextAll('input')[0].focus();
    }
  });

  $form.attr('novalidate', true);
});
