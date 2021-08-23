module.exports = function reverse (n) {
  let result = 0;
  n = Math.abs(n);
  while(n > 0) {
      result = result *10 + (n % 10);
      n = Math.trunc(n/10);
  }
  return result;
}
