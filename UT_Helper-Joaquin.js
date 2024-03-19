class StringHelper {
    static concatenateStrings(str1, str2) {
      return str1 + str2;
    }
  
    static splitStringByComma(str) {
      return str.split(',');
    }
  }
  
  module.exports = StringHelper;