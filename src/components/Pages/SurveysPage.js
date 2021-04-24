import {Container, Spinner} from "react-bootstrap";
import CreateSurveyButton from "../SurveyCreate/CreateSurveyButton";
import SurveyList from "../SurveyList";
import {SURVEYS_URL} from "../../api/urls";
import {useAxiosFetch} from "../../utils/hooks";

const SurveysPage = () => {
    const {data: surveys, error, isLoading} = useAxiosFetch(SURVEYS_URL, 8000);

    return (
        <Container>
            <CreateSurveyButton/>

            {isLoading && <Spinner animation="border" variant="secondary"/>}
            {error && <div>{error}</div>}
            {surveys && <SurveyList surveys={surveys}/>}
        </Container>
    );
}

export default SurveysPage;