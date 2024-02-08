const originalMatrix = [
  [3, 2, 1],
  [4, 5, 6],
  [7, 9, 8]
];

const newMatrix = originalMatrix.map((row) => {
  // Create a copy of the row and sort the copy
  return [...row].sort((a, b) => a - b); // Ensure sorting in increasing order
});

// Modifying the original matrix (changing the last element of the first row)
originalMatrix[0][2] = 99;

// Displaying the original and new matrices
console.log('Original Matrix (modified):', originalMatrix);
console.log('New Matrix (unaffected):', newMatrix);
