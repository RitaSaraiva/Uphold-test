import styled from "@emotion/styled";

const StyledFooter = styled.div`
  width: 100%;
  padding-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .footerContainer {
    border-top: 1px solid #f3f6f9;
    width: 75%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    margin-right: 25px;
  }

  .appstore {
    margin-right: 20px;
    cursor: pointer;
  }

  .moreInfoButtons {
    cursor: pointer;
  }

  .playstore {
    cursor: pointer;
  }

  .lowerButtonContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-right: 25px;
  }

  .lowerButtonsColumn {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: left;
    color: #8f9eac;
    text-align: left;
    justify-content: left;
  }

  .optionsText {
    color: #3e4c5d;
    font-size: 12px;
    align-text: left;
    margin: 5px;
  }

  .optionsTitleText {
    font-size: 16px;
    align-text: left;
    color: rgb(12, 14, 16);
    margin: 0px;
  }

  .legalInfoContainer {
    text-align: left;
    display: flex;
    flex-direction: row;
    color: #8f9eac;
    justify-content: space-between;
    font-size: 10px;
    width: 75%;
  }

  .rightsReservedContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  .legalText {
    margin: 5px;
  }

  .legalInfo {
    margin: 5px;
    border-bottom: 1px solid #49cc68;
    cursor: pointer;
  }
`;
export default StyledFooter;
