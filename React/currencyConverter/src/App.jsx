
import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import "./App.css";
import BackgroundImage from "./assets/currency-converter-background.png";

// Currency full names
const currencyNames = {
  usd: "United States Dollar",
  inr: "Indian Rupee",
  eur: "Euro",
  gbp: "British Pound Sterling",
  jpy: "Japanese Yen",
  cny: "Chinese Yuan",
  aud: "Australian Dollar",
  cad: "Canadian Dollar",
  chf: "Swiss Franc",
  sgd: "Singapore Dollar",
  aed: "United Arab Emirates Dirham",
  sar: "Saudi Riyal",
  rub: "Russian Ruble",
  krw: "South Korean Won",
  brl: "Brazilian Real",
  zar: "South African Rand",
  mxn: "Mexican Peso",
  nzd: "New Zealand Dollar",
  hkd: "Hong Kong Dollar",
  thb: "Thai Baht",
  myr: "Malaysian Ringgit",
  idr: "Indonesian Rupiah",
  try: "Turkish Lira",
  sek: "Swedish Krona",
  nok: "Norwegian Krone",
  dkk: "Danish Krone",
  pln: "Polish Zloty",
  php: "Philippine Peso",
  vnd: "Vietnamese Dong",
  bdt: "Bangladeshi Taka",
  pkr: "Pakistani Rupee",
  lkr: "Sri Lankan Rupee",
  npr: "Nepalese Rupee",
  afn: "Afghan Afghani",
  egp: "Egyptian Pound",
  kwd: "Kuwaiti Dinar",
  qar: "Qatari Riyal",
  omr: "Omani Rial",
  bhd: "Bahraini Dinar",
  ils: "Israeli New Shekel",
};

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const { data: currencyInfo = {}, error } = useCurrencyInfo(from);

  // API se available currency codes
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    const rate = currencyInfo[to];

    if (rate !== undefined) {
      setConvertedAmount(amount * rate);
    }
  };

  // Full currency name
  const getCurrencyName = (code) => {
    return currencyNames[code.toLowerCase()] || code.toUpperCase();
  };

  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-950 via-indigo-900 to-blue-700 p-4"
    >
      <div className="w-full max-w-md rounded-xl border border-white/30 bg-white/30 p-5 shadow-2xl backdrop-blur-sm">

        <h1 className="mb-5 text-center text-3xl font-bold text-white">
          Currency Converter
        </h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >

          {/* FROM */}
          <div className="mb-1">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={setFrom}
              selectCurrency={from}
              onAmountChange={setAmount}
              currencyNames={currencyNames}
            />
          </div>

          {/* SWAP */}
          <div className="relative h-8">
            <button
              type="button"
              onClick={swap}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md border-2 border-white bg-blue-600 px-4 py-1.5 font-semibold text-white shadow-md hover:bg-blue-700"
            >
              ⇅ Swap
            </button>
          </div>

          {/* TO */}
          <div className="mb-4">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={setTo}
              selectCurrency={to}
              amountDisable
              currencyNames={currencyNames}
            />
          </div>

          {/* ERROR */}
          {error && (
            <p className="mb-3 rounded-md bg-red-500/80 p-2 text-center text-sm text-white">
              {error}
            </p>
          )}

          {/* CONVERT BUTTON */}
          <button
            type="submit"
            disabled={!currencyInfo[to]}
            className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Convert {getCurrencyName(from)} → {getCurrencyName(to)}
          </button>

        </form>
      </div>
    </div>
  );
}

export default App;
