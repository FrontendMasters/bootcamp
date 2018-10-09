const MIN_INTERVAL = 2000;
const MAX_INTERVAL = 20000;
const SAD_INTERVAL = 500;
const HUNGRY_INTERVAL = 2000;
const wormContainer = document.querySelector(".worm-container");
let score = 0;

const getInterval = () =>
  Date.now() + MIN_INTERVAL + Math.floor(Math.random() * MAX_INTERVAL);
const getSadInterval = () => Date.now() + SAD_INTERVAL;
const getKingStatus = () => Math.random() > 0.9;
const getHungryInterval = () => Date.now() + HUNGRY_INTERVAL;

const moles = [
  {
    status: "sad",
    next: getSadInterval(),
    king: true,
    node: document.getElementById("hole-0")
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: true,
    node: document.getElementById("hole-1")
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: true,
    node: document.getElementById("hole-2")
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: true,
    node: document.getElementById("hole-3")
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: true,
    node: document.getElementById("hole-4")
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: true,
    node: document.getElementById("hole-5")
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: true,
    node: document.getElementById("hole-6")
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: true,
    node: document.getElementById("hole-7")
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: true,
    node: document.getElementById("hole-8")
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: true,
    node: document.getElementById("hole-9")
  }
];

const getNextStatus = mole => {
  switch (mole.status) {
    case "sad":
    case "fed":
      mole.next = getSadInterval();
      if (mole.king) {
        mole.node.children[0].src = "./king-mole-leaving.png";
      } else {
        mole.node.children[0].src = "./mole-leaving.png";
      }
      mole.status = "leaving";
      break;
    case "leaving":
      mole.next = getInterval();
      mole.king = false;
      mole.node.children[0].classList.toggle("gone", true);
      mole.status = "gone";
      break;
    case "hungry":
      mole.node.children[0].classList.toggle("hungry", false);
      if (mole.king) {
        mole.node.children[0].src = "./king-mole-sad.png";
      } else {
        mole.node.children[0].src = "./mole-sad.png";
      }
      mole.status = "sad";
      mole.next = getSadInterval();
      break;
    case "gone":
      mole.status = "hungry";
      mole.king = getKingStatus();
      mole.next = getHungryInterval();
      mole.node.children[0].classList.toggle("hungry", true);
      mole.node.children[0].classList.toggle("gone", false);
      if (mole.king) {
        mole.node.children[0].src = "./king-mole-hungry.png";
      } else {
        mole.node.children[0].src = "./mole-hungry.png";
      }
      break;
  }
};

const feed = e => {
  if (e.target.tagName !== "IMG" || !e.target.classList.contains("hungry")) {
    return;
  }

  const mole = moles[+e.target.dataset.index];

  mole.status = "fed";
  mole.next = getSadInterval();
  mole.node.children[0].classList.toggle("hungry", false);
  if (mole.king) {
    mole.node.children[0].src = "./king-mole-fed.png";
    score += 20;
  } else {
    mole.node.children[0].src = "./mole-fed.png";
    score += 10;
  }

  if (score >= 100) {
    win();
    return;
  }

  wormContainer.style.width = `${score}%`;
};

const win = () => {
  document.querySelector(".bg").classList.toggle("hide", true);
  document.querySelector(".win").classList.toggle("show", true);
};

document.querySelector(".bg").addEventListener("click", feed);

const nextFrame = () => {
  const now = Date.now();
  for (let i = 0; i < moles.length; i++) {
    if (moles[i].next < now) {
      getNextStatus(moles[i]);
    }
  }
  requestAnimationFrame(nextFrame);
};

requestAnimationFrame(nextFrame);
