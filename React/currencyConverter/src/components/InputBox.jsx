import { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  currencyOptions = [],
  onCurrencyChange,
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) {
  const amountInputId = useId();

  return (
    <div className="flex rounded-lg bg-white p-3 text-sm">
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="mb-2 inline-block text-black/60"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          type="number"
          min="0"
          step="any"
          value={amount}
          onChange={(e) => onAmountChange?.(Number(e.target.value))}
          disabled={amountDisable}
          className="w-full bg-transparent py-1.5 outline-none"
          placeholder="Amount"
        />
      </div>

      <div className="flex w-1/2 flex-wrap justify-end text-right">
        <label className="mb-2 w-full text-black/60">Currency Type</label>
        <select
          value={selectCurrency}
          onChange={(e) => onCurrencyChange?.(e.target.value)}
          disabled={currencyDisable}
          className="cursor-pointer rounded-lg bg-gray-100 px-2 py-1 outline-none"
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;