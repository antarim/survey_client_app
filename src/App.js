import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Container} from "react-bootstrap";

import './App.css';
import './components/styles/containers.css';

import TopNavbar from "./components/TopNavbar";
import Footer from "./components/Footer";

import HomePage from "./components/Pages/HomePage";
import SurveysPage from "./components/Pages/SurveysPage";
import CreateSurveyPage from "./components/Pages/CreateSurveyPage";
import SurveyDetailPage from "./components/Pages/SurveyDetailPage";
import SurveyPage from "./components/Pages/SurveyPage";

function App() {
    return (
        <Router>
            <Container fluid className="wrapper noPaddingX">
                <TopNavbar/>

                <Switch>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                    <Route exact path="/surveys">
                        <SurveysPage/>
                    </Route>
                    <Route exact path="/surveys/create" >
                        <CreateSurveyPage/>
                    </Route>
                    <Route exact path="/surveys/:id">
                        <SurveyDetailPage/>
                    </Route>
                    <Route path="/surveys/:id/pass/:key">
                        <SurveyPage/>
                    </Route>
                </Switch>

                <Footer/>
            </Container>
        </Router>
    );
}

export default App;
