import React from "react";
import "./Header.scss";
import logoImage from "../../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import Dropdown from "../common/Dropdown";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logoImage} alt="logo" />
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
            <a href="#">Anasayfa</a>
          </li>
          <li className="nav-item">
            <a href="#">Ürünler</a>
          </li>
          <li className="nav-item">
            <a href="#">Hakkımızda</a>
          </li>
          <li className="nav-item">
            <a href="#">İletişim</a>
          </li>
        </ul>
      </nav>
      <div className="user-info">Kullanıcı Bilgileri</div>
      <div className="cart">Sepet</div>
      <div className="language-selector">Dil Seçici</div>
    </header>
  );
};

export default Header;
