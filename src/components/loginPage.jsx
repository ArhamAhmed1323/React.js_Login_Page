import React, { Component } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faLock } from "@fortawesome/free-solid-svg-icons";
import '../stylesheets/loginPage.css';

class LoginPage extends Component {
    render() {
        return(
            <div id="mainPage">
                <div id="loginForm">
                    <div className="heading">
                        <p> Login </p>
                    </div>
                    
                    <div className="formDiv">
                        <div className="emailDiv">
                            <label> Email </label>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1">
                                        <FontAwesomeIcon icon={faUserCircle} size="lg" style={{ color:"#495057" }}/>
                                    </InputGroup.Text>
                                </InputGroup.Prepend>                        

                                <FormControl
                                    type="email"
                                    placeholder="Enter Email"
                                />
                            </InputGroup>
                        </div>

                        <div className="passwordDiv">
                            <label> Password </label>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1">
                                        <FontAwesomeIcon icon={faLock} size="lg" style={{ color:"#495057" }}/>
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                        
                                <FormControl
                                    type="password"
                                    placeholder="Enter Password"
                                />
                            </InputGroup>
                        </div>    
                    </div>

                    <div className="linkPassword">
                        <a href="ResetPassword">
                            Forgot Password?
                        </a>
                    </div>

                    <div className="buttonDiv">
                        <Button type="submit">
                            LOGIN
                        </Button>
                    </div>
    
                </div>
            </div>
        );
    }
}

export default LoginPage;