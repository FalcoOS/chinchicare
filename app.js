(() => {
  "use strict";
  const $ = (selector, root=document) => root.querySelector(selector);
  const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const dateKey = new Date().toLocaleDateString("sv-SE");
  const taskChecks = $$("[data-task]");
  const toast = $("#toast");
  let toastTimer;

  $("#todayDate").textContent = new Intl.DateTimeFormat("de-DE", {weekday:"short", day:"numeric", month:"long"}).format(new Date());

  function loadState() {
    try { return JSON.parse(localStorage.getItem("chinchicare-state") || "{}"); }
    catch { return {}; }
  }
  let state = loadState();
  if (state.date !== dateKey) state = {...state, date: dateKey, tasks: {}};
  state.tasks ||= {};

  function saveState() {
    try { localStorage.setItem("chinchicare-state", JSON.stringify(state)); } catch {}
  }
  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
  }
  function burst(x, y, amount=14, choices=["💗","♡","✦","✨","🌸"]) {
    if (reducedMotion) return;
    const layer = $("#sparkleLayer");
    for (let i=0; i<amount; i++) {
      const node = document.createElement("span");
      node.className = "particle";
      node.textContent = choices[Math.floor(Math.random()*choices.length)];
      node.style.setProperty("--x", `${x}px`);
      node.style.setProperty("--y", `${y}px`);
      node.style.setProperty("--dx", `${(Math.random()-.5)*220}px`);
      node.style.setProperty("--dy", `${-45-Math.random()*180}px`);
      node.style.setProperty("--rot", `${(Math.random()-.5)*140}deg`);
      node.style.setProperty("--size", `${12+Math.random()*17}px`);
      node.style.setProperty("--duration", `${.8+Math.random()*.9}s`);
      node.style.setProperty("--color", ["#f18eb0","#b7a5ff","#83cfb2","#ffc29f"][i%4]);
      layer.appendChild(node);
      setTimeout(()=>node.remove(), 1900);
    }
  }
  function centerOf(element) {
    const r = element.getBoundingClientRect();
    return {x:r.left+r.width/2, y:r.top+r.height/2};
  }
  function updateTasks(celebrate=false) {
    let count=0;
    taskChecks.forEach(input => {
      const done = !!state.tasks[input.dataset.task];
      input.checked = done;
      input.closest(".task-card").classList.toggle("done", done);
      if(done) count++;
    });
    const pct = Math.round(count/taskChecks.length*100);
    $("#progressFill").style.width = `${pct}%`;
    $("#progressNumber").textContent = `${pct}%`;
    $("#taskCount").textContent = `${count} von ${taskChecks.length} erledigt`;
    $("#progressText").textContent = count === taskChecks.length ? "Alles geschafft! Du bist ein Flausch-Superstar! 💖" : count ? "Jeder Haken ist ein kleines Herz." : "Du kannst ganz entspannt anfangen.";
    $("#streakCount").textContent = count === taskChecks.length ? "Flausch-Superstar!" : count ? `${count} kleine Erfolge heute` : "Dein erster Tag";
    saveState();
    if(celebrate) {
      const p = centerOf($("#progressNumber"));
      burst(p.x,p.y,24,["💖","✨","🐾","🌸","💗"]);
      showToast(count===taskChecks.length ? "Yay! Deine Routine ist geschafft! 🎉" : "Ein kleiner Schritt, ganz viel Liebe! 💗");
    }
  }
  taskChecks.forEach(input => input.addEventListener("change", () => {
    state.tasks[input.dataset.task] = input.checked;
    updateTasks(input.checked);
    if(input.checked) {
      const p = centerOf(input.closest(".task-card").querySelector(".task-check"));
      burst(p.x,p.y,8,["♡","✦","💗"]);
    }
  }));
  updateTasks();

  $("#themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("night");
    const night = document.body.classList.contains("night");
    $("#themeToggle").textContent = night ? "☀️" : "🌙";
    try { localStorage.setItem("chinchicare-night", night ? "1" : "0"); } catch {}
    showToast(night ? "Kuschelige Abendstimmung 🌙" : "Zurück ins Zuckerwatte-Licht ☀️");
    const p=centerOf($("#themeToggle")); burst(p.x,p.y,9,["✦","✨","♡"]);
  });
  try {
    if(localStorage.getItem("chinchicare-night")==="1") {
      document.body.classList.add("night"); $("#themeToggle").textContent="☀️";
    }
  } catch {}

  $("#heartButton").addEventListener("click", e => {
    const r=e.currentTarget.getBoundingClientRect();
    burst(r.left+r.width/2,r.top+r.height/2,34,["💗","💖","💕","♡","💞"]);
    showToast("Eine ganze Wolke voller Liebe für dich! 💕");
  });
  $("#boopButton").addEventListener("click", e => {
    const mascot=$("#mascot");
    mascot.classList.remove("booped"); void mascot.offsetWidth; mascot.classList.add("booped");
    const r=e.currentTarget.getBoundingClientRect();
    burst(r.left+r.width/2,r.top+r.height/2,18,["🐾","💗","✦","♡"]);
    showToast("Boop! Mochi sagt: Piep! 🐭");
    setTimeout(()=>mascot.classList.remove("booped"),700);
  });
  const quotes = [
    "Du musst nicht alles auf einmal schaffen. ♡",
    "Sanfte Schritte bringen dich auch ans Ziel. 🌷",
    "Du gibst kleinen Pfötchen ein liebevolles Zuhause. 🐾",
    "Heute darf es einfach gut genug sein. ☁️",
    "Ein bisschen Fürsorge kann einen großen Unterschied machen. 💗"
  ];
  $("#quoteButton").addEventListener("click", e => {
    let quote=quotes[Math.floor(Math.random()*quotes.length)];
    $("#quoteText").textContent=quote;
    const r=e.currentTarget.getBoundingClientRect();
    burst(r.left+r.width/2,r.top+r.height/2,12,["✦","🌸","♡"]);
  });
  $("#surpriseButton").addEventListener("click", e => {
    const r=e.currentTarget.getBoundingClientRect();
    burst(r.left+r.width/2,r.top+r.height/2,30,["🎀","💖","🌸","✨","🐾"]);
    showToast("Du bist offiziell Flausch-bezaubernd! 🎀");
  });
  $("#startButton").addEventListener("click", () => {
    setTimeout(() => {
      const target=$("#today");
      if(target) target.animate?.([{filter:"brightness(1)"},{filter:"brightness(1.06)"},{filter:"brightness(1)"}],{duration:650});
    }, 250);
  });
  const style=document.createElement("style");
  style.textContent=".chinchilla.booped{animation:boop-bounce .62s cubic-bezier(.2,.8,.2,1.4)!important}@keyframes boop-bounce{0%,100%{transform:translateY(0) scale(1)}35%{transform:translateY(-18px) scale(1.06) rotate(-5deg)}65%{transform:translateY(2px) scale(.96) rotate(4deg)}}";
  document.head.appendChild(style);

  // Sprinkle a few decorative glimmers on first load, without delaying interaction.
  if(!reducedMotion) setTimeout(() => {
    const hero=$(".mascot-scene");
    if(hero) { const r=hero.getBoundingClientRect(); burst(r.left+r.width*.75,r.top+r.height*.28,7,["✦","✧","♡"]); }
  }, 900);
})();
