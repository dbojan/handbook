"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9719],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=d(n),m=i,f=l["".concat(p,".").concat(m)]||l[m]||c[m]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=l;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},565:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={id:"devops-guide-start",title:"Self-Hosting Guide - Overview",sidebar_label:"Overview"},p=void 0,d={unversionedId:"devops-guide/devops-guide-start",id:"devops-guide/devops-guide-start",title:"Self-Hosting Guide - Overview",description:"Welcome to the Self-Hosting guide!",source:"@site/docs/devops-guide/devops-guide.md",sourceDirName:"devops-guide",slug:"/devops-guide/",permalink:"/handbook/docs/devops-guide/",draft:!1,editUrl:"https://github.com/jitsi/handbook/edit/master/docs/devops-guide/devops-guide.md",tags:[],version:"current",lastUpdatedAt:1689064931,formattedLastUpdatedAt:"Jul 11, 2023",frontMatter:{id:"devops-guide-start",title:"Self-Hosting Guide - Overview",sidebar_label:"Overview"},sidebar:"docs",previous:{title:"iOS SDK",permalink:"/handbook/docs/dev-guide/dev-guide-ios-sdk"},next:{title:"Requirements",permalink:"/handbook/docs/devops-guide/devops-guide-requirements"}},u={},c=[],l={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Welcome to the Self-Hosting guide!"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"These guides help you to ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"host your own Jitsi-Meet server")),".",(0,a.kt)("br",{parentName:"p"}),"\n","If you want to have a video conference without setting up any infrastructure, use ",(0,a.kt)("a",{parentName:"p",href:"https://meet.jit.si"},"https://meet.jit.si")," instead.")),(0,a.kt)("p",null,"The content is divided in 3 guides:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/handbook/docs/devops-guide/devops-guide-quickstart"},"Debian/Ubuntu server guide"),": Describes the quick installation on Debian-based distributions.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/handbook/docs/devops-guide/devops-guide-docker"},"Docker guide"),": Describes how to use the official Docker image of Jitsi-Meet.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/handbook/docs/devops-guide/devops-guide-manual"},"Manual installation guide"),": Describes the manual installation of all components (adaptable for other distributions)."))),(0,a.kt)("admonition",{title:"First, a bit of general advice",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Jitsi Meet being based on ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/WebRTC"},"WebRTC"),", an encrypted communication link (https) is ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"necessary"))," to get working multimedia, and the setup is not always trivial."),(0,a.kt)("p",{parentName:"admonition"},"The best option is an Internet server with a certificate for a domain registered in the ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Domain_Name_System#Domain_name_registration"},"DNS"),"."),(0,a.kt)("p",{parentName:"admonition"},"While it's possible to setup a server on a private network and/or a self-signed certificate, it can be less straightforward and you can expect difficulties, first if you want access both from the private network and the public internet, and second when using phones as these clients often don't accept self-signed certificates."),(0,a.kt)("p",{parentName:"admonition"},"In case of trouble with clients using phones, ",(0,a.kt)("a",{parentName:"p",href:"https://whatsmychaincert.com"},"check your certificate"),".")))}m.isMDXComponent=!0}}]);