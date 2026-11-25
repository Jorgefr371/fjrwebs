(()=>{const r=document.documentElement;r.classList.add("js");const x=matchMedia("(prefers-reduced-motion: reduce)").matches,m=window.CASOS||[],E={es:{volver:"Volver a mis proyectos",menuTrabajos:"Trabajos",menuProceso:"C\xF3mo trabajo",menuContacto:"Hablemos",etiqueta:"Caso de estudio",cliente:"Cliente",tipo:"Tipo de proyecto",servicios:"Qu\xE9 hice",enVivo:"Ver la web en vivo",reto:"Lo que necesitaba el cliente",solucion:"C\xF3mo lo resolvimos",paso:"Paso a paso",moviles:"As\xED se ve en el celular",siguiente:"Siguiente proyecto",cierre:"\xBFTu negocio necesita una web as\xED?",cta:"Charlemos",noExiste:"No encontr\xE9 ese proyecto.",verTodos:"Ver todos los proyectos",idiomaBtn:"EN",idiomaAria:"EN: cambiar idioma a ingl\xE9s",titulo:e=>`${e} \xB7 Caso de estudio \xB7 FlechasJR`},en:{volver:"Back to my projects",menuTrabajos:"Work",menuProceso:"How I work",menuContacto:"Let's talk",etiqueta:"Case study",cliente:"Client",tipo:"Project type",servicios:"What I did",enVivo:"See the live site",reto:"What the client needed",solucion:"How we solved it",paso:"Step by step",moviles:"How it looks on mobile",siguiente:"Next project",cierre:"Does your business need a website like this?",cta:"Let's talk",noExiste:"I couldn't find that project.",verTodos:"See all projects",idiomaBtn:"ES",idiomaAria:"ES: switch language to Spanish",titulo:e=>`${e} \xB7 Case study \xB7 FlechasJR`}};let s=(()=>{try{return localStorage.getItem("fjr-idioma")||"es"}catch{return"es"}})();const _=new URLSearchParams(location.search).get("id"),v=m.findIndex(e=>e.id===_),p=document.getElementById("caso"),w='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>',h=(e,o)=>`assets/casos/${e.id}/${o}.webp`,S=e=>e.replace(/^https?:\/\/(www\.)?/,"").replace(/\/$/,""),L=(e,o,t)=>`
    <figure class="navegador">
      <div class="navegador__barra" aria-hidden="true"><span class="navegador__puntos"><i></i><i></i><i></i></span><span class="navegador__url">${S(e.url)}</span></div>
      <img src="${h(e,o)}" alt="${t}" loading="lazy" decoding="async" width="1400" height="875">
    </figure>`,g=(e,o,t)=>`<figure class="celular"><img src="${h(e,o)}" alt="${t}" loading="lazy" decoding="async" width="520" height="1040"></figure>`;function b(){const e=E[s];document.querySelectorAll("[data-i18n]").forEach(a=>{a.textContent=e[a.dataset.i18n]});const o=document.getElementById("btn-idioma");if(o.textContent=e.idiomaBtn,o.setAttribute("aria-label",e.idiomaAria),r.lang=s,v<0){document.title="FlechasJR",p.innerHTML=`<section class="caso-error"><div><h1 class="caso-titulo">${e.noExiste}</h1><p style="margin-top:28px"><a class="cta" href="index.html#trabajos"><span>${e.verTodos}</span></a></p></div></section>`;return}const t=m[v],i=m[(v+1)%m.length];document.title=e.titulo(t.nombre),document.body.style.setProperty("--acento",t.acento);const d=[...t.moviles,...t.moviles].slice(0,5);p.innerHTML=`
      <section class="caso-portada" aria-hidden="true">
        <div class="collage">${d.map(a=>`<img src="${h(t,a)}" alt="" decoding="async">`).join("")}</div>
      </section>

      <section class="caso-intro">
        <dl class="ficha revelar">
          <div><dt>${e.cliente}</dt><dd class="cliente">${t.nombre}</dd></div>
          <div><dt>${e.tipo}</dt><dd>${t.tipo[s]} \xB7 ${t.nicho[s]}</dd></div>
          <div><dt>${e.servicios}</dt><dd>${t.servicios[s]}</dd></div>
          <div><a class="en-vivo" href="${t.url}" target="_blank" rel="noopener">${e.enVivo}${w}</a></div>
        </dl>
        <div>
          <p class="etiqueta-caso">${e.etiqueta}</p>
          <h1 class="caso-titulo">${t.nombre}</h1>
          <div class="caso-texto revelar">
            <h2>${e.reto}</h2><p>${t.reto[s]}</p>
            <h2>${e.solucion}</h2><p>${t.solucion[s]}</p>
          </div>
        </div>
      </section>

      <section class="pasos" aria-labelledby="titulo-pasos">
        <h2 class="pasos__titulo" id="titulo-pasos">${e.paso}</h2>
        ${t.pasos.map((a,n)=>`
          <article class="paso revelar">
            <div class="paso__texto">
              <span class="paso__num">${String(n+1).padStart(2,"0")}</span>
              <h3>${a.titulo[s]}</h3>
              <p>${a.texto[s]}</p>
            </div>
            <div class="paso__visual${a.tipo==="mov"?" paso__visual--movil":""}">
              ${a.tipo==="mov"?g(t,a.img,a.titulo[s]):L(t,a.img,a.titulo[s])}
            </div>
          </article>`).join("")}
      </section>

      <section class="moviles" aria-labelledby="titulo-moviles">
        <h2 class="pasos__titulo" id="titulo-moviles">${e.moviles}</h2>
        <div class="moviles__fondo revelar">${t.moviles.map((a,n)=>g(t,a,`${t.nombre} \xB7 ${s==="es"?"pantalla m\xF3vil":"mobile screen"} ${n+1}`)).join("")}</div>
      </section>

      <nav class="siguiente" aria-label="${e.siguiente}">
        <a href="proyecto.html?id=${i.id}">
          <span><small>${e.siguiente}</small><strong>${i.nombre}</strong></span>
          <img src="assets/trabajos/${i.id}.webp?v=2" alt="" loading="lazy">
        </a>
      </nav>

      <section class="cierre">
        <h2>${e.cierre}</h2>
        <a class="cta" href="index.html#contacto"><span>${e.cta}</span><span class="cta__flecha" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></a>
      </section>`,j()}function j(){const e=p.querySelectorAll(".revelar");if(!("IntersectionObserver"in window)||x){e.forEach(t=>t.classList.add("visible"));return}const o=new IntersectionObserver(t=>t.forEach(i=>{i.isIntersecting&&(i.target.classList.add("visible"),o.unobserve(i.target))}),{threshold:.12,rootMargin:"0px 0px -6% 0px"});e.forEach(t=>o.observe(t))}const C=document.querySelector(".barra"),$=()=>r.style.setProperty("--barra-h",`${C.offsetHeight}px`);$(),addEventListener("resize",$),document.getElementById("btn-idioma").addEventListener("click",()=>{s=s==="es"?"en":"es";try{localStorage.setItem("fjr-idioma",s)}catch{}b()});const y=document.getElementById("btn-tema"),f=()=>y.setAttribute("aria-label",r.dataset.theme==="dark"?"Cambiar a modo claro":"Cambiar a modo oscuro");f(),y.addEventListener("click",()=>{r.dataset.theme=r.dataset.theme==="dark"?"light":"dark";try{localStorage.setItem("fjr-tema",r.dataset.theme)}catch{}f()});const u=document.getElementById("btn-menu"),c=document.getElementById("menu"),I=()=>{c.hidden=!0,u.setAttribute("aria-expanded","false")};u.addEventListener("click",()=>{const e=c.hidden;c.hidden=!e,u.setAttribute("aria-expanded",String(e)),e&&c.querySelector("a").focus()}),addEventListener("keydown",e=>{e.key==="Escape"&&!c.hidden&&(I(),u.focus())});const l=document.querySelector(".cursor");if(matchMedia("(pointer: fine)").matches){document.addEventListener("mouseleave",()=>l.classList.remove("activo"));const e=l.querySelector(".cursor__punto"),o=l.querySelector(".cursor__halo");let t=innerWidth/2,i=innerHeight/2,d=t,a=i;addEventListener("pointermove",n=>{t=n.clientX,i=n.clientY,l.classList.add("activo"),e.style.transform=`translate(${t}px, ${i}px) translate(-50%, -50%)`,l.classList.toggle("sobre-enlace",!!n.target.closest("a, button"))}),function n(){d+=(t-d)*.12,a+=(i-a)*.12,o.style.transform=`translate(${d}px, ${a}px) translate(-50%, -50%)`,requestAnimationFrame(n)}()}b(),requestAnimationFrame(()=>r.classList.add("cargado"))})();
