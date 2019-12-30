import './vehicleListItemModal.scss';
import React, {useState} from 'react';
import Modal from 'react-modal';
import classNames from 'classnames';
import { MDBCloseIcon } from "mdbreact";
import {MdClose} from "react-icons/md";

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
    const device = classNames([{'mobile': props.mobile, '': !props.mobile}]);
    return (
    <Modal
        isOpen={close}
        open
        className={`${modalClass} ${device}`}
        overlayClassName={`overlay ${device}`}
        onBlur={() => setOut(false)}
    >
        <div className={`genericModal ${device}`}>
            <div className={`modalHeader ${device}`}>
                <div className={`modalTitle ${device}`} >{`${props.vehicle.brand} - ${props.vehicle.model}`}</div>
                <div className={`closeBtn ${device}`} onClick={closeModal}><MdClose/></div>
            </div>
            <div className={`modalBody ${device}`}>
                <div className={`dataInfo ${device}`}>
                    <div>Precio (USD):</div>
                    <div>{props.vehicle.price}</div>
                </div>
                <div className={`dataInfo ${device}`}>
                    <div>Kilometraje:</div>
                    <div>{props.vehicle.data.km}</div>
                </div>
                <div className={`dataInfo ${device}`}>
                    <div>Año:</div>
                    <div>{props.vehicle.data.year}</div>
                </div>
                <div className={`dataInfo ${device}`}>
                    <div>Combustible:</div>
                    <div>{props.vehicle.data.fuel}</div>
                </div>
                <a className={`link ${device}`} href={props.vehicle.fbLink}>Mas fotos</a>
            </div>
        </div>
    </Modal>
    );
}

