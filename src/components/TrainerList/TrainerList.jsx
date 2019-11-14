import React from 'react';
import './style.TrainerList.scss';
import Card from '../Card/Card';
;

const TrainerList = ({users, cb}) => {

    return(
        <div className = 'MemberList'>
            {
                users.map((user,i)=>{
                    return(
                        <Card key = {i} email = {user.email} name={user.name} callback ={(user) => cb(user)} />
                    )
                })
            }
        </div>
    )

}

export default TrainerList;