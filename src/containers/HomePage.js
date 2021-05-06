import {Link} from "react-router-dom";
import Footer from "../components/Footer";

const HomePage = () => {
    return (
        <>
            <div>
                <h2>Home Page</h2>
                <Link to="/surveys">Surveys</Link>

            </div>
            <Footer/>
        </>
    );
}

export default HomePage;