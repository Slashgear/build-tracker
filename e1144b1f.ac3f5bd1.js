(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{155:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return u})),t.d(r,"default",(function(){return l}));var n=t(1),o=t(9),i=(t(0),t(161)),a={id:"api-errors",title:"@build-tracker/api-errors",sidebar_label:"@build-tracker/api-errors"},c={id:"packages/api-errors",title:"@build-tracker/api-errors",description:"This is a shared package for creating and comparing API errors returned from the Build Tracker server's API.",source:"@site/docs/packages/api-errors.md",permalink:"/docs/packages/api-errors",editUrl:"https://github.com/paularmstrong/build-tracker/edit/next/docs/docs/packages/api-errors.md",sidebar_label:"@build-tracker/api-errors",sidebar:"docs",previous:{title:"Contributing to Build Tracker",permalink:"/docs/guides/contributing"},next:{title:"@build-tracker/app",permalink:"/docs/packages/app"}},u=[{value:"400 <code>ValidationError</code>",id:"400-validationerror",children:[]},{value:"401 <code>AuthError</code>",id:"401-autherror",children:[]},{value:"404 <code>NotFoundError</code>",id:"404-notfounderror",children:[]},{value:"501 <code>UnimplementedError</code>",id:"501-unimplementederror",children:[]}],d={rightToc:u};function l(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This is a shared package for creating and comparing API errors returned from the Build Tracker server's API."),Object(i.b)("h2",{id:"400-validationerror"},"400 ",Object(i.b)("inlineCode",{parentName:"h2"},"ValidationError")),Object(i.b)("p",null,"The build that you are trying to insert into the database does not meet requirements. See the specific error message for more information."),Object(i.b)("h2",{id:"401-autherror"},"401 ",Object(i.b)("inlineCode",{parentName:"h2"},"AuthError")),Object(i.b)("p",null,"If your server's API is protected with an API key and you do not provide it with requests requiring authentication, a 401 unauthorized response will be returned."),Object(i.b)("h2",{id:"404-notfounderror"},"404 ",Object(i.b)("inlineCode",{parentName:"h2"},"NotFoundError")),Object(i.b)("p",null,"When querying one or more builds, you may find that they do not exist. This will result in a 404 not found error."),Object(i.b)("h2",{id:"501-unimplementederror"},"501 ",Object(i.b)("inlineCode",{parentName:"h2"},"UnimplementedError")),Object(i.b)("p",null,"If your API or API plugin does not support a method, a 501 unimplemented error will be returned."))}l.isMDXComponent=!0},161:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return m}));var n=t(0),o=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=o.a.createContext({}),l=function(e){var r=o.a.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):c({},r,{},e)),t},p=function(e){var r=l(e.components);return o.a.createElement(d.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),p=l(t),b=n,m=p["".concat(a,".").concat(b)]||p[b]||s[b]||i;return t?o.a.createElement(m,c({ref:r},d,{components:t})):o.a.createElement(m,c({ref:r},d))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=b;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var d=2;d<i;d++)a[d]=t[d];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);