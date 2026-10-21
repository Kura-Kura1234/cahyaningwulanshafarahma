function switchTab(id, btn) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.add('hidden'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + id).classList.remove('hidden');
  btn.classList.add('active');
}

// ── TYPEWRITER ──
const phrases = ['English Student 📚'];
let pi=0,ci=0,del=false;
function typewriter(){
  const el=document.getElementById('tw');
  if(!el)return;
  const cur=phrases[pi];
  el.textContent=cur.slice(0,++ci);
  if(ci<cur.length) setTimeout(typewriter,75);
}

// ── NAV ──
function showP2(){
  document.getElementById('pg1').classList.add('hidden');
  const p=document.getElementById('pg2');
  p.classList.remove('hidden');
  p.classList.add('page-enter');
  window.scrollTo(0,0);
}
function showP1(){
  document.getElementById('pg2').classList.add('hidden');
  document.getElementById('pg1').classList.remove('hidden');
  window.scrollTo(0,0);
}
function scrollTo2(id){
  const el=document.getElementById(id);
  if(!el)return;
  window.scrollTo({top:el.getBoundingClientRect().top+window.pageYOffset-72,behavior:'smooth'});
}
function toggleMob(){
  document.getElementById('mob2').classList.toggle('open');
}
document.addEventListener('click',e=>{
  const m=document.getElementById('mob2');
  const b=document.getElementById('ham2');
  if(m&&b&&!m.contains(e.target)&&!b.contains(e.target))m.classList.remove('open');
});

document.addEventListener('DOMContentLoaded',typewriter);
