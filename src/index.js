function updateTime() {
  //London//
  let londoncityElement = document.querySelector("#london");
  let londoncityDateElement = londoncityElement.querySelector(".date");
  let londoncityTimeElement = londoncityElement.querySelector(".time");

  londoncityDateElement.innerHTML = moment
    .tz("Europe/London")
    .format("MMMM Do YYYY");
  londoncityTimeElement.innerHTML = `${moment
    .tz("Europe/London")
    .format("hh:mm:ss")} <small>${moment().format("A")}</small>`;

  //Paris//
  let pariscityElement = document.querySelector("#paris");
  let pariscityDateElement = pariscityElement.querySelector(".date");
  let pariscityTimeElement = pariscityElement.querySelector(".time");

  pariscityDateElement.innerHTML = moment
    .tz("Europe/Paris")
    .format("MMMM Do YYYY");
  pariscityTimeElement.innerHTML = `${moment
    .tz("Europe/Paris")
    .format("hh:mm:ss")} <small>${moment().format("A")}</small>`;

  //New York//
  let newyorkcityElement = document.querySelector("#newyork");
  let newyorkcityDateElement = newyorkcityElement.querySelector(".date");
  let newyorkcityTimeElement = newyorkcityElement.querySelector(".time");

  newyorkcityDateElement.innerHTML = moment
    .tz("America/New_York")
    .format("MMMM Do YYYY");
  newyorkcityTimeElement.innerHTML = `${moment
    .tz("America/New_York")
    .format("hh:mm:ss")} <small>${moment().format("A")}</small>`;

  //mumbai//
  let mumbaicityElement = document.querySelector("#mumbai");
  let mumbaicityDateElement = mumbaicityElement.querySelector(".date");
  let mumbaicityTimeElement = mumbaicityElement.querySelector(".time");

  mumbaicityDateElement.innerHTML = moment
    .tz("Asia/Calcutta")
    .format("MMMM Do YYYY");
  mumbaicityTimeElement.innerHTML = `${moment
    .tz("Asia/Calcutta")
    .format("hh:mm:ss")} <small>${moment().format("A")}</small>`;
}

updateTime();
setInterval(updateTime, 1000);
