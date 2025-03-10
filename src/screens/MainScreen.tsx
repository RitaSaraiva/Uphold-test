import SDK from "@uphold/uphold-sdk-javascript";
import React, { useEffect, useState } from "react";
import DropDown from "../components/dropDown/dropDown.tsx";
import { useTickerStorageStore } from "../storage/useTickerStorage.tsx";
import StyledMainScreen from "./MainScreen.styles.tsx";

const MainScreen = () => {
  const { selectedTicker, setSelectedTicker, setTicker, ticker } =
    useTickerStorageStore();
  const [inputValue, setInputValue] = useState<number>(0);
  const [filteredTicker, setFilteredTicker] = useState<any>([]);
  const allowedCurrencies = [
    "USD",
    "EUR",
    "BAT",
    "BTC",
    "BCH",
    "CNY",
    "ETH",
    "GBT",
  ];

  const sdk = new SDK({
    baseUrl: "http://api-sandbox.uphold.com",
    clientId: "foo",
    clientSecret: "bar",
  });

  const fetchTicker = async () => {
    if (!selectedTicker) return;
    try {
      const response = await sdk.getTicker(selectedTicker);
      setTicker(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchTicker();
  }, [selectedTicker]);

  useEffect(() => {
    const filteredTicker = ticker?.filter((item) =>
      allowedCurrencies.includes(item.currency)
    );
    setFilteredTicker(filteredTicker);
  }, [ticker]);

  return (
    <StyledMainScreen>
      <div className="header">
        <h1 className="title">Currency Converter</h1>
        <p className="description">
          Receive competitive and transparent pricing with no hidden spreads.
          See how we compare.
        </p>
      </div>
      <div className="inputContainer">
        <input
          className="input"
          type="text"
          placeholder="0.00"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <DropDown />
      </div>
      <div className="resultContainer">
        {filteredTicker?.map((ticker, index) => (
          <div key={index} className="individualResult">
            <p className="tickerAsk">{ticker.ask.slice(0, 8)}</p>
            <p>{inputValue / ticker.ask}</p>
            <p>{ticker.pair.replace("-" + selectedTicker, "")}</p>
          </div>
        ))}
      </div>
      <p className="explanationText">Enter an amount to check the rates</p>
    </StyledMainScreen>
  );
};

export default MainScreen;
