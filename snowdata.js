var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

nightmare
  .goto('https://www.ncdc.noaa.gov/snow-and-ice/')
  .click('#anch_26')
  .select('#state','CO')
  .select('#snow','snowfall')
  .select('#year','2017')
  .select('#month','1')
  .select('#day','1')
  .wait(5000)
  .scrollTo(300, 0)
  // .wait('#day option[value="2"]')
  // .wait(2000)
  // .wait(1000)
  .click('#daily-snow input[type="submit"]')
  .scrollTo(600, 0)
  // .select('#numRows','100')
  // .click('#pages span[title="Page 2"]')
  // .wait(5000)
  .evaluate(function() {
    // let location = document.querySelector('tbody tr td a[title="US1COGN0018"]').innerText;
    let dayElems = document.querySelector('tbody tr td a[title="USC00050105"]').parentNode.parentNode.childNodes;
    let myArr = [];
    for(i=0; i<30; i++) {
      myArr.push(dayElems[i].innerText)
    }

    return myArr;
  })
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
