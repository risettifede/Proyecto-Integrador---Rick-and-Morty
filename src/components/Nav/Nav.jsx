import React from 'react';
import styles from './Nav.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';


class Nav extends React.Component {
    constructor (props) {
        super (props)
    }
    
    render() {
        return (
          <div className={styles.nav}>
            
            <div className={styles.nav_search}>

              <SearchBar onSearch={this.props.onSearch}> </SearchBar>

                <Link to="/home">
                  <h3>HOME</h3> 
                 </Link>

                 <Link to="/about">
                  <h3>ABOUT</h3> 
                 </Link>
                 
            </div> 

          </div>
        );
      }
    }

export default Nav;


