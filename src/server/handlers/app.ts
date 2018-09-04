import * as Koa from 'koa';

export const getApp = (ctx: Koa.Context) => {
  ctx.body = `
    <html>
      <head>
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700,900" rel="stylesheet">
      </head>
      <body>
        <div id="root"></div>
        <script src="/assets/bundle.js"></script>
      </body>
    </html>
  `;
};
