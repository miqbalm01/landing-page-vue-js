(window.webpackJsonp=window.webpackJsonp||[]).push([[76,21,30,67],{322:function(t,e,l){"use strict";l.r(e);var n={},r=l(12),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("footer",{staticClass:"footer-area bg-gray pt-100 pb-70"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-2 col-sm-4"},[l("div",{staticClass:"copyright mb-30"},[l("div",{staticClass:"footer-logo"},[l("n-link",{attrs:{to:"/"}},[l("img",{attrs:{src:"/img/logo/logo.png",alt:"logo"}})])],1),t._v(" "),t._m(0)])]),t._v(" "),l("div",{staticClass:"col-lg-2 col-sm-4"},[l("div",{staticClass:"footer-widget mb-30 ml-30"},[t._m(1),t._v(" "),l("div",{staticClass:"footer-list"},[l("ul",[l("li",[l("n-link",{attrs:{to:"/about"}},[t._v("About us")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"/shop"}},[t._v("Store location")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"/contact"}},[t._v("Orders tracking")])],1)])])])]),t._v(" "),l("div",{staticClass:"col-lg-2 col-sm-4"},[l("div",{staticClass:"footer-widget mb-30 ml-50"},[t._m(2),t._v(" "),l("div",{staticClass:"footer-list"},[l("ul",[l("li",[l("n-link",{attrs:{to:"/about"}},[t._v("Returns")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"/about"}},[t._v("Support Policy")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"/about"}},[t._v("Size guide")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"/about"}},[t._v("FAQs")])],1)])])])]),t._v(" "),t._m(3),t._v(" "),t._m(4)])])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("p",[t._v("© 2023 "),l("a",{attrs:{href:"#",target:"_blank"}},[t._v("Flone")]),t._v("."),l("br"),t._v(" All Rights Reserved")])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"footer-title"},[l("h3",[t._v("ABOUT US")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"footer-title"},[l("h3",[t._v("USEFUL LINKS")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-lg-2 col-sm-6"},[l("div",{staticClass:"footer-widget mb-30 ml-75"},[l("div",{staticClass:"footer-title"},[l("h3",[t._v("FOLLOW US")])]),t._v(" "),l("div",{staticClass:"footer-list"},[l("ul",[l("li",[l("a",{attrs:{href:"https://www.facebook.com/",target:"_blank"}},[t._v("Facebook")])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://twitter.com/",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://www.instagram.com/",target:"_blank"}},[t._v("Instagram")])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://www.youtube.com/",target:"_blank"}},[t._v("Youtube")])])])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-lg-4 col-sm-6"},[l("div",{staticClass:"footer-widget mb-30 ml-70"},[l("div",{staticClass:"footer-title"},[l("h3",[t._v("SUBSCRIBE")])]),t._v(" "),l("div",{staticClass:"subscribe-style"},[l("p",[t._v("Get E-mail updates about our latest shop and special offers.")]),t._v(" "),l("div",{staticClass:"subscribe-form"},[l("form",{staticClass:"mc-form"},[l("input",{staticClass:"email",attrs:{type:"email",required:"",placeholder:"Enter your email here..",name:"email"}}),t._v(" "),l("button",{staticClass:"button",attrs:{name:"subscribe"}},[t._v("Subscribe")])])])])])])}],!1,null,null,null);e.default=component.exports},324:function(t,e,l){"use strict";l.r(e);l(10),l(28),l(29);var n={components:{Navigation:function(){return Promise.resolve().then(l.bind(null,211))},MiniCart:function(){return Promise.resolve().then(l.bind(null,209))}},props:["containerClass"],computed:{cartItemCount:function(){return this.$store.getters.cartItemCount},wishlistItemCount:function(){return this.$store.getters.wishlistItemCount},compareItemCount:function(){return this.$store.getters.compareItemCount}},data:function(){return{isSticky:!1,isOpenSearch:!1,isOpenAccountSettings:!1,openCart:!1,navOpen:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))}},r=l(12),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("header",{staticClass:"header-area"},[l("div",{staticClass:"header-top-area header-padding-2 d-none d-lg-block"},[l("div",{class:t.containerClass},[t._m(0)])]),t._v(" "),l("div",{staticClass:"header-padding-1 sticky-bar header-res-padding clearfix",class:{"is-sticky":t.isSticky}},[l("div",{class:t.containerClass},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-2 col-md-6 col-4"},[l("div",{staticClass:"logo"},[l("n-link",{attrs:{to:"/"}},[l("img",{attrs:{src:"/img/logo/logo.png",alt:"flone logo"}})])],1)]),t._v(" "),l("div",{staticClass:"col-lg-8 d-none d-lg-block"},[l("div",{staticClass:"main-menu"},[l("nav",[l("Navigation")],1)])]),t._v(" "),l("div",{staticClass:"col-lg-2 col-md-6 col-8"},[l("div",{staticClass:"header-right-wrap"},[l("div",{staticClass:"same-style header-search d-none d-lg-block"},[l("button",{staticClass:"search-active",on:{click:function(e){t.isOpenSearch=!t.isOpenSearch}}},[l("i",{staticClass:"pe-7s-search"})]),t._v(" "),l("div",{staticClass:"search-content",class:{active:t.isOpenSearch}},[t._m(1)])]),t._v(" "),l("div",{staticClass:"same-style account-setting d-none d-lg-block"},[l("button",{staticClass:"account-setting-active",on:{click:function(e){t.isOpenAccountSettings=!t.isOpenAccountSettings}}},[l("i",{staticClass:"pe-7s-user-female"})]),t._v(" "),l("div",{staticClass:"account-dropdown",class:{active:t.isOpenAccountSettings}},[l("ul",[l("li",[l("n-link",{attrs:{to:"/login-register"}},[t._v("Login")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"/login-register"}},[t._v("Register")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"/my-account"}},[t._v("my account")])],1)])])]),t._v(" "),l("div",{staticClass:"same-style header-compare"},[l("n-link",{attrs:{to:"/compare"}},[l("i",{staticClass:"pe-7s-shuffle"})]),t._v(" "),l("span",{staticClass:"count-style"},[t._v(t._s(t.compareItemCount))])],1),t._v(" "),l("div",{staticClass:"same-style header-wishlist"},[l("n-link",{attrs:{to:"/wishlist"}},[l("i",{staticClass:"pe-7s-like"})]),t._v(" "),l("span",{staticClass:"count-style"},[t._v(t._s(t.wishlistItemCount))])],1),t._v(" "),l("div",{staticClass:"same-style cart-wrap"},[l("button",{staticClass:"icon-cart",on:{click:function(e){t.openCart=!t.openCart}}},[l("i",{staticClass:"pe-7s-shopbag"}),t._v(" "),l("span",{staticClass:"count-style"},[t._v(t._s(t.cartItemCount))])]),t._v(" "),l("MiniCart",{attrs:{miniCart:{visible:t.openCart}},on:{minicartClose:function(e){t.openCart=!t.openCart}}})],1),t._v(" "),l("div",{staticClass:"same-style mobile-menu-toggler d-block d-lg-none"},[l("button",{staticClass:"mobile-aside-button",on:{click:function(e){t.navOpen=!t.navOpen}}},[l("i",{staticClass:"pe-7s-menu"})])])])])])])])]),t._v(" "),l("OffCanvasMobileMenu",{class:{"show-mobile-menu":t.navOpen},on:{toggleAsideMenu:function(e){t.navOpen=!t.navOpen}}})],1)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"header-top-inner"},[l("div",{staticClass:"language-currency-wrap"},[l("div",{staticClass:"same-language-currency language-style"},[l("select",{attrs:{name:"language"}},[l("option",{attrs:{value:"english"}},[t._v("English")]),t._v(" "),l("option",{attrs:{value:"hindi"}},[t._v("Hindi")]),t._v(" "),l("option",{attrs:{value:"spanish"}},[t._v("Spanish")])])]),t._v(" "),l("div",{staticClass:"same-language-currency use-style"},[l("select",{attrs:{name:"currency"}},[l("option",{attrs:{value:"usd"}},[t._v("USD")]),t._v(" "),l("option",{attrs:{value:"eur"}},[t._v("EUR")]),t._v(" "),l("option",{attrs:{value:"rup"}},[t._v("Rup")])])]),t._v(" "),l("div",{staticClass:"same-language-currency"},[l("p",[t._v("Call: "),l("a",{attrs:{href:"callto:3965410"}},[t._v("3965410")])])])]),t._v(" "),l("div",{staticClass:"header-offer"},[l("p",[t._v("Free delivery on order over "),l("span",[t._v("$200")])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("form",[l("input",{attrs:{type:"text",placeholder:"Search"}}),t._v(" "),l("button",{staticClass:"button-search"},[l("i",{staticClass:"pe-7s-search"})])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:l(211).default,MiniCart:l(209).default,OffCanvasMobileMenu:l(210).default})},326:function(t,e,l){"use strict";l.r(e);var n={props:["pageTitle"]},r=l(12),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"breadcrumb-area pt-35 pb-35 bg-gray-3"},[l("div",{staticClass:"container"},[l("div",{staticClass:"breadcrumb-content text-center"},[l("ul",[l("li",[l("n-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),l("li",{staticClass:"active"},[t._v(t._s(t.pageTitle))])])])])])}),[],!1,null,null,null);e.default=component.exports},404:function(t,e,l){"use strict";l.r(e);l(10),l(28),l(29);var n={components:{HeaderWithTopbar:function(){return Promise.resolve().then(l.bind(null,324))},Breadcrumb:function(){return Promise.resolve().then(l.bind(null,326))},TheFooter:function(){return Promise.resolve().then(l.bind(null,322))}},computed:{products:function(){return this.$store.getters.getCart},total:function(){return this.$store.getters.getTotal}},head:function(){return{title:"Checkout"}}},r=l(12),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"cart-page-wrapper"},[l("HeaderWithTopbar",{attrs:{containerClass:"container"}}),t._v(" "),l("Breadcrumb",{attrs:{pageTitle:"checkout"}}),t._v(" "),l("div",{staticClass:"checkout-area pt-95 pb-100"},[l("div",{staticClass:"container"},[t.products.length>0?l("div",{staticClass:"row"},[t._m(0),t._v(" "),l("div",{staticClass:"col-lg-5"},[l("div",{staticClass:"your-order-area"},[l("h3",[t._v("Your order")]),t._v(" "),l("div",{staticClass:"your-order-wrap gray-bg-4"},[l("div",{staticClass:"your-order-product-info"},[t._m(1),t._v(" "),l("div",{staticClass:"your-order-middle"},[l("ul",t._l(t.products,(function(e,n){return l("li",{key:n},[l("span",{staticClass:"order-middle-left"},[t._v(t._s(e.title)+"  X  "+t._s(e.cartQuantity))]),t._v(" "),l("span",{staticClass:"order-price"},[t._v("$"+t._s(e.total.toFixed(2)))])])})),0)]),t._v(" "),t._m(2),t._v(" "),l("div",{staticClass:"your-order-total"},[l("ul",[l("li",{staticClass:"order-total"},[t._v("Total")]),t._v(" "),l("li",[t._v("$"+t._s(t.total.toFixed(2)))])])])])]),t._v(" "),t._m(3)])])]):l("div",{staticClass:"row"},[l("div",{staticClass:"col-12"},[l("div",{staticClass:"empty-cart text-center"},[t._m(4),t._v(" "),l("h4",[t._v("No items found in cart to checkout")]),t._v(" "),l("n-link",{staticClass:"empty-cart__button",attrs:{to:"/shop"}},[t._v("Shop Now")])],1)])])])]),t._v(" "),l("TheFooter")],1)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-lg-7"},[l("div",{staticClass:"billing-info-wrap"},[l("h3",[t._v("Billing Details")]),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-6 col-md-6"},[l("div",{staticClass:"billing-info mb-20"},[l("label",[t._v("First Name")]),t._v(" "),l("input",{attrs:{type:"text"}})])]),t._v(" "),l("div",{staticClass:"col-lg-6 col-md-6"},[l("div",{staticClass:"billing-info mb-20"},[l("label",[t._v("Last Name")]),t._v(" "),l("input",{attrs:{type:"text"}})])]),t._v(" "),l("div",{staticClass:"col-lg-12"},[l("div",{staticClass:"billing-info mb-20"},[l("label",[t._v("Company Name")]),t._v(" "),l("input",{attrs:{type:"text"}})])]),t._v(" "),l("div",{staticClass:"col-lg-12"},[l("div",{staticClass:"billing-select mb-20"},[l("label",[t._v("Country")]),t._v(" "),l("select",[l("option",[t._v("Select a country")]),t._v(" "),l("option",[t._v("Azerbaijan")]),t._v(" "),l("option",[t._v("Bahamas")]),t._v(" "),l("option",[t._v("Bahrain")]),t._v(" "),l("option",[t._v("Bangladesh")]),t._v(" "),l("option",[t._v("Barbados")])])])]),t._v(" "),l("div",{staticClass:"col-lg-12"},[l("div",{staticClass:"billing-info mb-20"},[l("label",[t._v("Street Address")]),t._v(" "),l("input",{staticClass:"billing-address",attrs:{placeholder:"House number and street name",type:"text"}}),t._v(" "),l("input",{attrs:{placeholder:"Apartment, suite, unit etc.",type:"text"}})])]),t._v(" "),l("div",{staticClass:"col-lg-12"},[l("div",{staticClass:"billing-info mb-20"},[l("label",[t._v("Town / City")]),t._v(" "),l("input",{attrs:{type:"text"}})])]),t._v(" "),l("div",{staticClass:"col-lg-6 col-md-6"},[l("div",{staticClass:"billing-info mb-20"},[l("label",[t._v("State / County")]),t._v(" "),l("input",{attrs:{type:"text"}})])]),t._v(" "),l("div",{staticClass:"col-lg-6 col-md-6"},[l("div",{staticClass:"billing-info mb-20"},[l("label",[t._v("Postcode / ZIP")]),t._v(" "),l("input",{attrs:{type:"text"}})])]),t._v(" "),l("div",{staticClass:"col-lg-6 col-md-6"},[l("div",{staticClass:"billing-info mb-20"},[l("label",[t._v("Phone")]),t._v(" "),l("input",{attrs:{type:"text"}})])]),t._v(" "),l("div",{staticClass:"col-lg-6 col-md-6"},[l("div",{staticClass:"billing-info mb-20"},[l("label",[t._v("Email Address")]),t._v(" "),l("input",{attrs:{type:"text"}})])])]),t._v(" "),l("div",{staticClass:"additional-info-wrap"},[l("h4",[t._v("Additional information")]),t._v(" "),l("div",{staticClass:"additional-info"},[l("label",[t._v("Order notes")]),t._v(" "),l("textarea",{attrs:{placeholder:"Notes about your order, e.g. special notes for delivery. ",name:"message"}})])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"your-order-top"},[l("ul",[l("li",[t._v("Product")]),t._v(" "),l("li",[t._v("Total")])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"your-order-bottom"},[l("ul",[l("li",{staticClass:"your-order-shipping"},[t._v("Shipping")]),t._v(" "),l("li",[t._v("Free shipping")])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"place-order mt-25"},[l("button",{staticClass:"btn-hover"},[t._v("Place Order")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"icon"},[e("i",{staticClass:"pe-7s-cash"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderWithTopbar:l(324).default,Breadcrumb:l(326).default,TheFooter:l(322).default})}}]);