(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{171:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(3),i=n(7),r=(n(0),n(188)),s={id:"ecosystem-vite",title:"Vite",sidebar_label:"Vite"},a={unversionedId:"ecosystem-vite",id:"version-5.x/ecosystem-vite",isDocsHomePage:!1,title:"Vite",description:"Vite is a tool for both local development and the building of applications. It was created within the Vue ecosystem, but can be used with other UI frameworks, too.",source:"@site/versioned_docs/version-5.x/ecosystem-vite.md",slug:"/ecosystem-vite",permalink:"/docs/ecosystem-vite",editUrl:"https://github.com/single-spa/single-spa.js.org/blob/master/website/versioned_docs/version-5.x/ecosystem-vite.md",version:"5.x",sidebar_label:"Vite",sidebar:"version-5.x/docs",previous:{title:"single-spa-alpinejs",permalink:"/docs/ecosystem-alpinejs"},next:{title:"Snowpack",permalink:"/docs/ecosystem-snowpack"}},l=[{value:"Example repo",id:"example-repo",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Local development",id:"local-development",children:[]},{value:"Native Modules vs SystemJS",id:"native-modules-vs-systemjs",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/vitejs/vite"}),"Vite")," is a tool for both local development and the building of applications. It was created within the Vue ecosystem, but can be used with other UI frameworks, too."),Object(r.b)("h2",{id:"example-repo"},"Example repo"),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/joeldenning/vite-single-spa-example"}),"https://github.com/joeldenning/vite-single-spa-example")),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("p",null,"By default, Vite uses ES modules in local development, but not in production. This works well with single-spa, which encourages using ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/recommended-setup#in-browser-versus-build-time-modules"}),"in-browser modules")," as the interface for each microfrontend. To use vite with single-spa, you must export the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/building-applications#registered-application-lifecycle"}),"single-spa lifecycle functions")," from your Vite's ",Object(r.b)("inlineCode",{parentName:"p"},"main.js")," file and then make a few modifications to the ",Object(r.b)("inlineCode",{parentName:"p"},"vite.config.js")," file."),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)("p",null,"Modify the ",Object(r.b)("inlineCode",{parentName:"p"},"src/main.js")," file to not mount your app immediately, but rather to export the single-spa lifecycles. For Vue apps, see ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://single-spa.js.org/docs/ecosystem-vue#usage"}),"https://single-spa.js.org/docs/ecosystem-vue#usage"),"."),Object(r.b)("p",null,"The following Vite config can be used as the basis for a single-spa + Vite setup:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"import vue from '@vitejs/plugin-vue'\n\nexport default {\n  rollupOptions: {\n    input: 'src/main.js',\n    format: 'system',\n    preserveEntrySignatures: true\n  },\n  base: 'http://localhost:3000',\n  plugins: [vue({\n    template: {\n      transformAssetUrls: {\n        base: '/src'\n      }\n    }\n  })],\n}\n")),Object(r.b)("h2",{id:"local-development"},"Local development"),Object(r.b)("p",null,"Vite works well with ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://single-spa.js.org/docs/recommended-setup#local-development"}),"development via import map overrides"),". You should use http://localhost:3000/src/main.js as the URL for your import map override."),Object(r.b)("h2",{id:"native-modules-vs-systemjs"},"Native Modules vs SystemJS"),Object(r.b)("p",null,"single-spa works well with native modules, systemjs, or even both. With Vite + single-spa, a general recommendation is to use native modules during local development, but SystemJS in production (since browser support for Import Maps is still pending). Doing this is nice because it matches Vite's development workflow; however, mixing native and systemjs modules also can have some caveats:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The browser and SystemJS maintain separate module registries. This means that you can't share imports between SystemJS and native modules. So if you are doing an import map override for a Vite application on a page that also uses SystemJS, you may end up with multiple instances of Vue (and other shared libraries), which is different than how things will work in production. This is generally okay, except for situations where the Vue instance is modified via ",Object(r.b)("inlineCode",{parentName:"li"},"Vue.use()"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/systemjs/systemjs/pull/2187"}),"This PR to SystemJS")," shows how you can populate native modules into the SystemJS registry, allowing for one-way sharing of modules between the two registries. The PR was closed due to some edge cases, but it generally works. Even though the PR is closed, you can paste the ESM extra into your root config and it will work. If you have interest in driving forward better SystemJS + ESM compatibility, comment on Github or Slack with your interest.")))}p.isMDXComponent=!0},188:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var o=n(0),i=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,b=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return n?i.a.createElement(b,a(a({ref:t},c),{},{components:n})):i.a.createElement(b,a({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<r;c++)s[c]=n[c];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);