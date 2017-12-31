var numberToWord = ['sauce', 'seed', 'sun', 'sumo', 'sierra', 'soil', 'sewage', 'sky', 'sofa', 'soap', 'toes', 'dad', 'tin', 'tomb', 'tire', 'tail', 'dish', 'tack', 'dove', 'tub', 'nose', 'net', 'nun', 'Nemo', 'Nero', 'nail', 'nacho', 'neck', 'knife', 'honeybee', 'mouse', 'mat', 'moon', 'mummy', 'mower', 'mule', 'match', 'mug', 'movie', 'map', 'rice', 'rat', 'rain', 'rum', 'rower', 'railway', 'roach', 'rag', 'roof', 'rope', 'lace', 'latte', 'lion', 'lime', 'lorry', 'lily', 'leech', 'leg', 'lava', 'lip', 'cheese', 'cheetah', 'chin', 'gem', 'shrew', 'jail', 'Cha-Cha', 'chick', 'chef', 'ship', 'case', 'cat', 'coin', 'game', 'car', 'coal', 'cage', 'cake', 'cave', 'cob', 'vase', 'video', 'phone', 'ovum', 'fairy', 'eiffel', 'veggie', 'fig', 'fife', 'vape', 'boss', 'bat', 'pony', 'bum', 'bear', 'bell', 'beach', 'book', 'beef', 'pipe'];
var valueGenerated;
var totalCentiSeconds = 0;


function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

function setTime() {
  ++totalCentiSeconds;
  document.getElementById("timer-div").innerHTML = pad(totalCentiSeconds);
}


function getRandomNumber() {

	 totalCentiSeconds = 0;
	 document.getElementById("timer-div").innerHTML = "00:00";
	 document.getElementById("second-div").innerHTML = '';
	 valueGenerated = Math.floor(Math.random() * 100);
	 var randomNumber = (valueGenerated < 10) ? ("0" + valueGenerated) : (valueGenerated); 
	 document.getElementById("first-div").innerHTML = "Number: " + randomNumber;
}


function populateSecondDiv() {
	 document.getElementById("second-div").innerHTML = "Word: " + numberToWord[valueGenerated];
}