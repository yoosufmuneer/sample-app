import { Row, Col, Button, Image} from 'react-bootstrap';
import { useState} from 'react';

import artwork from '../assets/login_artwork.svg';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState([]);

    const handleSubmit = e =>{
        e.preventDefault();

        setUsername('');
        setPassword('');
    }

    return(
            <Row className='bg-white p-5 rounded shadow'>
                <Col className="pt-3 pb-3 align-self-center justify-content-center d-none d-sm-block">
                    <img src={artwork} id="artwork"/>
                </Col>
                <Col className="pt-3 pb-3 align-self-center justify-content-center">                    
                    <form className='formGrid' onSubmit={handleSubmit} >
                    <h1>Log In</h1>
                        <Col className='text-right pt-2 pb-2 '>
                            <label htmlFor='username' id='usernameLabel' className=''>Username</label>
                        </Col>
                        <Col className='pt-2 pb-2'>
                            <input 
                                type='text' 
                                id='username'
                                onChange={(e) => setUsername(e.target.value)}
                                value = {username}
                                required
                            />
                            <p id='errorMessage' className='text-danger pt-2'>{errorMessage}</p>
                        </Col>
                        <Col className='pt-2 pb-2'>
                            <label htmlFor='password' id='passwordLabel'>Password</label>
                        </Col>
                        <Col className='pt-2 pb-2'>
                            <input 
                                type='password' 
                                id='password'
                                onChange={(e) => setPassword(e.target.value)}
                                value = {password}
                                required
                            />
                            <p id='errorMessage' className='text-danger'>{errorMessage}</p>
                        </Col>
                        <Col>
                            <Button as="input" className="bg-danger pt-2" type="submit" value="Login" />
                        </Col>
                    </form>
                </Col>
                
            </Row>
    )
}

export default Login;