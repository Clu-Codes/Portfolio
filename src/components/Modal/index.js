import React from 'react';
import './Modal.css';

function Modal({onClose, currentProject}) {
    const {name, description, index} = currentProject;
    return(
        <div className='modal-backdrop'>
            <div className='modal-container'>
                <h3 className='modal-title'>{name}</h3>
                <img src={require(`../../assets/Projects/${index}.png`).default}
                alt='current-project'
                className='modal-project' />
                <p className='modal-desc'>{description}</p>
                <button type='button' className='modal-btn' onClick={onClose}>Close Modal</button>
            </div>
        </div>
    )
}

export default Modal;