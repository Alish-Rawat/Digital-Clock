// setInterval(() => {
//   a = new Date();
//   let date = a.toLocaleDateString();
//   let time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
//   document.getElementById("time").innerHTML =
//     time + "&nbsp" + "on" + "&nbsp" + date;
// }, 1000);

function ss() {
  a = new Date();
  date = a.toLocaleDateString();
  time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
  document.getElementById("time").innerText =
    time + "&nbsp" + "on" + "&nbsp" + date;
}
setInterval(ss, 1000);
9