import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
// import {Link} from 'react-router-dom';


function HomePage(){
    return(
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hello, This is
                    <span> Akoth Catherine Cecilia</span>
                </h1>
                <p className="h-sub-text">
                    l am a passionate committed and talented software engineer 
                    with the ability to identify problems and build solutions for them.

                </p>
                <div className="icons">
                    {/* <Link className="icon-holder"> */}
                        <FontAwesomeIcon icon={faFacebook} className="icon fb"/>
                    {/* </Link> */}
                    {/* <Link className="icon-holder" > */}
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    {/* </Link> */}
                    {/* <Link className="icon-holder" > */}
                        <FontAwesomeIcon icon={faLinkedin} className="icon yt" />
                    {/* </Link> */}
                    {/* <Link className="icon-holder" > */}
                        <FontAwesomeIcon icon={faTwitter} className="icon yt"/>
                    {/* </Link> */}
                </div>
            </header>   
        </div>
    )

}

export default HomePage