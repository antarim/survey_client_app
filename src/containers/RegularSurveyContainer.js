import {useParams} from "react-router-dom";
import useAxiosFetch from "../hooks/useAxiosFetch";
import {UNIQUE_KEY_CHECK_URL} from "../api/urls";
import LoadingSpinner from "../components/LoadingSpinner";
import SurveyContainer from "./SurveyContainer";

const RegularSurveyContainer = () => {
    const {id, key} = useParams();
    const {data: uniqueKey, error, isLoading} = useAxiosFetch(UNIQUE_KEY_CHECK_URL + key, 8000);

    return (
        <>
            {isLoading && <LoadingSpinner/>}
            {error && <div>{error}</div>}
            {uniqueKey && <SurveyContainer
                id={id}
                uniqueKey={uniqueKey}
                anonymous={false}
            />}
        </>
    );
}

export default RegularSurveyContainer;