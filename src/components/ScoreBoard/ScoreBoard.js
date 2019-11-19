import React, { Fragment, useState, useEffect } from "react";
import { MainSection, TeamStat } from "./components";

const ScoreBoard = props => {
  const { home, away, score, stat, animation } = props;
  const [mainShow, setMainShow] = useState(false);
  const [statShow, setStatShow] = useState(false);
  const [isBoth, setIsBoth] = useState(false);
  const [mainDelay, setMainDelay] = useState(0);
  const [statDelay, setStatDelay] = useState(0);

  //   input error handler
  useEffect(() => {
    switch (animation.length) {
      case 0:
        setIsBoth(true);
        setStatShow(false);
        setMainShow(false);
        break;

      case 1:
        if (animation[0]["animation"] === "teamStat") {
          break;
        }
        setIsBoth(false);
        setMainShow(true);
        setStatShow(false);

        setMainDelay(animation[0]["delay"]);
        break;

      case 2:
        if (
          animation[0]["animation"] === "teamStat" &&
          animation[1]["animation"] === "main"
        ) {
          setIsBoth(false);
          setMainShow(true);
          setStatShow(true);
          setMainDelay(animation[1]["delay"]);
          setStatDelay(animation[0]["delay"]);
          break;
        } else if (
          animation[1]["animation"] === "teamStat" &&
          animation[0]["animation"] === "main"
        ) {
          setIsBoth(false);
          setMainShow(true);
          setStatShow(true);
          setMainDelay(animation[0]["delay"]);
          setStatDelay(animation[1]["delay"]);
          break;
        }

      default:
        break;
    }
  }, [props, isBoth]);

  return (
    <Fragment>
      <div className="board-grid">
        <MainSection
          show={mainShow}
          statShow={statShow}
          home={home}
          away={away}
          score={score}
          statShow={statShow}
          delay={mainDelay * 1000}
        />
        <TeamStat
          show={statShow}
          stat={stat}
          home={home}
          away={away}
          delay={statDelay * 1000 + mainDelay * 1000}
          isBoth={isBoth}
        />
      </div>
    </Fragment>
  );
};

export default ScoreBoard;
