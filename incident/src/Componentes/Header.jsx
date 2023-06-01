import NavBar from "./NavBar";
import CartWidget from "./CartWidget";
import Logo from "./Imagenes/LogoCocodrilo.webp";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-body-secondary p-3">
                <div className="col-md-6">
                    <a href="http://www.Incident.com.ar/" target={"_blank"} rel={"noreferrer"}><img src={Logo} alt={"Cocodrilo"} width={24} /></a>
                </div>
                <div className="col-md-6 text-end">
                    <a href="/" className="text-dark text-decoration-none">Buscar Tienda</a> | <a href="/" className="text-dark text-decoration-none">Ayuda</a>
                </div>
            </div>
            <div className="row p-3">
                <div className="col-md-4">
                    <Link to={"/"}><img src={Logo} alt={"Incident"} width={60} /></Link>
                </div>
                <div className="col-md-4 text-center">
                    {<NavBar />}
                </div>
                <div className="col-md-4 text-end">
                    {<CartWidget />}
                </div>
            </div>
        </div>
    )
}

export default Header;