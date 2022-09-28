import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss"


const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link to="/">
            <h2>
              eShop
            </h2>
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Header;
