"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8967],{7903:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"documentation/queries/operators/ne","title":"ne (notEqual)","description":"ne(column Param)","source":"@site/docs/documentation/queries/operators/ne.mdx","sourceDirName":"documentation/queries/operators","slug":"/documentation/queries/operators/ne","permalink":"/mysql2-orm/docs/documentation/queries/operators/ne","draft":false,"unlisted":false,"editUrl":"https://github.com/wellwelwel/mysql2-orm/tree/main/website/docs/documentation/queries/operators/ne.mdx","tags":[{"inline":true,"label":"OP","permalink":"/mysql2-orm/docs/tags/op"},{"inline":true,"label":"Operators","permalink":"/mysql2-orm/docs/tags/operators"}],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"tags":["OP","Operators"]},"sidebar":"docs","previous":{"title":"eq (equal)","permalink":"/mysql2-orm/docs/documentation/queries/operators/eq"},"next":{"title":"like","permalink":"/mysql2-orm/docs/documentation/queries/operators/like"}}');var r=o(4848),s=o(8453);const a={sidebar_position:2,tags:["OP","Operators"]},i="ne (notEqual)",c={},l=[];function u(e){const n={blockquote:"blockquote",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"ne-notequal",children:"ne (notEqual)"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"ne(column: string, param: Param)"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { OP, Param } from 'mysql2-orm';\n\n/**\n * { condition: '`id` != ?', params: [16] }\n */\nOP.ne('id', 16);\n\n/**\n * { condition: '`name` != ?', params: ['John'] }\n */\nOP.ne('name', 'John');\n"})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>i});var t=o(6540);const r={},s=t.createContext(r);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);