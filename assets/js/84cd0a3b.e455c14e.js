"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4711],{1714:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=s(4848),i=s(8453);const l={sidebar_position:0},t="INSERT",o={id:"documentation/queries/insert",title:"INSERT",description:"Single insertion",source:"@site/docs/documentation/queries/insert.mdx",sourceDirName:"documentation/queries",slug:"/documentation/queries/insert",permalink:"/mysql2-orm/docs/documentation/queries/insert",draft:!1,unlisted:!1,editUrl:"https://github.com/wellwelwel/mysql2-orm/tree/main/website/docs/documentation/queries/insert.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"docs",previous:{title:"Queries",permalink:"/mysql2-orm/docs/category/queries"},next:{title:"SELECT",permalink:"/mysql2-orm/docs/documentation/queries/select"}},c={},u=[{value:"Single insertion",id:"single-insertion",level:2},{value:"QueryBuilder",id:"querybuilder",level:3},{value:"MySQL2 ORM Class",id:"mysql2-orm-class",level:3},{value:"Multiple insertions",id:"multiple-insertions",level:2},{value:"QueryBuilder",id:"querybuilder-1",level:3},{value:"MySQL2 ORM Class",id:"mysql2-orm-class-1",level:3}];function a(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"insert",children:"INSERT"})}),"\n",(0,r.jsx)(n.h2,{id:"single-insertion",children:"Single insertion"}),"\n",(0,r.jsx)(n.h3,{id:"querybuilder",children:"QueryBuilder"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// highlight-start\nimport { QueryBuilder } from 'mysql2-orm';\n// highlight-end\n\nconst { sql, params } = QueryBuilder.insert({\n  table: 'test',\n  values: {\n    column1: 'foo',\n    column2: 1,\n  },\n});\n"})}),"\n",(0,r.jsx)(n.h3,{id:"mysql2-orm-class",children:"MySQL2 ORM Class"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// highlight-start\nimport { MySQL } from 'mysql2-orm';\n\nconst pool = new MySQL({\n  // ...\n});\n// highlight-end\n\nawait pool.insert({\n  table: 'test',\n  values: {\n    column1: 'foo',\n    column2: 1,\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"SQL Query"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"INSERT INTO `test` (`column1`, `column2`) VALUES (?, ?)\n-- params: ['foo', 1]\n"})}),"\n",(0,r.jsx)("hr",{}),"\n",(0,r.jsx)(n.h2,{id:"multiple-insertions",children:"Multiple insertions"}),"\n",(0,r.jsx)(n.h3,{id:"querybuilder-1",children:"QueryBuilder"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// highlight-start\nimport { QueryBuilder } from 'mysql2-orm';\n// highlight-end\n\nconst { sql, params } = QueryBuilder.insert({\n  table: 'test',\n  values: [\n    {\n      column1: 'foo',\n      column2: 1,\n    },\n    {\n      column1: 'bar',\n      column2: 2,\n    },\n  ],\n});\n"})}),"\n",(0,r.jsx)(n.h3,{id:"mysql2-orm-class-1",children:"MySQL2 ORM Class"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// highlight-start\nimport { MySQL } from 'mysql2-orm';\n\nconst pool = new MySQL({\n  // ...\n});\n// highlight-end\n\nawait pool.insert({\n  table: 'test',\n  values: [\n    {\n      column1: 'foo',\n      column2: 1,\n    },\n    {\n      column1: 'bar',\n      column2: 2,\n    },\n  ],\n});\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"SQL Query"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"INSERT INTO `test` (`column1`, `column2`) VALUES (?, ?), (?, ?)\n-- params: ['foo', 1,  'bar', 2]\n"})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>o});var r=s(6540);const i={},l=r.createContext(i);function t(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);