import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Tabs, Tab } from "react-bootstrap";
import Mern from "../components/projects/mern";
import Nextjs from "../components/projects/nextjs";
import D3 from "../components/projects/d3js";
import ExpressNode from "../components/projects/express";
import Jquery from "../components/projects/jquery";
import ReactRedux from "../components/projects/reactredux";
import { useRouter } from "next/router";
import { withTranslation } from "../i18n";
import ReactNative from "../components/projects/reactNative";

function ControlledTabs({ t }) {
  const router = useRouter();
  const tabName = router.query.name ? router.query.name : "MERN";
  const [key, setKey] = useState(tabName);

  return (
    <div style={{ marginTop: "8vh", paddingLeft: "1%" }}>
      <Tabs id="control" activeKey={key} onSelect={(k) => setKey(k)}>
        <Tab eventKey="MERN" title="MERN">
          <Mern mern1={t("mern-1")} mern2={t("mern-2")} />
        </Tab>
        <Tab eventKey="React-Native" title="React-Native">
          <ReactNative
            reactNative1={t("reactNative-1")}
            reactNative2={t("reactNative-2")}
          />
        </Tab>
        <Tab eventKey="Next.js" title="Next.js">
          <Nextjs next1={t("next-1")} next2={t("next-2")} />
        </Tab>
        <Tab eventKey="React-Redux" title="React-Redux">
          <ReactRedux
            react1={t("react-1")}
            react2={t("react-2")}
            react3={t("react-3")}
            react4={t("react-4")}
          />
        </Tab>
        <Tab eventKey="D3.js" title="SVG-D3.js">
          <D3 d31={t("d3-1")} d32={t("d3-2")} d33={t("d3-3")} d34={t("d3-4")} />
        </Tab>
        <Tab eventKey="express" title="Express">
          <ExpressNode
            express1={t("express-1")}
            express2={t("express-2")}
            express3={t("express-3")}
          />
        </Tab>
        <Tab eventKey="Jquery" title="Jquery">
          <Jquery
            jquery1={t("jquery-1")}
            jquery2={t("jquery-2")}
            jquery3={t("jquery-3")}
            jquery4={t("jquery-4")}
            jquery5={t("jquery-5")}
          />
        </Tab>
      </Tabs>
    </div>
  );
}

ControlledTabs.getInitialProps = async () => ({
  namespacesRequired: ["projects"],
});

ControlledTabs.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("projects")(ControlledTabs);
