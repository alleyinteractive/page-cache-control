!function(){"use strict";const e=function(e,r){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:30;const t=new Date;t.setTime(t.getTime()+24*o*60*60*1e3);const s=`expires=${t.toUTCString()}`;document.cookie=`${e}=${r};${s};path=/`},r="vip-go-seg",o="---__";const t="STYXKEY-";const{wpPageCacheControlSettings:{provider:s="DefaultCacheProvider"}}=window,n={VIPProvider:class{groups={};constructor(){this.read()}isUserInGroup(e){return!!this.groups[e]}isUserInGroupSegment(e,r){return this.isUserInGroup(e)&&this.groups[e]===r}setGroupForUser(t,s){const{wpPageCacheControlSettings:{registeredGroups:n=[]}}=window;return n.includes(t)?(this.groups[t]=s,(t=>{const s=(e=>{const r=[];return Object.keys(e).sort().forEach((o=>{const t=e[o];t.trim()&&r.push(`${o}_--_${t}`)})),r.length?`vc-v1__${r.join(o)}`:null})(t);s?e(r,s):document.cookie="vip-go-seg=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"})(this.groups),!0):(console.error(`WP Page Cache Control: The group "${t}" is not registered.`),!1)}read(){this.groups=(()=>{const e=(e=>{const r=document.cookie.split(";").map((e=>e.trim()));for(let e=0;e<r.length;e+=1){const[o="",t=""]=r[e].split("=");if("vip-go-seg"===o)return t}return null})();if(!e)return{};const r=e.replace("vc-v1__","").split(o),t={};return r.forEach((e=>{const[r,o]=e.split("_--_");r&&o&&(t[r]=o)})),t})()}},PantheonProvider:class{groups={};constructor(){this.read()}isUserInGroup(e){return!!this.groups[e]}isUserInGroupSegment(e,r){return this.isUserInGroup(e)&&this.groups[e]===r}setGroupForUser(r,o){const{wpPageCacheControlSettings:{registeredGroups:t=[]}}=window;if(!t.includes(r))return console.error(`WP Page Cache Control: The group "${r}" is not registered.`),!1;this.groups[r]=o;const s=Object.keys(this.groups).sort().reduce(((e,r)=>(e[r]=this.groups[r],e)),{});return Object.keys(s).forEach((r=>{e(`STYXKEY-${r}`,s[r])})),this.groups=s,!0}read(){const e=(e=>{const r=document.cookie.split(";").map((e=>e.trim())),o={};for(let e=0;e<r.length;e+=1){const[t="",s=""]=r[e].split("=");t.startsWith("STYXKEY-")&&(o[t]=s)}return o})();Object.keys(e).length?Object.keys(e).forEach((r=>{const o=r.replace(t,"");this.groups[o]=e[r]})):this.groups={}}}};void 0===n[s]||"DefaultCacheProvider"===s?(console.error(`WP Page Cache Control: Unknown provider: ${s}`),window.wpPageCacheControl=new class{groups={};isUserInGroup(){return!1}isUserInGroupSegment(){return!1}setGroupForUser(){return!1}read(){}}):(window.wpPageCacheControl=new n[s],console.log(`WP Page Cache Control: Using provider: ${s}`)),window.dispatchEvent(new CustomEvent("wp-page-cache-control:ready",{detail:{provider:window.wpPageCacheControl}})),window.addEventListener("wp-page-cache-control:read",(()=>{window.wpPageCacheControl.read()}))}();