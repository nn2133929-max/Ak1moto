document.addEventListener('DOMContentLoaded', function(){
  const grid = document.getElementById('productsGrid');
  function render(list){
    grid.innerHTML='';
    list.forEach(p=>{
      const c=document.createElement('div'); c.className='card';
      c.innerHTML = `<img src="${p.img}" alt="${p.title}" style="width:100%;height:140px;object-fit:cover;border-radius:6px"><h4>${p.title}</h4><p>${p.desc}</p><p><strong>PKR ${p.price}</strong></p>`;
      grid.appendChild(c);
    });
  }
  render(PRODUCTS);
  document.getElementById('searchProducts')?.addEventListener('input', function(){
    const q=this.value.trim().toLowerCase();
    render(PRODUCTS.filter(p=>p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)));
  });
});
