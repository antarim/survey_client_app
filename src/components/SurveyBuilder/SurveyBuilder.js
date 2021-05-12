import React, {useEffect, useState} from "react";
import SurveyTitle from "./SurveyTitle";
import useInputValue from "../../hooks/useInputValue";
import Question from "../../models/Question";
import ListController from "../../controllers/ListController";
import {Button, Container, Row} from "react-bootstrap";
import QuestionList from "./QuestionList";

import './SurveyBuilder.css';
import '../styles/inputs.css';

const SurveyBuilder = ({initTitle, initDate, initQuestions, handleSurveySubmit}) => {
    const [title, handleChangeTitle] = useInputValue(initTitle);
    const [dateRange, setDateRange] = useState(initDate);
    const [questions, setQuestions] = useState(initQuestions);
    const [activeId, setActiveId] = useState(0);

    const listController = new ListController(questions, setQuestions);

    // Updating question order on change
    useEffect(() => {
        questions.forEach((question, index) => question.order = index)
    }, [questions]);

    const handleDateChange = (value, dateString) => {
        setDateRange(value);
    }

    const handleSubmit = () => {
        handleSurveySubmit({
            title: title,
            // Return moment date values as string in specified format
            startDate: dateRange[0].format("YYYY-MM-DD"),
            endDate: dateRange[1].format("YYYY-MM-DD"),
            questionSet: questions
        })
    }

    // TODO: Create validation for simple forms

    return (
        <Container size="xl">
            <SurveyTitle
                title={title}
                handleChangeTitle={handleChangeTitle}
                dateRange={dateRange}
                handleDateChange={handleDateChange}
            />

            <QuestionList
                activeId={activeId}
                setActiveId={setActiveId}
                questions={questions}
                listController={listController}
            />

            <Row className="survey-builder-row justify-content-center">
                <Button
                    variant="primary"
                    size="lg"
                    onClick={() => listController.add(new Question({order: questions.length}))}
                >
                    <i className="fas fa-plus icon"></i>
                    {' '}
                    Додати питання
                </Button>
            </Row>
            <Row className="survey-builder-row justify-content-center">
                <Button variant="success" size="lg" onClick={handleSubmit}>
                    <i className="fas fa-paper-plane"></i>
                    {' '}
                    Зберегти опитування
                </Button>
            </Row>
        </Container>
    );
}

export default SurveyBuilder;
