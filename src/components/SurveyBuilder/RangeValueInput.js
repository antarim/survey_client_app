import {Col, Row} from "react-bootstrap";

const RangeValueInput = ({label, value, handleChange}) => {
    // TODO: Integer validation??
    return (
        <Row  className="align-items-center">
            <Col>
                {label}
            </Col>
            <Col>
                <input
                    type="number"
                    value={value}
                    onChange={handleChange}
                    className="custom-number-input"
                />
            </Col>
        </Row>
    );
}

export default RangeValueInput;