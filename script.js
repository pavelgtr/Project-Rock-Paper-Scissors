function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const getRandomChoice = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[getRandomChoice];
    alert(computerChoice)
    return computerChoice;
}

// const pressButton = document.querySelector('#press');

// // btn.addEventListener('click',(event) => {
// //     console.log('clicked');
// // });

// pressButton.addEventListener('click', clicked);

// function clicked() {
//     getComputerChoice();
// };
