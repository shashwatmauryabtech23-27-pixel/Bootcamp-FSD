import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchRates() {
      setData({});
      setError("");

      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`,
          { signal: controller.signal }
        );

        if (!response.ok) throw new Error("Exchange rates load nahi ho sake.");

        const result = await response.json();
        setData(result[currency] ?? {});
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      }
    }

    fetchRates();
    return () => controller.abort();
  }, [currency]);

  return { data, error };
}

export default useCurrencyInfo;