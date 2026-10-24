const ACCESS_CODE='7519';
const lock=document.getElementById('lock'), reveal=document.getElementById('reveal'), form=document.getElementById('form'), code=document.getElementById('code'), error=document.getElementById('error'), clouds=document.getElementById('clouds');
const phrases=[
'Tu voz merece ser escuchada.',
'No tienes que saberlo todo: comparte lo que preparaste.',
'Respira. Tu mente sabe más de lo que los nervios te hacen creer.',
'No busques perfección; busca conectar con quienes te escuchan.',
'Cada palabra es un paso. Habla con calma y confía en ti.',
'Ya hiciste el esfuerzo de prepararte. Date la oportunidad de brillar.',
'Puedes sentir nervios y hacerlo bien de todas formas.',
'No estás aquí por casualidad: tienes algo que aportar.',
'Ve despacio. Una idea a la vez es suficiente.',
'Tu esfuerzo cuenta, incluso cuando sientes dudas.'
];
const tints=['#f8e7f4','#e9e9ff','#e2f2ff','#fff0e4','#eee8ff','#fce4ef','#e3f4f1','#f5eaff','#e5ecff','#fff0f6'];
phrases.forEach((phrase,i)=>{const cloud=document.createElement('div');cloud.className='quote-cloud';cloud.textContent=phrase;cloud.style.setProperty('--tint',tints[i]);cloud.style.setProperty('--delay',`${-(i%5)*.65}s`);cloud.style.setProperty('--dur',`${4.6+(i%4)*.55}s`);clouds.appendChild(cloud)});
for(let i=0;i<38;i++){const s=document.createElement('span');s.className='spark';s.textContent=['✦','✧','·','✺'][Math.floor(Math.random()*4)];s.style.left=`${Math.random()*100}%`;s.style.top=`${Math.random()*100}%`;s.style.fontSize=`${8+Math.random()*15}px`;s.style.animationDelay=`${Math.random()*3}s`;document.getElementById('sparkles').appendChild(s)}
function celebrate(){for(let i=0;i<46;i++){const s=document.createElement('span');s.className='burst';s.textContent=['✦','✧','✺','✴','·'][Math.floor(Math.random()*5)];s.style.left=`${35+Math.random()*30}%`;s.style.top=`${30+Math.random()*35}%`;s.style.color=['#d66b9b','#c4a6e8','#8d9fdb','#f5c35e','#fff'][Math.floor(Math.random()*5)];s.style.setProperty('--dx',`${(Math.random()-.5)*420}px`);s.style.setProperty('--dy',`${(Math.random()-.5)*420}px`);document.body.appendChild(s);s.addEventListener('animationend',()=>s.remove(),{once:true})}}
form.addEventListener('submit',e=>{e.preventDefault();if(code.value.trim()===ACCESS_CODE){error.textContent='';lock.classList.add('hidden');reveal.classList.remove('hidden');celebrate()}else{error.textContent='Ese código no es. Inténtalo una vez más ✦';code.value='';code.focus()}});
document.getElementById('eye').addEventListener('click',()=>{const hidden=code.type==='password';code.type=hidden?'text':'password';document.getElementById('eye').setAttribute('aria-label',hidden?'Ocultar código':'Mostrar código')});
document.getElementById('restart').addEventListener('click',()=>{reveal.classList.add('hidden');lock.classList.remove('hidden');code.value='';code.focus();window.scrollTo({top:0,behavior:'smooth'})});
