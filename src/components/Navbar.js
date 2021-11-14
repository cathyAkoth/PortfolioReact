import React from 'react'
 import cate from '../img/cathy.jpg';
import {NavLink} from 'react-router-dom';

function Navbar(){
    return(
        <div className="Navbar">
           
            <nav className="nav">
                <div className="profile">
                    <img src={cate} alt=""/> 
                </div>   
                <ul className="nav-items">
                    <li className="nav-item">
                        
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>

                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" exact activeClassName="active">
                            About
                        </NavLink>

                    </li>
                    <li className="nav-item">
                        <NavLink to="/potfolios" exact activeClassName="active">
                            Portfolios
                        </NavLink>

                    </li>
                    <li className="nav-item">
                        <NavLink to="/blogs" exact activeClassName="active">
                            Blogs
                        </NavLink>


                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" exact activeClassName="active">
                           Contact Me
                        </NavLink>

                    </li>
                </ul>
                <footer className="footer">
                <p>
                    @2021 Akoth Catherine Cecilia
                </p>
                </footer>
            </nav>
           

        </div>

    )
}


export default Navbar