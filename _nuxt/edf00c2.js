(window.webpackJsonp=window.webpackJsonp||[]).push([[93,21,30,46,67],{322:function(t,e,r){"use strict";r.r(e);var l={},o=r(12),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"footer-area bg-gray pt-100 pb-70"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-2 col-sm-4"},[r("div",{staticClass:"copyright mb-30"},[r("div",{staticClass:"footer-logo"},[r("n-link",{attrs:{to:"/"}},[r("img",{attrs:{src:"/img/logo/logo.png",alt:"logo"}})])],1),t._v(" "),t._m(0)])]),t._v(" "),r("div",{staticClass:"col-lg-2 col-sm-4"},[r("div",{staticClass:"footer-widget mb-30 ml-30"},[t._m(1),t._v(" "),r("div",{staticClass:"footer-list"},[r("ul",[r("li",[r("n-link",{attrs:{to:"/about"}},[t._v("About us")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/shop"}},[t._v("Store location")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/contact"}},[t._v("Orders tracking")])],1)])])])]),t._v(" "),r("div",{staticClass:"col-lg-2 col-sm-4"},[r("div",{staticClass:"footer-widget mb-30 ml-50"},[t._m(2),t._v(" "),r("div",{staticClass:"footer-list"},[r("ul",[r("li",[r("n-link",{attrs:{to:"/about"}},[t._v("Returns")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/about"}},[t._v("Support Policy")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/about"}},[t._v("Size guide")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/about"}},[t._v("FAQs")])],1)])])])]),t._v(" "),t._m(3),t._v(" "),t._m(4)])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("© 2023 "),r("a",{attrs:{href:"#",target:"_blank"}},[t._v("Flone")]),t._v("."),r("br"),t._v(" All Rights Reserved")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer-title"},[r("h3",[t._v("ABOUT US")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer-title"},[r("h3",[t._v("USEFUL LINKS")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-lg-2 col-sm-6"},[r("div",{staticClass:"footer-widget mb-30 ml-75"},[r("div",{staticClass:"footer-title"},[r("h3",[t._v("FOLLOW US")])]),t._v(" "),r("div",{staticClass:"footer-list"},[r("ul",[r("li",[r("a",{attrs:{href:"https://www.facebook.com/",target:"_blank"}},[t._v("Facebook")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.instagram.com/",target:"_blank"}},[t._v("Instagram")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.youtube.com/",target:"_blank"}},[t._v("Youtube")])])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-lg-4 col-sm-6"},[r("div",{staticClass:"footer-widget mb-30 ml-70"},[r("div",{staticClass:"footer-title"},[r("h3",[t._v("SUBSCRIBE")])]),t._v(" "),r("div",{staticClass:"subscribe-style"},[r("p",[t._v("Get E-mail updates about our latest shop and special offers.")]),t._v(" "),r("div",{staticClass:"subscribe-form"},[r("form",{staticClass:"mc-form"},[r("input",{staticClass:"email",attrs:{type:"email",required:"",placeholder:"Enter your email here..",name:"email"}}),t._v(" "),r("button",{staticClass:"button",attrs:{name:"subscribe"}},[t._v("Subscribe")])])])])])])}],!1,null,null,null);e.default=component.exports},324:function(t,e,r){"use strict";r.r(e);r(10),r(28),r(29);var l={components:{Navigation:function(){return Promise.resolve().then(r.bind(null,211))},MiniCart:function(){return Promise.resolve().then(r.bind(null,209))}},props:["containerClass"],computed:{cartItemCount:function(){return this.$store.getters.cartItemCount},wishlistItemCount:function(){return this.$store.getters.wishlistItemCount},compareItemCount:function(){return this.$store.getters.compareItemCount}},data:function(){return{isSticky:!1,isOpenSearch:!1,isOpenAccountSettings:!1,openCart:!1,navOpen:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))}},o=r(12),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("header",{staticClass:"header-area"},[r("div",{staticClass:"header-top-area header-padding-2 d-none d-lg-block"},[r("div",{class:t.containerClass},[t._m(0)])]),t._v(" "),r("div",{staticClass:"header-padding-1 sticky-bar header-res-padding clearfix",class:{"is-sticky":t.isSticky}},[r("div",{class:t.containerClass},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-2 col-md-6 col-4"},[r("div",{staticClass:"logo"},[r("n-link",{attrs:{to:"/"}},[r("img",{attrs:{src:"/img/logo/logo.png",alt:"flone logo"}})])],1)]),t._v(" "),r("div",{staticClass:"col-lg-8 d-none d-lg-block"},[r("div",{staticClass:"main-menu"},[r("nav",[r("Navigation")],1)])]),t._v(" "),r("div",{staticClass:"col-lg-2 col-md-6 col-8"},[r("div",{staticClass:"header-right-wrap"},[r("div",{staticClass:"same-style header-search d-none d-lg-block"},[r("button",{staticClass:"search-active",on:{click:function(e){t.isOpenSearch=!t.isOpenSearch}}},[r("i",{staticClass:"pe-7s-search"})]),t._v(" "),r("div",{staticClass:"search-content",class:{active:t.isOpenSearch}},[t._m(1)])]),t._v(" "),r("div",{staticClass:"same-style account-setting d-none d-lg-block"},[r("button",{staticClass:"account-setting-active",on:{click:function(e){t.isOpenAccountSettings=!t.isOpenAccountSettings}}},[r("i",{staticClass:"pe-7s-user-female"})]),t._v(" "),r("div",{staticClass:"account-dropdown",class:{active:t.isOpenAccountSettings}},[r("ul",[r("li",[r("n-link",{attrs:{to:"/login-register"}},[t._v("Login")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/login-register"}},[t._v("Register")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/my-account"}},[t._v("my account")])],1)])])]),t._v(" "),r("div",{staticClass:"same-style header-compare"},[r("n-link",{attrs:{to:"/compare"}},[r("i",{staticClass:"pe-7s-shuffle"})]),t._v(" "),r("span",{staticClass:"count-style"},[t._v(t._s(t.compareItemCount))])],1),t._v(" "),r("div",{staticClass:"same-style header-wishlist"},[r("n-link",{attrs:{to:"/wishlist"}},[r("i",{staticClass:"pe-7s-like"})]),t._v(" "),r("span",{staticClass:"count-style"},[t._v(t._s(t.wishlistItemCount))])],1),t._v(" "),r("div",{staticClass:"same-style cart-wrap"},[r("button",{staticClass:"icon-cart",on:{click:function(e){t.openCart=!t.openCart}}},[r("i",{staticClass:"pe-7s-shopbag"}),t._v(" "),r("span",{staticClass:"count-style"},[t._v(t._s(t.cartItemCount))])]),t._v(" "),r("MiniCart",{attrs:{miniCart:{visible:t.openCart}},on:{minicartClose:function(e){t.openCart=!t.openCart}}})],1),t._v(" "),r("div",{staticClass:"same-style mobile-menu-toggler d-block d-lg-none"},[r("button",{staticClass:"mobile-aside-button",on:{click:function(e){t.navOpen=!t.navOpen}}},[r("i",{staticClass:"pe-7s-menu"})])])])])])])])]),t._v(" "),r("OffCanvasMobileMenu",{class:{"show-mobile-menu":t.navOpen},on:{toggleAsideMenu:function(e){t.navOpen=!t.navOpen}}})],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header-top-inner"},[r("div",{staticClass:"language-currency-wrap"},[r("div",{staticClass:"same-language-currency language-style"},[r("select",{attrs:{name:"language"}},[r("option",{attrs:{value:"english"}},[t._v("English")]),t._v(" "),r("option",{attrs:{value:"hindi"}},[t._v("Hindi")]),t._v(" "),r("option",{attrs:{value:"spanish"}},[t._v("Spanish")])])]),t._v(" "),r("div",{staticClass:"same-language-currency use-style"},[r("select",{attrs:{name:"currency"}},[r("option",{attrs:{value:"usd"}},[t._v("USD")]),t._v(" "),r("option",{attrs:{value:"eur"}},[t._v("EUR")]),t._v(" "),r("option",{attrs:{value:"rup"}},[t._v("Rup")])])]),t._v(" "),r("div",{staticClass:"same-language-currency"},[r("p",[t._v("Call: "),r("a",{attrs:{href:"callto:3965410"}},[t._v("3965410")])])])]),t._v(" "),r("div",{staticClass:"header-offer"},[r("p",[t._v("Free delivery on order over "),r("span",[t._v("$200")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",[r("input",{attrs:{type:"text",placeholder:"Search"}}),t._v(" "),r("button",{staticClass:"button-search"},[r("i",{staticClass:"pe-7s-search"})])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:r(211).default,MiniCart:r(209).default,OffCanvasMobileMenu:r(210).default})},326:function(t,e,r){"use strict";r.r(e);var l={props:["pageTitle"]},o=r(12),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"breadcrumb-area pt-35 pb-35 bg-gray-3"},[r("div",{staticClass:"container"},[r("div",{staticClass:"breadcrumb-content text-center"},[r("ul",[r("li",[r("n-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),r("li",{staticClass:"active"},[t._v(t._s(t.pageTitle))])])])])])}),[],!1,null,null,null);e.default=component.exports},350:function(t,e,r){"use strict";r.r(e);var l={},o=r(12),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"description-review-area pb-90"},[r("div",{staticClass:"container"},[r("div",{staticClass:"description-review-wrapper"},[r("div",{staticClass:"description-review-topbar nav"},[r("a",{attrs:{"data-bs-toggle":"tab",href:"#des-details1"}},[t._v("Additional information")]),t._v(" "),r("a",{staticClass:"active",attrs:{"data-bs-toggle":"tab",href:"#des-details2"}},[t._v("Description")]),t._v(" "),r("a",{attrs:{"data-bs-toggle":"tab",href:"#des-details3"}},[t._v("Reviews (2)")])]),t._v(" "),r("div",{staticClass:"tab-content description-review-bottom"},[r("div",{staticClass:"tab-pane active",attrs:{id:"des-details2"}},[r("div",{staticClass:"product-description-wrapper"},[r("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt")]),t._v(" "),r("p",[t._v("ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo consequat. Duis aute irure dolor in reprehend in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt ")])])]),t._v(" "),r("div",{staticClass:"tab-pane ",attrs:{id:"des-details1"}},[r("div",{staticClass:"product-anotherinfo-wrapper"},[r("ul",[r("li",[r("span",[t._v("Weight")]),t._v(" 400 g")]),t._v(" "),r("li",[r("span",[t._v("Dimensions")]),t._v("10 x 10 x 15 cm ")]),t._v(" "),r("li",[r("span",[t._v("Materials")]),t._v(" 60% cotton, 40% polyester")]),t._v(" "),r("li",[r("span",[t._v("Other Info")]),t._v(" American heirloom jean shorts pug seitan letterpress")])])])]),t._v(" "),r("div",{staticClass:"tab-pane",attrs:{id:"des-details3"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-7"},[r("div",{staticClass:"review-wrapper"},[r("div",{staticClass:"single-review"},[r("div",{staticClass:"review-img"},[r("img",{attrs:{src:"/img/testimonial/1.jpg",alt:""}})]),t._v(" "),r("div",{staticClass:"review-content"},[r("div",{staticClass:"review-top-wrap"},[r("div",{staticClass:"review-left"},[r("div",{staticClass:"review-name"},[r("h4",[t._v("White Lewis")])]),t._v(" "),r("div",{staticClass:"review-rating"},[r("i",{staticClass:"fa fa-star"}),t._v(" "),r("i",{staticClass:"fa fa-star"}),t._v(" "),r("i",{staticClass:"fa fa-star"}),t._v(" "),r("i",{staticClass:"fa fa-star"}),t._v(" "),r("i",{staticClass:"fa fa-star"})])]),t._v(" "),r("div",{staticClass:"review-left"},[r("a",{attrs:{href:"#"}},[t._v("Reply")])])]),t._v(" "),r("div",{staticClass:"review-bottom"},[r("p",[t._v("Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia Curae Suspendisse viverra ed viverra. Mauris ullarper euismod vehicula. Phasellus quam nisi, congue id nulla.")])])])]),t._v(" "),r("div",{staticClass:"single-review child-review"},[r("div",{staticClass:"review-img"},[r("img",{attrs:{src:"/img/testimonial/2.jpg",alt:""}})]),t._v(" "),r("div",{staticClass:"review-content"},[r("div",{staticClass:"review-top-wrap"},[r("div",{staticClass:"review-left"},[r("div",{staticClass:"review-name"},[r("h4",[t._v("White Lewis")])]),t._v(" "),r("div",{staticClass:"review-rating"},[r("i",{staticClass:"fa fa-star"}),t._v(" "),r("i",{staticClass:"fa fa-star"}),t._v(" "),r("i",{staticClass:"fa fa-star"}),t._v(" "),r("i",{staticClass:"fa fa-star"}),t._v(" "),r("i",{staticClass:"fa fa-star"})])]),t._v(" "),r("div",{staticClass:"review-left"},[r("a",{attrs:{href:"#"}},[t._v("Reply")])])]),t._v(" "),r("div",{staticClass:"review-bottom"},[r("p",[t._v("Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia Curae Sus pen disse viverra ed viverra. Mauris ullarper euismod vehicula. ")])])])])])]),t._v(" "),r("div",{staticClass:"col-lg-5"},[r("div",{staticClass:"ratting-form-wrapper pl-50"},[r("h3",[t._v("Add a Review")]),t._v(" "),r("div",{staticClass:"ratting-form"},[r("form",[r("div",{staticClass:"star-box"},[r("span",[t._v("Your rating:")]),t._v(" "),r("div",{staticClass:"ratting-star"},[r("i",{staticClass:"fa fa-star"}),t._v(" "),r("i",{staticClass:"fa fa-star"}),t._v(" "),r("i",{staticClass:"fa fa-star"}),t._v(" "),r("i",{staticClass:"fa fa-star"}),t._v(" "),r("i",{staticClass:"fa fa-star"})])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"rating-form-style mb-10"},[r("input",{attrs:{placeholder:"Name",type:"text"}})])]),t._v(" "),r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"rating-form-style mb-10"},[r("input",{attrs:{placeholder:"Email",type:"email"}})])]),t._v(" "),r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"rating-form-style form-submit"},[r("textarea",{attrs:{name:"Your Review",placeholder:"Message"}}),t._v(" "),r("input",{attrs:{type:"submit",value:"Submit"}})])])])])])])])])])])])])])}],!1,null,null,null);e.default=component.exports},430:function(t,e,r){"use strict";r.r(e);r(44),r(37),r(43),r(56),r(32),r(57);var l=r(25);r(208),r(10);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var n={data:function(){return{singleQuantity:1,swiperOptionTop:{loop:!0,slidesPerView:1,spaceBetween:10,effect:"fade",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},swiperOptionThumbs:{loop:!0,spaceBetween:10,slidesPerView:4,freeMode:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0,slideToClickedSlide:!0,loopedSlides:4}}},computed:{product:function(){return this.$store.getters.getProducts[1]}},mounted:function(){var t=this;this.$nextTick((function(){var e=t.$refs.swiperTop.$swiper,r=t.$refs.swiperThumbs.$swiper;e.controller.control=r,r.controller.control=e}))},methods:{addToCart:function(t){var e=c(c({},t),{},{cartQuantity:this.singleQuantity});this.$store.state.cart.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to cart update with one"}):this.$notify({title:"Add to cart successfully!"}),this.$store.dispatch("addToCartItem",e)},discountedPrice:function(t){return t.price-t.price*t.discount/100},increaseQuantity:function(){this.product.quantity>this.singleQuantity&&this.singleQuantity++},decreaseQuantity:function(){this.singleQuantity>1&&this.singleQuantity--},addToWishlist:function(t){this.$store.state.wishlist.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to wishlist!"}):this.$notify({title:"Add to wishlist successfully!"}),this.$store.dispatch("addToWishlist",t)},addToCompare:function(t){this.$store.state.compare.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to compare!"}):this.$notify({title:"Add to compare successfully!"}),this.$store.dispatch("addToCompare",t)}},head:function(){return{title:"Product Affiliate"}}},v=r(12),component=Object(v.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-details-page-wrapper"},[r("HeaderWithTopbar",{attrs:{containerClass:"container"}}),t._v(" "),r("Breadcrumb",{attrs:{pageTitle:"product affiliate"}}),t._v(" "),r("div",{staticClass:"shop-area pt-100 pb-100"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"product-details-slider"},[r("div",{staticClass:"product-details-img"},[r("div",{staticClass:"product-badges"},[t.product.new?r("span",{staticClass:"product-label pink"},[t._v("New")]):t._e(),t._v(" "),t.product.discount?r("span",{staticClass:"product-label purple"},[t._v("-"+t._s(t.product.discount)+"%")]):t._e()]),t._v(" "),r("swiper",{ref:"swiperTop",attrs:{options:t.swiperOptionTop}},[t._l(t.product.images,(function(image,e){return r("div",{key:e,staticClass:"large-img swiper-slide"},[r("img",{staticClass:"img-fluid",attrs:{src:image,alt:t.product.title}})])})),t._v(" "),r("div",{staticClass:"quickview-nav swiper-button-prev"},[r("i",{staticClass:"pe-7s-angle-left"})]),t._v(" "),r("div",{staticClass:"quickview-nav swiper-button-next"},[r("i",{staticClass:"pe-7s-angle-right"})])],2),t._v(" "),r("swiper",{ref:"swiperThumbs",staticClass:"mt-2",attrs:{options:t.swiperOptionThumbs}},t._l(t.product.images,(function(image,e){return r("div",{key:e,staticClass:"thumb-img swiper-slide"},[r("img",{staticClass:"img-fluid",attrs:{src:image,alt:t.product.title}})])})),0)],1)])]),t._v(" "),r("div",{staticClass:"col-lg-6 col-md-6"},[r("div",{staticClass:"product-details-content ml-70"},[r("h2",[t._v(t._s(t.product.title))]),t._v(" "),r("div",{staticClass:"product-details-price"},[r("span",[t._v("$"+t._s(t.discountedPrice(t.product).toFixed(2)))]),t._v(" "),t.product.discount>0?r("span",{staticClass:"old"},[t._v("$"+t._s(t.product.price.toFixed(2)))]):t._e()]),t._v(" "),r("div",{staticClass:"pro-details-rating-wrap"},[5==t.product.rating?r("div",{staticClass:"pro-details-rating"},[r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o yellow"})]):t._e(),t._v(" "),4==t.product.rating?r("div",{staticClass:"pro-details-rating"},[r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o"})]):t._e(),t._v(" "),3==t.product.rating?r("div",{staticClass:"pro-details-rating"},[r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o"}),t._v(" "),r("i",{staticClass:"fa fa-star-o"})]):t._e(),t._v(" "),2==t.product.rating?r("div",{staticClass:"pro-details-rating"},[r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o"}),t._v(" "),r("i",{staticClass:"fa fa-star-o"}),t._v(" "),r("i",{staticClass:"fa fa-star-o"})]):t._e(),t._v(" "),1==t.product.rating?r("div",{staticClass:"pro-details-rating"},[r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o"}),t._v(" "),r("i",{staticClass:"fa fa-star-o"}),t._v(" "),r("i",{staticClass:"fa fa-star-o"}),t._v(" "),r("i",{staticClass:"fa fa-star-o"})]):t._e(),t._v(" "),r("span",[r("a",{attrs:{href:"#"}},[t._v(t._s(t.product.rating)+" Reviews")])])]),t._v(" "),r("p",[t._v(t._s(t.product.description))]),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"pro-details-meta"},[r("span",{staticClass:"label"},[t._v("Categories:")]),t._v(" "),r("ul",t._l(t.product.category,(function(e,l){return r("li",{key:l},[r("n-link",{attrs:{to:"/shop?category="+e}},[t._v(t._s(e)+",")])],1)})),0)]),t._v(" "),r("div",{staticClass:"pro-details-meta"},[r("span",{staticClass:"label"},[t._v("Tag:")]),t._v(" "),r("ul",t._l(t.product.tag,(function(e,l){return r("li",{key:l},[r("n-link",{attrs:{to:"/shop?tag="+e}},[t._v(t._s(e)+",")])],1)})),0)]),t._v(" "),t._m(1)])])])])]),t._v(" "),r("ProductDetailsDescriptionReview"),t._v(" "),r("TheFooter")],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pro-details-cart mt-20 mb-20"},[r("a",{staticClass:"empty-cart__button",attrs:{href:"https://www.amazon.com/",target:"_blank"}},[t._v("Buy Now")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pro-details-social"},[r("ul",[r("li",[r("a",{attrs:{href:"https://www.facebook.com/",target:"_blank"}},[r("i",{staticClass:"fa fa-facebook"})])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://dribbble.com/",target:"_blank"}},[r("i",{staticClass:"fa fa-dribbble"})])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.pinterest.com/",target:"_blank"}},[r("i",{staticClass:"fa fa-pinterest-p"})])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/",target:"_blank"}},[r("i",{staticClass:"fa fa-twitter"})])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.linkedin.com/",target:"_blank"}},[r("i",{staticClass:"fa fa-linkedin"})])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderWithTopbar:r(324).default,Breadcrumb:r(326).default,ProductDetailsDescriptionReview:r(350).default,TheFooter:r(322).default})}}]);