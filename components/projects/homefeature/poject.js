import PropTypes from "prop-types";
import React from "react";
import { Button } from "reactstrap";
import { useRouter } from "next/router";
import { withTranslation } from "../../../i18n";

function Project({ project, t }) {
  const router = useRouter();
  const { title, bgimg, info } = project;

  const handleClick = (e) => {
    e.preventDefault();
    router.push({
      pathname: "/projects",
      query: { name: title },
    });
  };

  return (
    <Button
      onClick={handleClick}
      className="btn-info project-feature-container"
    >
      <article className="room">
        <div className="img-container">
          <img src={bgimg} alt="single room" />
        </div>
        <p className=" room-info">{title}</p>
        <p>{t(info)}</p>
      </article>
    </Button>
  );
}

Project.getInitialProps = async () => ({
  namespacesRequired: ["common", "navbar"],
});

Project.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(Project);
