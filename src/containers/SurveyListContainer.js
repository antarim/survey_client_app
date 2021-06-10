import {Container} from "react-bootstrap";
import CreateSurveyButton from "../components/SurveyCreate/CreateSurveyButton";
import SurveyList from "../components/SurveyList";
import {SURVEYS_URL} from "../api/urls";
import useAxiosFetch from "../hooks/useAxiosFetch";
import LoadingSpinner from "../components/LoadingSpinner";

const SurveyListContainer = () => {
    const {data: surveys, error, isLoading} = useAxiosFetch(SURVEYS_URL);

    return (
        <Container>
            <CreateSurveyButton/>

            {isLoading && <LoadingSpinner/>}
            {error && <div>{error}</div>}
            {surveys && <SurveyList surveys={surveys}/>}
        </Container>
    );
}

export default SurveyListContainer;