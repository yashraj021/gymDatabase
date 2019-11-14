import React from 'react';
import './style.UserList.scss';
import Card from '../Card/Card';


const MemberList = ({users, ondelete}) => {

    return(
        <div className = 'MemberList'>
            {
                users().map((user,i)=>{
                    return(
                        <Card 
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
