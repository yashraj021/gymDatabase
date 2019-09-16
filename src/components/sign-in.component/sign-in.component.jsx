import React from 'react';
import { Button } from 'react-bootstrap';



class SignIn extends React.Component {
    constructor(props){
        super(props);
    

        this.state = {
            show: true

        } 
    }


    onhandle = () => {
        this.setState({show: false});
    }
    
    render() {
        return (
               <Button variant="link" className = "LogIn" style = {{fontSize: '20px', paddingTop: '1.1px', fontWeight: "bold", marginLeft: "10px"}}>
                   LOG IN 
               </Button>
        )
    }
}

export default SignIn;






                    