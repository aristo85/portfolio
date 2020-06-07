import React from 'react';
import Hero from "../components/hero";
import Banner from "../components/banner";
import {Col} from "reactstrap";
import Link from "next/link";
import Projects from '../components/projects/homefeature/projects';
import Contact from "../components/contacts";

const technologies = "HTML/CSS | Bootstrap | JavaScript | React | Redux | MongoDB | Express | Node | Jquery | D3.js";

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
              <Col className="text-center">
                  <img
                      src="/cover.jpg"
                      alt="avatar"
                      className="avatar-img mt-5"
                  />
                  <Banner title="Веб-разработчик" subtitle={technologies} />
              </Col>
          </Hero>
          <Projects/>
          <Contact/>
      </div>
  )
}
