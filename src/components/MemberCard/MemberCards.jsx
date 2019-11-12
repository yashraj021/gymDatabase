import React from 'react';
import './style.MemberCards.scss';


const MemberCards = (props) => {

    return (
        <div className = 'MemberCards' onClick = {props.callback}>
            <div className = "UserImage">
            </div>
            <div className = "UserDetails">
                <div className = 'userName' >
                {props.name}
                </div>
                <div>
                {props.email}
                </div>
            </div>
        </div>
    )
}

export default MemberCards;