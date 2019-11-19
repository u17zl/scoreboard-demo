import React, { Fragment, useState, useEffect } from "react";
import { ScoreBoard } from "./components/ScoreBoard";
import "./assets/styles/App.scss";
import backgroundPic from "./assets/images/bg.png";

const homeInfoData = {
  name: "Kingston City",
  abbr: "KC",
  color: "#d6211c",
  borderColor: "#de4d49"
};

const awayInfoData = {
  name: "Green Gully",
  abbr: "GG",
  color: "#eee",
  borderColor: "#ccc"
};

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
  const [radio, setRadio] = useState("home");
  const [form, setFormData] = useState([
    { animation: "main", delay: "0" },
    { animation: "teamStat", delay: "0" }
  ]);

  const handleHide = () => {
    setAnimation([]);
    console.log(form);
    // console.log(stat);
  };

  const handleShowMain = () => {
    console.log(form);
    setAnimation([form[0]]);
  };

  const handleShowStat = () => {
    console.log(form);
    setAnimation(form);
  };

  const handleMainFormChange = event => {
    let obj = { ...form[0], delay: Number(event.target.value) };
    setFormData([obj, form[1]]);
  };

  const handleStatFormChange = event => {
    let mainObj = { ...form[0] };
    let statObj = { ...form[1], delay: Number(event.target.value) };
    setFormData([mainObj, statObj]);
  };

  return (
    <div
      className="main-content"
      style={{
        backgroundImage: `url(${backgroundPic})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%"
      }}
    >
      <div className="score-board">
        <ScoreBoard
          home={homeInfo}
          away={awayInfo}
          score={score}
          stat={stat}
          animation={animation}
        />
      </div>
      <div className="panel">
        <form className="form-group">
          <span>Main Delay(s):</span>
          <input
            value={form[0].delay}
            name="maindelay"
            onChange={handleMainFormChange}
          ></input>
          <span>Stat Delay(s):</span>
          <input
            value={form[1].delay}
            name="statdelay"
            onChange={handleStatFormChange}
          ></input>
        </form>
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
    </div>
  );
};

export default App;
