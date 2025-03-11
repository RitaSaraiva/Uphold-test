import SDK from "@uphold/uphold-sdk-javascript";
import React, { useEffect, useState } from "react";
import BAT from "../assets/BAT.png";
import BCH from "../assets/BCH.png";
import BTC from "../assets/BTC.png";
import CAD from "../assets/CAD.png";
import CNY from "../assets/CNY.png";
import ETH from "../assets/ETH.png";
import EUR from "../assets/EUR.png";
import GBP from "../assets/GBP.png";
import MXN from "../assets/MXN.png";
import NOK from "../assets/NOK.png";
import USD from "../assets/USD.png";
import XAU from "../assets/XAU.png";
import DropDown from "../components/dropDown/dropDown.tsx";
import { useTickerStorageStore } from "../storage/useTickerStorage.tsx";
import StyledMainScreen from "./MainScreen.styles.tsx";

const MainScreen = () => {
  const { selectedTicker } = useTickerStorageStore();
  const [ticker, setTicker] = useState<any>(null);
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
    "NOK",
    "MXN",
    "CAD",
    "XAU",
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
    const filteredTicker = ticker?.filter(
      (item) =>
        allowedCurrencies.includes(item.currency) &&
        item.currency !== selectedTicker
    );
    setFilteredTicker(filteredTicker);
  }, [ticker, selectedTicker]);

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
          type="number"
          placeholder="0.00"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <DropDown filteredTicker={filteredTicker} />
      </div>
      {inputValue > 0 && (
        <div className="resultContainer">
          {filteredTicker?.map((ticker, index) => (
            <div key={index} className="individualResult">
              <div className="valueContainer">
                <p className="exchangeRateText">{ticker.ask.slice(0, 8)}</p>
                <p className="resultText">
                  {(inputValue * ticker.ask).toFixed(5)}
                </p>
              </div>
              <div className="resultsCurrency">
                <img
                  className="currencyImage"
                  src={
                    ticker.currency === "USD"
                      ? USD
                      : ticker.currency === "EUR"
                      ? EUR
                      : ticker.currency === "BAT"
                      ? BAT
                      : ticker.currency === "BTC"
                      ? BTC
                      : ticker.currency === "BCH"
                      ? BCH
                      : ticker.currency === "CNY"
                      ? CNY
                      : ticker.currency === "ETH"
                      ? ETH
                      : ticker.currency === "NOK"
                      ? NOK
                      : ticker.currency === "MXN"
                      ? MXN
                      : ticker.currency === "CAD"
                      ? CAD
                      : ticker.currency === "XAU"
                      ? XAU
                      : GBP
                  }
                  alt="currency"
                />
                <p>{ticker.pair.replace(selectedTicker, "")}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <p className="explanationText">Enter an amount to check the rates</p>
    </StyledMainScreen>
  );
};

export default MainScreen;
