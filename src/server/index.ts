import * as Koa from 'koa';
import * as body from 'koa-body';
import * as Router from 'koa-router';
import { getAssets } from './handlers/assets';
import { getApp } from './handlers/app';

const app = new Koa();
const router = new Router();

app.use(body());

app.use(getAssets);

/* Routes */
router.get('/*', getApp);

app.use(router.routes());

app.listen(5000, () =>
  // tslint:disable-next-line
  console.log('Server started on port 5000'),
);
