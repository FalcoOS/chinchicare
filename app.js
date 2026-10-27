(() => {
 const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
 const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
 const toast=$("#toast"); let toastTimer, breathTimer;
 let data={}; try{data=JSON.parse(localStorage.getItem("cc-mobile-v2")||"{}")}catch{}
 const day=new Date().toLocaleDateString("sv-SE");
 if(data.day!==day){data.day=day;data.tasks={}}
 data.tasks ||= {};
 const keys=["hay","water","home","hello"];
 function save(){try{localStorage.setItem("cc-mobile-v2",JSON.stringify(data))}catch{}}
 function notify(msg){toast.textContent=msg;toast.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove("show"),2300)}
 function particle(x,y,n=18,opts=["♡","✦","💗","✧","🌸"]){if(reduced)return;const layer=$("#particles");for(let i=0;i<n;i++){const el=document.createElement("span");el.className="particle";el.textContent=opts[Math.floor(Math.random()*opts.length)];el.style.setProperty("--x",`${x}px`);el.style.setProperty("--y",`${y}px`);el.style.setProperty("--dx",`${(Math.random()-.5)*200}px`);el.style.setProperty("--dy",`${-40-Math.random()*180}px`);el.style.setProperty("--rot",`${(Math.random()-.5)*150}deg`);el.style.setProperty("--size",`${12+Math.random()*16}px`);el.style.setProperty("--duration",`${.8+Math.random()*.8}s`);el.style.setProperty("--color",["#f18eb0","#b7a5f5","#85cdb0","#ffc49d"][i%4]);layer.appendChild(el);setTimeout(()=>el.remove(),1800)}}
 function center(el){const r=el.getBoundingClientRect();return{x:r.left+r.width/2,y:r.top+r.height/2}}
 function setScreen(name){const valid=["home","routine","moments","care","profile"].includes(name)?name:"home";$$(".screen").forEach(s=>s.classList.toggle("active",s.dataset.screen===valid));$$(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.tab===valid));window.scrollTo({top:0,behavior:reduced?"auto":"smooth"});try{history.replaceState(null,"",`#${valid}`)}catch{}}
 $$("[data-tab]").forEach(b=>b.addEventListener("click",()=>setScreen(b.dataset.tab)));
 $$("[data-go]").forEach(b=>b.addEventListener("click",()=>setScreen(b.dataset.go)));
 function update(celebrate=false){let count=0;$$("[data-task]").forEach(input=>{const done=!!data.tasks[input.dataset.task];input.checked=done;input.closest(".routine-item").classList.toggle("done",done);if(done)count++});const pct=Math.round(count/keys.length*100);$("#progressFill").style.width=pct+"%";$("#progressPercent").textContent=pct+"%";$("#progressCount").textContent=`${count} von ${keys.length}`;$("#streak").textContent=`${count}/${keys.length}`;$("#summaryDone").textContent=`${count} erledigt`;$("#progressTitle").textContent=count===keys.length?"Alles geschafft! 🎉":count?"Du machst das toll!":"Du schaffst das!";$("#progressSubtitle").textContent=count===keys.length?"Mochi schickt dir ein Herz.":"Ganz in deinem Tempo.";save();if(celebrate){notify(count===keys.length?"Flausch-Superstar! Alles erledigt! 🎉":"Ein kleiner Schritt, ganz viel Liebe! 💗");const p=center($("#progressPercent"));particle(p.x,p.y,25,["💖","✨","🐾","🌸","💗"])}}
 $$("[data-task]").forEach(input=>input.addEventListener("change",()=>{data.tasks[input.dataset.task]=input.checked;update(input.checked);if(input.checked){const p=center(input.closest(".routine-item").querySelector(".checkmark"));particle(p.x,p.y,8,["♡","✦","💗"])} }));
 $("#resetRoutine").addEventListener("click",reset);$("#clearData").addEventListener("click",reset);
 function reset(){if(!confirm("Alle Haken für heute entfernen?"))return;data.tasks={};update();notify("Alles zurückgesetzt. Neuer kleiner Anfang! 🌱")}
 function toggleTheme(){document.body.classList.toggle("dark");const dark=document.body.classList.contains("dark");$("#themeButton").textContent=dark?"☾":"☼";$("#themeStatus").textContent=dark?"An":"Aus";try{localStorage.setItem("cc-dark",dark?"1":"0")}catch{}}
 $("#themeButton").addEventListener("click",()=>{toggleTheme();notify(document.body.classList.contains("dark")?"Kuschelige Abendstimmung 🌙":"Zuckerwatte-Licht ☀️")});
 $("#settingTheme").addEventListener("click",()=>{toggleTheme();notify("Farbstimmung angepasst ✨")});
 try{if(localStorage.getItem("cc-dark")==="1"){document.body.classList.add("dark");$("#themeButton").textContent="☾";$("#themeStatus").textContent="An"}}catch{}
 let motionOn=true;try{motionOn=localStorage.getItem("cc-motion")!=="0"}catch{}
 function setMotion(on){motionOn=on;$("#motionStatus").textContent=on?"An":"Aus";document.body.classList.toggle("motion-off",!on);try{localStorage.setItem("cc-motion",on?"1":"0")}catch{}}
 $("#settingMotion").addEventListener("click",()=>{setMotion(!motionOn);notify(motionOn?"Animationen aktiviert ✨":"Animationen reduziert")});
 const quotes=["Du musst nicht alles auf einmal schaffen. Kleine Schritte zählen. ♡","Fürsorge ist Liebe in kleinen Handlungen. 🌷","Du darfst heute auch freundlich zu dir selbst sein. ☁️","Jeder ruhige Moment schafft Vertrauen. 🐾","Perfekt muss es nicht sein. Liebevoll ist schon viel. 💗"];
 $("#newQuote").addEventListener("click",()=>{let q=quotes[Math.floor(Math.random()*quotes.length)];$("#dailyQuote").textContent=q;const p=center($("#newQuote"));particle(p.x,p.y,9,["✦","♡","🌸"])});
 $("#heartRain").addEventListener("click",e=>{const r=e.currentTarget.getBoundingClientRect();particle(r.left+r.width*.5,r.top+r.height*.5,42,["💗","💖","💕","♡","💞"]);notify("Eine ganze Wolke voller Liebe für dich! 💕")});
 function boop(){const pet=$("#pet");pet.classList.remove("booped");void pet.offsetWidth;pet.classList.add("booped");const p=center($("#petStage"));particle(p.x,p.y,18,["🐾","💗","✦","♡"]);notify("Boop! Mochi sagt: Piep! 🐭");setTimeout(()=>pet.classList.remove("booped"),750)}
 $("#boop").addEventListener("click",boop);$("#petStage").addEventListener("click",boop);$("#petStage").addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();boop()}});
 $("#surprise").addEventListener("click",e=>{const r=e.currentTarget.getBoundingClientRect();particle(r.left+r.width*.5,r.top+r.height*.5,30,["🎀","💖","🌸","✨","🐾"]);notify(["Du bist offiziell flausch-bezaubernd! 🎀","Mochi schickt dir eine Umarmung. 💗","Heute wird ein bisschen zauberhafter. ✨"][Math.floor(Math.random()*3)])});
 $("#breathe").addEventListener("click",()=>{const orb=$("#breathOrb");if(orb.classList.contains("breathing")){orb.classList.remove("breathing");clearTimeout(breathTimer);$("#breathe").innerHTML="Kleine Pause starten <span>→</span>";notify("Gut gemacht. Nimm dir Zeit. 🤍")}else{orb.classList.add("breathing");$("#breathe").textContent="Pause beenden";notify("Atme langsam ein und wieder aus. 🌿");breathTimer=setTimeout(()=>{orb.classList.remove("breathing");$("#breathe").innerHTML="Kleine Pause starten <span>→</span>";notify("Gut gemacht. Du hast dir eine Pause gegönnt. 🤍")},24000)}});
 const now=new Date();const weekday=new Intl.DateTimeFormat("de-DE",{weekday:"long"}).format(now).toLocaleUpperCase("de-DE");$(".hello-row .eyebrow").textContent=`${weekday}, DEIN FLAUSCH-MOMENT`;
 setScreen(location.hash.replace("#","")||"home");update();
 if(!reduced)setTimeout(()=>{const p=center($("#petStage"));particle(p.x,p.y-55,8,["✦","✧","♡"])},850);
})();
