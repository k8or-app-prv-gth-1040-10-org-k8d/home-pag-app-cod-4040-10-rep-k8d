(function(_ds){var window=this;var aba=function(a){return(0,_ds.U)('<div class="devsite-popout" id="'+_ds.Y(a.id)+'"><div class="devsite-popout-result devsite-suggest-results-container" devsite-hide></div></div>')},e7=function(a){a="All results in "+_ds.V(a);return(0,_ds.U)('<button type="submit" class="button button-white devsite-search-project-scope" role="option">'+a+"</button>")},f7=function(a,b,c){let d='<button type="submit" class="button button-white devsite-suggest-all-results" role="option">';b?(a="All results across "+
_ds.V(c),d+=a):(a='All results for "'+_ds.V(a)+'"',d+=a);return(0,_ds.U)(d+"</button>")},g7=function(a,b,c,d,e,f,g,h){a=(c?"":'<devsite-analytics-scope action="'+_ds.Y(_ds.sD("Restricted "+d))+'">')+'<a class="devsite-result-item-link" href="'+_ds.Y(_ds.sD(a))+'" role="option"><span class="devsite-suggestion-fragment">'+_ds.V(b)+"</span>"+(h?'<span class="devsite-suggestion-fragment">'+_ds.V(h)+"</span>":"")+(e?'<span class="devsite-suggestion-fragment">'+_ds.V(e)+"</span>":"")+(f&&!g?'<span class="devsite-suggestion-fragment">'+
_ds.V(f)+"</span>":"");c||(a+='<span class="devsite-result-item-confidential">Confidential</span>');return(0,_ds.U)(a+("</a>"+(c?"":"</devsite-analytics-scope>")))},bba=function(a){var b=a.projectName;const c=a.pq,d=a.query,e=a.xq;a=a.gk;b='<div class="devsite-suggest-wrapper '+(e?"":"devsite-search-disabled")+'"><div class="devsite-suggest-section"><div class="devsite-result-label">There are no suggestions for your query</div></div>'+((e?'<div class="devsite-suggest-footer">'+(c?e7(b):"")+f7(d,c,
a)+"</div>":"")+"</div>");return(0,_ds.U)(b)},cba=function(a){var b=a.lw;const c=a.ww;var d=a.Bw;const e=a.projectName,f=a.pq,g=a.query;var h=a.Gw;const k=a.xq;a=a.gk;let l;l='<div class="devsite-suggest-wrapper '+(k?"":"devsite-search-disabled")+'" tabindex="0" role="listbox" aria-label="'+_ds.dD("Search Suggestions");l+='"><div class="devsite-suggest-section">';if(0<d.length){l=l+'<div class="devsite-suggest-sub-section" role="group" aria-labelledby="devsite-suggest-header-partial-query"><div class="devsite-suggest-header" id="devsite-suggest-header-partial-query">Suggested searches'+
((f?'<span class="devsite-suggest-project">'+_ds.V(e)+"</span>":"")+'</div><devsite-analytics-scope category="Site-Wide Custom Events" label="Search" action="Query Suggestion Click">');var m=d.length;for(var n=0;n<m;n++){var p=d[n];l+='<div class="devsite-result-item devsite-nav-label" id="suggestion-partial-query-'+_ds.Y(n)+'" index=":'+_ds.Y(n)+'">'+g7(p.getPath(),p.getTitle(),_ds.Lg(p,14),"Query Suggestion Click")+"</div>"}l+="</devsite-analytics-scope></div>"}l+=0<d.length&&0<b.length?'<hr role="none">':
"";if(0<b.length){l=l+'<div class="devsite-suggest-sub-section" role="group" aria-labelledby="devsite-suggest-header-product"><div class="devsite-suggest-header" id="devsite-suggest-header-product">Pages'+((f?'<span class="devsite-suggest-project">'+_ds.V(e)+"</span>":"")+'</div><devsite-analytics-scope category="Site-Wide Custom Events" label="Search" action="Page Suggestion Click">');m=b.length;for(n=0;n<m;n++)p=b[n],l+='<div class="devsite-result-item devsite-nav-label" id="suggestion-product-'+
_ds.Y(n)+'" index=":'+_ds.Y(n)+'">'+g7(p.getPath(),p.getTitle(),_ds.Lg(p,14),"Page Suggestion Click",void 0,_ds.z(p,4),f)+"</div>";l+="</devsite-analytics-scope></div>"}l+=0<h.length&&0<b.length+d.length?'<hr role="none">':"";if(0<h.length){l=l+'<div class="devsite-suggest-sub-section" role="group" aria-labelledby="devsite-suggest-header-reference"><div class="devsite-suggest-header" id="devsite-suggest-header-reference">Reference'+((f?'<span class="devsite-suggest-project">'+_ds.V(e)+"</span>":"")+
'</div><devsite-analytics-scope category="Site-Wide Custom Events" label="Search" action="Reference Suggestion Click">');m=h.length;for(n=0;n<m;n++)p=h[n],l+='<div class="devsite-result-item devsite-nav-label" id="suggestion-reference-'+_ds.Y(n)+'" index=":'+_ds.Y(n)+'">'+g7(p.getPath(),p.getTitle(),_ds.Lg(p,14),"Reference Suggestion Click",_ds.z(p,3),_ds.z(p,4),f,_ds.nd(p,10,_ds.Ec,2)[0])+"</div>";l+="</devsite-analytics-scope></div>"}l+=0<c.length&&0<b.length+d.length+h.length?'<hr role="none">':
"";if(0<c.length){l+='<div class="devsite-suggest-sub-section" role="group" aria-labelledby="devsite-suggest-header-other-products"><div class="devsite-suggest-header" id="devsite-suggest-header-other-products">Products</div><devsite-analytics-scope category="Site-Wide Custom Events" label="Search" action="Product Suggestion Click">';b=c.length;for(d=0;d<b;d++)h=c[d],l+='<div class="devsite-result-item devsite-nav-label" id="suggestion-other-products-'+_ds.Y(d)+'" index=":'+_ds.Y(d)+'">'+g7(h.getPath(),
h.getTitle(),_ds.Lg(h,14),"Product Suggestion Click")+"</div>";l+="</devsite-analytics-scope></div>"}l+="</div>"+(k?'<div class="devsite-suggest-footer" role="none">'+(f?e7(e):"")+f7(g,f,a)+"</div>":"")+"</div>";return(0,_ds.U)(l)};var dba=/[ .()<>{}\[\]\/:,]+/,eba=0,hba=function(a){a.h&&(a.j.listen(a.h,"suggest-service-search",b=>{a:{var c=a.ma.querySelector(".highlight");if(c&&(c=c.querySelector(".devsite-result-item-link"))){c.click();break a}h7(a,b.detail.originalEvent,!!a.qa)}}),a.j.listen(a.h,"suggest-service-suggestions-received",b=>void fba(a,b)),a.j.listen(a.h,"suggest-service-focus",()=>{i7(a,"cloud-track-search-focus",null);a.ra=!0;j7(a,!0)}),a.j.listen(a.h,"suggest-service-blur",()=>{j7(a,!1)}),a.j.listen(a.h,"suggest-service-input",
()=>{!a.oa["Text Entered Into Search Bar"]&&a.h.query.trim()&&(a.dispatchEvent(new CustomEvent("devsite-analytics-observation",{detail:{category:"Site-Wide Custom Events",label:"Search",action:"Text Entered Into Search Bar"},bubbles:!0})),a.oa["Text Entered Into Search Bar"]=!0);a.ra&&(i7(a,"cloud-track-search-input",null),a.ra=!1)}),a.j.listen(a.h,"suggest-service-navigate",b=>void gba(a,b)),a.j.listen(document.body,"devsite-page-changed",()=>a.oa={}),_ds.iE(a.h));a.v&&a.j.listen(a.v,"submit",b=>
{h7(a,b)});a.ma&&a.j.listen(a.ma,"click",b=>{const c=b.target;if(c.closest(".devsite-result-item-link")){j7(a,!1);let d;i7(a,"cloud-track-search-submit",{query:null==(d=a.o)?void 0:d.value,fF:c})}c.classList.contains("devsite-search-project-scope")&&h7(a,b,!0)});a.Aa&&a.j.listen(a.Aa,"click",()=>void j7(a,!0));a.xa&&a.j.listen(a.xa,"click",()=>void j7(a,!1))},fba=function(a,b){b=b.detail;var c=b.suggestions;b=b.query;if(a.h.query.toLowerCase().startsWith(b.toLowerCase()))if(c){var d=c.Kd();c=d.filter(p=>
2===p.Cf());var e=d.filter(p=>3===p.Cf()),f=d.filter(p=>4===p.Cf()).slice(0,5),g=d.filter(p=>1===p.Cf());d=c.length+f.length+g.length;for(var h of f)h.setPath(_ds.il(`${a.qa||"/s/results"}/?q=${h.getTitle()}`).toString());var k=b.split(dba);e.forEach(p=>_ds.BC(p,_ds.nd(p,10,_ds.Ec,2).filter(u=>k.some(w=>u.includes(w)))));h=a.getAttribute("project-name")||"";var l=a.hasAttribute("project-scope"),m=a.hasAttribute("enable-search"),n=a.getAttribute("tenant-name")||"";c={lw:c,projectName:h,pq:l,ww:g,Bw:f,
query:b,Gw:e,xq:m,gk:n};0===d?_ds.N(a.ea,bba,c):(_ds.N(a.ea,cba,c),iba(a,b));a.o.setAttribute("aria-expanded","true");a.ea.removeAttribute("hidden")}else a.ea.setAttribute("hidden",""),a.o.setAttribute("aria-expanded","false")},i7=function(a,b,c=null){a.dispatchEvent(new CustomEvent(b,{detail:c,bubbles:!0}))},j7=function(a,b){if(a.va!==b){_ds.eE(a.h,b);if(a.va=b)a.setAttribute("search-active","");else{let c=a.ma.querySelector(".highlight");c&&c.classList.remove("highlight");a.removeAttribute("search-active");
a.o.setAttribute("aria-expanded","false");_ds.Sj(a.ea)}a.hasAttribute("capture")||a.dispatchEvent(new CustomEvent("devsite-search-toggle",{detail:{active:b},bubbles:!0}))}},gba=function(a,b){var c=b.detail;b=a.ea.querySelector(".highlight");let d;const e=Array.from(a.ea.querySelectorAll(".devsite-result-item"));let f=[];let g,h=-1;if(b){var k=_ds.kk(b,l=>l.classList.contains("devsite-suggest-section"));f=Array.from(k.querySelectorAll(".devsite-result-item"));k=_ds.Zj(b.parentNode.parentNode);g=_ds.ak(b.parentNode.parentNode);
h=e.indexOf(b)}switch(c.keyCode){case 37:if(!k&&!g)return;b&&(c=b.getAttribute("index"),g?(d=g.querySelector('[index="'+c+'"]'))||(d=_ds.ab(Array.from(g.querySelectorAll("[index]")))):k&&((d=k.querySelector('[index="'+c+'"]'))||(d=_ds.ab(Array.from(k.querySelectorAll("[index]"))))));break;case 39:if(!k&&!g)return;b&&(c=b.getAttribute("index"),k?(d=k.querySelector('[index="'+c+'"]'))||(d=_ds.ab(Array.from(k.querySelectorAll("[index]")))):g&&((d=g.querySelector('[index="'+c+'"]'))||(d=_ds.ab(Array.from(g.querySelectorAll("[index]"))))));
break;case 38:b?(d=e[h-1])||(d=_ds.ab(f)):d=_ds.ab(e);break;case 40:b?(d=e[h+1])||(d=f[0]):d=e[0]}b&&(b.classList.remove("highlight"),b.removeAttribute("aria-selected"));d&&(a.o.setAttribute("aria-activedescendant",d.id),d.setAttribute("aria-selected","true"),d.classList.add("highlight"),d.scrollIntoViewIfNeeded&&d.scrollIntoViewIfNeeded()||d.scrollIntoView())},h7=async function(a,b,c=!1){b.preventDefault();b.stopPropagation();if(a.hasAttribute("enable-search")){a.oa["Full Site Search"]||(a.dispatchEvent(new CustomEvent("devsite-analytics-observation",
{detail:{category:"Site-Wide Custom Events",label:"Search",action:"Full Site Search"},bubbles:!0})),a.oa["Full Site Search"]=!0);let d;i7(a,"cloud-track-search-submit",{query:null==(d=a.o)?void 0:d.value});b=c&&a.qa?_ds.il(a.qa):_ds.il(a.v.getAttribute("action"));c=new _ds.Bk(b.href);a.h.query&&_ds.Ok(c,"q",a.h.query);b.search=c.g.toString();await DevsiteApp.fetchPage(b.href,!a.hasAttribute("disable-history"));j7(a,!1)}},iba=function(a,b){b=new RegExp(`(${_ds.wj(b)})`,"ig");a=a.ea.querySelectorAll(".devsite-suggestion-fragment");
for(const c of a)a=c.innerHTML,a=a.replace(b,"<b>$1</b>"),_ds.me(c,_ds.Ii(a))},k7=class extends _ds.F{static get observedAttributes(){return["project-scope","url-scoped","disabled"]}constructor(){super();this.va=!1;this.oa={};this.ua="";this.qa=null;this.j=new _ds.H;this.h=null;this.ra=!1}disconnectedCallback(){_ds.I(this.j);this.h&&(this.h.dispose(),this.h=null)}attributeChangedCallback(a,b,c){switch(a){case "project-scope":this.ua=c||"";this.h&&(this.h.ra=this.ua);break;case "url-scoped":this.qa=
c;break;case "disabled":this.o&&(this.o.disabled=null!==c)}}connectedCallback(){if(this.v=this.querySelector("form")){this.o=this.v.querySelector(".devsite-search-query");this.Aa=this.v.querySelector(".devsite-search-button[search-open]");this.xa=this.querySelector(".devsite-search-button[search-close]");var a=`devsite-search-popout-container-id-${++eba}`;this.o.setAttribute("aria-controls",a);this.ma=_ds.O(aba,{id:a});this.ea=this.ma.querySelector(".devsite-suggest-results-container");this.v.appendChild(this.ma);
this.hasAttribute("project-scope")&&(this.ua=this.getAttribute("project-scope"));this.hasAttribute("url-scoped")&&(this.qa=this.getAttribute("url-scoped"));this.v&&this.o&&(this.h=new _ds.jE(this,this.v,this.o),this.h.h=!0,this.h.Ba=this.hasAttribute("enable-query-completion"),this.h.ua=!0,this.h.Aa=!0,this.h.Da=!0,this.h.ra=this.ua,this.h.h=this.hasAttribute("enable-suggestions"));hba(this)}}};k7.prototype.connectedCallback=k7.prototype.connectedCallback;k7.prototype.attributeChangedCallback=k7.prototype.attributeChangedCallback;
k7.prototype.disconnectedCallback=k7.prototype.disconnectedCallback;try{customElements.define("devsite-search",k7)}catch(a){console.warn("devsite.app.customElement.DevsiteSearch",a)};})(_ds_www);
