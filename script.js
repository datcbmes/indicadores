// ================= Helpers de Tema =================
(function temaInit(){
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if(saved) root.setAttribute('data-theme','dark');
  const toggle = document.getElementById('themeToggle');
  if(toggle){
    toggle.addEventListener('click',()=>{
      const isDark = root.getAttribute('data-theme')==='dark';
      if(isDark){ root.removeAttribute('data-theme'); localStorage.removeItem('theme'); toggle.textContent='🌙'; }
      else { root.setAttribute('data-theme','dark'); localStorage.setItem('theme','dark'); toggle.textContent='☀️'; }
    });
  }
})();

// ================= Dados =================

// >>> COLE AQUI SUA LISTA DE RELATÓRIOS <<<
window.RELATORIOS = [
  {
    nome: "Indicadores Suporte Siat",
    descricao: "Indicadores de produtividade do setor de suporte do siat.",
    setor: "gerenciaadministrativa",
    setor_nome: "Gerência Administrativa",
    url: "https://app.powerbi.com/view?r=eyJrIjoiNTkxYWNkOWUtYmQyZC00ZjJmLWE4YjYtMWQ4YzViN2U2ZDNjIiwidCI6IjlmYjUxODkzLTdhM2UtNGM4NC05OGQ3LWY5ZWVmNTgwNWU3ZCJ9"
  },
  {
    nome: "Tempo de Emissão Alvarás",
    descricao: "Relatório do tempo médio para emissão dos alvarás.",
    setor: "gerenciavistoria",
    setor_nome: "Gerência de Vistoria",
    url: "https://app.powerbi.com/view?r=eyJrIjoiYzIyZmVjMTMtNWU0OC00NGRiLTliNWItNDZjZjdjYzQ5OTZhIiwidCI6IjlmYjUxODkzLTdhM2UtNGM4NC05OGQ3LWY5ZWVmNTgwNWU3ZCJ9&pageName=92e90e3e9006b93b03e7"
  },
  {
    nome: "Visão Geral Emissão Alvarás 2010 a 2025",
    descricao: "Relatório contendo uma visão geral da emissão dos alvarás entre os anos de 2010 a 2025, trazendo dados do tipo de alvará, tipo de emissão e tipo de processo",
    setor: "gerenciavistoria",
    setor_nome: "Gerência de Vistoria",
    url: "https://app.powerbi.com/view?r=eyJrIjoiYTdmMDFiZDgtYjM0MC00OWMyLTg0NjYtNDZhYTMyOTkwODBhIiwidCI6IjA4NjMzNjYwLTA0ZWUtNGFjNS1iMzcyLWMwZjY4YjgwOWRlMSJ9"
  },

  {
    nome: "Produtividade dos Vistoriadores",
    descricao: "Relatório contendo dados da produtividade dos vistoriadores e indicadores de eficiência",
    setor: "gerenciavistoria",
    setor_nome: "Gerência de Vistoria",
    url: "https://app.powerbi.com/view?r=eyJrIjoiZDU4YjgwYTktYzAwMS00M2JiLTlkMjMtNTBmOTE3OWMxYTMyIiwidCI6IjA4NjMzNjYwLTA0ZWUtNGFjNS1iMzcyLWMwZjY4YjgwOWRlMSJ9"
  },

   {
    nome: "Situação das Agendas de Vistoria",
    descricao: "Relatório mostrando a situação das agendas de vistoria, por sat e vistoriadores",
    setor: "gerenciavistoria",
    setor_nome: "Gerência de Vistoria",
    url: "https://app.powerbi.com/view?r=eyJrIjoiOWE1NThhMGUtNzVjMy00MmYxLWEyMjgtODIxODI3YTM5OGY0IiwidCI6IjA4NjMzNjYwLTA0ZWUtNGFjNS1iMzcyLWMwZjY4YjgwOWRlMSJ9"
  },

   {
    nome: "Tempo de Relato de Vistoria",
    descricao: "Relatório mostrando o tempo médio de relato de vistoria, por sat e vistoriadores",
    setor: "gerenciavistoria",
    setor_nome: "Gerência de Vistoria",
    url: "https://app.powerbi.com/view?r=eyJrIjoiY2VmODIzMGQtMDk4YS00MTY1LTgxNWUtNDRlZDcxOWRhNWU5IiwidCI6IjA4NjMzNjYwLTA0ZWUtNGFjNS1iMzcyLWMwZjY4YjgwOWRlMSJ9"
  },

  {
    nome: "Atendimento Gerência Vistoria",
    descricao: "Relatório mostrando os indicadores de produtividade do atendimento ao público externo, realizado pelo Setor de Gerência de Vistoria",
    setor: "gerenciavistoria",
    setor_nome: "Gerência de Vistoria",
    url: "https://app.powerbi.com/view?r=eyJrIjoiNjUwMTAyNGUtZmZiMC00MjE1LTlmNTctMmMyZWM4OGRmODNlIiwidCI6IjA4NjMzNjYwLTA0ZWUtNGFjNS1iMzcyLWMwZjY4YjgwOWRlMSJ9"
  },

  {
    nome: "Perícia de Incêndio Visão Geral",
    descricao: "Relatório mostrando uma visão geral dos registros do incêndio por ano, trimestre, mês, tipo de evento e moticio de acionamento",
    setor: "periciaincendio",
    setor_nome: "Perícia de Incêndio",
    url: "https://app.powerbi.com/view?r=eyJrIjoiM2FiMWIxMTMtYzIzOS00YTdiLTg0ZGItYzExNTBkYjYzZWU2IiwidCI6IjA4NjMzNjYwLTA0ZWUtNGFjNS1iMzcyLWMwZjY4YjgwOWRlMSJ9"
  },
];

// Tenta usar o array global existente; se não houver, usa vazio
const DATA = (window.relatorios || window.RELATORIOS || []).map(x=>({
  // normaliza possíveis chaves
  nome: x.nome || x.titulo || 'Relatório',
  descricao: x.descricao || x.descr || '',
  url: x.url || x.link,
  setor: x.setor || x.categoria || '',
}));

// Mapeamento de setores -> nome legível e classes de cor
const SETORES = {
  analiseprojeto: { nome:'Análise de Projetos', classe:'ap', icone:'📐' },
  gerenciaadministrativa: { nome:'Gerência Administrativa', classe:'ga', icone:'🗂️' },
  gerenciavistoria: { nome:'Gerência de Vistoria', classe:'gv', icone:'✅' },
  normascadastro: { nome:'Normas e Cadastros', classe:'nc', icone:'📚' },
  periciaincendio: { nome:'Perícia de Incêndio', classe:'pi', icone:'🔥' },
};

// ================= Renderização =================
const conteudo = document.getElementById('conteudo');
const buscaInput = document.getElementById('buscaInput');
const categoriaSelect = document.getElementById('categoriaSelect');

function highlight(text, term){
  if(!term) return text;
  const esc = term.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  const r = new RegExp(`(${esc})`,'ig');
  return String(text).replace(r,'<mark>$1</mark>');
}

function makeCard(r, termo){
  const set = SETORES[r.setor] || {nome:'Outros', classe:'', icone:'📊'};
  const card = document.createElement('div');
  card.className = `card ${set.classe}`;
  card.innerHTML = `
    <span class="badge">${set.nome}</span>
    <h3>${set.icone} <span>${highlight(r.nome, termo)}</span></h3>
    ${r.descricao ? `<p><strong>Descrição:</strong> ${highlight(r.descricao, termo)}</p>` : ''}
    <div class="actions">
      <button class="btn" aria-label="Visualizar relatório" onclick="abrirRelatorio('${r.url}','${r.nome.replace(/'/g,'&#39;')}')">Visualizar</button>
      <button class="btn secondary" aria-label="Copiar link" onclick="copiarLink('${r.url}')">Copiar link</button>
    </div>
  `;
  return card;
}

function renderLista(lista){
  conteudo.innerHTML = '';
  if(!lista || lista.length===0){
    const vazio = document.createElement('div');
    vazio.className = 'card';
    vazio.innerHTML = '<h3>😕 Nenhum relatório encontrado</h3><p>Ajuste os filtros ou limpe a busca.</p>';
    conteudo.appendChild(vazio);
    return;
  }
  const termo = (buscaInput.value || '').trim();
  lista.forEach(r=> conteudo.appendChild(makeCard(r, termo)));
}

// ================= Filtro/Busca =================
function filtrarRelatorios(){
  const termo = (buscaInput.value || '').toLowerCase();
  const cat = (categoriaSelect.value || '').toLowerCase();
  const base = DATA.length ? DATA : [];
  const filtrado = base.filter(r=>{
    const okCat = !cat || (String(r.setor||'').toLowerCase()===cat);
    const texto = `${r.nome} ${r.descricao}`.toLowerCase();
    const okBusca = !termo || texto.includes(termo);
    return okCat && okBusca;
  });
  renderLista(filtrado);
}

// chips -> mudam o select
(function chipsInit(){
  document.querySelectorAll('.chip').forEach(c=>{
    c.addEventListener('click',()=>{
      document.querySelectorAll('.chip').forEach(x=>x.classList.remove('active'));
      c.classList.add('active');
      categoriaSelect.value = c.dataset.chip || '';
      filtrarRelatorios();
    });
  });
})();

// eventos de busca/select
buscaInput.addEventListener('input', filtrarRelatorios);
categoriaSelect.addEventListener('change', filtrarRelatorios);

// ================= Visualização =================
function abrirRelatorio(url, nome='Relatório'){
  document.getElementById('conteudo').style.display = 'none';
  document.getElementById('relatorioView').style.display = 'block';
  document.getElementById('viewerTitle').textContent = nome;
  const ifr = document.getElementById('relatorioIframe');
  document.getElementById('skeleton').style.display = 'block';
  ifr.onload = ()=> document.getElementById('skeleton').style.display = 'none';
  ifr.src = url;
  document.querySelector('footer').style.display = 'none';
}
window.abrirRelatorio = abrirRelatorio; // expõe para onclick embutido

function voltarParaLista(){
  document.getElementById('relatorioIframe').src = 'about:blank';
  document.getElementById('relatorioView').style.display = 'none';
  document.getElementById('conteudo').style.display = 'grid';
  document.querySelector('footer').style.display = '';
}
window.voltarParaLista = voltarParaLista;

function copiarLink(u){ if(navigator.clipboard){ navigator.clipboard.writeText(u); } }
window.copiarLink = copiarLink;

// ================= Data/Hora =================
function atualizarDataHora(){
  const agora = new Date();
  const pad = n=> String(n).padStart(2,'0');
  const data = `${pad(agora.getDate())}/${pad(agora.getMonth()+1)}/${agora.getFullYear()}`;
  const hora = `${pad(agora.getHours())}:${pad(agora.getMinutes())}:${pad(agora.getSeconds())}`;
  const s = `Atualizado em ${data} às ${hora}`;
  const el = document.getElementById('dataHora');
  if(el) el.textContent = s;
  const sb = document.getElementById('statusBar');
  if(sb) sb.textContent = `CAT/CBMES — ${s}`;
}
setInterval(atualizarDataHora, 1000);

// ================= Init =================
(function init(){
  atualizarDataHora();
  filtrarRelatorios();
})();
