import { ProgressBar } from "react-bootstrap";

import './CustomProgressBar.css';

const CustomProgressBar = ({ progressNow }) => {
    if (progressNow < 0) {
        return (
            <ProgressBar className="custom-progress-bar" variant="warning" now={0} label="Not started yet"/>
        );
    } else if (progressNow > 100) {
        return (
            <ProgressBar className="custom-progress-bar" variant="success" now={100} label="Finished"/>
        );
    } else {
        return (
            <ProgressBar className="custom-progress-bar" now={progressNow} label={`${progressNow}%`}/>
        );
    }
}

export default CustomProgressBar;