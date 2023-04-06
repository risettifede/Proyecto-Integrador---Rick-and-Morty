import React from 'react';
import styles from './Nav.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';


class Nav extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.nav}>
        <div className={styles.nav_search}>
          <div className={styles.search_container}>
            <SearchBar
              onSearch={this.props.onSearch}
            />
          </div>

          <div className={styles.links_container}>
            <div>
              <Link to="/home" styles={styles.link}>
                <h3>
                  HOME
                </h3>
              </Link>
            </div>
            <div>
              <Link to="/about" styles={styles.link}>
                <h3>
                  ABOUT
                </h3>
              </Link>
            </div>
          </div>
        </div>

      </div >
    );
  }
}

export default Nav;


