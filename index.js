var nj = require("numjs");

function linear_generator(
  mult = 19283,
  mod = 2 ** 31 - 1,
  seed = 1234567890,
  size = 100
) {
  var u = nj.zeros(3).tolist();
  x = (seed * mult + 1) % mod;
  u[0] = x / mod;
  for (let i = 0; i < size; i++) {
    x = (x * mult + 1) % mod;
    u[i] = x / mod;
  }
  console.log(u[Math.floor(Math.random() * (size + 1))] * 100);
}

linear_generator();
