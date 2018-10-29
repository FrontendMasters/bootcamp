const state = {
  world: 0,
  icon: 0,
  enum: "INIT",
  timeToNextPoop: 0,
  timeToNextHungry: 0,
  timeToNextSleep: 0,
  timeToPoopKill: 0,
  timeToHungerKill: 0
};

const ICONS = ["fish", "poop", "weather"];

const WORLDS = ["day", "rain"];

function changeWeather() {
  state.world = (1 + state.world) % WORLDS.length;
  modScene(WORLDS[state.world]);
}

const writeToModal = text =>
  (document.querySelector(".modal").innerHTML = `<div>${text}</div>`);

const modFox = state =>
  (document.querySelector(".fox").className = `fox fox-${state}`);

const modScene = state =>
  (document.querySelector(".game").className = `game ${state}`);

const getNextHungerTime = () =>
  Date.now() + Math.floor(Math.random() + 60000) + 30000;
const getNextPoopTime = () =>
  Date.now() + Math.floor(Math.random() + 60000) + 30000;
const getNextSleepTime = () =>
  Date.now() + Math.floor(Math.random() * 6000) + 3000;

function startGame() {
  writeToModal("");
  modFox("egg");
  state.enum = "HATCHING";
  setTimeout(hatch, 5000);
  state.timeToNextHungry = getNextHungerTime();
  state.timeToNextPoop = getNextPoopTime();
  state.timeToNextSleep = getNextSleepTime();
}

function hatch() {
  modFox("idle");
  state.enum = "IDLE";
  tick();
}

function feed() {
  state.enum = "FEEDING";
  state.timeToNextHungry = getNextHungerTime();
  state.timeToHungerKill = 0;
  modFox("eating");
  cancelAnimationFrame(animationFrame);
  setTimeout(celebrate, 11000);
}

function cleanUpPoop() {
  console.log("clean up");
}

function die() {
  console.log("die");
}

function sleep() {
  state.enum = "SLEEP";
  state.timeToNextHungry = 0;
  state.timeToNextPoop = 0;
  state.timeToNextSleep = 0;
  state.timeToPoopKill = 0;
  state.timeToHungerKill = 0;
  state.timeToWake = getNextSleepTime();
  modFox("sleep");
  modScene("night");
}

function wake() {
  console.log("wake");
}

function poop() {
  console.log("poop");
}

function getHungry() {
  state.enum = "HUNGRY";
  state.timeToHungerKill = 0;
  state.timeToNextHungry = getNextHungerTime();
  modFox("hungry");
}

function celebrate() {
  state.enum = "CELEBRATING";
  modFox("celebrate");
  setTimeout(function() {
    modFox("idle");
    state.enum = "IDLE";
    tick();
  }, 4000);
}

function buttonClick({ target }) {
  if (target.classList.contains("left-btn")) {
    document
      .querySelector(`.${ICONS[state.icon]}-icon`)
      .classList.remove("highlighted");
    state.icon = (2 + state.icon) % ICONS.length;
    document
      .querySelector(`.${ICONS[state.icon]}-icon`)
      .classList.add("highlighted");
  } else if (target.classList.contains("right-btn")) {
    document
      .querySelector(`.${ICONS[state.icon]}-icon`)
      .classList.remove("highlighted");
    state.icon = (1 + state.icon) % ICONS.length;
    document
      .querySelector(`.${ICONS[state.icon]}-icon`)
      .classList.add("highlighted");
  } else {
    // execute the currently selected action
    switch (ICONS[state.icon]) {
      case "weather":
        changeWeather();
        break;
      case "poop":
        cleanUpPoop();
        break;
      case "fish":
        if (state.enum === "INIT" || state.enum === "DEAD") {
          startGame();
        } else {
          feed();
        }
        break;
    }
  }
}

let nextCheck = Date.now();
const CHECK_INTERVAL = 1000;
let animationFrame;
async function tick() {
  const now = Date.now();
  if (now > nextCheck) {
    if (state.timeToNextHungry && state.timeToNextHungry < now) {
      getHungry();
    } else if (state.timeToNextPoop && state.timeToNextPoop < now) {
      poop();
    } else if (state.timeToHungerKill && state.timeToHungerKill < now) {
      die();
    } else if (state.timeToPoopKill && state.timeToPoopKill < now) {
      die();
    } else if (state.timeToNextSleep && state.timeToNextSleep < now) {
      sleep();
    } else if (state.timeToWake && state.timeToWake < now) {
      wake();
    }

    nextCheck = now + CHECK_INTERVAL;
  }
  animationFrame = requestAnimationFrame(tick);
}

async function init() {
  document.querySelector(".buttons").addEventListener("click", buttonClick);
}

init();
