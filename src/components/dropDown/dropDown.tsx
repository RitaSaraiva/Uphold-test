import React, { useState } from "react";
import arrowDown from "../../assets/arrowDown.svg";
import arrowUp from "../../assets/arrowUp.svg";
import { useTickerStorageStore } from "../../storage/useTickerStorage.tsx";
import StyledMainScreen from "./dropDown.styles.tsx";

import BAT from "../../assets/BAT.png";
import BCH from "../../assets/BCH.png";
import BTC from "../../assets/BTC.png";
import CAD from "../../assets/CAD.png";
import CNY from "../../assets/CNY.png";
import ETH from "../../assets/ETH.png";
import EUR from "../../assets/EUR.png";
import GBP from "../../assets/GBP.png";
import MXN from "../../assets/MXN.png";
import NOK from "../../assets/NOK.png";
import USD from "../../assets/USD.png";
import XAU from "../../assets/XAU.png";

type DropDownProps = {
  filteredTicker: any;
};

const DropDown = ({ filteredTicker }: DropDownProps) => {
  const { selectedTicker, setSelectedTicker } = useTickerStorageStore();
  const [dropDownOpen, setDropDownOpen] = useState<boolean>(false);
  return (
    <StyledMainScreen>
      <div>
        <div
          className="selectContainer"
          onClick={() => setDropDownOpen(!dropDownOpen)}
        >
          <img
            className="currencyImage"
            src={
              selectedTicker === "USD"
                ? USD
                : selectedTicker === "EUR"
                ? EUR
                : selectedTicker === "BAT"
                ? BAT
                : selectedTicker === "BTC"
                ? BTC
                : selectedTicker === "BCH"
                ? BCH
                : selectedTicker === "CNY"
                ? CNY
                : selectedTicker === "ETH"
                ? ETH
                : selectedTicker === "NOK"
                ? NOK
                : selectedTicker === "MXN"
                ? MXN
                : selectedTicker === "CAD"
                ? CAD
                : selectedTicker === "XAU"
                ? XAU
                : GBP
            }
            alt="currency"
          />
          {selectedTicker}
          <img
            className="arrowIcon"
            src={dropDownOpen ? arrowUp : arrowDown}
            alt="arrows"
          />
        </div>
        {dropDownOpen && (
          <div className="DropDownOpen" onClick={() => setDropDownOpen(false)}>
            {filteredTicker?.map((ticker, index) => (
              <div
                className="dropDownOption"
                key={index}
                onClick={() =>
                  setSelectedTicker(ticker.pair.replace(selectedTicker, ""))
                }
              >
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
                {ticker.pair.replace(selectedTicker, "")}
              </div>
            ))}
          </div>
        )}
      </div>
    </StyledMainScreen>
  );
};

export default DropDown;
