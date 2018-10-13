const main = document.getElementById("main");
const loader = document.getElementById("loader");
const breedSelect = document.getElementById("breed");

async function init() {
  // populate breed list
  const res = await fetch("https://dog.ceo/api/breeds/list/all");
  const resJson = await res.json();

  let breedOptions = "<option></option>";

  let breedList = Object.keys(resJson.message);

  for (let i = 0; i < breedList.length; i++) {
    breedOptions += `<option value=${breedList[i]}>${breedList[i]}</option>`;
  }

  breedSelect.innerHTML = breedOptions;

  // get first image
  const randomRes = await fetch("https://dog.ceo/api/breeds/image/random");
  const randomResJson = await randomRes.json();

  main.src = randomResJson.message;

  // add event listeners
  breedSelect.addEventListener("change", handleBreedChange);

  main.addEventListener("load", function() {
    main.classList.add("show");
    loader.classList.remove("show");
  });
}

async function handleBreedChange(event) {
  const breed = event.target.value;

  main.classList.remove("show");
  loader.classList.add("show");

  const res = await fetch(` https://dog.ceo/api/breed/${breed}/images/random`);
  const resJson = await res.json();

  main.src = resJson.message;
}

init();
