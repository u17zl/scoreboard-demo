import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import ScoreBoard from "../ScoreBoard";
import { MainSection } from "../components";
import Adapter from "enzyme-adapter-react-16";
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

const setupMainShow = () => {
  const props = {
    show: true,
    statShow: false,
    home: homeInfoData,
    away: awayInfoData,
    stat: statData,
    score: scoreData,
    delay: 0
  };
  const sWrapper = shallow(<MainSection {...props} />);
  const mWrapper = mount(<MainSection {...props} />);
  return {
    props,
    sWrapper,
    mWrapper
  };
};

const setupMainHide = () => {
  const props = {
    show: false,
    statShow: false,
    home: homeInfoData,
    away: awayInfoData,
    stat: statData,
    score: scoreData,
    delay: 0
  };
  const sWrapper = shallow(<MainSection {...props} />);
  const mWrapper = mount(<MainSection {...props} />);
  return {
    props,
    sWrapper,
    mWrapper
  };
};

const setupMainShowToHide = () => {
  const props = {
    show: true,
    statShow: true,
    home: homeInfoData,
    away: awayInfoData,
    stat: statData,
    score: scoreData,
    delay: 0
  };
  const sWrapper = shallow(<MainSection {...props} />);
  const mWrapper = mount(<MainSection {...props} />);
  return {
    props,
    sWrapper,
    mWrapper
  };
};

describe("Main Sector show", () => {
  const { sWrapper, mWrapper, props } = setupMainShow();

  it("get child component MainSectionShow's length", () => {
    expect(sWrapper.find(Home).length).toBe(1);
    expect(sWrapper.find(HomeText).length).toBe(1);
    expect(sWrapper.find(HomeBorder).length).toBe(1);
    expect(sWrapper.find(Score).length).toBe(1);
    expect(sWrapper.find(ScoreText).length).toBe(1);
    expect(sWrapper.find(Away).length).toBe(1);
    expect(sWrapper.find(AwayBorder).length).toBe(1);
    expect(sWrapper.find(AwayText).length).toBe(1);
    expect(sWrapper.find(Time).length).toBe(1);
    expect(sWrapper.find(TimeText).length).toBe(1);

    expect(mWrapper.find(Home).length).toBe(1);
    expect(mWrapper.find(HomeText).length).toBe(1);
    expect(mWrapper.find(HomeBorder).length).toBe(1);
    expect(mWrapper.find(Score).length).toBe(1);
    expect(mWrapper.find(ScoreText).length).toBe(1);
    expect(mWrapper.find(Away).length).toBe(1);
    expect(mWrapper.find(AwayBorder).length).toBe(1);
    expect(mWrapper.find(AwayText).length).toBe(1);
    expect(mWrapper.find(Time).length).toBe(1);
    expect(mWrapper.find(TimeText).length).toBe(1);
  });

  // Snapshot
  it("Main Section Show Snapshot", () => {
    expect(toJson(sWrapper)).toMatchSnapshot();
  });
});

describe("Main Sector hide", () => {
  const { sWrapper, mWrapper, props } = setupMainHide();

  it("get child component MainSectionHide's length", () => {
    expect(sWrapper.find(Home).length).toBe(0);
    expect(sWrapper.find(HomeText).length).toBe(0);
    expect(sWrapper.find(HomeBorder).length).toBe(0);
    expect(sWrapper.find(Score).length).toBe(0);
    expect(sWrapper.find(ScoreText).length).toBe(0);
    expect(sWrapper.find(Away).length).toBe(0);
    expect(sWrapper.find(AwayBorder).length).toBe(0);
    expect(sWrapper.find(AwayText).length).toBe(0);
    expect(sWrapper.find(Time).length).toBe(0);
    expect(sWrapper.find(TimeText).length).toBe(0);

    expect(mWrapper.find(Home).length).toBe(0);
    expect(mWrapper.find(HomeText).length).toBe(0);
    expect(mWrapper.find(HomeBorder).length).toBe(0);
    expect(mWrapper.find(Score).length).toBe(0);
    expect(mWrapper.find(ScoreText).length).toBe(0);
    expect(mWrapper.find(Away).length).toBe(0);
    expect(mWrapper.find(AwayBorder).length).toBe(0);
    expect(mWrapper.find(AwayText).length).toBe(0);
    expect(mWrapper.find(Time).length).toBe(0);
    expect(mWrapper.find(TimeText).length).toBe(0);
  });

  // Snapshot
  it("Main Section Hide Snapshot", () => {
    expect(toJson(sWrapper)).toMatchSnapshot();
  });
});

describe("Main Sector show then hide", () => {
  const { sWrapper, mWrapper, props } = setupMainShowToHide();

  it("get child component MainSectionShowToHide's length", () => {
    expect(sWrapper.find(Home).length).toBe(1);
    expect(sWrapper.find(HomeText).length).toBe(1);
    expect(sWrapper.find(HomeBorder).length).toBe(1);
    expect(sWrapper.find(Score).length).toBe(1);
    expect(sWrapper.find(ScoreText).length).toBe(1);
    expect(sWrapper.find(Away).length).toBe(1);
    expect(sWrapper.find(AwayBorder).length).toBe(1);
    expect(sWrapper.find(AwayText).length).toBe(1);
    expect(sWrapper.find(Time).length).toBe(0);
    expect(sWrapper.find(TimeText).length).toBe(0);

    expect(mWrapper.find(Home).length).toBe(1);
    expect(mWrapper.find(HomeText).length).toBe(1);
    expect(mWrapper.find(HomeBorder).length).toBe(1);
    expect(mWrapper.find(Score).length).toBe(1);
    expect(mWrapper.find(ScoreText).length).toBe(1);
    expect(mWrapper.find(Away).length).toBe(1);
    expect(mWrapper.find(AwayBorder).length).toBe(1);
    expect(mWrapper.find(AwayText).length).toBe(1);
    expect(mWrapper.find(Time).length).toBe(0);
    expect(mWrapper.find(TimeText).length).toBe(0);
  });

  // Snapshot
  it("Main Section Show To Hide Snapshot", () => {
    expect(toJson(sWrapper)).toMatchSnapshot();
  });
});
