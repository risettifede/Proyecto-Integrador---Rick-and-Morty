import React from 'react';
import styles from './Nav.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { Link, useLocation } from 'react-router-dom';

function Nav(props) {
  const location = useLocation();
  if (location.pathname === "/") {
    return null;
  }

  return (
    <div className={styles.nav} >
      <div className={styles.search_container}>
        <SearchBar
          onSearch={props.onSearch}
        />
      </div>
      <div className={styles.list}>
        <Link
          to="/home"> <h3>HOME</h3>
        </Link>
        <Link
          to="/about"><h3>ABOUT</h3>
        </Link>
        <Link
          to="/favorites"><h3>FAVORITES</h3>
        </Link>
      </div>

    </div>
  );
}

export default Nav;


