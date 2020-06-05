import React from 'react';
import Link from "next/link";

function Project({project}) {
    const { title, bgimg, info } = project;
    return (
        <article className="room">
            <div className="img-container">
                <img src={bgimg} alt="single room" />
                {/*<Link href="/rooms/[id]" as={`/rooms/${room._id}`}>*/}
                {/*    <button className="btn-primary room-link">Features</button>*/}
                {/*</Link>*/}
            </div>
            <p className="room-info">{title}</p>
            <p>{info}</p>
        </article>
    );
}

export default Project;