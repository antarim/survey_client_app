import {Route, Switch, useHistory} from "react-router-dom";
import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Footer";
import SurveyListContainer from "./SurveyListContainer";
import SurveyCreateContainer from "./SurveyCreateContainer";
import SurveyDetailContainer from "./SurveyDetailContainer";
import SurveyEditContainer from "./SurveyEditContainer";
import SurveyPreviewContainer from "./SurveyPreviewContainer";
import SurveyResponsesContainer from "./SurveyResponsesContainer";


const SurveysWrapper = () => {
    return (
        <>
            <TopNavbar/>

            <Switch>
                <Route exact path="/surveys" component={SurveyListContainer}/>
                <Route exact path="/surveys/create" component={SurveyCreateContainer}/>
                <Route exact path="/surveys/:id" component={SurveyDetailContainer}/>
                <Route exact path="/surveys/:id/preview" component={SurveyPreviewContainer}/>
                <Route exact path="/surveys/:id/edit" component={SurveyEditContainer}/>
                <Route exact path="/surveys/:id/responses" component={SurveyResponsesContainer}/>
            </Switch>

            <Footer/>
        </>
    );
}

export default SurveysWrapper;