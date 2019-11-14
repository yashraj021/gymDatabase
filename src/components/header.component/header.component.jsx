import React from 'react';
import './header.style.scss';
import {Link} from 'react-router-dom';
import SignIn from '../sign-in.component/sign-in.component';

const Header = (props) => {
    return (
        <div className='header'>
            <div className='options'>
                <Link className='option' to='/members'>
                    {props.authenticated ? "HOME" : ""}
                </Link>
                <Link className='option' to='/members'>
                    {props.authenticated ? "MEMBERS" : ""}
                </Link>
                <Link className='option' to='/trainers'>
                    {props.authenticated ? "TRAINERS" : ""}
                </Link>
                <SignIn className='option' style={{fontSize: "1vw"}} setAuthenticated={props.setAuthenticated}/>
            </div>
        </div>
    )
}

export default Header;
