import {Alert, Button, Form} from "react-bootstrap";
import AuthService from "../../services/authService";
import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useState} from "react";

import './LoginForm.css';

const LoginForm = ({setIsAuthenticated}) => {
    const history = useHistory();
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [isUnauthorized, setIsUnauthorized] = useState(false);

    const onSubmit = credentials => {
        AuthService.login(credentials)
            .then(() => {
                // console.log(res);
                setIsAuthenticated(true);
                setIsUnauthorized(false);
                history.push('/surveys/');
            })
            .catch(() => {
                setIsUnauthorized(true);
            });
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label className="login-label">Ім'я користувача*</Form.Label>
                <Form.Control
                    placeholder="Username"
                    {...register('username', {required: true, maxLength: 150})}
                    isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type="invalid">
                    Please enter a username.
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label className="login-label">Пароль*</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    {...register('password', {required: true, maxLength: 150})}
                    isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid">
                    Please enter a password.
                </Form.Control.Feedback>
            </Form.Group>

            {isUnauthorized && (
                <Alert variant="danger">
                    Username or password is incorrect!
                </Alert>
            )}

            <Button variant="primary" type="submit">
                Увійти
            </Button>
        </Form>
    );
}

export default LoginForm;