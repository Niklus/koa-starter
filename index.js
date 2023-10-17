const Koa = require("koa");
const logger = require("koa-logger");
const router = require("@koa/router")();

const app = new Koa();

app.use(logger());

router.get("/", (ctx) => {
  ctx.body = "<h1>Hello World</h1>";
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
