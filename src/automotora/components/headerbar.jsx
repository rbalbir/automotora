import React from 'react';
import './headerbar.scss';

function Headerbar() {
    return (
      <div className="headerbar">
          <div className='logo'>
            <img src='./src/assets/logo/logo_transparent.png' alt='logo'></img>
          </div>
          <div></div>
          <div className='opciones'>Menu de opciones</div>
      </div>
    );
}
  
export default Headerbar;