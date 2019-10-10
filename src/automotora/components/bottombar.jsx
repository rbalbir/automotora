
import React from 'react';
import './bottombar.scss';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

function Bottombar(props) {
    return (
      <div className="bottombar">
          <div className='map'>
            <iframe src="https://www.google.com/maps/d/embed?mid=1zGwWswvQZfmblZwVPWmhE2J4L4Ho70oG" width="320" height="240"></iframe>
          </div>
          <div className='contactInfo'>
            <div className='socialMedia'>
              <a href='https://www.instagram.com/automovilessantarosa/'>IG</a>
              <a href='https://www.facebook.com/Autom%C3%B3viles-Santa-Rosa-107603400603732/'>FB</a>
              <a href='https://wa.me/59899399913'>WHTSAPP</a>
            </div>
          </div>
      </div>
    );
}
  
export default Bottombar;