const initBoard = () => {
    let board: number[][] = [
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
    ]
    
    board = createNumber(board);

    return createNumber(board);
}

const moveUp = (prev: number[][]) => {
    console.log("Entrada Up: ");
    console.log(prev);

    let newBoard = prev.map(row => [...row]);

    for (let i = 0; i < newBoard.length; i++) {
        let newCol = newBoard.map(row => row[i]);
        newCol = newCol.filter(cell => cell != 0);
        newCol = merge(newCol, false);
        newCol = newCol.filter(cell => cell != 0);
        while (newCol.length < 4) {
            newCol.push(0);
        }

        newBoard.map((row, j) => row[i] = newCol[j]);
    }

    if (JSON.stringify(prev) !== JSON.stringify(newBoard)) {
        newBoard = createNumber(newBoard);
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
        newCol = merge(newCol, true);
        newCol = newCol.filter(cell => cell != 0);
        while (newCol.length < 4) {
            newCol.unshift(0);
        }

        newBoard.map((row, j) => row[i] = newCol[j]);
    }

    if (JSON.stringify(prev) !== JSON.stringify(newBoard)) {
        newBoard = createNumber(newBoard);
    }

    return newBoard;
}

const moveRight = (prev: number[][]) => {
    console.log("Entrada Right: ");
    console.log(prev);

    let newBoard = prev.map(row => [...row]);

    newBoard.map((row, i) => {
        let newRow = row.filter(cell => cell != 0);
        newRow = merge(newRow, true);
        newRow = newRow.filter(cell => cell != 0);
        while(newRow.length < 4) {
            newRow.unshift(0);
        }
        newBoard[i] = newRow;
    })

    if (JSON.stringify(prev) !== JSON.stringify(newBoard)) {
        newBoard = createNumber(newBoard);
    }

    return newBoard;
}

const moveLeft = (prev: number[][]) => {
    console.log("Entrada Left: ");
    console.log(prev);

    let newBoard = prev.map(row => [...row]);

    newBoard.map((row, i) => {
        let newRow = row.filter(cell => cell != 0);
        newRow = merge(newRow, false);
        newRow = newRow.filter(cell => cell != 0);
        while(newRow.length < 4) {
            newRow.push(0);
        }
        newBoard[i] = newRow;
    })

    if (JSON.stringify(prev) !== JSON.stringify(newBoard)) {
        newBoard = createNumber(newBoard);
    }

    return newBoard;
}

const merge = (numbers: number[], inverted: boolean) => {
    let newNumbers = [...numbers];
    
    if (inverted) {
        for (let i = newNumbers.length; i > 0; i--) {
            if (newNumbers[i] == newNumbers[i - 1]) {
                newNumbers[i] = newNumbers[i] + newNumbers[i - 1];
                newNumbers[i - 1] = 0;
            }
        }
    } else {
        for (let i = 0; i < newNumbers.length; i++) {
            if (newNumbers[i] == newNumbers[i + 1]) {
                newNumbers[i] = newNumbers[i] + newNumbers[i + 1];
                newNumbers[i + 1] = 0;
            }
        }
    }
    

    return newNumbers;
}

const createNumber = (prev: number[][]) => {
    let newNumbers = [...prev];
    
    let selectedCell: number = -1
    let x = 0;
    let y = 0;

    if (newNumbers.flat().includes(0)) {
        while (selectedCell != 0) {
            x = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
            y = Math.floor(Math.random() * (3 - 0 + 1)) + 0;

            selectedCell = newNumbers[x][y];
        }

        newNumbers[x][y] = 2;
    }

    return newNumbers;
}

export { initBoard, moveUp, moveDown, moveRight, moveLeft }