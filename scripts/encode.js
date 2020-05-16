function encode() {
  let inputtedText = document.getElementById("user-input").value;
  if (inputtedText.length === 0) {
    alert("Please input some text");
  }

  let inputtedTextCharArray = [...inputtedText]; // making our inputted string into array of chars

  let encryptedText = "";
  for (let i = 0; i < inputtedTextCharArray.length; i++) {
    // looping through alphabet object and check if some objects key is equal to our inputted character
    for (let [key, value] of Object.entries(alphabet)) {
      if (inputtedTextCharArray[i] === key) {
        encryptedText += value;
      }
    }
  }

  document.getElementById("encrypted-text").textContent = encryptedText;
}