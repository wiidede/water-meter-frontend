(function(e){function t(t){for(var c,o,u=t[0],i=t[1],l=t[2],b=0,f=[];b<u.length;b++)o=u[b],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);s&&s(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],c=!0,o=1;o<n.length;o++){var i=n[o];0!==r[i]&&(c=!1)}c&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var c={},r={app:0},a=[];function o(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"b6fdf61e"}[e]+".js"}function u(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,c){n=r[e]=[t,c]}));t.push(n[2]=c);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=o(e);var l=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(b);var n=r[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+c+": "+a+")",l.name="ChunkLoadError",l.type=c,l.request=a,n[1](l)}r[e]=void 0}};var b=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},u.m=e,u.c=c,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)u.d(n,c,function(t){return e[t]}.bind(null,c));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var b=0;b<i.length;b++)t(i[b]);var s=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0a10":function(e,t,n){"use strict";n("d029")},2373:function(e,t,n){"use strict";n("f19e")},"2b0e":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function r(e,t,n,r,a,o){var u=Object(c["N"])("wm-header"),i=Object(c["N"])("router-view"),l=Object(c["N"])("wm-footer"),b=Object(c["N"])("el-scrollbar");return Object(c["E"])(),Object(c["j"])(c["b"],null,[Object(c["n"])(u),Object(c["n"])(b,{ref:"scrollViewRef"},{default:Object(c["cb"])((function(){return[Object(c["n"])(i,{class:"pt-4 pb-4",style:{"min-height":"calc(100vh - 120px)"}},{default:Object(c["cb"])((function(e){var t=e.Component;return[(Object(c["E"])(),Object(c["j"])(c["c"],null,[(Object(c["E"])(),Object(c["j"])(Object(c["P"])(t)))],1024))]})),_:1}),Object(c["n"])(l)]})),_:1},512)],64)}var a=n("6c02"),o=Object(c["gb"])("data-v-4bc9a0ab");Object(c["H"])("data-v-4bc9a0ab");var u=Object(c["m"])("水表识别系统"),i={class:"right-header d-flex align-items-center h-100"},l={class:"header-item-text h-100 d-flex align-items-center"};Object(c["F"])();var b=o((function(e,t,n,r,a,b){var s=Object(c["N"])("router-link"),f=Object(c["N"])("el-header");return Object(c["E"])(),Object(c["j"])(f,{class:"w-100 d-flex align-items-center justify-content-between"},{default:o((function(){return[Object(c["n"])(s,{to:"/",class:"header-title logo"},{default:o((function(){return[u]})),_:1}),Object(c["n"])("div",i,[(Object(c["E"])(!0),Object(c["j"])(c["b"],null,Object(c["L"])(r.headList,(function(e,t){return Object(c["E"])(),Object(c["j"])(s,{to:e.path,key:"head-".concat(t),class:[{active:e.active},"header-item h-100 mr-1 ml-1 pl-3 pr-3"]},{default:o((function(){return[Object(c["n"])("div",l,Object(c["R"])(e.label),1)]})),_:2},1032,["to","class"])})),128))])]})),_:1})})),s=(n("159b"),{name:"wm-header",setup:function(){var e=Object(c["I"])([{path:"/",label:"主页",active:!1},{path:"/about",label:"关于",active:!1}]),t=Object(a["c"])();return Object(c["bb"])((function(){e.forEach((function(e){e.active=t.currentRoute.value.path===e.path}))})),{headList:e}}});n("b309");s.render=b,s.__scopeId="data-v-4bc9a0ab";var f=s,d=Object(c["gb"])("data-v-1ab6fe8a");Object(c["H"])("data-v-1ab6fe8a");var j=Object(c["n"])("div",null,"水表识别系统",-1);Object(c["F"])();var p=d((function(e,t,n,r,a,o){var u=Object(c["N"])("el-footer");return Object(c["E"])(),Object(c["j"])(u,{class:"d-flex align-items-center justify-content-between"},{default:d((function(){return[j,Object(c["n"])("div",null,"Copyrights © "+Object(c["R"])(r.copyrightsYear)+" 王子羽",1)]})),_:1})})),O={name:"wm-footer",setup:function(){var e=String(2021),t=String((new Date).getFullYear()),n=Object(c["J"])(e===t?t:e+"-"+t);return{copyrightsYear:n}}};n("0a10");O.render=p,O.__scopeId="data-v-1ab6fe8a";var m=O,v={name:"App",components:{wmHeader:f,wmFooter:m},setup:function(){var e=Object(c["J"])(null),t=Object(a["c"])();return t.beforeEach((function(){e.value&&(e.value.wrap.scrollTop=0)})),{scrollViewRef:e}}};n("2373");v.render=r;var h=v,g=(n("d3b7"),n("3ca3"),n("ddb0"),{class:"container home-page"}),y={class:"upload-container d-flex align-items-end"},w=Object(c["n"])("i",{class:"el-icon-plus upload-button"},null,-1),E={class:"tip m-3"},x=Object(c["m"])(" 说明： "),_=Object(c["n"])("br",null,null,-1),L=Object(c["m"])(" 1.点击左侧按钮上传并识别水表图片 "),R=Object(c["n"])("br",null,null,-1),S=Object(c["n"])("br",null,null,-1),k=Object(c["m"])(" 3.你可以点击");function A(e,t,n,r,a,o){var u=Object(c["N"])("result"),i=Object(c["N"])("el-upload");return Object(c["E"])(),Object(c["j"])("div",g,[Object(c["n"])(u,{ref:"resultRef"},null,512),Object(c["n"])("div",y,[Object(c["n"])(i,{action:"".concat(r.baseUrl,"recognize"),"show-file-list":!1,accept:".jpg,.jpeg,.png,.gif,.JPG,.JPEG,.PNG,.GIF",multiple:"",limit:r.fileLimit,"on-success":r.handleApiSuccess,"on-error":r.handleApiError,"on-exceed":r.handleExceed},{default:Object(c["cb"])((function(){return[w]})),_:1},8,["action","limit","on-success","on-error","on-exceed"]),Object(c["n"])("span",E,[x,_,L,R,Object(c["m"])(" 2.页面最多允许上传"+Object(c["R"])(r.fileLimit)+"张图片 ",1),S,k,Object(c["n"])("a",{href:"".concat(r.baseUrl,"download/demo"),download:"demo.zip"},"下载示例图片",8,["href"])])])])}n("2b3d");var C=n("3fd4"),N=(n("fb6a"),n("5cc6"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:512,c=atob(e),r=[],a=0;a<c.length;a+=n){for(var o=c.slice(a,a+n),u=new Array(o.length),i=0;i<o.length;i++)u[i]=o.charCodeAt(i);var l=new Uint8Array(u);r.push(l)}return new Blob(r,{type:t})}),P=function(){var e=n("b024");return e.BASE_URL},U=function(e,t,n){var c=document.createElement("input");c.setAttribute("value",e),document.body.appendChild(c),c.select(),document.execCommand("copy")?t&&"function"===typeof t&&t():n&&"function"===typeof n&&n(),document.body.removeChild(c)},J=Object(c["gb"])("data-v-3e65c8db");Object(c["H"])("data-v-3e65c8db");var F={class:"result-container"},H={key:0,class:"w-100"},I={key:1,class:"w-100"},T=Object(c["n"])("h1",null,"欢迎使用水表识别系统",-1),G=Object(c["n"])("p",null,"点击下方按钮开始识别",-1),M={class:"card-container w-100 d-flex flex-wrap justify-content-between"},B={class:"bottom d-flex align-items-center justify-content-between p-3"},Y={class:"d-flex align-items-center"},z=Object(c["n"])("span",null,"识别区域：",-1),V={class:"d-flex align-items-center"},q=Object(c["m"])("识别结果："),D=Object(c["m"])("复制结果");Object(c["F"])();var K=J((function(e,t,n,r,a,o){var u=Object(c["N"])("el-button"),i=Object(c["N"])("el-card");return Object(c["E"])(),Object(c["j"])("div",F,[r.resState.resList.length?(Object(c["E"])(),Object(c["j"])("h1",H,"识别结果：")):(Object(c["E"])(),Object(c["j"])("div",I,[T,G])),Object(c["n"])("div",M,[(Object(c["E"])(!0),Object(c["j"])(c["b"],null,Object(c["L"])(r.resState.resList,(function(e,t){return Object(c["E"])(),Object(c["j"])(i,{"body-style":{padding:"0"},key:"card".concat(t,")"),class:"mb-4"},{default:J((function(){return[Object(c["n"])("img",{src:e.imgRaw,class:"water-meter-image",alt:"water meter"},null,8,["src"]),Object(c["n"])("div",B,[Object(c["n"])("div",null,[Object(c["n"])("div",Y,[z,Object(c["n"])("img",{src:e.imgCrop,class:"number-image",alt:"number"},null,8,["src"])]),Object(c["n"])("div",V,[Object(c["n"])("span",null,[q,Object(c["n"])("span",null,Object(c["R"])(e.resStr),1)])])]),Object(c["n"])("div",null,[Object(c["n"])(u,{type:"text",class:"button",onClick:function(t){return r.copy(e.resStr)}},{default:J((function(){return[D]})),_:2},1032,["onClick"])])])]})),_:2},1024)})),128)),(Object(c["E"])(),Object(c["j"])(c["b"],null,Object(c["L"])(3,(function(e){return Object(c["n"])("div",{class:"temp m-0 p-0",key:"temp".concat(e,")")})})),64))])])})),Q={name:"result",setup:function(){var e=Object(c["I"])({resList:[]}),t=function(e){U(e,(function(){return C["a"].success("已复制到剪贴板")}),(function(){return C["a"].error("复制失败")}))},n=function(t){e.resList.push(t)};return{resState:e,copy:t,updateResList:n}}};n("f907");Q.render=K,Q.__scopeId="data-v-3e65c8db";var W=Q,X={name:"Home",components:{result:W},setup:function(){var e=50,t=P(),n=Object(c["J"])(null),r=function(e,t){0!==e.code&&C["a"].error(e.message),n.value.updateResList({imgRaw:URL.createObjectURL(t.raw),imgCrop:URL.createObjectURL(N(e.imgCrop)),resStr:e.resStr})},a=function(){C["a"].error("请求出错")},o=function(){C["a"].error("页面最多允许上传".concat(e,"张图片"))};return{fileLimit:e,baseUrl:t,resultRef:n,handleApiSuccess:r,handleApiError:a,handleExceed:o}}};n("e0fc");X.render=A;var Z=X,$=[{path:"/",name:"Home",component:Z},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],ee=Object(a["a"])({history:Object(a["b"])("/"),routes:$}),te=ee,ne=n("5502"),ce=Object(ne["a"])({state:{},mutations:{},actions:{},modules:{}}),re=(n("c69f"),n("3ef0")),ae=n.n(re),oe=function(e){e.use(C["b"],{locale:ae.a})},ue=(n("8e1f"),Object(c["i"])(h));oe(ue),ue.use(ce).use(te).mount("#app")},"8e1f":function(e,t,n){},9980:function(e,t,n){},a157:function(e,t,n){},b024:function(e){e.exports=JSON.parse('{"BASE_URL":"http://127.0.0.1:5000/"}')},b309:function(e,t,n){"use strict";n("2b0e")},c69f:function(e,t,n){},d029:function(e,t,n){},e0fc:function(e,t,n){"use strict";n("9980")},f19e:function(e,t,n){},f907:function(e,t,n){"use strict";n("a157")}});
//# sourceMappingURL=app.f4dd5b01.js.map