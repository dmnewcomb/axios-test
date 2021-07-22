!function(){"use strict";function t(){}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function e(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function a(t,n){t.appendChild(n)}function c(t,n,o){t.insertBefore(n,o||null)}function u(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function s(t){return document.createTextNode(t)}var f,d=function(t,n){void 0===n&&(n=null),this.e=p("div"),this.a=n,this.u(t)};function l(t){f=t}d.prototype.m=function(t,n){void 0===n&&(n=null);for(var o=0;o<this.n.length;o+=1)c(t,this.n[o],n);this.t=t},d.prototype.u=function(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)},d.prototype.p=function(t){this.d(),this.u(t),this.m(this.t,this.a)},d.prototype.d=function(){this.n.forEach(u)};var $=[],m=[],h=[],y=[],g=Promise.resolve(),v=!1;function b(t){h.push(t)}var _=!1,x=new Set;function k(){if(!_){_=!0;do{for(var t=0;t<$.length;t+=1){var n=$[t];l(n),T(n.$$)}for($.length=0;m.length;)m.pop()();for(var o=0;o<h.length;o+=1){var r=h[o];x.has(r)||(x.add(r),r())}h.length=0}while($.length);for(;y.length;)y.pop()();v=!1,_=!1,x.clear()}}function T(t){if(null!==t.fragment){t.update(),r(t.before_update);var n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(b)}}var H=new Set;function j(t,n){-1===t.$$.dirty[0]&&($.push(t),v||(v=!0,g.then(k)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function O(i,a,c,u,p,s,d){void 0===d&&(d=[-1]);var $=f;l(i);var m,h,y=a.props||{},g=i.$$={fragment:null,ctx:null,props:s,update:t,not_equal:p,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map($?$.$$.context:[]),callbacks:o(),dirty:d},v=!1;g.ctx=c?c(i,y,(function(t,n){for(var o=[],r=arguments.length-2;r-- >0;)o[r]=arguments[r+2];var e=o.length?o[0]:n;return g.ctx&&p(g.ctx[t],g.ctx[t]=e)&&(g.bound[t]&&g.bound[t](e),v&&j(i,t)),n})):[],g.update(),v=!0,r(g.before_update),g.fragment=!!u&&u(g.ctx),a.target&&(a.hydrate?g.fragment&&g.fragment.l(function(t){return Array.from(t.childNodes)}(a.target)):g.fragment&&g.fragment.c(),a.intro&&(m=i.$$.fragment)&&m.i&&(H.delete(m),m.i(h)),function(t,o,i){var a=t.$$,c=a.fragment,u=a.on_mount,p=a.on_destroy,s=a.after_update;c&&c.m(o,i),b((function(){var o=u.map(n).filter(e);p?p.push.apply(p,o):r(o),t.$$.on_mount=[]})),s.forEach(b)}(i,a.target,a.anchor),k()),l($)}var w=function(){};function M(n){var o;return{c:function(){o=p("span")},m:function(t,r){c(t,o,r),o.innerHTML=n[0]},p:function(t,n){1&n[0]&&(o.innerHTML=t[0])},i:t,o:t,d:function(t){t&&u(o)}}}function L(t,n,o){var r,e,i,a,c=n.props,u=c.get,p=c.purifyHtml;return t.$set=function(t){"props"in t&&o(1,c=t.props)},t.$$.update=function(){2&t.$$.dirty&&o(2,r=c.theme),2&t.$$.dirty&&o(3,e=c.chart),4&t.$$.dirty&&o(4,i=u(r,"data.options.blocks.caption.data.custom-field")),24&t.$$.dirty&&o(0,a=i?p(u(e,"metadata.custom."+i,"")):"")},[a,c]}w.prototype.$destroy=function(){var n,o;n=1,null!==(o=this.$$).fragment&&(r(o.on_destroy),o.fragment&&o.fragment.d(n),o.on_destroy=o.fragment=null,o.ctx=[]),this.$destroy=t},w.prototype.$on=function(t,n){var o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),function(){var t=o.indexOf(n);-1!==t&&o.splice(t,1)}},w.prototype.$set=function(){};var C=function(t){function n(n){t.call(this),O(this,n,L,M,i,{props:1})}return t&&(n.__proto__=t),n.prototype=Object.create(t&&t.prototype),n.prototype.constructor=n,n}(w);function E(n){var o,r,e,i;return{c:function(){o=p("span"),r=s(n[0]),e=s(" "),i=new d(n[1],null)},m:function(t,n){c(t,o,n),a(o,r),a(o,e),i.m(o)},p:function(t,n){var o=n[0];1&o&&function(t,n){n=""+n,t.data!==n&&(t.data=n)}(r,t[0]),2&o&&i.p(t[1])},i:t,o:t,d:function(t){t&&u(o)}}}function N(t,n,o){var r,e,i,a,c,u,p,s=n.props,f=s.get,d=s.purifyHtml;return t.$set=function(t){"props"in t&&o(2,s=t.props)},t.$$.update=function(){4&t.$$.dirty&&o(3,r=s.theme),4&t.$$.dirty&&o(4,e=s.chart),4&t.$$.dirty&&o(5,i=s.caption),8&t.$$.dirty&&o(6,a=f(r,"data.options.blocks.figure.data")),64&t.$$.dirty&&o(7,c=a["custom-field"]),96&t.$$.dirty&&o(0,u=a[i+"Caption"]||a.caption||""),144&t.$$.dirty&&o(1,p=c?d(f(e,"metadata.custom."+c,"")):"")},[u,p,s]}var S=function(t){function n(n){t.call(this),O(this,n,N,E,i,{props:2})}return t&&(n.__proto__=t),n.prototype=Object.create(t&&t.prototype),n.prototype.constructor=n,n}(w);function A(n){var o;return{c:function(){o=p("span")},m:function(t,r){c(t,o,r),o.innerHTML=n[0]},p:function(t,n){1&n[0]&&(o.innerHTML=t[0])},i:t,o:t,d:function(t){t&&u(o)}}}function q(t,n,o){var r,e,i,a,c=n.props,u=c.get,p=c.purifyHtml;return t.$set=function(t){"props"in t&&o(1,c=t.props)},t.$$.update=function(){2&t.$$.dirty&&o(2,r=c.theme),2&t.$$.dirty&&o(3,e=c.chart),4&t.$$.dirty&&o(4,i=u(r,"data.options.blocks.subhed.data.custom-field")),24&t.$$.dirty&&o(0,a=i?p(u(e,"metadata.custom."+i,"")):"")},[a,c]}var B=function(t){function n(n){t.call(this),O(this,n,q,A,i,{props:1})}return t&&(n.__proto__=t),n.prototype=Object.create(t&&t.prototype),n.prototype.constructor=n,n}(w);function F(n){var o;return{c:function(){o=p("span")},m:function(t,r){c(t,o,r),o.innerHTML=n[0]},p:function(t,n){1&n[0]&&(o.innerHTML=t[0])},i:t,o:t,d:function(t){t&&u(o)}}}function P(t,n,o){var r,e,i,a,c=n.props,u=c.get,p=c.purifyHtml;return t.$set=function(t){"props"in t&&o(1,c=t.props)},t.$$.update=function(){2&t.$$.dirty&&o(2,r=c.theme),2&t.$$.dirty&&o(3,e=c.chart),4&t.$$.dirty&&o(4,i=u(r,"data.options.blocks.timestamp.data.custom-field")),24&t.$$.dirty&&o(0,a=i?p(u(e,"metadata.custom."+i,"")):"")},[a,c]}var z=function(t){function n(n){t.call(this),O(this,n,P,F,i,{props:1})}return t&&(n.__proto__=t),n.prototype=Object.create(t&&t.prototype),n.prototype.constructor=n,n}(w);function D(n){var o;return{c:function(){o=p("span")},m:function(t,r){c(t,o,r),o.innerHTML=n[0]},p:function(t,n){1&n[0]&&(o.innerHTML=t[0])},i:t,o:t,d:function(t){t&&u(o)}}}function G(t,n,o){var r,e,i,a,c=n.props,u=c.get,p=c.purifyHtml;return t.$set=function(t){"props"in t&&o(1,c=t.props)},t.$$.update=function(){2&t.$$.dirty&&o(2,r=c.theme),2&t.$$.dirty&&o(3,e=c.chart),4&t.$$.dirty&&o(4,i=u(r,"data.options.blocks.copyright.data.custom-field")),24&t.$$.dirty&&o(0,a=i?p(u(e,"metadata.custom."+i,"")):"")},[a,c]}var I=function(t){function n(n){t.call(this),O(this,n,G,D,i,{props:1})}return t&&(n.__proto__=t),n.prototype=Object.create(t&&t.prototype),n.prototype.constructor=n,n}(w);function J(t,n,o){if(void 0===n&&(n=null),void 0===o&&(o=null),!n)return t;for(var r=n.split("."),e=t,i=0;i<r.length&&null!=e;i++)e=e[r[i]];return null==e?o:e}Object.assign(C,{test:function(t){var n=t.chart,o=J(t.theme,"data.options.blocks.caption.data.custom-field");return o&&J(n,"metadata.custom."+o)},exportText:!0}),Object.assign(S,{test:function(t){var n=t.chart,o=J(t.theme,"data.options.blocks.figure.data.custom-field");return o&&J(n,"metadata.custom."+o)},exportText:!0}),Object.assign(B,{test:function(t){var n=t.chart,o=J(t.theme,"data.options.blocks.subhed.data.custom-field");return o&&J(n,"metadata.custom."+o)},exportText:!0}),Object.assign(z,{test:function(t){var n=t.chart,o=J(t.theme,"data.options.blocks.timestamp.data.custom-field");return o&&J(n,"metadata.custom."+o)},exportText:!0}),Object.assign(I,{test:function(t){var n=t.chart,o=J(t.theme,"data.options.blocks.copyright.data.custom-field");return o&&J(n,"metadata.custom."+o)},exportText:!0}),dw.block.register("Caption",C),dw.block.register("SubHed",B),dw.block.register("Figure",S),dw.block.register("Timestamp",z),dw.block.register("Copyright",I)}();
