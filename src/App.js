import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Container} from "react-bootstrap";
import {ConfigProvider} from "antd";
import ukUA from 'antd/lib/locale/uk_UA';

import './App.css';
import './components/styles/containers.css';
import SurveysWrapper from "./containers/SurveysWrapper";
import TakeSurveyWrapper from "./containers/TakeSurveyWrapper";
import HomePage from "./containers/HomePage";
import NotFoundPage from "./containers/NotFoundPage";

function App() {
    return (
        <Router>
            <ConfigProvider locale={ukUA}>
                <Container fluid className="wrapper noPaddingX">
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/surveys" component={SurveysWrapper}/>
                        <Route path="/take" component={TakeSurveyWrapper}/>
                        <Route path="*" component={NotFoundPage}/>
                    </Switch>
                </Container>
            </ConfigProvider>
        </Router>
    );
}

export default App;
