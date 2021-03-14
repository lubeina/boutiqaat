import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col">
              <h4>WHAT'S HOT</h4>
              <ul>
                <li>Makeup</li>
                <li>Skin Care</li>
                <li>Hair</li>
                <li>Korean Beauty</li>
              </ul>
            </div>
            <div className="col">
              <h4>COMPANY INFORMATION</h4>
              <ul>
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>Delivery Terms</li>
                <li>Terms and conditions</li>
                <li>Newsroom</li>
              </ul>
            </div>
            <div className="col">
              <h4>EXPERIENCE BOUTIQAAT APP ON MOBILE</h4>
              <ul className="appDownload">
                <li>
                  <a
                    title="Download IOS"
                    href="https://apps.apple.com/kw/app/boutiqaat-com-%D8%A8%D9%88%D8%AA%D9%8A%D9%83%D8%A7%D8%AA-%D9%83%D9%88%D9%85/id1021268294"
                    target="_blank"
                    className="download-ios"
                    rel="noreferrer"
                  >
                    {" "}
                    <img
                      className="img-fluid"
                      src="data:image/png;base64,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"
                      alt="Download IOS"
                      width="108"
                      height="30"
                    />{" "}
                  </a>
                </li>
                <li>
                  <a
                    title="Download Android"
                    href="https://play.google.com/store/apps/details?id=com.lezasolutions.boutiqaat&amp;hl=en"
                    target="_blank"
                    className="download-android"
                    rel="noreferrer"
                  >
                    {" "}
                    <img
                      className="img-fluid"
                      src="data:image/png;base64,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"
                      alt="Download Android"
                      width="108"
                      height="30"
                    />{" "}
                  </a>
                </li>
                <li>
                  <a
                    title="Download Android"
                    href="https://appgallery.huawei.com/#/app/C101328997"
                    target="_blank"
                    className="download-huawei"
                    rel="noreferrer"
                  >
                    {" "}
                    <img
                      className="img-fluid"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAAA2CAYAAABqQGPcAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAtqADAAQAAAABAAAANgAAAABqB8d2AAAaoUlEQVR4Ae2dB3gVRdfHz01COoReRRJApYkKKAiIUey990/RDwv2gortlUd97b333itW7BRRkaZUUUFAeof0eu97fhNOWC9JbgkCkXt4Nrt3d9rO/Oc/Z86cWURiEquBf2EN+EK80xH6vLcePTYcLUOEjz2O1cA/WQNLNfEpG44Jev4k0szaa4Tv9QjEjlgdbMMYAKNgNSwZrKFy9YiBOlYHdQEDYPWcYGTHB924QH8/pUdi0P3Yz1gNbKs1AFaP1mO5HpOskF4du4PenKpHmj2MnWM1UIdqIF/LupsecylzHH9UOL+sRwzU1EZM6mINgN2X9HCYNmDvpTf61sW3iZU5VgOeGuin12C5krH7eB7GLmM1UJdrwGE5YcMb1BrY9cQnqdpPkvVMog188XrlVeHDr6tS8UtuwC+lapgp1KNIf/vDj75JyD59+kijRo0q769cuVL+/PNP6dWrlyxYsEB+//1392yHHXaQzMxMmTVrljRo0EA6deokgUBA1q9fL4sWLZLly5dLSUmJ7L777pKamiqTJk1yvy3huLg4adasmfTo0UOysrIkJydHpkyZIvPmzZPCwkIXbM8995SmTZtKQkKCrFu3zpWDdMvLy6V169ay6667is9XUW9+v19+/vlnWbFihWXhnu2yyy4unx9//FE6duwo9evXr3xuF6tWrXL52m87815t2rSRvffeW5KSkmT+/Pnyyy+/uDy8ZbB6oQyUlXyKiopceEtrGz07LBvy5msh20VT0EQFbwdfkvSMS5U+cWnSJS5ZUhgILOVoEtU4JQqoZYFSmeIvkAn+fJnpL5IVUhZVauPGjXONCcAQAPHUU0/Jk08+KcnJyXLOOec4gN50000O2EOGDJFTTjlF/vOf/8i0adMq83zwwQfl/fffl+eff1522mknOeqooxzYCUDjDxw4UG677TZJS0tzoAVwiYmJ8txzz8nTTz/t7n3xxRey2267OYAAMsB99dVXy/jx4+XMM88U8vjtt98kLy/PAWn48OEyYQJrERVCejfeeKMccMABcvjh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"
                      alt="Download Huawei"
                      width="108"
                      height="30"
                    />{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h4>SUPPORT</h4>
              <ul>
                <li>Exchange and returns</li>
                <li>Customer Service</li>
                <li>How to order</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div className="col">
              <h4>CONTACT US</h4>
              <ul>
                <li>
                  Call : <a href="tel:+965 22263400">+965 22263400</a>{" "}
                </li>
                <li>
                  Email :{" "}
                  <a href="mailto:support@boutiqaat.com">
                    support@boutiqaat.com
                  </a>{" "}
                </li>
              </ul>
              <h4>FOLLOW US ON</h4>
              <ul className="social-links overflow-hidden">
                <li>
                  <a
                    className="instagram"
                    title="Instagram"
                    href="https://www.instagram.com/boutiqaat/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <span> Instagram</span>{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="facebook"
                    title="Facebook"
                    href="https://www.facebook.com/boutiqaat"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <span> Facebook</span>{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="twitter"
                    title="Twitter"
                    href="https://twitter.com/boutiqaat"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <span> Twitter</span>{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="youtube"
                    title="Youtube"
                    href="https://www.youtube.com/channel/UCzpFllnXGMn2sDMKncrNjPg"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <span> Youtube</span>{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div>© 2021Boutiqaat. All Rights Reserved. </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
