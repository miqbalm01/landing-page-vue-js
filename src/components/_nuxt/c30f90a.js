(window.webpackJsonp=window.webpackJsonp||[]).push([[83,14,23,30,38,44,49,58,61,63,67],{321:function(t,e,r){},322:function(t,e,r){"use strict";r.r(e);var n={},l=r(12),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"footer-area bg-gray pt-100 pb-70"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-2 col-sm-4"},[r("div",{staticClass:"copyright mb-30"},[r("div",{staticClass:"footer-logo"},[r("n-link",{attrs:{to:"/"}},[r("img",{attrs:{src:"/img/logo/logo.png",alt:"logo"}})])],1),t._v(" "),t._m(0)])]),t._v(" "),r("div",{staticClass:"col-lg-2 col-sm-4"},[r("div",{staticClass:"footer-widget mb-30 ml-30"},[t._m(1),t._v(" "),r("div",{staticClass:"footer-list"},[r("ul",[r("li",[r("n-link",{attrs:{to:"/about"}},[t._v("About us")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/shop"}},[t._v("Store location")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/contact"}},[t._v("Orders tracking")])],1)])])])]),t._v(" "),r("div",{staticClass:"col-lg-2 col-sm-4"},[r("div",{staticClass:"footer-widget mb-30 ml-50"},[t._m(2),t._v(" "),r("div",{staticClass:"footer-list"},[r("ul",[r("li",[r("n-link",{attrs:{to:"/about"}},[t._v("Returns")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/about"}},[t._v("Support Policy")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/about"}},[t._v("Size guide")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/about"}},[t._v("FAQs")])],1)])])])]),t._v(" "),t._m(3),t._v(" "),t._m(4)])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("© 2023 "),r("a",{attrs:{href:"#",target:"_blank"}},[t._v("Flone")]),t._v("."),r("br"),t._v(" All Rights Reserved")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer-title"},[r("h3",[t._v("ABOUT US")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer-title"},[r("h3",[t._v("USEFUL LINKS")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-lg-2 col-sm-6"},[r("div",{staticClass:"footer-widget mb-30 ml-75"},[r("div",{staticClass:"footer-title"},[r("h3",[t._v("FOLLOW US")])]),t._v(" "),r("div",{staticClass:"footer-list"},[r("ul",[r("li",[r("a",{attrs:{href:"https://www.facebook.com/",target:"_blank"}},[t._v("Facebook")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.instagram.com/",target:"_blank"}},[t._v("Instagram")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.youtube.com/",target:"_blank"}},[t._v("Youtube")])])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-lg-4 col-sm-6"},[r("div",{staticClass:"footer-widget mb-30 ml-70"},[r("div",{staticClass:"footer-title"},[r("h3",[t._v("SUBSCRIBE")])]),t._v(" "),r("div",{staticClass:"subscribe-style"},[r("p",[t._v("Get E-mail updates about our latest shop and special offers.")]),t._v(" "),r("div",{staticClass:"subscribe-form"},[r("form",{staticClass:"mc-form"},[r("input",{staticClass:"email",attrs:{type:"email",required:"",placeholder:"Enter your email here..",name:"email"}}),t._v(" "),r("button",{staticClass:"button",attrs:{name:"subscribe"}},[t._v("Subscribe")])])])])])])}],!1,null,null,null);e.default=component.exports},323:function(t,e,r){"use strict";r.r(e);r(44),r(37),r(43),r(56),r(32),r(57);var n=r(25);r(208),r(10);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function o(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var c={data:function(){return{item:"",singleQuantity:1,swiperOptionTop:{loop:!0,slidesPerView:1,spaceBetween:10,effect:"fade",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},computed:{product:function(){return this.item}},methods:{beforeOpen:function(t){var e=t.params;this.item=e},addToCart:function(t){var e=o(o({},t),{},{cartQuantity:this.singleQuantity});this.$store.state.cart.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to cart update with one"}):this.$notify({title:"Add to cart successfully!"}),this.$store.dispatch("addToCartItem",e)},discountedPrice:function(t){return t.price-t.price*t.discount/100},increaseQuantity:function(){this.product.quantity>this.singleQuantity&&this.singleQuantity++},decreaseQuantity:function(){this.singleQuantity>1&&this.singleQuantity--},addToWishlist:function(t){this.$store.state.wishlist.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to wishlist!"}):this.$notify({title:"Add to wishlist successfully!"}),this.$store.dispatch("addToWishlist",t)},addToCompare:function(t){this.$store.state.compare.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to compare!"}):this.$notify({title:"Add to compare successfully!"}),this.$store.dispatch("addToCompare",t)}}},d=(r(325),r(12)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("client-only",[r("modal",{attrs:{name:"quickview",width:"50%",scrollable:!0,height:"auto"},on:{"before-open":t.beforeOpen}},[r("div",{staticClass:"quickview-wrapper row"},[r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"product-details-slider"},[r("div",{staticClass:"product-details-img"},[r("div",{staticClass:"product-badges"},[t.product.new?r("span",{staticClass:"product-label pink"},[t._v("New")]):t._e(),t._v(" "),t.product.discount?r("span",{staticClass:"product-label purple"},[t._v("-"+t._s(t.product.discount)+"%")]):t._e()]),t._v(" "),r("swiper",{attrs:{options:t.swiperOptionTop}},[t._l(t.product.images,(function(image,e){return r("div",{key:e,staticClass:"large-img swiper-slide"},[r("img",{staticClass:"img-fluid",attrs:{src:image,alt:t.product.title}})])})),t._v(" "),r("div",{staticClass:"quickview-nav swiper-button-prev"},[r("i",{staticClass:"pe-7s-angle-left"})]),t._v(" "),r("div",{staticClass:"quickview-nav swiper-button-next"},[r("i",{staticClass:"pe-7s-angle-right"})])],2)],1)])]),t._v(" "),r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"product-details-content"},[r("div",{attrs:{slot:"top-right"},slot:"top-right"},[r("button",{staticClass:"modal-close",on:{click:function(e){return t.$modal.hide("quickview")}}},[r("i",{staticClass:"fa fa-times"})])]),t._v(" "),r("h2",[t._v(t._s(t.product.title))]),t._v(" "),r("div",{staticClass:"product-details-price"},[r("span",[t._v("$"+t._s(t.discountedPrice(t.product).toFixed(2)))]),t._v(" "),t.product.discount>0?r("span",{staticClass:"old"},[t._v("$"+t._s(t.product.price.toFixed(2)))]):t._e()]),t._v(" "),r("div",{staticClass:"pro-details-rating-wrap"},[5==t.product.rating?r("div",{staticClass:"pro-details-rating"},[r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o yellow"})]):t._e(),t._v(" "),4==t.product.rating?r("div",{staticClass:"pro-details-rating"},[r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o"})]):t._e(),t._v(" "),3==t.product.rating?r("div",{staticClass:"pro-details-rating"},[r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o"}),t._v(" "),r("i",{staticClass:"fa fa-star-o"})]):t._e(),t._v(" "),2==t.product.rating?r("div",{staticClass:"pro-details-rating"},[r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o"}),t._v(" "),r("i",{staticClass:"fa fa-star-o"}),t._v(" "),r("i",{staticClass:"fa fa-star-o"})]):t._e(),t._v(" "),1==t.product.rating?r("div",{staticClass:"pro-details-rating"},[r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o"}),t._v(" "),r("i",{staticClass:"fa fa-star-o"}),t._v(" "),r("i",{staticClass:"fa fa-star-o"}),t._v(" "),r("i",{staticClass:"fa fa-star-o"})]):t._e(),t._v(" "),r("span",[r("a",{attrs:{href:"#"}},[t._v(t._s(t.product.rating)+" Reviews")])])]),t._v(" "),r("p",[t._v(t._s(t.product.description))]),t._v(" "),t.product.variation?r("div",{staticClass:"pro-details-size-color"},[r("div",{staticClass:"pro-details-color-wrap"},[r("h6",{staticClass:"label"},[t._v("Color")]),t._v(" "),r("div",{staticClass:"pro-details-color-content"},t._l(t.product.variation.color,(function(e,n){return r("label",{key:n,staticClass:"radio",class:e},[r("input",{attrs:{type:"radio",name:"colorGroup"}}),t._v(" "),r("span",{staticClass:"check-mark"})])})),0)]),t._v(" "),r("div",{staticClass:"pro-details-size-wrap"},[r("h6",{staticClass:"label"},[t._v("Size")]),t._v(" "),r("div",{staticClass:"pro-details-size-content"},t._l(t.product.variation.sizes,(function(e,n){return r("label",{key:n,staticClass:"radio"},[r("input",{attrs:{type:"radio",name:"sizeGroup"}}),t._v(" "),r("span",{staticClass:"check-mark"},[t._v(t._s(e))])])})),0)])]):t._e(),t._v(" "),r("div",{staticClass:"pro-details-quality"},[r("div",{staticClass:"cart-plus-minus"},[r("button",{staticClass:"dec qtybutton",on:{click:function(e){return t.decreaseQuantity()}}},[t._v("-")]),t._v(" "),r("input",{staticClass:"cart-plus-minus-box",attrs:{type:"text",readonly:""},domProps:{value:t.singleQuantity}}),t._v(" "),r("button",{staticClass:"inc qtybutton",on:{click:function(e){return t.increaseQuantity()}}},[t._v("+")])]),t._v(" "),r("div",{staticClass:"pro-details-cart btn-hover"},[r("button",{on:{click:function(e){return t.addToCart(t.product)}}},[t._v("Add To Cart")])]),t._v(" "),r("div",{staticClass:"pro-details-wishlist"},[r("button",{on:{click:function(e){return t.addToWishlist(t.product)}}},[r("i",{staticClass:"fa fa-heart-o"})])]),t._v(" "),r("div",{staticClass:"pro-details-compare"},[r("button",{on:{click:function(e){return t.addToCompare(t.product)}}},[r("i",{staticClass:"pe-7s-shuffle"})])])]),t._v(" "),r("div",{staticClass:"pro-details-meta"},[r("span",{staticClass:"label"},[t._v("Categories:")]),t._v(" "),r("ul",t._l(t.product.category,(function(e,n){return r("li",{key:n},[r("n-link",{attrs:{to:"/shop?category="+e}},[t._v(t._s(e)+",")])],1)})),0)]),t._v(" "),r("div",{staticClass:"pro-details-meta"},[r("span",{staticClass:"label"},[t._v("Tag:")]),t._v(" "),r("ul",t._l(t.product.tag,(function(e,n){return r("li",{key:n},[r("n-link",{attrs:{to:"/shop?tag="+e}},[t._v(t._s(e)+",")])],1)})),0)]),t._v(" "),r("div",{staticClass:"pro-details-social"},[r("ul",[r("li",[r("a",{attrs:{href:"https://www.facebook.com/",target:"_blank"}},[r("i",{staticClass:"fa fa-facebook"})])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://dribbble.com/",target:"_blank"}},[r("i",{staticClass:"fa fa-dribbble"})])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.pinterest.com/",target:"_blank"}},[r("i",{staticClass:"fa fa-pinterest-p"})])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/",target:"_blank"}},[r("i",{staticClass:"fa fa-twitter"})])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.linkedin.com/",target:"_blank"}},[r("i",{staticClass:"fa fa-linkedin"})])])])])])])])])],1)}),[],!1,null,null,null);e.default=component.exports},324:function(t,e,r){"use strict";r.r(e);r(10),r(28),r(29);var n={components:{Navigation:function(){return Promise.resolve().then(r.bind(null,211))},MiniCart:function(){return Promise.resolve().then(r.bind(null,209))}},props:["containerClass"],computed:{cartItemCount:function(){return this.$store.getters.cartItemCount},wishlistItemCount:function(){return this.$store.getters.wishlistItemCount},compareItemCount:function(){return this.$store.getters.compareItemCount}},data:function(){return{isSticky:!1,isOpenSearch:!1,isOpenAccountSettings:!1,openCart:!1,navOpen:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))}},l=r(12),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("header",{staticClass:"header-area"},[r("div",{staticClass:"header-top-area header-padding-2 d-none d-lg-block"},[r("div",{class:t.containerClass},[t._m(0)])]),t._v(" "),r("div",{staticClass:"header-padding-1 sticky-bar header-res-padding clearfix",class:{"is-sticky":t.isSticky}},[r("div",{class:t.containerClass},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-2 col-md-6 col-4"},[r("div",{staticClass:"logo"},[r("n-link",{attrs:{to:"/"}},[r("img",{attrs:{src:"/img/logo/logo.png",alt:"flone logo"}})])],1)]),t._v(" "),r("div",{staticClass:"col-lg-8 d-none d-lg-block"},[r("div",{staticClass:"main-menu"},[r("nav",[r("Navigation")],1)])]),t._v(" "),r("div",{staticClass:"col-lg-2 col-md-6 col-8"},[r("div",{staticClass:"header-right-wrap"},[r("div",{staticClass:"same-style header-search d-none d-lg-block"},[r("button",{staticClass:"search-active",on:{click:function(e){t.isOpenSearch=!t.isOpenSearch}}},[r("i",{staticClass:"pe-7s-search"})]),t._v(" "),r("div",{staticClass:"search-content",class:{active:t.isOpenSearch}},[t._m(1)])]),t._v(" "),r("div",{staticClass:"same-style account-setting d-none d-lg-block"},[r("button",{staticClass:"account-setting-active",on:{click:function(e){t.isOpenAccountSettings=!t.isOpenAccountSettings}}},[r("i",{staticClass:"pe-7s-user-female"})]),t._v(" "),r("div",{staticClass:"account-dropdown",class:{active:t.isOpenAccountSettings}},[r("ul",[r("li",[r("n-link",{attrs:{to:"/login-register"}},[t._v("Login")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/login-register"}},[t._v("Register")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/my-account"}},[t._v("my account")])],1)])])]),t._v(" "),r("div",{staticClass:"same-style header-compare"},[r("n-link",{attrs:{to:"/compare"}},[r("i",{staticClass:"pe-7s-shuffle"})]),t._v(" "),r("span",{staticClass:"count-style"},[t._v(t._s(t.compareItemCount))])],1),t._v(" "),r("div",{staticClass:"same-style header-wishlist"},[r("n-link",{attrs:{to:"/wishlist"}},[r("i",{staticClass:"pe-7s-like"})]),t._v(" "),r("span",{staticClass:"count-style"},[t._v(t._s(t.wishlistItemCount))])],1),t._v(" "),r("div",{staticClass:"same-style cart-wrap"},[r("button",{staticClass:"icon-cart",on:{click:function(e){t.openCart=!t.openCart}}},[r("i",{staticClass:"pe-7s-shopbag"}),t._v(" "),r("span",{staticClass:"count-style"},[t._v(t._s(t.cartItemCount))])]),t._v(" "),r("MiniCart",{attrs:{miniCart:{visible:t.openCart}},on:{minicartClose:function(e){t.openCart=!t.openCart}}})],1),t._v(" "),r("div",{staticClass:"same-style mobile-menu-toggler d-block d-lg-none"},[r("button",{staticClass:"mobile-aside-button",on:{click:function(e){t.navOpen=!t.navOpen}}},[r("i",{staticClass:"pe-7s-menu"})])])])])])])])]),t._v(" "),r("OffCanvasMobileMenu",{class:{"show-mobile-menu":t.navOpen},on:{toggleAsideMenu:function(e){t.navOpen=!t.navOpen}}})],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header-top-inner"},[r("div",{staticClass:"language-currency-wrap"},[r("div",{staticClass:"same-language-currency language-style"},[r("select",{attrs:{name:"language"}},[r("option",{attrs:{value:"english"}},[t._v("English")]),t._v(" "),r("option",{attrs:{value:"hindi"}},[t._v("Hindi")]),t._v(" "),r("option",{attrs:{value:"spanish"}},[t._v("Spanish")])])]),t._v(" "),r("div",{staticClass:"same-language-currency use-style"},[r("select",{attrs:{name:"currency"}},[r("option",{attrs:{value:"usd"}},[t._v("USD")]),t._v(" "),r("option",{attrs:{value:"eur"}},[t._v("EUR")]),t._v(" "),r("option",{attrs:{value:"rup"}},[t._v("Rup")])])]),t._v(" "),r("div",{staticClass:"same-language-currency"},[r("p",[t._v("Call: "),r("a",{attrs:{href:"callto:3965410"}},[t._v("3965410")])])])]),t._v(" "),r("div",{staticClass:"header-offer"},[r("p",[t._v("Free delivery on order over "),r("span",[t._v("$200")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",[r("input",{attrs:{type:"text",placeholder:"Search"}}),t._v(" "),r("button",{staticClass:"button-search"},[r("i",{staticClass:"pe-7s-search"})])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:r(211).default,MiniCart:r(209).default,OffCanvasMobileMenu:r(210).default})},325:function(t,e,r){"use strict";r(321)},327:function(t,e,r){"use strict";r.r(e);r(44),r(37),r(43),r(56),r(32),r(57);var n=r(25);r(208),r(10),r(33),r(68),r(69);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function o(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var c={props:["product"],methods:{addToCart:function(t){var e=o(o({},t),{},{cartQuantity:1});this.$store.state.cart.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to cart update with one"}):this.$notify({title:"Add to cart successfully!"}),this.$store.dispatch("addToCartItem",e)},discountedPrice:function(t){return t.price-t.price*t.discount/100},addToWishlist:function(t){this.$store.state.wishlist.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to wishlist!"}):this.$notify({title:"Add to wishlist successfully!"}),this.$store.dispatch("addToWishlist",t)},addToCompare:function(t){this.$store.state.compare.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to compare!"}):this.$notify({title:"Add to compare successfully!"}),this.$store.dispatch("addToCompare",t)},onClick:function(t){this.$modal.show("quickview",t)},slugify:function(text){return text.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}}},d=r(12),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-wrap-2 mb-25"},[r("div",{staticClass:"product-img"},[r("n-link",{attrs:{to:"/product/"+t.slugify(t.product.title)}},[r("img",{staticClass:"default-img",attrs:{src:t.product.images[0],alt:t.product.title}}),t._v(" "),r("img",{staticClass:"hover-img",attrs:{src:t.product.images[1],alt:t.product.title}})]),t._v(" "),r("div",{staticClass:"product-badges"},[t.product.new?r("span",{staticClass:"product-label pink"},[t._v("New")]):t._e(),t._v(" "),t.product.discount?r("span",{staticClass:"product-label purple"},[t._v("-"+t._s(t.product.discount)+"%")]):t._e()]),t._v(" "),r("div",{staticClass:"product-action-2"},[r("button",{staticClass:"btn",attrs:{title:"Compare"},on:{click:function(e){return t.addToCompare(t.product)}}},[r("i",{staticClass:"pe-7s-shuffle"})]),t._v(" "),r("button",{staticClass:"btn",attrs:{title:"Add To Cart"},on:{click:function(e){return t.addToCart(t.product)}}},[r("i",{staticClass:"pe-7s-cart"})]),t._v(" "),r("button",{staticClass:"btn",attrs:{title:"Quick View"},on:{click:function(e){return t.onClick(t.product)}}},[r("i",{staticClass:"pe-7s-look"})])])],1),t._v(" "),r("div",{staticClass:"product-content-2"},[r("div",{staticClass:"title-price-wrap-2"},[r("h3",[r("n-link",{attrs:{to:"/product/"+t.slugify(t.product.title)}},[t._v(t._s(t.product.title))])],1),t._v(" "),r("div",{staticClass:"price-2"},[r("span",[t._v("$"+t._s(t.discountedPrice(t.product).toFixed(2)))]),t._v(" "),t.product.discount>0?r("span",{staticClass:"old"},[t._v("$"+t._s(t.product.price.toFixed(2)))]):t._e()])]),t._v(" "),r("div",{staticClass:"pro-wishlist-2"},[r("button",{on:{click:function(e){return t.addToWishlist(t.product)}}},[r("i",{staticClass:"pe-7s-like"})])])])])}),[],!1,null,null,null);e.default=component.exports},328:function(t,e,r){"use strict";r.r(e);var n={props:["title","subTitle","classes"]},l=r(12),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-center",class:t.classes},[r("h2",[t._v(t._s(t.title))]),t._v(" "),r("p",[t._v(t._s(t.subTitle))])])}),[],!1,null,null,null);e.default=component.exports},344:function(t,e,r){"use strict";r.r(e);var n={},l=r(12),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"subscribe-area-3 pb-100"},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xl-5 col-lg-7 ms-auto me-auto"},[r("div",{staticClass:"subscribe-style-3 text-center"},[r("h2",[t._v("Subscribe ")]),t._v(" "),r("p",[t._v("Subscribe to our newsletter to receive news on update")]),t._v(" "),r("div",{staticClass:"subscribe-form-3 mt-35"},[r("form",{staticClass:"mc-form"},[r("input",{staticClass:"email",attrs:{type:"email",required:"",placeholder:"Your Email Address",name:"email"}}),t._v(" "),r("div",{staticClass:"clear-3"},[r("button",{staticClass:"button"},[t._v("Subscribe")])])])])])])])])])}],!1,null,null,null);e.default=component.exports},373:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{swiperOption:{loop:!0,speed:750,slidesPerView:1,spaceBetween:10,autoplay:{delay:6e3},effect:"fade",fadeEffect:{crossFade:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},sliderData:[{id:1,subTitle:"Enjoy This Offer Today",title:"New Collection Sale 30%",backgroundImage:"/img/slider/slider-7-1.jpg"},{id:2,subTitle:"Enjoy This Offer Today",title:"New Collection Sale 40%",backgroundImage:"/img/slider/slider-7-2.jpg"}]}}},l=r(12),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"slider-area nav-style-1"},[r("swiper",{attrs:{options:t.swiperOption}},[t._l(t.sliderData,(function(e,n){return r("swiper-slide",{key:n,staticClass:"single-slider-2 slider-height-2 d-flex align-items-center bg-img",style:{backgroundImage:"url("+e.backgroundImage+")"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-6 col-md-7 ms-auto"},[r("div",{staticClass:"slider-content-7 slider-animation-1"},[r("h3",[t._v(t._s(e.subTitle))]),t._v(" "),r("h1",[t._v(t._s(e.title))]),t._v(" "),r("div",{staticClass:"slider-btn-round btn-hover"},[r("n-link",{attrs:{to:"/shop"}},[t._v("SHOP NOW")])],1)])])])])])})),t._v(" "),r("div",{staticClass:"hero-slider-nav swiper-button-prev"},[r("i",{staticClass:"pe-7s-angle-left"})]),t._v(" "),r("div",{staticClass:"hero-slider-nav swiper-button-next"},[r("i",{staticClass:"pe-7s-angle-right"})])],2)],1)}),[],!1,null,null,null);e.default=component.exports},374:function(t,e,r){"use strict";r.r(e);var n=r(74),l=(r(10),r(28),r(29),r(76),r(213),r(214),r(215),r(216),r(217),r(218),r(219),r(220),r(221),r(222),r(223),r(224),r(225),r(226),r(227),r(228),r(229),r(230),r(231),r(50),r(43),r(70),r(71),{data:function(){return{filterData:[],selectedCategory:""}},components:{ProductGridItemTwo:function(){return Promise.resolve().then(r.bind(null,327))},QuickView:function(){return Promise.resolve().then(r.bind(null,323))}},computed:{products:function(){return this.$store.getters.getProducts},filterCategory:function(){return["all"].concat(Object(n.a)(new Set(this.products.map((function(t){return t.category})).flat())))}},methods:{filterHandler:function(t){if(this.selectedCategory=t,"all"===this.selectedCategory)this.filterData=this.products;else{var e,r=this.products.filter((function(e){return e.category.includes(t)}));this.filterData=[],(e=this.filterData).push.apply(e,Object(n.a)(r))}}},mounted:function(){var t;(t=this.filterData).push.apply(t,Object(n.a)(this.products))}}),o=r(12),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-area product-mb-xs pt-100 pb-100"},[r("client-only",[r("div",{staticClass:"container"},[r("SectionTitleWithSubTitle",{attrs:{classes:"section-title-6",title:"New Arrivals"}}),t._v(" "),r("ul",{staticClass:"product-tab-list nav justify-content-center pt-25 pb-60"},t._l(t.filterCategory,(function(e,n){return r("li",{key:n,staticClass:"nav-item",on:{click:function(r){return t.filterHandler(e)}}},[r("button",{class:{active:e===t.selectedCategory}},[t._v(t._s(e))])])})),0),t._v(" "),r("div",{staticClass:"row"},t._l(t.filterData.slice(0,8),(function(t,e){return r("div",{key:e,staticClass:"col-xl-3 col-lg-4 col-sm-6"},[r("ProductGridItemTwo",{attrs:{product:t}})],1)})),0),t._v(" "),r("div",{staticClass:"discover-more-btn btn-hover text-center mt-20 col-12"},[r("n-link",{attrs:{to:"/shop"}},[t._v("Discover More")])],1)],1)]),t._v(" "),r("QuickView")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SectionTitleWithSubTitle:r(328).default,ProductGridItemTwo:r(327).default,QuickView:r(323).default})},375:function(t,e,r){"use strict";r.r(e);r(73);var n={mounted:function(){var t;t&&clearInterval(t);var e=6e4,r=60*e,n=24*r,l=new Date("Jun 30, 2022").getTime(),o=document.getElementById("days"),c=document.getElementById("hours"),d=document.getElementById("minutes"),v=document.getElementById("seconds");t=setInterval((function(){var t=(new Date).getTime(),f=l-t,_=Math.floor(f/n),C=Math.floor(f%n/r),h=Math.floor(f%r/e),m=Math.floor(f%e/1e3);o&&c&&d&&v&&(o.innerText=_>9?_:"0".concat(_),c.innerText=C>9?C:"0".concat(C),d.innerText=h>9?h:"0".concat(h),v.innerText=m>9?m:"0".concat(m))}),1e3)}},l=r(12),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"deal-area pt-100 pb-100"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row align-items-center"},[r("div",{staticClass:"col-lg-6 col-md-6"},[r("div",{staticClass:"fashion-deal-img"},[r("n-link",{attrs:{to:"/shop"}},[r("img",{staticClass:"wow fadeInLeft",attrs:{src:"/img/banner/deal-2.png",alt:""}})])],1)]),t._v(" "),r("div",{staticClass:"col-lg-6 col-md-6"},[r("div",{staticClass:"funfact-content funfact-res text-center"},[r("h2",[t._v("Deal of the day")]),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"funfact-btn btn-only-round funfact-btn-red-2 btn-hover"},[r("n-link",{attrs:{to:"/shop"}},[t._v("SHOP NOW")])],1)])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"timer"},[r("li",[r("span",{attrs:{id:"days"}}),t._v("\n                            Days\n                        ")]),t._v(" "),r("li",[r("span",{attrs:{id:"hours"}}),t._v("\n                            Hours\n                        ")]),t._v(" "),r("li",[r("span",{attrs:{id:"minutes"}}),t._v("\n                            Mins\n                        ")]),t._v(" "),r("li",[r("span",{attrs:{id:"seconds"}}),t._v("\n                            Secs\n                        ")])])}],!1,null,null,null);e.default=component.exports},391:function(t,e,r){"use strict";r.r(e);var n=r(12),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"banner-area"},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row g-0 mtn-10"},[r("div",{staticClass:"col-md-6 mt-10"},[r("div",{staticClass:"single-banner"},[r("n-link",{attrs:{to:"/shop"}},[r("img",{attrs:{src:"/img/banner/banner-40.png",alt:""}})]),t._v(" "),r("div",{staticClass:"banner-content banner-content1-modify-position1 banner-content1-modify"},[r("h3",[t._v("Men Fashion Shop")]),t._v(" "),r("h4",[t._v("Choose Your Products Here")]),t._v(" "),r("n-link",{attrs:{to:"/shop"}},[r("i",{staticClass:"fa fa-long-arrow-right"})])],1)],1)]),t._v(" "),r("div",{staticClass:"col-md-6 mt-10"},[r("div",{staticClass:"single-banner"},[r("n-link",{attrs:{to:"/shop"}},[r("img",{attrs:{src:"/img/banner/banner-41.png",alt:""}})]),t._v(" "),r("div",{staticClass:"banner-content banner-content1-modify-position2 banner-content1-modify"},[r("h3",[t._v("Women Fashion")]),t._v(" "),r("h4",[t._v("Choose Your Products Here")]),t._v(" "),r("n-link",{attrs:{to:"/shop"}},[r("i",{staticClass:"fa fa-long-arrow-right"})])],1)],1)])])])])}),[],!1,null,null,null);e.default=component.exports},411:function(t,e,r){"use strict";r.r(e);r(10),r(28),r(29);var n={components:{HeaderWithTopbar:function(){return Promise.resolve().then(r.bind(null,324))},HeroSliderSeven:function(){return Promise.resolve().then(r.bind(null,373))},ProductWrapperSeven:function(){return Promise.resolve().then(r.bind(null,374))},BannerStyleThree:function(){return Promise.resolve().then(r.bind(null,391))},DealWithCountdown:function(){return Promise.resolve().then(r.bind(null,375))},ServicePolicyThree:function(){return r.e(5).then(r.bind(null,437))},TheFooter:function(){return Promise.resolve().then(r.bind(null,322))}},head:function(){return{title:"Home Fashion Seven"}}},l=r(12),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home-seven-wrapper"},[r("HeaderWithTopbar",{attrs:{containerClass:"container-fluid"}}),t._v(" "),r("HeroSliderSeven"),t._v(" "),r("ProductWrapperSeven"),t._v(" "),r("BannerStyleThree"),t._v(" "),r("DealWithCountdown"),t._v(" "),r("ServicePolicyThree"),t._v(" "),r("NewsletterStyleOne"),t._v(" "),r("TheFooter")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderWithTopbar:r(324).default,HeroSliderSeven:r(373).default,ProductWrapperSeven:r(374).default,BannerStyleThree:r(391).default,DealWithCountdown:r(375).default,NewsletterStyleOne:r(344).default,TheFooter:r(322).default})}}]);