import React, { Fragment, useState, useEffect } from "react";
import { ScoreBoard } from "./components/ScoreBoard";
import "./assets/App.css";

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
    // setAnimation([]);
    console.log(form);
    console.log(stat);
  };

  const handleShowMain = async () => {
    let statObj = {};
    statObj[radio] = stat[radio];
    await setStat(statObj);
    setAnimation(animationMain);
  };

  const handleShowStat = () => {
    setAnimation(animationStat);
  };

  const handleMainFormChange = event => {
    let obj = { ...form[0], delay: event.target.value };
    setFormData([obj, form[1]]);
  };

  const handleStatFormChange = event => {
    let mainObj = { ...form[0] };
    let statObj = { ...form[1], delay: event.target.value };
    setFormData([mainObj, statObj]);
  };

  const handleStatChange = event => {
    console.log(event.target.value);
    let data = { ...stat };
    data[radio] = event.target.value;
    setStat(data);
  };

  const handleRaidoChange = event => {
    console.log(event.target.value);

    setRadio(event.target.value);
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
      <form>
        Main Delay(ms):
        <input
          value={form[0].delay}
          name="maindelay"
          onChange={handleMainFormChange}
        ></input>
        Stat Delay(ms):
        <input
          value={form[1].delay}
          name="statdelay"
          onChange={handleStatFormChange}
        ></input>
        <div style={{ marginBottom: 30 }}>
          <span className="radio">
            <input
              id="radio-1"
              value="home"
              name="stat_radio"
              type="radio"
              checked={radio === "home"}
              onChange={handleRaidoChange}
            />
            <label htmlFor="radio-1" className="radio-label">
              Home
            </label>
          </span>
          <span className="radio">
            <input
              id="radio-2"
              value="away"
              name="stat_radio"
              type="radio"
              checked={radio === "away"}
              onChange={handleRaidoChange}
            />
            <label htmlFor="radio-2" className="radio-label">
              Away
            </label>
          </span>
          <span style={{ marginLeft: 30 }}>
            Team Stat:
            <input
              value={stat[radio]}
              name="stat"
              onChange={handleStatChange}
            ></input>
          </span>
        </div>
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
  );
};

export default App;
