(self["webpackChunk_zzzzw_happy_ui"]=self["webpackChunk_zzzzw_happy_ui"]||[]).push([[301],{2231:function(e,t,n){"use strict";n.d(t,{m:function(){return a.m}});var a=n(9684);n(2255)},805:function(e,t,n){"use strict";var a=n(7294),l=n(6089),r={"zh-CN":{name:"\u5c5e\u6027\u540d",description:"\u63cf\u8ff0",type:"\u7c7b\u578b",default:"\u9ed8\u8ba4\u503c",required:"(\u5fc5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}};t["Z"]=function(e){var t=e.identifier,n=e.export,c=(0,l.useApiData)(t),i=(0,a.useContext)(l.context),u=i.locale,d=/^zh|cn$/i.test(u)?r["zh-CN"]:r["en-US"];return a.createElement(a.Fragment,null,c&&a.createElement("table",{style:{marginTop:24}},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,d.name),a.createElement("th",null,d.description),a.createElement("th",null,d.type),a.createElement("th",null,d.default))),a.createElement("tbody",null,c[n].map((function(e){return a.createElement("tr",{key:e.identifier},a.createElement("td",null,e.identifier),a.createElement("td",null,e.description||"--"),a.createElement("td",null,a.createElement("code",null,e.type)),a.createElement("td",null,a.createElement("code",null,e.default||e.required&&d.required||"--")))})))))}},9507:function(e,t,n){"use strict";n.r(t);var a=n(7294),l=n(6089),r=n(805),c=n(4842),i=n(9648),u=a.memo(i.default["upload-basic"].component);t["default"]=e=>(a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.createElement(a.Fragment,null,a.createElement(a.Fragment,null,a.createElement("div",{className:"markdown"},a.createElement("h1",{id:"upload-\u4e0a\u4f20\u7ec4\u4ef6"},a.createElement(l.AnchorLink,{to:"#upload-\u4e0a\u4f20\u7ec4\u4ef6","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"Upload \u4e0a\u4f20\u7ec4\u4ef6"),a.createElement("p",null,"\u4e0a\u4f20\u7ec4\u4ef6"),a.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},a.createElement(l.AnchorLink,{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),a.createElement("h3",{id:"\u57fa\u672c\u7528\u6cd5"},a.createElement(l.AnchorLink,{to:"#\u57fa\u672c\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u57fa\u672c\u7528\u6cd5")),a.createElement(c.default,i.default["upload-basic"].previewerProps,a.createElement(u,null)),a.createElement("div",{className:"markdown"},a.createElement("h2",{id:"api"},a.createElement(l.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"API"),a.createElement(r.Z,{src:"./index.tsx",identifier:"upload",export:"default"})))))}}]);