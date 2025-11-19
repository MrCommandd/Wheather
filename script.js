const anim = $("weather-animation");
anim.innerHTML = ""; // очистим

if (code === 0) {
  const sun = document.createElement("div");
  sun.className = "sun";
  anim.appendChild(sun);
}
if (code >= 61 && code <= 65) { // дождь
  for (let i = 0; i < 50; i++) {
    const drop = document.createElement("div");
    drop.className = "raindrop";
    drop.style.left = Math.random() * window.innerWidth + "px";
    drop.style.animationDelay = Math.random() + "s";
    anim.appendChild(drop);
  }
}
if (code >= 71 && code <= 75) { // снег
  for (let i = 0; i < 40; i++) {
    const flake = document.createElement("div");
    flake.className = "snowflake";
    flake.textContent = "❄";
    flake.style.left = Math.random() * window.innerWidth + "px";
    flake.style.animationDelay = Math.random() * 5 + "s";
    anim.appendChild(flake);
  }
}