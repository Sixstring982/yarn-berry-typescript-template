import * as esbuild from 'esbuild';
import * as path from 'path';
import fsExtra from 'fs-extra';
import fs from 'fs';

const isArgPresent = (arg: string): boolean => process.argv.includes(arg);

const OUT_DIR = path.join(__dirname, 'dist');
fs.rmSync(OUT_DIR, { recursive: true, force: true });

//
// Copy static assets
//

fsExtra.copySync(path.join(__dirname, 'static'), OUT_DIR);

//
// Build bundles
//

if (isArgPresent('--watch')) {
  console.log('Starting build in watch mode...');

  esbuild.serve({
    host: '0.0.0.0',
    port: 4321,
    servedir: OUT_DIR,
  }, {}).catch((error) => {
    console.error(error);
  });
}

esbuild.build({
  entryPoints: [path.join(__dirname, 'src', 'main.ts')],
  bundle: true,
  outdir: OUT_DIR,
  watch: !isArgPresent('--watch') ? undefined : {
    onRebuild: (error) => {
      if (error) {
        console.error(error);
        return;
      }
      console.log('Build successful.');
    }
  }
})
  .catch(error => {
    console.error(error);
  })