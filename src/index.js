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
  let arr = [];
  for (let i = 0; i < expr.length; i = i + 10) {
    arr.push(expr.slice(i, i + 10));
  }

  let binArr = [];
  for (let i = 0; i < arr.length; i++) {
    let preBinArr = [];
    for (let s = 0; s < arr[i].length; s = s + 2) {
      preBinArr.push(arr[i].slice(s, s + 2));
    }
    binArr.push(preBinArr);
  }
  for (let i = 0; i < binArr.length; i++) {
    for (let s = 0; s < binArr[i].length; s++) {
      if (binArr[i][s] === "10") {
        binArr[i][s] = ".";
      } else if (binArr[i][s] === "11") {
        binArr[i][s] = "-";
      } else {
        binArr[i][s] = "";
      }
    }
  }
  let newArr = binArr.map((a) => a.join(""));

  for (let i = 0; i < newArr.length; i++) {
    for (let s in MORSE_TABLE) {
      if (newArr[i] === s) {
        newArr[i] = MORSE_TABLE[s];
      }
    }
  }
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === "") {
      newArr[i] = " ";
    }
  }

  return newArr.join("");
}

module.exports = {
  decode,
};
