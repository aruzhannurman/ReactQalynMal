import React from 'react'
import { useState } from 'react';
import './main.css';
import { Link } from 'react-router-dom';

import video from '../assets/video.mp4';
import diclaimer from '../assets/image.png'



export const Main = () => {
const [visibility, setVisibility] = useState({});

  const clickHandler = () => {
    setVisibility({display: 'none'});
   };
   

  return (
    <div className="MainPage">
      <div className="Container">
        <div class="wrapper" style={visibility}>
        <img src={diclaimer} height="100px" width="300px" alt=""/>
        <div class="content">
          <header id="disclaimer">Disclaimer</header>
          <p id="d1">Бұл вебсайт тек жақсы көңіл күй мен "рухани жаңғыру" мақсатында жасалған.
            Сайтта стереотипті қалың мал критериларына ирониялық түрде қарау арқылы сыни ойлауды дамытасыз деген үміттеміз!</p>
            <p id="d2">Әйел қауымы ешқандай Қалың малмен есептелінбейді және құнды тұлға ретінде құрметтелінуі қажет.</p>
          <div class="buttons">
            <button class="item" onClick={clickHandler}>Иә,түсінікті</button>
          </div>
        </div>
      </div>
      </div>

    <div class="main">
        <p class="title">Қалың малыңды санап ал </p>
    </div>



    <Link to="/quizPage" className="start"><button className="bubbly-button"  >
            Бастау</button></Link>



    <div class="block">
        <div class="general">
            <video id="video-background"  autoPlay muted loop width="114%" > 
                <source src={video}></source> 
            </video>
        </div>
    </div>
    </div>
  )
}
