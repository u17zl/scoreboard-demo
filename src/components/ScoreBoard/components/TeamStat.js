import React, { Fragment, useState, useEffect } from "react";
import "../styles/teamStat.scss";
import posed, { PoseGroup } from "react-pose";
import * as statAnim from "../animation/statSectionAnim";

const { Team, TeamText, Stat, StatText } = statAnim;
const TeamStat = props => {
  const { show, home, away, stat, delay, isBoth } = props;
  const [statData, setSataData] = useState({ name: "", stat: "", color: "" });
  const { color: homeColor, name: homeName, abbr: homeAbbr } = home;
  const { color: awayColor, name: awayName, abbr: awayAbbr } = away;

  useEffect(() => {
    if (Object.keys(stat)[0] === "home") {
      setSataData({ name: homeName, stat: stat["home"], color: homeColor });
    } else {
      setSataData({ name: awayName, stat: stat["away"], color: awayColor });
    }
  }, [props]);

  return (
    <Fragment>
      <PoseGroup>
        {show && [
          <Team
            key="stat"
            className="team-stat"
            style={{ backgroundColor: statData.color }}
            delay={delay}
            isBoth={isBoth}
          >
            <TeamText delay={delay} isBoth={isBoth}>
              {statData.name}
            </TeamText>
          </Team>,
          <Stat
            key="stat-info"
            className="info-stat"
            style={{ backgroundColor: "#001339" }}
            delay={delay}
            isBoth={isBoth}
          >
            <StatText key="stat-text" delay={delay} isBoth={isBoth}>
              {statData.stat}
            </StatText>
          </Stat>
        ]}
      </PoseGroup>
    </Fragment>
  );
};

export default TeamStat;
