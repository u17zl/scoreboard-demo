import React, { Fragment } from "react";
import "./mainSection.css";
import { useSpring, animated } from "react-spring";

const MainSection = props => {
  const { show } = props;
  const homeColor = "red";
  const awayColor = "white";
  const homeAnim = useSpring({});
  const awayAnim = useSpring({});
  const fade = useSpring({
    from: {
      opacity: 0
    },
    opacity: 1
  });

  return (
    <Fragment>
      <animated.div
        className="main-home"
        style={{ backgroundColor: `${homeColor}` }}
      >
        KC
      </animated.div>
      <animated.div className="main-score" style={{ backgroundColor: "black" }}>
        0-4
      </animated.div>
      <animated.div
        className="main-away"
        style={{ backgroundColor: `${awayColor}` }}
      >
        GG
      </animated.div>
    </Fragment>
  );
};

export default MainSection;
