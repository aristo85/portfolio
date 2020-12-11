export const onStars = () =>{
    let i;
    let newstars = [];
    for (i = 0; i < 20; i++) {
      newstars.push(
        <div className="stars"
          key={i}
          style={{
            position: "fixed",
            top: `${Math.random() * 11 * 2}%`,
            left: `${Math.random() * 11 * 10}%`,
            zIndex: 1,
            animationDuration: `${i / 30 + Math.floor(Math.random()) + 1}s`,
          }}
          id="ball"
        >
          {""}
        </div>
      );
    }
    return newstars;
}