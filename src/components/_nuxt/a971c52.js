(window.webpackJsonp=window.webpackJsonp||[]).push([[82,25,27,36,44,50,56,61],{321:function(t,e,r){},323:function(t,e,r){"use strict";r.r(e);r(44),r(37),r(43),r(56),r(32),r(57);var n=r(25);r(208),r(10);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var c={data:function(){return{item:"",singleQuantity:1,swiperOptionTop:{loop:!0,slidesPerView:1,spaceBetween:10,effect:"fade",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},computed:{product:function(){return this.item}},methods:{beforeOpen:function(t){var e=t.params;this.item=e},addToCart:function(t){var e=l(l({},t),{},{cartQuantity:this.singleQuantity});this.$store.state.cart.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to cart update with one"}):this.$notify({title:"Add to cart successfully!"}),this.$store.dispatch("addToCartItem",e)},discountedPrice:function(t){return t.price-t.price*t.discount/100},increaseQuantity:function(){this.product.quantity>this.singleQuantity&&this.singleQuantity++},decreaseQuantity:function(){this.singleQuantity>1&&this.singleQuantity--},addToWishlist:function(t){this.$store.state.wishlist.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to wishlist!"}):this.$notify({title:"Add to wishlist successfully!"}),this.$store.dispatch("addToWishlist",t)},addToCompare:function(t){this.$store.state.compare.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to compare!"}):this.$notify({title:"Add to compare successfully!"}),this.$store.dispatch("addToCompare",t)}}},d=(r(325),r(12)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("client-only",[r("modal",{attrs:{name:"quickview",width:"50%",scrollable:!0,height:"auto"},on:{"before-open":t.beforeOpen}},[r("div",{staticClass:"quickview-wrapper row"},[r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"product-details-slider"},[r("div",{staticClass:"product-details-img"},[r("div",{staticClass:"product-badges"},[t.product.new?r("span",{staticClass:"product-label pink"},[t._v("New")]):t._e(),t._v(" "),t.product.discount?r("span",{staticClass:"product-label purple"},[t._v("-"+t._s(t.product.discount)+"%")]):t._e()]),t._v(" "),r("swiper",{attrs:{options:t.swiperOptionTop}},[t._l(t.product.images,(function(image,e){return r("div",{key:e,staticClass:"large-img swiper-slide"},[r("img",{staticClass:"img-fluid",attrs:{src:image,alt:t.product.title}})])})),t._v(" "),r("div",{staticClass:"quickview-nav swiper-button-prev"},[r("i",{staticClass:"pe-7s-angle-left"})]),t._v(" "),r("div",{staticClass:"quickview-nav swiper-button-next"},[r("i",{staticClass:"pe-7s-angle-right"})])],2)],1)])]),t._v(" "),r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"product-details-content"},[r("div",{attrs:{slot:"top-right"},slot:"top-right"},[r("button",{staticClass:"modal-close",on:{click:function(e){return t.$modal.hide("quickview")}}},[r("i",{staticClass:"fa fa-times"})])]),t._v(" "),r("h2",[t._v(t._s(t.product.title))]),t._v(" "),r("div",{staticClass:"product-details-price"},[r("span",[t._v("$"+t._s(t.discountedPrice(t.product).toFixed(2)))]),t._v(" "),t.product.discount>0?r("span",{staticClass:"old"},[t._v("$"+t._s(t.product.price.toFixed(2)))]):t._e()]),t._v(" "),r("div",{staticClass:"pro-details-rating-wrap"},[5==t.product.rating?r("div",{staticClass:"pro-details-rating"},[r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o yellow"})]):t._e(),t._v(" "),4==t.product.rating?r("div",{staticClass:"pro-details-rating"},[r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o"})]):t._e(),t._v(" "),3==t.product.rating?r("div",{staticClass:"pro-details-rating"},[r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o"}),t._v(" "),r("i",{staticClass:"fa fa-star-o"})]):t._e(),t._v(" "),2==t.product.rating?r("div",{staticClass:"pro-details-rating"},[r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o"}),t._v(" "),r("i",{staticClass:"fa fa-star-o"}),t._v(" "),r("i",{staticClass:"fa fa-star-o"})]):t._e(),t._v(" "),1==t.product.rating?r("div",{staticClass:"pro-details-rating"},[r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o"}),t._v(" "),r("i",{staticClass:"fa fa-star-o"}),t._v(" "),r("i",{staticClass:"fa fa-star-o"}),t._v(" "),r("i",{staticClass:"fa fa-star-o"})]):t._e(),t._v(" "),r("span",[r("a",{attrs:{href:"#"}},[t._v(t._s(t.product.rating)+" Reviews")])])]),t._v(" "),r("p",[t._v(t._s(t.product.description))]),t._v(" "),t.product.variation?r("div",{staticClass:"pro-details-size-color"},[r("div",{staticClass:"pro-details-color-wrap"},[r("h6",{staticClass:"label"},[t._v("Color")]),t._v(" "),r("div",{staticClass:"pro-details-color-content"},t._l(t.product.variation.color,(function(e,n){return r("label",{key:n,staticClass:"radio",class:e},[r("input",{attrs:{type:"radio",name:"colorGroup"}}),t._v(" "),r("span",{staticClass:"check-mark"})])})),0)]),t._v(" "),r("div",{staticClass:"pro-details-size-wrap"},[r("h6",{staticClass:"label"},[t._v("Size")]),t._v(" "),r("div",{staticClass:"pro-details-size-content"},t._l(t.product.variation.sizes,(function(e,n){return r("label",{key:n,staticClass:"radio"},[r("input",{attrs:{type:"radio",name:"sizeGroup"}}),t._v(" "),r("span",{staticClass:"check-mark"},[t._v(t._s(e))])])})),0)])]):t._e(),t._v(" "),r("div",{staticClass:"pro-details-quality"},[r("div",{staticClass:"cart-plus-minus"},[r("button",{staticClass:"dec qtybutton",on:{click:function(e){return t.decreaseQuantity()}}},[t._v("-")]),t._v(" "),r("input",{staticClass:"cart-plus-minus-box",attrs:{type:"text",readonly:""},domProps:{value:t.singleQuantity}}),t._v(" "),r("button",{staticClass:"inc qtybutton",on:{click:function(e){return t.increaseQuantity()}}},[t._v("+")])]),t._v(" "),r("div",{staticClass:"pro-details-cart btn-hover"},[r("button",{on:{click:function(e){return t.addToCart(t.product)}}},[t._v("Add To Cart")])]),t._v(" "),r("div",{staticClass:"pro-details-wishlist"},[r("button",{on:{click:function(e){return t.addToWishlist(t.product)}}},[r("i",{staticClass:"fa fa-heart-o"})])]),t._v(" "),r("div",{staticClass:"pro-details-compare"},[r("button",{on:{click:function(e){return t.addToCompare(t.product)}}},[r("i",{staticClass:"pe-7s-shuffle"})])])]),t._v(" "),r("div",{staticClass:"pro-details-meta"},[r("span",{staticClass:"label"},[t._v("Categories:")]),t._v(" "),r("ul",t._l(t.product.category,(function(e,n){return r("li",{key:n},[r("n-link",{attrs:{to:"/shop?category="+e}},[t._v(t._s(e)+",")])],1)})),0)]),t._v(" "),r("div",{staticClass:"pro-details-meta"},[r("span",{staticClass:"label"},[t._v("Tag:")]),t._v(" "),r("ul",t._l(t.product.tag,(function(e,n){return r("li",{key:n},[r("n-link",{attrs:{to:"/shop?tag="+e}},[t._v(t._s(e)+",")])],1)})),0)]),t._v(" "),r("div",{staticClass:"pro-details-social"},[r("ul",[r("li",[r("a",{attrs:{href:"https://www.facebook.com/",target:"_blank"}},[r("i",{staticClass:"fa fa-facebook"})])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://dribbble.com/",target:"_blank"}},[r("i",{staticClass:"fa fa-dribbble"})])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.pinterest.com/",target:"_blank"}},[r("i",{staticClass:"fa fa-pinterest-p"})])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/",target:"_blank"}},[r("i",{staticClass:"fa fa-twitter"})])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.linkedin.com/",target:"_blank"}},[r("i",{staticClass:"fa fa-linkedin"})])])])])])])])])],1)}),[],!1,null,null,null);e.default=component.exports},325:function(t,e,r){"use strict";r(321)},344:function(t,e,r){"use strict";r.r(e);var n={},o=r(12),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"subscribe-area-3 pb-100"},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xl-5 col-lg-7 ms-auto me-auto"},[r("div",{staticClass:"subscribe-style-3 text-center"},[r("h2",[t._v("Subscribe ")]),t._v(" "),r("p",[t._v("Subscribe to our newsletter to receive news on update")]),t._v(" "),r("div",{staticClass:"subscribe-form-3 mt-35"},[r("form",{staticClass:"mc-form"},[r("input",{staticClass:"email",attrs:{type:"email",required:"",placeholder:"Your Email Address",name:"email"}}),t._v(" "),r("div",{staticClass:"clear-3"},[r("button",{staticClass:"button"},[t._v("Subscribe")])])])])])])])])])}],!1,null,null,null);e.default=component.exports},348:function(t,e,r){"use strict";r.r(e);r(44),r(37),r(43),r(56),r(32),r(57);var n=r(25);r(208),r(10),r(33),r(68),r(69);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var c={props:["product"],methods:{addToCart:function(t){var e=l(l({},t),{},{cartQuantity:1});this.$store.state.cart.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to cart update with one"}):this.$notify({title:"Add to cart successfully!"}),this.$store.dispatch("addToCartItem",e)},discountedPrice:function(t){return t.price-t.price*t.discount/100},addToWishlist:function(t){this.$store.state.wishlist.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to wishlist!"}):this.$notify({title:"Add to wishlist successfully!"}),this.$store.dispatch("addToWishlist",t)},addToCompare:function(t){this.$store.state.compare.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to compare!"}):this.$notify({title:"Add to compare successfully!"}),this.$store.dispatch("addToCompare",t)},onClick:function(t){this.$modal.show("quickview",t)},slugify:function(text){return text.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}}},d=r(12),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-wrap-3 mb-20"},[r("div",{staticClass:"product-img"},[r("n-link",{attrs:{to:"/product/"+t.slugify(t.product.title)}},[r("img",{staticClass:"default-img",attrs:{src:t.product.images[0],alt:t.product.title}})]),t._v(" "),r("div",{staticClass:"product-badges"},[t.product.new?r("span",{staticClass:"product-label pink"},[t._v("New")]):t._e(),t._v(" "),t.product.discount?r("span",{staticClass:"product-label purple"},[t._v("-"+t._s(t.product.discount)+"%")]):t._e()]),t._v(" "),r("div",{staticClass:"product-content-3-wrap"},[r("div",{staticClass:"product-content-3"},[r("div",{staticClass:"product-title"},[r("h3",[r("n-link",{attrs:{to:"/product/"+t.slugify(t.product.title)}},[t._v(t._s(t.product.title))])],1)]),t._v(" "),r("div",{staticClass:"price-3"},[r("span",[t._v("$"+t._s(t.discountedPrice(t.product).toFixed(2)))]),t._v(" "),t.product.discount>0?r("span",{staticClass:"old"},[t._v("$"+t._s(t.product.price.toFixed(2)))]):t._e()]),t._v(" "),r("div",{staticClass:"product-action-3"},[r("button",{staticClass:"btn",attrs:{title:"Compare"},on:{click:function(e){return t.addToCompare(t.product)}}},[r("i",{staticClass:"pe-7s-shuffle"})]),t._v(" "),r("button",{staticClass:"btn",attrs:{title:"Add To Cart"},on:{click:function(e){return t.addToCart(t.product)}}},[r("i",{staticClass:"pe-7s-cart"})]),t._v(" "),r("button",{staticClass:"btn",attrs:{title:"Wishlist"},on:{click:function(e){return t.addToWishlist(t.product)}}},[r("i",{staticClass:"pe-7s-like"})]),t._v(" "),r("button",{staticClass:"btn",attrs:{title:"Quick View"},on:{click:function(e){return t.onClick(t.product)}}},[r("i",{staticClass:"pe-7s-look"})])])])])],1)])}),[],!1,null,null,null);e.default=component.exports},352:function(t,e,r){},369:function(t,e,r){"use strict";r.r(e);r(10),r(28),r(29);var n={components:{Navigation:function(){return Promise.resolve().then(r.bind(null,211))},MiniCart:function(){return Promise.resolve().then(r.bind(null,209))}},computed:{cartItemCount:function(){return this.$store.getters.cartItemCount},compareItemCount:function(){return this.$store.getters.compareItemCount},wishlistItemCount:function(){return this.$store.getters.wishlistItemCount}},data:function(){return{isSticky:!1,isOpenSearch:!1,isOpenAccountSettings:!1,openCart:!1,navOpen:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))}},o=r(12),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("header",{staticClass:"header-area sticky-bar header-padding-3 header-res-padding header-ptb-hm5 transparent-bar",class:{"is-sticky":t.isSticky}},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xl-5 col-lg-6 d-none d-lg-block"},[r("div",{staticClass:"main-menu menu-white"},[r("nav",[r("Navigation")],1)])]),t._v(" "),r("div",{staticClass:"col-xl-2 col-lg-2 col-md-6 col-4"},[r("div",{staticClass:"logo text-center logo-hm5"},[r("n-link",{staticClass:"sticky-none",attrs:{to:"/"}},[r("img",{attrs:{src:"/img/logo/logo-2.png",alt:"brand logo"}})]),t._v(" "),r("n-link",{staticClass:"sticky-block",attrs:{to:"/"}},[r("img",{attrs:{src:"/img/logo/logo.png",alt:"brand logo"}})])],1)]),t._v(" "),r("div",{staticClass:"col-xl-5 col-lg-4 col-md-6 col-8"},[r("div",{staticClass:"header-right-wrap header-right-wrap-white"},[r("div",{staticClass:"same-style header-search d-none d-lg-block"},[r("button",{staticClass:"search-active",on:{click:function(e){t.isOpenSearch=!t.isOpenSearch}}},[r("i",{staticClass:"pe-7s-search"})]),t._v(" "),r("div",{staticClass:"search-content",class:{active:t.isOpenSearch}},[t._m(0)])]),t._v(" "),r("div",{staticClass:"same-style account-setting d-none d-lg-block"},[r("button",{staticClass:"account-setting-active",on:{click:function(e){t.isOpenAccountSettings=!t.isOpenAccountSettings}}},[r("i",{staticClass:"pe-7s-user-female"})]),t._v(" "),r("div",{staticClass:"account-dropdown",class:{active:t.isOpenAccountSettings}},[r("ul",[r("li",[r("n-link",{attrs:{to:"/login-register"}},[t._v("Login")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/login-register"}},[t._v("Register")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/my-account"}},[t._v("my account")])],1)])])]),t._v(" "),r("div",{staticClass:"same-style header-compare"},[r("n-link",{attrs:{to:"/compare"}},[r("i",{staticClass:"pe-7s-shuffle"})]),t._v(" "),r("span",{staticClass:"count-style"},[t._v(t._s(t.compareItemCount))])],1),t._v(" "),r("div",{staticClass:"same-style header-wishlist"},[r("n-link",{attrs:{to:"/wishlist"}},[r("i",{staticClass:"pe-7s-like"})]),t._v(" "),r("span",{staticClass:"count-style"},[t._v(t._s(t.wishlistItemCount))])],1),t._v(" "),r("div",{staticClass:"same-style cart-wrap"},[r("button",{staticClass:"icon-cart",on:{click:function(e){t.openCart=!t.openCart}}},[r("i",{staticClass:"pe-7s-shopbag"}),t._v(" "),r("span",{staticClass:"count-style"},[t._v(t._s(t.cartItemCount))])]),t._v(" "),r("MiniCart",{attrs:{miniCart:{visible:t.openCart}},on:{minicartClose:function(e){t.openCart=!t.openCart}}})],1),t._v(" "),r("div",{staticClass:"same-style mobile-menu-toggler d-block d-lg-none"},[r("button",{staticClass:"mobile-aside-button",on:{click:function(e){t.navOpen=!t.navOpen}}},[r("i",{staticClass:"pe-7s-menu"})])])])])])])]),t._v(" "),r("OffCanvasMobileMenu",{class:{"show-mobile-menu":t.navOpen},on:{toggleAsideMenu:function(e){t.navOpen=!t.navOpen}}})],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",[r("input",{attrs:{type:"text",placeholder:"Search"}}),t._v(" "),r("button",{staticClass:"button-search"},[r("i",{staticClass:"pe-7s-search"})])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:r(211).default,MiniCart:r(209).default,OffCanvasMobileMenu:r(210).default})},370:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{swiperOption:{loop:!0,speed:750,slidesPerView:1,spaceBetween:10,autoplay:{delay:6e3},effect:"fade",fadeEffect:{crossFade:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},sliderData:[{subTitle:"New Arrival",title:"Final Sale",desc:"30% off Winter Vacation",backgroundImage:"/img/slider/slider-4-1.jpg"},{subTitle:"New Arrival",title:"Final Sale",desc:"40% off Winter Vacation",backgroundImage:"/img/slider/slider-4-2.jpg"}]}}},o=r(12),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"slider-area nav-style-1"},[r("swiper",{attrs:{options:t.swiperOption}},[t._l(t.sliderData,(function(e,n){return r("swiper-slide",{key:n,staticClass:"slider-height-4 d-flex align-items-center bg-img",style:{backgroundImage:"url("+e.backgroundImage+")"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"slider-content-4 slider-animation-1 text-center"},[r("h3",[t._v(t._s(e.subTitle))]),t._v(" "),r("h1",[t._v(t._s(e.title))]),t._v(" "),r("p",[t._v(t._s(e.desc))]),t._v(" "),r("div",{staticClass:"slider-btn btn-hover"},[r("n-link",{attrs:{to:"/shop"}},[t._v("SHOP NOW")])],1)])])])])])})),t._v(" "),r("div",{staticClass:"hero-slider-nav swiper-button-prev"},[r("i",{staticClass:"pe-7s-angle-left"})]),t._v(" "),r("div",{staticClass:"hero-slider-nav swiper-button-next"},[r("i",{staticClass:"pe-7s-angle-right"})])],2)],1)}),[],!1,null,null,null);e.default=component.exports},371:function(t,e,r){"use strict";r.r(e);r(10),r(28),r(29);var n={components:{ProductGridStyleThree:function(){return Promise.resolve().then(r.bind(null,348))},QuickView:function(){return Promise.resolve().then(r.bind(null,323))}},computed:{products:function(){return this.$store.getters.getProducts}}},o=r(12),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"product-area hm5-section-padding pt-100 pb-90"},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row"},[t._l(t.products.slice(0,8),(function(t,e){return r("div",{key:e,staticClass:"col-xl-3 col-lg-4 col-sm-6"},[r("ProductGridStyleThree",{attrs:{product:t}})],1)})),t._v(" "),r("div",{staticClass:"view-more text-center mt-20 toggle-btn2 col-12"},[r("n-link",{staticClass:"loadMore2",attrs:{to:"/shop"}},[t._v("VIEW MORE PRODUCTS")])],1)],2)])]),t._v(" "),r("QuickView")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductGridStyleThree:r(348).default,QuickView:r(323).default})},372:function(t,e,r){"use strict";r.r(e);var n={},o=r(12),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"footer-area bg-black pt-80 pb-25"},[r("div",{staticClass:"footer-top text-center"},[r("div",{staticClass:"container"},[r("div",{staticClass:"footer-logo"},[r("n-link",{attrs:{to:"/"}},[r("img",{attrs:{src:"/img/logo/logo-2.png",alt:"logo"}})])],1),t._v(" "),r("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim")]),t._v(" "),t._m(0)])]),t._v(" "),t._m(1)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer-social"},[r("ul",[r("li",[r("a",{attrs:{href:"https://www.facebook.com/",target:"_blank"}},[r("i",{staticClass:"fa fa-facebook"})])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://dribbble.com/",target:"_blank"}},[r("i",{staticClass:"fa fa-dribbble"})])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.pinterest.com/",target:"_blank"}},[r("i",{staticClass:"fa fa-pinterest-p"})])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/",target:"_blank"}},[r("i",{staticClass:"fa fa-twitter"})])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.linkedin.com/",target:"_blank"}},[r("i",{staticClass:"fa fa-linkedin"})])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer-bottom text-center"},[r("div",{staticClass:"container"},[r("div",{staticClass:"copyright-2"},[r("p",[t._v("© 2023 "),r("a",{attrs:{href:"#",target:"_blank"}},[t._v("Flone")]),t._v(" All Rights Reserved.")])])])])}],!1,null,null,null);e.default=component.exports},395:function(t,e,r){"use strict";r(352)},410:function(t,e,r){"use strict";r.r(e);r(10),r(28),r(29);var n={components:{HeaderLogoCenterWithTransparent:function(){return Promise.resolve().then(r.bind(null,369))},HeroSliderFour:function(){return Promise.resolve().then(r.bind(null,370))},ProductWrapperFour:function(){return Promise.resolve().then(r.bind(null,371))},NewsletterStyleOne:function(){return Promise.resolve().then(r.bind(null,344))},FooterStyleTwo:function(){return Promise.resolve().then(r.bind(null,372))}},head:function(){return{title:"Home Fashion Four"}}},o=(r(395),r(12)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper-four"},[r("HeaderLogoCenterWithTransparent"),t._v(" "),r("HeroSliderFour"),t._v(" "),r("ProductWrapperFour"),t._v(" "),r("NewsletterStyleOne"),t._v(" "),r("FooterStyleTwo")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderLogoCenterWithTransparent:r(369).default,HeroSliderFour:r(370).default,ProductWrapperFour:r(371).default,NewsletterStyleOne:r(344).default,FooterStyleTwo:r(372).default})}}]);