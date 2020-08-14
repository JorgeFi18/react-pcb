import React from 'react';
import { Modal } from '@material-ui/core';

import './AddTask.css';

function AddTask(props) {  
    const  { isOpenModal, closeModal, children } = props;

    return (
        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            className="modal"
            open={isOpenModal}
            onClose={closeModal}
            closeAfterTransition
        >
            <div>{ children }</div>
        </Modal>
    )
}

export default AddTask;