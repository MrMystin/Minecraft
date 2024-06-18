import React from 'react';
import './style.css';

const header = () => {
  return (
    <header>
      <div className='header center'>
        <picture>
          <img src='./assets/images/logo.png' alt='Minecraft'></img>
        </picture>
        <nav>
          <ul>
            <li>
              <a href='#home'>Home</a>
            </li>
            <li>
              <a href='#games'>Games</a>
            </li>
            <li>
              <a href='#shop'>Shop</a>
            </li>
            <li>
              <a href='#shop'>Support</a>
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>
              <a href='#account'>Account</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default header;