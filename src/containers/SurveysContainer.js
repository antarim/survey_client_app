import {Route, Switch} from "react-router-dom";
import TopNavbar from "../components/TopNavbar";
import SurveysPage from "./SurveysPage";
import CreateSurveyPage from "./CreateSurveyPage";
import SurveyDetailPage from "./SurveyDetailPage";
import Footer from "../components/Footer";

const SurveysContainer = () => {
    return (
        <>
            <TopNavbar/>

            <Switch>
                <Route exact path="/surveys">
                    <SurveysPage/>
                </Route>
                <Route exact path="/surveys/create" >
                    <CreateSurveyPage/>
                </Route>
                <Route exact path="/surveys/:id">
                    <SurveyDetailPage/>
                </Route>
            </Switch>

            <Footer/>
        </>
    );
}

export default SurveysContainer;