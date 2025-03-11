import styled from "@emotion/styled";

const StyledFooter = styled.div`
  margin-right: 20px;
  margin-left: 20px;
  .footerContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-top: 1px solid #8f9eac;
  }

  .lowerButtonContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .lowerButtonsColumn {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    color: #8f9eac;
  }
`;
export default StyledFooter;
