(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"2jSG":function(e,r,t){"use strict";t.r(r),t.d(r,"config_provider",(function(){return s}));var n=t("OG8Z"),c=t("xv6b"),s=class{constructor(e){Object(n["f"])(this,e),this.prefixCls="tblr"}render(){var e={prefixCls:this.prefixCls};return Object(n["d"])(c["a"].Provider,{state:e},Object(n["d"])("slot",null))}}},xv6b:function(e,r,t){"use strict";t.d(r,"a",(function(){return s}));var n=t("OG8Z"),c=(e,r)=>{var t=new Map,n=e,c=(e,r)=>{Array.isArray(e)?[...e].forEach((e=>{r[e]=n[e]})):r[e]=Object.assign({},n)},s=(e,r)=>(t.has(e)||(t.set(e,r),c(r,e)),()=>{t.has(e)&&t.delete(e)}),i=(e,r)=>{var s=e.state;return n=s,t.forEach(c),r},a=(e,t)=>r(s,t[0]),o=(e,r)=>{var n=e.prototype,c=n.connectedCallback,i=n.disconnectedCallback;n.connectedCallback=function(){if(s(this,r),c)return c.call(this)},n.disconnectedCallback=function(){t.delete(this),i&&i.call(this)}};return{Provider:i,Consumer:a,injectProps:o}},s=c({prefixCls:"tblr"},((e,r)=>Object(n["d"])("context-consumer",{subscribe:e,renderer:r})))}}]);