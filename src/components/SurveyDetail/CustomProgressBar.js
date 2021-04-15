import { ProgressBar } from "react-bootstrap";

const CustomProgressBar = ({ progressNow }) => {
    if (progressNow < 0) {
        return (
            <ProgressBar variant="warning" now={0} label="Not started yet"/>
        );
    } else if (progressNow > 100) {
        return (
            <ProgressBar variant="success" now={100} label="Finished"/>
        );
    } else {
        return (
            <ProgressBar now={progressNow} label={`${progressNow}%`}/>
        );
    }
}

export default CustomProgressBar;