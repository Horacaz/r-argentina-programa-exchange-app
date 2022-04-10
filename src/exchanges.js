const URL = 'https://v6.exchangerate-api.com/v6/aa91db0af07de43e0e36201b';

export function getCurrencyRates(base = 'USD') {
  return fetch(`${URL}/latest/${base}`)
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem(base, JSON.stringify(data));
      return data;
    });
}

export function getCurrenciesNames() {
  return fetch(`${URL}/codes`)
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem('currencies', JSON.stringify(data));
      return data;
    });
}

/*
export function getCurrencyRatesStorage(base) {
  const Base = JSON.parse(localStorage.getItem(base));
  console.log(Base);
  return Base;
}

export function getCurrenciesNamesStorage() {
  const Currencies = JSON.parse(localStorage.getItem('currencies'));
  console.log(Currencies);
  return Currencies;
}

*/
