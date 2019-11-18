import React, { Fragment, useState, useEffect } from "react";
import "./teamStat.css";
import posed, { PoseGroup } from "react-pose";

const Team = posed.div({
  enter: { width: "100%", opacity: 1, delay: 0, transition: { duration: 700 } },
  exit: {
    opacity: 0,
    width: 40,
    delay: 300,
    transition: { duration: 300 }
  }
});
const Stat = posed.div({
  enter: {
    width: "100%",
    opacity: 1,
    delay: 500,
    transition: { duration: 700 }
  },
  exit: {
    opacity: 0,
    width: 30,
    transition: { duration: 200 }
  }
});

const TeamStat = props => {
  const { show, home, away, stat } = props;
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
            style={{ backgroundColor: `${statData.color}` }}
          >
            Kensington City
          </Team>,
          <Stat
            key="stat-info"
            className="info-stat"
            style={{ backgroundColor: "#001339" }}
          >
            {statData.stat}
          </Stat>
        ]}
      </PoseGroup>
    </Fragment>
  );
};

export default TeamStat;
