import React, { useState } from "react";
import Title from "../../title";
import Project from "./poject";

function Index({ title }) {
  const [projects, setServices] = useState([
    {
      title: "MERN",
      info: "mern",
      bgimg: "/mern.jpg",
    },
    {
      title: "React Native",
      info: "reactNative",
      bgimg: "/reactNative.png",
    },
    {
      title: "Next.js",
      info: "nextjs",
      bgimg: "/Nextjs.jpg",
    },
    {
      title: "React-Redux",
      info: "react-redux",
      bgimg: "/reactRedux.jpg",
    },
    {
      title: "Jquery",
      info: "jquery",
      bgimg: "/jquery.png",
    },
    {
      title: "D3.js",
      info: "d3",
      bgimg: "/d3js.jpg",
    },
  ]);
  let featured = projects.map((project, index) => {
    return <Project key={index} project={project} />;
  });

  return (
    <section className="featured-rooms projects">
      <Title title={title} />
      <div className="section-title">
        <div className="mt-n4 mb-n2" />
      </div>
      <div className="featured-rooms-center">{featured}</div>
    </section>
  );
}

export default Index;
