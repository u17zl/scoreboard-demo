import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import ScoreBoard from "../ScoreBoard";
import { MainSection, TeamStat } from "../components";
import Adapter from "enzyme-adapter-react-16";

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

const setupEmpty = () => {
  const props = {
    home: homeInfoData,
    away: awayInfoData,
    score: scoreData,
    stat: statData,
    animation: []
  };
  const sWrapper = shallow(<ScoreBoard {...props} />);
  const mWrapper = mount(<ScoreBoard {...props} />);
  return {
    props,
    sWrapper,
    mWrapper
  };
};

const setupMain = () => {
  const props = {
    home: homeInfoData,
    away: awayInfoData,
    score: scoreData,
    stat: statData,
    animation: animationMain
  };
  const sWrapper = shallow(<ScoreBoard {...props} />);
  const mWrapper = mount(<ScoreBoard {...props} />);
  return {
    props,
    sWrapper,
    mWrapper
  };
};

const setupStat = () => {
  const props = {
    home: homeInfoData,
    away: awayInfoData,
    score: scoreData,
    stat: statData,
    animation: animationStat
  };
  const sWrapper = shallow(<ScoreBoard {...props} />);
  const mWrapper = mount(<ScoreBoard {...props} />);
  return {
    props,
    sWrapper,
    mWrapper
  };
};

describe("Main Sector Props", () => {
  const { sWrapper, mWrapper, props } = setupMain();

  it("get child component MainSection's length", () => {
    expect(sWrapper.find(MainSection).length).toBe(1);
    expect(mWrapper.find(MainSection).length).toBe(1);
  });

  test("get board-grid class", () => {
    expect(sWrapper.find(".board-grid").exists());
    expect(mWrapper.find(".board-grid").exists());
  });

  // Snapshot
  it("Main Section Snapshot", () => {
    expect(toJson(sWrapper)).toMatchSnapshot();
  });
});

describe("Stat Sector Props", () => {
  const { sWrapper, mWrapper, props } = setupStat();

  it("get child component MainSection's length", () => {
    expect(sWrapper.find(TeamStat).length).toBe(1);
    expect(mWrapper.find(TeamStat).length).toBe(1);
  });

  test("get board-grid class", () => {
    expect(sWrapper.find(".board-grid").exists());
    expect(mWrapper.find(".board-grid").exists());
  });

  // Snapshot
  it("Stat Section Snapshot", () => {
    expect(toJson(sWrapper)).toMatchSnapshot();
  });
});

describe("Empty Props", () => {
  const { sWrapper, mWrapper, props } = setupEmpty();

  it("get child component MainSection's length", () => {
    expect(sWrapper.find(TeamStat).length).toBe(1);
    expect(mWrapper.find(TeamStat).length).toBe(1);
  });

  test("get board-grid class", () => {
    expect(sWrapper.find(".board-grid").exists());
    expect(mWrapper.find(".board-grid").exists());
  });

  // Snapshot
  it("Empty Section Snapshot", () => {
    expect(toJson(sWrapper)).toMatchSnapshot();
  });
});
