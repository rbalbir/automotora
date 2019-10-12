import React from 'react';
import './body.scss';
import VehicleList from './vehicleList.jsx';
function Body() {
    return (
      <div className="body">
        <div className="subbody">
          <VehicleList/>
        </div>
      </div>
    );
}
  
export default Body;