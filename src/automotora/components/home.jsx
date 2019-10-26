import React from 'react';
import './home.scss';
import Body from './body.jsx';
import Bottombar from './bottombar.jsx';
function Home() {
    return (
      <div className="home">
        <div className="header">
          <div className="headerProp"/>
        </div>
        <Body/>
        <Bottombar/>
      </div>
    );
}
  
export default Home;