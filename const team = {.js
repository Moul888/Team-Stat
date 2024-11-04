const team = {
  _players: [
    {firstName:'Carlos',lastName:'Alcaraz',age: 21},
    {firstName:'Lyoto',lastName:'Machida',age: 46},
    {firstName:'Antoine',lastName:'Dupont',age: 27},
  ],
  _games: [
    {opponent:'Monfils',teamPoints: 2 ,opponentPoints: 0 },
    {opponent:'Couture',teamPoints: 1,opponentPoints: 0},
    {opponent:'Clermont',teamPoints: 48,opponentPoints: 14},
  ],

  get players(){
    return this._players;
  },
  get games(){
    return this._games;
  },

  addPlayer(newFirstName, newLastName, newAge){
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };
    this.players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints){
    let game ={
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    };
    this.games.push(game);
  }
};

team.addPlayer('Bugs','Bunny', 76);
console.log(team.players);

team.addGame('Titans', 100, 98);
console.log(team.games);
