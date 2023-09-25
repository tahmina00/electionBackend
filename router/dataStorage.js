// dataStorage.js
let storedValue = null;

module.exports = {
  setStoredValue: function(value) {
    storedValue = value;
  },
  getStoredValue: function() {
    return storedValue;
  }
};
