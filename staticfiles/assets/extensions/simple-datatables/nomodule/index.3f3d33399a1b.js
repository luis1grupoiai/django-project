System.register([],(function(t,e){"use strict";return{execute:function(){const s=t=>"[object Object]"===Object.prototype.toString.call(t),i=(t,e)=>{const s=document.createElement(t);if(e&&"object"==typeof e)for(const t in e)"html"===t?s.innerHTML=e[t]:s.setAttribute(t,e[t]);return s},a=t=>{t instanceof NodeList?t.forEach((t=>a(t))):t.innerHTML=""},n=(t,e,s)=>i("li",{class:t,html:`<a href="#" data-page="${e}">${s}</a>`}),r=(t,e)=>{let s,i;1===e?(s=0,i=t.length):-1===e&&(s=t.length-1,i=-1);for(let a=!0;a;){a=!1;for(let n=s;n!=i;n+=e)if(t[n+e]&&t[n].value>t[n+e].value){const s=t[n],i=t[n+e],r=s;t[n]=i,t[n+e]=r,a=!0}}return t};class o{constructor(t){this.dt=t,this.cursor=!1}build(t){const e=i("tr");let s=this.dt.headings;return s.length||(s=t.map((()=>""))),s.forEach(((s,a)=>{const n=i("td");t[a]&&t[a].length||(t[a]=""),n.innerHTML=t[a],n.data=t[a],e.appendChild(n)})),e}setCursor(t=!1){this.cursor&&this.cursor.classList.remove("dataTable-cursor"),t&&(t.classList.add("dataTable-cursor"),this.cursor=t)}render(t){return t}add(t){if(Array.isArray(t)){const e=this.dt;Array.isArray(t[0])?t.forEach((t=>{e.data.push(this.build(t))})):e.data.push(this.build(t)),e.data.length&&(e.hasRows=!0),this.update(),e.columns.rebuild()}}remove(t){const e=this.dt;Array.isArray(t)?(t.sort(((t,e)=>e-t)),t.forEach((t=>{e.data.splice(t,1)}))):"all"==t?e.data=[]:e.data.splice(t,1),e.data.length||(e.hasRows=!1),this.update(),e.columns.rebuild()}update(){this.dt.data.forEach(((t,e)=>{t.dataIndex=e}))}findRowIndex(t,e){return this.dt.data.findIndex((s=>s.children[t].innerText.toLowerCase().includes(String(e).toLowerCase())))}findRow(t,e){const s=this.findRowIndex(t,e);if(s<0)return{index:-1,row:null,cols:[]};const i=this.dt.data[s];return{index:s,row:i,cols:[...i.cells].map((t=>t.innerHTML))}}updateRow(t,e){const s=this.build(e);this.dt.data.splice(t,1,s),this.update(),this.dt.columns.rebuild()}}class h{constructor(t){this.dt=t}swap(t){if(t.length&&2===t.length){const e=[];this.dt.headings.forEach(((t,s)=>{e.push(s)}));const s=t[0],i=t[1],a=e[i];e[i]=e[s],e[s]=a,this.order(e)}}order(t){let e,s,i,a,n,r,o;const h=[[],[],[],[]],l=this.dt;t.forEach(((t,i)=>{n=l.headings[t],r="false"!==n.getAttribute("data-sortable"),e=n.cloneNode(!0),e.originalCellIndex=i,e.sortable=r,h[0].push(e),l.hiddenColumns.includes(t)||(s=n.cloneNode(!0),s.originalCellIndex=i,s.sortable=r,h[1].push(s))})),l.data.forEach(((e,s)=>{i=e.cloneNode(!1),a=e.cloneNode(!1),i.dataIndex=a.dataIndex=s,null!==e.searchIndex&&void 0!==e.searchIndex&&(i.searchIndex=a.searchIndex=e.searchIndex),t.forEach((t=>{o=e.cells[t].cloneNode(!0),o.data=e.cells[t].data,i.appendChild(o),l.hiddenColumns.includes(t)||(o=e.cells[t].cloneNode(!0),o.data=e.cells[t].data,a.appendChild(o))})),h[2].push(i),h[3].push(a)})),l.headings=h[0],l.activeHeadings=h[1],l.data=h[2],l.activeRows=h[3],l.update()}hide(t){if(t.length){const e=this.dt;t.forEach((t=>{e.hiddenColumns.includes(t)||e.hiddenColumns.push(t)})),this.rebuild()}}show(t){if(t.length){let e;const s=this.dt;t.forEach((t=>{e=s.hiddenColumns.indexOf(t),e>-1&&s.hiddenColumns.splice(e,1)})),this.rebuild()}}visible(t){let e;const s=this.dt;return t=t||s.headings.map((t=>t.originalCellIndex)),isNaN(t)?Array.isArray(t)&&(e=[],t.forEach((t=>{e.push(!s.hiddenColumns.includes(t))}))):e=!s.hiddenColumns.includes(t),e}add(t){let e;const s=document.createElement("th");if(!this.dt.headings.length)return this.dt.insert({headings:[t.heading],data:t.data.map((t=>[t]))}),void this.rebuild();this.dt.hiddenHeader?s.innerHTML="":t.heading.nodeName?s.appendChild(t.heading):s.innerHTML=t.heading,this.dt.headings.push(s),this.dt.data.forEach(((s,i)=>{t.data[i]&&(e=document.createElement("td"),t.data[i].nodeName?e.appendChild(t.data[i]):e.innerHTML=t.data[i],e.data=e.innerHTML,t.render&&(e.innerHTML=t.render.call(this,e.data,e,s)),s.appendChild(e))})),t.type&&s.setAttribute("data-type",t.type),t.format&&s.setAttribute("data-format",t.format),t.hasOwnProperty("sortable")&&(s.sortable=t.sortable,s.setAttribute("data-sortable",!0===t.sortable?"true":"false")),this.rebuild(),this.dt.renderHeader()}remove(t){Array.isArray(t)?(t.sort(((t,e)=>e-t)),t.forEach((t=>this.remove(t)))):(this.dt.headings.splice(t,1),this.dt.data.forEach((e=>{e.removeChild(e.cells[t])}))),this.rebuild()}filter(t,e,s,i){const a=this.dt;if(a.filterState||(a.filterState={originalData:a.data}),!a.filterState[t]){const e=[...i,()=>!0];a.filterState[t]=function(){let t=0;return()=>e[t++%e.length]}()}const n=a.filterState[t](),r=Array.from(a.filterState.originalData).filter((e=>{const s=e.cells[t],i=s.hasAttribute("data-content")?s.getAttribute("data-content"):s.innerText;return"function"==typeof n?n(i):i===n}));a.data=r,a.data.length?(this.rebuild(),a.update()):(a.clear(),a.hasRows=!1,a.setMessage(a.options.labels.noRows)),s||a.emit("datatable.sort",t,e)}sort(t,s,i){const a=this.dt;if(a.hasHeadings&&(t<0||t>a.headings.length))return!1;const n=a.options.filters&&a.options.filters[a.headings[t].textContent];if(n&&0!==n.length)return void this.filter(t,s,i,n);a.sorting=!0,i||a.emit("datatable.sorting",t,s);let o=a.data;const h=[],l=[];let d=0,c=0;const p=a.headings[t],u=[];if("date"===p.getAttribute("data-type")){let t=!1;p.hasAttribute("data-format")&&(t=p.getAttribute("data-format")),u.push(e.import("./date-ac7cc82e.js").then((({parseDate:e})=>s=>e(s,t))))}Promise.all(u).then((e=>{const n=e[0];let u,g;Array.from(o).forEach((e=>{const s=e.cells[t],i=s.hasAttribute("data-content")?s.getAttribute("data-content"):s.innerText;let a;a=n?n(i):"string"==typeof i?i.replace(/(\$|,|\s|%)/g,""):i,parseFloat(a)==a?l[c++]={value:Number(a),row:e}:h[d++]={value:"string"==typeof i?i.toLowerCase():i,row:e}})),s||(s=p.classList.contains("asc")?"desc":"asc"),"desc"==s?(u=r(h,-1),g=r(l,-1),p.classList.remove("asc"),p.classList.add("desc"),p.setAttribute("aria-sort","descending")):(u=r(l,1),g=r(h,1),p.classList.remove("desc"),p.classList.add("asc"),p.setAttribute("aria-sort","ascending")),a.lastTh&&p!=a.lastTh&&(a.lastTh.classList.remove("desc"),a.lastTh.classList.remove("asc"),a.lastTh.removeAttribute("aria-sort")),a.lastTh=p,o=u.concat(g),a.data=[];const f=[];o.forEach(((t,e)=>{a.data.push(t.row),null!==t.row.searchIndex&&void 0!==t.row.searchIndex&&f.push(e)})),a.searchData=f,this.rebuild(),a.update(),i||a.emit("datatable.sort",t,s)}))}rebuild(){let t,e,s,i;const a=this.dt,n=[];a.activeRows=[],a.activeHeadings=[],a.headings.forEach(((t,e)=>{t.originalCellIndex=e,t.sortable="false"!==t.getAttribute("data-sortable"),a.hiddenColumns.includes(e)||a.activeHeadings.push(t)})),a.data.forEach(((r,o)=>{t=r.cloneNode(!1),e=r.cloneNode(!1),t.dataIndex=e.dataIndex=o,null!==r.searchIndex&&void 0!==r.searchIndex&&(t.searchIndex=e.searchIndex=r.searchIndex),Array.from(r.cells).forEach((n=>{s=n.cloneNode(!0),s.data=n.data,t.appendChild(s),a.hiddenColumns.includes(s.cellIndex)||(i=s.cloneNode(!0),i.data=s.data,e.appendChild(i))})),n.push(t),a.activeRows.push(e)})),a.data=n,a.update()}}const l=function(t){let e=!1,s=!1;if((t=t||this.options.data).headings){e=i("thead");const s=i("tr");t.headings.forEach((t=>{const e=i("th",{html:t});s.appendChild(e)})),e.appendChild(s)}t.data&&t.data.length&&(s=i("tbody"),t.data.forEach((e=>{if(t.headings&&t.headings.length!==e.length)throw new Error("The number of rows do not match the number of headings.");const a=i("tr");e.forEach((t=>{const e=i("td",{html:t});a.appendChild(e)})),s.appendChild(a)}))),e&&(null!==this.dom.tHead&&this.dom.removeChild(this.dom.tHead),this.dom.appendChild(e)),s&&(this.dom.tBodies.length&&this.dom.removeChild(this.dom.tBodies[0]),this.dom.appendChild(s))},d={sortable:!0,searchable:!0,paging:!0,perPage:10,perPageSelect:[5,10,15,20,25],nextPrev:!0,firstLast:!1,prevText:"&lsaquo;",nextText:"&rsaquo;",firstText:"&laquo;",lastText:"&raquo;",ellipsisText:"&hellip;",ascText:"▴",descText:"▾",truncatePager:!0,pagerDelta:2,scrollY:"",fixedColumns:!0,fixedHeight:!1,header:!0,hiddenHeader:!1,footer:!1,tabIndex:!1,rowNavigation:!1,labels:{placeholder:"Search...",perPage:"{select} entries per page",noRows:"No entries found",noResults:"No results match your search query",info:"Showing {start} to {end} of {rows} entries"},layout:{top:"{select}{search}",bottom:"{info}{pager}"}};t("DataTable",class{constructor(t,e={}){const s="string"==typeof t?document.querySelector(t):t;if(this.options={...d,...e,layout:{...d.layout,...e.layout},labels:{...d.labels,...e.labels}},this.rows=new o(this),this.columns=new h(this),this.initialized=!1,this.initialLayout=s.innerHTML,this.initialSortable=this.options.sortable,this.options.tabIndex?s.tabIndex=this.options.tabIndex:this.options.rowNavigation&&-1===s.tabIndex&&(s.tabIndex=0),this.options.header||(this.options.sortable=!1),null===s.tHead&&(!this.options.data||this.options.data&&!this.options.data.headings)&&(this.options.sortable=!1),s.tBodies.length&&!s.tBodies[0].rows.length&&this.options.data&&!this.options.data.data)throw new Error("You seem to be using the data option, but you've not defined any rows.");this.dom=s,this.table=this.dom,this.listeners={onResize:t=>this.onResize(t)},this.init()}init(t){if(this.initialized||this.dom.classList.contains("dataTable-table"))return!1;Object.assign(this.options,t||{}),this.currentPage=1,this.onFirstPage=!0,this.hiddenColumns=[],this.columnRenderers=[],this.selectedColumns=[],this.render(),setTimeout((()=>{this.emit("datatable.init"),this.initialized=!0,this.options.plugins&&Object.entries(this.options.plugins).forEach((([t,e])=>{this[t]&&"function"==typeof this[t]&&(this[t]=this[t](e,{createElement:i}),e.enabled&&this[t].init&&"function"==typeof this[t].init&&this[t].init())}))}),10)}render(){let t="";if(this.options.data&&l.call(this),this.body=this.dom.tBodies[0],this.head=this.dom.tHead,this.foot=this.dom.tFoot,this.body||(this.body=i("tbody"),this.dom.appendChild(this.body)),this.hasRows=this.body.rows.length>0,!this.head){const t=i("thead"),e=i("tr");this.hasRows&&(Array.from(this.body.rows[0].cells).forEach((()=>{e.appendChild(i("th"))})),t.appendChild(e)),this.head=t,this.dom.insertBefore(this.head,this.body),this.hiddenHeader=this.options.hiddenHeader}if(this.headings=[],this.hasHeadings=this.head.rows.length>0,this.hasHeadings&&(this.header=this.head.rows[0],this.headings=[].slice.call(this.header.cells)),this.options.header||this.head&&this.dom.removeChild(this.dom.tHead),this.options.footer?this.head&&!this.foot&&(this.foot=i("tfoot",{html:this.head.innerHTML}),this.dom.appendChild(this.foot)):this.foot&&this.dom.removeChild(this.dom.tFoot),this.wrapper=i("div",{class:"dataTable-wrapper dataTable-loading"}),t+="<div class='dataTable-top'>",t+=this.options.layout.top,t+="</div>",this.options.scrollY.length?t+=`<div class='dataTable-container' style='height: ${this.options.scrollY}; overflow-Y: auto;'></div>`:t+="<div class='dataTable-container'></div>",t+="<div class='dataTable-bottom'>",t+=this.options.layout.bottom,t+="</div>",t=t.replace("{info}",this.options.paging?"<div class='dataTable-info'></div>":""),this.options.paging&&this.options.perPageSelect){let e="<div class='dataTable-dropdown'><label>";e+=this.options.labels.perPage,e+="</label></div>";const s=i("select",{class:"dataTable-selector"});this.options.perPageSelect.forEach((t=>{const e=t===this.options.perPage,i=new Option(t,t,e,e);s.add(i)})),e=e.replace("{select}",s.outerHTML),t=t.replace("{select}",e)}else t=t.replace("{select}","");if(this.options.searchable){const e=`<div class='dataTable-search'><input class='dataTable-input' placeholder='${this.options.labels.placeholder}' type='text'></div>`;t=t.replace("{search}",e)}else t=t.replace("{search}","");this.hasHeadings&&this.renderHeader(),this.dom.classList.add("dataTable-table");const e=i("nav",{class:"dataTable-pagination"}),s=i("ul",{class:"dataTable-pagination-list"});e.appendChild(s),t=t.replace(/\{pager\}/g,e.outerHTML),this.wrapper.innerHTML=t,this.container=this.wrapper.querySelector(".dataTable-container"),this.pagers=this.wrapper.querySelectorAll(".dataTable-pagination-list"),this.label=this.wrapper.querySelector(".dataTable-info"),this.dom.parentNode.replaceChild(this.wrapper,this.dom),this.container.appendChild(this.dom),this.rect=this.dom.getBoundingClientRect(),this.data=Array.from(this.body.rows),this.activeRows=this.data.slice(),this.activeHeadings=this.headings.slice(),this.update(),this.setColumns(),this.fixHeight(),this.fixColumns(),this.options.header||this.wrapper.classList.add("no-header"),this.options.footer||this.wrapper.classList.add("no-footer"),this.options.sortable&&this.wrapper.classList.add("sortable"),this.options.searchable&&this.wrapper.classList.add("searchable"),this.options.fixedHeight&&this.wrapper.classList.add("fixed-height"),this.options.fixedColumns&&this.wrapper.classList.add("fixed-columns"),this.bindEvents()}renderPage(t=!1){if(this.hasHeadings&&(a(this.header),this.activeHeadings.forEach((t=>this.header.appendChild(t)))),this.hasRows&&this.totalPages){this.currentPage>this.totalPages&&(this.currentPage=1);const t=this.currentPage-1,e=document.createDocumentFragment();this.pages[t].forEach((t=>e.appendChild(this.rows.render(t)))),this.clear(e),this.onFirstPage=1===this.currentPage,this.onLastPage=this.currentPage===this.lastPage}else this.setMessage(this.options.labels.noRows);let e,s=0,i=0,n=0;if(this.totalPages&&(s=this.currentPage-1,i=s*this.options.perPage,n=i+this.pages[s].length,i+=1,e=this.searching?this.searchData.length:this.data.length),this.label&&this.options.labels.info.length){const t=this.options.labels.info.replace("{start}",i).replace("{end}",n).replace("{page}",this.currentPage).replace("{pages}",this.totalPages).replace("{rows}",e);this.label.innerHTML=e?t:""}if(1==this.currentPage&&this.fixHeight(),this.options.rowNavigation&&(!this.rows.cursor||!this.pages[this.currentPage-1].includes(this.rows.cursor))){const e=this.pages[this.currentPage-1];t?this.rows.setCursor(e[e.length-1]):this.rows.setCursor(e[0])}}renderPager(){if(a(this.pagers),this.totalPages>1){const t="pager",e=document.createDocumentFragment(),s=this.onFirstPage?1:this.currentPage-1,a=this.onLastPage?this.totalPages:this.currentPage+1;this.options.firstLast&&e.appendChild(n(t,1,this.options.firstText)),this.options.nextPrev&&!this.onFirstPage&&e.appendChild(n(t,s,this.options.prevText));let r=this.links;this.options.truncatePager&&(r=((t,e,s,a,n)=>{let r;const o=2*(a=a||2);let h=e-a,l=e+a;const d=[],c=[];e<4-a+o?l=3+o:e>s-(3-a+o)&&(h=s-(2+o));for(let e=1;e<=s;e++)if(1==e||e==s||e>=h&&e<=l){const s=t[e-1];s.classList.remove("active"),d.push(s)}return d.forEach((e=>{const s=e.children[0].getAttribute("data-page");if(r){const e=r.children[0].getAttribute("data-page");if(s-e==2)c.push(t[e]);else if(s-e!=1){const t=i("li",{class:"ellipsis",html:`<a href="#">${n}</a>`});c.push(t)}}c.push(e),r=e})),c})(this.links,this.currentPage,this.pages.length,this.options.pagerDelta,this.options.ellipsisText)),this.links[this.currentPage-1].classList.add("active"),r.forEach((t=>{t.classList.remove("active"),e.appendChild(t)})),this.links[this.currentPage-1].classList.add("active"),this.options.nextPrev&&!this.onLastPage&&e.appendChild(n(t,a,this.options.nextText)),this.options.firstLast&&e.appendChild(n(t,this.totalPages,this.options.lastText)),this.pagers.forEach((t=>{t.appendChild(e.cloneNode(!0))}))}}renderHeader(){this.labels=[],this.headings&&this.headings.length&&this.headings.forEach(((t,e)=>{if(this.labels[e]=t.textContent,t.firstElementChild&&t.firstElementChild.classList.contains("dataTable-sorter")&&(t.innerHTML=t.firstElementChild.innerHTML),t.sortable="false"!==t.getAttribute("data-sortable"),t.originalCellIndex=e,this.options.sortable&&t.sortable){const e=i("a",{href:"#",class:"dataTable-sorter",html:t.innerHTML});t.innerHTML="",t.setAttribute("data-sortable",""),t.appendChild(e)}})),this.fixColumns()}bindEvents(){if(this.options.perPageSelect){const t=this.wrapper.querySelector(".dataTable-selector");t&&t.addEventListener("change",(()=>{this.options.perPage=parseInt(t.value,10),this.update(),this.fixHeight(),this.emit("datatable.perpage",this.options.perPage)}),!1)}this.options.searchable&&(this.input=this.wrapper.querySelector(".dataTable-input"),this.input&&this.input.addEventListener("keyup",(()=>this.search(this.input.value)),!1)),this.wrapper.addEventListener("click",(t=>{const e=t.target.closest("a");e&&"a"===e.nodeName.toLowerCase()&&(e.hasAttribute("data-page")?(this.page(e.getAttribute("data-page")),t.preventDefault()):this.options.sortable&&e.classList.contains("dataTable-sorter")&&"false"!=e.parentNode.getAttribute("data-sortable")&&(this.columns.sort(this.headings.indexOf(e.parentNode)),t.preventDefault()))}),!1),this.options.rowNavigation?(this.table.addEventListener("keydown",(t=>{38===t.keyCode?this.rows.cursor.previousElementSibling?(this.rows.setCursor(this.rows.cursor.previousElementSibling),t.preventDefault(),t.stopPropagation()):this.onFirstPage||this.page(this.currentPage-1,!0):40===t.keyCode?this.rows.cursor.nextElementSibling?(this.rows.setCursor(this.rows.cursor.nextElementSibling),t.preventDefault(),t.stopPropagation()):this.onLastPage||this.page(this.currentPage+1):[13,32].includes(t.keyCode)&&this.emit("datatable.selectrow",this.rows.cursor,t)})),this.body.addEventListener("mousedown",(t=>{if(this.table.matches(":focus")){const e=Array.from(this.body.rows).find((e=>e.contains(t.target)));this.emit("datatable.selectrow",e,t)}}))):this.body.addEventListener("mousedown",(t=>{const e=Array.from(this.body.rows).find((e=>e.contains(t.target)));this.emit("datatable.selectrow",e,t)})),window.addEventListener("resize",this.listeners.onResize)}onResize(){this.rect=this.container.getBoundingClientRect(),this.rect.width&&this.fixColumns()}setColumns(t){t||this.data.forEach((t=>{Array.from(t.cells).forEach((t=>{t.data=t.innerHTML}))})),this.options.columns&&this.headings.length&&this.options.columns.forEach((t=>{Array.isArray(t.select)||(t.select=[t.select]),t.hasOwnProperty("render")&&"function"==typeof t.render&&(this.selectedColumns=this.selectedColumns.concat(t.select),this.columnRenderers.push({columns:t.select,renderer:t.render})),t.select.forEach((e=>{const s=this.headings[e];s&&(t.type&&s.setAttribute("data-type",t.type),t.format&&s.setAttribute("data-format",t.format),t.hasOwnProperty("sortable")&&s.setAttribute("data-sortable",t.sortable),t.hasOwnProperty("hidden")&&!1!==t.hidden&&this.columns.hide([e]),t.hasOwnProperty("sort")&&1===t.select.length&&this.columns.sort(t.select[0],t.sort,!0))}))})),this.hasRows&&(this.data.forEach(((t,e)=>{t.dataIndex=e,Array.from(t.cells).forEach((t=>{t.data=t.innerHTML}))})),this.selectedColumns.length&&this.data.forEach((t=>{Array.from(t.cells).forEach(((e,s)=>{this.selectedColumns.includes(s)&&this.columnRenderers.forEach((i=>{i.columns.includes(s)&&(e.innerHTML=i.renderer.call(this,e.data,e,t))}))}))})),this.columns.rebuild()),this.renderHeader()}destroy(){this.dom.innerHTML=this.initialLayout,this.dom.classList.remove("dataTable-table"),this.wrapper.parentNode.replaceChild(this.dom,this.wrapper),this.initialized=!1,window.removeEventListener("resize",this.listeners.onResize)}update(){this.wrapper.classList.remove("dataTable-empty"),this.paginate(),this.renderPage(),this.links=[];let t=this.pages.length;for(;t--;){const e=t+1;this.links[t]=n(0===t?"active":"",e,e)}this.sorting=!1,this.renderPager(),this.rows.update(),this.emit("datatable.update")}paginate(){let t=this.activeRows;return this.searching&&(t=[],this.searchData.forEach((e=>t.push(this.activeRows[e])))),this.options.paging?this.pages=t.map(((e,s)=>s%this.options.perPage==0?t.slice(s,s+this.options.perPage):null)).filter((t=>t)):this.pages=[t],this.totalPages=this.lastPage=this.pages.length,this.totalPages}fixColumns(){if((this.options.scrollY.length||this.options.fixedColumns)&&this.activeHeadings&&this.activeHeadings.length){let t,e=!1;if(this.columnWidths=[],this.dom.tHead){this.options.scrollY.length&&(e=i("thead"),e.appendChild(i("tr")),e.style.height="0px",this.headerTable&&(this.dom.tHead=this.headerTable.tHead)),this.activeHeadings.forEach((t=>{t.style.width=""}));const t=this.activeHeadings.reduce(((t,e)=>t+e.offsetWidth),0);if(this.activeHeadings.forEach(((s,a)=>{const n=s.offsetWidth,r=n/t*100;if(s.style.width=`${r}%`,this.columnWidths[a]=n,this.options.scrollY.length){const t=i("th");e.firstElementChild.appendChild(t),t.style.width=`${r}%`,t.style.paddingTop="0",t.style.paddingBottom="0",t.style.border="0"}})),this.options.scrollY.length){const t=this.dom.parentElement;if(!this.headerTable){this.headerTable=i("table",{class:"dataTable-table"});const e=i("div",{class:"dataTable-headercontainer"});e.appendChild(this.headerTable),t.parentElement.insertBefore(e,t)}const s=this.dom.tHead;this.dom.replaceChild(e,s),this.headerTable.tHead=s,this.headerTable.parentElement.style.paddingRight=`${this.headerTable.clientWidth-this.dom.clientWidth+parseInt(this.headerTable.parentElement.style.paddingRight||"0",10)}px`,t.scrollHeight>t.clientHeight&&(t.style.overflowY="scroll")}}else{t=[],e=i("thead");const s=i("tr");Array.from(this.dom.tBodies[0].rows[0].cells).forEach((()=>{const e=i("th");s.appendChild(e),t.push(e)})),e.appendChild(s),this.dom.insertBefore(e,this.body);const a=[];t.forEach(((t,e)=>{const s=t.offsetWidth,i=s/this.rect.width*100;a.push(i),this.columnWidths[e]=s})),this.data.forEach((t=>{Array.from(t.cells).forEach(((t,e)=>{this.columns.visible(t.cellIndex)&&(t.style.width=`${a[e]}%`)}))})),this.dom.removeChild(e)}}}fixHeight(){this.options.fixedHeight&&(this.container.style.height=null,this.rect=this.container.getBoundingClientRect(),this.container.style.height=`${this.rect.height}px`)}search(t){return!!this.hasRows&&(t=t.toLowerCase(),this.currentPage=1,this.searching=!0,this.searchData=[],t.length?(this.clear(),this.data.forEach(((e,s)=>{const i=this.searchData.includes(e);t.split(" ").reduce(((t,s)=>{let i=!1,a=null,n=null;for(let t=0;t<e.cells.length;t++)if(a=e.cells[t],n=a.hasAttribute("data-content")?a.getAttribute("data-content"):a.textContent,n.toLowerCase().includes(s)&&this.columns.visible(a.cellIndex)){i=!0;break}return t&&i}),!0)&&!i?(e.searchIndex=s,this.searchData.push(s)):e.searchIndex=null})),this.wrapper.classList.add("search-results"),this.searchData.length?this.update():(this.wrapper.classList.remove("search-results"),this.setMessage(this.options.labels.noResults)),void this.emit("datatable.search",t,this.searchData)):(this.searching=!1,this.update(),this.emit("datatable.search",t,this.searchData),this.wrapper.classList.remove("search-results"),!1))}page(t,e=!1){return t!=this.currentPage&&(isNaN(t)||(this.currentPage=parseInt(t,10)),!(t>this.pages.length||t<0)&&(this.renderPage(e),this.renderPager(),void this.emit("datatable.page",t)))}sortColumn(t,e){this.columns.sort(t,e)}insert(t){let e=[];if(s(t)){if(t.headings&&!this.hasHeadings&&!this.hasRows){const e=i("tr");t.headings.forEach((t=>{const s=i("th",{html:t});e.appendChild(s)})),this.head.appendChild(e),this.header=e,this.headings=[].slice.call(e.cells),this.hasHeadings=!0,this.options.sortable=this.initialSortable,this.renderHeader(),this.activeHeadings=this.headings.slice()}t.data&&Array.isArray(t.data)&&(e=t.data)}else Array.isArray(t)&&t.forEach((t=>{const s=[];Object.entries(t).forEach((([t,e])=>{const i=this.labels.indexOf(t);i>-1&&(s[i]=e)})),e.push(s)}));e.length&&(this.rows.add(e),this.hasRows=!0),this.update(),this.setColumns(),this.fixColumns()}refresh(){this.options.searchable&&(this.input.value="",this.searching=!1),this.currentPage=1,this.onFirstPage=!0,this.update(),this.emit("datatable.refresh")}clear(t){this.body&&a(this.body);let e=this.body;if(this.body||(e=this.dom),t){if("string"==typeof t){document.createDocumentFragment().innerHTML=t}e.appendChild(t)}}export(t){if(!this.hasHeadings&&!this.hasRows)return!1;const e=this.activeHeadings;let i=[];const a=[];let n,r,o,h;if(!s(t))return!1;const l={download:!0,skipColumn:[],lineDelimiter:"\n",columnDelimiter:",",tableName:"myTable",replacer:null,space:4,...t};if(l.type){if("txt"!==l.type&&"csv"!==l.type||(i[0]=this.header),l.selection)if(isNaN(l.selection)){if(Array.isArray(l.selection))for(n=0;n<l.selection.length;n++)i=i.concat(this.pages[l.selection[n]-1])}else i=i.concat(this.pages[l.selection-1]);else i=i.concat(this.activeRows);if(i.length){if("txt"===l.type||"csv"===l.type){for(o="",n=0;n<i.length;n++){for(r=0;r<i[n].cells.length;r++)if(!l.skipColumn.includes(e[r].originalCellIndex)&&this.columns.visible(e[r].originalCellIndex)){let t=i[n].cells[r].textContent;t=t.trim(),t=t.replace(/\s{2,}/g," "),t=t.replace(/\n/g,"  "),t=t.replace(/"/g,'""'),t=t.replace(/#/g,"%23"),t.includes(",")&&(t=`"${t}"`),o+=t+l.columnDelimiter}o=o.trim().substring(0,o.length-1),o+=l.lineDelimiter}o=o.trim().substring(0,o.length-1),l.download&&(o=`data:text/csv;charset=utf-8,${o}`)}else if("sql"===l.type){for(o=`INSERT INTO \`${l.tableName}\` (`,n=0;n<e.length;n++)!l.skipColumn.includes(e[n].originalCellIndex)&&this.columns.visible(e[n].originalCellIndex)&&(o+=`\`${e[n].textContent}\`,`);for(o=o.trim().substring(0,o.length-1),o+=") VALUES ",n=0;n<i.length;n++){for(o+="(",r=0;r<i[n].cells.length;r++)!l.skipColumn.includes(e[r].originalCellIndex)&&this.columns.visible(e[r].originalCellIndex)&&(o+=`"${i[n].cells[r].textContent}",`);o=o.trim().substring(0,o.length-1),o+="),"}o=o.trim().substring(0,o.length-1),o+=";",l.download&&(o=`data:application/sql;charset=utf-8,${o}`)}else if("json"===l.type){for(r=0;r<i.length;r++)for(a[r]=a[r]||{},n=0;n<e.length;n++)!l.skipColumn.includes(e[n].originalCellIndex)&&this.columns.visible(e[n].originalCellIndex)&&(a[r][e[n].textContent]=i[r].cells[n].textContent);o=JSON.stringify(a,l.replacer,l.space),l.download&&(o=`data:application/json;charset=utf-8,${o}`)}return l.download&&(l.filename=l.filename||"datatable_export",l.filename+=`.${l.type}`,o=encodeURI(o),h=document.createElement("a"),h.href=o,h.download=l.filename,document.body.appendChild(h),h.click(),document.body.removeChild(h)),o}}return!1}import(t){let e=!1;if(!s(t))return!1;const i={lineDelimiter:"\n",columnDelimiter:",",removeDoubleQuotes:!1,...t};if(i.data.length||s(i.data)){if("csv"===i.type){e={data:[]};const t=i.data.split(i.lineDelimiter);t.length&&(i.headings&&(e.headings=t[0].split(i.columnDelimiter),i.removeDoubleQuotes&&(e.headings=e.headings.map((t=>t.trim().replace(/(^"|"$)/g,"")))),t.shift()),t.forEach(((t,s)=>{e.data[s]=[];const a=t.split(i.columnDelimiter);a.length&&a.forEach((t=>{i.removeDoubleQuotes&&(t=t.trim().replace(/(^"|"$)/g,"")),e.data[s].push(t)}))})))}else if("json"===i.type){const t=(t=>{let e=!1;try{e=JSON.parse(t)}catch(t){return!1}return!(null===e||!Array.isArray(e)&&!s(e))&&e})(i.data);t&&(e={headings:[],data:[]},t.forEach(((t,s)=>{e.data[s]=[],Object.entries(t).forEach((([t,i])=>{e.headings.includes(t)||e.headings.push(t),e.data[s].push(i)}))})))}s(i.data)&&(e=i.data),e&&this.insert(e)}return!1}print(){const t=this.activeHeadings,e=this.activeRows,s=i("table"),a=i("thead"),n=i("tbody"),r=i("tr");t.forEach((t=>{r.appendChild(i("th",{html:t.textContent}))})),a.appendChild(r),e.forEach((t=>{const e=i("tr");Array.from(t.cells).forEach((t=>{e.appendChild(i("td",{html:t.textContent}))})),n.appendChild(e)})),s.appendChild(a),s.appendChild(n);const o=window.open();o.document.body.appendChild(s),o.print()}setMessage(t){let e=1;this.hasRows?e=this.data[0].cells.length:this.activeHeadings.length&&(e=this.activeHeadings.length),this.wrapper.classList.add("dataTable-empty"),this.label&&(this.label.innerHTML=""),this.totalPages=0,this.renderPager(),this.clear(i("tr",{html:`<td class="dataTables-empty" colspan="${e}">${t}</td>`}))}on(t,e){this.events=this.events||{},this.events[t]=this.events[t]||[],this.events[t].push(e)}off(t,e){this.events=this.events||{},t in this.events!=!1&&this.events[t].splice(this.events[t].indexOf(e),1)}emit(t){if(this.events=this.events||{},t in this.events!=!1)for(let e=0;e<this.events[t].length;e++)this.events[t][e].apply(this,Array.prototype.slice.call(arguments,1))}})}}}));
//# sourceMappingURL=index.js.ffac5924adfb.map