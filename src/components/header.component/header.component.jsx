import React from 'react';
import './header.style.scss';
import { Link } from 'react-router-dom';
import SignIn from '../sign-in.component/sign-in.component';


const Header = (props) => (
    <div className = 'header'>
        <div className = 'options'>
            <Link className = 'option' to = '/shop'>
                SHOP
            </Link>
            <Link className = 'option' to = '/shop'>
                CONTACT
            </Link>
            <SignIn onLogIn ={props.onLogIn} />
        </div>
    </div>
)

export default Header;