import "./vehicleListItem.scss";
import React from "react";
import vehicles from "../../assets/vehicles/vehicles.js";

function VehicleListItem(props) {
    const divStyle = {
        'background-image': `url(${props.vehicle.img})`,
        'background-size': 'contain',
        'background-repeat': 'no-repeat',
        'background-position': 'center center',
    }
    return (
        <a className="link" href={props.vehicle.fbLink}>
            <div style={divStyle} className="vehicleListItem">
                <div className="desc">
                    <div className="name">
                        <div className="brand">{props.vehicle.brand}</div>
                        <div className="model">{props.vehicle.model}</div>
                    </div>
                    <div className="price">{`USD ${props.vehicle.price}`}</div>
                </div>
            </div>
        </a>
    );
}
  
export default VehicleListItem;