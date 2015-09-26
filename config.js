System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  typescriptOptions: {
    "noImplicitAny": false,
    "typeCheck": true,
    "experimentalDecorators": true,
    "module": "system",
    "emitDecoratorMetadata": true,
    "experimentalAsyncFunctions": true,
    "taget": "ES5"
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  packages: {
    "src": {
      "main": "index",
      "defaultExtension": "ts",
      "meta": {
        "*.ts": {
          "loader": "ts"
        }
      }
    }
  },

  map: {
    "ts": "github:frankwallis/plugin-typescript@2.0.17",
    "typescript": "npm:typescript@1.6.2",
    "github:frankwallis/plugin-typescript@2.0.17": {
      "typescript": "npm:typescript@1.6.2"
    }
  }
});
