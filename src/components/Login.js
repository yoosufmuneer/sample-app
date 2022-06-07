import { useState, useEffect} from 'react';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() =>{
        setErrorMessage('');

    }, [username,password])

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(username,password);

        setUsername('');
        setPassword('');
    }

    return(
        <section className='container'>
            <h1>Log In</h1>
            <form onSubmit={handleSubmit} className='formGrid'>
                <label htmlFor='username' id='usernameLabel'>Username</label>
                <input 
                    type='text' 
                    id='username'
                    onChange={(e) => setUsername(e.target.value)}
                    value = {username}
                    required
                />
                <label htmlFor='password' id='passwordLabel'>Password</label>
                <input 
                    type='password' 
                    id='password'
                    onChange={(e) => setPassword(e.target.value)}
                    value = {password}
                    required
                />
                <p id='errorMessage'>{errorMessage}</p>
                <button 
                    type ='submit'>
                        Login
                </button>
            </form>
        </section>
    )
}

export default Login;