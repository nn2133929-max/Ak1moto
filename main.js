document.addEventListener('DOMContentLoaded', function(){
  // slider
  let idx=0;
  const slides = document.querySelectorAll('.slide');
  function show(n){ slides.forEach(s=>s.classList.remove('active')); slides[n].classList.add('active'); }
  if(slides.length){ show(0); setInterval(()=>{ idx=(idx+1)%slides.length; show(idx); },5000); }
  document.getElementById('next')?.addEventListener('click', ()=>{ idx=(idx+1)%slides.length; show(idx); });
  document.getElementById('prev')?.addEventListener('click', ()=>{ idx=(idx-1+slides.length)%slides.length; show(idx); });

  // featured products
  const featured = document.getElementById('featuredGrid');
  if(featured){
    PRODUCTS.slice(0,4).forEach(p=>{
      const c=document.createElement('div'); c.className='card';
      c.innerHTML = `<img src="${p.img}" alt="${p.title}" style="width:100%;height:120px;object-fit:cover;border-radius:6px"><h4>${p.title}</h4><p>PKR ${p.price}</p><p>${p.desc}</p><p><a class="btn" href="products.html">Buy</a></p>`;
      featured.appendChild(c);
    });
  }

  // theme toggle
  function setTheme(dark){
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    localStorage.setItem('ak1_theme', dark ? 'dark' : 'light');
  }
  const saved = localStorage.getItem('ak1_theme');
  if(saved==='dark') setTheme(true);
  document.getElementById('themeToggle')?.addEventListener('click', function(){
    const isDark = document.documentElement.getAttribute('data-theme')==='dark';
    setTheme(!isDark);
    this.textContent = isDark ? 'Dark' : 'Light';
  });
  document.getElementById('themeToggle2')?.addEventListener('click', function(){
    const isDark = document.documentElement.getAttribute('data-theme')==='dark';
    setTheme(!isDark);
    this.textContent = isDark ? 'Dark' : 'Light';
  });
});
