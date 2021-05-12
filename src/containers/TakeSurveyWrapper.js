import Footer from "../components/Footer";
import {Route, Switch} from "react-router-dom";
import RegularSurveyContainer from "./RegularSurveyContainer";
import AnonymousSurveyContainer from "./AnonymousSurveyContainer";

const TakeSurveyWrapper = () => {
    return (
        <>
            <Switch>
                <Route path="/take/:id/anonymous" component={AnonymousSurveyContainer}/>
                <Route path="/take/:id/:key" component={RegularSurveyContainer}/>
            </Switch>

            <Footer/>
        </>
    );
}

export default TakeSurveyWrapper;