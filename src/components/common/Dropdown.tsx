import { useState } from "react";
import React from "react";
const Dropdown: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    "Tüm Ürünler"
  );

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };
  return (
    <div className="dropdown">
      <button className="dropbtn">{selectedCategory}</button>
      <div className="dropdown-content">
        <a href="#" onClick={() => handleCategoryChange("Kategori 1")}>
          Kategori 1
        </a>
        <a href="#" onClick={() => handleCategoryChange("Kategori 2")}>
          Kategori 2
        </a>
        <a href="#" onClick={() => handleCategoryChange("Kategori 3")}>
          Kategori 3
        </a>
      </div>
    </div>
  );
};
export default Dropdown;
