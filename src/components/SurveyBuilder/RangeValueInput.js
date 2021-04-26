import {Col, Row} from "react-bootstrap";

const RangeValueInput = ({label, value, handleChange}) => {
    return (
        <Row  className="align-items-center">
            <Col>
                {label}
            </Col>
            {/*TODO: Positive integer validation*/}
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