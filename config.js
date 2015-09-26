System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "none",
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  typescriptOptions: { /* typescript options */
    "noImplicitAny": false,
    "typeCheck": true,
    "experimentalDecorators": true,
    "module": "system",
    "emitDecoratorMetadata": true,
    "experimentalAsyncFunctions": true,
    "taget": "ES5"
  },
  packages: {
    "src": { /* src folder */
      "main": "index", /* index.ts file in src folder */
      "defaultExtension": "ts",
      "meta": {
        "*.ts": {
          "loader": "ts"
        }
      }
    },
  },
  map: {
    "ts": "github:frankwallis/plugin-typescript@2.0.17",
    "github:frankwallis/plugin-typescript@2.0.17": {
      "typescript": "npm:typescript@1.6.2"
    }
  }
});
