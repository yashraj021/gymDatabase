import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';



class SignIn extends React.Component {
    constructor(props){
        super(props);
    

        this.state = {
            show: false,
            email: "",
            password: "",
            login: false
        } 
    }
    //HERE YOU CAN CONNECT YOUR BACKEND TO GET SIGN IN DATA VALE
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state)
        this.props.onLogIn();
        this.setState({
            show: false,
            email: "",
            password:"",
            login: true
        })

    }
    
    handleChange = event => {
       
        const { type, value } = event.target;
        console.log(type,value)
        this.setState({[type]: value});
        
    

    }

    onclick = () => {
        if(this.state.login === false){
            this.setState({show: true});
        }
        else{
            this.setState({
                login: false
            })
        }
    }
        
    onhandle = () => {
        this.setState({show: false});
    }
    
    render() {
        return (
            <div>
                <Button variant="link" className = "LogIn" style = {{fontSize: '20px', paddingTop: '1.1px', fontWeight: "bold", marginLeft: "10px",textDecoration: 'none'}} onClick = {this.onclick}>
                  {this.state.login ? "LOG OUT": "LOG IN"}
                </Button>
                <div>
                    <Modal centered show={this.state.show} onHide={this.onhandle}>
                        <Modal.Header closeButton>
                            <Modal.Title>Sign In</Modal.Title>
                        </Modal.Header>                   
                        <Modal.Body style = {{backgroundColor: "rgba(0,0,0,0)"}} >
                        <Form onSubmit = {this.handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange = {this.handleChange}/>
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange = {this.handleChange}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>                        
                        </Form>
                        </Modal.Body>
                    </Modal>
                </div>
           </div>
           
        )
    }
}

export default SignIn;






                    