parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"d2uN":[function(require,module,exports) {
const t={startBtn:document.querySelector("button[data-start]"),days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};class e{constructor({onTick:t}){this.intervalID=null,this.active=!1,this.onTick=t,this.init()}init(){const t=this.convertMs(0);this.onTick(t)}start(){if(this.isActive)return;const t=Date.now();this.isActive=!0,this.intervalID=setInterval(()=>{const e=Date.now()-t,n=this.convertMs(e);this.onTick(n)},1e3)}stop(){clearInterval(this.intervalID),this.isActive=!1;const t=this.convertMs(0);this.onTick(t)}convertMs(t){return{days:String(Math.floor(t/864e5)).padStart(3,"0"),hours:this.addLeadingZero(Math.floor(t%864e5/36e5)),minutes:this.addLeadingZero(Math.floor(t%864e5%36e5/6e4)),seconds:this.addLeadingZero(Math.floor(t%864e5%36e5%6e4/1e3))}}addLeadingZero(t){return String(t).padStart(2,"0")}}const n=new e({onTick:s});function s({days:e,hours:n,minutes:s,seconds:o}){t.days.textContent=`${e}`,t.hours.textContent=`${n}`,t.minutes.textContent=`${s}`,t.seconds.textContent=`${o}`}t.startBtn.addEventListener("click",n.start.bind(n));
},{}]},{},["d2uN"], null)
//# sourceMappingURL=/goit-js-hw-09/02-timer.f51f08cc.js.map