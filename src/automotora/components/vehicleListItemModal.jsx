import './vehicleListItemModal.scss';
import React, {useState} from 'react';
import Modal from 'react-modal';
import classNames from 'classnames';
import { MDBCloseIcon } from "mdbreact";
import {MdClose} from "react-icons/md";
import {baseLink} from '../../assets/vehicles/carLinks';

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
    const mensaje = `Hola, te escribo para consultarte por el ${props.vehicle.brand} ${props.vehicle.model}. Quisiera saber precio, año, kilometraje y equipamiento del mismo. En caso de que tenga mas fotos le agradezco enviarme. Desde ya muchas gracias. Saludos`
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
                <div className={`headerText ${device}`}>
                    {props.vehicle.sold && <div className={`banner ${device}`}>Vendido</div>}
                    <div className={`modalTitle ${device}`} >{`${props.vehicle.brand} - ${props.vehicle.model}`}</div>
                </div>
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
                <a className={`link ${device}`} href={`${baseLink}${props.vehicle.fbLink}`} target="_blank">Mas fotos</a>
                <div className={`socialMedia ${device}`}>
                    <a  href='https://www.instagram.com/automovilessantarosa/'><div  className='ig'/></a>
                    <a  href='https://www.facebook.com/Autom%C3%B3viles-Santa-Rosa-107603400603732/'><div  className='fb'/></a>
                    <a  href={`https://wa.me/59899399913?text=${mensaje}`}><div  className='wp'/></a>
                </div>
            </div>
        </div>
    </Modal>
    );
}

