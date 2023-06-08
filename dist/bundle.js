(()=>{"use strict";var e={451:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(537),o=n.n(r),s=n(645),i=n.n(s)()(o());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]),i.push([e.id,'body{font-family:"Roboto",sans-serif}.app{padding-top:5rem;display:flex;justify-content:center}.wrap{width:500px}.select{width:100%;position:relative;z-index:100}.select.open .select__dropdown{display:block}.select.open .select__input{border-bottom:none}.select.open .select__backdrop{display:block}.select__input{border:1px solid #ccc;border-radius:5px;height:46px;display:flex;align-items:center;justify-content:space-between;padding:0 1rem;cursor:pointer}.select__dropdown{display:none;position:absolute;border:1px solid #ccc;border-radius:5px;top:46px;left:0;right:0;max-height:200px;overflow-y:auto;box-shadow:2px 3px 5px rgba(0,0,0,.3)}.select__list{padding:0;margin:0;list-style:none}.select__backdrop{position:fixed;display:none;z-index:-1;top:0;right:0;left:0;bottom:0;background:rgba(237,231,225,.5)}.select__item{padding:1rem;border-bottom:1px solid #ccc}.select__item.selected{background-color:#eeffb2}.select__item:hover{background-color:#eee;cursor:pointer;transition:.15s background-color ease-in}',"",{version:3,sources:["webpack://./select/style.scss"],names:[],mappings:"AAEA,KACE,+BAAA,CAGF,KACE,gBAAA,CACA,YAAA,CACA,sBAAA,CAGF,MACE,WAAA,CAKF,QACE,UAAA,CACA,iBAAA,CACA,WAAA,CAGE,+BACE,aAAA,CAGF,4BACE,kBAAA,CAGF,+BACE,aAAA,CAIJ,eACE,qBAAA,CACA,iBAAA,CACA,WAxBK,CAyBL,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,cAAA,CACA,cAAA,CAEF,kBACE,YAAA,CACA,iBAAA,CACA,qBAAA,CACA,iBAAA,CACA,QApCK,CAqCL,MAAA,CACA,OAAA,CACA,gBAAA,CACA,eAAA,CACA,qCAAA,CAGF,cACE,SAAA,CACA,QAAA,CACA,eAAA,CAGF,kBACE,cAAA,CACA,YAAA,CACA,UAAA,CACA,KAAA,CACA,OAAA,CACA,MAAA,CACA,QAAA,CACA,+BAAA,CAGF,cACE,YAAA,CACA,4BAAA,CAEA,uBACE,wBAAA,CAGF,oBACE,qBAAA,CACA,cAAA,CACA,wCAAA",sourcesContent:['@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");\r\n\r\nbody {\r\n  font-family: "Roboto", sans-serif;\r\n}\r\n\r\n.app {\r\n  padding-top: 5rem;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.wrap {\r\n  width: 500px;\r\n}\r\n\r\n$height: 46px;\r\n\r\n.select {\r\n  width: 100%;\r\n  position: relative;\r\n  z-index: 100;\r\n\r\n  &.open {\r\n    .select__dropdown {\r\n      display: block;\r\n    }\r\n\r\n    .select__input {\r\n      border-bottom: none;\r\n    }\r\n\r\n    .select__backdrop {\r\n      display: block;\r\n    }\r\n  }\r\n\r\n  &__input {\r\n    border: 1px solid #ccc;\r\n    border-radius: 5px;\r\n    height: $height;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 0 1rem;\r\n    cursor: pointer;\r\n  }\r\n  &__dropdown {\r\n    display: none;\r\n    position: absolute;\r\n    border: 1px solid #ccc;\r\n    border-radius: 5px;\r\n    top: $height;\r\n    left: 0;\r\n    right: 0;\r\n    max-height: 200px;\r\n    overflow-y: auto;\r\n    box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.3);\r\n  }\r\n\r\n  &__list {\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style: none;\r\n  }\r\n\r\n  &__backdrop {\r\n    position: fixed;\r\n    display: none;\r\n    z-index: -1;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    background: rgba(237, 231, 225, 0.5);\r\n  }\r\n\r\n  &__item {\r\n    padding: 1rem;\r\n    border-bottom: 1px solid #ccc;\r\n\r\n    &.selected {\r\n      background-color: #eeffb2;\r\n    }\r\n\r\n    &:hover {\r\n      background-color: #eee;\r\n      cursor: pointer;\r\n      transition: 0.15s background-color ease-in;\r\n    }\r\n  }\r\n}\r\n'],sourceRoot:""}]);const a=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,s){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},537:e=>{e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),s="/*# ".concat(o," */");return[t].concat([s]).join("\n")}return[t].join("\n")}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var s={},i=[],a=0;a<e.length;a++){var c=e[a],l=r.base?c[0]+r.base:c[0],d=s[l]||0,A="".concat(l," ").concat(d);s[l]=d+1;var p=n(A),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(u);else{var h=o(u,r);r.byIndex=a,t.splice(a,0,{identifier:A,updater:h,references:1})}i.push(A)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var s=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<s.length;i++){var a=n(s[i]);t[a].references--}for(var c=r(e,o),l=0;l<s.length;l++){var d=n(s[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}s=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={id:r,exports:{}};return e[r](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),s=n(569),i=n.n(s),a=n(565),c=n.n(a),l=n(216),d=n.n(l),A=n(589),p=n.n(A),u=n(451),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),t()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals;const f=new class{constructor(e,t){this.$el=document.querySelector(e),this.options=t,this.selectedId=t.selectedId,this.#e(),this.#t()}#e(){const{placeholder:e,data:t}=this.options;this.$el.classList.add("select"),this.$el.innerHTML=((e=[],t,n)=>{let r=t??"Placeholder по умолчанию";const o=e.map((e=>{let t="";return e.id===n&&(r=e.value,t="selected"),`\n    <li class="select__item ${t}" data-type="item" data-id="${e.id}">${e.value}</li>\n    `}));return`\n  <div class="select__backdrop" data-type="backdrop"></div>\n    <div class="select__input" data-type="input">\n            <span data-type="value">${r}</span>\n            <i class="fa fa-chevron-down" data-type="arrow"></i>\n          </div>\n          <div class="select__dropdown">\n            <ul class="select__list">\n              ${o.join("")}\n            </ul>\n          </div>\n    `})(t,e,this.selectedId)}#t(){this.clickHandler=this.clickHandler.bind(this),this.$el.addEventListener("click",this.clickHandler),this.$arrow=this.$el.querySelector('[data-type="arrow"]'),this.$value=this.$el.querySelector('[data-type="value"]')}clickHandler(e){const{type:t}=e.target.dataset;if("input"===t)this.toggle();else if("item"===t){const t=e.target.dataset.id;this.select(t)}else"backdrop"===t&&this.close();"arrow"===t&&this.toggle()}get isOpen(){return this.$el.classList.contains("open")}get current(){return this.options.data.find((e=>e.id===this.selectedId))}select(e){this.selectedId=e,this.$value.textContent=this.current.value,this.$el.querySelectorAll('[data-type="item"]').forEach((e=>{e.classList.remove("selected")})),this.$el.querySelector(`[data-id="${e}"]`).classList.add("selected"),this.options.onSelect&&this.options.onSelect(this.current),this.close()}toggle(){this.isOpen?this.close():this.open()}open(){this.$el.classList.add("open"),this.$arrow.classList.remove("fa-chevron-down"),this.$arrow.classList.add("fa-chevron-up")}close(){this.$el.classList.remove("open"),this.$arrow.classList.add("fa-chevron-down"),this.$arrow.classList.remove("fa-chevron-up")}destroy(){this.$el.remove("click",this.clickHandler),this.$el.innerHTML=""}}("#select",{placeholder:"Select item",data:[{id:"1",value:"React"},{id:"2",value:"Angular"},{id:"3",value:"Vue"},{id:"4",value:"React Native"},{id:"5",value:"Next"},{id:"6",value:"Nest"}],onSelect(e){console.log("Selected Item",e)}});window.s=f})()})();
//# sourceMappingURL=bundle.js.map