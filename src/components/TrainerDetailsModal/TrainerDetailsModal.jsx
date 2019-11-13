import React from 'react';
import './styles.TrainerDetailsModal.scss';

const TrainerDetailsModal = (props) => {

    return(
        <div className = 'ModalView'>
            <div className = 'ModalSpace'>
            <button onClick = {props.onCloseHandler}>
                Close
            </button>
            </div>
        </div>
    )
}

export default TrainerDetailsModal;