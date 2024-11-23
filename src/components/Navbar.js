import React from 'react'
import dark from '../dark.svg'
import light from '../light.svg'
import { Link } from 'react-router-dom'

const Navbar = (props) => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">

                                <Link className="nav-link active" to="/about">About</Link>
                            </li>
                        </ul>
                        <div className="d-flex gap-5">
                            <div className="dropdown mr-3">
                                <span className={`btn text-${props.mode === 'dark' ? 'light' : 'dark'}`} data-bs-toggle="dropdown" aria-expanded="false">
                                    Theme
                                </span>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-item" onClick={props.toggleOcean}>Ocean</li>
                                    <li className="dropdown-item" onClick={props.toggleEmerald}>Emerald</li>
                                    <li className="dropdown-item" onClick={props.toggleLight}>Light</li>
                                </ul>
                            </div>
                            <img src={dark} hidden={props.mode === 'light' ? false : true} alt='dark' onClick={props.toggleMode} />
                            <img src={light} hidden={props.mode === 'dark' ? false : true} alt='light' onClick={props.toggleMode} />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

// Navbar.defaultProps = {
//     title:"texztuils"
// };

export default Navbar
