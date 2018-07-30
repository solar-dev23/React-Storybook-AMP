export const rand = (min, max, decimals = 4) => {
  return (Math.random() * (max - min) + min).toFixed(decimals);
};

export const randInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const isFloat = n => parseFloat(n.match(/^-?\d*(\.\d+)?$/)) > 0;

export const isInteger = n => /^\+?\d+$/.test(n);

export const round = (n, decimals = '2') => Math.round(n * Math.pow(10, decimals)) / Math.pow(10, decimals);

//TODO remove this function
const sorter = (a, b, wrt, order) => {
  let first, second;
  if (typeof a[wrt] === 'string') {
    first = a[wrt].toUpperCase(); // ignore upper and lowercase
    second = b[wrt].toUpperCase(); // ignore upper and lowercase
  } else {
    first = a[wrt];
    second = b[wrt];
  }
  if (order === 'asc') {
    if (first < second) {
      return -1;
    }
    if (first > second) {
      return 1;
    }
  } else {
    if (first > second) {
      return -1;
    }
    if (first < second) {
      return 1;
    }
  }
  return 0;
};

//TODO remove this function
export const sortArray = (array, wrt, sortOrder = 'asc') => {
  console.log(array);
  return array.sort((a, b) => sorter(a, b, wrt, sortOrder));
};

export const sortTable = (table, column, order = 'asc') => {
  let sortedTable = table.sort((a, b) => compare(a[column], b[column]));
  return order === 'asc' ? sortedTable : sortedTable.reverse();
};

export const compare = (a, b, order = 'asc') => {
  if (typeof a === 'string') {
    a = a.toUpperCase();
    b = b.toUpperCase();
  }

  return a < b ? -1 : 1;
};

export function getObjectFromProperty(array, prop, value) {
  let foundObject;
  array.map(function(obj) {
    if (obj[prop] === value) {
      foundObject = obj;
    }
  });
  if (foundObject) {
    return foundObject;
  } else {
    return false;
  }
}

export const filterer = (filter, coin, wrt, filterValue) => {
  if (filter) {
    return coin[wrt] === filterValue;
  }
  return true;
};

export const isJson = text => {
  return /^[\],:{}\s]*$/.test(
    text
      .replace(/\\["\\\/bfnrtu]/g, '@')
      .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
      .replace(/(?:^|:|,)(?:\s*\[)+/g, '')
  );
};
