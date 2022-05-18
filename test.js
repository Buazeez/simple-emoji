const { get, random } = require(".");

(async () => {
  let emoji = random();

  console.log(get(emoji.key).key === emoji.key);
})();
