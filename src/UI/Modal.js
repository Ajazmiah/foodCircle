import classes from './Modal.module.css'
import ReactDom from 'react-dom';
import {Fragment} from 'react'

const Backdrop = props =>{
return <div className={classes.backdrop} onClick={props.toggleModal}></div>
}
const ModalOverlay = props =>{
  return <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
  </div>
}

const Modal = props =>{
  const portalElement = document.getElementById('overlays')
  return(
    <Fragment>
      {ReactDom.createPortal(<Backdrop toggleModal={props.toggleModal} />,portalElement)}
      {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
    </Fragment>
  )
}

export default Modal
