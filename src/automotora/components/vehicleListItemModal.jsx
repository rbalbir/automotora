import './vehicleListItemModal.scss';
import React, {useState} from 'react';
import Modal from 'react-modal';
import classNames from 'classnames';
import { MDBCloseIcon } from "mdbreact"

export default function MoreInfoModal (props) {
    const [close, setClose] = useState(true);
    const [out, setOut] = useState(true);
    const closeModal = () => {
        setTimeout(() => {
          setClose(false);
        }, 1000);
        setOut(false);
    };
    const modalClass = classNames('modal', [{ 'appear': out, 'desappear': !out }]);

    return (
    <Modal
        isOpen={close}
        open
        className={modalClass}
        overlayClassName="overlay"
        onBlur={() => setOut(false)}
    >
        <div className="genericModal">
            <div className="modalHeader">
                <div className="modalTitle">{`${props.vehicle.brand} - ${props.vehicle.model}`}</div>
                <div className="closeBtn" onClick={closeModal}>X</div>
            </div>
            <div className="modalBody">
                <div className="dataInfo">
                    <div>Precio (USD):</div>
                    <div>{props.vehicle.price}</div>
                </div>
                <div className="dataInfo">
                    <div>Kilometraje:</div>
                    <div>{props.vehicle.data.km}</div>
                </div>
                <div className="dataInfo">
                    <div>Año:</div>
                    <div>{props.vehicle.data.year}</div>
                </div>
                <div className="dataInfo">
                    <div>Combustible:</div>
                    <div>{props.vehicle.data.fuel}</div>
                </div>
                <a className="link" href={props.vehicle.fbLink}>Mas fotos</a>
            </div>
        </div>
    </Modal>
    );
}

