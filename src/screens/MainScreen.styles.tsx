import styled from "@emotion/styled";

const StyledMainScreen = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .header {
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .title {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 5px;
    color: #121a3d;
  }

  .description {
    font-size: 14px;
    margin-bottom: 10px;
    text-align: center;
    width: 20%;
    color: #8f9eac;
  }

  .inputContainer {
    gap: 10px;
    background-color: #f5f9fc;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    width: 25%;
    justify-content: space-between;
    margin-bottom: 20px;
    margin-top: 30px;
  }

  .input {
    border: 0px transparent;
    background-color: transparent;
    font-size: 24px;
    width: 75%;

    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    :focus {
      outline: none;
    }
  }

  .resultContainer {
    width: 25%;
  }

  .individualResult {
    justify-content: space-between;
    display: flex;
    gap: 10px;
  }

  .explanationText {
    color: #8f9eac;
    font-size: 12px;
  }

  .valueContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 70%;
    overflow: hidden;
  }

  .exchangeRateText {
    color: #8f9eac;
    font-size: 10px;
    margin: 0px;
  }
  .resultText {
    font-weight: 600;
    margin: 0px;
    color: #3e4c5d;
  }

  .resultsCurrency {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    justify-content: flex-start;
    width: 20%;
  }

  .currencyImage {
    width: 20px;
    height: 20px;
  }
`;
export default StyledMainScreen;
