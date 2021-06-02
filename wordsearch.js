//Pair programming by Matthew Tamkee and Henri William

const transpose = function(matrix) {
    // Put your solution here
    let result = [];
    for (let i = 0; i < matrix[0].length; i++) {
      let tempArray = [];
      for (let j = 0; j < matrix.length; j++) {
        tempArray.push(matrix[j][i]);
      }
      result.push(tempArray);
    }
    return result;
  };
  
const find = (matrix, word) => {
    for (let i of matrix) {
        if (i.includes(word)) {
            return true;
        }
    }
};

const reverseString = (matrix) => {
    let row = [];
    for (let rows of matrix) {
        let rev = rows.split('').reverse().join('');
        row.push(rev);
    }
    return row;
};

const wordSearch = (letters, word) => { 
    // [['a','b','c']] => ['abc']
    const horizontalJoin = letters.map(ls => ls.join(''));
    const transposeMatrix = transpose(letters);
    const verticalJoin = transposeMatrix.map(ls => ls.join(''))
    let reverseMatrix = reverseString(horizontalJoin);
    let reverseSearch = find(reverseMatrix, word);
    let horizontalSearch = find(horizontalJoin, word);
    let verticalSearch = find(verticalJoin, word);
    
    if (horizontalSearch === true || verticalSearch === true || reverseSearch === true) {
        return true;
    } else {
        return false;
    }

}

module.exports = wordSearch