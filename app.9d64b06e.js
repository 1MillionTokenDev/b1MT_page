parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Bh1I":[function(require,module,exports) {
var t=null;function e(){return t||(t=n()),t}function n(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);if(t)return r(t[0])}return"/"}function r(t){return(""+t).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}exports.getBundleURL=e,exports.getBaseURL=r;
},{}],"rxmo":[function(require,module,exports) {
var e=require("./bundle-url");function n(e){var n=e.cloneNode();n.onload=function(){e.remove()},n.href=e.href.split("?")[0]+"?"+Date.now(),e.parentNode.insertBefore(n,e.nextSibling)}var l=null;function r(){l||(l=setTimeout(function(){for(var r=document.querySelectorAll('link[rel="stylesheet"]'),t=0;t<r.length;t++)e.getBaseURL(r[t].href)===e.getBundleURL()&&n(r[t]);l=null},50))}module.exports=r;
},{"./bundle-url":"Bh1I"}],"aEr9":[function(require,module,exports) {
var e=require("_css_loader");module.hot.dispose(e),module.hot.accept(e);
},{"_css_loader":"rxmo"}],"vSHK":[function(require,module,exports) {
var e=require("_css_loader");module.hot.dispose(e),module.hot.accept(e);
},{"/home/spielrs/Proyectos/b1mt/dist/typography/Kanit-Bold.ttf":[["Kanit-Bold.44e48888.ttf","C8Bv"],"C8Bv"],"/home/spielrs/Proyectos/b1mt/dist/typography/Kanit-Regular.ttf":[["Kanit-Regular.3fd5a69a.ttf","MNlX"],"MNlX"],"/home/spielrs/Proyectos/b1mt/dist/typography/Kanit-Light.ttf":[["Kanit-Light.ff6dccfd.ttf","KZcm"],"KZcm"],"_css_loader":"rxmo"}],"shFR":[function(require,module,exports) {
module.exports={en:{home:"Home",tokenomics:"Tokenomics",use_cases:"Use Cases",buy:"Buy",stake:"Stake",road_map:"Road map",community:"Community",price:"Price",market_cap:"Market cap",description:"$b1MT is a utility cryptocurrency that can be used to pay for advertising and for gambling in slot machines, dice and roulette.",community_project:"This proyect is developed and drived by the community. No ownership but governance.",contract:"contract",launch:"b1MT launch",governance:"Governance",kennel_token_pool:"Pool in Kennel Token",web:"Web for b1MT",swap_web:"Integrate swap for web",partner_app:"Partner app",automata_token:"1MT in Automata Network",governance_web:"Integrate governance in web",cross_swap:"Swap from Ata Network to BSC or ETH",partner_with_1mt:"Partner with 1MT",partner_with_1mt_description:"By holding the 2500 $b1MT you will get:<ul><li>1 week of free services ( 1 CMS reddit post, 1 post on twitter and 1 @everyone community ping on discord every 2 days)</li><li>Post on partners channel in 1MT discord once a day, you can use @everyone to ping the community</li></ul>",vegas_casino_description:"Play a different casino game in this discord server. You can buy casino coins with b1MT or 1MT. Play with responsability",moneytime:"Moneytime is a unique project that provides a variety of profit-making options for $b1MT: <ul><li>b1MT/BNB earn $Time farming pool!</li><li>Stake $Money earn $b1MT</li><li>Stake $1MT earn $Time</li></ul>",the_kennel_token_description:"Token Kennel is the best way to stake your $b1MT for the long term and get a good APY between 80%-300%. You only need to hold 250 $KENNEL in your wallet. There is a 10% fee for deposits and withdrawals, which is allocated to liquidity providers. Voting takes place every 2 weeks, the winner pool will be repaid, and APY will increase again. See more information in <a href='https://thetokenkennel.com/'>The Kennel Token</a>.",slogan:"Limited Supply for Big Goals",slogan_description:"The supply of $b1MT is limited, so it is the best token candidate for storing value, and it also has multiple use cases"},es:{home:"Inicio",tokenomics:"Tokenomics",use_cases:"Casos Prácticos",buy:"Comprar",stake:"Depositar",road_map:"Hoja de ruta",community:"Comunidad",price:"Precio",market_cap:"Volumen",description:"$b1MT es una criptomoneda de utilidad que puede ser usado para pagar publicidad, como moneda de cambio en casinos online y redes sociales",community_project:"Este proyecto es desarrollado y dirigido por la comunidad. Sin propietario pero gobernado por sus accionistas",contract:"contrato",launch:"Lanzamiento de b1MT",governance:"Gobernabilidad",kennel_token_pool:"Deposito en Kennel Token",web:"Web para b1MT",swap_web:"Integrar intercambiador en la web",partner_app:"App para socios",automata_token:"1MT en Automata Network",cross_swap:"Intercambiar desde Ata Network a BSC o ETH",governance_web:"Integrar gobernabilidad en la web",partner_with_1mt:"Asociarse con 1MT",partner_with_1mt_description:"Mantenindo 2500 $b1MT en la cartera obtendras:<ul><li>Una semana gratuita de publicidad ( un anuncio en reddit, twitter y en hacer ping con @everyone a la comunidad en discord cada dos dias )</li><li>Anunciarse en el canal partners de discord de 1MT una vez al dia, puede usar @everyone para hacer ping a la communidad</li></ul>",vegas_casino_description:"Juega a diferentes juego de casinos en este servidor de Discord. Puedes comprar monedas de casino con b1MT o 1MT. Juega siempre con responsabilidad",moneytime:"Moneytime es un proyecto único que ofrece múltiples opciones para obtener beneficios con $b1MT: <ul><li> b1MT/BNB gana $Time con deposito de farmeo</li><li>Deposita $Money y gana $b1MT</li><li>Deposita $1MT y gana $Time</li></ul>",the_kennel_token_description:"The Token Kennel es la mejor manera de depositar sus $b1MT y recibir un atractivo interés entre 80%-300%, solo necesita disponer de 250 $KENNEL en su cartera para eso. El despósito y retiro tiene una comisión de 10% que se distribuye a todos los proveedores de liquidez. Cada dos semanas hay una votación y el deposito ganador recibe un repago incrementando el interés. Ver más en <a href='https://thetokenkennel.com/' target='_blank'>The Kennel Token</a>.",slogan:"Limitada cantidad para grandes metas",slogan_description:"Debido a que hay una cantidad limitada de $b1MT es el candidato idóneo para utilizarlo como depósito de valor, además dispone de muchos casos prácticos"}};
},{}],"Ws3s":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),require("../node_modules/yew-styles/main.css"),require("./main.sass");var r=e(require("./lang.toml"));window.lang=r.default;
},{"../node_modules/yew-styles/main.css":"aEr9","./main.sass":"vSHK","./lang.toml":"shFR"}],"sQmG":[function(require,module,exports) {
var global = arguments[3];
var e,t,o=arguments[3],a="__parcel__error__overlay__",r=module.bundle.Module;function n(e){r.call(this,e),this.hot={data:module.bundle.hotData,_acceptCallbacks:[],_disposeCallbacks:[],accept:function(e){this._acceptCallbacks.push(e||function(){})},dispose:function(e){this._disposeCallbacks.push(e)}},module.bundle.hotData=null}module.bundle.Module=n;var c=module.bundle.parent;if(!(c&&c.isParcelRequire||"undefined"==typeof WebSocket)){var i=location.hostname,l="https:"===location.protocol?"wss":"ws",s=new WebSocket(l+"://"+i+":41367/");s.onmessage=function(a){e={},t=[];var r=JSON.parse(a.data);if("update"===r.type){var n=!1;r.assets.forEach(function(e){e.isNew||h(o.parcelRequire,e.id)&&(n=!0)}),(n=n||r.assets.every(function(e){return"css"===e.type&&e.generated.js}))?(console.clear(),r.assets.forEach(function(e){f(o.parcelRequire,e)}),t.forEach(function(e){m(e[0],e[1])})):location.reload&&location.reload()}if("reload"===r.type&&(s.close(),s.onclose=function(){location.reload()}),"error-resolved"===r.type&&(console.log("[parcel] ✨ Error resolved"),p()),"error"===r.type){console.error("[parcel] 🚨  "+r.error.message+"\n"+r.error.stack),p();var c=d(r);document.body.appendChild(c)}}}function p(){var e=document.getElementById(a);e&&e.remove()}function d(e){var t=document.createElement("div");t.id=a;var o=document.createElement("div"),r=document.createElement("pre");return o.innerText=e.error.message,r.innerText=e.error.stack,t.innerHTML='<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;"><span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span><span style="top: 2px; margin-left: 5px; position: relative;">🚨</span><div style="font-size: 18px; font-weight: bold; margin-top: 20px;">'+o.innerHTML+"</div><pre>"+r.innerHTML+"</pre></div>",t}function u(e,t){var o=e.modules;if(!o)return[];var a,r,n,c=[];for(a in o)for(r in o[a][1])((n=o[a][1][r])===t||Array.isArray(n)&&n[n.length-1]===t)&&c.push(a);return e.parent&&(c=c.concat(u(e.parent,t))),c}function f(e,t){var o=e.modules;if(o)if(o[t.id]||!e.parent){var a=new Function("require","module","exports",t.generated.js);t.isNew=!o[t.id],o[t.id]=[a,t.deps]}else e.parent&&f(e.parent,t)}function h(a,r){var n=a.modules;if(n){if(!n[r]&&a.parent)return h(a.parent,r);if(!e[r]){e[r]=!0;var c=a.cache[r];return t.push([a,r]),!!(c&&c.hot&&c.hot._acceptCallbacks.length)||u(o.parcelRequire,r).some(function(e){return h(o.parcelRequire,e)})}}}function m(e,t){var o=e.cache[t];if(e.hotData={},o&&(o.hot.data=e.hotData),o&&o.hot&&o.hot._disposeCallbacks.length&&o.hot._disposeCallbacks.forEach(function(t){t(e.hotData)}),delete e.cache[t],e(t),(o=e.cache[t])&&o.hot&&o.hot._acceptCallbacks.length)return o.hot._acceptCallbacks.forEach(function(e){e()}),!0}
},{}]},{},["sQmG","Ws3s"], null)
//# sourceMappingURL=/app.9d64b06e.js.map