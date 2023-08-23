import React from 'react'
import './Navbar.css';
import LogoPng from './assests/LogoPng.png'
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

    return (
        <header className="header">


            <nav className="nav container">
                <div className="logo">
                    <img src={LogoPng} alt="logo" style={{ width: '70px', }} />
                </div>

                <div className="nav__menu">
                    <ul className="nav__list grid">

                        <li className="nav__item">
                            <Link to={'/home'} className="nav__link active-link">
                                <i className="uli uil-estate nav__icon"></i>Home
                            </Link>
                        </li>

                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="uli uil-user nav__icon"></i>Favourits
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href='#' className="nav__link">
                                <i class="uil uil-briefcase nav__icon"></i>
                                My Profile
                            </a>
                        </li>




                        <li className="nav__item">
                            <button className='button' onClick={
                                () => {
                                    navigate('/addpet');
                                }
                            }><a href="#contact" className="nav__link">
                                    <i class="uil uil-message nav__icon"></i> <div className='nav__nme'>Add Pet</div></a></button>
                        </li>







                    </ul>

                </div>
            </nav>
        </header>
    )
}

export default Navbar