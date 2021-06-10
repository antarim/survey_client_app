import Footer from "../components/Footer";
import { Col, Container, Row} from "react-bootstrap";

import './HomePage.css';
import LoginForm from "../components/LoginForm";

const HomePage = ({setIsAuthenticated}) => {
    return (
        <>
            <Container className="home-page-container">
                <Container className="home-block" fluid="lg">
                    <Row>
                        <Col sm={6} className="home-logo">
                            <h2>
                                Nuwm Survey
                            </h2>
                        </Col>
                        <Col sm={6} className="login">
                            <LoginForm
                                setIsAuthenticated={setIsAuthenticated}
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Footer/>
        </>
    );
}

export default HomePage;