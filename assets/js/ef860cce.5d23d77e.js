"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[395],{6054:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"documentation/queries/delete","title":"DELETE","description":"For WHERE examples, please see the WHERE section.","source":"@site/docs/documentation/queries/delete.mdx","sourceDirName":"documentation/queries","slug":"/documentation/queries/delete","permalink":"/mysql2-orm/docs/documentation/queries/delete","draft":false,"unlisted":false,"editUrl":"https://github.com/wellwelwel/mysql2-orm/tree/main/website/docs/documentation/queries/delete.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"docs","previous":{"title":"UPDATE","permalink":"/mysql2-orm/docs/documentation/queries/update"},"next":{"title":"WHERE Clauses","permalink":"/mysql2-orm/docs/documentation/queries/where"}}');var l=t(4848),r=t(8453);const i={sidebar_position:4},o="DELETE",d={},a=[{value:"Delete all rows",id:"delete-all-rows",level:2},{value:"QueryBuilder",id:"querybuilder",level:3},{value:"MySQL2 ORM Class",id:"mysql2-orm-class",level:3},{value:"Limit the rows to be deleted",id:"limit-the-rows-to-be-deleted",level:2},{value:"QueryBuilder",id:"querybuilder-1",level:3},{value:"MySQL2 ORM Class",id:"mysql2-orm-class-1",level:3}];function c(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"delete",children:"DELETE"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["For ",(0,l.jsx)(n.strong,{children:"WHERE"})," examples, please see the ",(0,l.jsx)(n.strong,{children:"WHERE"})," section."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"delete-all-rows",children:"Delete all rows"}),"\n",(0,l.jsx)(n.h3,{id:"querybuilder",children:"QueryBuilder"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"// highlight-start\nimport { QueryBuilder } from 'mysql2-orm';\n// highlight-end\n\nconst { sql, params } = QueryBuilder.delete({\n  table: 'temp',\n});\n"})}),"\n",(0,l.jsx)(n.h3,{id:"mysql2-orm-class",children:"MySQL2 ORM Class"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"// highlight-start\nimport { MySQL } from 'mysql2-orm';\n\nconst pool = new MySQL({\n  // ...\n});\n// highlight-end\n\nawait pool.delete({\n  table: 'temp',\n});\n"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"SQL Query"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"DELETE FROM `temp`\n"})}),"\n",(0,l.jsx)("hr",{}),"\n",(0,l.jsx)(n.h2,{id:"limit-the-rows-to-be-deleted",children:"Limit the rows to be deleted"}),"\n",(0,l.jsx)(n.h3,{id:"querybuilder-1",children:"QueryBuilder"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"// highlight-start\nimport { QueryBuilder } from 'mysql2-orm';\n// highlight-end\n\nconst { sql, params } = QueryBuilder.delete({\n  table: 'test',\n  limit: 1,\n});\n"})}),"\n",(0,l.jsx)(n.h3,{id:"mysql2-orm-class-1",children:"MySQL2 ORM Class"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"// highlight-start\nimport { MySQL } from 'mysql2-orm';\n\nconst pool = new MySQL({\n  // ...\n});\n// highlight-end\n\nawait pool.delete({\n  table: 'test',\n  limit: 1,\n});\n"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"SQL Query"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"DELETE FROM `test` LIMIT ?\n-- params: ['1']\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var s=t(6540);const l={},r=s.createContext(l);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);