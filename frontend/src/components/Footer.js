import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-mm">
                <div className="footer-link">
                    <div className="footer-link-div">
                        <h4></h4>
                        <a href="/home">
                        <Link to='/home'></Link>
                            <p>Home</p>
                        </a>
                        <a href="/Posts">
                            <p>PostPage</p>
                            <Link to='/Posts'></Link>

                        </a>
                        <a href="/map.html">
                            <p>Map</p>
                            <Link to='/map.html'></Link>

                        </a>
                    </div>
                    </div>
                    
                 

                    </div>

                    </div>
                
    )
}
export default Footer;