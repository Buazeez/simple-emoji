const emojis = require("./emojis.json");

function random() {
  let emoji = emojis[Math.floor(Math.random() * emojis.length)];

  return {
    emoji: emoji.emoji,
    key: emoji.key,
    buffer: Buffer.from(emoji.buffer.value),
  };
}

function get(emoji = "") {
  if (!emoji) throw new Error("emoji key is required");

  let result = emojis.find((x) => x.key === emoji || x.emoji === emoji);

  return {
    emoji: result.emoji,
    key: result.key,
    buffer: Buffer.from(result.buffer.value),
  };
}

module.exports = {
  random,
  get,
};
