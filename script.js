const board = (function GBoardFunc() {
  let GBoard = {
    Gameboard: [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ],
  };

  //boardprint
  function boardprint() {
    for (let i = 0; i < 3; i++) {
      console.log(
        `${GBoard.Gameboard[i][0] == "" ? "_" : GBoard.Gameboard[i][0]} ${
          GBoard.Gameboard[i][1] == "" ? "_" : GBoard.Gameboard[i][1]
        } ${GBoard.Gameboard[i][2] == "" ? "_" : GBoard.Gameboard[i][2]}`
      );
    }
  }
  boardprint();

  //getCellValue
  function getCellValue(j, k) {
    let value = GBoard.Gameboard[j][k];
    return value;
  }

  //setCellValue
  function setCellValue() {
    if (user[0] == "X") {
      GBoard.Gameboard[j][k] = "X";
    } else if (user[0] == "O") {
      GBoard.Gameboard[j][k] = "O";
    } else if (user[1] == "X") {
      GBoard.Gameboard[j][k] = "X";
    } else if (user[1] == "O") {
      GBoard.Gameboard[j][k] = "O";
    } else {
      GBoard.Gameboard[j][k] = "_";
    }
  }
  // let GameFlowController = {};
  return { boardprint }, { getCellValue };
})();

const userFuncVar = (function userFunc() {
  let u1;
  let u2;
  let user = [u1, u2];
  
  //whose turn
  //userInput to set value
  return user;
})();
