import React, { Fragment, useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { MainSection, TeamStat } from "./components";

const ScoreBoard = props => {
  const { home, away, score, stat, animation } = props;
  const [mainShow, setMainShow] = useState(false);
  const [statShow, setStatShow] = useState(false);

  //   input error handler
  useEffect(() => {
    switch (animation.length) {
      case 0:
        setMainShow(false);
        setStatShow(false);
        break;

      case 1:
        if (animation[0]["animation"] === "teamStat") {
          break;
        }
        console.log("hello");
        setMainShow(true);
        setStatShow(false);
        break;

      case 2:
        if (
          animation[0]["animation"] === "teamStat" &&
          animation[1]["animation"] === "main"
        ) {
          setMainShow(true);
          setStatShow(true);
          break;
        } else if (
          animation[1]["animation"] === "teamStat" &&
          animation[0]["animation"] === "main"
        ) {
          setMainShow(true);
          setStatShow(true);
          break;
        }

      default:
        break;
    }
  }, [props]);

  return (
    <Fragment>
      {console.log(mainShow)}
      {mainShow ? (
        <MainSection home={home} away={away} score={score} />
      ) : (
        <div style={{ height: 21 }} />
      )}
      {statShow ? <TeamStat stat={stat} /> : null}
    </Fragment>
  );
};

export default ScoreBoard;
