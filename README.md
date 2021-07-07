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

emoji.random(); // e.g : { emoji: '📲', key: 'calling' }
await emoji.imagize("cloud"); // expected result Buffer
emoji.get("cloud"); // By Key , { emoji: '☁️', key: 'cloud' }
emoji.get("☁️"); // Or By Value { emoji: '☁️', key: 'cloud' }
```

### Functions

| Function | Argument                    |
| -------- | --------------------------- |
| random   | no argument required        |
| get      | `emoji` : emoji , emoji Key |
| imagize  | `emojiKey` : emoji Key      |
