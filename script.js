function updateTime() {
  let losAngElement = document.querySelector("#los-angeles");
  let losAngDate = losAngElement.querySelector(".date");
  let losAngTime = losAngElement.querySelector(".time");
  let losAngCurrentTime = moment().tz("America/Los_Angeles");

  losAngDate.innerHTML = losAngCurrentTime.format("Do MMM, YYYY");
  losAngTime.innerHTML = losAngCurrentTime.format(
    "HH:mm:ss [<small>]A[</small>]"
  );

  let singaporeElement = document.querySelector("#singapore");
  let singaporeDate = singaporeElement.querySelector(".date");
  let singaporeTime = singaporeElement.querySelector(".time");
  let singaporeCurrentTime = moment().tz("Asia/Singapore");

  singaporeDate.innerHTML = singaporeCurrentTime.format("Do MMM, YYYY");
  singaporeTime.innerHTML = singaporeCurrentTime.format(
    "HH:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
