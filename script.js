let msg = document.querySelector(".msg");
let guess = document.querySelector("input");
let btn = document.querySelector(".btn");
let timing = document.querySelector(".classtime");
let startTime, endTime, totalTime;
let inter;


let newWords = "";
let randWords = "";

let play = false;
let arr = [
  "shubham",
  "hitarthi",
  "balgiri",
  "bharatpuri",
  "daxaben",
  "chandrikaben",
  "manigiri",
  "godavariben",
  "jayendrapuri",
  "madhuben",
  "dhruv",
  "harshadpuri",
  "induben",
  "rushikeshpuri",
  "pooja",
  "sidhhi",
  "rajubharathi",
  "geetaben",
  "nitin",
  "jaypal",
  "archi",
  "bhavesh",
  "damini",
  "rinkal",
  "dhavalbharthi",
  "binalben",
  "payalben",
];

let createNewWords = () => {
  let ranNum = Math.floor(Math.random() * arr.length);
  //   console.log(ranNum);
  let newTempWord = arr[ranNum];
  // console.log(newTempWord.split(""));
  return newTempWord;
};

let scrambleWords = (brr) => {
  for (let i = 1; i < brr.length; i++) {
    let temp = brr[i];
    // console.log(temp);
    let j = Math.floor(Math.random() * (brr.length - 1)) + 1; // Returns a random integer from 1 to brr.length
    // console.log(i);
    // console.log(j);
    brr[i] = brr[j];
    brr[j] = temp;
  }

  return brr;
};

// document.getElementsByClassName("classtime").style.display = "none";
btn.addEventListener("click", function () {
  if (!play) {
    timing.innerHTML = "";

    let time1 = (new Date()).getTime();
    console.log(time1);
    startTime = time1;

    play = true;
    btn.innerHTML = "Guess";
    guess.classList.toggle("hidden");
    // timing.classList.toggle("classtime");
    newWords = createNewWords();
    randWords = scrambleWords(newWords.split("")).join("");
    // console.log(randWords.join(""));
    msg.innerHTML = `Guess the Actor Name: "${randWords}"`;

  } 
  else {

    clearInterval(inter); // to stop the setInterval.
    let tempWord = guess.value;
    if (tempWord.toLowerCase() === newWords) {

      let time2 = (new Date()).getTime();
      console.log(time2);
      endTime = time2;
      totalTime = Math.floor((endTime - startTime) / 1000);

      //   console.log("Correct");
      play = false;
      msg.innerHTML = `Awesome It's Correct. It is "${newWords}".`;
      timing.innerHTML = `Total Time You Take It Is:- ${totalTime} seconds`;
      btn.innerHTML = "Start Again";
      guess.classList.toggle("hidden");
      // timing.classList.toggle("classtime");
      guess.value = "";
    } else {
      //   console.log("Incorrect");
      msg.innerHTML = `Sorry Boss! It's Incorrect. Please Try Again... <hr> "${randWords}"`;
    }
    timing.classList.toggle("classtime");

  }
});
