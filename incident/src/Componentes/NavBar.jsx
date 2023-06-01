import React from 'react'

const NavBar = () =>
{
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a class="navbar-brand" href="#">
                    Incident
                    </a>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Ofertas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Gorras</a>
                            </li>                    
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Remeras</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );

}

export default NavBar