import React from 'react';
import './home.scss';
import Headerbar from './headerbar.jsx';
import Body from './body.jsx';
import Bottombar from './bottombar.jsx';
function Home() {
    return (
      <div className="home">
        <Headerbar/>
        <Body/>
        <Bottombar/>
      </div>
    );
}
  
export default Home;