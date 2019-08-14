import React, {Fragment} from 'react';
import classes from './Modal.css';
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => (
    <Fragment>
        <div
            className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
        <Backdrop
            clicked={props.modalClosed}
            show={props.show}/>
    </Fragment>
);

export default Modal;
