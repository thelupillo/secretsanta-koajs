import Router from '@koa/router';

const router = new Router({ prefix: "/" });

// GET /
router.get('/', (ctx) => {
  ctx.status = 200;
  ctx.body = { message: "OK" };
});

export default router;
