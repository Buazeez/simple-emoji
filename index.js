const emojis = require("./emojis.json");
const fs = require("fs");

function random() {
  const keys = Object.keys(emojis);
  const key = keys[Math.floor(Math.random() * keys.length)];

  return {
    emoji: emojis[key],
    key,
  };
}

function get(emoji = "") {
  if (!emoji) throw new Error("emoji key is required");

  const key =
    Object.keys(emojis)[Object.values(emojis).findIndex((e) => e === emoji)] ||
    Object.keys(emojis).find((e) => e === emoji);
  const _emoji = emojis[emoji] || emojis[key];

  if (!emoji || !key) throw new Error("emoji not found");

  return {
    emoji: _emoji,
    key,
  };
}

function imageize(emojiKey = "") {
  return new Promise((resolve) => {
    if (!emojiKey) throw new Error("emoji key is required");

    fs.readFile(`./assets/${emojiKey}.png`, (err, data) => {
      if (err) throw new Error(err);
      resolve(data);
    });
  });
}

module.exports = {
  imageize,
  random,
  get,
};
