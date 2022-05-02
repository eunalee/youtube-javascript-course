'use strict';

/*
const urls = [
  'https://www.datawrapper.de',
  'http://carl.flax.ie/dothingstellpeople.html',
  'https://blog.lewman.com/internet-messaging-versus-congested-network.html',
  'https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/match',
];
console.log(urls);

const temps = urls.map(url => url.match(/^(http(s)?:\/\/)([a-z0-9-_\.]*)/)[0]);
console.log(temps);

const result = temps.map(tmp => tmp.replace(/^((http)(s)?:\/\/)?(www\.)?/, ''));
console.log(result);
*/

const url = 'https://developer.mozilla.org';
console.log(url);

const result = url
  .match(/^(http(s)?:\/\/)([a-z0-9-_\.]*)/)[0]
  .replace(/^((http)(s)?:\/\/)?(www\.)?/, '');
console.log(result);
