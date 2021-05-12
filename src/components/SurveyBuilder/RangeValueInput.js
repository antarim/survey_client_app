import {Col, Row} from "react-bootstrap";

const RangeValueInput = ({name, label, value, handleChange}) => {
    // TODO: Integer validation??
    return (
        <Row  className="align-items-center">
            <Col>
                {label}
            </Col>
            <Col>
                <input
                    name={name}
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