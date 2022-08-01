const validator = {
  isValid: function (string) {
    let split = string.split("");
    let reverseArray = split.reverse();
    for (let i = 1; i < reverseArray.length; i = i + 2) {
      let pairNumbers = reverseArray[i];
      pairNumbers = pairNumbers * 2;
      if (pairNumbers >= 10) {
        let numberToString = pairNumbers + "";
        let addition =
          Number(numberToString.charAt(0)) + Number(numberToString.charAt(1));
        pairNumbers = addition;
      }

      reverseArray[i] = pairNumbers;
    }

    let addition = 0;
    for (let i = 0; i < reverseArray.length; i++) {
      addition = addition + Number(reverseArray[i]);
    }
    if (reverseArray.length == 0) {
      return false;
    }
    if (addition % 10 == 0) {
      return true;
    } else {
      return false;
    }
  },
  maskify: function (string) {
    let substring = string.slice(-4, string.length);
    if (string.length > 4) {
      let masked = "#".repeat(string.length - 4) + substring;
      return masked;
    } else {
      return string;
    }
  },
};

export default validator;
