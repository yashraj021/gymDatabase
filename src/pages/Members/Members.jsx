import React, {Component} from 'react'
import './style.Members.scss';
import MemberList from '../../components/MemberList/MemberList';
import users from './users';
import MemberDetailsModal from '../../components/MemberDetailsModal/MemberDetailsModal';

class Members extends Component {

    state = {
        users: users,
        searchfield: '',
        modalFlag: false,
        modalEmail: '',
    };

    onChangeHandler = (event) => {
        this.setState({searchfield: event.target.value}, () => console.log(this.state.searchfield))
    };

    onClickHandler = (user) => {
        this.setState({
            modalEmail: user,
            modalFlag: true
        })
    };

    onCloseHandler = () => {
        this.setState({modalFlag: false})
    };

    filteredUsers = () => this.state.users.filter(user => {
        return user.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });

    render() {
        return (
            <div className='parent'>
                <div className='header'>
                    <div className='Topic'>
                        Members
                    </div>
                    <div className='SearchArea'>
                        <div>
                            <input className='SearchBox' placeholder='Search' onChange={this.onChangeHandler}/>
                        </div>
                        <button className='button'>
                            Search
                        </button>
                    </div>
                </div>
                <MemberList users={this.filteredUsers} cb={this.onClickHandler}/>
                {
                    this.state.modalFlag ? (<MemberDetailsModal onCloseHandler={this.onCloseHandler}/>) : null
                }
            </div>
        )
    }
}

export default Members;
