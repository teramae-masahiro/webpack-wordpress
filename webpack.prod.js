import { merge } from 'webpack-merge';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import common from './webpack.common.js';

export default merge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
  ],
});
