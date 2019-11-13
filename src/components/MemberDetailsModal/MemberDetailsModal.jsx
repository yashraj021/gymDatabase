import React from 'react';
import './styles.MemberDetailsModal.scss';

const MemberDetailsModal = (props) => {

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

export default MemberDetailsModal;