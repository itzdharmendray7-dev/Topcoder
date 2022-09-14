var currentDateTime = new Date();

// Date
var year = currentDateTime.getFullYear();
var month = currentDateTime.getMonth();
var day = currentDateTime.getDay();

// Time
var hour = currentDateTime.getHours();
var minute = currentDateTime.getMinutes();
var second = currentDateTime.getSeconds();

if (month < 10) {
  month = "0" + month;
}

if (day < 10) {
  day = "0" + day;
}

if (hour < 10) {
  hour = "0" + hour;
}

if (minute < 10) {
  minute = "0" + minute;
}

if (second < 10) {
  second = "0" + second;
}

var current_dateTime =
  year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second;

if (hour < 11) {
  current_dateTime += " PM";
} else {
  current_dateTime += " AM";
}

document.getElementById("dateTime").innerHTML = current_dateTime;
console.log(current_dateTime);
