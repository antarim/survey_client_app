import {Route, Switch} from "react-router-dom";
import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Footer";
import SurveysContainer from "./SurveysContainer";
import SurveyCreateContainer from "./SurveyCreateContainer";
import SurveyDetailContainer from "./SurveyDetailContainer";
import SurveyEditContainer from "./SurveyEditContainer";
import SurveyPreviewContainer from "./SurveyPreviewContainer";

const SurveysWrapper = () => {
    return (
        <>
            <TopNavbar/>

            <Switch>
                <Route exact path="/surveys" component={SurveysContainer}/>
                <Route exact path="/surveys/create" component={SurveyCreateContainer}/>
                <Route exact path="/surveys/:id" component={SurveyDetailContainer}/>
                <Route exact path="/surveys/:id/preview" component={SurveyPreviewContainer}/>
                <Route exact path="/surveys/:id/edit" component={SurveyEditContainer}/>
            </Switch>

            <Footer/>
        </>
    );
}

export default SurveysWrapper;