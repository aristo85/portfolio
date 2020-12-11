import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Hero from "../components/hero";
import Banner from "../components/banner";
import { Col } from "reactstrap";
import Projects from "../components/projects/homefeature/projects";
import Contact from "../components/contacts";
import { onStars } from "../library/utils/starsBG";
import { withTranslation } from "../i18n";

const technologies =
  "HTML/CSS | Bootstrap | JavaScript | React | React Native | Redux | MongoDB | Node/Express | Jquery | D3.js";

function Home({ t }) {
  const [stars, setStars] = useState([]);
  useEffect(() => {
    const newStars = onStars();
    setStars(newStars);
  }, []);

  return (
    <div>
      {stars}
      <Hero>
        <Col className="text-center">
          <img src="/cover.jpg" alt="avatar" className="avatar-img mt-5" />
          <Banner title={t("h1")} subtitle={technologies} />
        </Col>
      </Hero>
      <Projects title={t("projects")} />
      <Contact title={t("contacts")} message={t("message")} />
    </div>
  );
}

Home.getInitialProps = async () => ({
  namespacesRequired: ["common", "navbar"],
});

Home.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(Home);
