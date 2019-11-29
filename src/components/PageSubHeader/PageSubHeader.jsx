import React from 'react';
import './PageSubHeader.scss';


const PageSubHeader = ({onChangeHandler, Type}) => {
    return (
        <div className='header'>
            <div className='Topic'>
                {Type}
            </div>
            <div className='SearchArea'>
                <div>
                    <input className='SearchBox' placeholder='Search' onChange={onChangeHandler}/>
                </div>
            </div>
        </div>
    )
}

export default PageSubHeader;