document.addEventListener("DOMContentLoaded", () => {
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }


  const paginas = ['page-0', 'pagina1', 'pagina2', 'pagina3', 'pagina4'];
  let indiceActual = 0;

  //código para generar 5 puntos, es decir cada punto es una página
const dotsEl = document.getElementById('dots'); if (dotsEl) { for (let i = 0; i < paginas.length; i++) { const d = document.createElement('div'); d.className = 'dot' + (i === 0 ? ' active' : ''); dotsEl.appendChild(d); } }

  function irAPagina(nuevoIndice) {
    if (nuevoIndice < 0 || nuevoIndice >= paginas.length) return;


    const paginaActual = document.getElementById(paginas[indiceActual]);
    if (paginaActual) {
      paginaActual.classList.remove('active');
    }


    indiceActual = nuevoIndice;
    const nuevaPagina = document.getElementById(paginas[indiceActual]);
    if (nuevaPagina) {
      nuevaPagina.classList.add('active');
    }
  

  // código para activar los puntos
document.querySelectorAll('.dot').forEach((d, i) => { d.classList.toggle('active', i === indiceActual);     
}); 

// código para lanzar confetti 
document.querySelectorAll('.dot').forEach((d, i) => { d.classList.toggle('active', i === indiceActual); 
});
if (indiceActual === 4) { 
lanzarConfeti(); } 
}

// botones de navegación 

// botones de navegación 


  const btnEnter = document.getElementById('btn-enter');
  if (btnEnter) 
    btnEnter.addEventListener('click', () => {
      irAPagina(1);
    });
  


  const btnNext1 = document.getElementById('btn-next-1');
  if (btnNext1) 
    btnNext1.addEventListener('click', () => {
      irAPagina(2);
    });


  const btnReveal = document.getElementById('btn-reveal');
  if (btnReveal) btnReveal.addEventListener('click', () => irAPagina(4));


  const btnPrev = document.getElementById('btn-prev');
  if (btnPrev) btnPrev.addEventListener('click', () => irAPagina(indiceActual - 1));


  const btnNext = document.getElementById('btn-next');
  if (btnNext) btnNext.addEventListener('click', () => irAPagina(indiceActual + 1));
// configuración para el audio
const btnAudioEbc = document.getElementById('btn-audio-ebc');
  if (btnAudioEbc) {
    btnAudioEbc.addEventListener('click', (event) => {
      event.stopPropagation();
      const audio = document.getElementById('navidad-audio');
      const btnText = document.getElementById('ebc-audio-btn-text');


      if (!audio) return;


      if (audio.paused) {
        audio.play();
        if (btnText) btnText.textContent = '⏸️';
      } else {
        audio.pause();
        if (btnText) btnText.textContent = '🎁';
      }
    });
  }


  // confeti
function lanzarConfeti() {
    const container = document.getElementById('confetti-container');
    if (!container) return;


    container.innerHTML = '';
    const colors = ['#D1C600', '#630000', '#ffffff', '#16a34a', '#fbbf24'];


    for (let i = 0; i < 40; i++) {
      const c = document.createElement('div');
      c.className = 'confetti';
      c.style.left = Math.random() * 100 + '%';
      c.style.background = colors[Math.floor(Math.random() * colors.length)];
      c.style.animationDelay = Math.random() * 2 + 's';
      c.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
      container.appendChild(c);
    }
  }
});