/* Personal React demo. Fictional records; no backend or customer data. */
(() => {
  const h = React.createElement;
  const records = [
    {id:'PRJ-101',name:'Merchant overview',area:'Dashboard',status:'In progress',owner:'Alex',progress:65,description:'A summary of daily activity with clear totals and shortcuts to frequent tasks.',tasks:['Build summary layout','Connect sample metrics','Review small-screen spacing']},
    {id:'PRJ-102',name:'Checkout flow',area:'Payments',status:'In review',owner:'Sam',progress:90,description:'A guided checkout journey with clear steps and validation feedback.',tasks:['Define step navigation','Handle validation feedback','Review confirmation screen']},
    {id:'PRJ-103',name:'Account settings',area:'Account',status:'Completed',owner:'Jordan',progress:100,description:'An organized settings page for profile details and notification preferences.',tasks:['Group related settings','Add accessible labels','Complete design review']},
    {id:'PRJ-104',name:'Activity history',area:'Reporting',status:'In progress',owner:'Taylor',progress:40,description:'A searchable activity list with filters and detailed record views.',tasks:['Build filter controls','Add empty state','Implement record details']},
    {id:'PRJ-105',name:'Help center',area:'Support',status:'Planned',owner:'Alex',progress:0,description:'A simple way to find answers and navigate common support topics.',tasks:['Outline topic structure','Build searchable list','Review content hierarchy']}
  ];
  function App(){
    const [query,setQuery]=React.useState('');
    const [status,setStatus]=React.useState('All statuses');
    const [sort,setSort]=React.useState('name');
    const [selected,setSelected]=React.useState(null);
    const filtered=records.filter(r=>(status==='All statuses'||r.status===status)&&`${r.name} ${r.area} ${r.owner}`.toLowerCase().includes(query.trim().toLowerCase())).sort((a,b)=>sort==='progress'?b.progress-a.progress:a.name.localeCompare(b.name));
    return h('div',{className:'dashboard'},
      h('div',{className:'dashboard-top'},h('div',null,h('span',{className:'demo-kicker'},'WORKSPACE / PROJECTS'),h('h4',null,'Project overview')),h('span',{className:'sample-badge'},'Sample data')),
      h('div',{className:'metrics'},[['Total projects',records.length],['In progress',records.filter(r=>r.status==='In progress').length],['Completed',records.filter(r=>r.status==='Completed').length]].map(([label,value])=>h('div',{className:'metric',key:label},h('span',null,label),h('strong',null,value)))),
      h('div',{className:'demo-controls'},h('label',null,'Search projects',h('input',{type:'search',value:query,placeholder:'Search by name, area, or owner',onChange:e=>setQuery(e.target.value)})),h('label',null,'Status',h('select',{value:status,onChange:e=>setStatus(e.target.value)},['All statuses','Planned','In progress','In review','Completed'].map(s=>h('option',{key:s},s)))),h('label',null,'Sort by',h('select',{value:sort,onChange:e=>setSort(e.target.value)},h('option',{value:'name'},'Project name'),h('option',{value:'progress'},'Progress')))),
      h('p',{className:'result-count','aria-live':'polite'},`${filtered.length} of ${records.length} projects`),
      h('div',{className:'demo-content'},h('div',{className:'project-list'},filtered.length?filtered.map(r=>h('button',{key:r.id,type:'button',className:`demo-row${selected===r.id?' selected':''}`,'aria-pressed':selected===r.id,onClick:()=>setSelected(selected===r.id?null:r.id)},h('div',{className:'row-title'},h('strong',null,r.name),h('span',null,`${r.area} · ${r.owner}`)),h('span',{className:`status status-${r.status.toLowerCase().replaceAll(' ','-')}`},r.status),h('div',{className:'progress-cell'},h('span',null,`${r.progress}%`),h('div',{className:'progress-track','aria-hidden':true},h('span',{style:{width:`${r.progress}%`}}))))):h('div',{className:'empty-state'},h('h4',null,'No matching projects'),h('p',null,'Try another search or reset your filters.'),h('button',{type:'button',className:'button secondary',onClick:()=>{setQuery('');setStatus('All statuses');}},'Reset filters'))),
      selected&&filtered.some(r=>r.id===selected)?h(Detail,{record:records.find(r=>r.id===selected),onClose:()=>setSelected(null)}):h('aside',{className:'detail-panel detail-empty'},h('span',{className:'demo-kicker'},'PROJECT DETAILS'),h('h4',null,'Explore a project'),h('p',null,'Select a row to see its scope and planned tasks.'))),
      h('div',{className:'demo-bottom'},'Personal demo · React · Local sample data'));
  }
  function Detail({record:r,onClose}){return h('aside',{className:'detail-panel','aria-label':'Selected project details','aria-live':'polite'},h('div',{className:'detail-top'},h('span',{className:'demo-kicker'},r.id),h('button',{type:'button',className:'close-detail',onClick:onClose,'aria-label':'Close project details'},'Close')),h('h4',null,r.name),h('p',null,r.description),h('dl',null,h('dt',null,'Owner'),h('dd',null,r.owner),h('dt',null,'Status'),h('dd',null,r.status)),h('h5',null,'Scope'),h('ul',null,r.tasks.map(t=>h('li',{key:t},t))));}
  ReactDOM.createRoot(document.getElementById('react-demo')).render(h(App));
})();
