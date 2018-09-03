import * as send from 'koa-send';
import * as path from 'path';
import * as fs from 'fs';
import * as Koa from 'koa';

const root = path.resolve(__dirname, '..', '..', '..', 'public');

export const getAssets = async (ctx: Koa.Context, next: Function) => {
  if (!ctx.request.url.startsWith('/assets')) return next();

  if (ctx.request.url.startsWith('/assets/bundle.js')) {
    return send(ctx, path.join('built', 'server', 'frontend', 'index.js'));
  }

  try {
    const requestedPath = ctx.request.url;
    console.log(ctx.request.url);
  
    await new Promise(function (resolve) {
      fs.exists(path.resolve(root, requestedPath), function (exists) {
        resolve(exists);
      })
    });

    return send(ctx, ctx.url, { root });
  } catch (e) {
    console.log('File not found');
  }

  return next();
}