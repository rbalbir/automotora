import "./vehicleListItem.scss";
import React from "react";
import vehicles from "../../assets/vehicles/vehicles.js";
import MoreInfoModal from './vehicleListItemModal';
import ReactDOM from 'react-dom';

function VehicleListItem(props) {
    const renderModal = () => {
        ReactDOM.render(
            <MoreInfoModal mobile={props.mobile} vehicle={props.vehicle}/>,
            document.createElement('div')
        );
    }
    const divStyle = {
        'backgroundImage': `url(${props.vehicle.img})`,
        'backgroundSize': 'contain',
        'backgroundRepeat': 'no-repeat',
        'backgroundPosition': 'center center',
    }
    return (
        //<a className={props.mobile ? "linkMobile" : "link"} href={props.vehicle.fbLink}/>
        <div onClick={renderModal} className={props.mobile ? "linkMobile" : "link"}>
            <div style={divStyle} className={props.mobile ? "vehicleListItemMobile" : "vehicleListItem"}>
                <div className="desc">
                    <div className="name">
                        <div className="brand">{props.vehicle.brand}</div>
                        <div className="model">{props.vehicle.model}</div>
                    </div>
                    <div className="price">{`USD ${props.vehicle.price}`}</div>
                </div>
            </div>
        </div>
    );
}
  
export default VehicleListItem;