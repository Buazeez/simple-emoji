# simple-emoji

simple node emoji package with 3 simple functions

## Installation

### NPM

```
npm install simple-emoji
```

### Yarn

```
yarn add simple-emoji
```

## Usage

```js
const emoji = require("simple-emoji");

emoji.random();
emoji.get("cloud");
emoji.get("☁️");

/*
Expected Result :

{
  emoji: '☁️',
  key: 'cloud',
  buffer: <Buffer 89 50 4e 47 0d 0a 1a 0a 00 00 00 0d 49 48 44 52 00 00 00 40 00 00 00 40 08 06 00 00 00 aa 69 71 de 00 00 0e e3 49 44 41 54 78 5e ed 98 69 b0 5d 55 9d ... 3818 more bytes>
}

*/
```

### Functions

| Function | Argument                    |
| -------- | --------------------------- |
| get      | `emoji` : emoji , emoji Key |
| random   | no argument required        |
