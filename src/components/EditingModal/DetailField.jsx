import React from 'react';


const Details = ({userDetails, onCloseHandler}) => {
    return (
        <div className = 'userDetails'>
            <div className = "fields">
                {'Name: '}
                <input name = "name" className = "input" placeholder = {userDetails.name} onChange = {onCloseHandler}/>
            </div>
            <div className = "fields">
                {'Address: '}
                <input name = "address" className = "input" placeholder = {userDetails.address} onChange = {onCloseHandler}/>
            </div>
            <div  className = "fields">
                {'E-mail: '}
                <input name = 'email'className = "input" placeholder = {userDetails.email} onChange = {onCloseHandler}/>
            </div>
            <div  className = "fields" style = {{paddingBottom: 100}}>
                {'Phone-No: '}
                <input name = 'phoneno' className = "input" placeholder = {userDetails.phoneno} onChange = {onCloseHandler}/>
            </div>
        </div>
    )
}

export default Details;