import SDK from "@uphold/uphold-sdk-javascript";
import React, { useEffect, useState } from "react";

const MainScreen = () => {
  const [ticker, setTicker] = useState<any>(null);
  const [selectedTicker, setSelectedTicker] = useState<string>("EUR");
  const [inputValue, setInputValue] = useState<number>(0);
  const sdk = new SDK({
    baseUrl: "http://api-sandbox.uphold.com",
    clientId: "foo",
    clientSecret: "bar",
  });

  const fetchTicker = async () => {
    if (!selectedTicker) return;
    try {
      const response = await sdk.getTicker(selectedTicker);
      setTicker(response.slice(0, 10));
      setSelectedTicker(response[0].pair.split("-")[1]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchTicker();
  }, [selectedTicker]);

  console.log(ticker);
  console.log(selectedTicker);
  console.log(inputValue);

  return (
    <div>
      <h1>Assessment Challenge</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a value"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <select
          value={selectedTicker}
          onChange={(e) => setSelectedTicker(e.target.value)}
        >
          <option value={"USD"} onClick={() => setSelectedTicker("USD")}>
            USD
          </option>
          <option value={"EUR"} onClick={() => setSelectedTicker("EUR")}>
            EUR
          </option>
          {ticker?.map((ticker, index) => (
            <option
              key={index}
              value={ticker.pair.replace("-" + selectedTicker, "")}
              onClick={() => setSelectedTicker(ticker.pair)}
            >
              {ticker.pair.replace("-" + selectedTicker, "")}
            </option>
          ))}
        </select>
      </div>
      <div>
        {ticker?.map((ticker, index) => (
          <div key={index} style={{ display: "flex", gap: "10px" }}>
            <p>{ticker.pair.replace("-" + selectedTicker, "")}</p>
            <p>{ticker.ask}</p>
            <p>{inputValue / ticker.ask}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainScreen;
