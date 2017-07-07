var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

nightmare
  .goto('https://www.14ers.com')
  .click('a.menu_topitem[href="/php14ers/peakstatus_main.php"]')
  .click('a.clink[href="./peakstatus_peak.php?peakparm=130&type=14ers"]')
  .evaluate(function() {
    var firstPost = document.querySelector('tbody tr:nth-child(2)').innerText
    var secondPost = document.querySelector('tbody tr:nth-child(3)').innerText
    return {first: firstPost, second: secondPost}
  })
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
