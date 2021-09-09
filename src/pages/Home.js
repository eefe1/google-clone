import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className= 'home' >
            

            <div className= 'home__header'>
             <div className= 'home__headerLeft'>
                 <Link to= 'about'>About</Link>
                 <Link to= 'store'>Store</Link>
             </div>
             <div className= 'home__headerRight'></div>
             <Link to= 'gmail'>Gmail</Link>
             <Link to= 'images'>Images</Link>
              {/* avatar buraya gelecek */}

              {/* appsiconburaya gelecek */}

            </div>

            <div className= 'home__body'>
            <img 
            src= "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
            />
            <div className="home__inputContainer">
                
            </div>
            </div>
        </div>
    );
}

export default Home;