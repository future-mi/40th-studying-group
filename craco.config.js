// craco.config.js
const path = require("path");

module.exports = {
  webpack: {
    configure: {
      resolve: {
        fallback: {
          "crypto": require.resolve("crypto-browserify"),
          "os": require.resolve("os-browserify/browser"),
          "stream": require.resolve("stream-browserify"),
          "buffer": require.resolve("buffer/"),
        },
      },
    },
  },
};