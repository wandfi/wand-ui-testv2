(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3185],{39473:function(e,t,n){Promise.resolve().then(n.t.bind(n,72853,23)),Promise.resolve().then(n.bind(n,24635)),Promise.resolve().then(n.t.bind(n,38020,23)),Promise.resolve().then(n.t.bind(n,9194,23)),Promise.resolve().then(n.t.bind(n,15615,23)),Promise.resolve().then(n.t.bind(n,8780,23)),Promise.resolve().then(n.t.bind(n,23925,23))},24635:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return PageLayout}});var s=n(57437),i=n(2265),a=n(91056),l=n(32211),r=n(14701),d=n(62989),c=n(75722),o=n(72515),m=n(16009),h=n(55734),u=n(99806),x=n(24450),f=n(64438),p=n(75398),b=n(65534),v=n(13018),g=n(81229),j=n(79116),w=n(68917),N=n(47868),y=n(9798),P=n(29526),k=n(66247),S=n(30315),_=n(35148),C=n(78908),E=n(38038);let F=(0,l.W)({}),I={[a.dm.id]:"blast_testnet_sepolia",[a.mx.id]:"blast",[p.F.id]:"eth_sepolia"},Z=new y.f({uri:"https://api.studio.thegraph.com/query/45897/wand/version/latest",cache:new P.h}),A={batchSize:500,wait:300},D=new C.S;function Providers(e){let{children:t}=e,[n,l]=i.useState();return(i.useEffect(()=>{let e=(0,b.o)({storage:{getItem:e=>window.localStorage.getItem(e),removeItem:e=>window.localStorage.removeItem(e),setItem:(e,t)=>{"wagmi.cache"!==e&&localStorage.setItem(e,t)}}}),t=(0,r.a3)([{groupName:"Recommended",wallets:[d.U,c.P,o.D,m.c,h.X,u.J,x.D,f.b]}],{appName:"Wand",projectId:"b3ff10277f66a6ba31bbb88fb6ea4365"});l((0,v._)({connectors:t,storage:e,chains:a.Af,client:e=>{let{chain:t}=e;return(0,S.e)({chain:t,transport:(0,_.d)("https://rpc.ankr.com/".concat(I[t.id]),{batch:A}),batch:{multicall:A}})}}))},[]),n)?(0,s.jsx)(k.e,{client:Z,children:(0,s.jsx)(g.F,{config:n,children:(0,s.jsx)(E.aH,{client:D,children:(0,s.jsx)(w.QueryParamProvider,{adapter:j.Z,children:(0,s.jsx)(r.pj,{locale:"en-US",modalSize:"compact",theme:F,children:(0,s.jsx)(N.A,{children:t})})})})})}):null}var H=n(8580),z=n(82265),B=n(72009),W=n(14389),L=n(54415),O=n(23291),T=n(57042),q=n(16691),K=n.n(q),R=n(61396),U=n.n(R),J=n(24033),Q=n(41697),V=n(35932),Y=n(1044),G=n(79037),M=n(34776);let X=[{name:"doc",url:H.xb,icon:V.K99},{name:"Twitter",url:H.v,icon:V.vJk},{name:"Discord",url:H.Hj,icon:V.HpO}],$={[p.F.id]:"Ethereum Sepolia",[a.dm.id]:"Blast Sepolia",[a.mx.id]:"Blast"},ee={[p.F.id]:"/ETH.svg",[a.dm.id]:"blast.png",[a.mx.id]:"blast.png"};function Header(){let e=(0,J.usePathname)(),{width:t}=(0,Y.Z)(window.innerWidth,window.innerHeight),n="/"!==e&&t<1024,l=(0,W.p)(),{openChainModal:d}=(0,r.iC)(),c=function(){var e,t;let n=(0,W.p)(),{address:s}=(0,G.m)(),{data:i}=(0,L.D2)({abi:z.WW,address:null===(t=B.iK[n])||void 0===t?void 0:null===(e=t[0])||void 0===e?void 0:e.vault,functionName:"owner",query:{enabled:!!s}});return!!s&&s==i}(),o=function(){var e,t;let n=(0,W.p)(),{address:s}=(0,G.m)(),{data:i}=(0,L.D2)({abi:z.Og,address:null===(t=B.iK[n])||void 0===t?void 0:null===(e=t[0])||void 0===e?void 0:e.assetTokenFeed,functionName:"isTester",args:[s],query:{enabled:!!s}});return!!i}(),m=(0,i.useMemo)(()=>{let e=[{href:"/early",label:"Early Access",icon:Q.bBF},{href:"/vaults",label:"Vaults",icon:Q.QZG},{href:"/earn",label:"Earn",icon:Q.j0p},{href:"/discount",label:"Discount Offer",icon:Q.nlc},{href:"/dashboard",label:"Dashboard",icon:Q.FL4}];return c&&e.push({href:"/admin",label:"Admin",icon:Q.C5v}),o&&e.push({href:"/tester",label:"Tester",icon:Q.rv8}),e},[c,o]),{chain:h,address:u}=(0,G.m)(),x=!h||-1==a.Af.findIndex(e=>e.id==h.id)||a.Af.length<=1;return(0,s.jsxs)("header",{className:"h-[72px] fixed w-full max-w-[1440px] inset-0 mx-auto flex items-center justify-between px-4 bg-slate-50/30 backdrop-blur-lg z-30 ml-[calc(100vw - 100%)]",children:[(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsxs)(U(),{href:"/",className:"font-semibold flex pr-1 items-center text-base leading-7",children:[(0,s.jsx)(K(),{className:"",src:"/logo-alt.svg",height:52,width:52,alt:"wand logo image only"}),(0,s.jsx)("span",{className:"font-poppins",style:{display:n?"none":"inline-block"},children:"Wand"})]}),(0,s.jsxs)(O.fC,{children:[(0,s.jsxs)(O.xz,{className:(0,T.Z)("flex text-slate-500 font-medium items-center capitalize text-sm",{hidden:!n}),children:[e.split("/")[1],(0,s.jsx)(V.YRR,{})]}),(0,s.jsx)(O.Uv,{children:(0,s.jsx)(O.VY,{className:"z-50 bg-white p-1 border border-slate-200 shadow-lg rounded-md",children:m.map(e=>{let{href:t,label:n,icon:i}=e;return(0,s.jsx)(O.ck,{children:(0,s.jsxs)(U(),{className:"flex items-center text-slate-500 text-sm font-medium gap-1 px-3 py-2 rounded-sm hover:bg-slate-50",href:t,children:[(0,s.jsx)(i,{}),n]})},n)})})})]})]}),"/"!==e?(0,s.jsx)("div",{className:"hidden lg:flex flex-1 px-5 items-center justify-between",children:m.map(t=>{let{href:n,label:i,icon:a}=t;return(0,s.jsxs)(U(),{className:(0,T.Z)("text-sm font-medium flex gap-1 mx-auto items-center transition-all active:translate-y-1",e==="/".concat(n)?"text-slate-700":"text-slate-500"),href:n,children:[(0,s.jsx)(a,{}),i]},n)})}):null,(0,s.jsxs)("div",{className:"flex items-center gap-1 md:gap-4",children:[(0,s.jsx)("div",{className:"hidden lg:flex items-center gap-3",children:X.map(e=>{let{url:t,icon:n,name:i}=e;return(0,s.jsx)(U(),{href:t,className:"text-slate-300 hover:text-indigo-500",children:(0,s.jsx)(n,{})},i)})}),x&&(0,s.jsxs)("div",{className:"flex items-center gap-2 text-sm text-slate-500 font-medium rounded-full cursor-pointer",onClick:()=>d&&d(),children:[(0,s.jsx)(K(),{width:24,height:24,src:ee[l],alt:""}),(0,s.jsx)("div",{className:"hidden sm:block",children:$[l]})]}),"/"===e?(0,s.jsx)(U(),{href:"/vaults",className:"h-fit bg-indigo-500 text-white text-sm leading-6 font-medium px-4 py-2 rounded-full whitespace-nowrap",children:"Launch App"}):(0,s.jsx)(M.Z,{})]})]})}var et=n(71424);function PageLayout(e){let{children:t}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(Providers,{children:[(0,s.jsx)(Header,{}),(0,s.jsx)("div",{className:"min-h-[calc(100vh+1px)] h-auto pt-[80px] pb-6",children:t})]}),(0,s.jsx)(et.x,{position:"top-right",offset:70})]})}},34776:function(e,t,n){"use strict";n.d(t,{Z:function(){return ConnectBtn}});var s=n(57437),i=n(14701),a=n(1044);function ConnectBtn(){let e=(0,a.Z)(1024);return(0,s.jsx)(i.NL,{chainStatus:e.width>600?"full":"icon",showBalance:!1})}},72853:function(){}},function(e){e.O(0,[1866,9472,3033,1465,3202,7647,9498,590,6243,5077,8977,2971,2472,1744],function(){return e(e.s=39473)}),_N_E=e.O()}]);