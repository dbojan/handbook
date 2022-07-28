"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3928],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,y=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return n?i.createElement(y,a(a({ref:t},d),{},{components:n})):i.createElement(y,a({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4586:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=["components"],l={id:"dev-guide-ljm",title:"Modifying lib-jitsi-meet"},s="Modifying `lib-jitsi-meet`",p={unversionedId:"dev-guide/dev-guide-ljm",id:"dev-guide/dev-guide-ljm",title:"Modifying lib-jitsi-meet",description:"By default the library is built from its git repository sources. The default dependency path in package.json is:",source:"@site/docs/dev-guide/ljm.md",sourceDirName:"dev-guide",slug:"/dev-guide/dev-guide-ljm",permalink:"/handbook/docs/dev-guide/dev-guide-ljm",draft:!1,editUrl:"https://github.com/jitsi/handbook/edit/master/docs/dev-guide/ljm.md",tags:[],version:"current",lastUpdatedAt:1658999691,formattedLastUpdatedAt:"Jul 28, 2022",frontMatter:{id:"dev-guide-ljm",title:"Modifying lib-jitsi-meet"},sidebar:"docs",previous:{title:"Start",permalink:"/handbook/docs/dev-guide/dev-guide-web"},next:{title:"Integrations",permalink:"/handbook/docs/dev-guide/dev-guide-web-integrations"}},d={},c=[],m={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"modifying-lib-jitsi-meet"},"Modifying ",(0,o.kt)("inlineCode",{parentName:"h1"},"lib-jitsi-meet")),(0,o.kt)("p",null,"By default the library is built from its git repository sources. The default dependency path in package.json is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"lib-jitsi-meet": "jitsi/lib-jitsi-meet#commit-hash",\n')),(0,o.kt)("p",null,"To work with local copy you may change the path to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"lib-jitsi-meet": "file:///Users/name/local-lib-jitsi-meet-copy",\n')),(0,o.kt)("p",null,"To make the project you must force it to take the sources as 'npm update':"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install lib-jitsi-meet --force && make\n")),(0,o.kt)("p",null,"Or if you are making only changes to the library:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install lib-jitsi-meet --force && make deploy-lib-jitsi-meet\n")),(0,o.kt)("p",null,"Alternative way is to use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/link"},"npm link"),".\nIt allows to link ",(0,o.kt)("inlineCode",{parentName:"p"},"lib-jitsi-meet")," dependency to local source in few steps:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd lib-jitsi-meet\n\n#### create global symlink for lib-jitsi-meet package\nnpm link\n\ncd ../jitsi-meet\n\n#### create symlink from the local node_modules folder to the global lib-jitsi-meet symlink\nnpm link lib-jitsi-meet\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Linking will not work when building the mobile applications.")),(0,o.kt)("p",null,"After changes in your local ",(0,o.kt)("inlineCode",{parentName:"p"},"lib-jitsi-meet")," repository, you can rebuild it with ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run install")," and your ",(0,o.kt)("inlineCode",{parentName:"p"},"jitsi-meet")," repository will use that modified library."),(0,o.kt)("p",null,"If you do not want to use local repository anymore you should run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd jitsi-meet\nnpm unlink lib-jitsi-meet\nnpm install\n")))}u.isMDXComponent=!0}}]);