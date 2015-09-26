System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "none",
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "ts": "github:frankwallis/plugin-typescript@2.0.17",
    "github:frankwallis/plugin-typescript@2.0.17": {
      "typescript": "npm:typescript@1.6.2"
    }
  }
});
