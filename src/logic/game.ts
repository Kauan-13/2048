const initBoard = () => {
    let board: number[][] = [
        [2,2,2,2],
        [2,2,2,2],
        [2,2,2,2],
        [2,2,2,2],
    ]
    
    return board;
}

const moveUp = (prev: number[][]) => {
    console.log("Entrada Up: ");
    console.log(prev);

    let newBoard = prev.map(row => [...row]);

    for (let i = 0; i < newBoard.length; i++) {
        let newCol = newBoard.map(row => row[i]);
        newCol = newCol.filter(cell => cell != 0);
        newCol = merge(newCol);
        newCol = newCol.filter(cell => cell != 0);
        while (newCol.length < 4) {
            newCol.push(0);
        }

        newBoard.map((row, j) => row[i] = newCol[j]);
    }

    return newBoard;
}

const moveDown = (prev: number[][]) => {
    console.log("Entrada Down: ");
    console.log(prev);

    let newBoard = prev.map(row => [...row]);

    for (let i = 0; i < newBoard.length; i++) {
        let newCol = newBoard.map(row => row[i]);
        newCol = newCol.filter(cell => cell != 0);
        newCol = merge(newCol);
        newCol = newCol.filter(cell => cell != 0);
        while (newCol.length < 4) {
            newCol.unshift(0);
        }

        newBoard.map((row, j) => row[i] = newCol[j]);
    }

    return newBoard;
}

const moveRight = (prev: number[][]) => {
    console.log("Entrada Right: ");
    console.log(prev);

    let newBoard = prev.map(row => [...row]);

    newBoard.map((row, i) => {
        let newRow = row.filter(cell => cell != 0);
        newRow = merge(newRow);
        newRow = newRow.filter(cell => cell != 0);
        while(newRow.length < 4) {
            newRow.unshift(0);
        }
        newBoard[i] = newRow;
    })

    return newBoard;
}

const moveLeft = (prev: number[][]) => {
    console.log("Entrada Left: ");
    console.log(prev);

    let newBoard = prev.map(row => [...row]);

    newBoard.map((row, i) => {
        let newRow = row.filter(cell => cell != 0);
        newRow = merge(newRow);
        newRow = newRow.filter(cell => cell != 0);
        while(newRow.length < 4) {
            newRow.push(0);
        }
        newBoard[i] = newRow;
    })

    return newBoard;
}

const merge = (numbers: number[]) => {
    let newNumbers = [...numbers];
    
    for (let i = 0; i < newNumbers.length; i++) {
        if (newNumbers[i] == newNumbers[i + 1]) {
            newNumbers[i] = newNumbers[i] + newNumbers[i + 1];
            newNumbers[i + 1] = 0;
        }
    }

    return newNumbers;
}

export { initBoard, moveUp, moveDown, moveRight, moveLeft }