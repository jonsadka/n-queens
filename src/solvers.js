/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {

  // declare n x n board made of zeroes and rooks left
  var solution = new Board({'n':n});
  var rooksLeft = n;

  // loops through each row and column
  for ( var i = 0 ; i < n ; i++ ){
    for ( var j = 0; j < n ; j++ ){
      // add rook to next slot and reduce rook count
      solution.attributes[i][j] = 1;
      rooksLeft--;
      // if conflict exists in either row or column, remove the rook
      if ( solution.hasRowConflictAt(i) || solution.hasColConflictAt(j) ){
        solution.attributes[i][j] = 0;
        rooksLeft++;
      }

      // when no rooks left, return solution
      if ( !rooksLeft ){
        console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
        return solution.attributes;
      }
    }
  }
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n, board, rooksLeft) {

  var solutionCount = 0;
  board = board || new Board({'n':n});
  if ( rooksLeft === undefined ) rooksLeft = n;

  if ( rooksLeft ){

    // add another rook to the board at all the non-conflicting locations
    for ( var i = 0; i < n; i++ ){
      for ( var j = 0; j < n; j++){
        // add rook to next slot and reduce rook count
        board.attributes[i][j] = 1;
        rooksLeft--;
        // if conflict exists in either row or column, remove the rook
        if ( board.hasRowConflictAt(i) || board.hasColConflictAt(j) ){
          board.attributes[i][j] = 0;
          rooksLeft++;
        // if conflict doesn't exists and rooks are left, call function again
        // otherqise count the solution
        } else {
          debugger
          if ( rooksLeft > 0){
            countNRooksSolutions(n, board, rooksLeft);
          } else {
            solutionCount++;
          }
        }
      board.attributes[i].map(Number.prototype.valueOf, 0);
      }
    }
  }

  // // remove solutions for dupicates due to replication of diagonals
  // if ( n === 2 ){
  //   solutionCount = solutionCount - 1;
  // } else if ( n > 2 ){
  //   solutionCount = solutionCount - 2;
  // }

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
