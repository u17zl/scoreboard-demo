import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import ScoreBoard from "../ScoreBoard";
import { TeamStat } from "../components";
import * as statAnim from "../animation/statSectionAnim";
import Adapter from "enzyme-adapter-react-16";

const { Team, TeamText, Stat, StatText } = statAnim;

Enzyme.configure({ adapter: new Adapter() });

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

const setupStatShow = () => {
  const props = {
    show: true,
    home: homeInfoData,
    away: awayInfoData,
    stat: statData,
    delay: 0,
    isBoth: false
  };
  const sWrapper = shallow(<TeamStat {...props} />);
  const mWrapper = mount(<TeamStat {...props} />);
  return {
    props,
    sWrapper,
    mWrapper
  };
};

const setupStatHide = () => {
  const props = {
    show: false,
    home: homeInfoData,
    away: awayInfoData,
    stat: statData,
    delay: 0,
    isBoth: false
  };
  const sWrapper = shallow(<TeamStat {...props} />);
  const mWrapper = mount(<TeamStat {...props} />);
  return {
    props,
    sWrapper,
    mWrapper
  };
};

describe("Stat Sector show", () => {
  const { sWrapper, mWrapper, props } = setupStatShow();

  it("get child component StatSection's length", () => {
    expect(sWrapper.find(Team).length).toBe(1);
    expect(sWrapper.find(TeamText).length).toBe(1);
    expect(sWrapper.find(Stat).length).toBe(1);
    expect(sWrapper.find(StatText).length).toBe(1);
    expect(mWrapper.find(Team).length).toBe(1);
    expect(mWrapper.find(TeamText).length).toBe(1);
    expect(mWrapper.find(Stat).length).toBe(1);
    expect(mWrapper.find(StatText).length).toBe(1);
  });

  // Snapshot
  it("Stat Section Show Snapshot", () => {
    expect(toJson(sWrapper)).toMatchSnapshot();
  });
});

describe("Stat Sector hide", () => {
  const { sWrapper, mWrapper, props } = setupStatHide();

  it("get child component MainSection's length", () => {
    expect(sWrapper.find(Team).length).toBe(0);
    expect(sWrapper.find(TeamText).length).toBe(0);
    expect(sWrapper.find(Stat).length).toBe(0);
    expect(sWrapper.find(StatText).length).toBe(0);
    expect(mWrapper.find(Team).length).toBe(0);
    expect(mWrapper.find(TeamText).length).toBe(0);
    expect(mWrapper.find(Stat).length).toBe(0);
    expect(mWrapper.find(StatText).length).toBe(0);
  });

  // Snapshot
  it("Stat Section Hide Snapshot", () => {
    expect(toJson(sWrapper)).toMatchSnapshot();
  });
});
