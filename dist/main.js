!function(e){var t={};function r(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(a,i,function(t){return e[t]}.bind(null,i));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="dist/",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var a,i,n;r(1);n=JSON.parse(localStorage.getItem("placemarks"))||[],ymaps.ready((function(){var e=ymaps.templateLayoutFactory.createClass('<div class="popover top"><a class="close" href="#">&times;</a><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"><i class="fa fa-small fa-map-marker" aria-hidden="true"></i>&#8195$[properties.review_adress]</h3><div class="reviews"><div class="reviews__item"><div class="reviews__item_name"><b>$[properties.review_name]</b> $[properties.review_place] $[properties.review_date]</div><div class="reviews__item_text">$[properties.text]</div></div></div><div class="bottom"><div class="bottom__text">Ваш отзыв</div><form class="bottom__form"><input type="text" id="name" value="" placeholder="Ваше имя"><input type="text" id="place" value="" placeholder="Укажите место"><input type="text" id="comment" value="" placeholder="Поделитесь впечатлениями"><button id="add_rewiew" class="add_rewiew">Добавить</button></form></div></div></div>',{build:function(){this.constructor.superclass.build.call(this),this._$element=$(".popover",this.getParentElement()),this.applyElementOffset(),this._$element.find(".close").on("click",$.proxy(this.onCloseClick,this))},clear:function(){this._$element.find(".close").off("click"),this.constructor.superclass.clear.call(this)},applyElementOffset:function(){this._$element.css({left:-this._$element[0].offsetWidth/2,top:-(this._$element[0].offsetHeight+this._$element.find(".arrow")[0].offsetHeight)})},onCloseClick:function(e){e.preventDefault(),this.events.fire("userclose")},getShape:function(){if(!this._isElement(this._$element))return e.superclass.getShape.call(this);var t=this._$element.position();return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([[t.left,t.top],[t.left+this._$element[0].offsetWidth,t.top+this._$element[0].offsetHeight+this._$element.find(".arrow")[0].offsetHeight]]))},_isElement:function(e){return e&&e[0]&&e.find(".arrow")[0]}}),t=ymaps.templateLayoutFactory.createClass('<i class="fa fa-big fa-map-marker" aria-hidden="true"></i>'),r=ymaps.templateLayoutFactory.createClass('\n            <div class="cluster__header"><b>{{ properties.review_place|raw }}</b></div>\n            <div class="cluster__link"><a href="#" class="search_by_address" data-coords="{{ properties.review_coords|raw }}">{{ properties.review_adress|raw }}</a></div>\n            <div class="cluster__review">{{ properties.review_text|raw }}</div>\n            <div class="cluster__review date">{{ properties.review_date|raw }}</div>'),o=new ymaps.Clusterer({preset:"islands#invertedVioletClusterIcons",clusterBalloonContentLayout:"cluster#balloonCarousel",balloonLayout:"islands#balloon",clusterBalloonItemContentLayout:r,clusterBalloonPanelMaxMapArea:0,clusterBalloonPagerSize:5,groupByCoordinates:!1,clusterOpenBalloonOnClick:!0,clusterDisableClickZoom:!0,clusterHideIconOnBalloonOpen:!1}),s=new ymaps.Map("map",{center:[59.93181443,30.36136798],zoom:16,controls:["zoomControl","fullscreenControl"]},{yandexMapDisablePoiInteractivity:!0,balloonLayout:e});function l(e,r,a){var i=new ymaps.Placemark(e,{review_coords:e,review_adress:r,review_name:a.name,review_place:a.place,review_date:a.date,review_text:a.text},{balloonPanelMaxMapArea:0,iconLayout:"default#imageWithContent",iconImageHref:"",iconContentLayout:t,iconImageOffset:[-15,-50]});o.add(i)}s.geoObjects.add(o),s.events.add("click",(function(e){e.preventDefault(),a=e.get("coords"),ymaps.geocode(a).then((function(e){i=e.geoObjects.get(0).getAddressLine(),s.balloon.open(a,{properties:{review_adress:i}})}))})),document.addEventListener("click",(function(e){e.target.classList.contains("add_rewiew")&&(e.preventDefault(),function(e,t){var r=document.querySelector("form #name").value,a=document.querySelector("form #place").value,i=document.querySelector("form #comment").value,o=(new Date).toLocaleString("ru",{year:"numeric",month:"numeric",day:"numeric",timezone:"UTC",hour:"numeric",minute:"numeric",second:"numeric"});if(""!=r&""!=a&""!=i){var s=document.querySelector(".reviews"),c=document.createElement("div"),d=document.createElement("div"),u=document.createElement("div"),p={name:r,place:a,text:i,date:o};c.setAttribute("class","reviews__item"),d.setAttribute("class","reviews__item_name"),u.setAttribute("class","reviews__item_text"),d.innerHTML="<b>".concat(r,"</b> ").concat(a," ").concat(o),u.innerText=i,s.appendChild(c),c.appendChild(d),c.appendChild(u),document.querySelectorAll("form input").forEach((function(e){e.value=""})),function(e,t,r){n.push({review_coords:e,review_adress:t,review_name:r.name,review_place:r.place,review_date:r.date,review_text:r.text}),localStorage.setItem("placemarks",JSON.stringify(n))}(e,t,p),l(e,t,p)}}(a,i))})),document.addEventListener("click",(function(e){e.target.classList.contains("search_by_address")&&(i=document.querySelector(".search_by_address").innerText,a=document.querySelector(".search_by_address").getAttribute("data-coords").split(","),s.balloon.open(a,{properties:{review_adress:i}}).then((function(){n.forEach((function(e){var t,r,a,n,o,s,l,c;i==e.review_adress&&(t=e.review_name,r=e.review_place,a=e.review_text,n=e.review_date,o=document.querySelector(".reviews"),s=document.createElement("div"),l=document.createElement("div"),c=document.createElement("div"),s.setAttribute("class","reviews__item"),l.setAttribute("class","reviews__item_name"),c.setAttribute("class","reviews__item_text"),l.innerHTML="<b>".concat(t,"</b> ").concat(r," ").concat(n),c.innerText=a,o.appendChild(s),s.appendChild(l),s.appendChild(c))}))})))})),function(e){0!=e.length&&e.forEach((function(e){var t={name:e.review_name,place:e.review_place,text:e.review_text,date:e.review_date};l(e.review_coords,e.review_adress,t)}))}(n)}))},function(e,t){}]);