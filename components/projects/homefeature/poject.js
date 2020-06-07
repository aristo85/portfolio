import React from 'react';
import { Button } from 'reactstrap';
import { useRouter } from 'next/router';

function Project({project}) {
    const router = useRouter();
    const { title, bgimg, info } = project;

    const handleClick = (e) => {
        e.preventDefault();
        router.push({
            pathname: '/projects',
            query: { name: title }
        })
    };

    return (
        <Button onClick={handleClick} className="btn-info project-feature-container">
            <article className="room">
                <div className="img-container">
                    <img src={bgimg} alt="single room" />
                </div>
                <p className=" room-info">{title}</p>
                <p>{info}</p>
            </article>
        </Button>
    );
}

export default Project;