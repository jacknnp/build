"use strict";(self.webpackChunkEnglish377=self.webpackChunkEnglish377||[]).push([[218],{79301:function(e,t,n){var r=n(62944),o="/sentence",i={postContributeSentence:function(e,t,n,i){return r.Z.post("".concat(o,"/contribute/add-sentence"),{sentence:e,mean:t,note:n,topics:i})},getTotalSentences:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return r.Z.get("".concat(o,"/total"),{params:{topics:JSON.stringify(e)}})},getSentenceList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return r.Z.get("".concat(o,"/list"),{params:{page:e,perPage:t,topics:JSON.stringify(n)}})}};t.Z=i},93963:function(e,t,n){var r=n(43264),o=(n(72791),n(80184));t.Z=function(e){var t=e.className;return(0,o.jsx)("div",{className:t,children:new Array(10).fill(0).map((function(e,t){return(0,o.jsx)(r.Z,{animation:"wave",variant:"rect"},t)}))})}},5420:function(e,t,n){var r=n(29439),o=n(72791),i=n(80184);function a(e){var t=e.className,n=e.onTouchAnchor,a=e.threshold,c=(0,o.useRef)(new IntersectionObserver((function(e){e[0].isIntersecting&&n()}),{threshold:a})),l=(0,o.useState)(null),s=(0,r.Z)(l,2),u=s[0],d=s[1];return(0,o.useEffect)((function(){var e=u,t=c.current;return e&&t.observe(e),function(){e&&t.unobserve(e)}}),[u]),(0,i.jsx)("div",{className:t,ref:d,children:e.children})}a.defaultProps={className:"",onTouchAnchor:function(){},threshold:.5},t.Z=a},48127:function(e,t,n){var r=n(45676),o=n(64580),i=n(54286),a=(n(72791),n(80184));function c(e){var t=e.className,n=e.type,c=e.text,l=e.audioSrc,s=e.isWrap,u=(0,i.Z)(),d=u.voice,h=u.speed,p=u.volume,m=function(){n?(0,o.NP)(c,d,h,p):(0,o.GR)(l)};return(0,a.jsx)(a.Fragment,{children:s?(0,a.jsx)("div",{onClick:m,children:e.children}):(0,a.jsx)(r.Z,{className:"dyno-speaker ".concat(t),onClick:m})})}c.defaultProps={audioSrc:"",className:"",text:"",type:!0,isWrap:!1},t.Z=c},1104:function(e,t,n){n.d(t,{Hp:function(){return a},ad:function(){return c},ls:function(){return i},tM:function(){return o}});var r=n(4942),o=function(e){var t;return{root:(t={height:"100%",display:"grid",gridTemplateColumns:"1fr",gridTemplateRows:"2fr 1fr 17fr",gridRowGap:"0.8rem"},(0,r.Z)(t,e.breakpoints.up("sm"),{height:"85%",gridRowGap:"1.2rem"}),(0,r.Z)(t,"& .disabled",{pointerEvents:"none"}),t),summary:{margin:"1.4rem 0","& > *":{fontSize:"1.6rem",fontWeight:400,color:"var(--label-color)"},"& b":{padding:"0 0.4rem",fontSize:"2rem"}},summaryIcon:{fontSize:"2.4rem",margin:"0 0.4rem"}}},i=function(){return{root:{marginTop:"3.2rem","& ::-webkit-scrollbar":{width:"2px"},"& ::-webkit-scrollbar-track":{background:"none"},"& ::-webkit-scrollbar-thumb":{borderRadius:"25px"}},contentWrap:{marginTop:"2.4rem"},listWrap:{padding:"1.2rem 0.4rem",backgroundColor:"var(--bg-color-accent)",borderRadius:"var(--border-radius)",border:"solid 1px var(--border-color)"},list:{padding:"0 2.4rem",height:"calc(100vh - 24rem)",overflow:"auto"},listItem:{margin:"0.6rem 0"},skeleton:{height:"100%","& > *":{margin:"1.2rem 0",height:"calc(10% - 1.2rem)"}}}},a=function(){return{dialogPaper:{backgroundColor:"var(--bg-color-sec)"},title:{"& > *":{color:"var(--title-color)"}},content:{"& *":{color:"var(--text-color)"}},breakLine:{borderColor:"var(--border-color)"}}},c=function(){return{root:{padding:"2.4rem 3.6rem",boxShadow:"var(--box-shadow)",borderRadius:"var(--border-radius)",width:"35rem",backgroundColor:"var(--bg-color-sec)","& > *":{marginTop:"1.2rem",marginBottom:"1.2rem"}},title:{fontSize:"2.4rem",color:"var(--text-color)"},labelIcon:{fontSize:"3.6rem",color:"var(--text-color)"},forgotPw:{color:"var(--title-color)",opacity:.65,fontWeight:500,fontSize:"1.4rem",textAlign:"right","&:hover":{opacity:1}},icon:{fontSize:"1.8rem",color:"var(--grey)",cursor:"pointer"},visiblePw:{color:"var(--primary-color)"}}}},83579:function(e,t,n){n.d(t,{Z:function(){return r}});var r=[{key:"0",title:"Giao ti\u1ebfp th\xf4ng d\u1ee5ng"},{key:"1",title:"Ch\xe0o h\u1ecfi"},{key:"2",title:"Du l\u1ecbch - ph\u01b0\u01a1ng h\u01b0\u1edbng"},{key:"3",title:"Con s\u1ed1 - ti\u1ec1n b\u1ea1c"},{key:"4",title:"\u0110\u1ecba \u0111i\u1ec3m"},{key:"5",title:"Th\u1eddi gian, ng\xe0y th\xe1ng"},{key:"6",title:"\u0110i\u1ec7n tho\u1ea1i - Internet - Th\u01b0"},{key:"7",title:"Ch\u1ed7 \u0103n \u1edf"},{key:"8",title:"\u0102n u\u1ed1ng"},{key:"9",title:"K\u1ebft b\u1ea1n"},{key:"10",title:"Gi\u1ea3i tr\xed"},{key:"11",title:"Mua s\u1eafm"},{key:"12",title:"Kh\xf3 kh\u0103n giao ti\u1ebfp"},{key:"13",title:"Kh\u1ea9n c\u1ea5p, S\u1ee9c kho\u1ebb"},{key:"15",title:"C\xe2u h\u1ecfi th\xf4ng th\u01b0\u1eddng"},{key:"16",title:"Vi\u1ec7c l\xe0m"},{key:"17",title:"Th\u1eddi ti\u1ebft"},{key:"18",title:"Kh\xe1c"}]},64580:function(e,t,n){n.d(t,{GR:function(){return i},NP:function(){return a},OS:function(){return c}});var r=n.p+"static/media/correct.369c0cd94ee0cf00b8a9.mp3",o=n(88032),i=function(e){new Audio(e).play()},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,o=new SpeechSynthesisUtterance;window.speechSynthesis.cancel(),o.lang="en",o.text=e,o.volume=r,o.voice=t,o.rate=n,window.speechSynthesis.speak(o)},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2?arguments[2]:void 0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1e3,s=i>=0&&i<=1?i:1,u=c>=0&&c<=10?c:1,d=new Audio;d.volume=s,d.playbackRate=u,d.src=t?r:o,d.play(),setTimeout((function(){a(e,n,u,s)}),l)}},54286:function(e,t,n){var r=n(29439),o=n(72791),i=n(16030),a=[];t.Z=function(){var e=(0,o.useState)(a),t=(0,r.Z)(e,2),n=t[0],c=t[1],l=(0,i.v9)((function(e){return e.voice})),s=l.speed,u=l.voiceURI,d=l.volume,h=n.find((function(e){return e.voiceURI===u}));return(0,o.useEffect)((function(){if(!(a.length>0)){var e=setInterval((function(){var t=window.speechSynthesis.getVoices();t.length>0&&(a=t.filter((function(e){return-1!==e.lang.indexOf("en")})),c(t.filter((function(e){return-1!==e.lang.indexOf("en")}))),clearInterval(e))}),50);return function(){e&&clearInterval(e)}}}),[]),{speed:s,volume:d,voice:h}}},94262:function(e,t,n){n.r(t),n.d(t,{default:function(){return O}});var r=n(74165),o=n(15861),i=n(93433),a=n(29439),c=n(79301),l=n(42997),s=n(72791),u=n(1413),d=n(74368),h=n(93963),p=n(5420),m=n(48127),f=n(38596),v=(0,f.Z)((function(){return{root:{padding:"1.2rem 0",borderBottom:"solid 1px var(--border-color)"},mean:{fontSize:"1.8rem",marginBottom:"0.8rem",color:"var(--text-color)",maxWidth:"80%",textAlign:"justify"},phrase:{fontSize:"1.6rem",color:"var(--primary-color)",maxWidth:"80%",textAlign:"justify"}}})),g=n(80184);function y(e){var t=e.mean,n=e.sentence,r=v();return(0,g.jsxs)("div",{className:"".concat(r.root," flex-center-between"),children:[(0,g.jsxs)("div",{className:"mr-4 w-100",children:[(0,g.jsx)("div",{className:r.mean,children:t}),(0,g.jsx)("div",{className:r.phrase,children:n})]}),(0,g.jsx)(m.Z,{text:n})]})}y.defaultProps={mean:"",sentence:""};var x=y,b=n(43115),Z=n(26513),k=n(43594),S=n(20269),j=n(94026),w=n(5965),N=n(55518),C=n(83579),T=n(1104),R=(0,f.Z)((function(e){return(0,u.Z)({},(0,T.Hp)(e))}));function L(e){var t=e.onClose,n=e.onSelect,r=e.open,o=R(),i=(0,s.useRef)([]);return(0,g.jsxs)(k.Z,{classes:{paper:o.dialogPaper},open:r,keepMounted:!0,maxWidth:"md",onClose:t,children:[(0,g.jsx)(w.Z,{className:o.title,children:"Ch\u1ecdn ch\u1ee7 \u0111\u1ec1"}),(0,g.jsx)(j.Z,{dividers:!0,classes:{dividers:o.breakLine},children:(0,g.jsx)("ul",{className:"d-flex flex-wrap",children:C.Z.map((function(e,t){return(0,g.jsx)("div",{className:"m-2",children:(0,g.jsx)(N.Z,{title:e.title,id:e.key,onChange:function(e){return(0,l.Xo)(i.current,e)}})},t)}))})}),(0,g.jsxs)(S.Z,{children:[(0,g.jsx)(Z.Z,{onClick:t,className:"_btn _btn-stand",children:"\u0110\xf3ng"}),(0,g.jsx)(Z.Z,{onClick:function(){return n(i.current)},className:"_btn _btn-primary",children:"OK"})]})]})}L.defaultProps={open:!1,onClose:function(){},onSelect:function(){}};var z=L;function A(e){var t=e.onSelectTopic,n=(0,s.useState)(!1),r=(0,a.Z)(n,2),o=r[0],i=r[1];return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(b.Z,{className:"dyno-setting-icon",onClick:function(){return i(!0)}}),(0,g.jsx)(z,{onClose:function(){return i(!1)},open:o,onSelect:function(e){t(e),i(!1)}})]})}A.defaultProps={onSelectTopic:function(){}};var I=A,P=(0,f.Z)((function(e){return(0,u.Z)({},(0,T.ls)(e))}));function W(e){var t=e.isFirstLoad,n=e.loading,r=e.more,o=e.list,i=e.onLoadData,a=e.onSelectTopic,c=P();return(0,g.jsxs)("div",{className:"".concat(c.root," dyno-container"),children:[(0,g.jsxs)("div",{className:"flex-center-between",children:[(0,g.jsx)("h1",{className:"dyno-title",children:"1000+ C\u1ee5m t\u1eeb giao ti\u1ebfp"}),(0,g.jsx)(I,{onSelectTopic:a})]}),(0,g.jsx)("div",{className:"dyno-break"}),(0,g.jsx)("div",{className:c.contentWrap,children:(0,g.jsx)("div",{className:"".concat(c.listWrap," w-100"),children:(0,g.jsx)("ul",{id:"dictionaryId",className:"".concat(c.list," flex-col w-100"),children:(0,g.jsx)(g.Fragment,{children:t?(0,g.jsx)(h.Z,{className:c.skeleton}):(0,g.jsx)(g.Fragment,{children:o&&o.length>0?(0,g.jsxs)(g.Fragment,{children:[o.map((function(e,t){return(0,g.jsx)("li",{className:c.listItem,children:(0,g.jsx)(x,(0,u.Z)({},e))},t)})),!n&&r&&(0,g.jsx)(p.Z,{onTouchAnchor:i,threshold:1,children:(0,g.jsx)("div",{className:"w-100 t-center",children:(0,g.jsx)(d.Z,{className:"ani-spin"})})})]}):(0,g.jsx)("h3",{className:"notfound-title h-100 flex-center t-center",children:"Kh\xf4ng t\xecm th\u1ea5y c\u1ee5m t\u1eeb n\xe0o trong t\u1eeb \u0111i\u1ec3n"})})})})})})]})}W.defaultProps={more:!1,loading:!1,isFirstLoad:!1,list:[],onLoadData:function(){},onSelectTopic:function(){}};var E=W;var B=function(){var e=(0,s.useState)(1),t=(0,a.Z)(e,2),n=t[0],u=t[1],d=(0,s.useState)(!0),h=(0,a.Z)(d,2),p=h[0],m=h[1],f=(0,s.useState)([]),v=(0,a.Z)(f,2),y=v[0],x=v[1],b=(0,s.useState)(!0),Z=(0,a.Z)(b,2),k=Z[0],S=Z[1],j=(0,s.useState)(!0),w=(0,a.Z)(j,2),N=w[0],C=w[1],T=(0,s.useState)([]),R=(0,a.Z)(T,2),L=R[0],z=R[1],A=(0,s.useRef)(0);return(0,s.useEffect)((function(){var e=!0;return(0,o.Z)((0,r.Z)().mark((function t(){var n,o,i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.getTotalSentences(L);case 3:200===(n=t.sent).status&&e&&(o=n.data.total,i=void 0===o?0:o,A.current=Math.ceil(i/20)),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))(),function(){return e=!1}}),[L]),(0,s.useEffect)((function(){var e=!0;return(0,o.Z)((0,r.Z)().mark((function t(){var o,a,l;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,m(!0),t.next=4,c.Z.getSentenceList(n,20,L);case 4:200===(o=t.sent).status&&e&&(a=o.data.sentenceList,l=void 0===a?[]:a,x([].concat((0,i.Z)(y),(0,i.Z)(l)))),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:return t.prev=10,e&&(m(!1),N&&C(!1)),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,8,10,13]])})))(),function(){return e=!1}}),[n,L]),(0,g.jsx)(E,{list:y,isFirstLoad:N,loading:p,more:k,onLoadData:function(){n<A.current?u(n+1):S(!1)},onSelectTopic:function(e){var t;(t=e)&&Array.isArray(t)&&!(0,l.Sk)(t,L)&&(u(1),S(!0),x([]),z((0,i.Z)(t)),A.current=0)}})},M=n(56647);var O=function(){return(0,M.Z)("1000+ C\u1ee5m t\u1eeb giao ti\u1ebfp"),(0,g.jsx)("div",{className:"container",children:(0,g.jsx)(B,{})})}},5965:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(87462),o=n(45987),i=n(72791),a=n(28182),c=n(42953),l=n(91122),s={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},u=i.forwardRef((function(e,t){var n=e.align,c=void 0===n?"inherit":n,u=e.classes,d=e.className,h=e.color,p=void 0===h?"initial":h,m=e.component,f=e.display,v=void 0===f?"initial":f,g=e.gutterBottom,y=void 0!==g&&g,x=e.noWrap,b=void 0!==x&&x,Z=e.paragraph,k=void 0!==Z&&Z,S=e.variant,j=void 0===S?"body1":S,w=e.variantMapping,N=void 0===w?s:w,C=(0,o.Z)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),T=m||(k?"p":N[j]||s[j])||"span";return i.createElement(T,(0,r.Z)({className:(0,a.Z)(u.root,d,"inherit"!==j&&u[j],"initial"!==p&&u["color".concat((0,l.Z)(p))],b&&u.noWrap,y&&u.gutterBottom,k&&u.paragraph,"inherit"!==c&&u["align".concat((0,l.Z)(c))],"initial"!==v&&u["display".concat((0,l.Z)(v))]),ref:t},C))})),d=(0,c.Z)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(u),h=i.forwardRef((function(e,t){var n=e.children,c=e.classes,l=e.className,s=e.disableTypography,u=void 0!==s&&s,h=(0,o.Z)(e,["children","classes","className","disableTypography"]);return i.createElement("div",(0,r.Z)({className:(0,a.Z)(c.root,l),ref:t},h),u?n:i.createElement(d,{component:"h2",variant:"h6"},n))})),p=(0,c.Z)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(h)},74368:function(e,t,n){var r=n(64836),o=n(75263);t.Z=void 0;var i=o(n(72791)),a=(0,r(n(44894)).default)(i.createElement("path",{d:"M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"}),"Loop");t.Z=a},45676:function(e,t,n){var r=n(64836),o=n(75263);t.Z=void 0;var i=o(n(72791)),a=(0,r(n(44894)).default)(i.createElement("path",{d:"M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 1.99 2 1.99L17 22c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 2c1.1 0 2 .9 2 2s-.9 2-2 2c-1.11 0-2-.9-2-2s.89-2 2-2zm0 16c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Speaker");t.Z=a},88032:function(e,t,n){e.exports=n.p+"static/media/incorrect.fdd769b06f367b7ed46f.mp3"}}]);
//# sourceMappingURL=218.752eb7ec.chunk.js.map