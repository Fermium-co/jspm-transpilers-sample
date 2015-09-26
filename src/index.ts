/// <reference path="../ecmaSrc/index.d.ts" />

import {EcmaBasedClass} from '../ecmaSrc/index'; // Usage of JavaScript file developed by ECMA 6 in Typescript file

export class TypeScriptClass {
	static show(): void {
		EcmaBasedClass.show();
		let msg = 'This is a Typescript file';
		alert(msg);
	}
}

TypeScriptClass.show();