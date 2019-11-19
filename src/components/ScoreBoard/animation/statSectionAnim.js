import posed from "react-pose";

// stat total animation time team(400-1000) + stat(1000-1500)
export const Team = posed.div({
  enter: {
    width: "100%",
    opacity: 1,
    delay: ({ delay }) => delay + 400,
    transition: { duration: 600 }
  },
  exit: {
    opacity: 0,
    width: 40,
    delay: 600,
    transition: { duration: 400 }
  }
});
export const TeamText = posed.span({
  enter: {
    opacity: 1,
    delay: ({ delay }) => delay + 600,
    transition: { duration: 400 }
  },
  exit: {
    opacity: 0,
    delay: 500,
    transition: { duration: 400 }
  }
});

export const Stat = posed.div({
  enter: {
    width: "100%",
    opacity: 1,
    delay: ({ delay }) => delay + 1000,
    transition: { duration: 500 }
  },
  exit: {
    opacity: 0,
    width: 30,
    delay: 200,
    transition: { duration: 300 }
  }
});
export const StatText = posed.span({
  enter: {
    opacity: 1,
    delay: ({ delay }) => delay + 1200,
    transition: { duration: 300 }
  },
  exit: {
    opacity: 0,
    width: 30,
    transition: { duration: 300 }
  }
});
