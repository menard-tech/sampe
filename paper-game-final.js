let score = JSON.parse(localStorage.getItem('score'))
    ||  { 
          wins: 0, losses: 0, ties: 0 
        };
        updateScore();
        
    /*
    if (score=== null) {
      score = {
        wins: 0, losses: 0, ties: 0 
      };
    }
    */
   function updateScore() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    
   }
    function game (playerMove) 
    {
      const ComputerMove = pickComputerMove ()
      
      let result = ''
      if (playerMove === 'scissor') 
      {
        if (ComputerMove === 'rock') {result = 'You Lose'}
        else if (ComputerMove === 'paper') {result = 'You Win'}
        else if (ComputerMove === 'scissor') {result = 'Tie'}
      }

      else if (playerMove === 'paper') 
      {
        if (ComputerMove === 'rock'){result = 'You Win'}
        else if (ComputerMove === 'paper') {result = 'Tie'}
        else if (ComputerMove === 'scissor') {result = 'You Lose'}
      }
      else if (playerMove === 'rock')
      {
        if (ComputerMove === 'rock'){result = 'Tie'}
        else if (ComputerMove === 'paper') {result = 'You Lose'}
        else if (ComputerMove === 'scissor') {result = 'You Win'
        }
      }
      if (result === 'You Win') {score.wins +=1}
        else if (result === 'You Lose') {score.losses +=1}
        else if (result === 'Tie') {score.ties +=1}

      localStorage.setItem('score',JSON.stringify(score))

      updateScore();

    document.querySelector('.js-end').innerHTML = /*`RESULT: <img src="images/${result}.png" class="image-icon">`;*/ `
    ${result}`
    document.querySelector('.js-moves').innerHTML = `You picked: <img src="images/${playerMove}-emoji.png" class="image-icon"> 
    Computer picked: <img src="images/${ComputerMove}-emoji.png" class="image-icon">`;
    }
    
    function pickComputerMove ()
    {
      const randomNumber = Math.random();
      let ComputerMove = '';
      if (randomNumber >=0 && randomNumber < 1 / 3) {ComputerMove='rock'}
      else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {ComputerMove='paper'}
      else if (randomNumber >= 2 / 3 && randomNumber > 0) {ComputerMove='scissor'}
      return ComputerMove
    }