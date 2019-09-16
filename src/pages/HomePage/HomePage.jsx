import React from 'react';
import './HomePage.scss';
import Arnold from '../../assets/Arnold.jpg';
import SignUp from '../../components/sign-up/sign-up.component';



class HomePage extends React.Component{ 
    constructor(props) {
        super(props);
    
        this.state = {
          name: "",
          email: "",
          password: ""
        }
      }

      onSignUp = (state) => {
        this.setState({
            name: state.displayName,
            email: state.email,
            password: state.password
        })
      }
        

    
    render() {
    return (
    <div className = "homepage">
        <div className = "title">
            CROSS CLUB FITNESS
        </div>
        <div className = "quote">
            STRENGTH WITHIN, PRIDE THROUGHOUT.
        </div>
        <div className = "Main">
            <div className = "Card">
                <div className = "Arnold" style = {{backgroundImage: `url(${Arnold})`}}>
                </div>
                <div className = "ArnoldQuote">
                    "The last three or four reps is what makes the muscle grow. This area of pain divides a champion from someone who is not a champion."
                </div>
                <div className = "Author">
                    -Arnold Schwarzenegger; seven-time Mr. Olympia.
                </div>
                
            </div>
            <div className = "SignUp">
                <div className = "joinus">JOIN US</div>         
                <SignUp className = "forms" onSignUp = { this.onSignUp } />
            </div>
            </div>
            
    </div>   
);
    }
}


export default HomePage;