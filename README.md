Use JSPM plugins for transpilition, why & how?

# Why?

'Typescript' is a super set of 'JavaScript'. It has several advantages than 'JavaScript', which are described on the web.

'Less' is a super set of 'CSS'. It has several advantages than 'CSS' which are described on the web.

'X' is a super set of 'Y'. It has several advantages than 'Y' which are described on the web.

Almost all of these facilities are transpiling something to some other thing.

Development using these facilities is recommended, but using them with jspm adds several extra benefits:

1-	You don't have to provide IDE & task based configuration for every IDE and task runner you use in your team. VSCode has its own tsconfig.json for Typescript, Web storm has its own, Visual Studio etc.

2-	If you’ve some ECMA 6 & 7 based JavaScript files, you’ve to configure something like babel as a transpiler, while you can handle them using Typescript as a transpiler with JSPM.

3- This is a unique approach for all your transpilition needs. It can also gives you a production ready results too.

4- Using JSPM, you've a modern ECMA based standard module loader, which is compatible with previews module loaders like require js too. 

Note that this won't remove Typescript type safety error messages from your project, as far as I tested on VS Code, Visual Studio and Web Storms.

# How?

I’m going to use JSPM typescript plugin as an example, thanks to [frankwallis’s Git Hub project.](https://github.com/frankwallis/plugin-typescript)

So, let’s start!

1.	Run “npm install jspm -g” to install JSPM CLI globally.
2.	Run “npm install jspm --save” to install JSPM locally.
3.	Run “jspm init” Accept all default values, and choose typescript as a transpiler.
4.	Run “jspm install ts” to add JSPM Typescript plugin.
5.	Create a src folder and create index.ts into that. Then write these configs in your config.js file:

```json
typescriptOptions: {
    "noImplicitAny": false,
    "typeCheck": true,
    "experimentalDecorators": true,
    "module": "system",
    "emitDecoratorMetadata": true,
    "experimentalAsyncFunctions": true,
    "taget": "ES5",
    "sourceMap": true
  },
  packages: {
    "src": { /* src folder */
      "main": "index", /* index.ts file inside src folder */
      "defaultExtension": "ts", /* .ts for Typescript files */
      "meta": {
        "*.ts": {
          "loader": "ts"
        }
      }
    }
  },
```

6.	Add an index.html, and then write these scripts in that:
```javascript
	<script src='/jspm_packages/system.src.js'></script>
	<script src='config.js'></script>
	<script>
		System.import('src' /* src folder */);
	</script>
```
7.	Run your app!

To transpile ECMA 6 & 7 based JavaScript files:

1. Create a new folder, for example 'ecmaSrc'

2. Create index.js in ecmaSrc folder

3. Add following package into config.js:

```json

    "ecmaSrc": { /* ecmaSrc folder */
      "main": "index", /* index.js file inside ecmaSrc folder */
      "defaultExtension": "js", /* .js for JavaScript files */
      "meta": {
        "*.js": {
          "loader": "ts"
        }
      }
    }

```

**Production:**

Run "jspm bundle-sfx src production.js"

Then use 'production.js' file in index.html, instead of all those previews files.

It has no dependency to any library, transpiler etc. and it is ECMA 5 based JavaScript file!

You don't have to deploy your typescript file into production too, and using generated source maps, there is a debug option available to you, so you can debug your original Typescript codes using chrome dev tools etc.

[There is a dedicated blog post about this repository, so you can write your comments there](http://fermium.co/post/75722936-4017-4f8a-9cbe-957079f35950/Tell-us-about-our-new-repository-“jspm-transpilers-sample”)
