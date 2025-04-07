'use strict';

/**
 * @param {string} date
 * @param {string[]} fromFormat
 * @param {string[]} toFormat
 *
 * @returns {string}
 */
function formatDate(date, fromFormat, toFormat) {
  const splittedOldDate = date.split(fromFormat[3]);
  const resultArray = [];

  for (let i = 0; i < 3; i++) {
    switch (toFormat[i]) {
      case 'DD':
        resultArray[i] = splittedOldDate[fromFormat.indexOf('DD')];
        break;

      case 'MM':
        resultArray[i] = splittedOldDate[fromFormat.indexOf('MM')];
        break;

      case 'YYYY': {
        if (fromFormat.includes('YY')) {
          if (+splittedOldDate[fromFormat.indexOf('YY')] < 30) {
            resultArray[i] = '20' + splittedOldDate[fromFormat.indexOf('YY')];
          } else {
            resultArray[i] = '19' + splittedOldDate[fromFormat.indexOf('YY')];
          }
        } else {
          resultArray[i] = splittedOldDate[fromFormat.indexOf('YYYY')];
        }
        break;
      }

      case 'YY': {
        if (fromFormat.includes('YYYY')) {
          resultArray[i] = splittedOldDate[fromFormat.indexOf('YYYY')].slice(2);
        } else {
          resultArray[i] = splittedOldDate[fromFormat.indexOf('YY')];
        }
        break;
      }
    }
  }

  return resultArray.join(toFormat[3]);
}

module.exports = formatDate;
