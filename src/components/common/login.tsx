import React, {useState} from 'react';
import { Button, Form } from 'semantic-ui-react';

import './login.css';

const Login = (props: any) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsername = (e: any, d: any) => {
        e.preventDefault();
        setUsername(d.value);
    }
    const handlePassword = (e: any, d: any) => {
        e.preventDefault();
        setPassword(d.value);
        console.log(password);
    }

    const handleLoginCredential = (event: any, data: any) => {
        event.preventDefault();
        if (username !== undefined && username === 'testUser') {
            localStorage.setItem('session', 'ACTIVE');
            localStorage.setItem('loggedInUser', username);
            props.history.push('/residents');            
        }
    }

    return (
        <div id='template'>            
            <Form onSubmit={handleLoginCredential}>
                <Form.Input label='Username' placeholder='username' onChange={handleUsername} />
                <Form.Input label='Enter Password' type='password' onChange={handlePassword} />
                <div className="formBottom">
                    <Button type='submit'>Login</Button>
                </div>
            </Form>
        </div>
    );
}

export default Login;