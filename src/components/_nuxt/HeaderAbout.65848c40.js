import{_ as l,o as r,c as p,b as e,e as n,w as h,f as u,h as m,p as v,k as f}from"./entry.e4c421d5.js";import{a,b as k}from"./OffCanvasMobileMenu.0c9baa2b.js";const g={components:{Navigation:a},data(){return{isSticky:!1}},mounted(){window.addEventListener("scroll",()=>{window.scrollY>=200?this.isSticky=!0:this.isSticky=!1})}},t=o=>(v("data-v-799e889e"),o=o(),f(),o),b={class:"container-fluid"},x={class:"row"},w={class:"col-12"},S={class:"header__wrapper mr--0"},y={class:"header-left flex-20"},$={class:"logo"},B=t(()=>e("img",{src:k,alt:"Brook Logo"},null,-1)),C={class:"mainmenu-wrapper d-none d-lg-block"},I={class:"header-right"},N={class:"popup-search-wrap"},E=t(()=>e("i",{class:"fa fa-search"},null,-1)),L=[E],P=t(()=>e("div",null,[e("i")],-1)),V=[P];function z(o,s,A,F,i,H){const c=m,d=a;return r(),p("header",{class:u(["br_header header-default black-logo--version haeder-fixed-width headroom--sticky header-mega-menu clearfix",{"vue-fixed-header--isFixed":i.isSticky}])},[e("div",b,[e("div",x,[e("div",w,[e("div",S,[e("div",y,[e("div",$,[n(c,{to:"/"},{default:h(()=>[B]),_:1})])]),e("div",C,[n(d)]),e("div",I,[e("div",N,[e("button",{class:"btn-search-click",onClick:s[0]||(s[0]=_=>o.$emit("toggleSearch"))},L)]),e("div",{class:"manu-hamber popup-mobile-click d-block d-lg-none black-version d-block d-xl-none",onClick:s[1]||(s[1]=_=>o.$emit("togglenav"))},V)])])])])])],2)}const q=l(g,[["render",z],["__scopeId","data-v-799e889e"]]);export{q as default};