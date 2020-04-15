const photoData = [
  {
    src: 'public/images/kingfisher.jpg',
    alt: 'An orange and teal kingfisher bird sitting on top of a barren branch',
    tooltip: 'Kingfishers or Alcedinidae are a family of small to medium-' +
      'sized, brightly colored birds in the order Coraciiformes. They have' +
      ' a cosmopolitan distribution, with most species found in the ' +
      'tropical regions of Africa, Asia, and Oceania.',
  },
  {
    src: 'public/images/macaw.jpg',
    alt: 'A scarlet macaw bird sitting on top of a barren branch',
    tooltip: 'Macaws are long-tailed, often colorful, New World parrots.' +
      ' They are popular in aviculture or as companion parrots, although' +
      ' there are conservation concerns about several species in the wild.',
  },
  {
    src: 'public/images/cockatoo.jpg',
    alt: 'A white and red cockatoo sitting on top of a barren branch',
    tooltip: 'Cockatoos are recognisable by the prominent crests and curved' +
      ' bills. Their plumage is generally less colourful than that of other' +
      ' parrots, being mainly white, grey or black and often with coloured' +
      ' features in the crest, cheeks or tail. On average they are larger' +
      ' than other parrots.',
  },
  {
    src: 'public/images/fennec-fox.jpg',
    alt: "A fennec fox sitting on a log with it's front paws outstretched",
    tooltip: 'The fennec fox (Vulpes zerda), also called fennec or desert' +
      ' fox, is a small crepuscular fox native to the Sahara Desert, the' +
      ' Sinai Peninsula, Arava desert and the Arabian desert. Its most' +
      ' distinctive feature is its unusually large ears, which also serve' +
      ' to dissipate heat.',
  },
];

$(() => {
  const $main = $('main');
  const figureHTML = $('script#figure').remove().html();
  const galleryHTML = $('script#gallery').remove().html();
  const galleryTemplate = Handlebars.compile(galleryHTML);

  let timeoutId = null;

  Handlebars.registerPartial('figure', figureHTML);

  $main.on('mouseenter', 'img, .tooltip', function() {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
      timeoutId = null;
    } else {
      timeoutId = setTimeout(() => {
        $(this).next('.tooltip').fadeIn();
        timeoutId = null;
      }, 2000);
    }
  });

  $main.on('mouseleave', 'img, .tooltip', function() {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
      timeoutId = null;
    } else {
      timeoutId = setTimeout(() => {
        $(this).parent().find('.tooltip').fadeOut();
        timeoutId = null;
      }, 500);
    }
  });

  $main.html(galleryTemplate({ photoData }));
});
