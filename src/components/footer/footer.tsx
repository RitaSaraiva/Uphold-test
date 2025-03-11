import React from "react";
import appstore from "../../assets/appstore.svg";
import logo from "../../assets/logo.svg";
import playstore from "../../assets/playstore.svg";
import qrCode from "../../assets/qr-code.svg";
import StyledFooter from "./footer.styles.tsx";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footerContainer">
        <img src={logo} alt="logo" className="logo" />

        <div className="lowerButtonContainer">
          <div className="lowerButtonsColumn">
            <p>Products</p>
            <div>
              <p>Consumers</p>
              <p>Business</p>
              <p>Partners</p>
            </div>
          </div>

          <div className="lowerButtonsColumn">
            <p>Company</p>
            <div>
              <p>About</p>
              <p>Carrers</p>
              <p>Press</p>
              <p>Blog</p>
            </div>
          </div>

          <div className="lowerButtonsColumn">
            <p>Help</p>
            <div>
              <p>FAQ & Support</p>
              <p>Platform Status</p>
              <p>Platform Status</p>
              <p>Pricing</p>
              <p>Legal</p>
            </div>
          </div>

          <div className="lowerButtonsColumn">
            <p>Social</p>
            <div>
              <p>Facebook</p>
              <p>Twitter</p>
              <p>Instagram</p>
              <p>Linkedin</p>
            </div>
          </div>
        </div>
        <img src={appstore} alt="appstore" className="appstore" />
        <img src={playstore} alt="playstore" className="playstore" />
      </div>
      <div>
        <div>
          <p>
            Uphold Europe Limited, Reg No. 09281410, Registered Office:
            Interchange Triangle, Chalk Farm Road, London, England, NW184B
          </p>
          <div>
            <p>Uphold, Inc. 2018. All rights Reserved.</p>
            <p>Agreements</p>
            <p>Privacy & Data Policy</p>
            <p>Cookie Policy</p>
          </div>
        </div>
        <img src={qrCode} alt="qrCode" className="qrCode" />
      </div>
    </StyledFooter>
  );
};

export default Footer;
