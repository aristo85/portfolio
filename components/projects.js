import React, {useState} from 'react';
import Title from "./title";
import Project from "./poject";

function Index(props) {
    const [projects, setServices] = useState([
        {
            title: "MERN",
            info: 'full stack projects with MongoDB, Express, React and Node.js',
            bgimg: '/mern.jpg'
        },
        {
            title: "Next.js",
            info: 'server-side rendering and static web applications with Next.js javaScript framework using React',
            bgimg: '/Nextjs.jpg'
        },
        {
            title: "React-Redux",
            info: 'projects for building user interfaces with JavaScript library of React and Redux for managing the state of application',
            bgimg: '/reactRedux.jpg'
        },
        {
            title: "Jquery",
            info: 'some projects with JavaScript library (Jquery)',
            bgimg: '/jquery.png'
        },
        {
            title: "D3.js",
            info: 'projects of data visualization skills using Scalable Vector Graphics (SVG) by D3.js',
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