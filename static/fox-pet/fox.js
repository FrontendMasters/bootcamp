const state = {
  clock: 1,
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
  determineNextState();
}

const writeToModal = text =>
  (document.querySelector(
    ".modal"
  ).innerHTML = `<div class="modal-inner">${text}</div>`);

const modFox = state =>
  (document.querySelector(".fox").className = `fox fox-${state}`);

const modScene = state =>
  (document.querySelector(".game").className = `game ${state}`);

const togglePoopBag = show =>
  document.querySelector(".poop-bag").classList.toggle("hidden", !show);

const getNextHungerTime = () => Math.floor(Math.random() + 6) + 3 + state.clock;
const getNextPoopTime = () => Math.floor(Math.random() + 6) + 3 + state.clock;
const getNextSleepTime = () =>
  Math.floor(Math.random() * 30) + 30 + state.clock;

function startGame() {
  writeToModal("");
  modFox("egg");
  modScene("day");
  state.enum = "HATCHING";
  setTimeout(hatch, 5000);
}

function hatch() {
  wake();
  startTick();
}

function feed() {
  stopTick();
  state.enum = "FEEDING";
  state.timeToNextHungry = getNextHungerTime();
  state.timeToHungerKill = 0;
  modFox("eating");
  setTimeout(celebrate, 11000);
}

function cleanUpPoop() {
  if (state.timeToPoopKill) {
    stopTick();
    state.timeToNextPoop = getNextPoopTime();
    state.timeToPoopKill = 0;
    togglePoopBag(true);
    celebrate();
    setTimeout(() => togglePoopBag(false), 4000);
  }
}

function die() {
  stopTick();
  state.enum = "DEAD";
  modScene("dead");
  modFox("dead");
  writeToModal("It died :( <br/> Press the middle button to start");
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
  state.enum = "IDLE";
  state.timeToWake = 0;
  state.timeToPoopKill = 0;
  state.timeToHungerKill = 0;
  state.timeToNextHungry = getNextHungerTime();
  state.timeToNextPoop = getNextPoopTime();
  state.timeToNextSleep = getNextSleepTime();
  modScene(WORLDS[state.world]);
  determineNextState();
}

function poop() {
  stopTick();
  state.enum = "POOPING";
  state.timeToNextPoop = 0;
  state.timeToPoopKill = getNextPoopTime();
  modFox("pooping");
  setTimeout(function() {
    startTick();
    state.enum = "POOPED";
  }, 5000);
}

function getHungry() {
  state.enum = "HUNGRY";
  state.timeToHungerKill = getNextHungerTime();
  state.timeToNextHungry = 0;
  modFox("hungry");
}

function celebrate() {
  state.enum = "CELEBRATING";
  modFox("celebrate");
  setTimeout(function() {
    determineNextState();
    startTick();
  }, 4000);
}

function determineNextState() {
  if (state.timeToHungerKill) {
    state.enum = "HUNGRY";
    modFox("hungry");
    state.enum = "HUNGRY";
  } else if (state.timeToPoopKill) {
    modFox("pooped");
    state.enum = "POOPED";
  } else if (WORLDS[state.world] === "rain") {
    state.enum = "IDLE";
    modFox("rain");
  } else {
    state.enum = "IDLE";
    modFox("idle");
  }
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
    // can't do actions while in these states
    if (
      ["POOPING", "SLEEP", "FEEDING", "CELEBRATING", "HATCHING"].includes(
        state.enum
      )
    ) {
      // do nothing
      return;
    }

    if (state.enum === "INIT" || state.enum === "DEAD") {
      startGame();
      return;
    }

    // execute the currently selected action
    switch (ICONS[state.icon]) {
      case "weather":
        changeWeather();
        break;
      case "poop":
        cleanUpPoop();
        break;
      case "fish":
        feed();
        break;
    }
  }
}

function stopTick() {
  console.log("stopTick", animationFrame);
  cancelAnimationFrame(animationFrame);
  animationFrame = null;
}

function startTick() {
  console.log("start tick", animationFrame);
  if (!animationFrame) {
    animationFrame = requestAnimationFrame(tick);
  }
}

let nextCheck = Date.now();
const CHECK_INTERVAL = 3000;
let animationFrame = null;
async function tick() {
  const now = Date.now();
  if (now > nextCheck) {
    console.log(state.clock, state);
    state.clock++;
    if (state.timeToNextHungry && state.timeToNextHungry < state.clock) {
      getHungry();
    } else if (state.timeToNextPoop && state.timeToNextPoop < state.clock) {
      poop();
    } else if (state.timeToHungerKill && state.timeToHungerKill < state.clock) {
      die();
    } else if (state.timeToPoopKill && state.timeToPoopKill < state.clock) {
      die();
    } else if (state.timeToNextSleep && state.timeToNextSleep < state.clock) {
      sleep();
    } else if (state.timeToWake && state.timeToWake < state.clock) {
      wake();
    }

    nextCheck = now + CHECK_INTERVAL;
  }
  if (animationFrame) {
    animationFrame = requestAnimationFrame(tick);
  }
}

async function init() {
  document.querySelector(".buttons").addEventListener("click", buttonClick);
}

init();
