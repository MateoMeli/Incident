import twitter from "./Imagenes/twitter.svg";
import instagram from "./Imagenes/instagram.svg";

const Footer = () => {
    return (
        <div className="container-fluid text-light bg-dark py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <h6>Buscar Tienda</h6>    
                    </div>
                    <div className="col-md-2">
                        <h6>Ayuda</h6>    
                    </div>
                    <div className="col-md-2">
                        <h6>Acerca de Incident</h6>    
                    </div>
                    <div className="col-md-4 text-end">
                        <a href="https://twitter.com/Incident.ok" className="text-light me-1"><img src={twitter} alt={"Twitter"} width={32} /></a>                 
                        <a href="https://www.instagram.com/Incident.ok/" className="text-light me-1"><img src={instagram} alt={"Instagram"} width={32} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;