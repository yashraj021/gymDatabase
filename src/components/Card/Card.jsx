import React, {Component} from 'react';
import './style.Card.scss';



class Card extends Component {

    state = {
        id: this.props.user.id,
        email: this.props.user.email,
        name: this.props.user.name,
        modalPopState: false,
    }
    
    modalHandler = () => {
        this.setState({modalPopState: true})
        this.props.modalCb(this.props.user);
    }

    render() {
        return (
            <div className = 'MemberCards'>
                <div className = "UserImage">
                </div>
                <div className = "UserDetails">
                    <div className = 'userName' >
                        {this.state.name}
                    </div>
                    <div>
                        {this.state.email}
                    </div>
                </div>
                    <button className = "buttonEdit" onClick = {this.modalHandler}  >
                        Update
                    </button>
                    <button className = "buttonDelete" onClick = {() => this.props.onDelete(this.state.id)} >
                        Delete
                    </button>
            </div>
        )
    }
}

export default Card;