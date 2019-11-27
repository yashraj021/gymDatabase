import React from 'react';
import './style.UserList.scss';
import Card from '../Card/Card';


const MemberList = ({users, ondelete, modalCb}) => {

    return(
        <div className = 'MemberList'>
            {
                users().map((user,i)=>{
                    return(
                        <Card 
                            key = {user.id} 
                            user = {user}
                            onDelete = {(id) => ondelete(id)}
                            modalCb = {(user) => modalCb(user)}
                            imageURL = {users.imageURL}    
                        />
                    )
                })
            }
        </div>
    )

}

export default MemberList;
