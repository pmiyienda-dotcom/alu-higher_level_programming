#!/usr/bin/node
const args = process.argv.slice(2);

if (args.length <= 1) {
  console.log(0);
} else {
  let first = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < args.length; i++) {
    const num = parseInt(args[i]);

    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num < first) {
      second = num;
    }
  }

  console.log(second);
}
