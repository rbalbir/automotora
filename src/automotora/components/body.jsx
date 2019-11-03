import React from 'react';
import './body.scss';
import VehicleList from './vehicleList.jsx';
function Body(props) {

  return (
    <div className={props.mobile ? "bodyMobile" : "body"}>
      <div className={props.mobile ? "subbodyMobile" :"subbody"}>
        <VehicleList mobile={props.mobile}/>
      </div>
    </div>
  );
}
  
export default Body;