[mysql2]: https://github.com/sidorares/node-mysql2
[npm-image]: https://img.shields.io/npm/v/mysql2-orm.svg
[npm-url]: https://npmjs.org/package/mysql2-orm
[downloads-image]: https://img.shields.io/npm/dt/mysql2-orm.svg
[downloads-url]: https://npmjs.org/package/mysql2-orm
[ci-url]: https://github.com/wellwelwel/mysql2-orm/actions/workflows/ci.yml?query=branch%3Amain
[ci-image]: https://img.shields.io/github/actions/workflow/status/wellwelwel/mysql2-orm/ci.yml?event=push&style=flat&label=ci&branch=main
[license-url]: https://github.com/wellwelwel/mysql2-orm/blob/main/License
[license-image]: https://img.shields.io/npm/l/mysql2-orm.svg?maxAge=2592000

# MySQL2 ORM

<img align="right" width="64" height="64" alt="Logo" src="website/static/img/favicon.svg">

An **ORM** built on [**MySQL2**][mysql2], designed to be intuitive, productive and focused on essential functionality.

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![GitHub Workflow Status (with event)][ci-image]][ci-url]
[![License][license-image]][license-url]

> This project uses **mysql2/promise**, **createPool** and **execute** behind the scenes.

## Table of Contents

- [Why](#why)
- [Documentation](#documentation)
- [Quickstart](#quickstart)
  - [Installation](#installation)
  - [Import](#import)
  - [Connect](#connect)
  - [Basic Usage Example](#basic-usage-example)
  - [Close the Connection](#close-the-connection)
- [Curiosity](#curiosity)
  - [Why a dice?](#why-a-dice)
- [Acknowledgements](#acknowledgements)

---

## Why

- An user-friendly ORM for **INSERT**, **SELECT**, **UPDATE**, **DELETE** and **WHERE** clauses.
- Automatic **Prepared Statements** (including **LIMIT** and **OFFSET**).
- You can also simply use **QueryBuilder** to mount your queries and use them in your original [**MySQL2**][mysql2] connection.
- It will smartly detect and release the connection when using `commit` or `rollback` in a transaction.
- It exposes the `execute` and `query` original methods from [**MySQL2**][mysql2] Pool class.
- **Strictly Typed:** No usage of `any`, `as` neither `satisfies` at all.

---

## Documentation

See detailed specifications and usage in [**Documentation**](https://wellwelwel.github.io/mysql2-orm/docs/category/documentation) section for queries, advanced concepts and much more.

---

## Quickstart

### Installation

```shell
npm i mysql2-orm
```

If you are using TypeScript, you will need to install [@types/node](https://www.npmjs.com/package/@types/node).

```shell
npm i -D @types/node
```

---

### Import

```ts
import { MySQL } from 'mysql2-orm';
```

---

### Connect

```ts
const pool = new MySQL({
  host: '',
  user: '',
  database: '',
  // ...
});
```

---

### Basic Usage Example

The following example is based on **TypeScript** and **ES Modules**, but you can also use **JavaScript** and **CommonJS**.

```ts
const user = await pool.select({
  table: 'users',
  where: OP.eq('id', 16),
  limit: 1,
});
```

- See all available operators (**OP**) [here](https://wellwelwel.github.io/mysql2-orm/docs/category/operators).
- Due to `limit: 1`, it returns a direct object with the **row** result.
- The result of **getUser** will be a `RowDataPacket` or `false`.

> It's equivalent to:
>
> ```ts
> import mysql, { RowDataPacket } from 'mysql2/promise';
>
> const pool = mysql.createPool({
>   // ...
> });
>
> const [users] = execute<RowDataPacket[]>(
>   'SELECT * FROM `users` WHERE `id` = ? LIMIT ?',
>   [16, '1']
> );
>
> const user = users?.[0] || false;
> ```

---

### Close the Connection

```ts
await pool.end();
```

---

## Curiosity

### Why a dice?

While in English <ins>dice</ins> and <ins>data</ins> each have their own word, in Brazil, both the dice and "data" are called "**dado**" even though they refer to different things:

|     | 🇺🇸 English | 🇧🇷 Portuguese (BR) |
| --- | ---------- | ------------------ |
| 💾  | data       | dado               |
| 🎲  | dice       | **dado**           |

---

## Acknowledgements

- [**MySQL2**][mysql2] is maintained by [**@sidorares**](https://github.com/sidorares).
- The operator names **eq**, **ne**, **gt**, **lt**, **gte** and **lte** are inspired by [**Sequelize**](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#operators).
- [**Contributors**](https://github.com/wellwelwel/mysql2-orm/graphs/contributors).
