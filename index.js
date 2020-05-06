function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}


function sayHiToGrandma(string) {
  swtich(string) {
    case whisper(string):
    console.log("I can't hear you!");
    break;
    case shout(string):
    console.log("YES INDEED!");
    break;
    case "I love you, Grandma."
    console.log("I love you, too.");
  }
}
