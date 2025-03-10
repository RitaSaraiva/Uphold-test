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
    border-radius: 5px;
    display: flex;
    width: 35%;
    justify-content: space-between;
  }

  .input {
    border: 0px transparent;
    background-color: transparent;
    font-size: 24px;
    width: 75%;
  }

  .resultContainer {
    width: 35%;
  }

  .individualResult {
    justify-content: space-between;
    display: flex;
    gap: 10px;
  }

  .tickerAsk {
    width: 50px;
  }

  .explanationText {
    color: #8f9eac;
    font-size: 12px;
  }
`;
export default StyledMainScreen;
