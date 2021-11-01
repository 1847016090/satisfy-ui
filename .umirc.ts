import { defineConfig } from 'dumi';

// 此处更换为自己的仓库名
let base = '/';
let publicPath = '/';

if (process.env.SITE_BUILD_ENV === 'PREVIEW') {
  base = undefined;
  publicPath = undefined;
}

export default defineConfig({
  title: 'Satisfy UI',
  mode: 'site',
  outputPath: 'doc-site',
  exportStatic: {},
  dynamicImport: {},
  webpack5: {},
  mfsu: {},
  base,
  publicPath,
});
