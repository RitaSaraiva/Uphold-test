import styled from "@emotion/styled";

const StyledDropDown = styled.div`
  .selectContainer {
    border: transparent;
    padding: 15px;
    border-radius: 35px;
    background-color: white;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .arrowIcon {
    width: 15px;
    height: 15px;
  }

  .DropDownOpen {
    position: absolute;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    height: 200px;
    overflow-y: scroll;
    background-color: white;
  }

  .dropDownOption {
    gap: 10px;
    padding: 10px;
    :hover {
      background-color: rgba(245, 249, 252, 0.25);
    }
  }
`;
export default StyledDropDown;
