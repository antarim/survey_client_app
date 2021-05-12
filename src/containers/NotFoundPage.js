import {Button, Container, Row} from "react-bootstrap";

import './NotFoundPage.css';
import Footer from "../components/Footer";
import {useHistory} from "react-router-dom";

const NotFoundPage = () => {
    const history = useHistory();
    return (
        <>
            <Container className="not-found-wrapper">
                <Row className="not-found-text">
                    404 Page Not Found
                </Row>
                <Row className="not-found-button-wrapper">
                    <Button
                        variant="secondary"
                        className="not-found-button"
                        onClick={() => {history.goBack();}}
                    >
                        Повернутися
                    </Button>
                </Row>
            </Container>

            <Footer/>
        </>
    );
}

export default NotFoundPage;