import React, {useState, useEffect } from "react";
import { auth } from "../../firebase/config";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss"
import { FaShoppingCart, FaTimes, FaUserCircle } from "react-icons/fa"
import { FaBars } from "react-icons/fa";
import { toast } from "react-toastify";
import { onAuthStateChanged, signOut } from "firebase/auth";


const logo = (
  <div className={styles.logo}>
    <Link to="/">
      <h2>
        e<span>Shop</span>.
      </h2>
    </Link>
  </div>
)

const cart = (
  <span className={styles.cart}>
    <Link to="/cart">
      Cart
      <FaShoppingCart size={20} />
      <p>0</p>
    </Link>
  </span>
)

const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : '')

const Header = () => {
  const [ showMenu, setShowMenu ] = useState(false)
  const [ userName, setUserName ] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    setUserName(user.displayName)
  } else {
    setUserName('')
  }
});
  }, [])
  

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const hideMenu = () => {
    setShowMenu(false)
  }
  const logoutUser = () => {
    signOut(auth).then(() => {
      toast.success('Logout successful...')
      navigate('/login')
    }).catch((error) => {
      toast.error(error.massage)
});
  }

  return (
    <header>
      <div className={styles.header}>
        {logo}
        {/* ----------------------nav items starts------------------ */}
        <nav className={showMenu ? `${styles[ "show-nav" ]}` : `${styles[ "hide-nav" ]}`}>
          <div className={showMenu ? `${styles[ "nav-wrapper" ]} ${styles[ "show-nav-wrapper" ]}` : `${styles[ "nav-wrapper" ]}`} onClick={hideMenu}>
          </div>
          <ul onClick={hideMenu}>
            <li className={styles[ "logo-mobile" ]}>
              {logo}
              <FaTimes size={22} color="#fff" onClick={hideMenu} />
            </li>
            <li>
              <NavLink to="/" >Home</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={activeLink}>Contact Us</NavLink>
            </li>
          </ul>
          <div className={styles[ "header-right" ]} onClick={hideMenu}>
            <span className={styles.links}>
              <NavLink to="/login" className={activeLink}>Login</NavLink>
              <a href="">
                <FaUserCircle size={16} />
                Hi, {userName}
              </a>
              <NavLink to="/register" className={activeLink}>Register</NavLink>
              <NavLink to="/order-history" className={activeLink}>My Orders</NavLink>
              <NavLink to="/" className={activeLink} onClick={logoutUser}>Logout</NavLink>
            </span>
            {cart}
          </div>
        </nav>
        {/* ---------------------mobile menu starts here------------- */}
        <div className={styles[ "menu-icon" ]}>
          {cart}
          <FaBars size={28} onClick={toggleMenu} />
        </div>

      </div>
    </header>
  );
};

export default Header;