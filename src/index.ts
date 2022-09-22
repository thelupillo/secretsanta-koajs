import 'dotenv/config';
import Koa from 'koa';
import cors from '@koa/cors';
import logger from 'koa-logger';
import bodyParser from 'koa-body';

import router from './routes/index.route';

const app = new Koa();

app.use(cors());
app.use(logger());
app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

app.listen({ port: process.env.SERVER_PORT }, () => {
  console.log(`Listening on port ${process.env.SERVER_PORT}`);
});
