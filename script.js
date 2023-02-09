// Questions will be asked
const Questions = [
  {
    id: 0,
    q: "What is capital of India?",
    a: [
      { text: "gandhinagar", isCorrect: false },
      { text: "Surat", isCorrect: false },
      { text: "Delhi", isCorrect: true },
      { text: "mumbai", isCorrect: false },
    ],
  },
  {
    id: 1,
    q: "What is the capital of Thailand?",
    a: [
      { text: "Lampang", isCorrect: false, isSelected: false },
      { text: "phuket", isCorrect: false },
      { text: "Ayutthaya", isCorrect: false },
      { text: "Bangkok", isCorrect: true },
    ],
  },
  {
    id: 2,
    q: "What is the capital of Gujarat",
    a: [
      { text: "surat", isCorrect: false },
      { text: "vadodara", isCorrect: false },
      { text: "gandhinagar", isCorrect: true },
      { text: "rajkot", isCorrect: false },
    ],
  },
];
const btnStartEl = document.querySelector(".btn-start");
let counter;
// Set start
let start = true;
console.log("start = true");

// Iterate
function iterate(id) {
  console.log("in iterate");
  clearInterval(counter);
  startTimer(60);
  // Getting the result display section
  let result = document.getElementsByClassName("result");
  result[0].innerText = "";
  // Getting the question
  const question = document.getElementById("question");
  // Setting the question text
  question.innerText = Questions[id].q;
  // Getting the options
  const op1 = document.getElementById("op1");
  const op2 = document.getElementById("op2");
  const op3 = document.getElementById("op3");
  const op4 = document.getElementById("op4");
  // Providing option text
  op1.innerText = Questions[id].a[0].text;
  op2.innerText = Questions[id].a[1].text;
  op3.innerText = Questions[id].a[2].text;
  op4.innerText = Questions[id].a[3].text;
  // Providing the true or false value to the options
  op1.value = Questions[id].a[0].isCorrect;
  op2.value = Questions[id].a[1].isCorrect;
  op3.value = Questions[id].a[2].isCorrect;
  op4.value = Questions[id].a[3].isCorrect;
  let selected = "";
  // Show selection for op1
  op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
  });
  // Show selection for op2
  op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op2.value;
  });
  // Show selection for op3
  op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "lightskyblue";
    selected = op3.value;
  });
  // Show selection for op4
  op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
  });
  return selected;
}
if (start) {
  iterate("0");
  console.log("in start 0");
}
// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate")[0];
// Next button and method
const next = document.getElementsByClassName("next")[0];
let id = 0;
let numCorrect = 0;
let numIncorrect = 0;
console.log("next button" + next);
next.addEventListener("click", () => {
  console.log("on click of next button");
  start = false;
  if (id < 2) {
    id++;
    let isCorrect = iterate(id);
    console.log(id);
    if (isCorrect) {
      ++numCorrect;
    } else {
      ++numIncorrect;
    }
  } else if (id == 2) {
    console.log("Final question");
    next.style.visibility = "hidden";
    evaluate.style.visibility = "visible";
  }
});
// Evaluate method
evaluate.addEventListener("click", () => {
  console.log("on click of evaluate button");

  let finalIsCorrect = iterate(id);
  if (finalIsCorrect) {
    ++numCorrect;
  } else {
    ++numIncorrect;
  }
  let results = document.getElementById("results");
  console.log(results);
  results.innerHTML = numCorrect + " out of " + Questions.length;
  console.log("Num Correct: " + numCorrect);
  console.log("Num Wrong: " + numIncorrect);
});

//Timer

let timer = document.querySelector("timer");
console.log("timer: " + timer);

const timeCount = document.querySelector(".timer, timer_sec");
const timeText = document.querySelector(".timer, time_left_txt");

function startTimer(time) {
  console.log("in startTimer funciton");
  counter = setInterval(timer, 1000);
  function timer() {
    timeCount.textContent = time; //changing the value of timeCount with time value
    time--; //decrement the time value
    if (time < 9) {
      //if timer is less than 9
      let addZero = timeCount.textContent;
      timeCount.textContent = "0" + addZero; //add a 0 before time value
    }
    if (time < 0) {
      //if timer is less than 0
      clearInterval(counter); //clear counter
      timeText.textContent = "Time Off"; //change the time text to time off
      if (id < 2) {
        id++;
        iterate(id);
        console.log(id);
        ++numIncorrect;
      } else if (id == 2) {
        console.log("Final question");
        next.style.visibility = "hidden";
        evaluate.style.visibility = "visible";

        /*const allOptions = option_list.children.length; //getting all option items
            let correcAns = questions[que_count].answer; //getting correct answer from array
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
            } */
        //next_btn.classList.add("show"); //show the next button if user selected any option
      }
    }
  }
  function startTimerLine(time) {
    counterLine = setInterval(timer, 29);
    function timer() {
      time += 1; //upgrading time value with 1
      time_line.style.width = time + "px"; //increasing width of time_line with px by time value
      if (time > 549) {
        //if time value is greater than 549
        clearInterval(counterLine); //clear counterLine
      }
    }
  }
  function queCounter(index) {
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = "<span><p>" + index + "</p> of <p>" + questions.length + "</p> Questions</span>";
    bottom_ques_counter.innerHTML = totalQueCounTag; //adding new span tag inside bottom_ques_counter
  }
}
btnStartEl.addEventListener("click", function () {
  console.log("in start button");
  startTimer(60);
  startTimerLine(0);
  queCounter(1);
  next_btn.classList.add("show");
});
