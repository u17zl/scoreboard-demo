# Score Board

This is a test of recreating a score board during the football game live

## How to run

```sh
cd scoreboard-demo
npm install
npm start

//unit test
npm test
```

then you can access `127.0.0.1:3000` to see how it works

## Tech stacks

- React.js
- React.js Hooks
- React-pose (animation)
- Scss
- Jest/Enzyme (Unit Test)

## Comparison between animation libries

- `react-spring`: Doesn't support customized transition duration time, but the simplicity is great and it uses hooks to simpliy code as well
- `react-pose`: good interface of animations, easy to use, good docs
- `rc-tween-one`: good library with abundant resources, but have some learning costs
- `react-transition-groups`: bad docs, hard to get started
- `react-animations`: only 2K+ stars in github and last version was 2 years ago

## To Do

- [ ] Simultaneity of main sector components
- [ ] Team stat exiting period bug
- [ ] try other animation frameworks
- [ ] learn SVG/Canva advanced usage
