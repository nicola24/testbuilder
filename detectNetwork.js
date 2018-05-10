// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'
// How can you tell one card network from another? Easy! 
// There are two indicators:
// 1. The first few numbers (called the prefix)
// 2. The number of digits in the number (called the length)

// cardNumber is a string
// Diner's Club: prefix of 38 or 39 and a length of 14
// American Express: prefix of 34 or 37 and a length of 15
// Visa: prefix of 4 and a length of 13, 16, or 19
// MasterCard: prefix of 51, 52, 53, 54, or 55 and a length of 16
// Discover: prefix of 6011, 644-649, or 65, and a length of 16 or 19
// Maestro: prefix of 5018, 5020, 5038, or 6304, and a length of 12-19
// China UnionPay: a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
// Switch: a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.

//function return true if arr include num else false
var compareLengthAndPrefix = (num, arr) => { return arr.includes(num) };

//function detectNetwork
var detectNetwork = function(cardNumber) {

var cardNumberTwoPrefix = parseInt(cardNumber.slice(0, 2));
var cardNumberThreePrefix = parseInt(cardNumber.slice(0, 3));

var dinersClubLength = [14];
var americanExpressLength = [15];
var visaLength = [13, 16, 19];
var mastercardLength = [16];
var discoverLength = [16, 19];
var maestroLength = [12, 13, 14, 15, 16 ,17, 18, 19];
var chinaUnionPayLength = [16, 17, 18, 19];
var switchLength = [16, 18, 19];

var dinersClubPrefix = [38, 39];
var americanExpressPrefix = [34, 37];
var visaPrefix = [41];
var mastercardPrefix = [51, 52, 53, 54, 55];
var discoverPrefix = [60, 64, 65];
var maestroPrefix= [50, 630];
var chinaUnionPayPrefix = [62];
var switchPrefix = [49, 56, 633, 67];

if (compareLengthAndPrefix(cardNumber.length, dinersClubLength) && compareLengthAndPrefix(cardNumberTwoPrefix, dinersClubPrefix)) return 'Diner\'s Club';
if (compareLengthAndPrefix(cardNumber.length, americanExpressLength) && compareLengthAndPrefix(cardNumberTwoPrefix, americanExpressPrefix)) return 'American Express';
if (compareLengthAndPrefix(cardNumber.length, visaLength) && compareLengthAndPrefix(cardNumberTwoPrefix, visaPrefix)) return 'Visa';
if (compareLengthAndPrefix(cardNumber.length, mastercardLength) && compareLengthAndPrefix(cardNumberTwoPrefix, mastercardPrefix)) return 'MasterCard';
if (compareLengthAndPrefix(cardNumber.length, discoverLength) && compareLengthAndPrefix(cardNumberTwoPrefix, discoverPrefix)) return 'Discover';
if (compareLengthAndPrefix(cardNumber.length, maestroLength) && (compareLengthAndPrefix(cardNumberTwoPrefix, maestroPrefix) || compareLengthAndPrefix(cardNumberThreePrefix, maestroPrefix))) return 'Maestro';
if (compareLengthAndPrefix(cardNumber.length, chinaUnionPayLength) && compareLengthAndPrefix(cardNumberTwoPrefix, chinaUnionPayPrefix)) return 'China UnionPay';
if (compareLengthAndPrefix(cardNumber.length, switchLength) && (compareLengthAndPrefix(cardNumberTwoPrefix, switchPrefix) || compareLengthAndPrefix(cardNumberThreePrefix, switchPrefix))) return 'Switch';

return 'not a credit card number';

};
