(() => {
 const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
 const t={
 de:{
 navHome:"Start",navRoutine:"Routine",navMoments:"Momente",navMore:"Mehr",navCare:"Pflege",navKnowledge:"Wissen",navCage:"Gehege",navTemp:"Temperatur",
deepTitle:"Wissen im Detail",deepHousingTitle:"Gehege richtig einrichten",deepHousingText:"Plane eine große, gut belüftete Grundfläche mit stabilen, rutschfesten Ebenen, sicheren Rampen und mehreren Verstecken. Nutze unbehandeltes, geeignetes Holz und sichere Befestigungen. Vermeide Gitterböden, scharfkantige Teile, enge Spalten und große Fallhöhen. Das Gehege darf nicht in direkter Sonne oder neben Heizkörpern stehen.",deepDietTitle:"Futterwechsel und tägliche Fütterung",deepDietText:"Heu ist die Basis und sollte sauber, trocken und jederzeit erreichbar sein. Futterumstellungen langsam durchführen und neue Pflanzen oder Zweige nur nach Prüfung auf Eignung und Schadstofffreiheit anbieten. Wasser täglich wechseln und Napf oder Flasche reinigen. Leckerlis sind kein Ersatz für Raufutter; vermeide abrupte Ernährungsänderungen.",deepHeatTitle:"Hitze vermeiden",deepHeatText:"Miss die Temperatur auf Höhe des Tieres und prüfe auch am Nachmittag, wenn sich Räume aufheizen. Schattiere Fenster, nutze sichere Luftzirkulation und kühle den Raum frühzeitig. Kühlplatten müssen sicher und nicht eiskalt sein; das Tier muss ausweichen können. Keine nassen Handtücher über das Tier legen und keine direkte kalte Luft auf den Käfig richten.",deepVetTitle:"Tierarzt und Vorsorge",deepVetText:"Suche vor einem Notfall eine Praxis mit Erfahrung bei exotischen Heimtieren. Beobachte Gewicht möglichst regelmäßig unter ähnlichen Bedingungen und notiere Appetit, Kotmenge, Verhalten und Auffälligkeiten. Bei Fressstopp, deutlich weniger Kot, Atemnot, Verletzung, aufgeblähtem Bauch oder neurologischen Auffälligkeiten nicht abwarten.",deepBondTitle:"Vertrauen aufbauen",deepBondText:"Lass das Tier in seinem Tempo näherkommen. Setze dich ruhig in die Nähe, sprich leise und biete die Hand zum Beschnuppern an. Vermeide Jagen, Festhalten und Hochheben ohne Notwendigkeit. Bei notwendiger Handhabung Körper und Hinterbeine gut stützen. Kinder sollten nur unter direkter Aufsicht Kontakt haben.",
 coatEyebrow:"MEIN FLAUSCH-FREUND",coatTitle:"Welche Farbe hat dein Chinchilla?",coatStandard:"Standardgrau",coatWhite:"Weiß / Wilson",coatBeige:"Beige",coatBlack:"Black Velvet",coatViolet:"Violett",coatSapphire:"Saphir",coatEbony:"Ebony",coatPinkwhite:"Pink White",coatNote:"Die Zeichnung ist eine stilisierte Animation, keine exakte Darstellung jeder Fellvariante.",
 moreEyebrow:"DEIN ÜBERBLICK",moreTitle:"Weitere Bereiche ✦",moreSub:"Alle Werkzeuge und Inhalte an einem Ort.",moreCare:"Pflege & Alltag",moreCareDesc:"Routine, Fellpflege und Sicherheit",moreKnowledge:"Wissensbibliothek",moreKnowledgeDesc:"Ernährung, Gesundheit, Verhalten",moreCage:"Gehege-Rechner",moreCageDesc:"Fläche und Höhe berechnen",moreTemp:"Temperatur-Check",moreTempDesc:"Raumtemperatur und Warnstufen",moreMoments:"Flausch-Momente",moreMomentsDesc:"Kleine Animationen und Wohlfühlzeit",moreSettings:"Profil & Einstellungen",moreSettingsDesc:"Profil, Darstellung und Abmeldung",
 homeTitle:"Hallo, Flausch-Freund!",homeSubtitle:"Dein täglicher Check für glückliche Chinchillas",routineTitle:"Deine tägliche Routine",momentsTitle:"Kleine Flausch-Momente",careTitle:"Pflege und Wohlbefinden",profileTitle:"Mehr und Einstellungen",
 home:"Start",routine:"Routine",moments:"Momente",care:"Pflege",profile:"Mehr",
 },
 en:{
 navHome:"Home",navRoutine:"Routine",navMoments:"Moments",navMore:"More",navCare:"Care",navKnowledge:"Guide",navCage:"Enclosure",navTemp:"Temperature",
deepTitle:"In-depth care guide",deepHousingTitle:"Setting up a safe enclosure",deepHousingText:"Plan a generous, well-ventilated floor area with stable non-slip platforms, safe ramps and several hideouts. Use suitable untreated wood and secure fittings. Avoid wire floors, sharp edges, narrow gaps and dangerous falls. Keep the enclosure out of direct sun and away from radiators.",deepDietTitle:"Daily feeding and food changes",deepDietText:"Hay is the foundation and should be clean, dry and available at all times. Introduce diet changes gradually. Offer new plants or branches only after checking suitability and contamination risk. Refresh water daily and clean bowls or bottles. Treats do not replace fibre; avoid sudden diet changes.",deepHeatTitle:"Preventing heat stress",deepHeatText:"Measure temperature at the animal's level and check again in the afternoon when rooms may heat up. Shade windows, provide safe air circulation and cool the room early. Cooling tiles must be safe, not ice-cold, and the animal must be able to move away. Do not cover the animal with wet towels or direct cold air at the cage.",deepVetTitle:"Veterinary care and prevention",deepVetText:"Before an emergency, find a veterinarian experienced with exotic small pets. Track weight regularly under similar conditions and note appetite, droppings, behaviour and changes. Do not wait if the animal stops eating, produces much less stool, has breathing difficulty, an injury, a swollen belly or neurological signs.",deepBondTitle:"Building trust",deepBondText:"Let the animal approach at its own pace. Sit quietly nearby, speak softly and offer a hand to sniff. Avoid chasing, restraining or lifting unless necessary. When handling is needed, support the body and hind legs. Children should interact only under direct supervision.",
 coatEyebrow:"MY FUZZY FRIEND",coatTitle:"What colour is your chinchilla?",coatStandard:"Standard grey",coatWhite:"White / Wilson",coatBeige:"Beige",coatBlack:"Black Velvet",coatViolet:"Violet",coatSapphire:"Sapphire",coatEbony:"Ebony",coatPinkwhite:"Pink White",coatNote:"This is a stylised animation, not an exact depiction of every coat variety.",
 moreEyebrow:"YOUR OVERVIEW",moreTitle:"More sections ✦",moreSub:"All tools and information in one place.",moreCare:"Care & daily life",moreCareDesc:"Routine, grooming and safety",moreKnowledge:"Knowledge library",moreKnowledgeDesc:"Diet, health and behaviour",moreCage:"Enclosure calculator",moreCageDesc:"Calculate floor area and height",moreTemp:"Temperature check",moreTempDesc:"Room temperature and warning levels",moreMoments:"Fuzzy moments",moreMomentsDesc:"Little animations and relaxing time",moreSettings:"Profile & settings",moreSettingsDesc:"Profile, appearance and sign out",
 homeTitle:"Hello, fuzzy friend!",homeSubtitle:"Your daily check-in for happy chinchillas",routineTitle:"Your daily routine",momentsTitle:"Little fuzzy moments",careTitle:"Care and wellbeing",profileTitle:"More and settings",
 home:"Home",routine:"Routine",moments:"Moments",care:"Care",profile:"More",
 },
 zh:{
 navHome:"首页",navRoutine:"日常",navMoments:"暖心时刻",navMore:"更多",navCare:"照护",navKnowledge:"知识",navCage:"笼舍",navTemp:"温度",
deepTitle:"深入照护指南",deepHousingTitle:"打造安全的笼舍",deepHousingText:"规划宽敞、通风良好的底面积，设置稳固防滑的平台、安全坡道和多个躲藏处。使用合适的未处理木材并牢固固定。避免铁丝地板、锋利边缘、狭窄缝隙和高处坠落风险。笼舍应远离阳光直射和暖气。",deepDietTitle:"日常喂养与换粮",deepDietText:"干草是饮食基础，应保持清洁、干燥并随时可取。改变饮食应循序渐进。新植物或树枝须先确认适用且没有污染。每天更换饮水并清洁水碗或水瓶。零食不能替代粗纤维食物，避免突然改变饮食。",deepHeatTitle:"预防热应激",deepHeatText:"在龙猫所在高度测量温度，并在下午再次检查，因为室内可能持续升温。遮挡阳光，保持安全空气流通并提前降低室温。降温板必须安全且不能过冰，龙猫应能自行离开。不要用湿毛巾包住龙猫，也不要让冷风直接吹向笼舍。",deepVetTitle:"兽医与日常预防",deepVetText:"提前寻找有异宠经验的兽医。尽量在相似条件下定期记录体重，并留意食欲、粪便、行为变化。若停止进食、粪便明显减少、呼吸困难、受伤、腹部膨胀或出现神经症状，不要拖延就医。",deepBondTitle:"建立信任",deepBondText:"让龙猫按照自己的节奏靠近。安静地坐在旁边，轻声说话，让它主动闻手。避免追赶、强行抓握或不必要地抱起。必须抱起时，要托住身体和后腿。儿童接触时必须有成人直接看护。",
 coatEyebrow:"我的毛球朋友",coatTitle:"你的龙猫是什么颜色？",coatStandard:"标准灰",coatWhite:"白色 / 威尔逊白",coatBeige:"米色",coatBlack:"黑丝绒",coatViolet:"紫灰",coatSapphire:"蓝灰",coatEbony:"纯黑",coatPinkwhite:"粉白",coatNote:"这是风格化动画，并非对每一种毛色的精确还原。",
 moreEyebrow:"功能总览",moreTitle:"更多功能 ✦",moreSub:"在一个地方查看所有工具和内容。",moreCare:"日常照护",moreCareDesc:"日常任务、梳理与安全",moreKnowledge:"知识库",moreKnowledgeDesc:"饮食、健康与行为",moreCage:"笼舍计算器",moreCageDesc:"计算底面积和高度",moreTemp:"温度检查",moreTempDesc:"室温与风险提示",moreMoments:"暖心时刻",moreMomentsDesc:"可爱的动画与放松时光",moreSettings:"个人资料与设置",moreSettingsDesc:"资料、显示和退出登录",
 homeTitle:"你好，毛球朋友！",homeSubtitle:"每天检查，让龙猫健康快乐",routineTitle:"每日照护任务",momentsTitle:"暖心毛球时刻",careTitle:"照护与健康",profileTitle:"更多与设置",
 home:"首页",routine:"日常",moments:"时刻",care:"照护",profile:"更多",
 }
 };
 let lang=localStorage.getItem("cc-language")||"de";
 const originalText = new Map();
 function applyLang(){
   const d=t[lang]||t.de;
   document.documentElement.lang=lang;
   $$("[data-i18n]").forEach(el=>{const k=el.dataset.i18n;if(d[k])el.textContent=d[k]});
   ["languageSelect","mainLanguageSelect","moreLanguageSelect"].forEach(id=>{const el=$("#"+id);if(el)el.value=lang});
   const value=$("#roomTempValue");if(value&&$("#roomTemp"))value.textContent=Number($("#roomTemp").value).toLocaleString(lang==="zh"?"zh-CN":lang==="en"?"en-GB":"de-DE")+" °C";
   const title=$("#animatedChin");if(title)title.setAttribute("aria-label",({de:"Animiertes Chinchilla",en:"Animated chinchilla",zh:"动画龙猫"})[lang]);
   // Translate static section headings and common buttons not yet tagged.
   const map={
    de:{"Start":"Start","Routine":"Routine","Momente":"Momente","Pflege":"Pflege","Mehr":"Mehr"},
    en:{"Start":"Home","Routine":"Routine","Momente":"Moments","Pflege":"Care","Mehr":"More"},
    zh:{"Start":"首页","Routine":"日常","Momente":"时刻","Pflege":"照护","Mehr":"更多"}
   };
   $$("[data-tab]").forEach(el=>{const small=el.querySelector("small");if(small&&!small.dataset.i18n){const key=small.textContent;if(map[lang][key])small.textContent=map[lang][key]}});
 }
 function setLang(v){if(!["de","en","zh"].includes(v))return;lang=v;localStorage.setItem("cc-language",lang);if(typeof window.setChinchiLanguage==="function")window.setChinchiLanguage(v);applyLang()}
 ["languageSelect","mainLanguageSelect","moreLanguageSelect"].forEach(id=>{const el=$("#"+id);if(el)el.addEventListener("change",()=>setLang(el.value))});
 // The bottom bar contains only four top-level tabs; secondary pages live in More.
 function showScreen(name){
  const target=$("#screen-"+name);if(!target)return;
  $$(".screen").forEach(s=>s.classList.toggle("active",s===target));
  $$(".nav-item").forEach(n=>n.classList.toggle("active",n.dataset.tab===name || (["care","profile","knowledge","cage","temperature"].includes(name) && n.dataset.tab==="more")));
  window.scrollTo({top:0,behavior:"smooth"});
  try{history.replaceState(null,"","#"+name)}catch{}
 }
 $$("[data-open-screen]").forEach(btn=>btn.addEventListener("click",()=>showScreen(btn.dataset.openScreen)));
 // Ensure More tab opens the hub, and home-language stays accessible on the main page.
 $$("[data-tab]").forEach(btn=>btn.addEventListener("click",()=>showScreen(btn.dataset.tab)));
 // Select animated coat morph
 $$(".coat-option").forEach(btn=>btn.addEventListener("click",()=>{
  const coat=btn.dataset.coat;$("#animatedChin").dataset.coat=coat;
  $$(".coat-option").forEach(b=>b.classList.toggle("selected",b===btn));
  const pet=$("#animatedChin");pet.animate([{transform:"scale(.94) rotate(-3deg)"},{transform:"scale(1.04) rotate(3deg)"},{transform:"scale(1) rotate(0)"}],{duration:420,easing:"ease-out"});
 }));
 applyLang();
})();
