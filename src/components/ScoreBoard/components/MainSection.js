import React, { Fragment } from "react";
import { PoseGroup } from "react-pose";
import "../styles/mainSection.scss";
import * as mainAnim from "../animation/mainSectionAnim";

const {
  Home,
  HomeText,
  HomeBorder,
  Score,
  ScoreText,
  Away,
  AwayBorder,
  AwayText,
  Time,
  TimeText
} = mainAnim;

const MainSection = props => {
  const { show, statShow, home, away, score, delay } = props;

  const {
    color: homeColor,
    name: homeName,
    abbr: homeAbbr,
    borderColor: homeBorderColor
  } = home;
  const {
    color: awayColor,
    name: awayName,
    abbr: awayAbbr,
    borderColor: awayBorderColor
  } = away;
  const { home: homeScore, away: awayScore } = score;

  return (
    <Fragment>
      <PoseGroup>
        {show && [
          <Home
            key="home"
            className="main-home"
            style={{ backgroundColor: homeColor }}
            delay={delay}
          >
            <HomeText key="texthome" delay={delay}>
              {homeAbbr}
            </HomeText>
            <HomeBorder
              key="borderhome"
              className="border-home"
              color={homeBorderColor}
              delay={delay}
            />
          </Home>,
          <Score
            key="score"
            className="main-score"
            style={{ backgroundColor: "#001339" }}
            delay={delay}
          >
            <ScoreText
              key="textscore"
              delay={delay}
            >{`${homeScore}-${awayScore}`}</ScoreText>
          </Score>,
          <Away
            key="away"
            className="main-away"
            style={{ backgroundColor: awayColor }}
            delay={delay}
          >
            <AwayBorder
              key="borderaway"
              className="border-away"
              color={awayBorderColor}
              delay={delay}
            />
            <AwayText key="textaway" delay={delay}>
              {awayAbbr}
            </AwayText>
          </Away>
        ]}

        {show && !statShow && (
          <Time
            key="time"
            className="main-time"
            style={{ backgroundColor: "#001339" }}
            delay={delay}
          >
            <TimeText key="time-text">90:00</TimeText>
          </Time>
        )}
      </PoseGroup>
    </Fragment>
  );
};

export default MainSection;
