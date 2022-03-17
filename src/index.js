import { getCurrencyRates, getCurrenciesNames } from './exchanges.js';

import {
  createBaseCurrencyOptions,
  createTargetCurrencyOptions,
  createExchanteRatesTable,
  exchangeRatesDate,
  getExchange,
  $baseCurrency,
} from './ui.js';

function updateExchange(currencies) {
  $baseCurrency.oninput = async () => {
    const baseCurrency = $baseCurrency.value;
    const currencyRates = await getCurrencyRates(baseCurrency);
    createExchanteRatesTable(currencyRates, currencies);
    exchangeRatesDate(currencyRates);
    getExchange(currencyRates);
  };
}

async function initialize() {
  const currenciesNames = await getCurrenciesNames();
  createBaseCurrencyOptions(currenciesNames);
  createTargetCurrencyOptions(currenciesNames);
  updateExchange(currenciesNames);
}

initialize();
