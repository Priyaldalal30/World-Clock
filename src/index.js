function updateTime() {
  //London//
  let londoncityElement = document.querySelector("#london");
  if (londoncityElement) {
    let londoncityDateElement = londoncityElement.querySelector(".date");
    let londoncityTimeElement = londoncityElement.querySelector(".time");

    londoncityDateElement.innerHTML = moment
      .tz("Europe/London")
      .format("MMMM Do YYYY");
    londoncityTimeElement.innerHTML = `${moment
      .tz("Europe/London")
      .format("h:mm:ss")} <small>${moment
      .tz("Europe/London")
      .format("A")}</small>`;
  }
  //Paris//
  let pariscityElement = document.querySelector("#paris");
  if (pariscityElement) {
    let pariscityDateElement = pariscityElement.querySelector(".date");
    let pariscityTimeElement = pariscityElement.querySelector(".time");

    pariscityDateElement.innerHTML = moment
      .tz("Europe/Paris")
      .format("MMMM Do YYYY");
    pariscityTimeElement.innerHTML = `${moment
      .tz("Europe/Paris")
      .format("h:mm:ss")} <small>${moment
      .tz("Europe/Paris")
      .format("A")}</small>`;
  }
  //New York//
  let newyorkcityElement = document.querySelector("#newyork");
  if (newyorkcityElement) {
    let newyorkcityDateElement = newyorkcityElement.querySelector(".date");
    let newyorkcityTimeElement = newyorkcityElement.querySelector(".time");

    newyorkcityDateElement.innerHTML = moment
      .tz("America/New_York")
      .format("MMMM Do YYYY");
    newyorkcityTimeElement.innerHTML = `${moment
      .tz("America/New_York")
      .format("h:mm:ss")} <small>${moment().format("A")}</small>`;
  }
  //mumbai//
  let mumbaicityElement = document.querySelector("#mumbai");
  if (mumbaicityElement) {
    let mumbaicityDateElement = mumbaicityElement.querySelector(".date");
    let mumbaicityTimeElement = mumbaicityElement.querySelector(".time");

    mumbaicityDateElement.innerHTML = moment
      .tz("Asia/Calcutta")
      .format("MMMM Do YYYY");
    mumbaicityTimeElement.innerHTML = `${moment
      .tz("Asia/Calcutta")
      .format("h:mm:ss")} <small>${moment
      .tz("Asia/Calcutta")
      .format("A")}</small>`;
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let selectedCityTimeZone = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${selectedCityTimeZone.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">${selectedCityTimeZone.format(
        "h:mm:ss"
      )} <small>${selectedCityTimeZone.format("A")}</small></div>
    </div>
    <a href="/" class"homepage">Homepage</a>
  `;
}
let selectcityElement = document.querySelector("#city");
selectcityElement.addEventListener("change", updateCity);

updateTime();
setInterval(updateTime, 100);
