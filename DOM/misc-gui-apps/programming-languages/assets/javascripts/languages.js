const languages = [
  {
    name: 'Ruby',
    description: 'Ruby is a dynamic, reflective, object-oriented,' +
      ' general-purpose programming language. It was designed and developed' +
      ' in the mid-1990s by Yukihiro Matsumoto in Japan. According to its' +
      ' creator, Ruby was influenced by Perl, Smalltalk, Eiffel, Ada, and' +
      ' Lisp. It supports multiple programming paradigms, including' +
      ' functional, object-oriented, and imperative. It also has a dynamic' +
      ' type system and automatic memory management.',
  },
  {
    name: 'JavaScript',
    description: 'JavaScript is a high-level, dynamic, untyped, and' +
      ' interpreted programming language. It has been standardized in the' +
      ' ECMAScript language specification. Alongside HTML and CSS,' +
      ' JavaScript is one of the three core technologies of World Wide Web' +
      ' content production; the majority of websites employ it, and all' +
      ' modern Web browsers support it without the need for plug-ins.' +
      ' JavaScript is prototype-based with first-class functions, making it' +
      ' a multi-paradigm language, supporting object-oriented, imperative,' +
      ' and functional programming styles.',
  },
  {
    name: 'Lisp',
    description: 'Lisp (historically, LISP) is a family of computer' +
      ' programming languages with a long history and a distinctive, fully' +
      ' parenthesized prefix notation. Originally specified in 1958, Lisp' +
      ' is the second-oldest high-level programming language in widespread' +
      ' use today. Only Fortran is older, by one year. Lisp has changed' +
      ' since its early days, and many dialects have existed over its' +
      ' history. Today, the best known general-purpose Lisp dialects are' +
      ' Common Lisp and Scheme.',
  },
];

languages.forEach((language) => {
  language.partialDescription = language.description.slice(0, 120);
});

const getLanguageByName = function getLanguageByName(name) {
  return languages.find((language) => language.name === name);
};

$(() => {
  const languageFullHTML = $('#language-full').remove().html();
  const languagePartialHTML = $('#language-partial').remove().html();
  const languagesHTML = $('#languages').remove().html();
  const languageFullTemplate = Handlebars.compile(languageFullHTML);
  const languagePartialTemplate = Handlebars.compile(languagePartialHTML);
  const languagesTemplate = Handlebars.compile(languagesHTML);
  const $main = $('main');

  Handlebars.registerPartial('languagePartial', languagePartialHTML);

  $main.on('click', 'button:contains("More")', function() {
    const $button = $(this);
    const $description = $button.prev('.description.partial');
    const name = $description.prev('h2').text();

    $button.text('Show Less');
    $description.removeClass('partial');
    $description.text(getLanguageByName(name).description);
  });

  $main.on('click', 'button:contains("Less")', function() {
    const $button = $(this);
    const $description = $button.prev('.description');
    const name = $description.prev('h2').text();

    $button.text('Show More');
    $description.addClass('partial');
    $description.text(getLanguageByName(name).partialDescription);
  });

  $main.html(languagesTemplate({ languages }));
});
