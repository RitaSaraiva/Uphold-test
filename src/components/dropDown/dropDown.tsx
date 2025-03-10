import React, { useState } from "react";
import arrowDown from "../../assets/arrowDown.svg";
import arrowUp from "../../assets/arrowUp.svg";
import { useTickerStorageStore } from "../../storage/useTickerStorage.tsx";
import StyledMainScreen from "./dropDown.styles.tsx";

const DropDown = () => {
  const { selectedTicker, setSelectedTicker, ticker } = useTickerStorageStore();
  const [dropDownOpen, setDropDownOpen] = useState<boolean>(false);
  return (
    <StyledMainScreen>
      <div>
        <div
          className="selectContainer"
          onClick={() => setDropDownOpen(!dropDownOpen)}
        >
          {selectedTicker}
          <img
            className="arrowIcon"
            src={dropDownOpen ? arrowUp : arrowDown}
            alt="arrows"
          />
        </div>
        {dropDownOpen && (
          <div className="DropDownOpen" onClick={() => setDropDownOpen(false)}>
            <div
              className="dropDownOption"
              onClick={() => setSelectedTicker("USD")}
            >
              USD
            </div>
            <div
              className="dropDownOption"
              onClick={() => setSelectedTicker("EUR")}
            >
              EUR
            </div>
            {ticker?.map((ticker, index) => (
              <div
                className="dropDownOption"
                key={index}
                onClick={() =>
                  setSelectedTicker(
                    ticker.pair.replace("-" + selectedTicker, "")
                  )
                }
              >
                {ticker.pair.replace("-" + selectedTicker, "")}
              </div>
            ))}
          </div>
        )}
      </div>
    </StyledMainScreen>
  );
};

export default DropDown;
