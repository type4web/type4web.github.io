_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(r.default.useContext(s.AmpStateContext))};var a,r=(a=n("q1tI"))&&a.__esModule?a:{default:a},s=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,s=e.hasQuery,i=void 0!==s&&s;return n||r&&i}},"7W2i":function(e,t,n){var a=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=d,t.default=void 0;var a,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var s=a?Object.getOwnPropertyDescriptor(e,r):null;s&&(s.get||s.set)?Object.defineProperty(n,r,s):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),s=(a=n("Xuae"))&&a.__esModule?a:{default:a},i=n("lwAK"),c=n("FYa8"),o=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var x=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(u,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(r){var s=!0,i=!1;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){i=!0;var c=r.key.slice(r.key.indexOf("$")+1);e.has(c)?s=!1:e.add(c)}switch(r.type){case"title":case"base":t.has(r.type)?s=!1:t.add(r.type);break;case"meta":for(var o=0,l=x.length;o<l;o++){var d=x[o];if(r.props.hasOwnProperty(d))if("charSet"===d)n.has(d)?s=!1:n.add(d);else{var u=r.props[d],f=a[d]||new Set;"name"===d&&i||!f.has(u)?(f.add(u),a[d]=f):s=!1}}}return s}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function p(e){var t=e.children,n=(0,r.useContext)(i.AmpStateContext),a=(0,r.useContext)(c.HeadManagerContext);return r.default.createElement(s.default,{reduceComponentsToState:f,headManager:a,inAmpMode:(0,o.isInAmpMode)(n)},t)}p.rewind=function(){};var j=p;t.default=j},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var a;t.__esModule=!0,t.HeadManagerContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.HeadManagerContext=r},Ijbi:function(e,t,n){var a=n("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var a=n("Ijbi"),r=n("EbDI"),s=n("ZhPi"),i=n("Bnag");e.exports=function(e){return a(e)||r(e)||s(e)||i()}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var a=n("nKUr"),r=n("MX0m"),s=n.n(r),i=n("g4pe"),c=n.n(i),o=n("YFqc"),l=n.n(o);function d(){return Object(a.jsxs)("div",{className:"jsx-2669080695 container",children:[Object(a.jsxs)(c.a,{children:[Object(a.jsx)("title",{className:"jsx-2669080695",children:"Blog"}),Object(a.jsx)("link",{rel:"icon",href:"/favicon.ico",className:"jsx-2669080695"})]}),Object(a.jsxs)("main",{className:"jsx-2669080695",children:[Object(a.jsxs)("h1",{className:"jsx-2669080695 title",children:["Blog"," ",Object(a.jsx)(l.a,{href:"/posts/first-post",children:Object(a.jsx)("a",{className:"jsx-2669080695",children:"type 4 web"})})]}),Object(a.jsxs)("p",{className:"jsx-2669080695 description",children:["Posts: ",Object(a.jsx)("code",{className:"jsx-2669080695",children:"clik if you want"})]}),Object(a.jsxs)("div",{className:"jsx-2669080695 grid",children:[Object(a.jsxs)("a",{href:"/posts/p2021429",target:"_blank",className:"jsx-2669080695 card",children:[Object(a.jsx)("h3",{className:"jsx-2669080695",children:"Lambda function \u2192"}),Object(a.jsx)("p",{className:"jsx-2669080695",children:"AWS and lambda function"}),Object(a.jsx)("p",{className:"jsx-2669080695",children:"2021-04-29"})]}),Object(a.jsxs)("a",{href:"https://natto.dev/",target:"_blank",className:"jsx-2669080695 card",children:[Object(a.jsx)("h3",{className:"jsx-2669080695",children:"JS \u2192"}),Object(a.jsx)("p",{className:"jsx-2669080695",children:"A spatial canvas/playground for JavaScript"}),Object(a.jsx)("p",{className:"jsx-2669080695",children:"2021-04-26"})]}),Object(a.jsxs)("a",{href:"https://github.com/marketplace/actions/deploy-to-github-pages",target:"_blank",className:"jsx-2669080695 card",children:[Object(a.jsx)("h3",{className:"jsx-2669080695",children:"Cloude \u2192"}),Object(a.jsx)("p",{className:"jsx-2669080695",children:"GitHub Pages Deploy Action \ud83d\ude80"}),Object(a.jsx)("p",{className:"jsx-2669080695",children:"2021-04-25"})]}),Object(a.jsxs)("a",{href:"https://www.cloudflare.com/",target:"_blank",className:"jsx-2669080695 card",children:[Object(a.jsx)("h3",{className:"jsx-2669080695",children:"Web \u2192"}),Object(a.jsx)("p",{className:"jsx-2669080695",children:"The Web Performance & Security Company"}),Object(a.jsx)("p",{className:"jsx-2669080695",children:"2021-04-25"})]}),Object(a.jsxs)("a",{href:"https://github.com/ClaudePlos",target:"_blank",className:"jsx-2669080695 card",children:[Object(a.jsx)("h3",{className:"jsx-2669080695",children:"AWS \u2192"}),Object(a.jsx)("p",{className:"jsx-2669080695",children:"Fast generate code to AWS. (todo)"}),Object(a.jsx)("p",{className:"jsx-2669080695",children:"2021-04-.."})]}),Object(a.jsxs)("a",{href:"https://dataworkshop.eu/free-webinar?utm_source=youtube&utm_medium=description&utm_campaign=nlp2&utm_term=channel&utm_content=dataworkshop#joinwebinar",target:"_blank",className:"jsx-2669080695 card",children:[Object(a.jsx)("h3",{className:"jsx-2669080695",children:"NLP \u2192"}),Object(a.jsx)("p",{className:"jsx-2669080695",children:"How bulid AI code and develop."}),Object(a.jsx)("p",{className:"jsx-2669080695",children:"2021-04-20"})]}),Object(a.jsxs)("a",{href:"https://github.com/ClaudePlos/pattern_ractive_dev",target:"_blank",className:"jsx-2669080695 card",children:[Object(a.jsx)("h3",{className:"jsx-2669080695",children:"Reactive in java \u2192"}),Object(a.jsx)("p",{className:"jsx-2669080695",children:"How write reactive code in java!"}),Object(a.jsx)("p",{className:"jsx-2669080695",children:"2021-04-19"})]}),Object(a.jsxs)("a",{href:"https://github.com/ClaudePlos/rusic",target:"_blank",className:"jsx-2669080695 card",children:[Object(a.jsx)("h3",{className:"jsx-2669080695",children:"Rust language \u2192"}),Object(a.jsx)("p",{className:"jsx-2669080695",children:"Fast project in RUST language."}),Object(a.jsx)("p",{className:"jsx-2669080695",children:"2021-04-15"})]}),Object(a.jsxs)("a",{href:"https://github.com/ClaudePlos",target:"_blank",className:"jsx-2669080695 card",children:[Object(a.jsx)("h3",{className:"jsx-2669080695",children:"My github \u2192"}),Object(a.jsx)("p",{className:"jsx-2669080695",children:"See my project."}),Object(a.jsx)("p",{className:"jsx-2669080695",children:"2021-03-19"})]})]})]}),Object(a.jsx)("footer",{className:"jsx-2669080695",children:Object(a.jsxs)("a",{href:"https://cash.rekeep.pl",target:"_blank",rel:"noopener noreferrer",className:"jsx-2669080695",children:["Powered by"," ","Klaudiusz Skowronski"]})}),Object(a.jsx)(s.a,{id:"1703140096",children:[".container.jsx-2669080695{min-height:100vh;padding:0 0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","main.jsx-2669080695{padding:5rem 0;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","footer.jsx-2669080695{width:100%;height:100px;border-top:1px solid #eaeaea;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","footer.jsx-2669080695 img.jsx-2669080695{margin-left:0.5rem;}","footer.jsx-2669080695 a.jsx-2669080695{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","a.jsx-2669080695{color:inherit;-webkit-text-decoration:none;text-decoration:none;}",".title.jsx-2669080695 a.jsx-2669080695{color:#f38600;-webkit-text-decoration:none;text-decoration:none;}",".title.jsx-2669080695 a.jsx-2669080695:hover,.title.jsx-2669080695 a.jsx-2669080695:focus,.title.jsx-2669080695 a.jsx-2669080695:active{-webkit-text-decoration:underline;text-decoration:underline;}",".title.jsx-2669080695{margin:0;line-height:1.15;font-size:4rem;}",".title.jsx-2669080695,.description.jsx-2669080695{text-align:center;}",".description.jsx-2669080695{line-height:1.5;font-size:1.5rem;}","code.jsx-2669080695{background:#fafafa;border-radius:5px;padding:0.75rem;font-size:1.1rem;font-family:ubuntu,trebuchet ms,Tahoma,Geneva,Verdana,sans-serif,monospace;}",".grid.jsx-2669080695{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:800px;margin-top:3rem;}",".card.jsx-2669080695{margin:1rem;-webkit-flex-basis:45%;-ms-flex-preferred-size:45%;flex-basis:45%;padding:1.5rem;text-align:left;color:inherit;-webkit-text-decoration:none;text-decoration:none;border:1px solid #eaeaea;border-radius:10px;-webkit-transition:color 0.15s ease,border-color 0.15s ease;transition:color 0.15s ease,border-color 0.15s ease;}",".card.jsx-2669080695:hover,.card.jsx-2669080695:focus,.card.jsx-2669080695:active{color:#f38600;border-color:#f38600;}",".card.jsx-2669080695 h3.jsx-2669080695{margin:0 0 1rem 0;font-size:1.5rem;}",".card.jsx-2669080695 p.jsx-2669080695{margin:0;font-size:1.25rem;line-height:1.5;}",".logo.jsx-2669080695{height:1em;}","@media (max-width:600px){.grid.jsx-2669080695{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}"]}),Object(a.jsx)(s.a,{id:"2188778014",children:["html,body{padding:0;margin:0;font-family:ubuntu,trebuchet ms,Tahoma,Geneva,Verdana,sans-serif;}","*{box-sizing:border-box;}"]})]})}},Xuae:function(e,t,n){"use strict";var a=n("RIqP"),r=n("lwsE"),s=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),c=n("a1gu"),o=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=o(e);if(t){var r=o(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),u=function(e){i(n,e);var t=l(n);function n(e){var s;return r(this,n),(s=t.call(this,e))._hasHeadManager=void 0,s.emitChange=function(){s._hasHeadManager&&s.props.headManager.updateHead(s.props.reduceComponentsToState(a(s.props.headManager.mountedInstances),s.props))},s._hasHeadManager=s.props.headManager&&s.props.headManager.mountedInstances,s}return s(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=u},a1gu:function(e,t,n){var a=n("cDf5"),r=n("PJYZ");e.exports=function(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?r(e):t}},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=r},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,2,1,3]]]);