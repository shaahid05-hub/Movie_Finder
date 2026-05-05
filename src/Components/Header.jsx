import React from 'react'
import { useNavigate } from 'react-router-dom'
import Overlay from './Overlay'

function Header(props) {

    let navigate = useNavigate()
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark ">
                <div className="container-fluid">
                    <a className="navbar-brand text-white fs-3 fw-bold " href="/">MovieZone</a>
        
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <div className='d-flex justify-content'>
                                <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="#" onClick={(e)=>{e.preventDefault()
                                    props.setPage(true)}}>Search</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Profile</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Wishlist</a>
                            </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header
