import React from 'react';
import './style.MemberCards.scss';



const MemberCards = (props) => {

    let {name, email, id} = props;
    return (
        <div className = 'MemberCards'>
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
            <button onClick = {() => props.onDelete(id)}>
                Delete
            </button>
        </div>
    )
}

export default MemberCards;