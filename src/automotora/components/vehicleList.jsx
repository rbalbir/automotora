import "./vehicleList.scss";
import React from "react";
import vehicles from "../../assets/vehicles/vehicles.js";
import VehicleListItem from "./vehicleListItem.jsx";
function VehicleList() {
    return (
      <div className="vehicleList">
        {
            vehicles.map((value, index) => {
                return <VehicleListItem vehicle={value} key={index}/>
            })
        }
      </div>
    );
}
  
export default VehicleList;