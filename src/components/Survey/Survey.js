import {Button, Container, Form, Row} from "react-bootstrap";

import './Survey.css';
import QuestionWrapper from "./QuestionWrapper";

const Survey = ({survey, handleSubmit, handleChange}) => {

    // TODO: Validation of all received inputs
    //  (either by name or something else)

    return (
        <Container className="survey">
            <Form onSubmit={handleSubmit}>

                <header className="survey-title">
                    <h3>{survey.title}</h3>
                </header>

                <div>
                    {survey.question_set.map(question => (
                        <Form.Group key={question.id}>
                            <QuestionWrapper
                                question={question}
                                handleChange={handleChange}
                            />
                        </Form.Group>
                    ))}
                </div>

                <Row className="justify-content-center">
                    <Button type="submit">Submit</Button>
                </Row>
            </Form>
        </Container>
    );
}

export default Survey;