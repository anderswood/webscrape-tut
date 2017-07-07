var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

nightmare
  .goto('https://www.mountain-forecast.com/peaks/Buffalo-Mountain/forecasts/3894')
  .scrollTo(950, 0)
  .screenshot('./weather.png')
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
