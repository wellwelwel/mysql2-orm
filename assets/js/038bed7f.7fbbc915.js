"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2054],{5132:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=s(5893),l=s(1151);const r={sidebar_position:3},i="UPDATE",o={id:"documentation/queries/update",title:"UPDATE",description:"For WHERE examples, please see the WHERE section.",source:"@site/docs/documentation/queries/update.mdx",sourceDirName:"documentation/queries",slug:"/documentation/queries/update",permalink:"/mysql2-orm/docs/documentation/queries/update",draft:!1,unlisted:!1,editUrl:"https://github.com/wellwelwel/mysql2-orm/tree/main/website/docs/documentation/queries/update.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"SELECT",permalink:"/mysql2-orm/docs/documentation/queries/select"},next:{title:"DELETE",permalink:"/mysql2-orm/docs/documentation/queries/delete"}},a={},d=[{value:"Simple update",id:"simple-update",level:2},{value:"QueryBuilder",id:"querybuilder",level:3},{value:"MySQL2 ORM Class",id:"mysql2-orm-class",level:3},{value:"Update multiple columns",id:"update-multiple-columns",level:2},{value:"QueryBuilder",id:"querybuilder-1",level:3},{value:"MySQL2 ORM Class",id:"mysql2-orm-class-1",level:3}];function u(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"update",children:"UPDATE"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["For ",(0,t.jsx)(n.strong,{children:"WHERE"})," examples, please see the ",(0,t.jsx)(n.strong,{children:"WHERE"})," section."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"simple-update",children:"Simple update"}),"\n",(0,t.jsx)(n.h3,{id:"querybuilder",children:"QueryBuilder"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// highlight-start\nimport { QueryBuilder } from 'mysql2-orm';\n// highlight-end\n\nconst { sql, params } = QueryBuilder.update({\n  table: 'users',\n  set: {\n    name: 'John',\n  },\n});\n"})}),"\n",(0,t.jsx)(n.h3,{id:"mysql2-orm-class",children:"MySQL2 ORM Class"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// highlight-start\nimport { MySQL } from 'mysql2-orm';\n\nconst pool = new MySQL({\n  // ...\n});\n// highlight-end\n\nawait pool.update({\n  table: 'users',\n  set: {\n    name: 'John',\n  },\n});\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"SQL Query"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"UPDATE `users` SET `name` = ?\n-- params: ['John']\n"})}),"\n",(0,t.jsx)("hr",{}),"\n",(0,t.jsx)(n.h2,{id:"update-multiple-columns",children:"Update multiple columns"}),"\n",(0,t.jsx)(n.h3,{id:"querybuilder-1",children:"QueryBuilder"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// highlight-start\nimport { QueryBuilder } from 'mysql2-orm';\n// highlight-end\n\nconst { sql, params } = QueryBuilder.update({\n  table: 'users',\n  set: {\n    name: 'John',\n    age: 29,\n    // highlight-start\n    // ...\n    // highlight-end\n  },\n});\n"})}),"\n",(0,t.jsx)(n.h3,{id:"mysql2-orm-class-1",children:"MySQL2 ORM Class"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// highlight-start\nimport { MySQL } from 'mysql2-orm';\n\nconst pool = new MySQL({\n  // ...\n});\n// highlight-end\n\nawait pool.update({\n  table: 'users',\n  set: {\n    name: 'John',\n    age: 29,\n    // highlight-start\n    // ...\n    // highlight-end\n  },\n});\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"SQL Query"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"UPDATE `users` SET `name` = ?, `age` = ?\n-- params: ['John', 29]\n"})})]})}function c(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>i});var t=s(7294);const l={},r=t.createContext(l);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);