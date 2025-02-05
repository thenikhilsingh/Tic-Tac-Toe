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

  //getCellValue
  function getCellValue(j, k) {
    return GBoard.Gameboard[j][k];
  }

  //setCellValue
  function setCellValue(j, k, activeUser) {
    if (activeUser == userFuncVar.user[0]) {
      GBoard.Gameboard[j][k] = "X";
    } else if (activeUser == userFuncVar.user[1]) {
      GBoard.Gameboard[j][k] = "O";
    }
  }
  //clear board
  function clearBoard() {
    GBoard.Gameboard = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
  }
  //isBoardFull
  function isBoardFull() {
    if (
      GBoard.Gameboard[0][0] !== "" &&
      GBoard.Gameboard[0][1] !== "" &&
      GBoard.Gameboard[0][2] !== "" &&
      GBoard.Gameboard[1][0] !== "" &&
      GBoard.Gameboard[1][1] !== "" &&
      GBoard.Gameboard[1][2] !== "" &&
      GBoard.Gameboard[2][0] !== "" &&
      GBoard.Gameboard[2][1] !== "" &&
      GBoard.Gameboard[2][2] !== ""
    ) {
      // The board is full
      clearBoard();
      console.log("It is a Tie");
    } else {
      //The board is not full"
    }
  }

  return {
    boardprint,
    getCellValue,
    setCellValue,
    clearBoard,
    isBoardFull,
  };
})();

const userFuncVar = (function userFunc() {
  let user = ["user1", "user2"];
  let activeUser = user[0];
  //whose turn
  function userTurnFunc() {
    if (activeUser == user[0]) {
      activeUser = user[1];
    } else if (activeUser == user[1]) {
      activeUser = user[0];
    }
    return activeUser;
  }

  //userInput to set value
  function UserInput() {
    let j = parseInt(prompt("Enter row values between 0 to 2"));
    let k = parseInt(prompt("enter column values between 0 to 2"));

    if (j >= 0 && j < 3 && k >= 0 && k < 3) {
      board.setCellValue(j, k, activeUser);
      board.boardprint();
      activeUser = userTurnFunc();
    } else {
      console.log("Enter a valid Input");
    }
  }

  return { user, activeUser, userTurnFunc, UserInput };
})();

const gameControllerFuncVar = (function gameController() {
  //check win lose
  function checkWhoWins() {
    if (
      //horizontally
      board.getCellValue(0, 0) == "X" &&
      board.getCellValue(0, 1) == "X" &&
      board.getCellValue(0, 2) == "X"
    ) {
      tellWhoWins(userFuncVar.user[0]);
      board.clearBoard();
      return true;
    } else if (
      board.getCellValue(1, 0) == "X" &&
      board.getCellValue(1, 1) == "X" &&
      board.getCellValue(1, 2) == "X"
    ) {
      tellWhoWins(userFuncVar.user[0]);
      board.clearBoard();
      return true;
    } else if (
      board.getCellValue(2, 0) == "X" &&
      board.getCellValue(2, 1) == "X" &&
      board.getCellValue(2, 2) == "X"
    ) {
      tellWhoWins(userFuncVar.user[0]);
      board.clearBoard();
      return true;
    } else if (
      board.getCellValue(0, 0) == "O" &&
      board.getCellValue(0, 1) == "O" &&
      board.getCellValue(0, 2) == "O"
    ) {
      tellWhoWins(userFuncVar.user[1]);
      board.clearBoard();
      return true;
    } else if (
      board.getCellValue(1, 0) == "O" &&
      board.getCellValue(1, 1) == "O" &&
      board.getCellValue(1, 2) == "O"
    ) {
      tellWhoWins(userFuncVar.user[1]);
      board.clearBoard();
      return true;
    } else if (
      board.getCellValue(2, 0) == "O" &&
      board.getCellValue(2, 1) == "O" &&
      board.getCellValue(2, 2) == "O"
    ) {
      tellWhoWins(userFuncVar.user[1]);
      board.clearBoard();
      return true;
    } else if (
      //vertically
      board.getCellValue(0, 0) == "X" &&
      board.getCellValue(1, 0) == "X" &&
      board.getCellValue(2, 0) == "X"
    ) {
      tellWhoWins(userFuncVar.user[0]);
      board.clearBoard();
      return true;
    } else if (
      board.getCellValue(0, 1) == "X" &&
      board.getCellValue(1, 1) == "X" &&
      board.getCellValue(2, 1) == "X"
    ) {
      tellWhoWins(userFuncVar.user[0]);
      board.clearBoard();
      return true;
    } else if (
      board.getCellValue(0, 2) == "X" &&
      board.getCellValue(1, 2) == "X" &&
      board.getCellValue(2, 2) == "X"
    ) {
      tellWhoWins(userFuncVar.user[0]);
      board.clearBoard();
      return true;
    } else if (
      board.getCellValue(0, 0) == "O" &&
      board.getCellValue(1, 0) == "O" &&
      board.getCellValue(2, 0) == "O"
    ) {
      tellWhoWins(userFuncVar.user[1]);
      board.clearBoard();
      return true;
    } else if (
      board.getCellValue(0, 1) == "O" &&
      board.getCellValue(1, 1) == "O" &&
      board.getCellValue(2, 1) == "O"
    ) {
      tellWhoWins(userFuncVar.user[1]);
      board.clearBoard();
      return true;
    } else if (
      board.getCellValue(0, 2) == "O" &&
      board.getCellValue(1, 2) == "O" &&
      board.getCellValue(2, 2) == "O"
    ) {
      tellWhoWins(userFuncVar.user[1]);
      board.clearBoard();
      return true;
    } else if (
      //diagonally
      board.getCellValue(0, 0) == "X" &&
      board.getCellValue(1, 1) == "X" &&
      board.getCellValue(2, 2) == "X"
    ) {
      tellWhoWins(userFuncVar.user[0]);
      board.clearBoard();
      return true;
    } else if (
      board.getCellValue(0, 2) == "X" &&
      board.getCellValue(1, 1) == "X" &&
      board.getCellValue(2, 0) == "X"
    ) {
      tellWhoWins(userFuncVar.user[0]);
      board.clearBoard();
      return true;
    } else if (
      board.getCellValue(0, 2) == "O" &&
      board.getCellValue(1, 1) == "O" &&
      board.getCellValue(2, 0) == "O"
    ) {
      tellWhoWins(userFuncVar.user[1]);
      board.clearBoard();
      return true;
    } else if (
      board.getCellValue(0, 2) == "O" &&
      board.getCellValue(1, 1) == "O" &&
      board.getCellValue(2, 0) == "O"
    ) {
      tellWhoWins(userFuncVar.user[1]);
      board.clearBoard();
      return true;
    }
  }
  //tell who wins
  function tellWhoWins(winner) {
    if (winner == userFuncVar.user[0]) {
      console.log("user1 wins and user2 loses");
    } else {
      console.log("user2 wins and user1 loses");
    }
  }
  //iterate loop function
  function iterationLoopFunc() {
    for (let t = 0; t < 9; t++) {
      userFuncVar.UserInput();
      checkWhoWins();
      board.isBoardFull();
    }
  }
  iterationLoopFunc();
})();

