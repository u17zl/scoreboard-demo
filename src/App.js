import React, { Fragment, useState } from "react";
import ScoreBoard from "./components";
import "./assets/App.css";

const homeInfoData = { name: "Kensinton City", abbr: "KC", color: "#d6211c" };

const awayInfoData = { name: "Green Gully", abbr: "GG", color: "#eee" };

const scoreData = { home: 4, away: 0 };

const statData = { home: "Red Cards 0" };

const animationMain = [{ animation: "main", delay: 0 }];

const animationStat = [
  { animation: "main", delay: 0 },
  { animation: "teamStat", delay: 0.6 }
];

const App = props => {
  const [homeInfo, setHomeInfo] = useState(homeInfoData);
  const [awayInfo, setAwayInfo] = useState(awayInfoData);
  const [score, setScore] = useState(scoreData);
  const [stat, setStat] = useState(statData);
  const [animation, setAnimation] = useState([]);

  const handleHide = () => {
    setAnimation([]);
  };

  const handleShowMain = () => {
    setAnimation(animationMain);
  };

  const handleShowStat = () => {
    setAnimation(animationStat);
  };

  return (
    <div className="main-content">
      <div className="score-board">
        <ScoreBoard
          home={homeInfo}
          away={awayInfo}
          score={score}
          stat={stat}
          animation={animation}
        />
      </div>
      <div className="button-group">
        <div className="my-button" onClick={handleHide}>
          Hide
        </div>
        <div className="my-button" onClick={handleShowMain}>
          Show Main
        </div>
        <div className="my-button" onClick={handleShowStat}>
          Show Stat
        </div>
      </div>
    </div>
  );
};

export default App;
