'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
// let score = 20;
// let highScore = 0;
// let secretNum = (document.querySelector('.number').value = Math.trunc(
//   Math.random() * 20 + 1
// ));
// console.log(secretNum);
// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess);
//   // no input check
//   if (!guess) {
//     document.querySelector('.message').textContent = '⛔ No Number!';
//   }
//   // wrong input check
//   else if (guess < secretNum) {
//     if (score > 0) {
//       score--;
//       document.querySelector('.score').textContent = score;
//       document.querySelector('.score').value = score;
//       document.querySelector('.message').textContent = '❌ No, Higher!';
//     } else {
//       document.querySelector('.message').textContent = '😂👎 You Lose!';
//     }
//   } else if (guess > secretNum) {
//     if (score > 0) {
//       score--;
//       document.querySelector('.score').textContent = score;
//       document.querySelector('.score').value = score;
//       document.querySelector('.message').textContent = '❌ No, Lower!';
//     } else {
//       document.querySelector('.message').textContent = '😂👎 You Lose!';
//     }
//     // correct input check
//   } else if (guess === secretNum) {
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';
//     document.querySelector('.number').textContent = secretNum;
//     document.querySelector('.message').textContent = '✔ Correct!';
//     if (score > highScore) {
//       highScore = score;
//       document.querySelector('.highscore').textContent = highScore;
//       document.querySelector('.highscore').value = highScore;
//       if (highScore === 20) {
//         document.querySelector('.message').textContent = '🎉 Perfect Score!';
//       }
//     }
//   }
// });
// // again
// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   document.querySelector('.message').textContent = 'Start guessing...';
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.score').value = score;

//   secretNum = document.querySelector('.number').value = Math.trunc(
//     Math.random() * 20 + 1
//   );
//   console.log(secretNum);
//   if (highScore === 20) {
//     highScore = 0;
//     document.querySelector('.highscore').value = highScore;
//     document.querySelector('.highscore').textContent = highScore;
//   } else {
//     document.querySelector('.highscore').value = highScore;
//     document.querySelector('.highscore').textContent = highScore;
//   }
// });

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 22;

// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value);
// });

// else if (inputNumber > randomNumber) {
//   if (document.querySelector('.score').textContent > 1) {
//     document.querySelector('body').style.backgroundColor = '#222';
//     document.querySelector('.message').textContent = '⬇⬇ TRY LOWER ⬇⬇';
//     document.querySelector('.score').textContent--;
//   } else {
//     document.querySelector('.score').textContent = 0;
//     document.querySelector('body').style.backgroundColor = '#e63c3f';
//     document.querySelector('.message').textContent = '😂👎 You Lose!';
//     document.querySelector('.number').textContent =
//       document.querySelector('.number').value;
//   }
// } else if (inputNumber < randomNumber) {
//   if (document.querySelector('.score').textContent > 1) {
//     document.querySelector('body').style.backgroundColor = '#222';
//     document.querySelector('.message').textContent = '⬆⬆ TRY HIGHER ⬆⬆';
//     document.querySelector('.score').textContent--;
//   } else {
//     document.querySelector('.score').textContent = 0;
//     document.querySelector('body').style.backgroundColor = '#e63c3f';
//     document.querySelector('.message').textContent = '😂👎 You Lose!';
//     document.querySelector('.number').textContent =
//       document.querySelector('.number').value;
//   }
// }
//
//
//
//
let hScore = 0;
let randomNumber = (document.querySelector('.number').value = Math.floor(
  Math.random() * 20 + 1
));
console.log(randomNumber);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const styling = function (colorCode) {
  document.querySelector('body').style.backgroundColor = colorCode;
};
//check button
document.querySelector('.check').addEventListener('click', function () {
  const inputNumber = Number(document.querySelector('.guess').value);
  //no input
  if (!inputNumber) {
    styling('#ebe83b');
    displayMessage('⛔ NO Number');
  }
  //out of boundries input
  else if (inputNumber > 20 || inputNumber < 0) {
    styling('#ebe83b');
    displayMessage('⚠  between 1-20');
  }
  //correct input
  else if (inputNumber == randomNumber) {
    styling('#60b347');
    displayMessage('🎉 Correct Number');
    document.querySelector('.number').textContent = randomNumber;

    document.querySelector('.highscore').textContent <
    document.querySelector('.score').textContent
      ? (hScore = document.querySelector('.highscore').textContent =
          document.querySelector('.score').textContent)
      : (document.querySelector('.highscore').textContent = hScore);
  }
  // wrong input
  else if (inputNumber !== randomNumber) {
    document.querySelector('.message').textContent =
      inputNumber > randomNumber ? '⬇⬇ TRY LOWER ⬇⬇' : '⬆⬆ TRY HIGHER ⬆⬆';
    if (document.querySelector('.score').textContent > 1) {
      styling('#222');
      document.querySelector('.score').textContent--;
    } else {
      document.querySelector('.score').textContent = 0;
      styling('#e63c3f');
      displayMessage('😂👎 You Lose!');
      document.querySelector('.number').textContent =
        document.querySelector('.number').value;
    }
  }
});
//again button
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing ...');
  document.querySelector('.highscore').textContent = hScore;
  document.querySelector('.score').textContent = 20;
  styling('#222');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').value = randomNumber = Math.floor(
    Math.random() * 20 + 1
  );
  console.log(randomNumber);
});
