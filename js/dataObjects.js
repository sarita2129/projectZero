//object game Unit
//const gameUnit = {"X","O"}
//object player
//const player = {}
// let player = function(name,unit){
//     return {
//       playerName: name,
//       gameUnit: unit,
//       getPlayer: function(name){
//       console.log(`${$(this).playerName}`);
//     }
//   };
//   };
//object Moves
//
//const player = ['X','O'];
const player = [
    {
      Player : "X",
      score : "0"
    },
    {
      Player : "O",
      score : "0"
    }
  ];
  const Users = [
    {
      Name : "Steve",
      psw : "password"
    },
    {
      Name : "Rebecca",
      psw : "password"
    }
  ];
const moves = function(name,positionX,positionY){
  return {
    Player : name,
    position : `${positionX},${positionY}`,
    match : 0
  };
};
const winmoves = [
  [[0,0],[1,1],[2,2]],
  [[0,0],[1,0],[2,0]],
  [[0,1],[1,1],[2,1]],
  [[0,2],[1,2],[2,2]],
  [[0,0],[0,1],[0,2]],
  [[1,0],[1,1],[1,2]],
  [[2,0],[2,1],[2,2]],
  [[2,0],[1,1],[0,2]]
];
// let arrmoves = [];
//  arrmoves.push([moves('X',1,1)]);
//  arrmoves.push([moves('X',0,1)]);
//  arrmoves.push([moves('X',2,1)]);
//  arrmoves.push([moves('X',1,3)]);

 //console.log(arrmoves.position);

// const result = checkgame();
//  console.log(`${result}`);
// console.log(player('test1','O'));
// let p = [];
// p.push(player('test','X'));
// p.push(player('test1','O'));
//
// p.getPlayer('test');
