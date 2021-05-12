import {useParams} from "react-router-dom";
import SurveyContainer from "./SurveyContainer";

const AnonymousSurveyContainer = () => {
    const {id} = useParams();

    return (
        <SurveyContainer
            id={id}
            anonymous={true}
        />
    );
}

export default AnonymousSurveyContainer;