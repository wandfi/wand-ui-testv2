"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9625],{55139:function(e,t,n){n.d(t,{r:function(){return a.Z}});var a=n(87456)},76036:function(e,t,n){n.d(t,{v:function(){return ApproveAndTx}});var a=n(57437),s=n(72009),l=n(81628),r=n(2265),i=n(71424),o=n(42980),c=n(79037),u=n(41736),d=n(93195);let x={},useApproves=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10000000000n*10n**18n,{address:a,chainId:p}=(0,c.m)(),m=(0,u.t)(),{data:f}=(0,d.p)(),[v,b]=(0,r.useState)(!1),h=(0,r.useMemo)(()=>Object.keys(e).filter(e=>e!==s.K8),[e]),[g,w]=(0,r.useState)(t&&x[t]||{}),updateAllownce=(e,n)=>{t&&(x[t]={...x[t]||{},[e]:n},w(t=>({...t,[e]:n})))},j=(0,u.t)();(0,r.useEffect)(()=>{a&&t&&m&&p&&h.forEach(e=>{m.readContract({abi:o.Wo,address:e,functionName:"allowance",args:[a,t]}).then(t=>updateAllownce(e,t||0n)).catch(console.error)})},[h,p,a]);let[y,A]=(0,r.useState)(!1),N=(0,r.useMemo)(()=>h.filter(t=>(0,l.ok)(e,t)>0n&&(0,l.ok)(e,t)>(0,l.ok)(g,t)),[e,h,g]),approve=async()=>{if(0!=N.length&&t)try{A(!0),b(!1);for(let a=0;a<N.length;a++){let s=N[a],l=!1===n?e[s]:n,r=await (null==f?void 0:f.writeContract({abi:o.Wo,address:s,functionName:"approve",args:[t,l]}));r&&await (null==j?void 0:j.waitForTransactionReceipt({hash:r})),updateAllownce(s,l)}i.A.success("Approve success"),A(!1),b(!0)}catch(e){throw i.A.error((0,l.az)(e)),A(!1),b(!1),e}};return{approve,loading:y,shouldApprove:N.length>0,isSuccess:v}};var p=n(43003),m=n(35769),f=n(72084);function ApproveAndTx(e){let{className:t,tx:n,approves:s,spender:l,requestAmount:i,config:o,toast:c=!0,disabled:u,onTxSuccess:d,onApproveSuccess:x}=e,{write:v,isDisabled:b,isLoading:h}=(0,p.R)(o,{onSuccess:()=>d&&d(),autoToast:c}),g=u||b||h||!1===o.enabled,{approve:w,shouldApprove:j,loading:y,isSuccess:A}=useApproves(s||{},l,i),N=(0,r.useRef)();return(N.current=x,(0,r.useEffect)(()=>{N.current&&A&&N.current()},[A]),j)?(0,a.jsxs)("button",{className:(0,m.m)("btn-primary flex items-center justify-center gap-4",t),onClick:w,disabled:u||!w||y,children:[y&&(0,a.jsx)(f.$,{}),"Approve"]}):(0,a.jsxs)("button",{className:(0,m.m)("btn-primary flex items-center justify-center gap-4",t),onClick:()=>v(),disabled:g,children:[h&&(0,a.jsx)(f.$,{}),n]})}},47960:function(e,t,n){n.d(t,{_:function(){return PointsIcons}});var a=n(57437),s=n(81628);let l={};function PointsIcons(e){let{className:t,icons:n}=e;return(0,a.jsxs)("div",{className:(0,s.cn)("flex gap-1 items-center",t),children:[(0,a.jsx)("span",{className:"mr-2",children:"Points:"}),n.map((e,t)=>(0,a.jsx)("img",{className:"rounded-full w-5 h-5 object-fill",alt:e,src:l[e]||"".concat(e,".png")},e))]})}},80547:function(e,t,n){n.d(t,{W:function(){return AssetInput}});var a=n(57437),s=n(81628),l=n(20373),r=n(57042),i=n(2265),o=n(5668),c=n(16775),u=n(51549);function AssetInput(e){let{asset:t="ETH",checkBalance:n=!0,balance:d,balanceTit:x="Balance",balanceDecimals:p=18,exchange:m,readonly:f,selected:v,onClick:b,amount:h,setAmount:g,price:w,disable:j,hasInput:y=!1,options:A,onChange:N=()=>{},defaultValue:k,balanceClassName:S="",disableNegative:T}=e,B=(0,i.useRef)(null),C=n&&void 0!==d&&(0,s.su)("number"==typeof h?h+"":h||"")>("bigint"==typeof d?d:0n);return(0,a.jsxs)("div",{className:"relative w-full",onClick:()=>{b&&!j&&b()},children:[(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsxs)("div",{className:"absolute flex items-center h-fit gap-2 left-[48px] bottom-1 w-full  max-w-[calc(100%-56px)]",style:{pointerEvents:"none"},children:[w&&(0,a.jsx)("div",{className:"text-neutral-500 text-xs max-w-full overflow-hidden",children:w}),m&&(0,a.jsxs)("div",{className:"text-slate-500 text-xs max-w-full overflow-hidden",children:["~$",m]})]}),(0,a.jsxs)("div",{className:"absolute flex items-center gap-2 w-fit top-1/2 left-4 -translate-y-1/2",children:[(0,a.jsx)(u.c,{size:24,symbol:t}),(0,a.jsx)("div",{className:(0,r.Z)("relative",w||m?"-top-[6px]":""),children:y?(0,a.jsx)(o.ZP,{options:A,onChange:N,defaultValue:k,styles:{control:(e,t)=>({...e,border:"0px",outline:"none",boxShadow:"none",borderRadius:"0px",minHeight:"24px",padding:"0px",background:"transparent"}),valueContainer:(e,t)=>({...e,padding:"0px"}),menu:(e,t)=>({...e,margin:0}),menuPortal:(e,t)=>({...e,margin:0})}}):(0,a.jsx)("div",{children:t})})]}),(0,a.jsx)("input",{value:h,onChange:e=>{let t=(e.target.value||"").replaceAll("-","").replaceAll("+","");g(t)},ref:B,type:"number",disabled:j,className:(0,r.Z)(f?"bg-slate-50":"bg-white",{"border-green-700 border-2":v,"border-red-400 !border-2 focus:border-red-400":C,"border-slate-400  focus:border-blue-400":!C&&!v},"w-full h-14 text-right pr-4 pl-[8rem] font-bold text-2xl border focus:border-2 text-slate-700 rounded-md outline-none"),placeholder:"0.000",maxLength:36,pattern:"[0-9.]{36}",step:.01,title:"",readOnly:f})]}),void 0!=d&&(0,a.jsxs)("div",{className:"flex items-center justify-between mt-1 px-1 text-slate-400 text-sm",children:[(0,a.jsxs)("div",{className:S,children:[(0,a.jsxs)("span",{children:[x,": ",(0,l.Rp)(d,3,p)]}),(0,a.jsx)("button",{className:"text-indigo-500 ml-2",onClick:()=>{let e=(0,c.b)(d,p);g(e),b&&!j&&b()},children:"Max"})]}),(0,a.jsx)("div",{className:"text-sm text-red-400",children:C?"Insufficient account balance":""})]})]})}},8332:function(e,t,n){n.d(t,{IS:function(){return useBlastPointsItems},aG:function(){return BlastPointCards}});var a=n(57437),s=n(81628),l=n(51549),r=n(91056),i=n(72009),o=n(23653),c=n(14389),u=n(86825),d=n(78203),x=n(66949),p=n(47868),m=n(20373),f=n(2265),v=n(85686),b=n(34350),h=n(97062),g=n(28278),w=n(47960);let j={USB:"rgba(226, 254, 182, 1)",ETHx:"rgba(238, 234, 254, 1)",USDBx:"linear-gradient(90deg, rgba(16, 185, 129, 0.25) 0%, rgba(99, 102, 241, 0.25) 100%)"},y={USB:"rgba(196, 241, 126, 1)",ETHx:"rgba(219, 210, 255, 1)",USDBx:"rgba(255, 255, 255, 1)"};function useBlastPointsItems(){let e=(0,c.p)(),{prices:t,usbApr:n}=(0,f.useContext)(p.g),a=(0,x.a)(),l=(0,u.i)(),o=(0,d.m)(),v=(0,f.useMemo)(()=>{let n=[],l=i.iK[e];if(r.DF.find(t=>t.id==e)){let c=t[i.K8],u=t[i.O1[e]],calcPoint=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100n;return 0n==c?"0":(0,m.Rp)(6504987n*302400n*e*t/c,0,8)};n.push({symbol:"USB",tit:"APY:".concat((0,s.Jh)(o[i.O1[e]],10)," ~ ").concat((0,s.Jh)(o.USB_END,10)),sub:"~ Interest + Earning",point:calcPoint(u),per:100}),l.reduceRight((e,l)=>{let i="ETH"==l.assetTokenSymbol?"ETH GAIN BOOSTER":"APY:".concat((0,s.Jh)(o[l.xTokenAddress],10)),c=l.isStable&&(0,r.WA)()?"~ ".concat(a[l.vault].toFixed(2),"x Blast Native Yield"):"~ ".concat(a[l.vault].toFixed(2),"x Leveraged long on ").concat(l.assetTokenSymbol);return n.push({symbol:l.xTokenSymbol,tit:i,sub:c,point:calcPoint(t[l.xTokenAddress],"ETHx"==l.xTokenSymbol?1n:100n),per:"ETHx"==l.xTokenSymbol?1:100}),e},1)}return n},[e,t,a,n,l]);return v}function BlastPointCard(e){let{symbol:t,tit:n,sub:r,point:u}=e,d=(0,c.p)(),x=(0,f.useMemo)(()=>{var e,n;let a=(0,o.l)(d,!1),l={USB:"USDB",ETHx:"ETH",USDBx:"USDB"},r=null===(e=a.find(e=>e.symbol==l[t]))||void 0===e?void 0:e.address,c=null===(n=a.find(e=>e.symbol==t))||void 0===n?void 0:n.address;if(!r||!c)return"";let convertNative=e=>e==i.K8?"0x0000000000000000000000000000000000000000":e;return(0,s.h$)(convertNative(r),convertNative(c))},[d]);return(0,a.jsxs)("div",{style:{boxShadow:"0px 0px 12px 0px rgba(187, 215, 144, 0.4)"},className:"rounded-2xl overflow-hidden bg-white text-base flex flex-col",children:[(0,a.jsxs)("div",{className:"flex md:flex-wrap items-center p-4 gap-2",style:{background:j[t]},children:[(0,a.jsx)(l.c,{symbol:t,size:42,className:"shrink-0"}),(0,a.jsx)("div",{className:"font-semibold",children:t}),(0,a.jsxs)("div",{className:"whitespace-nowrap text-center text-sm ml-auto flex flex-col items-center flex-1",children:[(0,a.jsx)("div",{className:"rounded-full px-2 py-[2px] w-fit",style:{background:y[t]},children:n}),(0,a.jsx)("div",{className:"mt-1",children:r})]})]}),(0,a.jsxs)("div",{className:"flex justify-between p-4 whitespace-nowrap text-sm items-center gap-2 bg-white",children:[(0,a.jsx)(w._,{icons:["blast","gold","wand"]}),(0,a.jsxs)("a",{className:"underline text-slate-500 flex items-center gap-1",href:x,target:"_blank",children:["Swap on Thruster ",(0,a.jsx)(v.Ig3,{})]})]})]})}function BlastPointCards(){let e=useBlastPointsItems(),[t,{width:n}]=(0,b.Z)(),s=n<768;return 0==e.length?null:(0,a.jsxs)("div",{ref:t,className:"grid grid-cols-1 md:grid-cols-3 gap-5 md:pb-[60px]",children:[!s&&e.map(e=>(0,a.jsx)(BlastPointCard,{...e},e.symbol)),s&&(0,a.jsx)(g.tq,{spaceBetween:20,pagination:{clickable:!0,renderBullet:function(e,t){return'<div class="'+t+'"></div>'}},className:"-translate-x-[1rem] !px-4 !pb-10 !w-screen",modules:[h.tl],children:e.map(e=>(0,a.jsx)(g.o5,{children:(0,a.jsx)(BlastPointCard,{...e})},e.symbol))})]})}},78203:function(e,t,n){n.d(t,{m:function(){return useTokenApys}});var a=n(81628),s=n(23862),l=n(86825),r=n(66949),i=n(2265),o=n(47868),c=n(14389),u=n(72009),d=n(43977);function useTokenApys(){let e=(0,s.b)(()=>(0,a.Yb)({},0n)),t=(0,c.p)(),{prices:n,usbApr:x,stableVaultsState:p}=(0,i.useContext)(o.g),m=(0,r.a)(),f=(0,l.i)();return(0,i.useMemo)(()=>{let n=u.iK[t],s=(0,a.ok)(f[n[0].ptyPoolBelowAddress],"staking");e[u.O1[t]]=x.apr,e.USB_END=x.apr+s;let l=(0,d.v)("0.1",10);return n.forEach(t=>{if(t.assetTokenAddress!=u.K8){let n=m[t.vault]>1n?(0,d.v)("".concat((m[t.vault]-1).toFixed(2)),10):0n,a=(0,d.v)("1",10);e[t.xTokenAddress]=(n*(l-p[t.vault].Y*p[t.vault].aar/a)+l*a)/a}}),null},[t,n,m,x,f,p]),e}},66949:function(e,t,n){n.d(t,{a:function(){return useValutsLeverageRatio},z:function(){return useVaultLeverageRatio}});var a=n(72009),s=n(81628),l=n(47868),r=n(2265),i=n(14389),o=n(23862);function useVaultLeverageRatio(e){let{vaultsState:t,stableVaultsState:n}=(0,r.useContext)(l.g),a=t[(null==e?void 0:e.vault)||"null"],i=n[(null==e?void 0:e.vault)||"null"],o=(null==e?void 0:e.isStable)?(0,s.pF)(i.aar,i.AARDecimals):(0,s.pF)(a.aar,a.AARDecimals);return Math.max(0,1+1/(o-1))}function useValutsLeverageRatio(){let{vaultsState:e,stableVaultsState:t}=(0,r.useContext)(l.g),n=(0,i.p)(),c=a.iK[n],u=(0,o.b)(()=>new Proxy({},{get:function(e,t){return t in e&&null!==e[t]&&void 0!==e[t]?e[t]:0}}));return c.forEach(n=>{let a=e[(null==n?void 0:n.vault)||"null"],l=t[(null==n?void 0:n.vault)||"null"],r=(null==n?void 0:n.isStable)?(0,s.pF)(l.aar,l.AARDecimals):(0,s.pF)(a.aar,a.AARDecimals);u[n.vault]=Math.max(0,1+1/(r-1))}),u}},43003:function(e,t,n){n.d(t,{R:function(){return useWrapContractWrite}});var a=n(81628),s=n(2265),l=n(71424),r=n(41736),i=n(93195),o=n(54415);function useWrapContractWrite(e,t){let{autoToast:n=!0,onSuccess:c}=t||{},[u,d]=(0,s.useState)(!1),[x,p]=(0,s.useState)(!1),m=(0,r.t)(),{data:f}=(0,i.p)(),v=!m||!f||!f.account||u||!e,b=(0,o.hp)(),write=async()=>{if(!v){d(!0),p(!1);try{let t="function"==typeof e?await e():e,{request:a}=await m.simulateContract({account:f.account,...t}),s=await f.writeContract(a),r=await m.waitForTransactionReceipt({hash:s});if("success"!==r.status)throw"Transaction reverted";p(!0),c&&c(),n&&l.A.success("Transaction success"),b.update()}catch(e){n&&l.A.error((0,a.az)(e))}d(!1)}};return{write,isDisabled:v,isLoading:u,isSuccess:x}}}}]);