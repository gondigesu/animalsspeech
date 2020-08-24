const panels=document.querySelectorAll('.panel')

function playSound(name){
  const sound=document.querySelector(`audio[data-name="${name.toLowerCase()}"]`);
  sound.currentTime=0;
  sound.play();
}

function stopSound(name){
  const sound=document.querySelector(`audio[data-name="${name.toLowerCase()}"]`);
  sound.pause();
  sound.currentTime=0;
}

function togglePanel(panel, option){
  if(option === 'open'){
  panel.classList.add(option);
} else {
  panel.classList.remove('open')
};
}

function handleClick(e){
  const panel= e.currentTarget
  const name=this.getAttribute('name').toUpperCase();
  if(!panel.innerHTML){
  panel.innerHTML=`
  <h1 class="animal">${name}</h1> 
  `
  playSound(name);
  togglePanel(panel, 'open');

} else
  {panel.innerHTML='';
  stopSound(name);
  togglePanel(panel, 'close');
  }
}


panels.forEach(panel => panel.addEventListener('click', handleClick))


