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
import {useEffect, useState} from "react";
import {axiosInstance} from "./api/axios";
import {PrivateRoute} from "./components/PrivateRoute";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axiosInstance.get('/is_authenticated/')
            .then(res => {
                setIsAuthenticated(true);
                setIsLoading(false);

            })
            .catch(() => {
                setIsAuthenticated(false);
                setIsLoading(false);
            })
        return () => {
        };
    }, []);

    console.log(isAuthenticated);

    return (
        <Router>
            <ConfigProvider locale={ukUA}>
                <Container fluid className="wrapper noPaddingX">
                    {isLoading
                        ? (<LoadingSpinner/>)
                        : (
                            <Switch>
                                <Route exact path="/" component={HomePage}/>
                                <PrivateRoute path="/surveys" isAuthenticated={isAuthenticated}
                                              component={SurveysWrapper}/>
                                <Route path="/take" component={TakeSurveyWrapper}/>
                                <Route path="*" component={NotFoundPage}/>
                            </Switch>
                        )}

                </Container>
            </ConfigProvider>
        </Router>
    );
}

export default App;
