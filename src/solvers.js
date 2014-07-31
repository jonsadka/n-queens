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

  // loops through each row
  for ( var i = 0 ; i < n ; i++ ){

    // if no conflict in row, continue
    if ( !solution.hasRowConflictAt(i) ){
      for ( var j = 0; j < n ; j++ ){

        // add rook to next slot
        solution.attributes[i][j] = 1;
        rooksLeft--;
        // if conflict in column, remove the rook
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
  }
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

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
