(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"84bF":function(e,t,a){"use strict";a("OGtf")("small",(function(e){return function(){return e(this,"small","","")}}))},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n),o=a("vOnD"),r=a("8k0H"),s=a("vrFN"),c=(a("91GP"),a("84bF"),a("wx14")),l=a("Ff2n"),d=(a("17x9"),a("iuhU")),m=(a("8+KV"),a("H2TA")),u=n.forwardRef((function(e,t){var a=e.classes,i=e.className,o=e.component,r=void 0===o?"div":o,s=e.square,m=void 0!==s&&s,u=e.elevation,p=void 0===u?1:u,f=e.variant,g=void 0===f?"elevation":f,b=Object(l.a)(e,["classes","className","component","square","elevation","variant"]);return n.createElement(r,Object(c.a)({className:Object(d.a)(a.root,i,"outlined"===g?a.outlined:a["elevation".concat(p)],!m&&a.rounded),ref:t},b))})),p=Object(m.a)((function(e){var t={};return e.shadows.forEach((function(e,a){t["elevation".concat(a)]={boxShadow:e}})),Object(c.a)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},t)}),{name:"MuiPaper"})(u),f=n.forwardRef((function(e,t){var a=e.classes,i=e.className,o=e.raised,r=void 0!==o&&o,s=Object(l.a)(e,["classes","className","raised"]);return n.createElement(p,Object(c.a)({className:Object(d.a)(a.root,i),elevation:r?8:1,ref:t},s))})),g=Object(m.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(f),b=n.forwardRef((function(e,t){var a=e.classes,i=e.className,o=e.component,r=void 0===o?"div":o,s=Object(l.a)(e,["classes","className","component"]);return n.createElement(r,Object(c.a)({className:Object(d.a)(a.root,i),ref:t},s))})),h=Object(m.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(b),v=a("VD++"),x=n.forwardRef((function(e,t){var a=e.children,i=e.classes,o=e.className,r=e.focusVisibleClassName,s=Object(l.a)(e,["children","classes","className","focusVisibleClassName"]);return n.createElement(v.a,Object(c.a)({className:Object(d.a)(i.root,o),focusVisibleClassName:Object(d.a)(r,i.focusVisible),ref:t},s),a,n.createElement("span",{className:i.focusHighlight}))})),w=Object(m.a)((function(e){return{root:{display:"block",textAlign:"inherit",width:"100%","&:hover $focusHighlight":{opacity:e.palette.action.hoverOpacity},"&$focusVisible $focusHighlight":{opacity:.12}},focusVisible:{},focusHighlight:{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}}}),{name:"MuiCardActionArea"})(x),E=(a("V+eJ"),["video","audio","picture","iframe","img"]),y=n.forwardRef((function(e,t){var a=e.children,i=e.classes,o=e.className,r=e.component,s=void 0===r?"div":r,m=e.image,u=e.src,p=e.style,f=Object(l.a)(e,["children","classes","className","component","image","src","style"]),g=-1!==E.indexOf(s),b=!g&&m?Object(c.a)({backgroundImage:'url("'.concat(m,'")')},p):p;return n.createElement(s,Object(c.a)({className:Object(d.a)(i.root,o,g&&i.media,-1!=="picture img".indexOf(s)&&i.img),ref:t,style:b,src:g?m||u:void 0},f),a)})),N=Object(m.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(y),C=a("RD7I"),O=a("cNwE");var j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(C.a)(e,Object(c.a)({defaultTheme:O.a},t))},k=a("Wbzz"),_=(a("fW1N"),j({media:{height:"60%"},action:{height:"100%"},small:{boxSizing:"border-box",gridRowEnd:"span 3",marginBottom:20},large:{boxSizing:"border-box",maxHeight:"300px",gridRowEnd:"span 6",marginBottom:20},content:{height:"40%"}})),I=o.a.h1.withConfig({displayName:"paper__Title",componentId:"sc-3eyeaj-0"})(["font-family:'Roboto',san-serif;font-weight:400;color:#707070;font-size:16px;padding:0;margin:0;"]),R=o.a.p.withConfig({displayName:"paper__Content",componentId:"sc-3eyeaj-1"})(["font-family:'Roboto',san-serif;font-weight:100;color:#707070;font-size:12px;margin:6px 0px;line-height:1.5em;overflow:hidden;"]),z=function(e){var t=e.children,a=e.size,n=e.title,o=e.feature_image,r=e.meta_description,s=e.slug,c=_();switch(a){case"S":return i.a.createElement(g,{className:c.small},i.a.createElement("a",{className:"post-link",href:"/post/"+s},i.a.createElement(w,{className:c.action},i.a.createElement(h,null,i.a.createElement(I,null,n),i.a.createElement(R,null,r)))));case"L":return i.a.createElement(g,{className:c.large},i.a.createElement(w,{className:c.action,onClick:function(){return Object(k.navigate)("/post/"+s)}},i.a.createElement(N,{className:c.media,image:o,title:"Contemplative Reptile"}),i.a.createElement(h,{className:c.content},i.a.createElement(I,null,n),i.a.createElement(R,null,r))));default:if(t)return i.a.createElement(g,{className:c.small},i.a.createElement(w,{className:c.action},i.a.createElement(h,{style:{height:130,padding:0}},t)));throw new Error("Children not found")}},S=a("uZbd"),L=o.a.div.withConfig({displayName:"grid__GridContainer",componentId:"sc-1v4h306-0"})(["display:grid;grid-auto-rows:50px;grid-gap:0px 20px;grid-template-columns:1fr [col-start];margin:'auto';@media screen and (min-width:","px){grid-template-columns:repeat(2,1fr [col-start]);}@media screen and (min-width:","px){grid-template-columns:repeat(3,1fr [col-start]);}"],S.a.medium,S.a.large),V=["L","L","L","L","L","S","S","S","S","S"],F=function(e){var t=e.data;return i.a.createElement(L,null,t.map((function(e){var t=V[Math.floor(10*Math.random())];return"A"===t?i.a.createElement(i.a.Fragment,null,i.a.createElement(z,null,i.a.createElement("ins",{className:"adsbygoogle",style:{display:"block",minWidth:180,maxWidth:600,width:"100%",height:130},"data-ad-client":"ca-pub-6226350954037529","data-ad-slot":"2297674631","data-ad-format":"auto","data-full-width-responsive":"true"}),i.a.createElement("script",null,"(adsbygoogle = window.adsbygoogle || []).push({});")),i.a.createElement(z,Object.assign({size:"L"},e))):i.a.createElement(z,Object.assign({size:t},e))})))};var M=a("bfFb");var A=n.createContext({}),D=a("i8i4"),T="undefined"==typeof window?n.useEffect:n.useLayoutEffect,B=n.forwardRef((function(e,t){var a=e.alignItems,i=void 0===a?"center":a,o=e.autoFocus,r=void 0!==o&&o,s=e.button,m=void 0!==s&&s,u=e.children,p=e.classes,f=e.className,g=e.component,b=e.ContainerComponent,h=void 0===b?"li":b,x=e.ContainerProps,w=(x=void 0===x?{}:x).className,E=Object(l.a)(x,["className"]),y=e.dense,N=void 0!==y&&y,C=e.disabled,O=void 0!==C&&C,j=e.disableGutters,k=void 0!==j&&j,_=e.divider,I=void 0!==_&&_,R=e.focusVisibleClassName,z=e.selected,S=void 0!==z&&z,L=Object(l.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),V=n.useContext(A),F={dense:N||V.dense||!1,alignItems:i},B=n.useRef(null);T((function(){r&&B.current&&B.current.focus()}),[r]);var P,H,W=n.Children.toArray(u),$=W.length&&(P=W[W.length-1],H=["ListItemSecondaryAction"],n.isValidElement(P)&&-1!==H.indexOf(P.type.muiName)),G=n.useCallback((function(e){B.current=D.findDOMNode(e)}),[]),q=Object(M.a)(G,t),J=Object(c.a)({className:Object(d.a)(p.root,f,F.dense&&p.dense,!k&&p.gutters,I&&p.divider,O&&p.disabled,m&&p.button,"center"!==i&&p.alignItemsFlexStart,$&&p.secondaryAction,S&&p.selected),disabled:O},L),K=g||"li";return m&&(J.component=g||"div",J.focusVisibleClassName=Object(d.a)(p.focusVisible,R),K=v.a),$?(K=J.component||g?K:"div","li"===h&&("li"===K?K="div":"li"===J.component&&(J.component="div")),n.createElement(A.Provider,{value:F},n.createElement(h,Object(c.a)({className:Object(d.a)(p.container,w),ref:q},E),n.createElement(K,J,W),W.pop()))):n.createElement(A.Provider,{value:F},n.createElement(K,Object(c.a)({ref:q},J),W))})),P=Object(m.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(B),H=(a("dBWM"),o.a.div.withConfig({displayName:"customListItem__Container",componentId:"r9itr-0"})(["border-box:box-sizing;padding:12px 24px 12px 24px;width:100%;"])),W=o.a.h1.withConfig({displayName:"customListItem__Title",componentId:"r9itr-1"})(["font-family:'Roboto',san-serif;font-weight:300;color:#088396;font-size:16px;padding:0;margin:0;"]),$=o.a.p.withConfig({displayName:"customListItem__Content",componentId:"r9itr-2"})(["font-family:'Roboto',san-serif;font-weight:100;color:#707070;font-size:12px;margin:0;"]),G=function(e){var t=e.title,a=e.created_at,n=e.divider,o=e.slug,r=e.key;return i.a.createElement("a",{className:"post-link",href:"/post/"+o},i.a.createElement(P,{key:r,button:!0,divider:n},i.a.createElement(H,null,i.a.createElement(W,null,t),i.a.createElement($,null,"Created at "+a))))},q=o.a.h1.withConfig({displayName:"paperList__Title",componentId:"nna39s-0"})(["font-family:'Roboto',sans-serif;font-size:1.6em;font-weight:100;padding:24px 0px;height:40%;color:#004D80;text-align:center;margin:0px;"]),J=function(e){var t=e.list;return t=t.slice(0,5),i.a.createElement(p,null,i.a.createElement(q,null,"Latest Posts"),t.map((function(e,t){return i.a.createElement(G,Object.assign({key:t,divider:!0},e))})))},K=a("3nkl"),Q=a("iae6"),U=o.a.section.withConfig({displayName:"pages__Section",componentId:"sc-1m383le-0"})(["display:flex;flex-direction:column;overflow:none;min-height:100vh;align-items:center;justify-content:center;@media screen and (min-width:900px){flex-direction:row;}"]),X=Object(o.b)(["from{opacity:0%;}to{opacity:100%;}"]),Z=o.a.div.withConfig({displayName:"pages__WidthContainer",componentId:"sc-1m383le-1"})(["width:100%;animation:"," 1s ease-in;justify-content:center;margin:100px 0px;@media screen and (min-width:900px){width:50%;}"],X),Y=o.a.p.withConfig({displayName:"pages__Title",componentId:"sc-1m383le-2"})(["color:#004D80;font-family:'Roboto',san-serif;font-size:3em;margin-bottom:16px;text-align:center;@media screen and (min-width:900px){text-align:left;}@media screen and (max-width:900px){margin-top:100px;}}"]),ee=o.a.p.withConfig({displayName:"pages__Quote",componentId:"sc-1m383le-3"})(["color:#707070;font-family:'Roboto',san-serif;font-size:13px;margin-top:16px;margin-bottom:16px;text-align:center;@media screen and (min-width:900px){text-align:left;}"]),te=o.a.div.withConfig({displayName:"pages__Content",componentId:"sc-1m383le-4"})(["margin:0 auto;padding:0 1.0875rem 1.45rem;@media screen and (min-width:","px){width:80%;maxWidth:1000px;}"],S.a.medium);t.default=function(){var e=Object(n.useState)([]),t=e[0],a=e[1];return Object(n.useEffect)((function(){K.a.posts.browse({order:"published_at DESC"}).then((function(e){return a(e)})).catch((function(e){return e}))}),[]),0===t.length?i.a.createElement(U,null,i.a.createElement(Q.a,{style:{color:"#004D80"}})):i.a.createElement(r.a,null,i.a.createElement(s.a,{title:"Notetaking"}),i.a.createElement(te,null,i.a.createElement(U,null,i.a.createElement(Z,null,i.a.createElement(Y,null,"Notetaking"),i.a.createElement(ee,null,"Take notes that matter")),i.a.createElement(Z,null,i.a.createElement(J,{list:t}))),i.a.createElement(F,{data:t})))}}}]);
//# sourceMappingURL=component---src-pages-index-js-c678629cb33c7d79104a.js.map