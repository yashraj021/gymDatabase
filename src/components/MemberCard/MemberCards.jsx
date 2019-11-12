import React from 'react';
import './style.MemberCards.scss';

const MemberCards = (props) => {

    return (
        <div className = 'MemberCards'>
            <div className = "UserImage">
            </div>
            <div className = "UserDetails">
                <div style={{fontFamily: 'Poiret One', fontSize: '1.5vw', paddingBottom: '1%'}} >
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