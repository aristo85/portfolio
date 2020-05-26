import React from 'react';
import Hero from "../components/hero";
import Banner from "../components/banner";
import {Col} from "reactstrap";

export default function Home() {
    let i;
    let stars = [];
    for (i = 0; i < 20; i++) {
        stars.push(<div key={i} style={{position: "fixed", top: `${(Math.random() * 11)*2}%`,
            left: `${(Math.random() * 11)*10}%`, zIndex: 1,
            animationDuration: `${i/30+Math.floor(Math.random())+1}s`}}
                        id="ball">{''}</div>)
    }
  return (
    <div>
        <Hero>
            <div className="stars position-fixed">
                {stars}
            </div>
            <Col className="text-center banner">
                <img
                    src="https://gentle-refuge-73650.herokuapp.com/resume_cover.png"
                    alt="avatar"
                    className="avatar-img"
                />
                <div className="banner-text">
                    <h1 style={{fontFamily:'Lucida Handwriting'}}>Full stack web developer</h1>

                    <hr />
                    <p>HTML/CSS | Bootstrap | JavaScript | React | Redux | MongoDB | Express | Node | Jquery | D3.js</p>
                    <div className="social-links">
                        <a href="https://github.com/aristo85" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square" aria-hidden="true" />
                        </a>
                        <a href="https://www.freecodecamp.org/fcc3a6b5c4f-d378-41d9-a62a-27c6391f45cc" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-free-code-camp" aria-hidden="true" />
                        </a>
                        <a href="https://codepen.io/Aristo85" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-codepen" aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </Col>
        </Hero>

      <footer>

      </footer>

      <style jsx>{`
        
      `}</style>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
    </div>
  )
}
