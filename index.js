var prompt = require('prompt');
var mysNum = getRndInteger(1, 100);

var schema = {
  properties: {
    input: {
      description: 'Quel est le nombre?',
      type: 'number',
      minimum: 1,
      maximum: 100,
      // pattern: /^[1-100]+$
      message: 'Input must be only numbers from 1 to 100!!!',
      required: true,
    },
  },
};

prompt.start();

function displayPrompt() {
  prompt.get(schema, function (err, result) {
    if (err) {
      return onErr(err);
    }
    if (result.input === mysNum) {
      console.log('Bravo, vous avez trouve le nombre mystère !!!');
    } else if (result.input > mysNum) {
      console.log("C'est plus !");
      displayPrompt();
    } else if (result.input < mysNum) {
      console.log("C'est moins");
      displayPrompt();
    }
  });
  function onErr(err) {
    console.log(err);
    return 1;
  }
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

displayPrompt();
