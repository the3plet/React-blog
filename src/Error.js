import { Link } from "react-router-dom"


const ErrorPage=()=>{
    return(
        <div className="errorpage">
            <h1>Sorry this Page Does Not Exist</h1>
            <Link to="/">
            <button className="error-button">Go Back To Home</button>
            </Link>
        </div>
    )
}
export default ErrorPage;