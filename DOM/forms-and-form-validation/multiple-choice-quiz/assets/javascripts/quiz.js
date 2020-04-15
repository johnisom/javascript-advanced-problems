const questions = [
  {
    id: 1,
    description: "Who is the author of <cite>The Hitchhiker's Guide to the" +
      " Galaxy</cite>?",
    options: [
      'Dan Simmons',
      'Douglas Adams',
      'Stephen Fry',
      'Robert A. Heinlein',
    ],
  },
  {
    id: 2,
    description: 'Which of the following numbers is the answer to Life, the' +
      ' Universe and Everything?',
    options: [
      '66',
      '13',
      '111',
      '42',
    ],
  },
  {
    id: 3,
    description: 'What is a Pan Galactic Gargle Blaster?',
    options: [
      'A drink',
      'A machine',
      'A creature',
      'None of the above',
    ],
  },
  {
    id: 4,
    description: 'Which star system does Ford Prefect belong to?',
    options: [
      'Aldebaran',
      'Algol',
      'Betelgeuse',
      'Alpha Centauri',
    ],
  },
];

const answerKey = {
  '1': 'Douglas Adams',
  '2': '42',
  '3': 'A drink',
  '4': 'Betelgeuse',
};

$(() => {
  const questionsHTML = $('#questions-templ').remove().html();
  const questionsTemplate = Handlebars.compile(questionsHTML);
  const $form = $('form');
  const $submit = $('input[type=submit]');
  const $reset = $('input[type=reset]');
  const $fieldset = $('fieldset#questions');

  let $questions;

  const gradeAnswers = function gradeAnswers() {
    $questions.each((_, question) => {
      const $question = $(question);
      const $result = $question.find('.result');
      const questionId = $question.attr('data-id');
      const providedAnswer = $question.find('input:checked').val();
      const correctAnswer = answerKey[questionId];
      const genericError = `The correct answer is “${correctAnswer}”`;

      if (providedAnswer === correctAnswer) {
        $result.text('Correct Answer.');
        $result.attr('class', 'result correct');
      } else if (!providedAnswer) {
        $result.text(`You didn’t answer this question. ${genericError}.`);
        $result.attr('class', 'result incorrect');
      } else {
        $result.text(`Wrong answer. ${genericError}.`);
        $result.attr('class', 'result incorrect');
      }

      $form.off('submit.grade');
    });
  };

  $form.on('submit', (e) => {
    e.preventDefault();
    $submit.removeClass('active');
    $reset.addClass('active');
  });

  $reset.on('click', () => {
    $form.off('submit.grade');
    $form.on('submit.grade', gradeAnswers);
    $questions.find('.result').attr('class', 'result').text('');
    $submit.addClass('active');
    $reset.removeClass('active');
  });

  $fieldset.html(questionsTemplate({ questions }));
  $questions = $fieldset.find('.question');
  $reset.trigger('click');
});
