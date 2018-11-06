var tns=function(){var t=window,Si=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||function(t){return setTimeout(t,16)},e=window,Oi=e.cancelAnimationFrame||e.mozCancelAnimationFrame||function(t){clearTimeout(t)};function Pi(){for(var t,e,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(t=arguments[a]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function Hi(t){return 0<=["true","false"].indexOf(t)?JSON.parse(t):t}function Ri(t,e,n,i){return i&&t.setItem(e,n),n}function Wi(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var n=document.documentElement;function zi(t){var e="";return t.fake&&(e=n.style.overflow,t.style.background="",t.style.overflow=n.style.overflow="hidden",n.appendChild(t)),e}function qi(t,e){t.fake&&(t.remove(),n.style.overflow=e,n.offsetHeight)}function ji(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function Fi(t){return("insertRule"in t?t.cssRules:t.rules).length}function Qi(t,e,n){for(var i=0,a=t.length;i<a;i++)e.call(n,t[i],i)}var i="classList"in document.createElement("_"),Vi=i?function(t,e){return t.classList.contains(e)}:function(t,e){return 0<=t.className.indexOf(e)},Xi=i?function(t,e){Vi(t,e)||t.classList.add(e)}:function(t,e){Vi(t,e)||(t.className+=" "+e)},Yi=i?function(t,e){Vi(t,e)&&t.classList.remove(e)}:function(t,e){Vi(t,e)&&(t.className=t.className.replace(e,""))};function Ki(t,e){return t.hasAttribute(e)}function Ui(t,e){return t.getAttribute(e)}function r(t){return void 0!==t.item}function Gi(t,e){if(t=r(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function Ji(t,e){t=r(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function _i(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}function Zi(t,e){"none"!==t.style.display&&(t.style.display="none")}function $i(t,e){"none"===t.style.display&&(t.style.display="")}function ta(t){return"none"!==window.getComputedStyle(t).display}function ea(e){if("string"==typeof e){var n=[e],i=e.charAt(0).toUpperCase()+e.substr(1);["Webkit","Moz","ms","O"].forEach(function(t){"ms"===t&&"transform"!==e||n.push(t+i)}),e=n}for(var t=document.createElement("fakeelement"),a=(e.length,0);a<e.length;a++){var r=e[a];if(void 0!==t.style[r])return r}return!1}function na(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var a=!1;try{var o=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("test",null,o)}catch(t){}var s=!!a&&{passive:!0};function ia(t,e){for(var n in e){var i=("touchstart"===n||"touchmove"===n)&&s;t.addEventListener(n,e[n],i)}}function aa(t,e){for(var n in e){var i=0<=["touchstart","touchmove"].indexOf(n)&&s;t.removeEventListener(n,e[n],i)}}function ra(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(e,n){n.type=e,this.topics[e]&&this.topics[e].forEach(function(t){t(n,e)})}}}Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var oa=function(m){m=Pi({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,freezable:!0,onInit:!1,useLocalStorage:!0},m||{});var L=document,h=window,s=13,u=32,l=33,c=34,f=35,d=36,v=37,p=38,y=39,g=40,e={},n=m.useLocalStorage;if(n){var t=navigator.userAgent,i=new Date;try{(e=h.localStorage)?(e.setItem(i,i),n=e.getItem(i)==i,e.removeItem(i)):n=!1,n||(e={})}catch(t){n=!1}n&&(e.tnsApp&&e.tnsApp!==t&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(t){e.removeItem(t)}),localStorage.tnsApp=t)}for(var a,r,o,x,b,w,C,A=e.tC?Hi(e.tC):Ri(e,"tC",function(){var t=document,e=Wi(),n=zi(e),i=t.createElement("div"),a=!1;e.appendChild(i);try{for(var r,o="(10px * 10)",s=["calc"+o,"-moz-calc"+o,"-webkit-calc"+o],u=0;u<3;u++)if(r=s[u],i.style.width=r,100===i.offsetWidth){a=r.replace(o,"");break}}catch(t){}return e.fake?qi(e,n):i.remove(),a}(),n),M=e.tPL?Hi(e.tPL):Ri(e,"tPL",function(){var t,e=document,n=Wi(),i=zi(n),a=e.createElement("div"),r=e.createElement("div"),o="";a.className="tns-t-subp2",r.className="tns-t-ct";for(var s=0;s<70;s++)o+="<div></div>";return r.innerHTML=o,a.appendChild(r),n.appendChild(a),t=Math.abs(a.getBoundingClientRect().left-r.children[67].getBoundingClientRect().left)<2,n.fake?qi(n,i):a.remove(),t}(),n),D=e.tMQ?Hi(e.tMQ):Ri(e,"tMQ",(r=document,o=Wi(),x=zi(o),b=r.createElement("div"),w=r.createElement("style"),C="@media all and (min-width:1px){.tns-mq-test{position:absolute}}",w.type="text/css",b.className="tns-mq-test",o.appendChild(w),o.appendChild(b),w.styleSheet?w.styleSheet.cssText=C:w.appendChild(r.createTextNode(C)),a=window.getComputedStyle?window.getComputedStyle(b).position:b.currentStyle.position,o.fake?qi(o,x):b.remove(),"absolute"===a),n),T=e.tTf?Hi(e.tTf):Ri(e,"tTf",ea("transform"),n),E=e.t3D?Hi(e.t3D):Ri(e,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=Wi(),a=zi(i),r=n.createElement("p"),o=9<t.length?"-"+t.slice(0,-9).toLowerCase()+"-":"";return o+="transform",i.insertBefore(r,null),r.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(r).getPropertyValue(o),i.fake?qi(i,a):r.remove(),void 0!==e&&0<e.length&&"none"!==e}(T),n),B=e.tTDu?Hi(e.tTDu):Ri(e,"tTDu",ea("transitionDuration"),n),k=e.tTDe?Hi(e.tTDe):Ri(e,"tTDe",ea("transitionDelay"),n),N=e.tADu?Hi(e.tADu):Ri(e,"tADu",ea("animationDuration"),n),I=e.tADe?Hi(e.tADe):Ri(e,"tADe",ea("animationDelay"),n),S=e.tTE?Hi(e.tTE):Ri(e,"tTE",na(B,"Transition"),n),O=e.tAE?Hi(e.tAE):Ri(e,"tAE",na(N,"Animation"),n),P=h.console&&"function"==typeof h.console.warn,H=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],R={},W=H.length;W--;){var z=H[W];if("string"==typeof m[z]){var q=m[z],j=L.querySelector(q);if(R[z]=q,!j||!j.nodeName)return void(P&&console.warn("Can't find",m[z]));m[z]=j}}if(!(m.container.children.length<1)){var F=m.responsive,Q=m.nested,V="carousel"===m.mode;if(F){0 in F&&(m=Pi(m,F[0]),delete F[0]);var X={};for(var Y in F){var K=F[Y];K="number"==typeof K?{items:K}:K,X[Y]=K}F=X,X=null}if(V&&"outer"!==Q||function t(e){for(var n in e)V||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"outer"===Q&&"autoHeight"===n&&(e[n]=!0),"responsive"===n&&t(e[n])}(m),!V){m.axis="horizontal",m.slideBy="page",m.edgePadding=!1;var U=m.animateIn,G=m.animateOut,J=m.animateDelay,_=m.animateNormal}var Z,$="horizontal"===m.axis,tt=L.createElement("div"),et=L.createElement("div"),nt=m.container,it=nt.parentNode,at=nt.outerHTML,rt=nt.children,ot=rt.length,st=gn(),ut=!1;F&&Pn();var lt,ct,ft,dt,vt,pt,mt,ht=m.autoWidth,yt=wn("fixedWidth"),gt=wn("edgePadding"),xt=wn("gutter"),bt=xn(),wt=ht?1:Math.floor(wn("items")),Ct=wn("slideBy"),At=m.viewportMax||m.fixedWidthViewportWidth,Mt=wn("arrowKeys"),Tt=wn("speed"),Et=m.rewind,Bt=!Et&&m.loop,kt=wn("autoHeight"),Nt=wn("controls"),Lt=wn("controlsText"),Dt=wn("nav"),It=wn("touch"),St=wn("mouseDrag"),Ot=wn("autoplay"),Pt=wn("autoplayTimeout"),Ht=wn("autoplayText"),Rt=wn("autoplayHoverPause"),Wt=wn("autoplayResetOnVisibility"),zt=(mt=document.createElement("style"),pt&&mt.setAttribute("media",pt),document.querySelector("head").appendChild(mt),mt.sheet?mt.sheet:mt.styleSheet),qt=m.lazyload,jt=m.lazyloadSelector,Ft=[],Qt=Bt?(dt=function(){{if(ht||yt&&!At)return ot-1;var t=yt?"fixedWidth":"items",e=[];if((yt||m[t]<ot)&&e.push(m[t]),F)for(var n in F){var i=F[n][t];i&&(yt||i<ot)&&e.push(i)}return e.length||e.push(0),Math.ceil(yt?At/Math.min.apply(null,e):Math.max.apply(null,e))}}(),vt=V?Math.ceil((5*dt-ot)/2):4*dt-ot,vt=Math.max(dt,vt),bn("edgePadding")?vt+1:vt):0,Vt=V?ot+2*Qt:ot+Qt,Xt=!(!yt&&!ht||Bt),Yt=yt?ri():null,Kt=!V||!Bt,Ut=$?"left":"top",Gt="",Jt="",_t=yt?function(){return Math.ceil(-Yt/(yt+xt))}:ht?function(){for(var t=Vt,e=t-1;t--;)lt[t]>-Yt&&(e=t);return e}:function(){return Bt||V?Math.max(0,Vt-Math.ceil(wt)):Vt-1},Zt=hn(wn("startIndex")),$t=Zt,te=(mn(),0),ee=ht?null:_t(),ne=m.preventActionWhenRunning,ie=m.swipeAngle,ae=!ie||"?",re=!1,oe=m.onInit,se=new ra,ue=" tns-slider tns-"+m.mode,le=nt.id||(ft=window.tnsId,window.tnsId=ft?ft+1:1,"tns"+window.tnsId),ce=wn("disable"),fe=!1,de=m.freezable,ve=!(!de||ht)&&On(),pe=!1,me={click:pi,keydown:function(t){switch((t=Ci(t)).keyCode){case v:case p:case l:Pe.disabled||pi(t,-1);break;case y:case g:case c:He.disabled||pi(t,1);break;case d:vi("first",t);break;case f:vi("last",t)}}},he={click:function(t){if(re){if(ne)return;di()}var e,n=(t=Ci(t)).target||t.srcElement;for(;n!==qe&&!Ki(n,"data-nav");)n=n.parentNode;Ki(n,"data-nav")&&(vi(e=Ve=[].indexOf.call(ze,n),t),Xe===e&&(_e&&xi(),Ve=-1))},keydown:function(t){var e=L.activeElement;if(!Ki(e,"data-nav"))return;var n=(t=Ci(t)).keyCode,i=[].indexOf.call(ze,e),a=Fe.length,r=Fe.indexOf(i);m.navContainer&&(a=ot,r=i);function o(t){return m.navContainer?t:Fe[t]}switch(n){case v:case l:0<r&&wi(ze[o(r-1)]);break;case p:case d:0<r&&wi(ze[o(0)]);break;case y:case c:r<a-1&&wi(ze[o(r+1)]);break;case g:case f:r<a-1&&wi(ze[o(a-1)]);break;case s:case u:vi(Ve=i,t)}}},ye={mouseover:function(){_e&&(hi(),Ze=!0)},mouseout:function(){Ze&&(mi(),Ze=!1)}},ge={visibilitychange:function(){L.hidden?_e&&(hi(),tn=!0):tn&&(mi(),tn=!1)}},xe={keydown:function(t){switch((t=Ci(t)).keyCode){case v:pi(t,-1);break;case y:pi(t,1)}}},be={touchstart:Ei,touchmove:Bi,touchend:Ni,touchcancel:Ni},we={mousedown:Ei,mousemove:Bi,mouseup:Ni,mouseleave:Ni},Ce=bn("controls"),Ae=bn("nav"),Me=!!ht||m.navAsThumbnails,Te=bn("autoplay"),Ee=bn("touch"),Be=bn("mouseDrag"),ke="tns-slide-active",Ne="tns-complete",Le={load:function(t){jn(Ai(t))},error:function(t){Fn(Ai(t))}};if(Ce)var De,Ie,Se=m.controlsContainer,Oe=m.controlsContainer?m.controlsContainer.outerHTML:"",Pe=m.prevButton,He=m.nextButton,Re=m.prevButton?m.prevButton.outerHTML:"",We=m.nextButton?m.nextButton.outerHTML:"";if(Ae)var ze,qe=m.navContainer,je=m.navContainer?m.navContainer.outerHTML:"",Fe=[],Qe=Fe,Ve=-1,Xe=yn(),Ye=Xe,Ke="tns-nav-active",Ue="Carousel Page ",Ge=" (Current Slide)";if(Te)var Je,_e,Ze,$e,tn,en="forward"===m.autoplayDirection?1:-1,nn=m.autoplayButton,an=m.autoplayButton?m.autoplayButton.outerHTML:"",rn=["<span class='tns-visually-hidden'>"," animation</span>"];if(Ee||Be)var on,sn,un={},ln={},cn=!1,fn=$?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};ht||pn(ce||ve),T&&(Ut=T,Gt="translate",E?(Gt+=$?"3d(":"3d(0px, ",Jt=$?", 0px, 0px)":", 0px)"):(Gt+=$?"X(":"Y(",Jt=")")),function(){F&&Pn();!function(){bn("gutter");tt.className="tns-outer",et.className="tns-inner",tt.id=le+"-ow",et.id=le+"-iw",kt&&(et.className+=" tns-ah");""===nt.id&&(nt.id=le);ue+=M||ht?" tns-subpixel":" tns-no-subpixel",ue+=A?" tns-calc":" tns-no-calc",ht&&(ue+=" tns-autowidth");if(ue+=" tns-"+m.axis,nt.className+=ue,V){var t=L.createElement("div");t.className="tns-ovh",tt.appendChild(t),t.appendChild(et)}else tt.appendChild(et);it.insertBefore(tt,nt),et.appendChild(nt)}();for(var t=0;t<ot;t++){var e=rt[t];e.id||(e.id=le+"-item"+t),Xi(e,"tns-item"),!V&&_&&Xi(e,_),Gi(e,{"aria-hidden":"true",tabindex:"-1"})}if(Qt){for(var n=L.createDocumentFragment(),i=L.createDocumentFragment(),a=Qt;a--;){var r=a%ot,o=rt[r].cloneNode(!0);if(Ji(o,"id"),i.insertBefore(o,i.firstChild),V){var s=rt[ot-1-r].cloneNode(!0);Ji(s,"id"),n.appendChild(s)}}nt.insertBefore(n,nt.firstChild),nt.appendChild(i),rt=nt.children}(function(){for(var t=Zt,e=Zt+Math.min(ot,wt);t<e;t++){var n=rt[t];Gi(n,{"aria-hidden":"false"}),Ji(n,["tabindex"]),Xi(n,ke),V||(n.style.left=100*(t-Zt)/wt+"%",Xi(n,U),Yi(n,_))}$&&(M||ht?(ji(zt,"#"+le+" > .tns-item","font-size:"+h.getComputedStyle(rt[0]).fontSize+";",Fi(zt)),ji(zt,"#"+le,"font-size:0;",Fi(zt))):V&&Qi(rt,function(t,e){var n;t.style.marginLeft=(n=e,A?A+"("+100*n+"% / "+Vt+")":100*n/Vt+"%")}));if(D){var i=Cn(m.edgePadding,m.gutter,m.fixedWidth,m.speed,m.autoHeight);ji(zt,"#"+le+"-iw",i,Fi(zt)),V&&(i=$&&!ht?"width:"+An(m.fixedWidth,m.gutter,m.items)+";":"",B&&(i+=Bn(Tt)),ji(zt,"#"+le,i,Fi(zt))),i=$&&!ht?Mn(m.fixedWidth,m.gutter,m.items):"",m.gutter&&(i+=Tn(m.gutter)),V||(B&&(i+=Bn(Tt)),N&&(i+=kn(Tt))),i&&ji(zt,"#"+le+" > .tns-item",i,Fi(zt))}else{et.style.cssText=Cn(gt,xt,yt,kt),V&&$&&!ht&&(nt.style.width=An(yt,xt,wt));var i=$&&!ht?Mn(yt,xt,wt):"";xt&&(i+=Tn(xt)),i&&ji(zt,"#"+le+" > .tns-item",i,Fi(zt))}if(F&&D)for(var a in F){a=parseInt(a);var r=F[a],i="",o="",s="",u="",l=ht?null:wn("items",a),c=wn("fixedWidth",a),f=wn("speed",a),d=wn("edgePadding",a),v=wn("autoHeight",a),p=wn("gutter",a);("edgePadding"in r||"gutter"in r)&&(o="#"+le+"-iw{"+Cn(d,p,c,f,v)+"}"),V&&$&&!ht&&("fixedWidth"in r||"items"in r||yt&&"gutter"in r)&&(s="width:"+An(c,p,l)+";"),B&&"speed"in r&&(s+=Bn(f)),s&&(s="#"+le+"{"+s+"}"),("fixedWidth"in r||yt&&"gutter"in r||!V&&"items"in r)&&(u+=Mn(c,p,l)),"gutter"in r&&(u+=Tn(p)),!V&&"speed"in r&&(B&&(u+=Bn(f)),N&&(u+=kn(f))),u&&(u="#"+le+" > .tns-item{"+u+"}"),(i=o+s+u)&&zt.insertRule("@media (min-width: "+a/16+"em) {"+i+"}",zt.cssRules.length)}})(),Nn()}();var dn=Bt?V?function(){var t=te,e=ee;t+=Ct,e-=Ct,gt?(t+=1,e-=1):yt&&bt%(yt+xt)&&(e-=1),Qt&&(e<Zt?Zt-=ot:Zt<t&&(Zt+=ot))}:function(){if(ee<Zt)for(;te+ot<=Zt;)Zt-=ot;else if(Zt<te)for(;Zt<=ee-ot;)Zt+=ot}:function(){Zt=Math.max(te,Math.min(ee,Zt))},vn=V?function(){var e,n,i,a,t,r,o,s,u,l,c;ii(nt,""),B||!Tt?(ui(),Tt&&ta(nt)||di()):(e=nt,n=Ut,i=Gt,a=Jt,t=oi(),r=Tt,o=di,s=Math.min(r,10),u=0<=t.indexOf("%")?"%":"px",t=t.replace(u,""),l=Number(e.style[n].replace(i,"").replace(a,"").replace(u,"")),c=(t-l)/r*s,setTimeout(function t(){r-=s,l+=c,e.style[n]=i+l+u+a,0<r?setTimeout(t,s):o()},s)),$||Li()}:function(){Ft=[];var t={};t[S]=t[O]=di,aa(rt[$t],t),ia(rt[Zt],t),li($t,U,G,!0),li(Zt,_,U),S&&O&&Tt&&ta(nt)||di()};return{version:"2.8.7",getInfo:Ii,events:se,goTo:vi,play:function(){Ot&&!_e&&(gi(),$e=!1)},pause:function(){_e&&(xi(),$e=!0)},isOn:ut,updateSliderHeight:Jn,refresh:Nn,destroy:function(){if(zt.disabled=!0,zt.ownerNode&&zt.ownerNode.remove(),aa(h,{resize:In}),Mt&&aa(L,xe),Se&&aa(Se,me),qe&&aa(qe,he),aa(nt,ye),aa(nt,ge),nn&&aa(nn,{click:bi}),Ot&&clearInterval(Je),V&&S){var t={};t[S]=di,aa(nt,t)}It&&aa(nt,be),St&&aa(nt,we);var r=[at,Oe,Re,We,je,an];for(var e in H.forEach(function(t,e){var n="container"===t?tt:m[t];if("object"==typeof n){var i=!!n.previousElementSibling&&n.previousElementSibling,a=n.parentNode;n.outerHTML=r[e],m[t]=i?i.nextElementSibling:a.firstElementChild}}),H=U=G=J=_=$=tt=et=nt=it=at=rt=ot=Z=st=ht=yt=gt=xt=bt=wt=Ct=At=Mt=Tt=Et=Bt=kt=zt=qt=lt=Ft=Qt=Vt=Xt=Yt=Kt=Ut=Gt=Jt=_t=Zt=$t=te=ee=ie=ae=re=oe=se=ue=le=ce=fe=de=ve=pe=me=he=ye=ge=xe=be=we=Ce=Ae=Me=Te=Ee=Be=ke=Ne=Le=ct=Nt=Lt=Se=Oe=Pe=He=De=Ie=Dt=qe=je=ze=Fe=Qe=Ve=Xe=Ye=Ke=Ue=Ge=Ot=Pt=en=Ht=Rt=nn=an=Wt=rn=Je=_e=Ze=$e=tn=un=ln=on=cn=sn=fn=It=St=null,this)"rebuild"!==e&&(this[e]=null);ut=!1},rebuild:function(){return oa(Pi(m,R))}}}function pn(t){t&&(Nt=Dt=It=St=Mt=Ot=Rt=Wt=!1)}function mn(){for(var t=V?Zt-Qt:Zt;t<0;)t+=ot;return t%ot+1}function hn(t){return t=t?Math.max(0,Math.min(Bt?ot-1:ot-wt,t)):0,V?t+Qt:t}function yn(t){for(null==t&&(t=Zt),V&&(t-=Qt);t<0;)t+=ot;return Math.floor(t%ot)}function gn(){return h.innerWidth||L.documentElement.clientWidth||L.body.clientWidth}function xn(){return function t(e){var n,i=L.createElement("div");return e.appendChild(i),n=i.offsetWidth,i.remove(),n||t(e.parentNode)}(it)-(2*gt-xt)}function bn(t){if(m[t])return!0;if(F)for(var e in F)if(F[e][t])return!0;return!1}function wn(t,e){if(null==e&&(e=st),"items"===t&&yt)return Math.floor(bt/(yt+xt))||1;var n=m[t];if(F)for(var i in F)e>=parseInt(i)&&t in F[i]&&(n=F[i][t]);return"slideBy"===t&&"page"===n&&(n=wn("items")),V||"slideBy"!==t&&"items"!==t||(n=Math.floor(n)),n}function Cn(t,e,n,i,a){var r="";if(void 0!==t){var o=t;e&&(o-=e),r=$?"margin: 0 "+o+"px 0 "+t+"px;":"margin: "+t+"px 0 "+o+"px 0;"}else if(e&&!n){var s="-"+e+"px";r="margin: 0 "+($?s+" 0 0":"0 "+s+" 0")+";"}return a&&B&&i&&(r+=Bn(i)),r}function An(t,e,n){return t?(t+e)*Vt+"px":A?A+"("+100*Vt+"% / "+n+")":100*Vt/n+"%"}function Mn(t,e,n){var i;if(t)i=t+e+"px";else{V||(n=Math.floor(n));var a=V?Vt:n;i=A?A+"(100% / "+a+")":100/a+"%"}return i="width:"+i,"inner"!==Q?i+";":i+" !important;"}function Tn(t){var e="";!1!==t&&(e=($?"padding-":"margin-")+($?"right":"bottom")+": "+t+"px;");return e}function En(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function Bn(t){return En(B,18)+"transition-duration:"+t/1e3+"s;"}function kn(t){return En(N,17)+"animation-duration:"+t/1e3+"s;"}function Nn(){if(bn("autoHeight")||ht||!$){var t=nt.querySelectorAll("img");function e(){if(ht){var e=Bt?Zt:ot-1;!function t(){rt[e-1].getBoundingClientRect().right.toFixed(2)===rt[e].getBoundingClientRect().left.toFixed(2)?n():setTimeout(function(){t()},16)}()}else n();function n(){$&&!ht||(_n(),ht?(Yt=ri(),de&&(ve=On()),ee=_t(),pn(ce||ve)):Li()),V&&si(),Ln(),Dn()}}Qi(t,function(t){var e=t.src;e.indexOf("data:image")<0?(ia(t,Le),t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",t.src=e,Xi(t,"loading"),Vn(t)):qt||jn(t)}),Si(function(){Kn(_i(t),function(){ct=!0})}),!ht&&$&&(t=Xn(Zt,wt)),qt?e():Si(function(){Kn(_i(t),e)})}else V&&si(),Ln(),Dn()}function Ln(){if(Te){var t=Ot?"stop":"start";nn?Gi(nn,{"data-action":t}):m.autoplayButtonOutput&&(tt.insertAdjacentHTML("top"!==m.autoplayPosition?"beforeend":"afterbegin",'<button data-action="'+t+'" type="button">'+rn[0]+t+rn[1]+Ht[0]+"</button>"),nn=tt.querySelector("[data-action]")),nn&&ia(nn,{click:bi}),Ot&&(gi(),Rt&&ia(nt,ye),Wt&&ia(nt,ge))}if(Ae){var n=V?Qt:0;if(qe)Gi(qe,{"aria-label":"Carousel Pagination"}),Qi(ze=qe.children,function(t,e){Gi(t,{"data-nav":e,tabindex:"-1","aria-controls":rt[n+e].id,"aria-label":Ue+(e+1)})});else{for(var e="",i=Me?"":'style="display:none"',a=0;a<ot;a++)e+='<button data-nav="'+a+'" tabindex="-1" aria-controls="'+rt[n+a].id+'" '+i+' type="button" aria-label="'+Ue+(a+1)+'"></button>';e='<div class="tns-nav" aria-label="Carousel Pagination">'+e+"</div>",tt.insertAdjacentHTML("top"!==m.navPosition?"beforeend":"afterbegin",e),qe=tt.querySelector(".tns-nav"),ze=qe.children}if(Di(),B){var r=B.substring(0,B.length-18).toLowerCase(),o="transition: all "+Tt/1e3+"s";r&&(o="-"+r+"-"+o),ji(zt,"[aria-controls^="+le+"-item]",o,Fi(zt))}Gi(ze[Xe],{tabindex:"0","aria-label":Ue+(Xe+1)+Ge}),Xi(ze[Xe],Ke),ia(qe,he)}Ce&&(Se&&Pe&&He||(tt.insertAdjacentHTML("top"!==m.controlsPosition?"beforeend":"afterbegin",'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+le+'" type="button">'+Lt[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+le+'" type="button">'+Lt[1]+"</button></div>"),Se=tt.querySelector(".tns-controls"),Pe=Se.children[0],He=Se.children[1]),m.controlsContainer&&(Gi(Se,{"aria-label":"Carousel Navigation",tabindex:"0"}),Gi(Se.children,{"aria-controls":le,tabindex:"-1"})),(m.controlsContainer||m.prevButton&&m.nextButton)&&(Gi(Pe,{"data-controls":"prev"}),Gi(He,{"data-controls":"next"})),De=$n(Pe),Ie=$n(He),ni(),Se?ia(Se,me):(ia(Pe,me),ia(He,me))),Hn()}function Dn(){if(V&&S){var t={};t[S]=di,ia(nt,t)}It&&ia(nt,be),St&&ia(nt,we),Mt&&ia(L,xe),"inner"===Q?se.on("outerResized",function(){Sn(),se.emit("innerLoaded",Ii())}):(F||yt||ht||kt||!$)&&ia(h,{resize:In}),"outer"===Q?se.on("innerLoaded",Yn):kt&&!ce&&Yn(),qn(),ce?zn():ve&&Wn(),se.on("indexChanged",Un),"inner"===Q&&se.emit("innerLoaded",Ii()),"function"==typeof oe&&oe(Ii()),ut=!0}function In(t){Si(function(){Sn(Ci(t))})}function Sn(t){if(ut){"outer"===Q&&se.emit("outerResized",Ii(t)),st=gn();var e,n=Z,i=!1;F&&(Pn(),(e=n!==Z)&&se.emit("newBreakpointStart",Ii(t)));var a,r,o,s,u=wt,l=ce,c=ve,f=Mt,d=Nt,v=Dt,p=It,m=St,h=Ot,y=Rt,g=Wt,x=Zt;if(e){var b=yt,w=kt,C=Lt,A=Ht;if(!D)var M=xt,T=gt}if(Mt=wn("arrowKeys"),Nt=wn("controls"),Dt=wn("nav"),It=wn("touch"),St=wn("mouseDrag"),Ot=wn("autoplay"),Rt=wn("autoplayHoverPause"),Wt=wn("autoplayResetOnVisibility"),e&&(ce=wn("disable"),yt=wn("fixedWidth"),Tt=wn("speed"),kt=wn("autoHeight"),Lt=wn("controlsText"),Ht=wn("autoplayText"),Pt=wn("autoplayTimeout"),D||(gt=wn("edgePadding"),xt=wn("gutter"))),pn(ce),bt=xn(),$&&!ht||ce||(_n(),$||(Li(),i=!0)),(yt||ht)&&(Yt=ri(),ee=_t()),(e||yt)&&(wt=wn("items"),Ct=wn("slideBy"),(r=wt!==u)&&(yt||ht||(ee=_t()),dn())),e&&ce!==l&&(ce?zn():function(){if(!fe)return;if(zt.disabled=!1,nt.className+=ue,si(),Bt)for(var t=Qt;t--;)V&&$i(rt[t]),$i(rt[Vt-t-1]);if(!V)for(var e=Zt,n=Zt+ot;e<n;e++){var i=rt[e],a=e<Zt+wt?U:_;i.style.left=100*(e-Zt)/wt+"%",Xi(i,a)}Rn(),fe=!1}()),de&&(e||yt||ht)&&(ve=On())!==c&&(ve?(ui(oi(hn(0))),Wn()):(!function(){if(!pe)return;gt&&D&&(et.style.margin="");if(Qt)for(var t="tns-transparent",e=Qt;e--;)V&&Yi(rt[e],t),Yi(rt[Vt-e-1],t);Rn(),pe=!1}(),i=!0)),pn(ce||ve),Ot||(Rt=Wt=!1),Mt!==f&&(Mt?ia(L,xe):aa(L,xe)),Nt!==d&&(Nt?Se?$i(Se):(Pe&&$i(Pe),He&&$i(He)):Se?Zi(Se):(Pe&&Zi(Pe),He&&Zi(He))),Dt!==v&&(Dt?($i(qe),Di()):Zi(qe)),It!==p&&(It?ia(nt,be):aa(nt,be)),St!==m&&(St?ia(nt,we):aa(nt,we)),Ot!==h&&(Ot?(nn&&$i(nn),_e||$e||gi()):(nn&&Zi(nn),_e&&xi())),Rt!==y&&(Rt?ia(nt,ye):aa(nt,ye)),Wt!==g&&(Wt?ia(L,ge):aa(L,ge)),e&&(yt!==b&&(i=!0),kt!==w&&(kt||(et.style.height="")),Nt&&Lt!==C&&(Pe.innerHTML=Lt[0],He.innerHTML=Lt[1]),nn&&Ht!==A)){var E=Ot?1:0,B=nn.innerHTML,k=B.length-A[E].length;B.substring(k)===A[E]&&(nn.innerHTML=B.substring(0,k)+Ht[E])}if((a=Zt!==x)&&(se.emit("indexChanged",Ii()),i=!0),r&&(a||Un(),V||function(){for(var t=Zt+Math.min(ot,wt),e=Vt;e--;){var n=rt[e];Zt<=e&&e<t?(Xi(n,"tns-moving"),n.style.left=100*(e-Zt)/wt+"%",Xi(n,U),Yi(n,_)):n.style.left&&(n.style.left="",Xi(n,_),Yi(n,U)),Yi(n,G)}setTimeout(function(){Qi(rt,function(t){Yi(t,"tns-moving")})},300)}()),!ce&&!ve){if(e&&!D&&(gt===T&&xt===M||(et.style.cssText=Cn(gt,xt,yt,Tt,kt)),$)){V&&(nt.style.width=An(yt,xt,wt));var N=Mn(yt,xt,wt)+Tn(xt);s=Fi(o=zt)-1,"deleteRule"in o?o.deleteRule(s):o.removeRule(s),ji(zt,"#"+le+" > .tns-item",N,Fi(zt))}kt&&Yn(),i&&(si(),$t=Zt)}e&&se.emit("newBreakpointEnd",Ii(t))}}function On(){return yt||ht?yt?(yt+xt)*ot<=bt+2*gt:(Bt?lt[ot]:ai())<=bt+2*gt:ot<=wt}function Pn(){for(var t in Z=0,F)(t=parseInt(t))<=st&&(Z=t)}function Hn(){!Ot&&nn&&Zi(nn),!Dt&&qe&&Zi(qe),Nt||(Se?Zi(Se):(Pe&&Zi(Pe),He&&Zi(He)))}function Rn(){Ot&&nn&&$i(nn),Dt&&qe&&$i(qe),Nt&&(Se?$i(Se):(Pe&&$i(Pe),He&&$i(He)))}function Wn(){if(!pe){if(gt&&(et.style.margin="0px"),Qt)for(var t="tns-transparent",e=Qt;e--;)V&&Xi(rt[e],t),Xi(rt[Vt-e-1],t);Hn(),pe=!0}}function zn(){if(!fe){if(zt.disabled=!0,nt.className=nt.className.replace(ue.substring(1),""),Ji(nt,["style"]),Bt)for(var t=Qt;t--;)V&&Zi(rt[t]),Zi(rt[Vt-t-1]);if($&&V||Ji(et,["style"]),!V)for(var e=Zt,n=Zt+ot;e<n;e++){var i=rt[e];Ji(i,["style"]),Yi(i,U),Yi(i,_)}Hn(),fe=!0}}function qn(){if(qt&&!ce){var t=Zt;if(ht)for(var e=Zt+1,n=e,i=lt[Zt]+bt+gt-xt;lt[e]<i;)n=++e;else n=Zt+wt;for(gt&&(t-=1,ht||(n+=1)),t=Math.floor(Math.max(t,0)),n=Math.ceil(Math.min(n,Vt));t<n;t++)Qi(rt[t].querySelectorAll(jt),function(t){if(!Vi(t,Ne)){var e={};e[S]=function(t){t.stopPropagation()},ia(t,e),ia(t,Le);var n=Ui(t,"data-srcset");n&&(t.srcset=n),t.src=Ui(t,"data-src"),Xi(t,"loading"),Vn(t)}})}}function jn(t){Xi(t,"loaded"),Qn(t)}function Fn(t){Xi(t,"failed"),Qn(t)}function Qn(t){Xi(t,"tns-complete"),Yi(t,"loading"),aa(t,Le)}function Vn(t){t.complete&&(0!==t.naturalWidth?jn(t):Fn(t))}function Xn(t,e){for(var n=[],i=t,a=Math.min(t+e,Vt);i<a;i++)Qi(rt[i].querySelectorAll("img"),function(t){n.push(t)});return n}function Yn(){var t=kt?Xn(Zt,wt):Xn(Qt,ot);Si(function(){Kn(t,Jn)})}function Kn(n,t){return ct?t():(n.forEach(function(t,e){Vi(t,Ne)&&n.splice(e,1)}),n.length?void Si(function(){Kn(n,t)}):t())}function Un(){qn(),function(){for(var t=Zt+Math.min(ot,wt),e=Vt;e--;){var n=rt[e];Zt<=e&&e<t?Ki(n,"tabindex")&&(Gi(n,{"aria-hidden":"false"}),Ji(n,["tabindex"]),Xi(n,ke)):(Ki(n,"tabindex")||Gi(n,{"aria-hidden":"true",tabindex:"-1"}),Vi(n,ke)&&Yi(n,ke))}}(),ni(),Di(),function(){if(Dt&&(Xe=0<=Ve?Ve:yn(),Ve=-1,Xe!==Ye)){var t=ze[Ye],e=ze[Xe];Gi(t,{tabindex:"-1","aria-label":Ue+(Ye+1)}),Gi(e,{tabindex:"0","aria-label":Ue+(Xe+1)+Ge}),Yi(t,Ke),Xi(e,Ke),Ye=Xe}}()}function Gn(t,e){for(var n=[],i=t,a=Math.min(t+e,Vt);i<a;i++)n.push(rt[i].offsetHeight);return Math.max.apply(null,n)}function Jn(){var t=kt?Gn(Zt,wt):Gn(Qt,ot);et.style.height!==t&&(et.style.height=t+"px")}function _n(){lt=[0];for(var t,e=$?"left":"top",n=rt[0].getBoundingClientRect()[e],i=1;i<Vt;i++)t=rt[i].getBoundingClientRect()[e],lt.push(t-n)}function Zn(t){return t.nodeName.toLowerCase()}function $n(t){return"button"===Zn(t)}function ti(t){return"true"===t.getAttribute("aria-disabled")}function ei(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function ni(){if(Nt&&!Et&&!Bt){var t=De?Pe.disabled:ti(Pe),e=Ie?He.disabled:ti(He),n=Zt<=te,i=!Et&&ee<=Zt;n&&!t&&ei(De,Pe,!0),!n&&t&&ei(De,Pe,!1),i&&!e&&ei(Ie,He,!0),!i&&e&&ei(Ie,He,!1)}}function ii(t,e){B&&(t.style[B]=e)}function ai(){return yt?(yt+xt)*Vt:lt[Vt-1]+rt[Vt-1].getBoundingClientRect().width}function ri(){var t=bt-(ai()-xt);return gt&&(t+=gt-xt),0<t&&(t=0),t}function oi(t){var e;(null==t&&(t=Zt),$&&!ht)?e=yt?-(yt+xt)*t:100*-t/(T?Vt:wt):e=-lt[t];return Xt&&(e=Math.max(e,Yt)),e+=!$||ht||yt?"px":"%"}function si(t){ii(nt,"0s"),ui(t)}function ui(t){null==t&&(t=oi()),nt.style[Ut]=Gt+t+Jt}function li(t,e,n,i){var a=t+wt;Bt||(a=Math.min(a,Vt));for(var r=t;r<a;r++){var o=rt[r];i||(o.style.left=100*(r-Zt)/wt+"%"),J&&k&&(o.style[k]=o.style[I]=J*(r-t)/1e3+"s"),Yi(o,e),Xi(o,n),i&&Ft.push(o)}}function ci(t,e){Kt&&dn(),(Zt!==$t||e)&&(se.emit("indexChanged",Ii()),se.emit("transitionStart",Ii()),kt&&Yn(),_e&&t&&0<=["click","keydown"].indexOf(t.type)&&xi(),re=!0,vn())}function fi(t){return t.toLowerCase().replace(/-/g,"")}function di(t){if(V||re){if(se.emit("transitionEnd",Ii(t)),!V&&0<Ft.length)for(var e=0;e<Ft.length;e++){var n=Ft[e];n.style.left="",I&&k&&(n.style[I]="",n.style[k]=""),Yi(n,G),Xi(n,_)}if(!t||!V&&t.target.parentNode===nt||t.target===nt&&fi(t.propertyName)===fi(Ut)){if(!Kt){var i=Zt;dn(),Zt!==i&&(se.emit("indexChanged",Ii()),si())}"inner"===Q&&se.emit("innerLoaded",Ii()),re=!1,$t=Zt}}}function vi(t,e){if(!ve)if("prev"===t)pi(e,-1);else if("next"===t)pi(e,1);else{if(re){if(ne)return;di()}var n=yn(),i=0;if("first"===t?i=-n:"last"===t?i=V?ot-wt-n:ot-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(ot-1,t))),i=t-n)),!V&&i&&Math.abs(i)<wt){var a=0<i?1:-1;i+=te<=Zt+i-ot?ot*a:2*ot*a*-1}Zt+=i,V&&Bt&&(Zt<te&&(Zt+=ot),ee<Zt&&(Zt-=ot)),yn(Zt)!==yn($t)&&ci(e)}}function pi(t,e){if(re){if(ne)return;di()}var n;if(!e){for(var i=(t=Ci(t)).target||t.srcElement;i!==Se&&[Pe,He].indexOf(i)<0;)i=i.parentNode;var a=[Pe,He].indexOf(i);0<=a&&(n=!0,e=0===a?-1:1)}if(Et){if(Zt===te&&-1===e)return void vi("last",t);if(Zt===ee&&1===e)return void vi("first",t)}e&&(Zt+=Ct*e,ht&&(Zt=Math.floor(Zt)),ci(n||t&&"keydown"===t.type?t:null))}function mi(){Je=setInterval(function(){pi(null,en)},Pt),_e=!0}function hi(){clearInterval(Je),_e=!1}function yi(t,e){Gi(nn,{"data-action":t}),nn.innerHTML=rn[0]+t+rn[1]+e}function gi(){mi(),nn&&yi("stop",Ht[1])}function xi(){hi(),nn&&yi("start",Ht[0])}function bi(){_e?(xi(),$e=!0):(gi(),$e=!1)}function wi(t){t.focus()}function Ci(t){return Mi(t=t||h.event)?t.changedTouches[0]:t}function Ai(t){return t.target||h.event.srcElement}function Mi(t){return 0<=t.type.indexOf("touch")}function Ti(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function Ei(t){if(re){if(ne)return;di()}Ot&&_e&&hi(),cn=!0,sn&&(Oi(sn),sn=null);var e=Ci(t);se.emit(Mi(t)?"touchStart":"dragStart",Ii(t)),!Mi(t)&&0<=["img","a"].indexOf(Zn(Ai(t)))&&Ti(t),ln.x=un.x=parseInt(e.clientX),ln.y=un.y=parseInt(e.clientY),V&&(on=0|parseFloat(nt.style[Ut].replace(Gt,"").replace(Jt,"")),ii(nt,"0s"))}function Bi(t){if(cn){var e=Ci(t);ln.x=parseInt(e.clientX),ln.y=parseInt(e.clientY),V&&!sn&&(sn=Si(function(){!function t(e){if(!ae)return void(cn=!1);Oi(sn);cn&&(sn=Si(function(){t(e)}));ki();if(ae){try{e.type&&se.emit(Mi(e)?"touchMove":"dragMove",Ii(e))}catch(t){}var n=on,i=fn(ln,un);if(!$||yt||ht)n+=i,n+="px";else{var a=T?i*wt*100/(bt*Vt):100*i/bt;n+=a,n+="%"}nt.style[Ut]=Gt+n+Jt}}(t)}))}}function ki(){var t,e,n,i,a,r;"?"===ae&&ln.x!==un.x&&ln.y!==un.y&&(a=ln.y-un.y,r=ln.x-un.x,t=Math.atan2(a,r)*(180/Math.PI),e=ie,n=!1,i=Math.abs(90-Math.abs(t)),90-e<=i?n="horizontal":i<=e&&(n="vertical"),ae=n===m.axis)}function Ni(i){if(cn){sn&&(Oi(sn),sn=null),V&&ii(nt,""),cn=!1;var t=Ci(i);ln.x=parseInt(t.clientX),ln.y=parseInt(t.clientY);var a=fn(ln,un);if(5<=Math.abs(a)){if(!Mi(i)){var n=Ai(i);ia(n,{click:function t(e){Ti(e),aa(n,{click:t})}})}V?sn=Si(function(){if($&&!ht){var t=-a*wt/bt;t=0<a?Math.floor(t):Math.ceil(t),Zt+=t}else{var e=-(on+a);if(e<=0)Zt=te;else if(e>=lt[lt.length-1])Zt=ee;else for(var n=0;n<Vt&&e>=lt[n];)e>lt[Zt=n]&&a<0&&(Zt+=1),n++}ci(i,a),se.emit(Mi(i)?"touchEnd":"dragEnd",Ii(i))}):(ki(),ae&&pi(i,0<a?-1:1))}}ie&&(ae="?"),Ot&&!_e&&mi()}function Li(){et.style.height=lt[Zt+wt]-lt[Zt]+"px"}function Di(){Dt&&!Me&&(!function(){Fe=[];for(var t=yn()%wt;t<ot;)V&&!Bt&&ot<t+wt&&(t=ot-wt),Fe.push(t),t+=wt;(Bt&&Fe.length*wt<ot||!Bt&&0<Fe[0])&&Fe.unshift(0)}(),Fe!==Qe&&(Qi(ze,function(t,e){Fe.indexOf(e)<0?Zi(t):$i(t)}),Qe=Fe))}function Ii(t){return{container:nt,slideItems:rt,navContainer:qe,navItems:ze,controlsContainer:Se,hasControls:Ce,prevButton:Pe,nextButton:He,items:wt,slideBy:Ct,cloneCount:Qt,slideCount:ot,slideCountNew:Vt,index:Zt,indexCached:$t,displayIndex:mn(),navCurrentIndex:Xe,navCurrentIndexCached:Ye,visibleNavIndexes:Fe,visibleNavIndexesCached:Qe,sheet:zt,isOn:ut,event:t||{}}}P&&console.warn("No slides found in",m.container)};return oa}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map
