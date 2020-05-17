document.querySelector(".submit").addEventListener("click", checkAnswer);

function checkAnswer(event) {
  event.preventDefault();

  const firstAnswerToTheFirstQuestion = document.querySelector('[id="first-answer-to-the-first-question"]:checked');
  const secondtAnswerToTheFirstQuestion = document.querySelector('[id="second-answer-to-the-first-question"]:checked');
  const thirdAnswerToTheFirstQuestion = document.querySelector('[id="third-answer-to-the-first-question"]:checked');
    
  const firstAnswerToTheSecondQuestion = document.querySelector('[id="first-answer-to-the-second-question"]:checked');
  const secondtAnswerToTheSecondQuestion = document.querySelector('[id="second-answer-to-the-second-question"]:checked');
  const thirdAnswerToTheSecondQuestion = document.querySelector('[id="third-answer-to-the-second-question"]:checked');

  const firstAnswerToTheThirdQuestion = document.querySelector('[id="first-answer-to-the-third-question"]:checked');
  const secondtAnswerToTheThirdQuestion = document.querySelector('[id="second-answer-to-the-third-question"]:checked');
  const thirdAnswerToTheThirdQuestion = document.querySelector('[id="third-answer-to-the-third-question"]:checked');

  const firstAnswerToTheFourthQuestion = document.querySelector('[id="first-answer-to-the-fourth-question"]:checked');
  const secondtAnswerToTheFourthQuestion = document.querySelector('[id="second-answer-to-the-fourth-question"]:checked');
  const thirdAnswerToTheFourthQuestion = document.querySelector('[id="third-answer-to-the-fourth-question"]:checked');

  const firstAnswerToTheFifthQuestion = document.querySelector('[id="first-answer-to-the-fifth-question"]:checked');
  const secondtAnswerToTheFifthQuestion = document.querySelector('[id="second-answer-to-the-fifth-question"]:checked');
  const thirdAnswerToTheFifthQuestion = document.querySelector('[id="third-answer-to-the-fifth-question"]:checked');

  const firstAnswerToTheSixthQuestion = document.querySelector('[id="first-answer-to-the-sixth-question"]:checked');
  const secondtAnswerToTheSixthQuestion = document.querySelector('[id="second-answer-to-the-sixth-question"]:checked');
  const thirdAnswerToTheSixthQuestion = document.querySelector('[id="third-answer-to-the-sixth-question"]:checked');

  let point = 0;

  if (firstAnswerToTheFirstQuestion) {
    point++;
  }
  if (firstAnswerToTheSecondQuestion) {
    point++;
  }
  if (firstAnswerToTheThirdQuestion) {
    point++;
  }
  if (firstAnswerToTheFourthQuestion) {
    point++;
  }
  if (firstAnswerToTheFifthQuestion) {
    point++;
  }
  if (firstAnswerToTheSixthQuestion) {
    point++;
  }

  if (secondtAnswerToTheFirstQuestion) {
    point += 2;
  }
  if (secondtAnswerToTheSecondQuestion) {
    point += 2;
  }
  if (secondtAnswerToTheThirdQuestion) {
    point += 2;
  }
  if (secondtAnswerToTheFourthQuestion) {
    point += 2;
  }
  if (secondtAnswerToTheFifthQuestion) {
    point += 2;
  }
  if (secondtAnswerToTheSixthQuestion) {
    point += 2;
  }

  if (thirdAnswerToTheFirstQuestion) {
    point += 3;
  }
  if (thirdAnswerToTheSecondQuestion) {
    point += 3;
  }
  if (thirdAnswerToTheThirdQuestion) {
    point += 3;
  }
  if (thirdAnswerToTheFourthQuestion) {
    point += 3;
  }
  if (thirdAnswerToTheFifthQuestion) {
    point += 3;
  }
  if (thirdAnswerToTheSixthQuestion) {
    point += 3;
  }

  if (point <= 6) {
    resultStyle(".second-result");
  }
  if (point > 6 && point <= 10) {
    resultStyle(".first-result");
  }
  if (point > 10 && point < 14) {
    resultStyle(".fourth-result");
  }
  if (point >= 14) {
    resultStyle(".third-result");
  }
}

function resultStyle(selector) {
  document.querySelector(".blocks-with-questions-and-answers").remove();
  document.querySelector(".button").remove();
  document.querySelector(".title-and-photo").remove();
  document.querySelector(selector).style.display = "flex";
  document.querySelector(selector).style.flexDirection = "column";
  document.querySelector(selector).style.alignItems = "center";
  document.querySelector(selector).style.paddingBottom = "30px";
}
