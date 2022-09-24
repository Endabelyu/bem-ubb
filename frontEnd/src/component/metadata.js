const getMetaData = require('metadata-scraper');

const url = 'https://github.com/BetaHuhn/metadata-scraper';

getMetaData(url).then((data) => {
  console.log(data);
});
