const path = require('path');

module.exports = {
  entry: {
    main: './src/test.ts',
  },
  resolve: {
    alias: {
      '@angular/material$': '@angular/material/index.js',
      '@angular/cdk$': '@angular/cdk/index.js',
      '@angular/common$': '@angular/common/index.js',
      '@angular/core$': '@angular/core/index.js',
      '@angular/forms$': '@angular/forms/index.js',
      '@angular/platform-browser$': '@angular/platform-browser/index.js',
      '@angular/platform-browser-dynamic$': '@angular/platform-browser-dynamic/index.js',
    },
  },
  module: {
    rules: [
      {
        test: /@angular[/\\]core[/\\]fesm5/,
        parser: { system: true },  // enable SystemJS
      },
    ],
  },
};
