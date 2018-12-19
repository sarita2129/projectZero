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
