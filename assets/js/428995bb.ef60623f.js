"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2413],{4746:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=s(5893),t=s(1151);const o={sidebar_position:11,tags:["OP","Operators","Sub Query","Sub Queries"]},i="in",a={id:"documentation/queries/operators/in",title:"in",description:"in(column Param[])",source:"@site/docs/documentation/queries/operators/in.mdx",sourceDirName:"documentation/queries/operators",slug:"/documentation/queries/operators/in",permalink:"/mysql2-orm/docs/documentation/queries/operators/in",draft:!1,unlisted:!1,editUrl:"https://github.com/wellwelwel/mysql2-orm/tree/main/website/docs/documentation/queries/operators/in.mdx",tags:[{label:"OP",permalink:"/mysql2-orm/docs/tags/op"},{label:"Operators",permalink:"/mysql2-orm/docs/tags/operators"},{label:"Sub Query",permalink:"/mysql2-orm/docs/tags/sub-query"},{label:"Sub Queries",permalink:"/mysql2-orm/docs/tags/sub-queries"}],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,tags:["OP","Operators","Sub Query","Sub Queries"]},sidebar:"docs",previous:{title:"isNotNull",permalink:"/mysql2-orm/docs/documentation/queries/operators/is-not-null"},next:{title:"notIn",permalink:"/mysql2-orm/docs/documentation/queries/operators/notIn"}},u={},c=[];function l(e){const n={blockquote:"blockquote",code:"code",h1:"h1",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"in",children:"in"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["in(column: string, params: Param[])",(0,r.jsx)("br",{})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { OP, Param } from 'mysql2-orm';\n\n/**\n * { condition: '`id` IN (?, ?, ?)', params: [16, 20, 50] }\n */\nOP.in('id', [16, 20, 50]);\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"in(column: string, subquery: string, params: Param[])"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { OP, Param, QueryBuilder } from 'mysql2-orm';\n\n/**\n * { sql: 'SELECT `id` FROM `users` WHERE `status` IN (?, ?)', params: [0, 2] }\n */\nconst subquery = QueryBuilder.select({\n  columns: ['id'],\n  table: 'users',\n  where: [OP.in('status', [0, 2])],\n});\n\n/**\n * { condition: '`userId` IN (SELECT `id` FROM `users` WHERE `status` IN (?, ?))', params: [0, 2] }\n */\nOP.in('userId', subquery.sql, subquery.params);\n"})})]})}function m(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>i});var r=s(7294);const t={},o=r.createContext(t);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);