const tools=[
{n:"ChatGPT",c:"كتابة ومحادثة",i:"💬",d:"مساعد محادثة يكتب ويشرح ويلخص ويساعد في البرمجة والمذاكرة.",u:"https://chatgpt.com"},
{n:"Claude",c:"كتابة ومحادثة",i:"🧠",d:"مساعد قوي في الكتابة وتحليل الملفات الطويلة والبرمجة.",u:"https://claude.ai"},
{n:"Gemini",c:"كتابة ومحادثة",i:"✨",d:"مساعد جوجل، متكامل مع خدمات جوجل ويفهم الصور.",u:"https://gemini.google.com"},
{n:"Perplexity",c:"بحث",i:"🔎",d:"محرك بحث بالذكاء الاصطناعي بيجاوب ومعاه مصادر.",u:"https://www.perplexity.ai"},
{n:"Midjourney",c:"صور",i:"🎨",d:"توليد صور فنية عالية الجودة من وصف نصي.",u:"https://www.midjourney.com"},
{n:"DALL·E",c:"صور",i:"🖼️",d:"توليد وتعديل صور من خلال الوصف النصي.",u:"https://openai.com"},
{n:"Stable Diffusion",c:"صور",i:"🌄",d:"نموذج صور مفتوح المصدر ممكن تشغله على جهازك.",u:"https://stability.ai"},
{n:"Runway",c:"فيديو",i:"🎬",d:"توليد وتعديل فيديو بالذكاء الاصطناعي.",u:"https://runwayml.com"},
{n:"CapCut",c:"فيديو",i:"✂️",d:"مونتاج فيديو سهل بمميزات ذكاء اصطناعي كالترجمة التلقائية.",u:"https://www.capcut.com"},
{n:"ElevenLabs",c:"صوت",i:"🎙️",d:"تحويل نص لصوت طبيعي جدا بلغات كتير.",u:"https://elevenlabs.io"},
{n:"Suno",c:"صوت",i:"🎵",d:"تأليف أغاني كاملة من وصف بسيط.",u:"https://suno.com"},
{n:"GitHub Copilot",c:"برمجة",i:"👨‍💻",d:"مساعد برمجة بيكمل الكود جوه محرر الأكواد.",u:"https://github.com/features/copilot"},
{n:"Cursor",c:"برمجة",i:"⌨️",d:"محرر أكواد مبني حوالين الذكاء الاصطناعي.",u:"https://cursor.com"},
{n:"NotebookLM",c:"مذاكرة",i:"📚",d:"ارفع كتبك وملخصاتك واسأل عنها واعمل ملخصات صوتية.",u:"https://notebooklm.google"},
{n:"Khanmigo",c:"مذاكرة",i:"🎓",d:"مدرس ذكاء اصطناعي من Khan Academy.",u:"https://www.khanmigo.ai"},
{n:"Canva AI",c:"تصميم",i:"🖌️",d:"تصميمات وعروض بأدوات ذكاء اصطناعي جاهزة.",u:"https://www.canva.com"}
];
const cats=["الكل",...new Set(tools.map(t=>t.c))];
let cat="الكل";
const grid=document.getElementById("grid"),q=document.getElementById("q"),chips=document.getElementById("chips"),empty=document.getElementById("empty");
function render(){
  const s=q.value.trim().toLowerCase();
  const list=tools.filter(t=>(cat==="الكل"||t.c===cat)&&(t.n+t.d+t.c).toLowerCase().includes(s));
  grid.innerHTML=list.map(t=>`<article class="card"><div class="ic">${t.i}</div><h3>${t.n}</h3><span class="tag">${t.c}</span><p>${t.d}</p><a href="${t.u}" target="_blank" rel="noopener">افتح الموقع</a></article>`).join("");
  empty.hidden=list.length>0;
  chips.innerHTML=cats.map(c=>`<button class="chip ${c===cat?"on":""}" data-c="${c}">${c}</button>`).join("");
}
chips.onclick=e=>{if(e.target.dataset.c){cat=e.target.dataset.c;render()}};
q.oninput=render;
document.getElementById("theme").onclick=()=>document.body.classList.toggle("light");
render();
