import React, {useState} from 'react';
import Title from "../../title";
import Project from "./poject";

function Index(props) {
    const [projects, setServices] = useState([
        {
            title: "MERN",
            info: 'Проекты с использованием: MongoDB, Express, React-Redux и Node.js',
            bgimg: '/mern.jpg'
        },
        {
            title: "Next.js",
            info: 'Проекты с Next.js (server-side rendering and static web applications with Next.js javaScript framework using React)',
            bgimg: '/Nextjs.jpg'
        },
        {
            title: "React-Redux",
            info: ' проекты по созданию UI с React-Redux (building user interfaces with JavaScript library of React, and Redux for managing the state of application)',
            bgimg: '/reactRedux.jpg'
        },
        {
            title: "Jquery",
            info: 'некоторые проекты с Jquery (JavaScript-библиотека)',
            bgimg: '/jquery.png'
        },
        {
            title: "D3.js",
            info: 'проекты навыков визуализации данных с использованием Scalable Vector Graphics (SVG) от D3.js',
            bgimg: '/d3js.jpg'
        }
    ]);
    let featured = projects.map((project, index) => {
        return <Project key={index} project={project} />
    });


    return (
        <section className="featured-rooms projects">
            <Title title="Проекты" />
            <div className="section-title">
                <div className="mt-n4 mb-n2" />
            </div>
            <div className="featured-rooms-center">
                {featured}
            </div>
        </section>

    );
}

export default Index;