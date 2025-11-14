function updateTime() {
  let losAngElement = document.querySelector("#los-angeles");
  if (losAngElement) {
    let losAngDate = losAngElement.querySelector(".date");
    let losAngTime = losAngElement.querySelector(".time");
    let losAngCurrentTime = moment().tz("America/Los_Angeles");

    losAngDate.innerHTML = losAngCurrentTime.format("Do MMM, YYYY");
    losAngTime.innerHTML = losAngCurrentTime.format(
      "HH:mm:ss [<small>]A[</small>]"
    );
  }

  let singaporeElement = document.querySelector("#singapore");
  if (singaporeElement) {
    let singaporeDate = singaporeElement.querySelector(".date");
    let singaporeTime = singaporeElement.querySelector(".time");
    let singaporeCurrentTime = moment().tz("Asia/Singapore");

    singaporeDate.innerHTML = singaporeCurrentTime.format("Do MMM, YYYY");
    singaporeTime.innerHTML = singaporeCurrentTime.format(
      "HH:mm:ss [<small>]A[</small>]"
    );
  }
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTZ = event.target.value;
  let cityName = cityTZ.split("/")[1];
  let cityTime = moment().tz(cityTZ);
  let citiesElement = document.querySelector("#all-cities");
  citiesElement.innerHTML = `
  <div class="cities">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("Do MMM, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "HH:mm:ss [<small>]A[</small]"
          )}</div>
        </div>`;
}

let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", updateCity);
