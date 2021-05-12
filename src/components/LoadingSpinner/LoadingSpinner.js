import {Container, Spinner} from "react-bootstrap";

import './LoadingSpinner.css';

const LoadingSpinner = () => {
    return (
        <Container className="loading-spinner-wrapper">
            <Spinner animation="border" variant="secondary"/>
        </Container>
    );
}

export default LoadingSpinner;