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
];

$(() => {
  const $main = $('main');
  const $confirmationWrapper = $('#confirmation-wrapper');
  const $contextMenu = $('#context-menu');
  const $delete = $contextMenu.find('.delete');
  const todosTemplateHTML = $('#todos-template').remove().html();
  const todosTemplate = Handlebars.compile(todosTemplateHTML);

  let $currentTodo;

  $(document).on('click', () => $contextMenu.fadeOut(0));

  $confirmationWrapper.on('click', (e) => {
    if (e.target.id === 'confirmation' || e.target.id === 'no') {
      $confirmationWrapper.hide();
    } else if (e.target.id === 'yes') {
      $currentTodo.remove();
      $confirmationWrapper.hide();
    }
  });

  $delete.on('click', () => {
    $confirmationWrapper.fadeIn();
  });

  $main.on('contextmenu', '.todo', function(e) {
    e.preventDefault();

    $currentTodo = $(this);

    $contextMenu.hide().css({ top: e.clientY, left: e.clientX }).fadeIn();
  });

  $main.html(todosTemplate({ todoItems }));
});
