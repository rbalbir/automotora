import "./vehicleListItem.scss";
import React from "react";

function VehicleList(props) {
    return (
      <div className="vehicleListItem">
          <div className="name">
              <div className="brand">{props.vehicle.brand}</div>
              <div className="model">{props.vehicle.model}</div>
          </div>
          <div className="price">{props.vehicle.price}</div>
      </div>
    );
}
  
export default VehicleList;