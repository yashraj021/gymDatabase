import React from 'react';
import './style.MemberList.scss';
import MemberCards from '../MemberCard/MemberCards';


const MemberList = ({users, cb, ondelete}) => {

    return(
        <div className = 'MemberList'>
            {
                users().map((user,i)=>{
                    return(
                        <MemberCards 
                        key = {user.id} 
                        email = {user.email} 
                        id = {user.id} 
                        name={user.name}
                        onDelete = {(id) => ondelete(id)}    
                        />
                    )
                })
            }
        </div>
    )

}

export default MemberList;
