const URL = 'https://v6.exchangerate-api.com/v6/aa91db0af07de43e0e36201b';

export function getCurrencyRates(base = 'USD') {
  return fetch(`${URL}/latest/${base}`)
    .then((response) => response.json());
}

export function getCurrenciesNames() {
  return fetch(`${URL}/codes`)
    .then((response) => response.json());
}
