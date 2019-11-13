import React from 'react';
import './style.TrainerCards.scss';


const TrainerCards = (props) => {

    let {name,email} = props;
    return (
        <div className = 'MemberCards' onClick = {() => props.callback(email)}>
            <div className = "UserImage">
            </div>
            <div className = "UserDetails">
                <div className = 'userName' >
                {name}
                </div>
                <div>
                {email}
                </div>
            </div>
        </div>
    )
}

export default TrainerCards;