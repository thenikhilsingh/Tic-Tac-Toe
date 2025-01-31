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
  function clearBoard() {}
  //isBoardFull
  function isBoardFull() {
    if (GBoard.Gameboard[0][0] !== "") {
    } else if (
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
      console.log("The board is full");
    } else {
      console.log("The board is not full");
    }
  }

  return { boardprint, getCellValue, setCellValue, clearBoard, isBoardFull };
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
      setCellValue(j, k, activeUser);
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
      getCellValue(0, 0) == "X" &&
      getCellValue(0, 1) == "X" &&
      getCellValue(0, 2) == "X"
    ) {
      tellWhoWins();
    } else if (
      getCellValue(1, 0) == "X" &&
      getCellValue(1, 1) == "X" &&
      getCellValue(1, 2) == "X"
    ) {
      tellWhoWins();
    } else if (
      getCellValue(2, 0) == "X" &&
      getCellValue(2, 1) == "X" &&
      getCellValue(2, 2) == "X"
    ) {
      tellWhoWins();
    } else if (
      getCellValue(0, 0) == "O" &&
      getCellValue(0, 1) == "O" &&
      getCellValue(0, 2) == "O"
    ) {
      tellWhoWins();
    } else if (
      getCellValue(1, 0) == "O" &&
      getCellValue(1, 1) == "O" &&
      getCellValue(1, 2) == "O"
    ) {
      tellWhoWins();
    } else if (
      getCellValue(2, 0) == "O" &&
      getCellValue(2, 1) == "O" &&
      getCellValue(2, 2) == "O"
    ) {
      tellWhoWins();
    } else if (
      //vertically
      getCellValue(0, 0) == "X" &&
      getCellValue(1, 0) == "X" &&
      getCellValue(2, 0) == "X"
    ) {
      tellWhoWins();
    } else if (
      getCellValue(0, 1) == "X" &&
      getCellValue(1, 1) == "X" &&
      getCellValue(2, 1) == "X"
    ) {
      tellWhoWins();
    } else if (
      getCellValue(0, 2) == "X" &&
      getCellValue(1, 2) == "X" &&
      getCellValue(2, 2) == "X"
    ) {
      tellWhoWins();
    } else if (
      getCellValue(0, 0) == "O" &&
      getCellValue(1, 0) == "O" &&
      getCellValue(2, 0) == "O"
    ) {
      tellWhoWins();
    } else if (
      getCellValue(0, 1) == "O" &&
      getCellValue(1, 1) == "O" &&
      getCellValue(2, 1) == "O"
    ) {
      tellWhoWins();
    } else if (
      getCellValue(0, 2) == "O" &&
      getCellValue(1, 2) == "O" &&
      getCellValue(2, 2) == "O"
    ) {
      tellWhoWins();
    } else if (
      //diagonally
      getCellValue(0, 0) == "X" &&
      getCellValue(1, 1) == "X" &&
      getCellValue(2, 2) == "X"
    ) {
      tellWhoWins();
    } else if (
      getCellValue(0, 2) == "X" &&
      getCellValue(1, 1) == "X" &&
      getCellValue(2, 0) == "X"
    ) {
      tellWhoWins();
    } else if (
      getCellValue(0, 2) == "O" &&
      getCellValue(1, 1) == "O" &&
      getCellValue(2, 0) == "O"
    ) {
      tellWhoWins();
    } else if (
      getCellValue(0, 2) == "O" &&
      getCellValue(1, 1) == "O" &&
      getCellValue(2, 0) == "O"
    ) {
      tellWhoWins();
    }
  }
  //tell who wins
  function tellWhoWins() {
    if (
      //horizontally
      getCellValue(0, 0) == "X" &&
      getCellValue(0, 1) == "X" &&
      getCellValue(0, 2) == "X"
    ) {
      console.log("user1 wins and user2 loses");
    } else if (
      getCellValue(1, 0) == "X" &&
      getCellValue(1, 1) == "X" &&
      getCellValue(1, 2) == "X"
    ) {
      console.log("user1 wins and user2 loses");
    } else if (
      getCellValue(2, 0) == "X" &&
      getCellValue(2, 1) == "X" &&
      getCellValue(2, 2) == "X"
    ) {
      console.log("user1 wins and user2 loses");
    } else if (
      getCellValue(0, 0) == "O" &&
      getCellValue(0, 1) == "O" &&
      getCellValue(0, 2) == "O"
    ) {
      console.log("user2 wins and user1 loses");
    } else if (
      getCellValue(1, 0) == "O" &&
      getCellValue(1, 1) == "O" &&
      getCellValue(1, 2) == "O"
    ) {
      console.log("user2 wins and user1 loses");
    } else if (
      getCellValue(2, 0) == "O" &&
      getCellValue(2, 1) == "O" &&
      getCellValue(2, 2) == "O"
    ) {
      console.log("user2 wins and user1 loses");
    } else if (
      //vertically
      getCellValue(0, 0) == "X" &&
      getCellValue(1, 0) == "X" &&
      getCellValue(2, 0) == "X"
    ) {
      console.log("user1 wins and user2 loses");
    } else if (
      getCellValue(0, 1) == "X" &&
      getCellValue(1, 1) == "X" &&
      getCellValue(2, 1) == "X"
    ) {
      console.log("user1 wins and user2 loses");
    } else if (
      getCellValue(0, 2) == "X" &&
      getCellValue(1, 2) == "X" &&
      getCellValue(2, 2) == "X"
    ) {
      console.log("user1 wins and user2 loses");
    } else if (
      getCellValue(0, 0) == "O" &&
      getCellValue(1, 0) == "O" &&
      getCellValue(2, 0) == "O"
    ) {
      console.log("user2 wins and user1 loses");
    } else if (
      getCellValue(0, 1) == "O" &&
      getCellValue(1, 1) == "O" &&
      getCellValue(2, 1) == "O"
    ) {
      console.log("user2 wins and user1 loses");
    } else if (
      getCellValue(0, 2) == "O" &&
      getCellValue(1, 2) == "O" &&
      getCellValue(2, 2) == "O"
    ) {
      console.log("user2 wins and user1 loses");
    } else if (
      //diagonally
      getCellValue(0, 0) == "X" &&
      getCellValue(1, 1) == "X" &&
      getCellValue(2, 2) == "X"
    ) {
      console.log("user1 wins and user2 loses");
    } else if (
      getCellValue(0, 2) == "X" &&
      getCellValue(1, 1) == "X" &&
      getCellValue(2, 0) == "X"
    ) {
      console.log("user1 wins and user2 loses");
    } else if (
      getCellValue(0, 2) == "O" &&
      getCellValue(1, 1) == "O" &&
      getCellValue(2, 0) == "O"
    ) {
      console.log("user2 wins and user1 loses");
    } else if (
      getCellValue(0, 2) == "O" &&
      getCellValue(1, 1) == "O" &&
      getCellValue(2, 0) == "O"
    ) {
      console.log("user2 wins and user1 loses");
    }
  }
  //iterate loop function
  function iterationLoopFunc() {
    for (let t = 0; t < 9; t++) {
      userFuncVar.UserInput();
    }
  }
  iterationLoopFunc();
})();
