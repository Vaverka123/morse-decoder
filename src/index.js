const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  const result = [];
  const strLength = expr.length / 10;

  for (let a = 0; a <= strLength; a++) {
    const lettersArr = expr.slice(a * 10, a * 10 + 10);
    if (lettersArr.includes("*")) {
      result.push(" ");
    }
    const symbol = lettersArr
      .replaceAll("00", "")
      .replaceAll("10", ".")
      .replaceAll("11", "-");
    result.push(MORSE_TABLE[symbol]);
  }
  return result.join("");
}

module.exports = {
  decode,
};
