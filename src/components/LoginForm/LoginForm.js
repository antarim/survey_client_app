import {Button, Form} from "react-bootstrap";
import AuthService from "../../services/authService";
import {useState} from "react";
import {useHistory} from "react-router-dom";

const LoginForm = () => {
    // TODO: Add validation
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = event => {
        event.preventDefault();
        AuthService.login(username, password)
            .then(() => {
                history.push('/surveys/');
            });
    }

    return (
        <Form onSubmit={handleLogin}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email / Username</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="example@gmail.com / username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Увійти
            </Button>
        </Form>
    );
}

export default LoginForm;