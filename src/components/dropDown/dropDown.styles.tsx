import styled from "@emotion/styled";

const StyledDropDown = styled.div`
  .selectContainer {
    border: transparent;
    padding: 7px 10px 7px 10px;
    border-radius: 35px;
    background-color: white;
    display: flex;
    align-items: center;
    gap: 10px;
    width: 80px;
    cursor: pointer;
  }

  .arrowIcon {
    width: 10px;
    height: 10px;
  }

  .DropDownOpen {
    position: absolute;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    height: 150px;
    overflow-y: scroll;
    background-color: white;
    width: 75px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    padding: 10px;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  .dropDownOption {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 7px 10px 7px 10px;
    :hover {
      background-color: rgba(245, 249, 252, 0.25);
    }
  }
`;
export default StyledDropDown;
