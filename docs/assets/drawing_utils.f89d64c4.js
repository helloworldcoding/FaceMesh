import{c as U}from"./commonjsHelpers.0592d25c.js";var Tt={};(function(){function H(t){var e=0;return function(){return e<t.length?{done:!1,value:t[e++]}:{done:!0}}}var D=typeof Object.defineProperties=="function"?Object.defineProperty:function(t,e,n){return t==Array.prototype||t==Object.prototype||(t[e]=n.value),t};function X(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof U=="object"&&U];for(var e=0;e<t.length;++e){var n=t[e];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}var S=X(this);function d(t,e){if(e)t:{var n=S;t=t.split(".");for(var i=0;i<t.length-1;i++){var r=t[i];if(!(r in n))break t;n=n[r]}t=t[t.length-1],i=n[t],e=e(i),e!=i&&e!=null&&D(n,t,{configurable:!0,writable:!0,value:e})}}d("Symbol",function(t){function e(u){if(this instanceof e)throw new TypeError("Symbol is not a constructor");return new n(i+(u||"")+"_"+r++,u)}function n(u,o){this.g=u,D(this,"description",{configurable:!0,writable:!0,value:o})}if(t)return t;n.prototype.toString=function(){return this.g};var i="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",r=0;return e}),d("Symbol.iterator",function(t){if(t)return t;t=Symbol("Symbol.iterator");for(var e="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),n=0;n<e.length;n++){var i=S[e[n]];typeof i=="function"&&typeof i.prototype[t]!="function"&&D(i.prototype,t,{configurable:!0,writable:!0,value:function(){return z(H(this))}})}return t});function z(t){return t={next:t},t[Symbol.iterator]=function(){return this},t}function A(t){var e=typeof Symbol!="undefined"&&Symbol.iterator&&t[Symbol.iterator];return e?e.call(t):{next:H(t)}}function C(t){if(!(t instanceof Array)){t=A(t);for(var e,n=[];!(e=t.next()).done;)n.push(e.value);t=n}return t}var Y=typeof Object.create=="function"?Object.create:function(t){function e(){}return e.prototype=t,new e},_;if(typeof Object.setPrototypeOf=="function")_=Object.setPrototypeOf;else{var R;t:{var B={a:!0},b={};try{b.__proto__=B,R=b.a;break t}catch{}R=!1}_=R?function(t,e){if(t.__proto__=e,t.__proto__!==e)throw new TypeError(t+" is not extensible");return t}:null}var F=_;function l(){this.j=!1,this.h=null,this.l=void 0,this.g=1,this.o=0,this.i=null}function h(t){if(t.j)throw new TypeError("Generator is already running");t.j=!0}l.prototype.m=function(t){this.l=t};function a(t,e){t.i={L:e,M:!0},t.g=t.o}l.prototype.return=function(t){this.i={return:t},this.g=this.o};function c(t,e,n){return t.g=n,{value:e}}function v(t){this.g=new l,this.h=t}function y(t,e){h(t.g);var n=t.g.h;return n?m(t,"return"in n?n.return:function(i){return{value:i,done:!0}},e,t.g.return):(t.g.return(e),x(t))}function m(t,e,n,i){try{var r=e.call(t.g.h,n);if(!(r instanceof Object))throw new TypeError("Iterator result "+r+" is not an object");if(!r.done)return t.g.j=!1,r;var u=r.value}catch(o){return t.g.h=null,a(t.g,o),x(t)}return t.g.h=null,i.call(t.g,u),x(t)}function x(t){for(;t.g.g;)try{var e=t.h(t.g);if(e)return t.g.j=!1,{value:e.value,done:!1}}catch(n){t.g.l=void 0,a(t.g,n)}if(t.g.j=!1,t.g.i){if(e=t.g.i,t.g.i=null,e.M)throw e.L;return{value:e.return,done:!0}}return{value:void 0,done:!0}}function yt(t){this.next=function(e){return h(t.g),t.g.h?e=m(t,t.g.h.next,e,t.g.m):(t.g.m(e),e=x(t)),e},this.throw=function(e){return h(t.g),t.g.h?e=m(t,t.g.h.throw,e,t.g.m):(a(t.g,e),e=x(t)),e},this.return=function(e){return y(t,e)},this[Symbol.iterator]=function(){return this}}function L(t,e){return e=new yt(new v(e)),F&&t.prototype&&F(e,t.prototype),e}var mt=typeof Object.assign=="function"?Object.assign:function(t,e){for(var n=1;n<arguments.length;n++){var i=arguments[n];if(i)for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t};d("Object.assign",function(t){return t||mt}),d("Promise",function(t){function e(o){this.h=0,this.i=void 0,this.g=[],this.o=!1;var s=this.j();try{o(s.resolve,s.reject)}catch(f){s.reject(f)}}function n(){this.g=null}function i(o){return o instanceof e?o:new e(function(s){s(o)})}if(t)return t;n.prototype.h=function(o){if(this.g==null){this.g=[];var s=this;this.i(function(){s.l()})}this.g.push(o)};var r=S.setTimeout;n.prototype.i=function(o){r(o,0)},n.prototype.l=function(){for(;this.g&&this.g.length;){var o=this.g;this.g=[];for(var s=0;s<o.length;++s){var f=o[s];o[s]=null;try{f()}catch(p){this.j(p)}}}this.g=null},n.prototype.j=function(o){this.i(function(){throw o})},e.prototype.j=function(){function o(p){return function(g){f||(f=!0,p.call(s,g))}}var s=this,f=!1;return{resolve:o(this.G),reject:o(this.l)}},e.prototype.G=function(o){if(o===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(o instanceof e)this.I(o);else{t:switch(typeof o){case"object":var s=o!=null;break t;case"function":s=!0;break t;default:s=!1}s?this.F(o):this.m(o)}},e.prototype.F=function(o){var s=void 0;try{s=o.then}catch(f){this.l(f);return}typeof s=="function"?this.J(s,o):this.m(o)},e.prototype.l=function(o){this.u(2,o)},e.prototype.m=function(o){this.u(1,o)},e.prototype.u=function(o,s){if(this.h!=0)throw Error("Cannot settle("+o+", "+s+"): Promise already settled in state"+this.h);this.h=o,this.i=s,this.h===2&&this.H(),this.A()},e.prototype.H=function(){var o=this;r(function(){if(o.D()){var s=S.console;typeof s!="undefined"&&s.error(o.i)}},1)},e.prototype.D=function(){if(this.o)return!1;var o=S.CustomEvent,s=S.Event,f=S.dispatchEvent;return typeof f=="undefined"?!0:(typeof o=="function"?o=new o("unhandledrejection",{cancelable:!0}):typeof s=="function"?o=new s("unhandledrejection",{cancelable:!0}):(o=S.document.createEvent("CustomEvent"),o.initCustomEvent("unhandledrejection",!1,!0,o)),o.promise=this,o.reason=this.i,f(o))},e.prototype.A=function(){if(this.g!=null){for(var o=0;o<this.g.length;++o)u.h(this.g[o]);this.g=null}};var u=new n;return e.prototype.I=function(o){var s=this.j();o.v(s.resolve,s.reject)},e.prototype.J=function(o,s){var f=this.j();try{o.call(s,f.resolve,f.reject)}catch(p){f.reject(p)}},e.prototype.then=function(o,s){function f(w,j){return typeof w=="function"?function(q){try{p(w(q))}catch(I){g(I)}}:j}var p,g,O=new e(function(w,j){p=w,g=j});return this.v(f(o,p),f(s,g)),O},e.prototype.catch=function(o){return this.then(void 0,o)},e.prototype.v=function(o,s){function f(){switch(p.h){case 1:o(p.i);break;case 2:s(p.i);break;default:throw Error("Unexpected state: "+p.h)}}var p=this;this.g==null?u.h(f):this.g.push(f),this.o=!0},e.resolve=i,e.reject=function(o){return new e(function(s,f){f(o)})},e.race=function(o){return new e(function(s,f){for(var p=A(o),g=p.next();!g.done;g=p.next())i(g.value).v(s,f)})},e.all=function(o){var s=A(o),f=s.next();return f.done?i([]):new e(function(p,g){function O(q){return function(I){w[q]=I,j--,j==0&&p(w)}}var w=[],j=0;do w.push(void 0),j++,i(f.value).v(O(w.length-1),g),f=s.next();while(!f.done)})},e}),d("Array.from",function(t){return t||function(e,n,i){n=n!=null?n:function(s){return s};var r=[],u=typeof Symbol!="undefined"&&Symbol.iterator&&e[Symbol.iterator];if(typeof u=="function"){e=u.call(e);for(var o=0;!(u=e.next()).done;)r.push(n.call(i,u.value,o++))}else for(u=e.length,o=0;o<u;o++)r.push(n.call(i,e[o],o));return r}}),d("Array.prototype.fill",function(t){return t||function(e,n,i){var r=this.length||0;for(0>n&&(n=Math.max(0,r+n)),(i==null||i>r)&&(i=r),i=Number(i),0>i&&(i=Math.max(0,r+i)),n=Number(n||0);n<i;n++)this[n]=e;return this}});function k(t){return t||Array.prototype.fill}d("Int8Array.prototype.fill",k),d("Uint8Array.prototype.fill",k),d("Uint8ClampedArray.prototype.fill",k),d("Int16Array.prototype.fill",k),d("Uint16Array.prototype.fill",k),d("Int32Array.prototype.fill",k),d("Uint32Array.prototype.fill",k),d("Float32Array.prototype.fill",k),d("Float64Array.prototype.fill",k);function wt(t,e){t instanceof String&&(t+="");var n=0,i=!1,r={next:function(){if(!i&&n<t.length){var u=n++;return{value:e(u,t[u]),done:!1}}return i=!0,{done:!0,value:void 0}}};return r[Symbol.iterator]=function(){return r},r}d("Array.prototype.keys",function(t){return t||function(){return wt(this,function(e){return e})}}),d("Object.values",function(t){return t||function(e){var n=[],i;for(i in e)Object.prototype.hasOwnProperty.call(e,i)&&n.push(e[i]);return n}});var xt=this||self;function T(t,e){t=t.split(".");var n=xt;t[0]in n||typeof n.execScript=="undefined"||n.execScript("var "+t[0]);for(var i;t.length&&(i=t.shift());)t.length||e===void 0?n[i]&&n[i]!==Object.prototype[i]?n=n[i]:n=n[i]={}:n[i]=e}function E(t,e){var n=void 0;return new(n||(n=Promise))(function(i,r){function u(f){try{s(e.next(f))}catch(p){r(p)}}function o(f){try{s(e.throw(f))}catch(p){r(p)}}function s(f){f.done?i(f.value):new n(function(p){p(f.value)}).then(u,o)}s((e=e.apply(t,void 0)).next())})}var lt={};function P(t,e){if(e!==lt)throw Error("Bad secret");this.g=t}function W(){}if(P.prototype=Y(W.prototype),P.prototype.constructor=P,F)F(P,W);else for(var N in W)if(N!="prototype")if(Object.defineProperties){var ut=Object.getOwnPropertyDescriptor(W,N);ut&&Object.defineProperty(P,N,ut)}else P[N]=W[N];P.prototype.toString=function(){return this.g};function Q(t,e,n){if(t=document.createElement(t),e&&t.classList.add(e),n)for(e=A(n),n=e.next();!n.done;n=e.next())t.appendChild(n.value);return t}function M(t,e){return Q("div",t,e)}function G(t,e){return Q("span",t,e)}function J(t){var e=Q("img","",void 0);return e.src=t||"",e}function at(t,e){var n=this;this.g=t,this.i={};var i,r=M("dropdown-wrapper",[i=M("dropdown",[M("dropdown-trigger",[this.h=G(),M("arrow")]),this.options=M("dropdown-options")])]);r.onclick=function(){t.C&&t.C(),i.classList.toggle("open"),i.g=function(){t.B&&t.B()}};for(var u={},o=A(t.options),s=o.next();!s.done;u={s:u.s},s=o.next())u.s=s.value,s=void 0,this.options.appendChild(s=G("dropdown-option")),this.i[u.s.value]=s,s.textContent=u.s.name,u.s.prefix&&s.prepend(u.s.prefix),s.setAttribute("data-value",u.s.value),s.onclick=function(f){return function(){Z(n,f.s.value)}}(u);window.addEventListener("click",function(f){i.contains(f.target)||i.classList.remove("open")}),e.appendChild(r)}function Z(t,e){for(var n=A(t.g.options),i=n.next();!i.done;i=n.next()){i=i.value;var r=t.i[i.value];if(i.value===e&&!r.classList.contains("selected"))return(e=t.options.querySelector(".selected"))&&e.classList.remove("selected"),r.classList.add("selected"),t.h.textContent=r.textContent,t.g.onclick(i),!0}return!1}function ct(t,e){var n=t.options.querySelector(".selected");n&&(n.classList.remove("selected"),t.h.textContent=e===void 0?"":e)}function tt(t){this.g=t}tt.prototype.create=function(t,e,n){var i=this,r=n.appendChild(document.createElement("div"));r.classList.add("control-panel-entry"),r.classList.add("control-panel-slider"),n=r.appendChild(document.createElement("span")),n.classList.add("label"),n.textContent=this.g.title,n=new at({options:this.g.options.map(function(u){return Object.assign(Object.assign({},u),{data:null})}),C:function(){r.style.zIndex="1000"},onclick:function(u){e[i.g.field]=u.value,t(),i.g.onselectionchanged&&i.g.onselectionchanged(u)},B:function(){r.style.zIndex="100"}},r),0<this.g.options.length&&Z(n,this.g.options[0].value)},tt.prototype.update=function(){};function K(){this.i=this.counter=0,this.g=Array.from({length:10}).fill(0)}K.prototype.create=function(t,e,n){e=n.appendChild(document.createElement("div")),e.classList.add("control-panel-entry"),e.classList.add("control-panel-fps"),t=e.appendChild(document.createElement("canvas")),this.h=e.appendChild(document.createElement("div")),this.h.classList.add("fps-text"),n=e.appendChild(document.createElement("div")),n.classList.add("fps-30"),n.textContent="30",e=e.appendChild(document.createElement("div")),e.classList.add("fps-60"),e.textContent="60",t.width=100,t.height=100,this.j=t.getContext("2d"),ft(this,0)},K.prototype.update=function(){},K.prototype.tick=function(){var t=Math.floor(performance.now()/1e3);1<=t-this.i&&(ft(this,this.counter),this.i=t,this.counter=0),++this.counter};function ft(t,e){t.g.shift(),t.g.push(e);var n=t.j;n.fillStyle="green",n.clearRect(0,0,n.canvas.width,n.canvas.height);for(var i=0;10>i;++i){var r=Math.min(100,Math.max(0,t.g[i]));n.fillRect(10*i+1,100-r+1,8,r)}n.setLineDash([2,2]),n.strokeStyle="#a0a0a0a0",n.lineWidth=2,n.beginPath(),n.moveTo(0,30),n.lineTo(100,30),n.stroke(),n.beginPath(),n.moveTo(0,60),n.lineTo(100,60),n.stroke(),t.h.textContent=e.toFixed(0)+" fps"}function et(t){this.g=t}et.prototype.create=function(t,e,n){var i=this;this.options=e,e=this.g,n=n.appendChild(document.createElement("div")),n.classList.add("control-panel-entry"),n.classList.add("control-panel-slider");var r=n.appendChild(document.createElement("span"));r.classList.add("label"),(this.h=n.appendChild(document.createElement("span"))).classList.add("callout");var u=this.i=n.appendChild(document.createElement("input"));u.classList.add("value"),u.type="range",e.range?(u.min=""+e.range[0],u.max=""+e.range[1],u.step=e.step===void 0?"any":""+e.step):e.discrete&&(u.min="0",u.max=""+(Object.keys(e.discrete).length-1),u.step="1"),u.oninput=function(){ht(i,Number(u.value))},u.onchange=function(){var o=Number(u.value);i.g.discrete&&(o=Object.keys(i.g.discrete)[o],Array.isArray(i.g.discrete)&&(o=Number(o))),i.options[i.g.field]=o,t()},r.textContent=e.title},et.prototype.update=function(){var t=this.options[this.g.field];t=this.g.discrete&&!Array.isArray(this.g.discrete)?Object.keys(this.g.discrete).indexOf(t):t,this.i.value=""+t,ht(this,t)};function ht(t,e){e=t.g.discrete?Object.values(t.g.discrete)[e]:e,t.h.textContent=""+e}var jt={facingMode:"user",width:640,height:480},Ct={allowVideo:!0,allowImage:!0,examples:{videos:[],images:[]}};function nt(t){return"https://fonts.gstatic.com/s/i/googlematerialicons/"+t+"/v8/white-24dp/1x/gm_"+t+"_white_24dp.png"}function $(t){this.l=[],this.A=0,this.j=!1,this.g=Object.assign(Object.assign({},Ct),t),this.g.cameraOptions=Object.assign(Object.assign({},this.g.cameraOptions||{}),jt)}function At(t){return E(t,function e(){var n,i,r,u,o;return L(e,function(s){if(s.g==1)return c(s,navigator.mediaDevices.getUserMedia({video:!0}),2);if(s.g!=3)return c(s,navigator.mediaDevices.enumerateDevices(),3);for(n=s.l,i=[],r=A(n),u=r.next();!u.done;u=r.next())o=u.value,o.label!==""&&o.kind==="videoinput"&&i.push({label:o.label,deviceId:o.deviceId});return s.return(i)})})}function V(t){window.requestAnimationFrame(function(){t.tick()})}$.prototype.tick=function(){var t=this,e=null;this.j&&(this.video.paused||this.video.currentTime===this.A||(this.m||(gt(this,this.video.currentTime/this.video.duration),this.i.time.textContent=It(this.video.currentTime)),this.A=this.video.currentTime,e=this.g.onFrame?this.g.onFrame(this.video,{width:this.video.videoWidth,height:this.video.videoHeight}):null),e?e.then(function(){V(t)}):V(this))};function bt(t,e){t.video.srcObject=e,t.video.onloadedmetadata=function(){t.video.play(),t.j=!0,V(t)}}function Ot(t){return E(t,function e(){var n=this,i,r,u,o;return L(e,function(s){if(n.i.parent.style.display="none",n.j=!1,n.m){for(i=n.m.getTracks(),r=A(i),u=r.next();!u.done;u=r.next())o=u.value,o.stop();n.m=void 0}s.g=0})})}function Lt(t){return E(t,function e(){var n=this,i,r,u,o;return L(e,function(s){return s.g==1?(i=n,c(s,At(n),2)):(r=s.l.map(function(f){return{label:f.label,type:"webcam",N:f,start:function(){return Mt(i,f)}}}),u=n.g.examples.videos.map(function(f){return{label:f.name,type:"video",video:i.video,start:function(){vt(i,f.src)}}}),o=n.g.examples.images.map(function(f){return{label:f.name,type:"image",image:i.h,start:function(){dt(i,f.src)}}}),s.return([].concat(C(r),C(u),C(o))))})})}function pt(t,e){return E(t,function n(){var i=this;return L(n,function(r){return r.g==1?r=c(r,Ot(i),2):r.g!=3?i.g.onSourceChanged?r=c(r,i.g.onSourceChanged(e.label,e.type),3):(r.g=3,r=void 0):r=c(r,e.start(),0),r})})}function Et(t,e){return E(t,function n(){var i=this;return L(n,function(r){return i.g&&i.g.onFrame?r=c(r,i.g.onFrame(e,{width:e.naturalWidth,height:e.naturalHeight}),0):(r.g=0,r=void 0),r})})}function St(t){return E(t,function e(){var n=this;return L(e,function(i){if(i.g==1){if(!n.g||!n.g.onFrame){i.g=0;return}return n.i.parent.style.display="flex",gt(n,0),c(i,n.video.play(),3)}n.D(),n.j=!0,V(n),i.g=0})})}function Mt(t,e){return E(t,function n(){var i=this,r,u;return L(n,function(o){return r=i,u=Object.assign({video:{deviceId:e.deviceId}},i.g.cameraOptions?{facingMode:i.g.cameraOptions.facingMode,width:i.g.cameraOptions.width,height:i.g.cameraOptions.height}:{}),o.return(navigator.mediaDevices.getUserMedia(u).then(function(s){r.m=s,bt(r,s)}).catch(function(s){throw console.error("Failed to acquire camera feed: "+s),alert("Failed to acquire camera feed: "+s),s}))})})}function _t(t,e){t.o=new at({options:t.l.map(function(n){var i=void 0;return n.type==="image"?i=J("https://fonts.gstatic.com/s/i/googlematerialicons/image/v12/gm_grey-24dp/1x/gm_image_gm_grey_24dp.png"):n.type==="video"&&(i=J("https://fonts.gstatic.com/s/i/googlematerialicons/videocam/v12/gm_grey-24dp/1x/gm_videocam_gm_grey_24dp.png")),{name:n.label,value:n.label,data:n,prefix:i}}),onclick:function(n){t.i.parent.style.display="none",n.data.start()},C:function(){t.u.style.zIndex="2000"},B:function(){t.u.style.zIndex="100"}},e)}function kt(t,e){var n=e.appendChild(document.createElement("input"));n.type="file",n.style.display="none",e.appendChild(G("file-selection",[e=M("",[J(nt("file_upload"))])])),e.onclick=function(){n.click()},n.onchange=function(){return E(t,function i(){var r,u,o,s,f=this;return L(i,function(p){if((r=n.files)&&0<r.length){u=r[0].type.toLowerCase(),o=u.substring(0,u.indexOf("/"));var g=r[0],O=g.type.match(/^([^;]+)(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i);if((O==null?void 0:O.length)!==2||!(/^image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)$/i.test(O[1])||/^video\/(?:mpeg|mp4|ogg|webm|x-matroska|quicktime|x-ms-wmv)$/i.test(O[1])||/^audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)$/i.test(O[1])))throw Error("unsafe blob MIME type: "+g.type);if(URL&&URL.createObjectURL)g=new P(URL.createObjectURL(g),lt);else throw Error("cannot find createObjectURL");s=g.toString(),o==="image"?(ct(f.o,r[0].name),dt(f,s)):o==="video"&&vt(f,s)}p.g=0})})}}function dt(t,e){t.h.onload=function(){return E(t,function n(){var i=this,r;return L(n,function(u){return r=i,i.g.onFrame?u=c(u,pt(i,{label:"file",type:"image",image:i.h,start:function(){return E(r,function o(){var s=this;return L(o,function(f){return c(f,Et(s,s.h),0)})})}}),0):(u.g=0,u=void 0),u})})},t.h.src=e}function vt(t,e){t.video.onloadedmetadata=function(){return E(t,function n(){var i=this,r;return L(n,function(u){return r=i,i.video.loop=!0,i.g.onFrame?u=c(u,pt(i,{label:"file",type:"video",video:i.video,start:function(){return St(r)}}),0):(u.g=0,u=void 0),u})})},t.video.srcObject=null,t.video.src=e}$.prototype.create=function(t,e,n){var i=this,r=this.u=n.appendChild(document.createElement("div"));r.classList.add("control-panel-entry"),r.classList.add("control-panel-source-picker");var u=M("source-selection");r.append(u),Lt(this).then(function(o){i.l=o,_t(i,u),kt(i,u),o=u.appendChild(document.createElement("div")),o.classList.add("inputs"),i.video=o.appendChild(document.createElement("video")),i.video.setAttribute("crossorigin","anonymous"),i.video.setAttribute("playsinline","true"),i.h=o.appendChild(document.createElement("img")),i.h.setAttribute("crossorigin","anonymous"),Pt(i,r),0<i.l.length&&(o=i.l[0],Z(i.o,o.label)||ct(i.o),o.start())})};function Pt(t,e){var n=nt("pause"),i=nt("play_arrow"),r,u,o,s;e.append(o=M("video-controls",[s=J(n),u=M("video-track"),r=M("video-slider-ball"),e=G("video-time")])),t.i={parent:o,K:r,track:u,time:e},e.textContent="00:00",r.style.display="inline-block",r.onmousedown=function(f){function p(){f.preventDefault(),document.removeEventListener("mousemove",g),O||t.video.play(),document.removeEventListener("mouseup",p)}function g(w){f.preventDefault();var j=o.getBoundingClientRect(),q=r.getBoundingClientRect(),I=u.getBoundingClientRect();w=w.clientX-j.left-q.width/2,j=I.left-j.left,w<j?w=j:w>j+I.width&&(w=j+I.width),r.style.left=w+"px",t.video.currentTime=(w-j)/I.width*t.video.duration}f.preventDefault();var O=t.video.paused;t.video.pause(),document.addEventListener("mousemove",g),document.addEventListener("mouseup",p)},s.onclick=function(){t.video.paused?(t.video.play(),s.src=n):(t.video.pause(),s.src=i)},t.D=function(){t.video.paused&&(s.src=i),s.src=n}}function gt(t,e){var n=t.i.K,i=t.i.track.getBoundingClientRect();t=t.i.parent.getBoundingClientRect(),n.style.left=i.left-t.left+i.width*e+"px"}function It(t){var e=Math.floor(t%60).toString();return e=e.length===1?"0"+e:e,t=Math.floor(t/60).toString(),t=t.length===1?"0"+t:t,t+":"+e}$.prototype.update=function(){this.h&&!this.j&&this.g.onFrame&&this.g.onFrame(this.h,{width:this.h.naturalWidth,height:this.h.naturalHeight})};function it(t){this.g=t}it.prototype.create=function(t,e,n){t=n.appendChild(document.createElement("div")),t.classList.add("control-panel-entry"),t.classList.add("control-panel-text"),t.textContent=this.g.title},it.prototype.update=function(){};function ot(t){this.h=t}ot.prototype.create=function(t,e,n){var i=this;this.i=t,this.options=e,this.g=n.appendChild(document.createElement("div")),this.g.classList.add("control-panel-entry"),this.g.classList.add("control-panel-toggle"),this.g.onclick=function(){i.options[i.h.field]=!i.options[i.h.field],i.i()},t=this.g.appendChild(document.createElement("span")),t.classList.add("label"),this.value=this.g.appendChild(document.createElement("span")),this.value.classList.add("value"),t.textContent=this.h.title},ot.prototype.update=function(){this.options[this.h.field]?(this.value.textContent="Yes",this.g.classList.add("yes"),this.g.classList.remove("no")):(this.value.textContent="No",this.g.classList.add("no"),this.g.classList.remove("yes"))};function rt(t,e){this.parent=t,this.options=e,this.g=[],this.h=this.parent.appendChild(document.createElement("div")),this.h.classList.add("control-panel")}rt.prototype.add=function(t){var e=this;t=A(t);for(var n=t.next();!n.done;n=t.next())n=n.value,this.g.push(n),n.create(function(){st(e)},this.options,this.h);return st(this),this},rt.prototype.on=function(t){return this.i=t,st(this),this};function st(t){for(var e=A(t.g),n=e.next();!n.done;n=e.next())n.value.update();t.i&&t.i(t.options)}T("ControlPanel",rt),T("Slider",et),T("StaticText",it),T("Toggle",ot),T("SourcePicker",$),T("FPS",K),T("DropDownControl",tt)}).call(U);var Ut={};(function(){function H(l){var h=0;return function(){return h<l.length?{done:!1,value:l[h++]}:{done:!0}}}var D=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,a){return l==Array.prototype||l==Object.prototype||(l[h]=a.value),l};function X(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof U=="object"&&U];for(var h=0;h<l.length;++h){var a=l[h];if(a&&a.Math==Math)return a}throw Error("Cannot find global object")}var S=X(this);function d(l,h){if(h)t:{var a=S;l=l.split(".");for(var c=0;c<l.length-1;c++){var v=l[c];if(!(v in a))break t;a=a[v]}l=l[l.length-1],c=a[l],h=h(c),h!=c&&h!=null&&D(a,l,{configurable:!0,writable:!0,value:h})}}function z(l){var h=typeof Symbol!="undefined"&&Symbol.iterator&&l[Symbol.iterator];return h?h.call(l):{next:H(l)}}var A=typeof Object.assign=="function"?Object.assign:function(l,h){for(var a=1;a<arguments.length;a++){var c=arguments[a];if(c)for(var v in c)Object.prototype.hasOwnProperty.call(c,v)&&(l[v]=c[v])}return l};d("Object.assign",function(l){return l||A}),d("Array.prototype.fill",function(l){return l||function(h,a,c){var v=this.length||0;for(0>a&&(a=Math.max(0,v+a)),(c==null||c>v)&&(c=v),c=Number(c),0>c&&(c=Math.max(0,v+c)),a=Number(a||0);a<c;a++)this[a]=h;return this}});function C(l){return l||Array.prototype.fill}d("Int8Array.prototype.fill",C),d("Uint8Array.prototype.fill",C),d("Uint8ClampedArray.prototype.fill",C),d("Int16Array.prototype.fill",C),d("Uint16Array.prototype.fill",C),d("Int32Array.prototype.fill",C),d("Uint32Array.prototype.fill",C),d("Float32Array.prototype.fill",C),d("Float64Array.prototype.fill",C);var Y=this||self;function _(l,h){l=l.split(".");var a=Y;l[0]in a||typeof a.execScript=="undefined"||a.execScript("var "+l[0]);for(var c;l.length&&(c=l.shift());)l.length||h===void 0?a[c]&&a[c]!==Object.prototype[c]?a=a[c]:a=a[c]={}:a[c]=h}var R={color:"white",lineWidth:4,radius:6,visibilityMin:.5};function B(l){return l=l||{},Object.assign(Object.assign(Object.assign({},R),{fillColor:l.color}),l)}function b(l,h){return l instanceof Function?l(h):l}function F(l,h,a){return Math.max(Math.min(h,a),Math.min(Math.max(h,a),l))}_("clamp",F),_("drawLandmarks",function(l,h,a){if(h){a=B(a),l.save();var c=l.canvas,v=0;h=z(h);for(var y=h.next();!y.done;y=h.next())if(y=y.value,y!==void 0&&(y.visibility===void 0||y.visibility>a.visibilityMin)){l.fillStyle=b(a.fillColor,{index:v,from:y}),l.strokeStyle=b(a.color,{index:v,from:y}),l.lineWidth=b(a.lineWidth,{index:v,from:y});var m=new Path2D;m.arc(y.x*c.width,y.y*c.height,b(a.radius,{index:v,from:y}),0,2*Math.PI),l.fill(m),l.stroke(m),++v}l.restore()}}),_("drawConnectors",function(l,h,a,c){if(h&&a){c=B(c),l.save();var v=l.canvas,y=0;a=z(a);for(var m=a.next();!m.done;m=a.next()){var x=m.value;l.beginPath(),m=h[x[0]],x=h[x[1]],m&&x&&(m.visibility===void 0||m.visibility>c.visibilityMin)&&(x.visibility===void 0||x.visibility>c.visibilityMin)&&(l.strokeStyle=b(c.color,{index:y,from:m,to:x}),l.lineWidth=b(c.lineWidth,{index:y,from:m,to:x}),l.moveTo(m.x*v.width,m.y*v.height),l.lineTo(x.x*v.width,x.y*v.height)),++y,l.stroke()}l.restore()}}),_("drawRectangle",function(l,h,a){a=B(a),l.save();var c=l.canvas;l.beginPath(),l.lineWidth=b(a.lineWidth,{}),l.strokeStyle=b(a.color,{}),l.fillStyle=b(a.fillColor,{}),l.translate(h.xCenter*c.width,h.yCenter*c.height),l.rotate(h.rotation*Math.PI/180),l.rect(-h.width/2*c.width,-h.height/2*c.height,h.width*c.width,h.height*c.height),l.translate(-h.xCenter*c.width,-h.yCenter*c.height),l.stroke(),l.fill(),l.restore()}),_("lerp",function(l,h,a,c,v){return F(c*(1-(l-h)/(a-h))+v*(1-(a-l)/(a-h)),c,v)})}).call(U);export{Tt as c,Ut as d};
