const todoItems = [
  {
    id: 1,
    title: 'Homework',
  },
  {
    id: 2,
    title: 'Shopping',
  },
  {
    id: 3,
    title: 'Calling Mom',
  },
  {
    id: 4,
    title: 'Coffee with John ',
  },
];

$(() => {
  const $main = $('main');
  const $confirmationWrapper = $('#confirmation-wrapper');
  const todosTemplateHTML = $('#todos-template').remove().html();
  const todosTemplate = Handlebars.compile(todosTemplateHTML);

  let $currentTodo;

  $confirmationWrapper.on('click', (e) => {
    if (e.target.id === 'confirmation' || e.target.id === 'no') {
      $confirmationWrapper.hide();
    } else if (e.target.id === 'yes') {
      $currentTodo.remove();
      $confirmationWrapper.hide();
    }
  });

  $main.on('click', '.delete', function() {
    $currentTodo = $(this).parent();
    $confirmationWrapper.show();
  });

  $main.html(todosTemplate({ todoItems }));
});
