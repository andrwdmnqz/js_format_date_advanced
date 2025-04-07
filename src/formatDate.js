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

  const oldDayIndex = fromFormat.indexOf('DD');
  const oldMonthIndex = fromFormat.indexOf('MM');
  const oldYearIndex = fromFormat.includes('YYYY')
    ? fromFormat.indexOf('YYYY')
    : fromFormat.indexOf('YY');

  for (let i = 0; i < toFormat.length; i++) {
    switch (toFormat[i]) {
      case 'DD':
        resultArray.push(splittedOldDate[oldDayIndex]);
        break;

      case 'MM':
        resultArray.push(splittedOldDate[oldMonthIndex]);
        break;

      case 'YYYY': {
        let year;

        if (fromFormat.includes('YY')) {
          year = splittedOldDate[oldYearIndex];

          year = +year < 30 ? '20' + year : '19' + year;
        } else {
          year = splittedOldDate[oldYearIndex];
        }

        resultArray.push(year);
        break;
      }

      case 'YY': {
        resultArray.push(splittedOldDate[oldYearIndex].slice(-2));
        break;
      }
    }
  }

  return resultArray.join(toFormat[3]);
}

module.exports = formatDate;
