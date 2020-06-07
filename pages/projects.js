import React, { useState, useEffect } from 'react'
import {Tabs, Tab} from 'react-bootstrap';
import Mern from "../components/projects/mern";
import Nextjs from "../components/projects/nextjs";
import D3 from "../components/projects/d3js";
import ExpressNode from "../components/projects/express";
import Jquery from "../components/projects/jquery";
import ReactRedux from "../components/projects/reactredux";
import {useRouter} from "next/router";

function ControlledTabs() {
    const router = useRouter();
    const [key, setKey] = useState('MERN');

    useEffect(() => {
        if(router.query.name) {
            setKey(router.query.name);
        }
    });

    return (
        <div style={{marginTop: '8vh'}}>
        <Tabs
            id="control"
            activeKey={key}
            onSelect={(k) => setKey(k)}
        >
            <Tab eventKey="MERN" title="MERN">
                <Mern/>
            </Tab>
            <Tab eventKey="Next.js" title="Next.js">
                <Nextjs/>
            </Tab>
            <Tab eventKey="React-Redux" title="React-Redux">
                <ReactRedux/>
            </Tab>
            <Tab eventKey="D3.js" title="SVG-D3.js">
                <D3/>
            </Tab>
            <Tab eventKey="express" title="Express">
                <ExpressNode/>
            </Tab>
            <Tab eventKey="Jquery" title="Jquery">
                <Jquery/>
            </Tab>
        </Tabs>
        </div>
    );
}

export default ControlledTabs;