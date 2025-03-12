import styled from "@emotion/styled";

const StyledHeader = styled.div`
  margin-right: 20px;
  margin-left: 20px;
  .headerContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .loginButtonStyle {
    color: white;
    background-color: #49cc68;
    border-radius: 20px;
    padding: 5px 30px 5px 30px;
    cursor: pointer;
  }

  .logo {
    position: absolute;
    left: 45%;
    height: 40px;
  }

  .navContainer {
    display: flex;
    gap: 20px;
    align-items: center;
    color: #8f9eac;
  }

  .navButtons {
    cursor: pointer;
  }
`;
export default StyledHeader;
