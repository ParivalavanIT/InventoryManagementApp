import { Link } from "react-router-dom";
import './navStyles.css';
import Logo from '../src/logo.png'


export default function NavBar() {
    
    const status=document.getElementsByClassName('nav')
    if(window.location.pathname==="/login")
    {
        status.style.display='none'
    }
    return (
       
        <section className="nav">
            <div id="sidebar">
                <div className="logoHolder">
                <img src={Logo} alt="" />
                <h2>PAAVAI STORE MANAGEMENT</h2>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link  className="link" to={`/`}>Home</Link>
                        </li>
                        <li>
                            <Link  className="link" to={`/supplier`}>Supplier</Link>
                        </li>
                        <li>
                            <Link  className="link" to={`/stockdetails`}>Stock Details</Link>
                        </li>
                        <li>
                            <Link  className="link" to={`/distributions`}>Distributions</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    );
}
