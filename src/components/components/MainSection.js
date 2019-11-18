import React, { Fragment } from "react";
import "./mainSection.css";
import posed, { PoseGroup } from "react-pose";

const Home = posed.div({
  enter: {
    x: 0,
    width: "100%",
    opacity: 1,
    delay: 0,
    transition: { duration: 700 }
  },
  exit: {
    x: 65,
    opacity: 0,
    transition: { duration: 0 }
  }
});

const Score = posed.div({
  enter: { opacity: 1, delay: 0 },
  exit: {
    opacity: 0,
    transition: { duration: 0 }
  }
});
const Away = posed.div({
  enter: { width: "100%", opacity: 1, delay: 0, transition: { duration: 700 } },
  exit: {
    opacity: 0,
    transition: { duration: 0 }
  }
});
const Time = posed.div({
  enter: { width: "50%", opacity: 1, delay: 600 },
  exit: {
    opacity: 0,
    transition: { duration: 0 }
  }
});

const ScoreText = posed.div({
  enter: { opacity: 1, delay: 0, transition: { duration: 800 }, fontSize: 24 },
  exit: {
    opacity: 0,
    transition: { duration: 0 }
  }
});

const HomeText = posed.div({
  enter: {
    opacity: 1,
    delay: 100,
    transition: { duration: 800 },
    fontSize: 24
  },
  exit: {
    opacity: 0,
    backgroundColor: "transparent",
    transition: { duration: 200 }
  }
});

const AwayText = posed.div({
  enter: {
    opacity: 1,
    delay: 100,
    transition: { duration: 800 },
    fontSize: 24
  },
  exit: {
    opacity: 0,
    transition: { duration: 200 }
  }
});
const MainSection = props => {
  const { show, statShow, home, away, score } = props;
  const { color: homeColor, name: homeName, abbr: homeAbbr } = home;
  const { color: awayColor, name: awayName, abbr: awayAbbr } = away;
  const { home: homeScore, away: awayScore } = score;

  return (
    <Fragment>
      <PoseGroup>
        {show && [
          <Home
            key="home"
            className="main-home"
            style={{ backgroundColor: `${homeColor}` }}
          >
            <HomeText key="texthome">{homeAbbr}</HomeText>
          </Home>,
          <Score
            key="score"
            className="main-score"
            style={{ backgroundColor: "#001339" }}
          >
            <ScoreText key="textscore">{`${homeScore}-${awayScore}`}</ScoreText>
          </Score>,
          <Away
            key="away"
            className="main-away"
            style={{ backgroundColor: `${awayColor}` }}
          >
            <AwayText key="textaway">{awayAbbr}</AwayText>
          </Away>
        ]}

        {show && !statShow && (
          <Time
            key="time"
            className="main-time"
            style={{ backgroundColor: "#001339" }}
          >
            90:00
          </Time>
        )}
      </PoseGroup>
    </Fragment>
  );
};

export default MainSection;
