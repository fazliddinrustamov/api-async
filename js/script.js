let elForm = document.querySelector(".form-js");
let elInput = document.querySelector(".input-js");

let reusltBox = document.querySelector('.result-box-js');

let renderWeather = temp => {
  reusltBox.innerHTML = "";

  let elWeatherInfo = document.createElement("div");
    elWeatherInfo.classList.add("box");
    elWeatherInfo.innerHTML = `
      <p class="d-block m-0 mb-1">Temperature: ${temp.temperature}</p>
      <p class="d-block m-0 mb-1">Wind: ${temp.wind}</p>
      <p class="d-block m-0 mb-1">Description: ${temp.description}</p>`

    reusltBox.appendChild(elWeatherInfo);
}

const renderErrors = function (error) {
  let elWeatherInfo = document.createElement("div");
  elWeatherInfo.innerHTML = `
    <h5 class="mt-2 h1">${error}</h5>
  `

  reusltBox.appendChild(elWeatherInfo);
};


const showTemp = async city => {
  try {
    let response = await fetch(`https://goweather.herokuapp.com/weather/${city}`)

    let data = await response.json();
    console.log(data);

    renderWeather(data);
  } catch (err) {
    renderErrors(err);
  }
} 

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault()

  let elInputVal = elInput.value.trim().toLowerCase();

  showTemp(elInputVal);

  elInput.value = '';
})