import React from 'react';
import './header.style.scss';
import { Link } from 'react-router-dom';


const Header = () => (
    <div className = 'header'>
        <div className = 'options'>
            <Link className = 'option' to = '/shop'>
                SHOP
            </Link>
           
            <Link className = 'option' to = '/shop'>
                CONTACT
            </Link>
             <Link className = 'option' to = '/signin'>
                SIGN IN
            </Link>
        </div>
    </div>
)

export default Header;