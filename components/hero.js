import React from 'react';

function Hero(props) {
    return (
        <div className={props.hero}>
            <header className="priority" >{props.children}</header>
            <style jsx>{`
.defaultHero, .roomsHero {
    background: url('background.jpeg') center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.roomsHero {
    background-image: url('images/room-2.jpeg');
}
.singleRoomsHero {
    background-image: url(${props.singleBg ? props.singleBg : 'images/room-2.jpeg'});
}

            `}</style>
        </div>
    );
}

Hero.defaultProps = {
    hero: 'defaultHero'
};

export default Hero;