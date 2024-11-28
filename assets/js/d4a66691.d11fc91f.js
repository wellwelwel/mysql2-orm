"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6216],{5369:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"documentation/queries/operators/like","title":"like","description":"like(column Param)","source":"@site/docs/documentation/queries/operators/like.mdx","sourceDirName":"documentation/queries/operators","slug":"/documentation/queries/operators/like","permalink":"/mysql2-orm/docs/documentation/queries/operators/like","draft":false,"unlisted":false,"editUrl":"https://github.com/wellwelwel/mysql2-orm/tree/main/website/docs/documentation/queries/operators/like.mdx","tags":[{"inline":true,"label":"OP","permalink":"/mysql2-orm/docs/tags/op"},{"inline":true,"label":"Operators","permalink":"/mysql2-orm/docs/tags/operators"}],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"tags":["OP","Operators"]},"sidebar":"docs","previous":{"title":"ne (notEqual)","permalink":"/mysql2-orm/docs/documentation/queries/operators/ne"},"next":{"title":"notLike","permalink":"/mysql2-orm/docs/documentation/queries/operators/not-like"}}');var r=o(4848),i=o(8453);const s={sidebar_position:3,tags:["OP","Operators"]},a="like",l={},c=[];function m(e){const n={blockquote:"blockquote",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"like",children:"like"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"like(column: string, param: Param)"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { OP, Param } from 'mysql2-orm';\n\n/**\n * { condition: '`email` LIKE ?', params: ['%gmail.com'] }\n */\nOP.like('email', '%gmail.com');\n\n/**\n * { condition: '`email` LIKE ?', params: ['john@%'] }\n */\nOP.like('email', 'john@%');\n\n/**\n * { condition: '`email` LIKE ?', params: ['%gmail%'] }\n */\nOP.like('email', '%gmail%');\n"})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>a});var t=o(6540);const r={},i=t.createContext(r);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);