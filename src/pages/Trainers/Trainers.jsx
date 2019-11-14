import React, { Component } from 'react'
import './style.Trainers.scss';
import MemberList from '../../components/TrainerList/TrainerList';
import MemberDetailsModal from '../../components/TrainerDetailsModal/TrainerDetailsModal';
import {firestore} from '../../firebase/firebase.utils';

class Trainers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            searchfield: '',
            modalFlag: false,
            modalEmail: '',
        }
    }
    async componentDidMount() {
        let user = [];
        await firestore.collection("trainer").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                user.push(doc.data());
            });
        });
        this.setState({users:user})

    }

    onChangeHandler = (event) => {
        this.setState({searchfield: event.target.value},()=> console.log(this.state.searchfield))
    }

    onClickHandler = (user) => {
        this.setState({
            modalEmail: user,
            modalFlag: true
        })
    } 
    onCloseHandler = () => {
        this.setState({modalFlag: false})
    }

    render() {
        const filteredUsers = this.state.users.filter(user =>{
            return user.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
          })
        return(
            <div className = 'parent'>
                <div className = 'header'>
                    <div className = 'Topic'>
                        Trainers
                    </div> 
                    <div className = 'SearchArea'>
                        <div>
                            <input className = 'SearchBox' placeholder = 'Search' onChange = {this.onChangeHandler}/>
                        </div>
                        <button className = 'button'>
                            Search
                        </button>
                    </div>
                </div>
                <MemberList users = {filteredUsers} cb = {this.onClickHandler}/>
                {
                    this.state.modalFlag? (<MemberDetailsModal onCloseHandler = {this.onCloseHandler}/>): null
                }
            </div>
        )
    }
}

export default Trainers;