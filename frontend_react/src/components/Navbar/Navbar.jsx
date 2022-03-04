import React from 'react';
import { images } from '../../constants';
import './Navbar.scss'


const Navbar = () => {
  return (
    <nav className='app__navbar'>
      <div>
        <img src={images.logo} alt="logo"/>
      </div>
      <ul>
        {['home', 'about', 'contact', 'work', 'skills' ].map((item) => (
          <li key={`link-${item}`}> 
          <div />
          <a href={`#${item}`}>{item} </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;