"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6013],{942:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var o=n(4848),r=n(8453);const s={sidebar_position:14,tags:["OP","Operators"]},a="notBetween",i={id:"documentation/queries/operators/not-between",title:"notBetween",description:"notBetween(column [Param, Param])",source:"@site/docs/documentation/queries/operators/not-between.mdx",sourceDirName:"documentation/queries/operators",slug:"/documentation/queries/operators/not-between",permalink:"/mysql2-orm/docs/documentation/queries/operators/not-between",draft:!1,unlisted:!1,editUrl:"https://github.com/wellwelwel/mysql2-orm/tree/main/website/docs/documentation/queries/operators/not-between.mdx",tags:[{label:"OP",permalink:"/mysql2-orm/docs/tags/op"},{label:"Operators",permalink:"/mysql2-orm/docs/tags/operators"}],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14,tags:["OP","Operators"]},sidebar:"docs",previous:{title:"between",permalink:"/mysql2-orm/docs/documentation/queries/operators/between"},next:{title:"Error Handling and Debugging",permalink:"/mysql2-orm/docs/documentation/error-handling"}},c={},m=[];function d(e){const t={blockquote:"blockquote",code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"notbetween",children:"notBetween"}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"notBetween(column: string, params: [Param, Param])"}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"import { OP, Param } from 'mysql2-orm';\n\n/**\n * { condition: '`createdAt` NOT BETWEEN ? AND ?', params: ['2023-01-01', '2024-01-01'] }\n */\nOP.notBetween('createdAt', ['2023-01-01', '2024-01-01']);\n"})})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var o=n(6540);const r={},s=o.createContext(r);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);