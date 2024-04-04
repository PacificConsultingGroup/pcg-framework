# PCG Framework
This is a collection of shared utilities and tools used across PCG solutions. If you find the framework useful for your projects, you may use the source code, any part or whole under CC BY-NC 4.0 License.

## Adding framework to your project dependencies.
In your package.json

```json
"dependencies": {
    "pcgframework": "PacificConsultingGroup/pcg-framework"
}
```

## Using PCG Framework
```js
const Helper = require('pcgframework/helper');
const helper = new Helper();

let test = null;
console.log(helper.isNull(test)); // true
```