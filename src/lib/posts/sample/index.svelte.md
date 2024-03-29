---
title: "Sample記事"
date: "2021-12-01"
updated: "2021-12-01"
tags:
  - "sveltekit"
  - "markdown"
  - "svelte"
coverImage: "sample.png"
description: This post demonstrates how to include a Svelte component in a Markdown post.
---

<script lang="ts">
import {Image} from "$lib/components"
</script>

## blog

my personal blog

## Get started

Install the dependencies...

`test`

```bash
npm install
```

...then start

```bash
npm run dev
```

```javascript
const express = require("express");

const app = express();
const cors = require("cors");
const compress = require("compression");
const methodOverride = require("method-override");
const helmet = require("helmet");
const xss = require("xss-clean");
const morgan = require("morgan");
const { initSentry } = require("./config");
const {
  notFoundHandler,
  errorHandler,
  removeFavicon,
  MORGAN_FORMAT,
  syntaxError
} = require("./utils");
const { routeV1 } = require("./routes");
require("dotenv").config();

app.use(compress()); // gzip compression
app.use(methodOverride()); // lets you use HTTP verbs
app.use(helmet()); // secure apps by setting various HTTP headers
app.use(cors()); // enable cors
app.options("*", cors()); // cors setup
app.use(express.json({ limit: "200kb" })); // json limit

const morganFormat = MORGAN_FORMAT;
app.use(morgan(morganFormat, { stream: process.stderr }));

const Sentry = initSentry(app);
if (process.env.NODE_ENV !== "test") {
  app.use(Sentry.Handlers.requestHandler());
}
app.use(Sentry.Handlers.tracingHandler());
app.use(xss()); // handler xss attack
app.use(routeV1); // routing
app.use(notFoundHandler); // 404 handler
app.use(errorHandler); // error handlerr
app.use(syntaxError); // error handlerr syntax
app.use(removeFavicon); // remove favicon request

app.use(Sentry.Handlers.errorHandler());

module.exports = app;
```

```rust

fn main() {
    let answer = square(3);
    println!("The answer is {}", answer);
}

fn square(num: i32) -> i32 {
    num * num;
}

```
