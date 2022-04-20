import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

const MODAL_STYLE = {
    position: "fixed",
    zIndex:"1000",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor:"#fff",
    
}

const MODAL_OVERLAY = { 
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0.1,0.7)',
    zIndex: 991
    
}

const MODEL_CLOSE = {
    
    position: 'absolute',
    right: '0',
    padding: '7px 15px',
    outline: 'none',
    border: 'none',
    backgroundColor: 'transparent',
    fontSize: "16px"
}

const Modal = ({children, open, close}) => {
    if(!open) return false


    

  return ReactDOM.createPortal(
      <>

      <div style={MODAL_OVERLAY} id="modal_backdrop" onClick={close}></div>
        <div style={MODAL_STYLE} className="modal-box">
            <button onClick={close} style={MODEL_CLOSE}> X </button>
            {children}
        </div>

    </>,
    document.getElementById('modal')
  )
}

export default Modal