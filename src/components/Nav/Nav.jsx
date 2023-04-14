import React from 'react';
import styles from './Nav.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { Link, useLocation } from 'react-router-dom';

function Nav (props) {
  const location = useLocation();
  if (location.pathname === "/") {
    return null;
  }

  return (
    <div className={styles.nav} >
      <div className={styles.nav_search}>
        <div className={styles.search_container}>

          <SearchBar
            onSearch={props.onSearch}
          />
        </div>

        <div className={styles.links_container}>
          <div>
            <Link
              to="/home"
              className={styles.link}> <h3>HOME</h3>
            </Link>

          </div>
          <div>
            <Link
              to="/about"
              className={styles.link}> <h3>ABOUT</h3>
            </Link>

            <div>
              <button>
                <Link
                to="/favorites"
                className={styles.favorites}> Favorites
                </Link>
              </button>
            </div>

            {/* <div className='button_container'>
              <button className={styles.button_logout} > 🚷 </button>
            </div> */}

          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;


