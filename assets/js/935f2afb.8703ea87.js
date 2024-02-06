"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docs":[{"type":"link","label":"Getting Started","href":"/mysql2-orm/docs/","docId":"index","unlisted":false},{"type":"category","label":"Documentation","collapsed":false,"items":[{"type":"link","label":"Connection","href":"/mysql2-orm/docs/documentation/connection","docId":"documentation/connection","unlisted":false},{"type":"category","label":"Queries","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"INSERT","href":"/mysql2-orm/docs/documentation/queries/insert","docId":"documentation/queries/insert","unlisted":false},{"type":"link","label":"SELECT","href":"/mysql2-orm/docs/documentation/queries/select","docId":"documentation/queries/select","unlisted":false},{"type":"link","label":"UPDATE","href":"/mysql2-orm/docs/documentation/queries/update","docId":"documentation/queries/update","unlisted":false},{"type":"link","label":"DELETE","href":"/mysql2-orm/docs/documentation/queries/delete","docId":"documentation/queries/delete","unlisted":false},{"type":"link","label":"WHERE Clauses","href":"/mysql2-orm/docs/documentation/queries/where","docId":"documentation/queries/where","unlisted":false},{"type":"category","label":"Operators","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"eq (equal)","href":"/mysql2-orm/docs/documentation/queries/operators/eq","docId":"documentation/queries/operators/eq","unlisted":false},{"type":"link","label":"ne (notEqual)","href":"/mysql2-orm/docs/documentation/queries/operators/ne","docId":"documentation/queries/operators/ne","unlisted":false},{"type":"link","label":"like","href":"/mysql2-orm/docs/documentation/queries/operators/like","docId":"documentation/queries/operators/like","unlisted":false},{"type":"link","label":"notLike","href":"/mysql2-orm/docs/documentation/queries/operators/not-like","docId":"documentation/queries/operators/not-like","unlisted":false},{"type":"link","label":"gt (greaterThan)","href":"/mysql2-orm/docs/documentation/queries/operators/gt","docId":"documentation/queries/operators/gt","unlisted":false},{"type":"link","label":"lt (lessThan)","href":"/mysql2-orm/docs/documentation/queries/operators/lt","docId":"documentation/queries/operators/lt","unlisted":false},{"type":"link","label":"gte (greaterThanOrEqual)","href":"/mysql2-orm/docs/documentation/queries/operators/gte","docId":"documentation/queries/operators/gte","unlisted":false},{"type":"link","label":"lte (lessThanOrEqual)","href":"/mysql2-orm/docs/documentation/queries/operators/lte","docId":"documentation/queries/operators/lte","unlisted":false},{"type":"link","label":"isNull","href":"/mysql2-orm/docs/documentation/queries/operators/is-null","docId":"documentation/queries/operators/is-null","unlisted":false},{"type":"link","label":"isNotNull","href":"/mysql2-orm/docs/documentation/queries/operators/is-not-null","docId":"documentation/queries/operators/is-not-null","unlisted":false},{"type":"link","label":"in","href":"/mysql2-orm/docs/documentation/queries/operators/in","docId":"documentation/queries/operators/in","unlisted":false},{"type":"link","label":"notIn","href":"/mysql2-orm/docs/documentation/queries/operators/notIn","docId":"documentation/queries/operators/notIn","unlisted":false},{"type":"link","label":"between","href":"/mysql2-orm/docs/documentation/queries/operators/between","docId":"documentation/queries/operators/between","unlisted":false},{"type":"link","label":"notBetween","href":"/mysql2-orm/docs/documentation/queries/operators/not-between","docId":"documentation/queries/operators/not-between","unlisted":false}],"href":"/mysql2-orm/docs/category/operators"}],"href":"/mysql2-orm/docs/category/queries"},{"type":"link","label":"Error Handling and Debugging","href":"/mysql2-orm/docs/documentation/error-handling","docId":"documentation/error-handling","unlisted":false},{"type":"category","label":"Helpers","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"bt (backtick)","href":"/mysql2-orm/docs/documentation/helpers/bt","docId":"documentation/helpers/bt","unlisted":false}],"href":"/mysql2-orm/docs/category/helpers"},{"type":"category","label":"MySQL2","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"DECIMAL","href":"/mysql2-orm/docs/documentation/mysql2/decimal","docId":"documentation/mysql2/decimal","unlisted":false}],"href":"/mysql2-orm/docs/category/mysql2"}],"collapsible":true,"href":"/mysql2-orm/docs/category/documentation"}]},"docs":{"documentation/connection":{"id":"documentation/connection","title":"Connection","description":"For detailed PoolOptions, see the MySQL2 createPool examples.","sidebar":"docs"},"documentation/error-handling":{"id":"documentation/error-handling","title":"Error Handling and Debugging","description":"By default, MySQL2 ORM is designed to avoid using the try-catch block in its methods, but it\'s possible to enable error throwing or debug them in cosole.","sidebar":"docs"},"documentation/helpers/bt":{"id":"documentation/helpers/bt","title":"bt (backtick)","description":"bt formats identifiers by enclosing them in backticks, supporting both single and compound identifiers.","sidebar":"docs"},"documentation/mysql2/decimal":{"id":"documentation/mysql2/decimal","title":"DECIMAL","description":"From MySQL2 Documentation","sidebar":"docs"},"documentation/queries/delete":{"id":"documentation/queries/delete","title":"DELETE","description":"For WHERE examples, please see the WHERE section.","sidebar":"docs"},"documentation/queries/insert":{"id":"documentation/queries/insert","title":"INSERT","description":"Single insertion","sidebar":"docs"},"documentation/queries/operators/between":{"id":"documentation/queries/operators/between","title":"between","description":"between(column [Param, Param])","sidebar":"docs"},"documentation/queries/operators/eq":{"id":"documentation/queries/operators/eq","title":"eq (equal)","description":"eq(column Param)","sidebar":"docs"},"documentation/queries/operators/gt":{"id":"documentation/queries/operators/gt","title":"gt (greaterThan)","description":"gt(column Param)","sidebar":"docs"},"documentation/queries/operators/gte":{"id":"documentation/queries/operators/gte","title":"gte (greaterThanOrEqual)","description":"gte(column Param)","sidebar":"docs"},"documentation/queries/operators/in":{"id":"documentation/queries/operators/in","title":"in","description":"in(column Param[])","sidebar":"docs"},"documentation/queries/operators/is-not-null":{"id":"documentation/queries/operators/is-not-null","title":"isNotNull","description":"isNotNull(column: string)","sidebar":"docs"},"documentation/queries/operators/is-null":{"id":"documentation/queries/operators/is-null","title":"isNull","description":"isNull(column: string)","sidebar":"docs"},"documentation/queries/operators/like":{"id":"documentation/queries/operators/like","title":"like","description":"like(column Param)","sidebar":"docs"},"documentation/queries/operators/lt":{"id":"documentation/queries/operators/lt","title":"lt (lessThan)","description":"lt(column Param)","sidebar":"docs"},"documentation/queries/operators/lte":{"id":"documentation/queries/operators/lte","title":"lte (lessThanOrEqual)","description":"lte(column Param)","sidebar":"docs"},"documentation/queries/operators/ne":{"id":"documentation/queries/operators/ne","title":"ne (notEqual)","description":"ne(column Param)","sidebar":"docs"},"documentation/queries/operators/not-between":{"id":"documentation/queries/operators/not-between","title":"notBetween","description":"notBetween(column [Param, Param])","sidebar":"docs"},"documentation/queries/operators/not-like":{"id":"documentation/queries/operators/not-like","title":"notLike","description":"notLike(column Param)","sidebar":"docs"},"documentation/queries/operators/notIn":{"id":"documentation/queries/operators/notIn","title":"notIn","description":"notIn(column Param[])","sidebar":"docs"},"documentation/queries/select":{"id":"documentation/queries/select","title":"SELECT","description":"For WHERE examples, please see the WHERE section.","sidebar":"docs"},"documentation/queries/update":{"id":"documentation/queries/update","title":"UPDATE","description":"For WHERE examples, please see the WHERE section.","sidebar":"docs"},"documentation/queries/where":{"id":"documentation/queries/where","title":"WHERE Clauses","description":"The WHERE clause is essential for filtering records in SELECT, UPDATE, and DELETE operations.","sidebar":"docs"},"index":{"id":"index","title":"Getting Started","description":"An ORM built on MySQL2, designed to be intuitive, productive and focused on essential functionality.","sidebar":"docs"}}}')}}]);