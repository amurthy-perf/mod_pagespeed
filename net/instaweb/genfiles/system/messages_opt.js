(function(){var h=h||{},l=this;function aa(){}
function m(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function n(a){var b=m(a);return"array"==b||"object"==b&&"number"==typeof a.length}function p(a){return"string"==typeof a}function q(a){return"function"==m(a)}var ba="closure_uid_"+(1E9*Math.random()>>>0),ca=0;function da(a,b,c){return a.call.apply(a.bind,arguments)}
function ea(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function r(a,b,c){r=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?da:ea;return r.apply(null,arguments)}var fa=Date.now||function(){return+new Date};
function t(a,b){function c(){}c.prototype=b.prototype;a.S=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.T=function(a,c,f){for(var g=Array(arguments.length-2),k=2;k<arguments.length;k++)g[k-2]=arguments[k];return b.prototype[c].apply(a,g)}};function ga(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}var ha=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function u(a,b){return a<b?-1:a>b?1:0};function v(a){if(Error.captureStackTrace)Error.captureStackTrace(this,v);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}t(v,Error);v.prototype.name="CustomError";function ia(a,b){b.unshift(a);v.call(this,ga.apply(null,b));b.shift()}t(ia,v);ia.prototype.name="AssertionError";function ja(a,b){throw new ia("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var w=Array.prototype,ka=w.indexOf?function(a,b,c){return w.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},la=w.forEach?function(a,b,c){w.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
function ma(a){var b;a:{b=na;for(var c=a.length,d=p(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:p(a)?a.charAt(b):a[b]}function oa(a){if("array"!=m(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0};var x;a:{var pa=l.navigator;if(pa){var qa=pa.userAgent;if(qa){x=qa;break a}}x=""};function ra(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function sa(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}var ta="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ua(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ta.length;f++)c=ta[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var va=-1!=x.indexOf("Opera")||-1!=x.indexOf("OPR"),y=-1!=x.indexOf("Trident")||-1!=x.indexOf("MSIE"),z=-1!=x.indexOf("Gecko")&&-1==x.toLowerCase().indexOf("webkit")&&!(-1!=x.indexOf("Trident")||-1!=x.indexOf("MSIE")),A=-1!=x.toLowerCase().indexOf("webkit");function wa(){var a=l.document;return a?a.documentMode:void 0}
var xa=function(){var a="",b;if(va&&l.opera)return a=l.opera.version,q(a)?a():a;z?b=/rv\:([^\);]+)(\)|;)/:y?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:A&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(x))?a[1]:"");return y&&(b=wa(),b>parseFloat(a))?String(b):a}(),ya={};
function B(a){var b;if(!(b=ya[a])){b=0;for(var c=ha(String(xa)).split("."),d=ha(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",k=d[f]||"",P=RegExp("(\\d*)(\\D*)","g"),qb=RegExp("(\\d*)(\\D*)","g");do{var G=P.exec(g)||["","",""],H=qb.exec(k)||["","",""];if(0==G[0].length&&0==H[0].length)break;b=u(0==G[1].length?0:parseInt(G[1],10),0==H[1].length?0:parseInt(H[1],10))||u(0==G[2].length,0==H[2].length)||u(G[2],H[2])}while(0==b)}b=ya[a]=0<=b}return b}
var za=l.document,Aa=za&&y?wa()||("CSS1Compat"==za.compatMode?parseInt(xa,10):5):void 0;var Ba;(Ba=!y)||(Ba=y&&9<=Aa);var Ca=Ba,Da=y&&!B("9");!A||B("528");z&&B("1.9b")||y&&B("8")||va&&B("9.5")||A&&B("528");z&&!B("8")||y&&B("9");var C="closure_listenable_"+(1E6*Math.random()|0),Ea=0;function Fa(a,b,c,d,e){this.listener=a;this.a=null;this.src=b;this.type=c;this.C=!!d;this.F=e;++Ea;this.u=this.B=!1}function Ga(a){a.u=!0;a.listener=null;a.a=null;a.src=null;a.F=null};function Ha(a){this.src=a;this.a={};this.b=0}function Ia(a,b,c,d,e){var f=b.toString();b=a.a[f];b||(b=a.a[f]=[],a.b++);var g=Ja(b,c,d,e);-1<g?(a=b[g],a.B=!1):(a=new Fa(c,a.src,f,!!d,e),a.B=!1,b.push(a));return a}function Ka(a,b){var c=b.type;if(c in a.a){var d=a.a[c],e=ka(d,b),f;(f=0<=e)&&w.splice.call(d,e,1);f&&(Ga(b),0==a.a[c].length&&(delete a.a[c],a.b--))}}function Ja(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.u&&f.listener==b&&f.C==!!c&&f.F==d)return e}return-1};function La(){0!=Ma&&(this[ba]||(this[ba]=++ca));this.A=this.A;this.O=this.O}var Ma=0;La.prototype.A=!1;function D(a,b){this.type=a;this.a=this.target=b}D.prototype.b=function(){};function Na(a){Na[" "](a);return a}Na[" "]=aa;function E(a,b){D.call(this,a?a.type:"");this.f=this.a=this.target=null;if(a){this.type=a.type;this.target=a.target||a.srcElement;this.a=b;var c=a.relatedTarget;if(c&&z)try{Na(c.nodeName)}catch(d){}this.f=a;a.defaultPrevented&&this.b()}}t(E,D);E.prototype.b=function(){E.S.b.call(this);var a=this.f;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Da)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Oa="closure_lm_"+(1E6*Math.random()|0),Pa={},Qa=0;function F(a,b,c,d,e){if("array"==m(b))for(var f=0;f<b.length;f++)F(a,b[f],c,d,e);else if(c=Ra(c),a&&a[C])Ia(a.v,String(b),c,d,e);else{if(!b)throw Error("Invalid event type");var f=!!d,g=I(a);g||(a[Oa]=g=new Ha(a));c=Ia(g,b,c,d,e);c.a||(d=Sa(),c.a=d,d.src=a,d.listener=c,a.addEventListener?a.addEventListener(b.toString(),d,f):a.attachEvent(Ta(b.toString()),d),Qa++)}}
function Sa(){var a=Ua,b=Ca?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}function Va(a,b,c,d,e){if("array"==m(b))for(var f=0;f<b.length;f++)Va(a,b[f],c,d,e);else(c=Ra(c),a&&a[C])?(a=a.v,b=String(b).toString(),b in a.a&&(f=a.a[b],c=Ja(f,c,d,e),-1<c&&(Ga(f[c]),w.splice.call(f,c,1),0==f.length&&(delete a.a[b],a.b--)))):a&&(a=I(a))&&(b=a.a[b.toString()],a=-1,b&&(a=Ja(b,c,!!d,e)),(c=-1<a?b[a]:null)&&Wa(c))}
function Wa(a){if("number"!=typeof a&&a&&!a.u){var b=a.src;if(b&&b[C])Ka(b.v,a);else{var c=a.type,d=a.a;b.removeEventListener?b.removeEventListener(c,d,a.C):b.detachEvent&&b.detachEvent(Ta(c),d);Qa--;(c=I(b))?(Ka(c,a),0==c.b&&(c.src=null,b[Oa]=null)):Ga(a)}}}function Ta(a){return a in Pa?Pa[a]:Pa[a]="on"+a}function Xa(a,b,c,d){var e=!0;if(a=I(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.C==c&&!f.u&&(f=Ya(f,d),e=e&&!1!==f)}return e}
function Ya(a,b){var c=a.listener,d=a.F||a.src;a.B&&Wa(a);return c.call(d,b)}
function Ua(a,b){if(a.u)return!0;if(!Ca){var c;if(!(c=b))a:{c=["window","event"];for(var d=l,e;e=c.shift();)if(null!=d[e])d=d[e];else{c=null;break a}c=d}e=c;c=new E(e,this);d=!0;if(!(0>e.keyCode||void 0!=e.returnValue)){a:{var f=!1;if(0==e.keyCode)try{e.keyCode=-1;break a}catch(P){f=!0}if(f||void 0==e.returnValue)e.returnValue=!0}e=[];for(f=c.a;f;f=f.parentNode)e.push(f);for(var f=a.type,g=e.length-1;0<=g;g--){c.a=e[g];var k=Xa(e[g],f,!0,c),d=d&&k}for(g=0;g<e.length;g++)c.a=e[g],k=Xa(e[g],f,!1,c),
d=d&&k}return d}return Ya(a,new E(b,this))}function I(a){a=a[Oa];return a instanceof Ha?a:null}var Za="__closure_events_fn_"+(1E9*Math.random()>>>0);function Ra(a){if(q(a))return a;a[Za]||(a[Za]=function(b){return a.handleEvent(b)});return a[Za]};function J(){La.call(this);this.v=new Ha(this);this.M=this}t(J,La);J.prototype[C]=!0;J.prototype.addEventListener=function(a,b,c,d){F(this,a,b,c,d)};J.prototype.removeEventListener=function(a,b,c,d){Va(this,a,b,c,d)};function K(a,b){var c=a.M,d=b,e=d.type||d;if(p(d))d=new D(d,c);else if(d instanceof D)d.target=d.target||c;else{var f=d,d=new D(e,c);ua(d,f)}c=d.a=c;$a(c,e,!0,d);$a(c,e,!1,d)}
function $a(a,b,c,d){if(b=a.v.a[String(b)]){b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.u&&g.C==c){var k=g.listener,P=g.F||g.src;g.B&&Ka(a.v,g);e=!1!==k.call(P,d)&&e}}}};function ab(a,b,c){if(q(a))c&&(a=r(a,c));else if(a&&"function"==typeof a.handleEvent)a=r(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<b?-1:l.setTimeout(a,b||0)};function bb(){}bb.prototype.a=null;function cb(a){var b;(b=a.a)||(b={},db(a)&&(b[0]=!0,b[1]=!0),b=a.a=b);return b};var eb;function fb(){}t(fb,bb);function gb(a){return(a=db(a))?new ActiveXObject(a):new XMLHttpRequest}function db(a){if(!a.b&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.b=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.b}eb=new fb;function L(a,b){this.b={};this.a=[];this.g=this.f=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)M(this,arguments[d],arguments[d+1])}else if(a){a instanceof L?(c=a.w(),d=a.D()):(c=sa(a),d=ra(a));for(var e=0;e<c.length;e++)M(this,c[e],d[e])}}L.prototype.D=function(){hb(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.b[this.a[b]]);return a};L.prototype.w=function(){hb(this);return this.a.concat()};
L.prototype.clear=function(){this.b={};this.g=this.f=this.a.length=0};function hb(a){if(a.f!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];Object.prototype.hasOwnProperty.call(a.b,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.f!=a.a.length){for(var e={},c=b=0;b<a.a.length;)d=a.a[b],Object.prototype.hasOwnProperty.call(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}}function M(a,b,c){Object.prototype.hasOwnProperty.call(a.b,b)||(a.f++,a.a.push(b),a.g++);a.b[b]=c}
L.prototype.forEach=function(a,b){for(var c=this.w(),d=0;d<c.length;d++){var e=c[d];a.call(b,Object.prototype.hasOwnProperty.call(this.b,e)?this.b[e]:void 0,e,this)}};L.prototype.clone=function(){return new L(this)};function ib(a){if("function"==typeof a.D)return a.D();if(p(a))return a.split("");if(n(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return ra(a)}function jb(a,b){if("function"==typeof a.forEach)a.forEach(b,void 0);else if(n(a)||p(a))la(a,b,void 0);else{var c;if("function"==typeof a.w)c=a.w();else if("function"!=typeof a.D)if(n(a)||p(a)){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=sa(a);else c=void 0;for(var d=ib(a),e=d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)}};function kb(a,b,c,d,e){this.reset(a,b,c,d,e)}kb.prototype.a=null;var lb=0;kb.prototype.reset=function(a,b,c,d,e){"number"==typeof e||lb++;d||fa();this.b=b;delete this.a};function mb(a){this.g=a;this.b=this.f=this.a=null}function N(a,b){this.name=a;this.value=b}N.prototype.toString=function(){return this.name};var nb=new N("SEVERE",1E3),ob=new N("CONFIG",700),pb=new N("FINE",500);function rb(a){if(a.f)return a.f;if(a.a)return rb(a.a);ja("Root logger has no level set.");return null}
mb.prototype.log=function(a,b,c){if(a.value>=rb(this).value)for(q(b)&&(b=b()),a=new kb(a,String(b),this.g),c&&(a.a=c),c="log:"+a.b,l.console&&(l.console.timeStamp?l.console.timeStamp(c):l.console.markTimeline&&l.console.markTimeline(c)),l.msWriteProfilerMark&&l.msWriteProfilerMark(c),c=this;c;)c=c.a};var sb={},O=null;
function tb(a){O||(O=new mb(""),sb[""]=O,O.f=ob);var b;if(!(b=sb[a])){b=new mb(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=tb(a.substr(0,c));c.b||(c.b={});c.b[d]=b;b.a=c;sb[a]=b}return b};function Q(a,b){a&&a.log(pb,b,void 0)};var ub=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function vb(a){if(wb){wb=!1;var b=l.location;if(b){var c=b.href;if(c&&(c=(c=vb(c)[3]||null)?decodeURI(c):c)&&c!=b.hostname)throw wb=!0,Error();}}return a.match(ub)}var wb=A;function R(a){J.call(this);this.N=new L;this.s=a||null;this.b=!1;this.o=this.c=null;this.a=this.K=this.j="";this.f=this.H=this.i=this.G=!1;this.g=0;this.l=null;this.I=xb;this.m=this.R=!1}t(R,J);var xb="",yb=R.prototype,zb=tb("goog.net.XhrIo");yb.h=zb;var Ab=/^https?$/i,Bb=["POST","PUT"];
R.prototype.send=function(a,b,c,d){if(this.c)throw Error("[goog.net.XhrIo] Object is active with another request="+this.j+"; newUri="+a);b=b?b.toUpperCase():"GET";this.j=a;this.a="";this.K=b;this.G=!1;this.b=!0;this.c=this.s?gb(this.s):gb(eb);this.o=this.s?cb(this.s):cb(eb);this.c.onreadystatechange=r(this.L,this);try{Q(this.h,S(this,"Opening Xhr")),this.H=!0,this.c.open(b,String(a),!0),this.H=!1}catch(f){Q(this.h,S(this,"Error opening Xhr: "+f.message));Cb(this,f);return}a=c||"";var e=this.N.clone();
d&&jb(d,function(a,b){M(e,b,a)});d=ma(e.w());c=l.FormData&&a instanceof l.FormData;!(0<=ka(Bb,b))||d||c||M(e,"Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(a,b){this.c.setRequestHeader(b,a)},this);this.I&&(this.c.responseType=this.I);"withCredentials"in this.c&&(this.c.withCredentials=this.R);try{Db(this),0<this.g&&(this.m=Eb(this.c),Q(this.h,S(this,"Will abort after "+this.g+"ms if incomplete, xhr2 "+this.m)),this.m?(this.c.timeout=this.g,this.c.ontimeout=r(this.J,
this)):this.l=ab(this.J,this.g,this)),Q(this.h,S(this,"Sending request")),this.i=!0,this.c.send(a),this.i=!1}catch(f){Q(this.h,S(this,"Send error: "+f.message)),Cb(this,f)}};function Eb(a){return y&&B(9)&&"number"==typeof a.timeout&&void 0!==a.ontimeout}function na(a){return"content-type"==a.toLowerCase()}
R.prototype.J=function(){"undefined"!=typeof h&&this.c&&(this.a="Timed out after "+this.g+"ms, aborting",Q(this.h,S(this,this.a)),K(this,"timeout"),this.c&&this.b&&(Q(this.h,S(this,"Aborting")),this.b=!1,this.f=!0,this.c.abort(),this.f=!1,K(this,"complete"),K(this,"abort"),Fb(this)))};function Cb(a,b){a.b=!1;a.c&&(a.f=!0,a.c.abort(),a.f=!1);a.a=b;Gb(a);Fb(a)}function Gb(a){a.G||(a.G=!0,K(a,"complete"),K(a,"error"))}R.prototype.L=function(){this.A||(this.H||this.i||this.f?Hb(this):this.P())};
R.prototype.P=function(){Hb(this)};function Hb(a){if(a.b&&"undefined"!=typeof h)if(a.o[1]&&4==T(a)&&2==U(a))Q(a.h,S(a,"Local request error detected and ignored"));else if(a.i&&4==T(a))ab(a.L,0,a);else if(K(a,"readystatechange"),4==T(a)){Q(a.h,S(a,"Request complete"));a.b=!1;try{if(Ib(a))K(a,"complete"),K(a,"success");else{var b;try{b=2<T(a)?a.c.statusText:""}catch(c){Q(a.h,"Can not get status: "+c.message),b=""}a.a=b+" ["+U(a)+"]";Gb(a)}}finally{Fb(a)}}}
function Fb(a){if(a.c){Db(a);var b=a.c,c=a.o[0]?aa:null;a.c=null;a.o=null;K(a,"ready");try{b.onreadystatechange=c}catch(d){(a=a.h)&&a.log(nb,"Problem encountered resetting onreadystatechange: "+d.message,void 0)}}}function Db(a){a.c&&a.m&&(a.c.ontimeout=null);"number"==typeof a.l&&(l.clearTimeout(a.l),a.l=null)}
function Ib(a){var b=U(a),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=vb(String(a.j))[1]||null,!a&&self.location&&(a=self.location.protocol,a=a.substr(0,a.length-1)),b=!Ab.test(a?a.toLowerCase():"");c=b}return c}function T(a){return a.c?a.c.readyState:0}function U(a){try{return 2<T(a)?a.c.status:-1}catch(b){return-1}}function S(a,b){return b+" ["+a.K+" "+a.j+" "+U(a)+"]"};function V(a){this.b=a||new R;this.a=document.getElementById("log").innerHTML.split("\n");0<this.a.length&&this.a.pop();this.f=this.a.length;this.i=!1;this.j="";this.g=!1;a=document.createElement("div");a.style.overflow="hidden";a.style.clear="both";var b=document.createElement("div");b.id="ui-div";b.innerHTML='<table id="ui-table" border="1" style="float:left; border-collapse: collapse;border-color:silver;"><tr valign="center"><td>Reverse: <input type="checkbox" id="reverse" '+(this.i?"checked":
"")+'></td><td>Auto refresh (every 5 seconds): <input type="checkbox" id="auto-refresh" '+(this.g?"checked":"")+'></td><td>&nbsp;&nbsp;&nbsp;&nbsp;Filter: <input id="text-filter" type="text" size="70"></td></tr></table>';a.appendChild(b);b=document.createElement("div");b.id="num";b.className="pagespeed-show-number";a.appendChild(b);document.body.insertBefore(a,document.getElementById("log"));W(this)}V.prototype.A=function(){this.i=!this.i;Jb(this)};V.prototype.s=function(){this.g=!this.g};
V.prototype.o=function(a){this.j=a.value;Jb(this)};function W(a,b){var c=void 0!=b?b:a.a.length;document.getElementById("num").textContent=c==a.f?"Total message count: "+c:"Visible message count: "+c+"/"+a.f}
function Jb(a){var b=document.getElementById("log"),c;c=a.a;var d=c.length;if(0<d){for(var e=Array(d),f=0;f<d;f++)e[f]=c[f];c=e}else c=[];if(a.j)for(d=c.length-1;0<=d;--d)c[d]&&-1!=c[d].toLowerCase().indexOf(a.j.toLowerCase())||c.splice(d,1);W(a,c.length);a.i?b.innerHTML=c.reverse().join("\n"):b.innerHTML=c.join("\n")}V.prototype.l=function(){this.g&&!this.b.c&&this.b.send(document.location.href)};
V.prototype.m=function(){if(Ib(this.b)){var a;var b=this.b;try{a=b.c?b.c.responseText:""}catch(d){Q(b.h,"Can not get responseText: "+d.message),a=""}var b=[],b=a.indexOf('<div id="log">'),c=a.indexOf('<script type="text/javascript">',b);0<=b&&0<=c?(b=a.substring(b+14,c-7).split("\n"),b.pop(),this.a=b,this.f=b.length,Jb(this)):(oa(this.a),this.f=0,W(this),document.getElementById("log").textContent="Failed to write messages to this page. Verify that MessageBufferSize is not set to 0 in pagespeed.conf.")}else a=
this.b,console.log(p(a.a)?a.a:String(a.a)),oa(this.a),this.f=0,W(this),document.getElementById("log").textContent="Sorry, the message history cannot be loaded. Please wait and try again later."};function Kb(){F(window,"load",function(){var a=new V,b=document.getElementById("text-filter");F(b,"keyup",r(a.o,a,b));F(document.getElementById("reverse"),"change",r(a.A,a));F(document.getElementById("auto-refresh"),"change",r(a.s,a));F(a.b,"complete",r(a.m,a));setInterval(r(a.l,a),5E3)})}
var X=["pagespeed","Messages","Start"],Y=l;X[0]in Y||!Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||void 0===Kb?Y[Z]?Y=Y[Z]:Y=Y[Z]={}:Y[Z]=Kb;})();