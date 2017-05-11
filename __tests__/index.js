const test =  require('tape');
const utils = require('../utils');
const weatherData = require('../data');

test('getWeather should be a function', (assert) => {
  assert.equal(typeof utils.getWeather, 'function');
  assert.end();
});

test('getWeather, should return some mock data when passed the \'true\' param', (assert) => {
  const actual = utils.getWeather(true);
  const expected = weatherData;
  assert.deepEqual(actual, expected);
  assert.end();
});

test('formatTemp should be a function', (assert) => {
  assert.equal(typeof utils.formatTemp, 'function');
  assert.end();
});

test('formatTemp should return a correctly formatted tempurature, i.e. (74°F for the input 74)', (assert) => {
  const temps = [74, 76, 12, -14, 88, 102];
  temps.forEach(temp => {
    const actual = utils.formatTemp(temp);
    const expected = `${temp}°F`;
    assert.equal(actual, expected, `should return ${expected} for given temp ${temp}`);
  });
  assert.end();
});

test('_sorter should be a function', (assert) => {
  assert.equal(typeof utils._sorter, 'function');
  assert.end();
});

test('_sorter should return a correctly sorted (high to low) array of objects with temp properties', (assert) => {
  const mockData = [
    {
      temp: 11
    },
    {
      temp: 9
    },
    {
      temp: 1
    },
    {
      temp: 110
    },
    {
      temp: 44
    }
  ];
  const actual = mockData.sort(utils._sorter);
  const expected = [
    {
      temp: 110
    },
    {
      temp: 44
    },
    {
      temp: 11
    },
    {
      temp: 9
    },
    {
      temp: 1
    }
  ];
  assert.deepEqual(actual, expected);
  assert.end();
});

test('listCitiesByTemp should be a function', (assert) => {
  assert.equal(typeof utils.listCitiesByTemp, 'function');
  assert.end();
});

test('listCitiesByTemp should return the list of cities by temp (sorted highest to lowest in an array)', (assert) => {
  const mockData = {
    cities: [
      {
        name: 'Houston, TX',
        temp: 85
      },
      {
        name: 'Austin, TX',
        temp: 95
      },
      {
        name: 'Montgomery, AL',
        temp: 75
      },
    ]
  };
  const actual = utils.listCitiesByTemp(mockData);
  const expected = ['Austin, TX', 'Houston, TX', 'Montgomery, AL'];
  assert.deepEqual(actual, expected);
  assert.end();
});
