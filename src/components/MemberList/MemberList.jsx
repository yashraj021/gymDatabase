import React from 'react';
import './style.MemberList.scss';
import MemberCards from '../MemberCard/MemberCards';
;

const MemberList = ({users}) => {

    return(
        <div className = 'MemberList'>
            {
                users.map((user,i)=>{
                    return(
                        <MemberCards key = {i} email = {user.email} name={user.name}/>
                    )
                })
            }
        </div>
    )

}

export default MemberList;