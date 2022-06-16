import { Container,Row, Col, Button} from "react-bootstrap";
import { useState} from "react";
import {Navigate} from "react-router-dom";
import "./Login.css";
import artwork from "../../assets/login_artwork.svg";
import axios from "../../api/axios";

const LOGIN_URL = "/user/login";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const handleSubmit = async(e) =>{
        e.preventDefault();

        //Login Validation
        if(username == null || password == null){
            setErrorMessage("Please enter valid inputs");        
            setUsername("");
            setPassword("");
            return;
        }

        try {
            const response = await axios.post(
              LOGIN_URL,
            {
                "username" : username,
                "password" : password
            },
            {
                headers: { "Content-Type": "application/json" },
                withCredentials: false,
            }
            );

            localStorage.setItem("access_token", response?.data?.token);


            // const accessToken = response?.data?.accessToken;

            setIsLoggedIn(true);
            setErrorMessage("");

          } catch (error) {
            setErrorMessage("Login Failed");
        }      
    }

    //Login Redirect logic
    if(isLoggedIn){
        return (
            <Navigate to="/dashboard"/>            
        )
    }

    return(
        <Container className="container-fluid p-5">
            <Row className="bg-white p-5 rounded shadow">
                <Col className="pt-3 pb-3 align-self-center justify-content-center d-none d-sm-block">
                    <img src={artwork} id="artwork" alt="Login Graphic"/>
                </Col>
                <Col className="pt-3 pb-3 align-self-center justify-content-center">                    
                    <form className="formGrid" onSubmit={handleSubmit} >
                    <h1>Log In</h1>
                        <Col className="pt-2 pb-2">
                            <label htmlFor="username" id="usernameLabel" className="">Username</label>
                        </Col>
                        <Col className="pt-2 pb-2">
                            <input 
                                type="text" 
                                id="username"
                                onChange={(e) => {setUsername(e.target.value);setErrorMessage("")}}
                                value = {username}
                                required
                            />
                        </Col>
                        <Col className="pt-2 pb-2">
                            <label htmlFor="password" id="passwordLabel">Password</label>
                        </Col>
                        <Col className="pt-2 pb-2">
                            <input 
                                type="password"
                                id="password"
                                onChange={(e) => {setPassword(e.target.value);setErrorMessage("")}}
                                value = {password}
                                required
                            />
                            <p id="errorMessage" className="text-danger">{errorMessage}</p>
                        </Col>
                        <Col>
                            <Button as="input" className="bg-danger pt-2" type="submit" value="Login" />
                        </Col>
                    </form>
                </Col>
                
            </Row>
        </Container>
    )
}

export default Login;