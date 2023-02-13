import { Link } from "react-router-dom";


export default function NavBar() {
    return (
        <>
            <div id="sidebar">
                <h1>React Router Contacts</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to={`/`}>Home</Link>
                        </li>
                        <li>
                            <Link to={`/supplier`}>Supplier</Link>
                        </li>
                        <li>
                            <Link to={`/stockdetails`}>Stock Details</Link>
                        </li>
                        <li>
                            <Link to={`/distributions`}>Distributions</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}
