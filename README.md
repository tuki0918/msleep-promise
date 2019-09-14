# msleep-promise

`msleep-promise` is a simple sleep function that wraps the `setTimeout` function.

----

Installation

```
$ npm i msleep-promise
```

Usage

```
const msleep = require('msleep-promise');

(async () => {
    const stime = new Date();
    for (let i = 0; i < 5; i++) {
        console.log('[DEBUG]', 'value:', i, 'ms:', (new Date() - stime));
        await msleep(5000);
    }
})();

// [DEBUG] value: 0 ms: 0
// [DEBUG] value: 1 ms: 5008
// [DEBUG] value: 2 ms: 10012
// [DEBUG] value: 3 ms: 15012
// [DEBUG] value: 4 ms: 20013
```
