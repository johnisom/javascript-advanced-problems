const cars = [
  {
    make: 'Honda',
    image: 'images/honda-accord-2005.jpg',
    model: 'Accord',
    year: 2005,
    price: 7000,
  },
  {
    make: 'Honda',
    image: 'images/honda-accord-2008.jpg',
    model: 'Accord',
    year: 2008,
    price: 11000,
  },
  {
    make: 'Toyota',
    image: 'images/toyota-camry-2009.jpg',
    model: 'Camry',
    year: 2009,
    price: 12500,
  },
  {
    make: 'Toyota',
    image: 'images/toyota-corrolla-2016.jpg',
    model: 'Corolla',
    year: 2016,
    price: 15000,
  },
  {
    make: 'Suzuki',
    image: 'images/suzuki-swift-2014.jpg',
    model: 'Swift',
    year: 2014,
    price: 9000,
  },
  {
    make: 'Audi',
    image: 'images/audi-a4-2013.jpg',
    model: 'A4',
    year: 2013,
    price: 25000,
  },
  {
    make: 'Audi',
    image: 'images/audi-a4-2013.jpg',
    model: 'A4',
    year: 2013,
    price: 26000,
  },
];

const options = {};
cars.forEach((car) => {
  Object.entries(car).forEach(([key, value]) => {
    options[key] = options[key] || [];
    if (!options[key].includes(value)) {
      options[key].push(value);
    }
  });
});

$(() => {
  const $form = $('form');
  const $main = $('main');
  const $selects = $('select');
  const carsHTML = $('#cars').remove().html();
  const optionsHTML = $('#options').remove().html();
  const carsTemplate = Handlebars.compile(carsHTML);
  const optionsTemplate = Handlebars.compile(optionsHTML);

  let $cars;

  const carMatchesFilters = function carMatchesFilters(car, filters) {
    for (const key in filters) {
      const val = filters[key];
      if (val !== 'any' && car.dataset[key] !== val) return false;
    }

    return true;
  };

  $form.on('submit', (e) => {
    e.preventDefault();

    const filters = Object.fromEntries((new FormData($form[0])).entries());

    $cars.hide();
    $cars.filter((_, car) => carMatchesFilters(car, filters)).show();
  });

  $main.html(carsTemplate({ cars }));
  $selects.each((_, select) => {
    $(select).append(optionsTemplate({ values: options[select.id]}));
  });

  $cars = $main.find('figure.car');
});
