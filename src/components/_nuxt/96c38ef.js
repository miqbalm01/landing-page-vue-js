(window.webpackJsonp=window.webpackJsonp||[]).push([[88,16,19,31,48,52,61,63,67,68],{321:function(t,e,l){},322:function(t,e,l){"use strict";l.r(e);var o={},r=l(12),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("footer",{staticClass:"footer-area bg-gray pt-100 pb-70"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-2 col-sm-4"},[l("div",{staticClass:"copyright mb-30"},[l("div",{staticClass:"footer-logo"},[l("n-link",{attrs:{to:"/"}},[l("img",{attrs:{src:"/img/logo/logo.png",alt:"logo"}})])],1),t._v(" "),t._m(0)])]),t._v(" "),l("div",{staticClass:"col-lg-2 col-sm-4"},[l("div",{staticClass:"footer-widget mb-30 ml-30"},[t._m(1),t._v(" "),l("div",{staticClass:"footer-list"},[l("ul",[l("li",[l("n-link",{attrs:{to:"/about"}},[t._v("About us")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"/shop"}},[t._v("Store location")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"/contact"}},[t._v("Orders tracking")])],1)])])])]),t._v(" "),l("div",{staticClass:"col-lg-2 col-sm-4"},[l("div",{staticClass:"footer-widget mb-30 ml-50"},[t._m(2),t._v(" "),l("div",{staticClass:"footer-list"},[l("ul",[l("li",[l("n-link",{attrs:{to:"/about"}},[t._v("Returns")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"/about"}},[t._v("Support Policy")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"/about"}},[t._v("Size guide")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"/about"}},[t._v("FAQs")])],1)])])])]),t._v(" "),t._m(3),t._v(" "),t._m(4)])])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("p",[t._v("© 2023 "),l("a",{attrs:{href:"#",target:"_blank"}},[t._v("Flone")]),t._v("."),l("br"),t._v(" All Rights Reserved")])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"footer-title"},[l("h3",[t._v("ABOUT US")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"footer-title"},[l("h3",[t._v("USEFUL LINKS")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-lg-2 col-sm-6"},[l("div",{staticClass:"footer-widget mb-30 ml-75"},[l("div",{staticClass:"footer-title"},[l("h3",[t._v("FOLLOW US")])]),t._v(" "),l("div",{staticClass:"footer-list"},[l("ul",[l("li",[l("a",{attrs:{href:"https://www.facebook.com/",target:"_blank"}},[t._v("Facebook")])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://twitter.com/",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://www.instagram.com/",target:"_blank"}},[t._v("Instagram")])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://www.youtube.com/",target:"_blank"}},[t._v("Youtube")])])])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-lg-4 col-sm-6"},[l("div",{staticClass:"footer-widget mb-30 ml-70"},[l("div",{staticClass:"footer-title"},[l("h3",[t._v("SUBSCRIBE")])]),t._v(" "),l("div",{staticClass:"subscribe-style"},[l("p",[t._v("Get E-mail updates about our latest shop and special offers.")]),t._v(" "),l("div",{staticClass:"subscribe-form"},[l("form",{staticClass:"mc-form"},[l("input",{staticClass:"email",attrs:{type:"email",required:"",placeholder:"Enter your email here..",name:"email"}}),t._v(" "),l("button",{staticClass:"button",attrs:{name:"subscribe"}},[t._v("Subscribe")])])])])])])}],!1,null,null,null);e.default=component.exports},323:function(t,e,l){"use strict";l.r(e);l(44),l(37),l(43),l(56),l(32),l(57);var o=l(25);l(208),l(10);function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,l)}return e}function n(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var c={data:function(){return{item:"",singleQuantity:1,swiperOptionTop:{loop:!0,slidesPerView:1,spaceBetween:10,effect:"fade",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},computed:{product:function(){return this.item}},methods:{beforeOpen:function(t){var e=t.params;this.item=e},addToCart:function(t){var e=n(n({},t),{},{cartQuantity:this.singleQuantity});this.$store.state.cart.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to cart update with one"}):this.$notify({title:"Add to cart successfully!"}),this.$store.dispatch("addToCartItem",e)},discountedPrice:function(t){return t.price-t.price*t.discount/100},increaseQuantity:function(){this.product.quantity>this.singleQuantity&&this.singleQuantity++},decreaseQuantity:function(){this.singleQuantity>1&&this.singleQuantity--},addToWishlist:function(t){this.$store.state.wishlist.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to wishlist!"}):this.$notify({title:"Add to wishlist successfully!"}),this.$store.dispatch("addToWishlist",t)},addToCompare:function(t){this.$store.state.compare.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to compare!"}):this.$notify({title:"Add to compare successfully!"}),this.$store.dispatch("addToCompare",t)}}},d=(l(325),l(12)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("client-only",[l("modal",{attrs:{name:"quickview",width:"50%",scrollable:!0,height:"auto"},on:{"before-open":t.beforeOpen}},[l("div",{staticClass:"quickview-wrapper row"},[l("div",{staticClass:"col-md-6"},[l("div",{staticClass:"product-details-slider"},[l("div",{staticClass:"product-details-img"},[l("div",{staticClass:"product-badges"},[t.product.new?l("span",{staticClass:"product-label pink"},[t._v("New")]):t._e(),t._v(" "),t.product.discount?l("span",{staticClass:"product-label purple"},[t._v("-"+t._s(t.product.discount)+"%")]):t._e()]),t._v(" "),l("swiper",{attrs:{options:t.swiperOptionTop}},[t._l(t.product.images,(function(image,e){return l("div",{key:e,staticClass:"large-img swiper-slide"},[l("img",{staticClass:"img-fluid",attrs:{src:image,alt:t.product.title}})])})),t._v(" "),l("div",{staticClass:"quickview-nav swiper-button-prev"},[l("i",{staticClass:"pe-7s-angle-left"})]),t._v(" "),l("div",{staticClass:"quickview-nav swiper-button-next"},[l("i",{staticClass:"pe-7s-angle-right"})])],2)],1)])]),t._v(" "),l("div",{staticClass:"col-md-6"},[l("div",{staticClass:"product-details-content"},[l("div",{attrs:{slot:"top-right"},slot:"top-right"},[l("button",{staticClass:"modal-close",on:{click:function(e){return t.$modal.hide("quickview")}}},[l("i",{staticClass:"fa fa-times"})])]),t._v(" "),l("h2",[t._v(t._s(t.product.title))]),t._v(" "),l("div",{staticClass:"product-details-price"},[l("span",[t._v("$"+t._s(t.discountedPrice(t.product).toFixed(2)))]),t._v(" "),t.product.discount>0?l("span",{staticClass:"old"},[t._v("$"+t._s(t.product.price.toFixed(2)))]):t._e()]),t._v(" "),l("div",{staticClass:"pro-details-rating-wrap"},[5==t.product.rating?l("div",{staticClass:"pro-details-rating"},[l("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),l("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),l("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),l("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),l("i",{staticClass:"fa fa-star-o yellow"})]):t._e(),t._v(" "),4==t.product.rating?l("div",{staticClass:"pro-details-rating"},[l("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),l("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),l("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),l("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),l("i",{staticClass:"fa fa-star-o"})]):t._e(),t._v(" "),3==t.product.rating?l("div",{staticClass:"pro-details-rating"},[l("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),l("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),l("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),l("i",{staticClass:"fa fa-star-o"}),t._v(" "),l("i",{staticClass:"fa fa-star-o"})]):t._e(),t._v(" "),2==t.product.rating?l("div",{staticClass:"pro-details-rating"},[l("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),l("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),l("i",{staticClass:"fa fa-star-o"}),t._v(" "),l("i",{staticClass:"fa fa-star-o"}),t._v(" "),l("i",{staticClass:"fa fa-star-o"})]):t._e(),t._v(" "),1==t.product.rating?l("div",{staticClass:"pro-details-rating"},[l("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),l("i",{staticClass:"fa fa-star-o"}),t._v(" "),l("i",{staticClass:"fa fa-star-o"}),t._v(" "),l("i",{staticClass:"fa fa-star-o"}),t._v(" "),l("i",{staticClass:"fa fa-star-o"})]):t._e(),t._v(" "),l("span",[l("a",{attrs:{href:"#"}},[t._v(t._s(t.product.rating)+" Reviews")])])]),t._v(" "),l("p",[t._v(t._s(t.product.description))]),t._v(" "),t.product.variation?l("div",{staticClass:"pro-details-size-color"},[l("div",{staticClass:"pro-details-color-wrap"},[l("h6",{staticClass:"label"},[t._v("Color")]),t._v(" "),l("div",{staticClass:"pro-details-color-content"},t._l(t.product.variation.color,(function(e,o){return l("label",{key:o,staticClass:"radio",class:e},[l("input",{attrs:{type:"radio",name:"colorGroup"}}),t._v(" "),l("span",{staticClass:"check-mark"})])})),0)]),t._v(" "),l("div",{staticClass:"pro-details-size-wrap"},[l("h6",{staticClass:"label"},[t._v("Size")]),t._v(" "),l("div",{staticClass:"pro-details-size-content"},t._l(t.product.variation.sizes,(function(e,o){return l("label",{key:o,staticClass:"radio"},[l("input",{attrs:{type:"radio",name:"sizeGroup"}}),t._v(" "),l("span",{staticClass:"check-mark"},[t._v(t._s(e))])])})),0)])]):t._e(),t._v(" "),l("div",{staticClass:"pro-details-quality"},[l("div",{staticClass:"cart-plus-minus"},[l("button",{staticClass:"dec qtybutton",on:{click:function(e){return t.decreaseQuantity()}}},[t._v("-")]),t._v(" "),l("input",{staticClass:"cart-plus-minus-box",attrs:{type:"text",readonly:""},domProps:{value:t.singleQuantity}}),t._v(" "),l("button",{staticClass:"inc qtybutton",on:{click:function(e){return t.increaseQuantity()}}},[t._v("+")])]),t._v(" "),l("div",{staticClass:"pro-details-cart btn-hover"},[l("button",{on:{click:function(e){return t.addToCart(t.product)}}},[t._v("Add To Cart")])]),t._v(" "),l("div",{staticClass:"pro-details-wishlist"},[l("button",{on:{click:function(e){return t.addToWishlist(t.product)}}},[l("i",{staticClass:"fa fa-heart-o"})])]),t._v(" "),l("div",{staticClass:"pro-details-compare"},[l("button",{on:{click:function(e){return t.addToCompare(t.product)}}},[l("i",{staticClass:"pe-7s-shuffle"})])])]),t._v(" "),l("div",{staticClass:"pro-details-meta"},[l("span",{staticClass:"label"},[t._v("Categories:")]),t._v(" "),l("ul",t._l(t.product.category,(function(e,o){return l("li",{key:o},[l("n-link",{attrs:{to:"/shop?category="+e}},[t._v(t._s(e)+",")])],1)})),0)]),t._v(" "),l("div",{staticClass:"pro-details-meta"},[l("span",{staticClass:"label"},[t._v("Tag:")]),t._v(" "),l("ul",t._l(t.product.tag,(function(e,o){return l("li",{key:o},[l("n-link",{attrs:{to:"/shop?tag="+e}},[t._v(t._s(e)+",")])],1)})),0)]),t._v(" "),l("div",{staticClass:"pro-details-social"},[l("ul",[l("li",[l("a",{attrs:{href:"https://www.facebook.com/",target:"_blank"}},[l("i",{staticClass:"fa fa-facebook"})])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://dribbble.com/",target:"_blank"}},[l("i",{staticClass:"fa fa-dribbble"})])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://www.pinterest.com/",target:"_blank"}},[l("i",{staticClass:"fa fa-pinterest-p"})])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://twitter.com/",target:"_blank"}},[l("i",{staticClass:"fa fa-twitter"})])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://www.linkedin.com/",target:"_blank"}},[l("i",{staticClass:"fa fa-linkedin"})])])])])])])])])],1)}),[],!1,null,null,null);e.default=component.exports},325:function(t,e,l){"use strict";l(321)},328:function(t,e,l){"use strict";l.r(e);var o={props:["title","subTitle","classes"]},r=l(12),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"text-center",class:t.classes},[l("h2",[t._v(t._s(t.title))]),t._v(" "),l("p",[t._v(t._s(t.subTitle))])])}),[],!1,null,null,null);e.default=component.exports},329:function(t){t.exports=JSON.parse('[{"id":1,"title":"A guide to latest trends product","desc":"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus","imgSrc":"/img/blog/blog-1.jpg","category":["women","lifestyle"],"author":"Admin","date":"15 April, 2021","comment":12},{"id":2,"title":"Five ways to lead a happy life","desc":"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus","imgSrc":"/img/blog/blog-2.jpg","category":["lifestyle","men"],"author":"admin","date":"22 March, 2021","comment":45},{"id":3,"title":"Tips on having a happy life forever","desc":"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus","imgSrc":"/img/blog/blog-3.jpg","category":["women","men"],"author":"admin","date":"10 May, 2021","comment":30},{"id":4,"title":"New winter collection with discount","desc":"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus","imgSrc":"/img/blog/blog-4.jpg","category":["women","lifestyle"],"author":"Admin","date":"15 June, 2021","comment":52},{"id":5,"title":"New collection for this winter","desc":"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus","imgSrc":"/img/blog/blog-5.jpg","category":["lifestyle","men"],"author":"admin","date":"10 July, 2021","comment":35},{"id":6,"title":"Our best collection this winter","desc":"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus","imgSrc":"/img/blog/blog-6.jpg","category":["women","men"],"author":"admin","date":"18 January, 2021","comment":40},{"id":7,"title":"Tempor incididunt labo dolor magna","desc":"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus","imgSrc":"/img/blog/blog-7.jpg","category":["women","lifestyle"],"author":"Admin","date":"15 April, 2021","comment":12},{"id":8,"title":"Lorem ipsum dolor sit amet consectetur","desc":"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus","imgSrc":"/img/blog/blog-8.jpg","category":["lifestyle","men"],"author":"admin","date":"22 March, 2021","comment":45},{"id":9,"title":"Reprehendrit in voluptate velit cillum","desc":"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus","imgSrc":"/img/blog/blog-9.jpg","category":["women","men"],"author":"admin","date":"10 May, 2021","comment":30}]')},330:function(t,e,l){"use strict";l.r(e);l(44),l(37),l(43),l(56),l(32),l(57);var o=l(25);l(208),l(10),l(33),l(68),l(69);function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,l)}return e}function n(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var c={props:["product","layout"],methods:{addToCart:function(t){var e=n(n({},t),{},{cartQuantity:1});this.$store.state.cart.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to cart update with one"}):this.$notify({title:"Add to cart successfully!"}),this.$store.dispatch("addToCartItem",e)},discountedPrice:function(t){return t.price-t.price*t.discount/100},addToWishlist:function(t){this.$store.state.wishlist.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to wishlist!"}):this.$notify({title:"Add to wishlist successfully!"}),this.$store.dispatch("addToWishlist",t)},addToCompare:function(t){this.$store.state.compare.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to compare!"}):this.$notify({title:"Add to compare successfully!"}),this.$store.dispatch("addToCompare",t)},onClick:function(t){this.$modal.show("quickview",t)},slugify:function(text){return text.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}}},d=l(12),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"product-wrap mb-30"},[l("div",{staticClass:"product-img"},[l("n-link",{attrs:{to:"/product/"+t.slugify(t.product.title)}},[l("img",{staticClass:"default-img",attrs:{src:t.product.images[0],alt:t.product.title}}),t._v(" "),l("img",{staticClass:"hover-img",attrs:{src:t.product.images[1],alt:t.product.title}})]),t._v(" "),l("div",{staticClass:"product-badges"},[t.product.new?l("span",{staticClass:"product-label pink"},[t._v("New")]):t._e(),t._v(" "),t.product.discount?l("span",{staticClass:"product-label purple"},[t._v("-"+t._s(t.product.discount)+"%")]):t._e()]),t._v(" "),"twoColumn"===t.layout||"threeColumn"===t.layout?l("div",{staticClass:"product-action"},[l("div",{staticClass:"pro-same-action pro-wishlist"},[l("button",{staticClass:"btn",attrs:{title:"Wishlist"},on:{click:function(e){return t.addToWishlist(t.product)}}},[l("i",{staticClass:"pe-7s-like"})])]),t._v(" "),l("div",{staticClass:"pro-same-action pro-cart"},[t.product.variation?l("n-link",{staticClass:"btn",attrs:{to:"/product/"+t.slugify(t.product.title)}},[t._v("\n                    select option\n                ")]):l("button",{staticClass:"btn",attrs:{title:"Add To Cart"},on:{click:function(e){return t.addToCart(t.product)}}},[l("i",{staticClass:"pe-7s-cart"}),t._v(" \n                    Add to cart\n                ")])],1),t._v(" "),l("div",{staticClass:"pro-same-action pro-quickview"},[l("button",{staticClass:"btn",attrs:{title:"Quick View"},on:{click:function(e){return t.onClick(t.product)}}},[l("i",{staticClass:"pe-7s-look"})])])]):t._e()],1),t._v(" "),l("div",{staticClass:"product-content text-center"},[l("h3",[l("n-link",{attrs:{to:"/product/"+t.slugify(t.product.title)}},[t._v(t._s(t.product.title))])],1),t._v(" "),5==t.product.rating?l("div",{staticClass:"product-rating"},[l("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),l("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),l("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),l("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),l("i",{staticClass:"fa fa-star-o yellow"})]):t._e(),t._v(" "),4==t.product.rating?l("div",{staticClass:"product-rating"},[l("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),l("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),l("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),l("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),l("i",{staticClass:"fa fa-star-o"})]):t._e(),t._v(" "),3==t.product.rating?l("div",{staticClass:"product-rating"},[l("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),l("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),l("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),l("i",{staticClass:"fa fa-star-o"}),t._v(" "),l("i",{staticClass:"fa fa-star-o"})]):t._e(),t._v(" "),2==t.product.rating?l("div",{staticClass:"product-rating"},[l("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),l("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),l("i",{staticClass:"fa fa-star-o"}),t._v(" "),l("i",{staticClass:"fa fa-star-o"}),t._v(" "),l("i",{staticClass:"fa fa-star-o"})]):t._e(),t._v(" "),1==t.product.rating?l("div",{staticClass:"product-rating"},[l("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),l("i",{staticClass:"fa fa-star-o"}),t._v(" "),l("i",{staticClass:"fa fa-star-o"}),t._v(" "),l("i",{staticClass:"fa fa-star-o"}),t._v(" "),l("i",{staticClass:"fa fa-star-o"})]):t._e(),t._v(" "),l("div",{staticClass:"product-price"},[l("span",[t._v("$"+t._s(t.discountedPrice(t.product).toFixed(2)))]),t._v(" "),t.product.discount>0?l("span",{staticClass:"old"},[t._v("$"+t._s(t.product.price.toFixed(2)))]):t._e()]),t._v(" "),"list"===t.layout?l("div",{staticClass:"product-content__list-view"},[l("p",[t._v(t._s(t.product.description))]),t._v(" "),l("div",{staticClass:"pro-action d-flex align-items-center"},[l("div",{staticClass:"pro-cart btn-hover"},[t.product.variation?l("n-link",{staticClass:"btn",attrs:{to:"/product/"+t.slugify(t.product.title)}},[t._v("\n                        select option\n                    ")]):l("button",{staticClass:"btn",attrs:{title:"Add To Cart"},on:{click:function(e){return t.addToCart(t.product)}}},[l("i",{staticClass:"pe-7s-cart"}),t._v(" \n                        Add to cart\n                    ")])],1),t._v(" "),l("div",{staticClass:"pro-wishlist"},[l("button",{on:{click:function(e){return t.addToWishlist(t.product)}}},[l("i",{staticClass:"fa fa-heart-o"})])]),t._v(" "),l("div",{staticClass:"pro-compare"},[l("button",{on:{click:function(e){return t.addToCompare(t.product)}}},[l("i",{staticClass:"pe-7s-shuffle"})])])])]):t._e()])])}),[],!1,null,null,null);e.default=component.exports},333:function(t,e,l){"use strict";l.r(e);l(33),l(68),l(10),l(69);var o={props:["blog"],methods:{slugify:function(text){return text.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}}},r=l(12),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"blog-wrap mb-25"},[l("div",{staticClass:"blog-img"},[l("n-link",{attrs:{to:"/blog/"+t.slugify(t.blog.title)}},[l("img",{attrs:{src:t.blog.imgSrc,alt:t.blog.title}})]),t._v(" "),l("span",[t._v(t._s(t.blog.category[0]))])],1),t._v(" "),l("div",{staticClass:"blog-content-wrap"},[l("div",{staticClass:"blog-content text-center"},[l("h3",[l("n-link",{attrs:{to:"/blog/"+t.slugify(t.blog.title)}},[t._v(t._s(t.blog.title))])],1),t._v(" "),l("span",[t._v("By "),l("n-link",{attrs:{to:""}},[t._v(t._s(t.blog.author))])],1)])])])}),[],!1,null,null,null);e.default=component.exports},334:function(t,e,l){"use strict";l.r(e);l(10),l(28),l(29);var o=l(329),r={components:{BlogItem:function(){return Promise.resolve().then(l.bind(null,333))}},data:function(){return{blogData:o}}},n=l(12),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"blog-area pb-55"},[l("div",{staticClass:"container"},[l("SectionTitleWithSubTitle",{attrs:{title:"OUR BLOG",classes:"section-title mb-55"}}),t._v(" "),l("div",{staticClass:"row"},t._l(t.blogData.slice(0,3),(function(t,e){return l("div",{key:e,staticClass:"col-lg-4 col-sm-6"},[l("BlogItem",{attrs:{blog:t}})],1)})),0)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SectionTitleWithSubTitle:l(328).default,BlogItem:l(333).default})},338:function(t,e,l){"use strict";l.r(e);l(10),l(28),l(29);var o={components:{Navigation:function(){return Promise.resolve().then(l.bind(null,211))},MiniCart:function(){return Promise.resolve().then(l.bind(null,209))}},computed:{cartItemCount:function(){return this.$store.getters.cartItemCount},wishlistItemCount:function(){return this.$store.getters.wishlistItemCount},compareItemCount:function(){return this.$store.getters.compareItemCount}},data:function(){return{isSticky:!1,isOpenSearch:!1,isOpenAccountSettings:!1,openCart:!1,navOpen:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))}},r=l(12),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("header",{staticClass:"header-area header-padding-1 sticky-bar header-res-padding clearfix",class:{"is-sticky":t.isSticky}},[l("div",{staticClass:"container-fluid"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-2 col-md-6 col-4"},[l("div",{staticClass:"logo"},[l("n-link",{attrs:{to:"/"}},[l("img",{attrs:{src:"/img/logo/logo.png",alt:"logo"}})])],1)]),t._v(" "),l("div",{staticClass:"col-lg-8 d-none d-lg-block"},[l("div",{staticClass:"main-menu"},[l("nav",[l("Navigation")],1)])]),t._v(" "),l("div",{staticClass:"col-lg-2 col-md-6 col-8"},[l("div",{staticClass:"header-right-wrap"},[l("div",{staticClass:"same-style header-search d-none d-lg-block"},[l("button",{staticClass:"search-active",on:{click:function(e){t.isOpenSearch=!t.isOpenSearch}}},[l("i",{staticClass:"pe-7s-search"})]),t._v(" "),l("div",{staticClass:"search-content",class:{active:t.isOpenSearch}},[t._m(0)])]),t._v(" "),l("div",{staticClass:"same-style account-setting d-none d-lg-block"},[l("button",{staticClass:"account-setting-active",on:{click:function(e){t.isOpenAccountSettings=!t.isOpenAccountSettings}}},[l("i",{staticClass:"pe-7s-user-female"})]),t._v(" "),l("div",{staticClass:"account-dropdown",class:{active:t.isOpenAccountSettings}},[l("ul",[l("li",[l("n-link",{attrs:{to:"/login-register"}},[t._v("Login")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"/login-register"}},[t._v("Register")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"/my-account"}},[t._v("my account")])],1)])])]),t._v(" "),l("div",{staticClass:"same-style header-compare"},[l("n-link",{attrs:{to:"/compare"}},[l("i",{staticClass:"pe-7s-shuffle"})]),t._v(" "),l("span",{staticClass:"count-style"},[t._v(t._s(t.compareItemCount))])],1),t._v(" "),l("div",{staticClass:"same-style header-wishlist"},[l("n-link",{attrs:{to:"/wishlist"}},[l("i",{staticClass:"pe-7s-like"})]),t._v(" "),l("span",{staticClass:"count-style"},[t._v(t._s(t.wishlistItemCount))])],1),t._v(" "),l("div",{staticClass:"same-style cart-wrap"},[l("button",{staticClass:"icon-cart",on:{click:function(e){t.openCart=!t.openCart}}},[l("i",{staticClass:"pe-7s-shopbag"}),t._v(" "),l("span",{staticClass:"count-style"},[t._v(t._s(t.cartItemCount))])]),t._v(" "),l("MiniCart",{attrs:{miniCart:{visible:t.openCart}},on:{minicartClose:function(e){t.openCart=!t.openCart}}})],1),t._v(" "),l("div",{staticClass:"same-style mobile-menu-toggler d-block d-lg-none"},[l("button",{staticClass:"mobile-aside-button",on:{click:function(e){t.navOpen=!t.navOpen}}},[l("i",{staticClass:"pe-7s-menu"})])])])])])])]),t._v(" "),l("OffCanvasMobileMenu",{class:{"show-mobile-menu":t.navOpen},on:{toggleAsideMenu:function(e){t.navOpen=!t.navOpen}}})],1)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("form",[l("input",{attrs:{type:"text",placeholder:"Search"}}),t._v(" "),l("button",{staticClass:"button-search"},[l("i",{staticClass:"pe-7s-search"})])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:l(211).default,MiniCart:l(209).default,OffCanvasMobileMenu:l(210).default})},349:function(t,e,l){"use strict";l.r(e);l(10),l(28),l(29);var o={props:["isSectionTitle"],components:{ProductGridItem:function(){return Promise.resolve().then(l.bind(null,330))},QuickView:function(){return Promise.resolve().then(l.bind(null,323))}},computed:{newProducts:function(){return this.$store.getters.getNewProducts},bestProducts:function(){return this.$store.getters.getBestProducts},saleProducts:function(){return this.$store.getters.getSaleProducts}},data:function(){return{layout:"twoColumn"}}},r=l(12),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"product-area pb-90"},[l("div",{staticClass:"container"},[!t.isSectionTitle?t._e():l("SectionTitleWithSubTitle",{attrs:{title:"DAILY DEALS!",classes:"section-title"}}),t._v(" "),t._m(0),t._v(" "),l("div",{staticClass:"tab-content"},[l("div",{staticClass:"tab-pane fade",attrs:{id:"new-product",role:"tabpanel"}},[l("div",{staticClass:"row"},t._l(t.newProducts.slice(0,8),(function(e,o){return l("div",{key:o,staticClass:"col-xl-3 col-lg-4 col-sm-6"},[l("ProductGridItem",{attrs:{product:e,layout:t.layout}})],1)})),0)]),t._v(" "),l("div",{staticClass:"tab-pane fade show active",attrs:{id:"best-product",role:"tabpanel"}},[l("div",{staticClass:"row"},t._l(t.bestProducts.slice(0,8),(function(e,o){return l("div",{key:o,staticClass:"col-xl-3 col-lg-4 col-sm-6"},[l("ProductGridItem",{attrs:{product:e,layout:t.layout}})],1)})),0)]),t._v(" "),l("div",{staticClass:"tab-pane fade",attrs:{id:"sale-product",role:"tabpanel"}},[l("div",{staticClass:"row"},t._l(t.saleProducts.slice(0,8),(function(e,o){return l("div",{key:o,staticClass:"col-xl-3 col-lg-4 col-sm-6"},[l("ProductGridItem",{attrs:{product:e,layout:t.layout}})],1)})),0)]),t._v(" "),l("div",{staticClass:"view-more text-center mt-20 toggle-btn2"},[l("n-link",{staticClass:"loadMore2",attrs:{to:"/shop"}},[t._v("VIEW MORE PRODUCTS")])],1)])],1),t._v(" "),l("QuickView")],1)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ul",{staticClass:"nav product-tab-list pt-30 pb-55 justify-content-center"},[l("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[l("button",{staticClass:"nav-link",attrs:{"data-bs-toggle":"pill","data-bs-target":"#new-product",role:"tab"}},[t._v("New Arrivals")])]),t._v(" "),l("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[l("button",{staticClass:"nav-link active",attrs:{"data-bs-toggle":"pill","data-bs-target":"#best-product",role:"tab"}},[t._v("Best Sellers")])]),t._v(" "),l("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[l("button",{staticClass:"nav-link",attrs:{"data-bs-toggle":"pill","data-bs-target":"#sale-product",role:"tab"}},[t._v("Sale Items")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{SectionTitleWithSubTitle:l(328).default,ProductGridItem:l(330).default,QuickView:l(323).default})},387:function(t,e,l){"use strict";l.r(e);var o={data:function(){return{swiperOption:{loop:!0,speed:750,slidesPerView:1,spaceBetween:10,effect:"fade",fadeEffect:{crossFade:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}}},r=l(12),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"slider-area nav-style-1"},[l("swiper",{attrs:{options:t.swiperOption}},[l("swiper-slide",{staticClass:"single-slider slider-height-1 bg-purple"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-sm-6"},[l("div",{staticClass:"slider-content slider-animation-1"},[l("h3",[t._v("Smart Products")]),t._v(" "),l("h1",[t._v("Winter Offer "),l("br"),t._v("2022 Collection")]),t._v(" "),l("div",{staticClass:"slider-btn btn-hover"},[l("n-link",{attrs:{to:"/shop"}},[t._v("SHOP NOW")])],1)])]),t._v(" "),l("div",{staticClass:"col-sm-6"},[l("div",{staticClass:"slider-single-img slider-img-animation"},[l("img",{attrs:{src:"/img/slider/single-slide-1.png",alt:"image"}})])])])])]),t._v(" "),l("swiper-slide",{staticClass:"single-slider slider-height-1 bg-purple"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-sm-6"},[l("div",{staticClass:"slider-content slider-animation-1"},[l("h3",[t._v("Smart Products")]),t._v(" "),l("h1",[t._v("Summer Offer "),l("br"),t._v("2022 Collection")]),t._v(" "),l("div",{staticClass:"slider-btn btn-hover"},[l("n-link",{attrs:{to:"/shop"}},[t._v("SHOP NOW")])],1)])]),t._v(" "),l("div",{staticClass:"col-sm-6"},[l("div",{staticClass:"slider-single-img slider-img-animation"},[l("img",{attrs:{src:"/img/slider/single-slide-2.png ",alt:"image"}})])])])])]),t._v(" "),l("div",{staticClass:"hero-slider-nav swiper-button-prev"},[l("i",{staticClass:"pe-7s-angle-left"})]),t._v(" "),l("div",{staticClass:"hero-slider-nav swiper-button-next"},[l("i",{staticClass:"pe-7s-angle-right"})])],1)],1)}),[],!1,null,null,null);e.default=component.exports},433:function(t,e,l){"use strict";l.r(e);l(10),l(28),l(29);var o={components:{TheHeader:function(){return Promise.resolve().then(l.bind(null,338))},HeroSlider:function(){return Promise.resolve().then(l.bind(null,387))},ServicePolicy:function(){return l.e(2).then(l.bind(null,434))},ProductWrapper:function(){return Promise.resolve().then(l.bind(null,349))},BlogWrapper:function(){return Promise.resolve().then(l.bind(null,334))},TheFooter:function(){return Promise.resolve().then(l.bind(null,322))}},head:function(){return{title:"Home Fashion One"}}},r=l(12),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"home-page-wrapper"},[l("TheHeader"),t._v(" "),l("HeroSlider"),t._v(" "),l("ServicePolicy"),t._v(" "),l("ProductWrapper",{attrs:{isSectionTitle:!0}}),t._v(" "),l("BlogWrapper"),t._v(" "),l("TheFooter")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TheHeader:l(338).default,HeroSlider:l(387).default,ProductWrapper:l(349).default,BlogWrapper:l(334).default,TheFooter:l(322).default})}}]);