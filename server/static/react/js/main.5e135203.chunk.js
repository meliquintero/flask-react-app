(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],[,,,,function(e,a,t){e.exports=t(11)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),i=t(3),r=t.n(i),l=(t(9),t(1)),o=(t(10),function(e){var a=e.images,t=e.onImageSelect,n=a.map((function(e){return c.a.createElement("div",{className:"image-item item",onClick:function(){return t(e.id)}},c.a.createElement("img",{className:"ui image",src:"data:image/jpeg;base64,".concat(e.image_data),alt:e.id}))}));return c.a.createElement("div",{className:"ui relaxed divided list"},n)}),s=function(e){var a=e.imageDisplay,t=Object(n.useState)([]),i=Object(l.a)(t,2),r=i[0],o=i[1];return Object(n.useEffect)((function(){fetch("/get-image?id=".concat(a.id)).then((function(e){return e.json()})).then((function(e){o(e)}))}),[a]),console.log("ImageDetail",a),a?c.a.createElement("div",null,c.a.createElement("div",{className:"ui embed"},c.a.createElement("img",{className:"ui image",title:"image player",src:"data:image/jpeg;base64,".concat(a.image_data)})),c.a.createElement("div",{className:"ui segment"},c.a.createElement("h4",{className:"header"},r.description),c.a.createElement("p",{className:"header"},r.dateCreated))):(console.log(a),c.a.createElement("div",null," Loading... "))},m=function(){var e=Object(n.useState)([]),a=Object(l.a)(e,2),t=a[0],i=a[1],r=Object(n.useState)(null),m=Object(l.a)(r,2),u=m[0],d=m[1];Object(n.useEffect)((function(){fetch("/get-images").then((function(e){return e.json()})).then((function(e){i(e.images),d(e.images[0])}))}),[]),Object(n.useEffect)((function(){}),[u]);return c.a.createElement("div",{className:"ui container"},c.a.createElement("div",{className:"ui grid"},c.a.createElement("div",{className:"ui row"},c.a.createElement("div",{className:"eleven wide column"},u&&c.a.createElement(s,{imageDisplay:u})),c.a.createElement("div",{className:"five wide column"},t&&c.a.createElement(o,{images:t,onImageSelect:function(e){var a=t.find((function(a){return a.id===e}));d(a)}})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.5e135203.chunk.js.map