
import React from 'react';
import './bottombar.scss';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

function Bottombar(props) {
  return (
    <div className={props.mobile ? "bottomBarMobile" : "bottombar"}>
        <div className={props.mobile ? "mapMobile" : "map"}>
          <iframe src="https://www.google.com/maps/d/embed?mid=1zGwWswvQZfmblZwVPWmhE2J4L4Ho70oG" width={props.mobile ? "250" :"320"} height={props.mobile ? "150" :"240"}></iframe>
        </div>
        <div className={props.mobile ? "infoMobile" : "info"}>
          <div className={props.mobile ? "contactInfoMobile" : "contactInfo"}>
            <div>
              <p>
                Para su mejor comidad puede seguirnos en nuestras redes sociales y contactarnos mediante ellas
              </p>
            </div>
            <div className={props.mobile ? "socialMediaMobile" : "socialMedia"}>
              <a  href='https://www.instagram.com/automovilessantarosa/'><div  className='ig'/></a>
              <a  href='https://www.facebook.com/Autom%C3%B3viles-Santa-Rosa-107603400603732/'><div  className='fb'/></a>
              <a  href='https://wa.me/59899399913'><div  className='wp'/></a>
            </div>
          </div>
          <div className={props.mobile ? "copyrightMobile" : "copyright"}>
            Copyright © 2020 Rodrigo Balbi (098 913 336)
          </div>
        </div>
    </div>
  );
}
  
export default Bottombar;