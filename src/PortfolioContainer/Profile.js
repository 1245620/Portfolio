import React from 'react'
import Typical from 'react-typical'
import "./Profile.css";


export default function Profile(){
    
    return(

    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className="colz-icon">
                        <a href=" ">
                            <i className="fa fa-linkedin"></i>
                        </a>
                        <a href="https://www.facebook.com/">
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href="https://www.instagram.com/ak_aryan.katara.395/">
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href="https://twitter.com/?lang=en-in">
                            <i className='fa fa-twitter'></i>
                        </a>  
                        <a href=" ">
                            <i className="fa fa-github"></i>
                        </a>
                    </div>
                    </div>

                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hello, I'M <span className="highlighted-text">Aryan</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                loop={Infinity}
                                steps={[
                                    "Aryan Katara ",
                                    2000,
                                    "Full Stack Developer",
                                    2000,
                                    "Using React/React Native Dev",
                                    2000,
                                    "Useing Visual Studio Code",
                                    2000,
                                
                                ]}
                                />
                            </h1>
                            <span className="profile-role-tagline">
                                Building applications with front and back end operations.
                            </span>
                        </span>
                    </div>

                   

                    <div className="profile-options">
                        
                        <a className="btn primary-btn" href="#contact" >
                            Hire Me
                            
                        </a>
                        

                        <a href='Aryan.pdf' download='Aryan.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>

                    </div>
                    

                    <div className='profile-options'>
                        <a className='btn secondary-btn' href="#about">
                           About Me
                        </a>

                    </div>

                    

                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background"></div>
                </div>
            </div>
        </div>
    )
}