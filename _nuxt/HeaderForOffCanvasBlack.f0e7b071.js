import{_ as d,o as l,c as r,b as e,e as _,w as h,f as p,h as u,p as m,k as f}from"./entry.e4c421d5.js";import{a as v,b as k}from"./OffCanvasMobileMenu.0c9baa2b.js";const g={components:{Navigation:v},props:["addClass"],data(){return{isSticky:!1}},mounted(){window.addEventListener("scroll",()=>{window.scrollY>=200?this.isSticky=!0:this.isSticky=!1})}},t=s=>(m("data-v-c07455cf"),s=s(),f(),s),b={class:"container-fluid"},x={class:"row"},w={class:"col-12"},C={class:"header__wrapper"},S={class:"header-left"},$={class:"logo"},y=t(()=>e("img",{src:k,alt:"Brook Logo"},null,-1)),B={class:"header-right"},I={class:"popup-search-wrap"},F=t(()=>e("i",{class:"fa fa-search"},null,-1)),N=[F],E=t(()=>e("div",null,[e("i")],-1)),L=[E],P=t(()=>e("div",null,[e("i")],-1)),V=[P];function z(s,o,i,H,n,M){const c=u;return l(),r("header",{class:p(["br_header header-default header-bar position-from--top black-logo--version haeder-fixed-width haeder-fixed-150 headroom--sticky header-mega-menu clearfix",{"vue-fixed-header--isFixed":n.isSticky,addClass:i.addClass}])},[e("div",b,[e("div",x,[e("div",w,[e("div",C,[e("div",S,[e("div",$,[_(c,{to:""},{default:h(()=>[y]),_:1})])]),e("div",B,[e("div",I,[e("button",{class:"btn-search-click",onClick:o[0]||(o[0]=a=>s.$emit("toggleSearch"))},N)]),e("div",{class:"manu-hamber hamberger-trigger black-version d-none d-xl-block",onClick:o[1]||(o[1]=a=>s.$emit("toggleFullpageMenu"))},L),e("div",{class:"manu-hamber popup-mobile-click d-block black-version d-block d-xl-none",onClick:o[2]||(o[2]=a=>s.$emit("togglenav"))},V)])])])])])],2)}const j=d(g,[["render",z],["__scopeId","data-v-c07455cf"]]);export{j as default};
