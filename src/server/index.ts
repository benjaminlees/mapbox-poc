import * as Koa from 'koa';
import * as body from 'koa-body';
import * as Router from 'koa-router';
import * as send from 'koa-send';
import * as path from 'path';

const app = new Koa();
const router = new Router();

app.use(body());

app.use(async (ctx, next) => {
  if (ctx.request.url.startsWith('/assets/bundle.js')) {
    return send(ctx, path.join('built', 'server', 'frontend', 'index.js'));
  }
  return next();
});

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
  console.log('Server started on port 5000, proxy on http://localhost:9000'),
);
