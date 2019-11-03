import React, { Fragment } from 'react';
import './home.scss';
import Body from './body.jsx';
import Bottombar from './bottombar.jsx';
import MediaQuery, {useMediaQuery} from 'react-responsive'

function Home() {

  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    console.log("IS DESKTOP?", isDesktop);
    return isDesktop ? children : null;
  }
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    console.log("IS MOBILE?", isMobile);
    return isMobile ? children : null;
  }

  const DesktopFunc = (props) => {
    return (<Fragment> 
      <Desktop> 
        <div className="header">
          <div className="headerProp"/>
        </div>
        <Body mobile={false}/>
        <Bottombar mobile={false}/>
      </Desktop>
    </Fragment>);
  }

  const MobileFunc = (props) => {
    return (<Fragment> 
      <Mobile> 
        <div className="headerMobile">
          <div className="headerPropMobile"/>
        </div>
        <Body mobile={true}/>
        <Bottombar mobile={true}/>
      </Mobile>
    </Fragment>);
  }
  return (
    <div className="home">
      <DesktopFunc/>
      <MobileFunc/>
    </div>
  );
}
  
export default Home;