import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import LanguageSelector from "./language";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const { t } = useTranslation();
  
  return (
    <div className="Navbar_wapper" id="home">
      {/* Logo Section */}
      <div className="logo_container">
        <svg
          height="50"
          viewBox="0 0 464 473"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M177.878 144.399C183.846 124.409 212.154 124.409 218.122 144.399L235.308 201.962C238.018 211.037 246.466 217.175 255.935 216.948L315.991 215.505C336.847 215.003 345.594 241.926 328.427 253.78L278.993 287.912C271.199 293.293 267.971 303.226 271.114 312.16L291.045 368.831C297.966 388.511 275.064 405.15 258.486 392.486L210.748 356.018C203.222 350.269 192.778 350.269 185.252 356.018L137.514 392.486C120.936 405.15 98.0338 388.511 104.955 368.831L124.886 312.16C128.029 303.226 124.801 293.293 117.007 287.912L67.5728 253.78C50.4056 241.926 59.1534 215.003 80.0091 215.505L140.065 216.948C149.534 217.175 157.982 211.037 160.692 201.962L177.878 144.399Z"
            fill="url(#paint0_linear_34_2)"
          />
          <path
            d="M330.544 57.6849C336.099 46.0261 353.414 48.7226 355.161 61.5184L359.482 93.1826C360.275 98.9918 364.858 103.551 370.672 104.314L402.358 108.472C415.163 110.152 417.949 127.453 406.319 133.068L377.54 146.963C372.26 149.512 369.34 155.28 370.411 161.044L376.249 192.465C378.608 205.162 363.014 213.158 354.08 203.832L331.972 180.756C327.916 176.522 321.528 175.527 316.377 178.327L288.298 193.588C276.952 199.756 264.528 187.396 270.636 176.018L285.752 147.861C288.525 142.695 287.497 136.312 283.242 132.278L260.051 110.29C250.68 101.404 258.595 85.7696 271.304 88.0628L302.754 93.7375C308.524 94.7786 314.277 91.8286 316.799 86.5355L330.544 57.6849Z"
            fill="url(#paint1_linear_34_2)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_34_2"
              x1="198"
              y1="77"
              x2="198"
              y2="473"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#42E2C7" />
              <stop offset="0.5" stopColor="#4DCCD0" />
              <stop offset="1" stopColor="#37ACFF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_34_2"
              x1="349.272"
              y1="18.3754"
              x2="313.728"
              y2="246.624"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#42E2C7" />
              <stop offset="1" stopColor="#4DCCD0" />
            </linearGradient>
          </defs>
        </svg>

        <h3>{t("logoTxt")}</h3>
      </div>

      {/* Menu and Auth Section */}
      <div className="container">
        {/* Auth Buttons */}
        <div className="auth-btn" style={{ marginLeft: "15px" }}>
          <SignedOut>
            <SignInButton mode="modal" redirectUrl="/chat">
              {t("login")}
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        <LanguageSelector />

        {/* Hamburger */}
        <a className="handburger" href="#menu">
          <svg className="handburger-icon"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="35"
            viewBox="0 0 50 50"
          >
            <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
          </svg>
        </a>

        {/* Popover Menu */}
        <div className="popover" id="menu">
          <div className="content">
            <a href="#/" className="close"></a>
            <div className="nav">
              <ul className="nav_list">
                <li>
                  <a href="#home">{t("home")}</a>
                </li> 
                <li>
                  <a href="#about">{t("about")}</a>
                </li>
                <li>
                  <a href="#team">{t("team")}</a>
                </li>
                <li>
                  <Link to="/chat">{t("chat")}</Link>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// document.querySelector('.close').addEventListener('click', function(event) {
//     event.preventDefault(); // Prevents the default action of the link
//     // Add your custom logic here, if any
// });


export default Navbar;
