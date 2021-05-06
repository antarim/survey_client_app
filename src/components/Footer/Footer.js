import './Footer.css';
import {Row} from "react-bootstrap";

const Footer = () => {
    return (
        <footer className="footer">
            <Row className="no-gutters align-self-center">
                Nuwm Survey / Designed and created by:
                <a
                    href="https://github.com/Antarim"
                    rel="noreferrer"
                    target="_blank"
                >
                    Antarim (Taras Khmelnychyi)
                </a>
            </Row>
        </footer>
    );
}

export default Footer;