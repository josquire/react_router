import React from 'react';
import { Link } from 'react-router';

const styles = {
  logoName: { paddingLeft: '15px', color: 'blue', fontSize: '20px'},
  aboutLink: { fontSize: '20px', color: 'blue'}
}

const Navbar = () => (
  <nav>
    <div className="nav-wrapper">
      <Link to='/' style={ styles.logoName }>Movies</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to='/about' style={ styles.aboutLink }>About</Link></li>
      </ul>
    </div>
  </nav>

)

export default Navbar;
