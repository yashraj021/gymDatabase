import React from 'react';
import './style.TrainerList.scss';
import TrainerCards from '../TrainerCard/TrainerCards';
;

const TrainerList = ({users, cb}) => {

    return(
        <div className = 'MemberList'>
            {
                users.map((user,i)=>{
                    return(
                        <TrainerCards key = {i} email = {user.email} name={user.name} callback ={(user) => cb(user)} />
                    )
                })
            }
        </div>
    )

}

export default TrainerList;