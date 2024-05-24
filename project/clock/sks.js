/** @format */

const bdTime = document.getElementById("Bangladesh-clock");
const usTime = document.getElementById("Us-clock");
const ukTime = document.getElementById("Uk-clock");
const chinaTime = document.getElementById("China-clock");
const body = document.querySelector("body");

// Create options for toLocaleTimeString
let options = {
     hour: "numeric",
     minute: "numeric",
     second: "numeric",
};

setInterval(() => {
     body.style.fontFamily = "roboto";

     let date = new Date();

     // Set time for Bangladesh
     options.timeZone = "Asia/Dhaka";
     bdTime.innerHTML = date.toLocaleTimeString("en-US", options);
     bdTime.style.color = "black";

     // Set time for US (New York)
     options.timeZone = "America/New_York";
     usTime.innerHTML = date.toLocaleTimeString("en-US", options);
     usTime.style.color = "black";

     // Set time for UK (London)
     options.timeZone = "Europe/London";
     ukTime.innerHTML = date.toLocaleTimeString("en-US", options);
     ukTime.style.color = "black";

     // Set time for China (Shanghai)
     options.timeZone = "Asia/Shanghai";
     chinaTime.innerHTML = date.toLocaleTimeString("en-US", options);
     chinaTime.style.color = "black";
}, 1000);
