(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s,a=c(5),n=c.n(a),l=c(2),o=c(1),i=(c(10),c(11),c(4)),d=c.n(i),r=c(0),j=function(e){var t=e.todo,c=e.onToggleModal,s=e.selectedTodoId,a=t.completed,n=t.id,l=t.title;return Object(r.jsxs)("tr",{"data-cy":"todo",children:[Object(r.jsx)("td",{className:"is-vcentered",children:n}),Object(r.jsx)("td",{className:"is-vcentered",children:a&&Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:d()({"has-text-danger":!a,"has-text-success":a}),children:l})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(t)},children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:d()("far",{"fa-eye":s!==n,"fa-eye-slash":s===n})})})})})]})},u=function(e){var t=e.todos,c=e.onToggleModal,s=e.selectedTodoId;return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsx)(j,{onToggleModal:c,todo:e,selectedTodoId:s},e.id)}))})]})};!function(e){e.All="all",e.Active="active",e.Completed="completed"}(s||(s={}));var b=function(e){var t=e.onFilter,c=e.filter,a=c.filterField,n=c.query;return Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsx)("select",{"data-cy":"statusSelect",value:a,onChange:function(e){t({filterField:e.target.value,query:n})},children:Object.keys(s).map((function(e){return Object(r.jsx)("option",{value:s[e],children:e},e)}))})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:n,onChange:function(e){t({filterField:a,query:e.target.value})}}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),!!n&&Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(r.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){t({filterField:a,query:""})}})})]})]})},h=(c(13),function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})});var m=function(e){var t=e.todo,c=e.onToggleModal,s=Object(o.useState)(null),a=Object(l.a)(s,2),n=a[0],i=a[1],d=Object(o.useState)(!1),j=Object(l.a)(d,2),u=j[0],b=j[1];return Object(o.useEffect)((function(){var e;b(!0),(e=t.userId,fetch("".concat("https://mate-academy.github.io/react_dynamic-list-of-todos/api/users/"+e,".json")).then((function(e){return e.json()}))).then(i).catch((function(e){console.log(e)})).finally((function(){return b(!1)}))}),[]),Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),u?Object(r.jsx)(h,{}):Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(r.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(r.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(r.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(r.jsx)("a",{href:"mailto:".concat(null===n||void 0===n?void 0:n.email),children:null===n||void 0===n?void 0:n.name})]})]})]})]})};var O=function(){var e=Object(o.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(o.useState)(null),i=Object(l.a)(n,2),d=i[0],j=i[1],O=Object(o.useState)({filterField:s.All,query:""}),x=Object(l.a)(O,2),f=x[0],v=x[1],p=Object(o.useState)(!1),N=Object(l.a)(p,2),y=N[0],g=N[1],k=function(e,t){var c=e.filter((function(e){switch(t.filterField){case s.Active:return!e.completed;case s.Completed:return e.completed;case s.All:default:return e}}));return t.query&&(c=c.filter((function(e){return e.title.toLowerCase().includes(t.query.toLowerCase())}))),c}(c,f),T=function(e){j(e)};return Object(o.useEffect)((function(){g(!0),fetch("https://mate-academy.github.io/react_dynamic-list-of-todos/api/todos.json").then((function(e){return e.json()})).then((function(e){a(e)})).catch((function(e){console.log(e)})).finally((function(){g(!1)}))}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(b,{onFilter:function(e){v(e)},filter:f})}),Object(r.jsx)("div",{className:"block",children:y?Object(r.jsx)(h,{}):Object(r.jsx)(u,{todos:k,onToggleModal:T,selectedTodoId:null===d||void 0===d?void 0:d.id})})]})})}),d&&Object(r.jsx)(m,{todo:d,onToggleModal:T})]})};n.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.578fd3ff.chunk.js.map