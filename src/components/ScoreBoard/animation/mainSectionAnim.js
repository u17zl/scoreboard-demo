import posed from "react-pose";

export const Home = posed.div({
  enter: {
    width: "100%",
    opacity: 1,
    delay: ({ delay }) => delay + 100,
    transition: { duration: 700 }
  },
  exit: {
    opacity: 0,
    width: 30,
    delay: 500,
    transition: { duration: 600 }
  }
});

export const Score = posed.div({
  enter: {
    width: "100%",
    opacity: 1,
    delay: ({ delay }) => delay + 0,
    transition: { duration: 300 }
  },
  exit: {
    width: 30,
    opacity: 0,
    delay: 500,
    ease: "e",
    transition: { duration: 600 }
  }
});
export const Away = posed.div({
  enter: {
    width: "100%",
    opacity: 1,
    delay: ({ delay }) => delay + 100,
    transition: { duration: 700 }
  },
  exit: {
    opacity: 0,
    width: 30,
    delay: 500,
    transition: { duration: 600 }
  }
});
export const Time = posed.div({
  enter: {
    width: "50%",
    opacity: 1,
    delay: ({ delay }) => delay + 900,
    transition: { duration: 500 }
  },
  exit: {
    opacity: 0,
    width: 30,
    transition: { duration: 600 }
  }
});

export const TimeText = posed.span({
  enter: {
    opacity: 1,
    delay: ({ delay }) => delay + 1050,
    transition: { duration: 350 }
  },
  exit: {
    opacity: 0,
    width: 30,
    transition: { duration: 600 }
  }
});

export const ScoreText = posed.div({
  enter: {
    opacity: 1,
    delay: ({ delay }) => delay + 100,
    transition: { duration: 500 },
    fontSize: 24
  },
  exit: {
    opacity: 0,
    transition: { duration: 600 }
  }
});

export const HomeText = posed.span({
  enter: {
    opacity: 1,
    delay: ({ delay }) => delay + 300,
    transition: { duration: 200 },
    fontSize: 24
  },
  exit: {
    opacity: 0,
    transition: { duration: 600 }
  }
});

export const AwayText = posed.div({
  enter: {
    opacity: 1,
    delay: ({ delay }) => delay + 300,
    transition: { duration: 200 },
    fontSize: 24
  },
  exit: {
    opacity: 0,
    transition: { duration: 600 }
  }
});
export const HomeBorder = posed.span({
  enter: {
    opacity: 0.9,
    delay: ({ delay }) => delay + 200,
    width: 7,
    backgroundColor: ({ color }) => color,
    transition: { duration: 300 }
  },
  exit: {
    opacity: 0,
    transition: { duration: 600 }
  }
});

export const AwayBorder = posed.span({
  enter: {
    opacity: 0.9,
    delay: ({ delay }) => delay + 200,
    width: 7,
    backgroundColor: ({ color }) => color,
    transition: { duration: 300 }
  },
  exit: {
    opacity: 0,
    transition: { duration: 600 }
  }
});
