import React from 'react';
import './header.style.scss';
import { Link } from 'react-router-dom';
import SignIn from '../sign-in.component/sign-in.component';


const Header = (props) => {


    return(
        <div className = 'header'>
            <div className = 'options'>
                <Link className = 'option' to = '/home'>
                    {props.onlogin ? "HOME": ""}
                </Link>
                <Link className = 'option' to = '/members'>
                    {props.onlogin ? "MEMBERS": ""}
                </Link>
                <Link className = 'option' to = '/trainers'>
                    {props.onlogin ? "TRAINERS": ""}
                </Link>
                <SignIn onLogIn ={props.onLogIn} />
            </div>
        </div>
    )
}

export default Header;