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
            <p className="optionsTitleText">Products</p>
            <div>
              <p className="optionsText">Consumers</p>
              <p className="optionsText">Business</p>
              <p className="optionsText">Partners</p>
            </div>
          </div>

          <div className="lowerButtonsColumn">
            <p className="optionsTitleText">Company</p>
            <div>
              <p className="optionsText">About</p>
              <p className="optionsText">Carrers</p>
              <p className="optionsText">Press</p>
              <p className="optionsText">Blog</p>
            </div>
          </div>

          <div className="lowerButtonsColumn">
            <p className="optionsTitleText">Help</p>
            <div>
              <p className="optionsText">FAQ & Support</p>
              <p className="optionsText">Platform Status</p>
              <p className="optionsText">Platform Status</p>
              <p className="optionsText">Pricing</p>
              <p className="optionsText">Legal</p>
            </div>
          </div>

          <div className="lowerButtonsColumn">
            <p className="optionsTitleText">Social</p>
            <div>
              <p className="optionsText">Facebook</p>
              <p className="optionsText">Twitter</p>
              <p className="optionsText">Instagram</p>
              <p className="optionsText">Linkedin</p>
            </div>
          </div>
        </div>
        <img src={appstore} alt="appstore" className="appstore" />
        <img src={playstore} alt="playstore" className="playstore" />
      </div>
      <div className="legalInfoContainer">
        <div>
          <p className="legalText">
            Uphold Europe Limited, Reg No. 09281410, Registered Office:
            Interchange Triangle, Chalk Farm Road, London, England, NW184B
          </p>
          <div className="rightsReservedContainer">
            <p className="legalText">Uphold, Inc. 2018. All rights Reserved.</p>
            <p className="legalInfo">Agreements</p>
            <p className="legalInfo">Privacy & Data Policy</p>
            <p className="legalInfo">Cookie Policy</p>
          </div>
        </div>
        <img src={qrCode} alt="qrCode" className="qrCode" />
      </div>
    </StyledFooter>
  );
};

export default Footer;
