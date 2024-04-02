(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1399],{26295:function(e,s,a){Promise.resolve().then(a.bind(a,18801))},18801:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return Vaults}});var t=a(57437),l=a(8332),n=a(63040),i=a(72009),d=a(14389),c=a(55139),o=a(2890),r=a.n(o),x=a(16691),m=a.n(x),u=a(2265),b=a(76036),h=a(80547),v=a(64020),f=a(73479),p=a(8580),j=a(54415),g=a(81628),N=a(68497),S=a(20373),w=a(34522),k=a(41697),y=a(99888),A=a(35769),T=a(79352);let B="$USB";function VaultCard(e){let{vc:s}=e,{balances:a,prices:l,vaultsMode:n}=(0,u.useContext)(N.g),c=(0,d.p)(),o=i.O6[c],r=n[s.vault],[x,m]=(0,u.useState)("mint"),[C,U]=(0,u.useMemo)(()=>{let e="mint"==x;return 3==r?["Adjustment Model--High AAR",e?"Minting ".concat(B," alone is feasible"):"Redeeming ".concat(s.xTokenSymbol," alone is feasible")]:2==r?["Adjustment Model--Low AAR",e?"Minting ".concat(s.xTokenSymbol," alone is feasible"):"Redeeming ".concat(B," alone is feasible")]:["Stability Model",e?"".concat(B," and ").concat(s.xTokenSymbol," will be minted in fixed ratio"):"Redemption require a fixed ration of ".concat(B," and ").concat(s.xTokenSymbol)]},[r,s,x]),[M,W]=(0,u.useState)(""),[P,V]=(0,u.useState)(""),q=(0,g.ok)(l,s.assetTokenAddress),R=(0,g.ok)(l,s.xTokenAddress),E=a[s.assetTokenAddress],F=a[i.O1[c]],_=a[s.xTokenAddress],[{usbAmount:z,xAmount:D,redeemActive:O,redeemFocus:L},Z]=(0,y.Z)({usbAmount:"",xAmount:"",redeemActive:"",redeemFocus:"USB"}),Y=(0,u.useMemo)(()=>({contracts:[{vc:s,abi:f.Wn,address:o,functionName:"calcMintPairs",args:[s.vault,(0,g.su)(M||"0")]},{vc:s,abi:f.Wn,address:o,functionName:"calcMintUsbAboveAARU",args:[s.vault,(0,g.su)(M||"0")]},{vc:s,abi:f.Wn,address:o,functionName:"calcMintMarginTokensBelowAARS",args:[s.vault,(0,g.su)(M||"0")]}],watch:!0,enabled:"mint"==x}),[s,M,x]),{data:[I,H,X]=[void 0,void 0,void 0]}=(0,j.uX)(Y),G=(0,g.ok)(I,["result",1]),K=(0,g.ok)(I,["result",2]),$=(0,g.ok)(H,["result",1]),J=(0,g.ok)(X,["result",1]),{data:[Q,ee]=[void 0,void 0]}=(0,j.uX)({contracts:[{vc:s,abi:f.Wn,address:o,functionName:"calcPairdMarginTokenAmount",args:[s.vault,(0,g.su)(z||"0")]},{vc:s,abi:f.Wn,address:o,functionName:"calcPairedUsbAmount",args:[s.vault,(0,g.su)(D||"0")]}],watch:!0,enabled:"redeem"==x}),{data:[es,ea]=[void 0,void 0]}=(0,j.uX)({contracts:[{vc:s,abi:f.Wn,address:o,functionName:"calcRedeemByMarginTokenAboveAARU",args:[s.vault,(0,g.su)(D||"0")]},{vc:s,abi:f.Wn,address:o,functionName:"calcRedeemByUsbBelowAARS",args:[s.vault,(0,g.su)(z||"0")]}],watch:!0,enabled:"redeem"==x}),et=(0,g.ok)(Q,["result"]),el=(0,g.ok)(ee,["result"]),en=(0,g.ok)(es,["result",1]),ei=(0,g.ok)(ea,["result",1]),ed=O==s.xTokenSymbol,ec="USB"==O,eo=(0,u.useMemo)(()=>{let e={vc:s,abi:f.WW,address:s.vault,args:[(0,g.su)(M)],value:s.assetTokenAddress==i.K8?(0,g.su)(M):0n,functionName:"mintPairs"};return"USB"==P&&(e.functionName="mintUsbAboveAARU"),P==s.xTokenSymbol&&(e.functionName="mintMarginTokensBelowAARS"),e},[r,P,M,s]),er=P==s.xTokenSymbol?0n:"USB"===P?$:G,ex="USB"==P?0n:P===s.xTokenSymbol?J:K,em=ed?"0":"USB"==L?z:(0,T.d)(el),eu=ec?"0":L==s.xTokenSymbol?D:(0,T.d)(et),eb=(0,u.useMemo)(()=>({vc:s,watch:!0,abi:f.Wn,address:o,functionName:"calcPairedRedeemAssetAmount",args:[s.vault,(0,g.su)(eu||"0")]}),[s,eu]),{data:eh}=(0,j.D2)(eb),ev=ed?en:ec?ei:(0,g.ok)(eh,[1]),ef=(0,u.useMemo)(()=>{let e={vc:s,abi:f.WW,address:s.vault,functionName:"USB"==O?"redeemByPairsWithExpectedUsbAmount":"redeemByPairsWithExpectedMarginTokenAmount",args:"USB"==O?[(0,g.su)(em)]:[(0,g.su)(eu)]};return O==s.xTokenSymbol&&(e.functionName="redeemByMarginTokenAboveAARU",e.args=[(0,g.su)(eu)]),"USB"==O&&(e.functionName="redeemByUsbBelowAARS",e.args=[(0,g.su)(em)]),e},[r,O,em,eu,s]);return(0,t.jsxs)("div",{className:(0,A.m)("card relative h-[460px]",r>1?"!bg-violet-500/10":""),children:[(0,t.jsx)("div",{className:"page-sub text-center",children:"Advanced Panel"}),(0,t.jsx)("div",{className:"absolute top-[50px] right-6 flex flex-col items-end z-10",children:(0,t.jsxs)("div",{className:(0,A.m)("text-sm leading-5 flex items-center gap-1.5 rounded-full w-fit"),children:[(0,t.jsx)("div",{className:(0,A.m)("w-3 h-3 rounded-full","Stability Model"==C?"bg-green-500":"bg-red-500")}),(0,t.jsx)(v.C,{node:(0,t.jsx)("div",{className:(0,A.m)("Stability Model"==C?"text-green-500":"text-red-500"),children:C}),children:U})]})}),(0,t.jsx)("div",{className:"relative flex items-center justify-between",children:(0,t.jsxs)(w.fC,{defaultValue:"mint",className:"w-full",onValueChange:e=>m(e),children:[(0,t.jsxs)(w.aV,{className:"bg-slate-100 p-1 w-fit rounded-md",children:[(0,t.jsx)(w.xz,{className:'rounded-[3px] text-sm py-1.5 px-3 text-slate-500 font-medium data-[state="active"]:bg-white data-[state="active"]:text-slate-900',value:"mint",children:"Mint"}),(0,t.jsx)(w.xz,{className:'rounded-[3px] text-sm py-1.5 px-3 text-slate-500 font-medium data-[state="active"]:bg-white data-[state="active"]:text-slate-900',value:"redeem",children:"Redeem"})]}),(0,t.jsx)(w.VY,{value:"mint",className:"flex flex-col gap-6",children:(0,t.jsxs)("div",{className:"mt-4",children:[(0,t.jsx)(h.W,{asset:s.assetTokenSymbol,exchange:(0,S.dq)(q*(0,g.su)(M)/p.Pq),balance:E,amount:M,setAmount:W}),(0,t.jsx)("div",{className:"w-8 h-8 mx-auto flex items-center justify-center text-slate-400 rounded-full border border-slate-200 mb-6",children:(0,t.jsx)(k.gPZ,{})}),(0,t.jsxs)("div",{className:"flex flex-col gap-8",children:[(0,t.jsx)(h.W,{amount:(0,S.ZM)(er),onClick:()=>{V(3==r?"USB":"")},asset:"USB",exchange:(0,S.dq)(er),readonly:!0,disable:r<=1,selected:"USB"===P}),(0,t.jsx)(h.W,{amount:(0,S.ZM)(ex),onClick:()=>{V(2==r?s.xTokenSymbol:"")},asset:s.xTokenSymbol,exchange:(0,S.dq)(R*ex/p.Pq),readonly:!0,disable:r<=1,selected:P===s.xTokenSymbol})]}),(0,t.jsx)(b.v,{tx:"Mint",disabled:s.disableIn||0n==(0,g.su)(M)||(0,g.su)(M)>E,onTxSuccess:()=>{W("")},config:eo,approves:{[s.assetTokenAddress]:(0,g.su)(M)},spender:s.vault})]})}),(0,t.jsx)(w.VY,{value:"redeem",className:"flex flex-col gap-6",children:(0,t.jsxs)("div",{className:"mt-4",children:[(0,t.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,t.jsx)(h.W,{amount:em,setAmount:e=>Z({usbAmount:e}),balance:F,onClick:()=>{Z({redeemActive:2==r?"USB":"",redeemFocus:"USB"})},asset:"USB",exchange:(0,S.dq)((0,g.su)(em)),readonly:O==s.xTokenSymbol,selected:"USB"===O}),(0,t.jsx)(h.W,{amount:eu,setAmount:e=>Z({xAmount:e}),asset:s.xTokenSymbol,onClick:()=>{Z({redeemActive:3==r?s.xTokenSymbol:"",redeemFocus:s.xTokenSymbol})},exchange:(0,S.dq)((0,g.su)(eu)*R/p.Pq),balance:_,readonly:"USB"==O,selected:O===s.xTokenSymbol})]}),(0,t.jsxs)("div",{className:"flex w-full items-center mb-6",children:[(0,t.jsx)("div",{className:"flex-1"}),(0,t.jsx)("div",{className:"w-8 h-8 mx-auto flex items-center justify-center text-slate-400 rounded-full border border-slate-200 ",children:(0,t.jsx)(k.gPZ,{})}),(0,t.jsx)("div",{className:"flex-1 text-sm text-slate-400 text-end whitespace-nowrap",children:"Redemption Fee: 0.5%"})]}),(0,t.jsx)("div",{className:"w-full text-end"}),(0,t.jsx)(h.W,{asset:s.assetTokenSymbol,amount:(0,T.d)(ev),exchange:(0,S.dq)(q*ev/p.Pq),readonly:!0}),(0,t.jsx)(b.v,{tx:"Redeem",config:ef,disabled:ec&&0n==(0,g.su)(em)||ed&&0n==(0,g.su)(eu)||!ec&&!ed&&(0n==(0,g.su)(em)||0n==(0,g.su)(eu))||(0,g.su)(em)>F||(0,g.su)(eu)>_,onTxSuccess:()=>{Z({usbAmount:"",xAmount:""})},spender:s.vault})]})})]})})]})}var C=a(91056),U=a(66949),M=a(28712),W=a(55414),P=a(57042),V=a(37238),q=a(56926),R=a(34776),E=a(51549);function StableVaultCard(e){let{vc:s}=e,{balances:a,prices:l,stableVaultsState:n}=(0,u.useContext)(N.g),c=(0,d.p)(),o=i.O6[c],[r,x]=(0,u.useState)("mint"),[m,B]=(0,u.useState)(""),[C,U]=(0,u.useState)(""),M=n[s.vault],W=M.aar>0&&M.aar<M.AARS,P=l[s.assetTokenAddress],V=l[s.xTokenAddress],q=a[s.assetTokenAddress],R=a[i.O1[c]],E=a[s.xTokenAddress],[{usbAmount:F,xAmount:_,redeemActive:z,redeemFocus:D},O]=(0,y.Z)({usbAmount:"",xAmount:"",redeemActive:"",redeemFocus:"USB"}),L=(0,u.useMemo)(()=>({contracts:[{vc:s,abi:f.Wn,address:o,functionName:"calcMintPairsFromStableVault",args:[s.vault,(0,g.su)(m||"0")]},{vc:s,abi:f.Wn,address:o,functionName:"calcMintUsbFromStableVault",args:[s.vault,(0,g.su)(m||"0")]},{vc:s,abi:f.Wn,address:o,functionName:"calcMintMarginTokensFromStableVault",args:[s.vault,(0,g.su)(m||"0")]}],watch:!0,enabled:"mint"==r}),[s,m,r]),{data:[Z,Y,I]=[void 0,void 0,void 0]}=(0,j.uX)(L),H=(0,g.ok)(Z,["result",1]),X=(0,g.ok)(Z,["result",2]),G=(0,g.ok)(Y,["result",1]),K=(0,g.ok)(I,["result",1]),{data:[$,J]=[void 0,void 0]}=(0,j.uX)({contracts:[{vc:s,abi:f.Wn,address:o,functionName:"calcPairdMarginTokenAmountForStableVault",args:[s.vault,(0,g.su)(F||"0")]},{vc:s,abi:f.Wn,address:o,functionName:"calcPairedUsbAmountForStableVault",args:[s.vault,(0,g.su)(_||"0")]}],watch:!0,enabled:"redeem"==r}),{data:[Q,ee]=[void 0,void 0]}=(0,j.uX)({contracts:[{vc:s,abi:f.Wn,address:o,functionName:"calcRedeemByMarginTokensFromStableVault",args:[s.vault,i.e_[c],(0,g.su)(_||"0")]},{vc:s,abi:f.Wn,address:o,functionName:"calcRedeemByUsbFromStableVault",args:[s.vault,i.e_[c],(0,g.su)(F||"0")]}],watch:!0,enabled:"redeem"==r}),es=(0,g.ok)($,["result"]),ea=(0,g.ok)(J,["result"]),et=(0,g.ok)(Q,["result",1]),el=(0,g.ok)(ee,["result",1]),en=z==s.xTokenSymbol,ei="USB"==z,ed=(0,u.useMemo)(()=>{let e={vc:s,abi:f.S4,address:s.vault,args:[(0,g.su)(m)],value:s.assetTokenAddress==i.K8?(0,g.su)(m):0n,functionName:"mintPairs"};return"USB"==C&&(e.functionName="mintUsb"),C==s.xTokenSymbol&&(e.functionName="mintMarginTokens"),e},[C,m,s]),ec=C==s.xTokenSymbol?0n:"USB"===C?G:H,eo="USB"==C?0n:C===s.xTokenSymbol?K:X,er=en?"0":"USB"==D?F:(0,T.d)(ea),ex=ei?"0":D==s.xTokenSymbol?_:(0,T.d)(es),em=(0,u.useMemo)(()=>({vc:s,watch:!0,abi:f.Wn,address:o,functionName:"calcRedeemByPairsAssetAmountForStableVault",args:[s.vault,i.e_[c],(0,g.su)(ex||"0")]}),[s,ex]),{data:eu}=(0,j.D2)(em),eb=en?et:ei?el:(0,g.ok)(eu,[1]),eh=(0,u.useMemo)(()=>{let e={vc:s,abi:f.S4,address:s.vault,functionName:"USB"==z?"redeemByPairsWithExpectedUsbAmount":"redeemByPairsWithExpectedMarginTokenAmount",args:"USB"==z?[(0,g.su)(er)]:[(0,g.su)(ex)]};return z==s.xTokenSymbol&&(e.functionName="redeemByMarginTokens",e.args=[(0,g.su)(ex)]),"USB"==z&&(e.functionName="redeemByUsb",e.args=[(0,g.su)(er)]),e},[z,er,ex,s]);return(0,t.jsxs)("div",{className:(0,A.m)("card relative h-[460px]"),children:[(0,t.jsx)("div",{className:"page-sub text-center",children:"Advanced Panel"}),(0,t.jsx)("div",{className:"absolute top-[50px] right-6 flex flex-col items-end z-10",children:(0,t.jsx)(v.C,{node:(0,t.jsxs)("div",{className:(0,A.m)("text-sm leading-5 flex items-center gap-1.5 rounded-full w-fit"),children:[(0,t.jsx)("div",{className:(0,A.m)("w-3 h-3 rounded-full",W?"bg-red-500":"bg-green-500")}),(0,t.jsx)("div",{className:(0,A.m)(W?"text-red-500":"text-green-500"),children:W?"Adjustment Model":"Stability Model"})]}),children:W?"mint"==r?"Minting USB alone is not feasible":"Redeeming USDBx alone is not feasible":""})}),(0,t.jsx)("div",{className:"relative flex items-center justify-between",children:(0,t.jsxs)(w.fC,{defaultValue:"mint",className:"w-full",onValueChange:e=>x(e),children:[(0,t.jsxs)(w.aV,{className:"bg-slate-100 p-1 w-fit rounded-md",children:[(0,t.jsx)(w.xz,{className:'rounded-[3px] text-sm py-1.5 px-3 text-slate-500 font-medium data-[state="active"]:bg-white data-[state="active"]:text-slate-900',value:"mint",children:"Mint"}),(0,t.jsx)(w.xz,{className:'rounded-[3px] text-sm py-1.5 px-3 text-slate-500 font-medium data-[state="active"]:bg-white data-[state="active"]:text-slate-900',value:"redeem",children:"Redeem"})]}),(0,t.jsx)(w.VY,{value:"mint",className:"flex flex-col gap-6",children:(0,t.jsxs)("div",{className:"mt-4",children:[(0,t.jsx)(h.W,{asset:s.assetTokenSymbol,exchange:(0,S.dq)(P*(0,g.su)(m)/p.Pq),balance:q,amount:m,setAmount:B}),(0,t.jsx)("div",{className:"w-8 h-8 mx-auto flex items-center justify-center text-slate-400 rounded-full border border-slate-200 mb-6",children:(0,t.jsx)(k.gPZ,{})}),(0,t.jsxs)("div",{className:"flex flex-col gap-8",children:[(0,t.jsx)(h.W,{amount:(0,S.ZM)(ec),onClick:()=>{U(W?"":"USB"==C?"":"USB")},asset:"USB",exchange:(0,S.dq)(ec),readonly:!0,selected:"USB"===C}),(0,t.jsx)(h.W,{amount:(0,S.ZM)(eo),onClick:()=>{U(C==s.xTokenSymbol?"":s.xTokenSymbol)},asset:s.xTokenSymbol,exchange:(0,S.dq)(V*eo/p.Pq),readonly:!0,selected:C===s.xTokenSymbol})]}),(0,t.jsx)(b.v,{tx:"Mint",disabled:s.disableIn||0n==(0,g.su)(m)||(0,g.su)(m)>q,onTxSuccess:()=>{B("")},config:ed,approves:{[s.assetTokenAddress]:(0,g.su)(m)},spender:s.vault})]})}),(0,t.jsx)(w.VY,{value:"redeem",className:"flex flex-col gap-6",children:(0,t.jsxs)("div",{className:"mt-4",children:[(0,t.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,t.jsx)(h.W,{amount:er,setAmount:e=>O({usbAmount:e}),balance:R,onClick:()=>{O({redeemActive:"USB"==z?"":"USB",redeemFocus:"USB"})},asset:"USB",exchange:(0,S.dq)((0,g.su)(er)),readonly:z==s.xTokenSymbol,selected:"USB"===z}),(0,t.jsx)(h.W,{amount:ex,setAmount:e=>O({xAmount:e}),asset:s.xTokenSymbol,onClick:()=>{O({redeemActive:W?"":z==s.xTokenSymbol?"":s.xTokenSymbol,redeemFocus:s.xTokenSymbol})},exchange:(0,S.dq)((0,g.su)(ex)*V/p.Pq),balance:E,readonly:"USB"==z,selected:z===s.xTokenSymbol})]}),(0,t.jsxs)("div",{className:"flex w-full items-center mb-6",children:[(0,t.jsx)("div",{className:"flex-1"}),(0,t.jsx)("div",{className:"w-8 h-8 mx-auto flex items-center justify-center text-slate-400 rounded-full border border-slate-200 ",children:(0,t.jsx)(k.gPZ,{})}),(0,t.jsx)("div",{className:"flex-1 text-sm text-slate-400 text-end whitespace-nowrap",children:"Redemption Fee: 0.5%"})]}),(0,t.jsx)("div",{className:"w-full text-end"}),(0,t.jsx)(h.W,{asset:s.assetTokenSymbol,amount:(0,T.d)(eb),exchange:(0,S.dq)(P*eb/p.Pq),readonly:!0}),(0,t.jsx)(b.v,{tx:"Redeem",config:eh,disabled:ei&&0n==(0,g.su)(er)||en&&0n==(0,g.su)(ex)||!ei&&!en&&(0n==(0,g.su)(er)||0n==(0,g.su)(ex))||(0,g.su)(er)>R||(0,g.su)(ex)>E,onTxSuccess:()=>{O({usbAmount:"",xAmount:""})},spender:s.vault})]})})]})})]})}var F=a(58910);let _=(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"8",viewBox:"0 0 14 8",fill:"none",children:(0,t.jsx)("path",{d:"M6.50322 7.50486L6.99579 8L13.7977 1.19284C14.0674 0.91867 14.0674 0.478772 13.7977 0.20665C13.6669 0.0736573 13.489 0 13.3051 0C13.1191 0 12.9433 0.0736573 12.8125 0.204604L6.99783 6.02353L1.18926 0.204604C1.05845 0.0736573 0.880637 0 0.696692 0C0.510703 0 0.334934 0.0736573 0.204129 0.204604C-0.0677012 0.478772 -0.0677012 0.91867 0.202085 1.19284L6.47665 7.47622L6.50322 7.50486Z",fill:"#6466F1"})}),z=(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"8",viewBox:"0 0 14 8",fill:"none",children:(0,t.jsx)("path",{d:"M7.49678 0.495141L7.00421 0L0.202339 6.80716C-0.0674467 7.08133 -0.0674467 7.52123 0.202339 7.79335C0.333144 7.92634 0.510958 8 0.694902 8C0.880891 8 1.05666 7.92634 1.18747 7.7954L7.00217 1.97647L12.8107 7.7954C12.9415 7.92634 13.1194 8 13.3033 8C13.4893 8 13.6651 7.92634 13.7959 7.7954C14.0677 7.52123 14.0677 7.08133 13.7979 6.80716L7.52335 0.523785L7.49678 0.495141Z",fill:"#6466F1"})}),D=(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:(0,t.jsx)("circle",{cx:"7",cy:"7",r:"5",fill:"white",stroke:"#00DE9C",strokeWidth:"4"})}),O=(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:(0,t.jsx)("circle",{cx:"7",cy:"7",r:"5",fill:"white",stroke:"#FF3D3D",strokeWidth:"4"})}),L=(0,t.jsx)("div",{className:"mr-[10px]",children:(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"5",height:"5",viewBox:"0 0 5 5",fill:"none",children:(0,t.jsx)("circle",{cx:"2.5",cy:"2.5",r:"2.5",fill:"#64748B"})})});function VaultSimple(e){let{vc:s}=e,{balances:a,prices:l,vaultsMode:n,stableVaultsState:c}=(0,u.useContext)(N.g),o=(0,g.ok)(l,s.assetTokenAddress),r=n[s.vault],x=s.assetTokenSymbol,[m,k]=(0,u.useState)("deposit"),[y,A]=(0,u.useState)(""),T=(0,g.su)(y),B=s.xTokenSymbol,C=a[s.assetTokenAddress],U=c[s.vault],[W,P]=(0,u.useState)(""),V=(0,d.p)(),{data:q}=(0,j.D2)({watch:!0,vc:s,abi:f.Wn,address:i.O6[V],functionName:s.isStable?"calcMintPairsFromStableVault":"calcMintPairs",args:[s.vault,(0,g.su)("1")]}),{data:R}=(0,j.D2)({abi:f.Wn,address:i.O6[V],functionName:"calcMintMarginTokensFromStableVault",args:[s.vault,(0,g.su)("1")],enabled:s.isStable,watch:!0}),_=s.isStable&&0n==U.M_USDCx?0n:(0,g.ok)(q,[1]),z=s.isStable&&0n==U.M_USDCx?(0,g.ok)(R,[1]):(0,g.ok)(q,[2]),D=a[i.O1[V]],O=a[s.xTokenAddress],L=(0,g.NA)([z>0n?O*p.Pq/z:0n,_>0n?D*p.Pq/_:0n]),Z=(0,g.su)(W),Y=(0,u.useMemo)(()=>{let e={vc:s,abi:s.isStable?f.S4:f.WW,address:s.vault,functionName:"redeemByPairsWithExpectedMarginTokenAmount",args:[Z*z/p.Pq]};return e},[r,Z,z,s]);return(0,t.jsx)("div",{className:"w-full relative flex items-center justify-between",children:(0,t.jsxs)("div",{className:"bg-white relative border border-1 border-[#E4E4E7] p-[20px] pt-0 rounded-[16px] w-full",children:[(0,t.jsxs)(M.fC,{children:[(0,t.jsx)(M.xz,{children:(0,t.jsxs)("div",{className:"absolute w-fit h-[21px] right-[20px] top-[30px] flex items-center gap-1 cursor-pointer",children:[(0,t.jsx)(F.b9P,{className:"text-indigo-500 text-xl"}),(0,t.jsx)(v.C,{inFlex:!0,className:" text-slate-500",children:s.isStable?"The advanced panel allows for the individual Minting or Redeeming of USB and ".concat(s.xTokenSymbol,"."):"More flexible operations can be conducted using the advanced panel in adjustment mode."})]})}),(0,t.jsxs)(M.h_,{children:[(0,t.jsx)(M.aV,{className:"bg-black/75 fixed inset-0 z-40"}),(0,t.jsx)(M.VY,{className:"fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[640px] -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-2xl z-50",children:s.isStable?(0,t.jsx)(StableVaultCard,{vc:s}):(0,t.jsx)(VaultCard,{vc:s})})]})]}),(0,t.jsxs)(w.fC,{defaultValue:"deposit",className:"w-full",onValueChange:e=>k(e),children:[(0,t.jsxs)(w.aV,{className:"bg-slate-100 p-1 w-fit rounded-md",children:[(0,t.jsx)(w.xz,{className:'rounded-[3px] text-sm py-1.5 px-3 text-slate-500 font-medium data-[state="active"]:bg-white data-[state="active"]:text-slate-900',value:"deposit",children:"Deposit"}),(0,t.jsx)(w.xz,{className:'rounded-[3px] text-sm py-1.5 px-3 text-slate-500 font-medium data-[state="active"]:bg-white data-[state="active"]:text-slate-900',value:"withraw",children:"Withdraw"})]}),(0,t.jsx)(w.VY,{value:"deposit",className:"flex flex-col gap-6",children:(0,t.jsxs)("div",{className:"mt-4",children:[(0,t.jsx)(h.W,{asset:x,exchange:(0,S.dq)(o*T/p.Pq),balance:C,amount:y,setAmount:A}),(0,t.jsxs)("div",{className:"text-xs text-[#64748B] leading-[12px] flex items-center pl-[5px] mt-[6px]",children:["1 ",(0,t.jsx)(E.c,{className:"mx-1",symbol:x,size:12}),x," = ",(0,S.dq)(z)," ",(0,t.jsx)(E.c,{className:"mx-1",symbol:B,size:12})," ",x,"x +",(0,S.dq)(_)," ",(0,t.jsx)(E.c,{className:"mx-1",symbol:"USB",size:12})," USB"]}),(0,t.jsx)(b.v,{tx:"Deposit",className:s.isStable?"":"md:mt-11",disabled:s.disableIn||T<=0n||T>C,onTxSuccess:()=>{A("")},config:{abi:f.S4,address:s.vault,args:[T],value:s.assetTokenAddress==i.K8?T:0n,functionName:s.isStable&&0n==U.M_USDCx?"mintMarginTokens":"mintPairs"},approves:{[s.assetTokenAddress]:T},spender:s.vault})]})}),(0,t.jsx)(w.VY,{value:"withraw",className:"flex flex-col gap-6 h-fit",children:(0,t.jsxs)("div",{className:"mt-4",children:[(0,t.jsx)("div",{className:"flex flex-col gap-2",children:(0,t.jsx)(h.W,{amount:W,setAmount:P,balance:L,balanceTit:"Redeemable amount",asset:x,exchange:(0,S.dq)(o*Z/p.Pq)})}),(0,t.jsxs)("div",{className:"text-xs text-[#64748B] leading-[12px] md:flex md:items-center md:justify-between pl-[5px] mt-[6px]",children:[(0,t.jsxs)("span",{className:"flex",children:[B," Balance：",(0,t.jsx)(E.c,{className:"mx-1",symbol:B,size:12})," ",(0,S.dq)(O)]}),(0,t.jsxs)("span",{className:(0,g.cn)("flex relative",{"md:-top-5":!s.isStable}),children:["USB Balance: ",(0,t.jsx)(E.c,{className:"mx-1",symbol:"USB",size:12})," ",(0,S.dq)(D)]})]}),!s.isStable&&(0,t.jsxs)("div",{className:"mt-2 text-center text-xs text-slate-500 relative md:-top-5 md:text-right ",children:["Maintaining USB balance greater than your Margin",(0,t.jsx)("br",{className:"hidden md:block"}),"Loan allows you to redeem your total Open Position"]}),(0,t.jsx)(b.v,{tx:"Withdraw",className:(0,g.cn)({"md:mt-1":!s.isStable}),config:Y,disabled:0n==_||0n==z||Z<=0n||Z>L,onTxSuccess:()=>{console.info("Redeem onSuccess:"),P("")},spender:s.vault})]})})]})]})})}let ExpandUI=e=>{let{onClick:s,isOpen:a}=e;return(0,t.jsx)("div",{className:"flex md:hidden justify-center  items-center py-5",children:(0,t.jsxs)("div",{className:"px-2 py-1 rounded-full border border-solid border-[#6466F1] flex items-center text-xs text-[#6466F1] cursor-pointer ",onClick:s,children:[(0,t.jsx)("span",{className:"mr-[5px]",children:a?"Hide":"Details"}),a?z:_]})})};function VaultCollapse(e){let{vc:s}=e,a=(0,d.p)(),{balances:l,prices:n,vaultsMode:c,vaultsState:o,stableVaultsState:r,vaultsDiscount:x}=(0,u.useContext)(N.g),m=(0,U.z)(s),b=(0,g.ok)(n,s.assetTokenAddress),h=o[s.vault],f=r[s.vault],j=s.isStable?f.M_USDC:h.M_ETH,w=s.isStable?f.M_USDCx:h.M_ETHx,k=s.isStable?f.M_USB_USDC:h.M_USB_ETH,y=(0,S.dq)(j),A=(0,S.dq)(w),T=(0,S.dq)(j*b/p.Pq),B=(0,S.dq)(k),M=s.isStable?(0,g.Rr)(f.aar,f.AARDecimals):(0,g.Rr)(h.aar,h.AARDecimals),P=c[s.vault],F=w>0n?l[s.xTokenAddress]*j/w:0n,Z=w>0n?-(l[s.xTokenAddress]*k)/w:0n,Y=x[s.vault],{address:I}=(0,q.mA)(),[H,X]=(0,u.useState)(!1),G=s.xTokenSymbol,onCollapseChange=()=>{X(!H)},{data:K}=(0,q.py)(),$=(0,u.useRef)(null);return(0,t.jsxs)("div",{className:"border border-solid border-[#E4E4E7] rounded-2xl overflow-hidden bg-white",children:[(0,t.jsxs)("div",{ref:$,className:"w-full flex flex-col gap-5 md:flex-row justify-between items-center bg-white p-4 md:p-10 cursor-pointer",onClick:e=>e.target==$.current&&onCollapseChange(),children:[(0,t.jsxs)("div",{className:"flex flex-col w-full md:flex-row md:w-[85%] gap-4 md:gap-5",children:[(0,t.jsxs)("div",{className:"flex w-full md:w-[10rem] flex-shrink-0",children:[(0,t.jsx)(E.c,{symbol:s.assetTokenSymbol,size:32}),(0,t.jsxs)("div",{className:"ml-[5px] flex flex-col justify-between",children:[(0,t.jsx)("div",{className:"text-black text-sm font-semibold whitespace-nowrap",children:s.assetTokenSymbol}),(0,t.jsxs)("div",{className:"text-[#64748B] text-xs font-medium",children:["$",(0,S.dq)(n[s.assetTokenAddress])]})]})]}),(0,t.jsx)("div",{className:"h-[1px] w-full bg-[#E4E4E7] md:hidden"}),(0,t.jsxs)("div",{className:"grid grid-cols-3 md:grid-cols-6 gap-5 gap-y-[2rem] md:gap-[4rem] border-t-1 border-[#E4E4E7] md:border-0",children:[(0,t.jsxs)("div",{className:"flex flex-col justify-between relative gap-2 md:gap-0",children:[(0,t.jsx)("div",{className:"text-[#64748B] text-xs font-semibold leading-[12px] whitespace-nowrap",children:"Total Deposit"}),(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)(E.c,{symbol:s.assetTokenSymbol,size:14}),(0,t.jsx)("span",{className:"text-black text-[14px] leading-[14px] font-medium ml-[5px]",children:y})]}),(0,t.jsxs)("div",{className:"absolute bottom-[-14px] md:bottom-[-24px] text-[#64748B] text-xs font-semibold leading-[12px]",children:["~$",T]})]}),(0,t.jsxs)("div",{className:"flex flex-col justify-between",children:[(0,t.jsx)("div",{className:"text-[#64748B] text-xs font-semibold leading-[12px] whitespace-nowrap",children:"USB Debt"}),(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)(E.c,{className:"mx-1",symbol:"USB",size:14}),(0,t.jsx)("span",{className:"text-black text-[14px] leading-[14px] font-medium ml-[5px]",children:B})]})]}),(0,t.jsxs)("div",{className:"flex flex-col justify-between",children:[(0,t.jsxs)("div",{className:"text-[#64748B] text-xs font-semibold leading-[12px] whitespace-nowrap",children:[G,(0,t.jsx)(v.C,{children:"This is a margin token, representing open position in the vault."})]}),(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)(E.c,{className:"mx-1",symbol:G,size:14}),(0,t.jsx)("span",{className:"text-black text-[14px] leading-[14px] font-medium ml-[5px]",children:A})]})]}),(0,t.jsxs)("div",{className:"flex flex-col justify-between",children:[(0,t.jsxs)("div",{className:"text-[#64748B] text-xs font-semibold leading-[12px] whitespace-nowrap",children:["AAR",(0,t.jsx)(v.C,{children:"Asset Adequacy Ratio"})]}),(0,t.jsx)("div",{className:"flex items-center",children:(0,t.jsx)("span",{className:"text-black text-[14px] leading-[14px] font-medium",children:M})})]}),(0,t.jsxs)("div",{className:"flex flex-col justify-between",children:[(0,t.jsx)("div",{className:"text-[#64748B] text-xs font-semibold leading-[12px] whitespace-nowrap",children:"Status"}),(0,t.jsx)("div",{className:"flex items-center",children:(0,t.jsx)("span",{className:"text-black text-[14px] leading-[14px] font-medium",children:(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)("div",{className:"mr-[10px]",children:P<=1?D:O}),P<=1?"Stability":"Adjustment"]})})})]}),(0,t.jsxs)("div",{className:"flex flex-col justify-between",children:[(0,t.jsx)("div",{className:"text-[#64748B] text-xs font-semibold leading-[12px] whitespace-nowrap",children:"Discount Offer"}),(0,t.jsx)("div",{className:"flex items-center",children:(0,t.jsx)("span",{className:"text-black text-[14px] leading-[14px] font-medium",children:Y?(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)("div",{className:"mr-[10px]",children:O}),"Yes"]}):(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)("div",{className:"mr-[10px]",children:D}),"No"]})})})]})]})]}),(0,t.jsxs)("div",{className:"items-center text-xs text-[#6466F1] cursor-pointer hidden md:flex",onClick:onCollapseChange,children:[(0,t.jsx)("span",{className:"mr-[5px]",children:H?"Hide":"Details"}),H?z:_]})]}),(0,t.jsx)(V.Collapse,{isOpened:H,className:"ease-linear",children:(0,t.jsxs)("div",{className:"w-full rounded-b-[16px] bg-[#F2F5F9] p-4 md:p-6",children:[(0,t.jsxs)("div",{className:"w-full grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,t.jsxs)("div",{className:"hidden md:flex",children:[(0,t.jsx)("div",{className:"md:h-full mb-5 md:mb-0 flex items-center",children:(0,t.jsxs)("div",{className:"flex mr-[55px]",children:[(0,t.jsx)(E.c,{symbol:s.xTokenSymbol,size:32,className:"shrink-0"}),(0,t.jsxs)("div",{className:"ml-[5px] flex flex-col justify-between",children:[(0,t.jsx)("div",{className:"text-black text-sm font-semibold",children:G}),(0,t.jsxs)("div",{className:"text-[#64748B] text-xs font-medium leading-[14px]",children:["$",(0,S.dq)(n[s.xTokenAddress])]})]})]})}),(0,t.jsxs)("div",{className:"w-full min-h-[108px] flex flex-col justify-center",children:[I&&!s.isStable&&(0,t.jsxs)("div",{className:"h-[84px] w-fit min-w-[220px] self-end p-[20px] shrink-0 text-[#64748B] text-xs font-medium leading-[12px] bg-white rounded-l-2xl rounded-t-2xl mb-[10px] whitespace-nowrap",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between mb-[16px] gap-5",children:[(0,t.jsx)("div",{children:"Open Position"}),(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)(E.c,{className:"mr-1",symbol:s.assetTokenSymbol,size:12}),(0,S.dq)(F)]})]}),(0,t.jsxs)("div",{className:"flex items-center justify-between mb-[16px] gap-5",children:[(0,t.jsxs)("div",{children:["Margin Loan",(0,t.jsxs)(v.C,{children:["Repay your margin loan to redeem ",s.assetTokenSymbol," corresponding to your open position."]})]}),(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)(E.c,{className:"mr-1",symbol:"USB",size:12}),(0,S.dq)(Z)]})]})]}),(0,t.jsxs)("div",{className:"text-[#64748B] w-fit text-xs font-medium leading-[12px] bg-white px-[30px] py-[23px] rounded-r-2xl rounded-b-2xl",children:[(0,t.jsxs)("div",{className:"flex items-center mb-[16px]",children:[L,m.toFixed(2),"x"," ",(0,C.WA)()&&s.isStable?"Blast Native Yield":"Leveraged long on ".concat(s.assetTokenSymbol)]}),(0,t.jsxs)("div",{className:"flex items-center mb-[16px] cursor-pointer",onClick:()=>{s&&(null==K||K.watchAsset({type:"ERC20",options:{address:s.xTokenAddress,symbol:s.xTokenSymbol,decimals:18}}).catch(g.S3))},children:[L,"Add ",s.xTokenSymbol," to wallet"]}),(0,t.jsxs)("div",{className:"flex items-center mb-[16px] cursor-pointer",onClick:()=>{null==K||K.watchAsset({type:"ERC20",options:{address:i.O1[a],symbol:"USB",decimals:18}}).catch(g.S3)},children:[L,"Add USB to wallet"]}),(0,t.jsxs)("div",{className:"flex items-center cursor-pointer",onClick:()=>{var e,t;let l=C.Af.find(e=>e.id==a);l&&s&&open("".concat(null===(t=l.blockExplorers)||void 0===t?void 0:null===(e=t.default)||void 0===e?void 0:e.url,"/address/").concat(s.vault),"_blank")},children:[L,"View contract"]})]})]})]}),(0,t.jsx)("div",{className:"w-full  flex items-center justify-center",children:I&&s&&42==s.vault.length?(0,t.jsx)(VaultSimple,{vc:s}):s&&42==s.vault.length?(0,t.jsx)(R.Z,{}):(0,t.jsx)(W.Z,{className:"rounded",children:"Comming soon"})})]}),(0,t.jsx)(ExpandUI,{onClick:onCollapseChange,isOpen:H})]})}),!H&&(0,t.jsx)(ExpandUI,{onClick:onCollapseChange,isOpen:H})]})}function GroupVaultCollapse(e){let{vcs:s}=e,[a,l]=(0,u.useState)(s[s.length-1]);return a?1==s.length?(0,t.jsx)(VaultCollapse,{vc:s[0]}):(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)(VaultCollapse,{vc:a}),(0,t.jsx)("div",{className:"absolute z-10 right-[50px] top-0 flex text-sm",children:s.map((e,s)=>(0,t.jsx)("div",{className:(0,P.Z)("cursor-pointer rounded-b-full border border-blue-500 px-1 py-1",{"bg-white text-black":a!==e,"bg-blue-500 text-white":a===e}),onClick:()=>l(e),children:"V".concat(s+1)},"gvc_"+s))})]}):null}function StrongSpan(e){let{children:s}=e;return(0,t.jsx)("span",{className:"font-extrabold",children:s})}function Vaults(){let e=(0,d.p)(),s=i.iK[e],a=(0,u.useMemo)(()=>Object.values(r().groupBy(s,"assetTokenSymbol")),[s]);return(0,t.jsxs)("div",{className:"w-full max-w-screen-xl px-4 mx-auto md:pb-8",children:[(0,t.jsx)(n.a,{}),(0,t.jsx)("h2",{className:"page-title",children:"Vaults"}),(0,t.jsxs)("div",{className:"w-full mt-2 mb-3 md:mt-4 md:mb-6 flex text-[24px] md:text-[14px] text-[#64748B] font-medium leading-[24px] md:leading-[14px]",children:[(0,t.jsx)("div",{className:"min-w-[21px] mt-[5px]",children:(0,t.jsx)(m(),{width:16,height:14,src:"./vector.png",alt:"vector"})}),(0,t.jsxs)("div",{className:"text-sm ml-1 ",children:["Depositing assets into Vaults allows you to earn ",(0,t.jsx)(StrongSpan,{children:"Blast Points"}),","," ",(0,t.jsx)(StrongSpan,{children:"Blast Gold"}),", ",(0,t.jsx)(StrongSpan,{children:"Protocol earnings"}),", and"," ",(0,t.jsx)(StrongSpan,{children:"Wand airdrops"}),"."]})]}),(0,t.jsx)(l.aG,{}),(0,t.jsx)(c.r,{numItemsMd:1,className:"gap-3 mt-4",children:a.map((e,s)=>(0,t.jsx)(GroupVaultCollapse,{vcs:e},"group_vault_item_".concat(s)))})]})}}},function(e){e.O(0,[1866,9472,1787,3033,6169,1582,6682,1439,336,2536,8881,5224,5641,4148,2933,8666,1261,5170,2971,2472,1744],function(){return e(e.s=26295)}),_N_E=e.O()}]);