"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3247],{5584:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=o(5893),r=o(1151);const s={sidebar_position:6,tags:["OP","Operators"]},a="lt (lessThan)",i={id:"documentation/queries/operators/lt",title:"lt (lessThan)",description:"lt(column Param)",source:"@site/docs/documentation/queries/operators/lt.mdx",sourceDirName:"documentation/queries/operators",slug:"/documentation/queries/operators/lt",permalink:"/mysql2-orm/docs/documentation/queries/operators/lt",draft:!1,unlisted:!1,editUrl:"https://github.com/wellwelwel/mysql2-orm/tree/main/website/docs/documentation/queries/operators/lt.mdx",tags:[{label:"OP",permalink:"/mysql2-orm/docs/tags/op"},{label:"Operators",permalink:"/mysql2-orm/docs/tags/operators"}],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,tags:["OP","Operators"]},sidebar:"docs",previous:{title:"gt (greaterThan)",permalink:"/mysql2-orm/docs/documentation/queries/operators/gt"},next:{title:"gte (greaterThanOrEqual)",permalink:"/mysql2-orm/docs/documentation/queries/operators/gte"}},c={},l=[];function m(e){const t={blockquote:"blockquote",code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"lt-lessthan",children:"lt (lessThan)"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"lt(column: string, param: Param)"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"import { OP, Param } from 'mysql2-orm';\n\n/**\n * { condition: '`id` < ?', params: [16] }\n */\nOP.lt('id', 16);\n\n/**\n * { condition: '`createdAt` < ?', params: ['2024-01-01'] }\n */\nOP.lt('createdAt', '2024-01-01');\n"})})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},1151:(e,t,o)=>{o.d(t,{Z:()=>i,a:()=>a});var n=o(7294);const r={},s=n.createContext(r);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);