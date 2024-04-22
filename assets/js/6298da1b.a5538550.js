"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5264],{1594:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var l=s(4848),r=s(8453);const i={sidebar_position:1},t="SELECT",o={id:"documentation/queries/select",title:"SELECT",description:"For WHERE examples, please see the WHERE section.",source:"@site/docs/documentation/queries/select.mdx",sourceDirName:"documentation/queries",slug:"/documentation/queries/select",permalink:"/mysql2-orm/docs/documentation/queries/select",draft:!1,unlisted:!1,editUrl:"https://github.com/wellwelwel/mysql2-orm/tree/main/website/docs/documentation/queries/select.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"INSERT",permalink:"/mysql2-orm/docs/documentation/queries/insert"},next:{title:"UPDATE",permalink:"/mysql2-orm/docs/documentation/queries/update"}},a={},c=[{value:"Simple SELECT",id:"simple-select",level:2},{value:"QueryBuilder",id:"querybuilder",level:3},{value:"MySQL2 ORM Class",id:"mysql2-orm-class",level:3},{value:"SELECT (columns: string[])",id:"select-columns-string",level:2},{value:"QueryBuilder",id:"querybuilder-1",level:3},{value:"MySQL2 ORM Class",id:"mysql2-orm-class-1",level:3},{value:"SELECT (columns: string)",id:"select-columns-string-1",level:2},{value:"QueryBuilder",id:"querybuilder-2",level:3},{value:"MySQL2 ORM Class",id:"mysql2-orm-class-2",level:3},{value:"SELECT (limit: number)",id:"select-limit-number",level:2},{value:"QueryBuilder",id:"querybuilder-3",level:3},{value:"MySQL2 ORM Class",id:"mysql2-orm-class-3",level:3},{value:"SELECT (offset: number)",id:"select-offset-number",level:2},{value:"QueryBuilder",id:"querybuilder-4",level:3},{value:"MySQL2 ORM Class",id:"mysql2-orm-class-4",level:3},{value:"SELECT (orderBy: [string, &#39;ASC&#39; | &#39;DESC&#39;])",id:"select-orderby-string-asc--desc",level:2},{value:"QueryBuilder",id:"querybuilder-5",level:3},{value:"MySQL2 ORM Class",id:"mysql2-orm-class-5",level:3},{value:"SELECT (groupBy: string)",id:"select-groupby-string",level:2},{value:"QueryBuilder",id:"querybuilder-6",level:3},{value:"MySQL2 ORM Class",id:"mysql2-orm-class-6",level:3},{value:"SELECT (join: JoinOptions | JoinOptions[])",id:"select-join-joinoptions--joinoptions",level:2},{value:"QueryBuilder",id:"querybuilder-7",level:3},{value:"MySQL2 ORM Class",id:"mysql2-orm-class-7",level:3},{value:"Available options",id:"available-options",level:2},{value:"Type Assertion",id:"type-assertion",level:2}];function d(e){const n={admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"select",children:"SELECT"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["For ",(0,l.jsx)(n.strong,{children:"WHERE"})," examples, please see the ",(0,l.jsx)(n.strong,{children:"WHERE"})," section."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"simple-select",children:"Simple SELECT"}),"\n",(0,l.jsx)(n.h3,{id:"querybuilder",children:"QueryBuilder"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"// highlight-start\nimport { QueryBuilder } from 'mysql2-orm';\n// highlight-end\n\nconst { sql, params } = QueryBuilder.select({\n  table: 'test',\n});\n"})}),"\n",(0,l.jsx)(n.h3,{id:"mysql2-orm-class",children:"MySQL2 ORM Class"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"// highlight-start\nimport { MySQL } from 'mysql2-orm';\n\nconst pool = new MySQL({\n  // ...\n});\n// highlight-end\n\n/**\n * @return false | RowDataPacket[]\n */\nawait pool.select({\n  table: 'test',\n});\n"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"SQL Query"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM `test`\n"})}),"\n",(0,l.jsx)("hr",{}),"\n",(0,l.jsx)(n.h2,{id:"select-columns-string",children:"SELECT (columns: string[])"}),"\n",(0,l.jsx)(n.h3,{id:"querybuilder-1",children:"QueryBuilder"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"// highlight-start\nimport { QueryBuilder } from 'mysql2-orm';\n// highlight-end\n\nconst { sql, params } = QueryBuilder.select({\n  table: 'test',\n  columns: ['foo'],\n});\n"})}),"\n",(0,l.jsx)(n.h3,{id:"mysql2-orm-class-1",children:"MySQL2 ORM Class"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"// highlight-start\nimport { MySQL } from 'mysql2-orm';\n\nconst pool = new MySQL({\n  // ...\n});\n// highlight-end\n\n/**\n * @return false | RowDataPacket[]\n */\nawait pool.select({\n  table: 'test',\n  columns: ['foo'],\n});\n"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"SQL Query"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT `foo` FROM `test`\n"})}),"\n",(0,l.jsx)("hr",{}),"\n",(0,l.jsx)(n.h2,{id:"select-columns-string-1",children:"SELECT (columns: string)"}),"\n",(0,l.jsx)(n.h3,{id:"querybuilder-2",children:"QueryBuilder"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"// highlight-start\nimport { QueryBuilder } from 'mysql2-orm';\n// highlight-end\n\nconst { sql, params } = QueryBuilder.select({\n  table: 'test',\n  columns: 'COUNT(*) AS `total`',\n});\n"})}),"\n",(0,l.jsx)(n.h3,{id:"mysql2-orm-class-2",children:"MySQL2 ORM Class"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"// highlight-start\nimport { MySQL } from 'mysql2-orm';\n\nconst pool = new MySQL({\n  // ...\n});\n// highlight-end\n\n/**\n * @return false | RowDataPacket[]\n */\nawait pool.select({\n  table: 'test',\n  columns: 'COUNT(*) AS `total`',\n});\n"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"SQL Query"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT COUNT(*) AS `total` FROM `test`\n"})}),"\n",(0,l.jsx)("hr",{}),"\n",(0,l.jsx)(n.h2,{id:"select-limit-number",children:"SELECT (limit: number)"}),"\n",(0,l.jsx)(n.h3,{id:"querybuilder-3",children:"QueryBuilder"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"// highlight-start\nimport { QueryBuilder } from 'mysql2-orm';\n// highlight-end\n\nconst { sql, params } = QueryBuilder.select({\n  table: 'test',\n  limit: 10,\n});\n"})}),"\n",(0,l.jsx)(n.h3,{id:"mysql2-orm-class-3",children:"MySQL2 ORM Class"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"// highlight-start\nimport { MySQL } from 'mysql2-orm';\n\nconst pool = new MySQL({\n  // ...\n});\n// highlight-end\n\n/**\n * @return false | RowDataPacket[]\n */\nawait pool.select({\n  table: 'test',\n  limit: 10,\n});\n"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"SQL Query"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM `test` LIMIT ?\n-- params: ['10']\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["By using ",(0,l.jsx)(n.code,{children:"limit: 1"}),", it will return a single ",(0,l.jsx)(n.strong,{children:"row"})," (",(0,l.jsx)(n.code,{children:"RowDataPacket"}),")."]}),"\n"]}),"\n",(0,l.jsx)("hr",{}),"\n",(0,l.jsx)(n.h2,{id:"select-offset-number",children:"SELECT (offset: number)"}),"\n",(0,l.jsx)(n.h3,{id:"querybuilder-4",children:"QueryBuilder"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"// highlight-start\nimport { QueryBuilder } from 'mysql2-orm';\n// highlight-end\n\nconst { sql, params } = QueryBuilder.select({\n  table: 'test',\n  limit: 10,\n  offset: 20,\n});\n"})}),"\n",(0,l.jsx)(n.h3,{id:"mysql2-orm-class-4",children:"MySQL2 ORM Class"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"// highlight-start\nimport { MySQL } from 'mysql2-orm';\n\nconst pool = new MySQL({\n  // ...\n});\n// highlight-end\n\nawait pool.select({\n  table: 'test',\n  limit: 10,\n  offset: 20,\n});\n"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"SQL Query"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM `test` LIMIT ? OFFSET ?\n-- params: ['10', '20']\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["By using ",(0,l.jsx)(n.code,{children:"limit: 1"}),", it will return a single ",(0,l.jsx)(n.strong,{children:"row"}),"."]}),"\n"]}),"\n",(0,l.jsx)("hr",{}),"\n",(0,l.jsx)(n.h2,{id:"select-orderby-string-asc--desc",children:"SELECT (orderBy: [string, 'ASC' | 'DESC'])"}),"\n",(0,l.jsx)(n.h3,{id:"querybuilder-5",children:"QueryBuilder"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"// highlight-start\nimport { QueryBuilder } from 'mysql2-orm';\n// highlight-end\n\nconst { sql, params } = QueryBuilder.select({\n  table: 'test',\n  orderBy: ['id'],\n  // orderBy: ['id', 'ASC'],\n  // orderBy: ['id', 'DESC'],\n});\n"})}),"\n",(0,l.jsx)(n.h3,{id:"mysql2-orm-class-5",children:"MySQL2 ORM Class"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"// highlight-start\nimport { MySQL } from 'mysql2-orm';\n\nconst pool = new MySQL({\n  // ...\n});\n// highlight-end\n\nawait pool.select({\n  table: 'test',\n  orderBy: ['id'],\n  // orderBy: ['id', 'ASC'],\n  // orderBy: ['id', 'DESC'],\n});\n"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"SQL Query"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM `test` ORDER BY `id` ASC\n"})}),"\n",(0,l.jsx)("hr",{}),"\n",(0,l.jsx)(n.h2,{id:"select-groupby-string",children:"SELECT (groupBy: string)"}),"\n",(0,l.jsx)(n.h3,{id:"querybuilder-6",children:"QueryBuilder"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"// highlight-start\nimport { QueryBuilder } from 'mysql2-orm';\n// highlight-end\n\nconst { sql, params } = QueryBuilder.select({\n  columns: '`age`, COUNT(*) AS `total`',\n  table: 'users',\n  groupBy: 'age',\n});\n"})}),"\n",(0,l.jsx)(n.h3,{id:"mysql2-orm-class-6",children:"MySQL2 ORM Class"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"// highlight-start\nimport { MySQL } from 'mysql2-orm';\n\nconst pool = new MySQL({\n  // ...\n});\n// highlight-end\n\nawait pool.select({\n  columns: '`age`, COUNT(*) AS `total`',\n  table: 'users',\n  groupBy: 'age',\n});\n"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"SQL Query"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT `age`, COUNT(*) AS `total` FROM `users` GROUP BY `age`\n"})}),"\n",(0,l.jsx)("hr",{}),"\n",(0,l.jsx)(n.h2,{id:"select-join-joinoptions--joinoptions",children:"SELECT (join: JoinOptions | JoinOptions[])"}),"\n",(0,l.jsx)(n.h3,{id:"querybuilder-7",children:"QueryBuilder"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"// highlight-start\nimport { QueryBuilder } from 'mysql2-orm';\n// highlight-end\n\nconst { sql, params } = QueryBuilder.select({\n  columns: ['users.name', 'users.age'],\n  table: 'preferences',\n  join: {\n    type: 'left',\n    table: 'users',\n    on: {\n      a: 'preferences.userId',\n      b: 'users.id',\n    },\n  },\n});\n"})}),"\n",(0,l.jsx)(n.h3,{id:"mysql2-orm-class-7",children:"MySQL2 ORM Class"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"// highlight-start\nimport { MySQL } from 'mysql2-orm';\n\nconst pool = new MySQL({\n  // ...\n});\n// highlight-end\n\nawait pool.select({\n  columns: ['users.name', 'users.age'],\n  table: 'preferences',\n  join: {\n    type: 'left',\n    table: 'users',\n    on: {\n      a: 'preferences.userId',\n      b: 'users.id',\n    },\n  },\n});\n"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"SQL Query"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT `users`.`name`, `users`.`age`\nFROM `preferences`\nLEFT JOIN `users` ON `preferences`.`userId` = `users`.`id`\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["You can insert multiple ",(0,l.jsx)(n.code,{children:"JOIN"})," by using them within an array."]}),"\n"]}),"\n",(0,l.jsx)("hr",{}),"\n",(0,l.jsx)(n.h2,{id:"available-options",children:"Available options"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"// highlight-start\nimport { QueryOptions } from 'mysql2/promise.js';\n// highlight-end\n\nexport type SelectOptions = {\n  distinct?: boolean;\n  columns?: string | string[];\n  table: string;\n  join?: JoinOptions | JoinOptions[];\n  where?: string | NestedCondition;\n  limit?: number;\n  offset?: number;\n  groupBy?: string;\n  orderBy?: [string] | [string, 'ASC' | 'DESC'];\n  params?: Param[];\n\n  // MySQL2 ORM class only\n  typeCast?: QueryOptions['typeCast'];\n  rowsAsArray?: QueryOptions['rowsAsArray'];\n};\n\nexport type JoinOptions = {\n  type: 'left' | 'right' | 'inner' | 'cross';\n  table: string;\n  on: {\n    a: string;\n    b: string;\n  };\n  outer?: boolean;\n};\n"})}),"\n",(0,l.jsx)("hr",{}),"\n",(0,l.jsx)(n.h2,{id:"type-assertion",children:"Type Assertion"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"select"})," method provides type assertion with the ",(0,l.jsx)(n.strong,{children:"MySQL2 ORM"})," class."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"import { RowDataPacket } from 'mysql2/promise';\nimport { MySQL } from 'mysql2-orm';\n\n// highlight-start\nconst pool = new MySQL({\n  // ...\n});\n// highlight-end\n\ninterface User extends RowDataPacket {\n  id: number;\n  name: string;\n}\n\n/**\n * @return false | User[]\n */\nconst users = await pool.select<User[]>({\n  table: 'test',\n});\n\n/**\n * @return false | User\n */\nconst user = await pool.select<User[]>({\n  table: 'test',\n  limit: 1,\n});\n"})}),"\n",(0,l.jsxs)(n.admonition,{type:"note",children:[(0,l.jsxs)(n.p,{children:["In these examples, ",(0,l.jsx)(n.code,{children:"User[]"})," should be used for type assertion regardless of the return being ",(0,l.jsx)(n.code,{children:"User[]"})," or ",(0,l.jsx)(n.code,{children:"User"}),".",(0,l.jsx)("br",{}),"\nThe return type as ",(0,l.jsx)(n.code,{children:"User"})," or ",(0,l.jsx)(n.code,{children:"User[]"})," is determined by ",(0,l.jsx)(n.code,{children:"limit"}),", not the type assertion itself:"]}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsxs)(n.strong,{children:["If no ",(0,l.jsx)(n.code,{children:"limit"})," is set or it's greater than 1:"]})," ",(0,l.jsx)(n.code,{children:"User[]"})," will be returned."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsxs)(n.strong,{children:["Setting ",(0,l.jsx)(n.code,{children:"limit: 1"}),":"]})," ",(0,l.jsx)(n.code,{children:"User"})," will be returned."]}),"\n"]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>o});var l=s(6540);const r={},i=l.createContext(r);function t(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);