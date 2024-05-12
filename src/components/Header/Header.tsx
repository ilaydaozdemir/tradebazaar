import React from "react";
import "./style/Header.scss";
import logoImage from "../../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Dropdown from "../common/Dropdown";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="popup-balloon">
        <SupportAgentIcon />
      </div>
      <div className="logo">
        <a href="/#">
          {" "}
          <img src={logoImage} alt="logo" />
        </a>
      </div>
      <div className="search-bar">
        <Dropdown />
        <input type="text" placeholder="Ara..." />
        <button type="submit">
          <SearchIcon />
        </button>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/#">Anasayfa</a>
          </li>
          <li className="nav-item">
            <a href="/products">Ürünler</a>
          </li>
          <li className="nav-item">
            <a href="/ordertracking">Sipariş Takibi </a>
          </li>
          <li className="nav-item">
            <a href="/discounts">Kampanyalar</a>
          </li>
        </ul>
      </nav>
      <div className="user-info">Giriş</div>
      <div className="cart">Sepet</div>
      <div className="language-selector">Dil Seçenekleri</div>
    </header>
  );
};

export default Header;
