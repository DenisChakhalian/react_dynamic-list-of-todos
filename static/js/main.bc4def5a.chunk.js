(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s,a=c(6),n=c.n(a),l=c(2),i=c(8),d=c(1),o=(c(13),c(14),c(7)),r=c.n(o),j=c(0),b=function(e){var t=e.todos,c=e.onModal,s=e.choseTodoId;return Object(j.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:" "})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(j.jsx)("td",{className:"is-vcentered",children:e.id}),Object(j.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(j.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("td",{className:"is-vcentered is-expanded",children:Object(j.jsx)("p",{className:r()({"has-text-danger":!e.completed,"has-text-success":e.completed}),children:e.title})}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:Object(j.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e)},children:s!==e.id?Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"far fa-eye"})}):Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"far fa-eye-slash"})})})})]},e.id)}))})]})};!function(e){e.All="all",e.Active="active",e.Completed="completed"}(s||(s={}));var u=function(e){var t=e.onFilter,c=Object(d.useState)(""),a=Object(l.a)(c,2),n=a[0],i=a[1],o=Object(d.useState)(s.All),r=Object(l.a)(o,2),b=r[0],u=r[1];Object(d.useEffect)((function(){t({field:b,query:n})}),[n,b]);return Object(j.jsxs)("form",{className:"field has-addons",children:[Object(j.jsx)("p",{className:"control",children:Object(j.jsx)("span",{className:"select",children:Object(j.jsxs)("select",{"data-cy":"statusSelect",value:b,onChange:function(e){u(e.target.value)},children:[Object(j.jsx)("option",{value:s.All,children:"All"}),Object(j.jsx)("option",{value:s.Active,children:"Active"}),Object(j.jsx)("option",{value:s.Completed,children:"Completed"})]})})}),Object(j.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(j.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:n,onChange:function(e){i(e.target.value)}}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-magnifying-glass"})}),!!n&&Object(j.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(j.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){i("")}})})]})]})},h=(c(16),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})});var m=function(e){var t=e.todo,c=e.onModal,s=Object(d.useState)(null),a=Object(l.a)(s,2),n=a[0],i=a[1],o=Object(d.useState)(!0),r=Object(l.a)(o,2),b=r[0],u=r[1];return Object(d.useEffect)((function(){var e;(e=t.userId,fetch("".concat("https://mate-academy.github.io/react_dynamic-list-of-todos/api/users/"+e,".json")).then((function(e){return e.json()}))).then(i).finally((function(){return u(!1)}))}),[]),Object(j.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(j.jsx)("div",{className:"modal-background"}),b?Object(j.jsx)(h,{}):Object(j.jsxs)("div",{className:"modal-card",children:[Object(j.jsxs)("header",{className:"modal-card-head",children:[Object(j.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(j.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(j.jsxs)("div",{className:"modal-card-body",children:[Object(j.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(j.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(j.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(j.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(j.jsx)("a",{href:"mailto:".concat(null===n||void 0===n?void 0:n.email),children:null===n||void 0===n?void 0:n.name})]})]})]})]})};var O=function(){var e=Object(d.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(d.useState)(null),o=Object(l.a)(n,2),r=o[0],O=o[1],x=Object(d.useState)({field:s.All,query:""}),f=Object(l.a)(x,2),p=f[0],v=f[1],N=Object(d.useState)(!0),y=Object(l.a)(N,2),g=y[0],k=y[1],C=function(e,t){var c=Object(i.a)(e);return c=c.filter((function(e){switch(t.field){case s.Active:return!e.completed;case s.Completed:return e.completed;case s.All:default:return e}})),t.query&&(c=c.filter((function(e){return e.title.toLowerCase().includes(t.query.toLowerCase())}))),c}(c,p),S=function(e){O(e)};return Object(d.useEffect)((function(){fetch("https://mate-academy.github.io/react_dynamic-list-of-todos/api/todos.json").then((function(e){return e.json()})).then((function(e){a(e),k(!1)}))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("h1",{className:"title",children:"Todos:"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(u,{onFilter:function(e){v(e)}})}),Object(j.jsx)("div",{className:"block",children:g?Object(j.jsx)(h,{}):Object(j.jsx)(b,{todos:C,onModal:S,choseTodoId:null===r||void 0===r?void 0:r.id})})]})})}),r&&Object(j.jsx)(m,{todo:r,onModal:S})]})};n.a.render(Object(j.jsx)(O,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.bc4def5a.chunk.js.map