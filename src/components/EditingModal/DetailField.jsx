import React from 'react';
import {Dropdown} from 'react-bootstrap';


const Details = ({userDetails, onCloseHandler, onTrainerSelectHandler, trainers, Type}) => {
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
            <div  className = "fields">
                {'Phone-No: '}
                <input name = 'phoneno' className = "input" placeholder = {userDetails.phoneno} onChange = {onCloseHandler}/>
            </div>
           {
                Type != 'trainer'? ( 
                    <div  className = "fields">
                        {"Assign Trainer:"} 
                        <Dropdown style = {{width: '80%'}}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Select Trainer
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {
                                    trainers.map(x=> <Dropdown.Item key = {x.id} onClick = {() => onTrainerSelectHandler(x)}>{x.name}</Dropdown.Item>
                                    )
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                ): null
           }
        </div>
    )
}

export default Details;