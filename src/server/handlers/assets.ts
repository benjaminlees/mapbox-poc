import * as send from 'koa-send';
import * as path from 'path';
import * as fs from 'fs';
import * as Koa from 'koa';

const root = path.resolve(__dirname, '..', '..', '..', 'public');

export const getAssets = async (ctx: Koa.Context, next: () => void) => {
  if (!ctx.request.url.startsWith('/assets')) { return next(); }

  if (ctx.request.url.startsWith('/assets/bundle.js')) {
    return send(ctx, path.join('built', 'server', 'frontend', 'index.js'));
  }

  try {
    const requestedPath = ctx.request.url.replace('assets/', '');

    await new Promise(resolve =>
      fs.exists(path.resolve(root, requestedPath), exists => {
        resolve(exists);
      }),
    );

    return send(ctx, requestedPath, { root });
  } catch (e) {
    // TODO logger
    // tslint:disable-next-line
    console.log('File not found');
  }

  return next();
};
