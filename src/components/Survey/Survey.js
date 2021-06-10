import {Button, Container, Form, Row} from "react-bootstrap";

import './Survey.css';
import QuestionWrapper from "./QuestionWrapper";
import {useForm} from "react-hook-form";

const Survey = ({survey, onSubmit, isDisabled}) => {
    const {control, register, handleSubmit, formState: {errors}} = useForm();

    return (
        <Container className="survey">
            <Form onSubmit={handleSubmit(onSubmit)}>

                <header className="survey-title">
                    <h3>{survey.title}</h3>
                </header>

                <div>
                    {survey.questionSet.map(question => (
                        <QuestionWrapper
                            key={question.id}
                            control={control}
                            register={register}
                            errors={errors}
                            question={question}
                            isDisabled={isDisabled}
                        />
                    ))}
                </div>

                <Row className="justify-content-center">
                    <Button
                        disabled={isDisabled}
                        type="submit"
                    >
                        Submit
                    </Button>
                </Row>
            </Form>
        </Container>
    );
}

export default Survey;