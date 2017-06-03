# Typings for [deep-assign](https://github.com/sindresorhus/deep-assign) module

## Usage
```typescript
import deepAssign = require('deep-assign');

let obj1 = { age: 25 };
let obj2 = { id: 10, info: { name: 'John', surname: 'Doe' } };

deepAssign(obj1, obj2);
// => { age: 25, id: 10, info: { name: 'John', surname: 'Doe' } }
```

## API
**function deepAssign<T, S>(target: T, source: S): T & S;**<br />
This function is returned by `require(...)`.

There are also typed overloads that allows you to provide more source objects.<br />
**function deepAssign<T, S1, S2>(target: T, source1: S1, source2: S2): T & S1 & S2;**

Typed overloads are provided for maximum of 6 source objects, but there is also overload that accepts any number of source objects and returns `any`.<br />
**function deepAssign(target: any, ...sources: any[]): any;**

## How to install
The below command will install newest version of the typings
```bash
typings install deep-assign=github:legion44/typed-deep-assign --global --save
```
or, you can use npm
```
npm install --save-dev legion44/typed-deep-assign
```

## License
ISC