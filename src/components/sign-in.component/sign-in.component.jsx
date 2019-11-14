import React from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';


class SignIn extends React.Component {

   constructor(props) {
       super(props);

       this.state = {
        show: false,
        email: "",
        password: "",
        login: false
    };
   }

    // handleSubmit = event => {
    //     event.preventDefault();
    //     console.log(this.state)
    //     this.setState({
    //         show: false,
    //         email: "",
    //         password: "",
    //         login: true
    //     }, () => {
    //         this.props.setAuthenticated(this.state.login);
    //     })
    // };

    handleChange = event => {
        const {type, value} = event.target;
        this.setState({[type]: value});
    };

    onclick = async () => {

        await signInWithGoogle().then( (res) => {
            this.setState({
                email: res.user.email,
                login: true
            })
            this.props.setAuthenticated(this.state.login);
        })   
    };

    onhandle = () => {
        this.setState({show: false});
    };
    logOut = () => {
        this.setState({login: false}, () => this.props.setAuthenticated(this.state.login))
        
    }

    render() {
        return (
            <div>
                <Button variant="link" className="LogIn" style={{
                    fontSize: '20px',
                    paddingTop: '1.1px',
                    fontWeight: "bold",
                    marginLeft: "10px",
                    textDecoration: 'none'
                }} onClick={!this.state.login ? this.onclick: this.logOut}>
                    {this.state.login ? "LOG OUT" : "LOG IN"}
                </Button>
                {/* <div>
                    <Modal centered show={this.state.show} onHide={this.onhandle}>
                        <Modal.Header closeButton>
                            <Modal.Title>Sign In</Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{backgroundColor: "rgba(0,0,0,0)"}}>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" onChange={this.handleChange}/>
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" onChange={this.handleChange}/>
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out"/>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Modal.Body>
                    </Modal>
                </div> */}
            </div>
        )
    }
}

export default SignIn;






