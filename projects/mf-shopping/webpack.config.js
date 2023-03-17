const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfShopping',
  filename: 'mfShoppingRemoteEntry.js',

  exposes: {
    './ShoppingModule': './projects/mf-shopping/src/app/shopping/shopping.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
