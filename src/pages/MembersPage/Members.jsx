import React, {Component } from 'react';
import './style.Members.scss';
import MemberList from '../../components/MemberList/MemberList';

class Members extends Component {




    render() {
        return(
            <div className = 'parent'>
                <div className = 'header'>
                    <div className = 'Topic'>
                        Members
                    </div> 
                    <div className = 'SearchArea'>
                        <div>
                            <input className = 'SearchBox' placeholder = 'Search' />
                        </div>
                        <button className = 'button'>
                            Search
                        </button>
                    </div>
                </div>
                <MemberList/>
            </div>
        )
    }
}

export default Members;