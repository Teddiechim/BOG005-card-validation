const validator = {
  isValid: function (string) {
    let split = string.split("");
    let reverseArray = split.reverse();
    for (let i = 1; i < reverseArray.length; i = i + 2) {
      let numerosPares = reverseArray[i];
      numerosPares = numerosPares * 2;
      if (numerosPares >= 10) {
        let numberToString = numerosPares + "";
        let suma =
          Number(numberToString.charAt(0)) + Number(numberToString.charAt(1));
        numerosPares = suma;
      }

      reverseArray[i] = numerosPares;
    }

    let suma = 0;
    for (let i = 0; i < reverseArray.length; i++) {
      suma = suma + Number(reverseArray[i]);
    }

    if (suma % 10 == 0) {
      return true;
    } else {
      return false;
    }
  },
  maskify: function (string) {
    let substring = string.slice(-4, string.length);
    if (string.length > 4) {
      let enmascarado = "#".repeat(string.length - 4) + substring;
      return enmascarado;
    } else {
      return string;
    }
  },
};

//validator.isValid("128937182937");
export default validator;
