import React from "react";
import logo from "../../logo.svg";
import "./header.css";
function Header() {
  return (
    <header id="header">
      <div className="panel header">
        <img
          className="img-fluid"
          src={logo}
          alt="Boutiqaat"
          width="150"
          height="54"
        />
        <div className="topSideNav mHide">
          <div className="links login">
            <a>Log In</a>
          </div>
          <div className="links wishlist">
            <a>Wishlist</a>
          </div>
          <div className="links register">
            <a>Register</a>
          </div>
          <div className="links men">
            <span data-gender="men">Men</span>
          </div>
          <div className="flag-select menu-flags">
            <div className="selected--flag--option">
              <span className="country-flag">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjMzNiIgdmlld0JveD0iMCAwIDUxMiAzMzYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGcgZmlsbD0ibm9uZSI+CiAgICA8cGF0aCBkPSJNNTEyLjAwMSAxMTIuMDkySDBWOS4xMDNBOC44MjkgOC44MjkgMCAwIDEgOC44MjguMjc1aDQ5NC4zNDVhOC44MjkgOC44MjkgMCAwIDEgOC44MjggOC44Mjh2MTAyLjk4OXoiIGZpbGw9IiM3M0FGMDAiLz4KICAgIDxwYXRoIGQ9Ik01MDMuMTcyIDMzNS43MjRIOC44MjhBOC44MjkgOC44MjkgMCAwIDEgMCAzMjYuODk2VjIyMy45MDhoNTEydjEwMi45ODhhOC44MjggOC44MjggMCAwIDEtOC44MjggOC44Mjh6IiBmaWxsPSIjRkY0QjU1Ii8+CiAgICA8cGF0aCBmaWxsPSIjRjVGNUY1IiBkPSJNMCAxMTIuMDg4aDUxMlYyMjMuOUgweiIvPgogICAgPHBhdGggZD0iTTMuMjU2IDMzMy41OWwxMzcuOTg1LTEwOS41MzItLjAwMy0xMTIuMTJMMy4yNTYgMi40MUMxLjMxMSA0LjAyOSAwIDYuMzc1IDAgOS4xMDN2MzE3Ljc5M2MwIDIuNzI5IDEuMzExIDUuMDc1IDMuMjU2IDYuNjk0eiIgZmlsbD0iIzQ2NDY1NSIvPgogIDwvZz4KPC9zdmc+Cg=="
                  alt="Kuwait"
                />
                <span className="country-label">Kuwait</span>
                <span className="arrow-down ">▾</span>
              </span>
            </div>
          </div>
          <div className="language header-lang">العربية</div>
        </div>
        <div className="clearfix"></div>
      </div>
    </header>
  );
}

export default Header;
