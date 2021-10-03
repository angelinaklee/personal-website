import './App.css';
import React from 'react'
import fb from './assets/fb.png';
import pic from './assets/pls.jpg'
import line from './assets/linee.png'
import leaf from './assets/leaf.png';
import ig from './assets/ig.png';
import gm from './assets/gmail.png';
import link from './assets/link.png'; 
import bp from './assets/berk.png';
import csk from './assets/download.png';
import key from './assets/kiwanis.jpeg';
import sci from './assets/ScienceOlympiadLogo.png';
import mun from './assets/MUN_logo.jpeg';

function App() {
  return (
    <div className="App">
    <head>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Inconsolata&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Parisienne&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Birthstone+Bounce&family=Parisienne&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Inconsolata&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Candal&family=Ephesis&family=Fredoka+One&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Rouge+Script&display=swap');
</style>
    </head>
    <body>
    <background></background>
      <h1>Angelina</h1>
      <h2>Lee</h2>
      <img class = "leaf" src = {line} height = "50" width = "600"></img>
      <div class="nav-bar"> 
        <a href="#about">about</a> 
        <a href="#projects">projects</a> 
        <a href="#experiences">experiences</a>
        <a href="#book-list">book list</a> 
      </div>
      <div class="intro">
        <img class = "prof" src = {pic} alt="" height = "325"></img>
        <div id = "about">
          <h4>Hi there!</h4>
          <p>My name is Angelina Lee, and I’m a freshman at UC Berkeley from the Los Angeles area. I plan to major in computer science, and I'm specifically interested in computational linguistics — the intersection between computer science and linguistics. Outside of the classroom, I love to bake new recipes, go on runs, adopt plants, explore local cafes and bookstores, listen to podcasts, learn calligraphy, solve word/jigsaw puzzles, and watch baseball (Go Dodgers!).</p>
          <a href = "https://www.facebook.com/angelina.lee.108/"><img class="face image" src = {fb} width = "75"></img></a>
          <a href = "https://www.linkedin.com/in/angelinaklee"><img class="linked" src = {link} width = "38"></img></a>
          <a href = "https://www.instagram.com/angeliinalee/"><img class="insta" src = {ig} width = "38"></img></a>
          <a href = "https://www.facebook.com/angelina.lee.108/"><img class="gmail" src = {gm} width = "75"></img></a>
      </div>
      </div>
      <div id = "projects">
        <h3>My Projects!</h3>
        <img class = "berk" src = {bp} height = "250" width = "250"></img>
        <img class = "leafOne" src = {leaf} height = "325" width = "325"></img>
        <h5 class="codebase">During Fall 2021, I will be collaborating with a team of eight to design a website for a community service organization called The Berkeley Project. In the website, we will be using ReactJS and NodeJS to create the website layout. In addition, we will be creating algorithms to help match volunteers with events and maintaining a record-keeping database for volunteer sign-ups.</h5>
        <img class = "kwk" src = "https://i.pinimg.com/564x/51/bc/46/51bc4686b6b017e28f828d7838bb500f.jpg" height = "225" width = "225"></img>
        <img class = "leafTwo" src = {leaf} height = "325" width = "325"></img>
        <h5 class="ff">During Summer 2021, I collaborated in a team of four to create a website that matches users with a hike all across California. In the website, we designed a quiz and feedback form for users to submit hike recommendations.</h5>
      </div>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <div id = "experiences">
        <h3>My Past Experiences!</h3>
        <div style={{display: 'flex', alignItems: "center", justifyContent: "space-around"}}>
        <div class="containerOne">
          <img class = "polaroid" src = {key}></img>
          <div class="overlayOne">
            <div class="text">CS Kickstart<br></br></div>
          </div>
          </div>
          <div class="containerTwo">
          <img class = "polaroid" src = {csk}></img>
          <div class="overlayTwo">
            <div class="text">Hello World 2</div>
          </div>
          </div>
          <div class="containerThree">
          <img class = "polaroid" src = {sci}></img>
          <div class="overlayThree">
            <div class="text">Hello World 3</div>
          </div>
          </div>
          <div class="containerFour">
          <img class = "polaroid" src = {mun}></img>
          <div class="overlayFour">
            <div class="text">Hello World 4</div>
          </div>
          </div>
        </div>
      </div>
      <div id = "book list">
        <h3>My Book List!</h3>
      </div>
        </body>
        </div>
  );
}


export default App;
