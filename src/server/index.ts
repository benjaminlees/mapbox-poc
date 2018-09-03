import * as Koa from 'koa';
import * as body from 'koa-body';
import * as Router from 'koa-router';
import { getAssets } from './handlers/assets';

const app = new Koa();
const router = new Router();

app.use(body());

app.use(getAssets);

/* Routes */
router.get('/*', ctx => {
  ctx.body = `
    <html>
      <body>
        <div id="root"></div>
        <script src="/assets/bundle.js"></script>
      </body>
    </html>
  `;
});

app.use(router.routes());

app.listen(5000, () =>
  // tslint:disable-next-line
  console.log('Server started on port 5000'),
);
