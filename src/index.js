module.exports = function toReadable (number) {

  let word = '';

  const x = {
    0: 'zero',  
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
  };

    if (number > 99) {
      let hundred = Math.floor(number / 100);
      word += x[hundred] + ' ' +'hundred';
      number = number % 100;
      if (number>0) {
           word = word + " ";
      } else {
        return word;
      }
    }

    if (number <= 20) {
      return word + x[number];
    }

    if (number > 20) {
      let ten = Math.floor(number / 10);
      word += x[ten +'0'];
      number = number % 10;
      if (number>0) {
            return word + ' ' + x[number];
      } else {
        return word;   
      }
    }
   
}