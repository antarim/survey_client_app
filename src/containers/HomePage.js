import Footer from "../components/Footer";
import { Col, Container, Row} from "react-bootstrap";

import './HomePage.css';
import LoginForm from "../components/LoginForm";

const HomePage = () => {
    return (
        <>
            <Container className="home-page-container">
                <Container className="home-block" fluid="lg">
                    <Row>
                        <Col className="home-logo">
                            <h2>
                                Nuwm Survey
                            </h2>
                        </Col>
                        <Col className="login">
                            <LoginForm/>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Footer/>
        </>
    );
}

export default HomePage;