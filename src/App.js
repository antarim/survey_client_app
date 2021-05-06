import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Container} from "react-bootstrap";

import './App.css';
import './components/styles/containers.css';

import SurveysContainer from "./containers/SurveysContainer";
import HomePage from "./containers/HomePage";
import SurveyContainer from "./containers/SurveyContainer";
import NotFoundPage from "./containers/NotFoundPage";

function App() {
    return (
        <Router>
            <Container fluid className="wrapper noPaddingX">

                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/surveys" component={SurveysContainer}/>
                    <Route path="/take/:id/:key" component={SurveyContainer}/>
                    <Route path="*" component={NotFoundPage}/>
                </Switch>
            </Container>
        </Router>
    );
}

export default App;
