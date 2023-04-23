var typed = new Typed("#typing", {
  strings: ["AGI", "Innovation", "Learning"],
  loop: true,
  typeSpeed: 80,
  backSpeed: 40,
});

var countDownDate = new Date("May 18, 2023 15:37:25").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  function span(el) {
    return `<span style='font-size: 6vw !important; background: transparent !important;'>${el} </span>`
  }

  document.getElementById("count").innerHTML =
    days + span("d") + hours + span("h") + minutes + span("m") + seconds + span("s");

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("count").innerHTML = "EXPIRED";
  }
}, 1000);

particlesJS.load("particles-js", "particlesjs-config.json", () => {
  console.log("Particles.js config loaded!");
});
