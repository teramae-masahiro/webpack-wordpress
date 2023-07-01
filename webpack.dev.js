import { merge } from 'webpack-merge';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';
import common from './webpack.common.js';

export default merge(common, {
  mode: 'development',
  watch: true,
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: 'http://localhost:80/',
      files: ['./**/*.php', './**/*.html', './src/**/*.scss'],
      reloadDelay: 0,
      reloadDebounce: 500,
      reloadOnRestart: true,
    }),
  ],
});
