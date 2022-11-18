
import "./error.css"
import {Logo} from "../../components/Logo"

//this import link it is necessary to import from react router to go back to home page
import {Link} from "react-router-dom"
export default function Error() {

    return (
        <div className="error">
            <Logo/>
            <h1>Page Not found</h1>
                <p>This page has not been found</p>

        <Link className="back" to="/">
            Go to Home Page
        </Link>

        </div>
    )
}