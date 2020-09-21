import React, {useState} from 'react';

import { Button, Form } from 'semantic-ui-react';

import './login.css';

const Login = () => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleUsername = (e: any, d: any) => {
        setUsername(d.value);
    }
    const handlePassword = (e: any, d: any) => {
        setPassword(d.value);
    }

    const handleLoginCredential = (event: any, data: any) => {
        event.preventDefault();
        console.log(username, password);
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