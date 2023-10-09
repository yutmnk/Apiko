let convert;

convert = function(bytes) {
  const megabytes = bytes / 1000000;
  const formattedMegabytes = megabytes.toFixed(2);
  return `${formattedMegabytes} Mb`;
};

const bytes = 10000;
const result = convert.call(null, bytes);
console.log(result);
