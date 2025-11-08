import type { BoardProps } from "../types/board";

const initBoard = () => {
    let board: BoardProps = {
        blocks: [
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
        ],
        isGameOver: false,
    }
    board.blocks = createNumber(board.blocks);
    board.blocks = createNumber(board.blocks);

    return board;
}

const moveUp = (prev: BoardProps) => {
    if (prev.isGameOver) {
        return prev;    
    }

    console.log("Entrada Up: ");
    console.log(prev);

    let newBoard: BoardProps = {
        blocks: [],
        isGameOver: false,
    };

    newBoard.blocks = prev.blocks.map(row => [...row]);
    newBoard.isGameOver = prev.isGameOver;

    for (let i = 0; i < newBoard.blocks.length; i++) {
        let newCol = newBoard.blocks.map(row => row[i]);
        newCol = newCol.filter(cell => cell != 0);
        newCol = merge(newCol, false);
        newCol = newCol.filter(cell => cell != 0);
        while (newCol.length < 4) {
            newCol.push(0);
        }

        newBoard.blocks.map((row, j) => row[i] = newCol[j]);
    }

    if (JSON.stringify(prev) !== JSON.stringify(newBoard)) {
        newBoard.blocks = createNumber(newBoard.blocks);
    } 
    
    newBoard.isGameOver = isGameOver(newBoard.blocks);
    
    return newBoard;
}

const moveDown = (prev: BoardProps) => {
    if (prev.isGameOver) {
        return prev;    
    }

    console.log("Entrada Down: ");
    console.log(prev);

    let newBoard: BoardProps = {
        blocks: [],
        isGameOver: false,
    };

    newBoard.blocks = prev.blocks.map(row => [...row]);
    newBoard.isGameOver = prev.isGameOver;

    for (let i = 0; i < newBoard.blocks.length; i++) {
        let newCol = newBoard.blocks.map(row => row[i]);
        newCol = newCol.filter(cell => cell != 0);
        newCol = merge(newCol, true);
        newCol = newCol.filter(cell => cell != 0);
        while (newCol.length < 4) {
            newCol.unshift(0);
        }

        newBoard.blocks.map((row, j) => row[i] = newCol[j]);
    }

    if (JSON.stringify(prev) !== JSON.stringify(newBoard)) {
        newBoard.blocks = createNumber(newBoard.blocks);
    } 
    
    newBoard.isGameOver = isGameOver(newBoard.blocks);

    return newBoard;
}

const moveRight = (prev: BoardProps) => {
    if (prev.isGameOver) {
        return prev;    
    }

    console.log("Entrada Right: ");
    console.log(prev);

   let newBoard: BoardProps = {
        blocks: [],
        isGameOver: false,
    };

    newBoard.blocks = prev.blocks.map(row => [...row]);
    newBoard.isGameOver = prev.isGameOver;

    newBoard.blocks.map((row, i) => {
        let newRow = row.filter(cell => cell != 0);
        newRow = merge(newRow, true);
        newRow = newRow.filter(cell => cell != 0);
        while(newRow.length < 4) {
            newRow.unshift(0);
        }
        newBoard.blocks[i] = newRow;
    })

    if (JSON.stringify(prev) !== JSON.stringify(newBoard)) {
        newBoard.blocks = createNumber(newBoard.blocks);
    } 
        
    newBoard.isGameOver = isGameOver(newBoard.blocks);
    
    return newBoard;
}

const moveLeft = (prev: BoardProps) => {
    if (prev.isGameOver) {
        return prev;    
    }

    let newBoard: BoardProps = {
        blocks: [],
        isGameOver: false,
    };

    newBoard.blocks = prev.blocks.map(row => [...row]);
    newBoard.isGameOver = prev.isGameOver;

    newBoard.blocks.map((row, i) => {
        let newRow = row.filter(cell => cell != 0);
        newRow = merge(newRow, false);
        newRow = newRow.filter(cell => cell != 0);
        while(newRow.length < 4) {
            newRow.push(0);
        }
        newBoard.blocks[i] = newRow;
    })

    if (JSON.stringify(prev) !== JSON.stringify(newBoard)) {
        newBoard.blocks = createNumber(newBoard.blocks);
    } 
        
    newBoard.isGameOver = isGameOver(newBoard.blocks);

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

const isGameOver = (prev: number[][]): boolean => {
    let newNumbers = [...prev];
    
    if (newNumbers.flat().includes(0)) {
        console.log("false tem 0");
        return false;
    }

    for (let i = 0; i < newNumbers.length; i++) {
        let colAux = newNumbers.map(row => row[i]);

        let newColUp = newNumbers.map(row => row[i]);
        let newColDown = newNumbers.map(row => row[i]);

        newColUp = newColUp.filter(cell => cell != 0);
        newColUp = merge(newColUp, false);
        newColUp = newColUp.filter(cell => cell != 0);

        newColDown = newColDown.filter(cell => cell != 0);
        newColDown = merge(newColDown, true);
        newColDown = newColDown.filter(cell => cell != 0);


        while (newColUp.length < 4) {
            newColUp.push(0);
        }

        while (newColDown.length < 4) {
            newColDown.unshift(0);
        }

        if (JSON.stringify(newColUp) !== JSON.stringify(colAux) || JSON.stringify(newColDown) !== JSON.stringify(colAux)) {
            console.log("false coluna merge");
            console.log("controle: " + colAux);
            console.log("nova up: " + newColUp);
            console.log("nova down: " + newColDown);
            return false;
        }
    }


    for (let row of newNumbers) {
        let rowAux = row.filter(cell => cell != 0);

        let newRowRight = row.filter(cell => cell != 0);
        let newRowLeft = row.filter(cell => cell != 0);

        newRowRight = merge(newRowRight, true);
        newRowRight = newRowRight.filter(cell => cell != 0);

        newRowLeft = merge(newRowLeft, false);
        newRowLeft = newRowLeft.filter(cell => cell != 0);

        while (newRowRight.length < 4) newRowRight.unshift(0);
        while (newRowLeft.length < 4) newRowLeft.push(0);

        if (JSON.stringify(newRowRight) !== JSON.stringify(rowAux) ||
            JSON.stringify(newRowLeft) !== JSON.stringify(rowAux)) {
            console.log("false linha merge");
            return false;
        }
    }

    console.log("true");
    return true;
}

export { initBoard, moveUp, moveDown, moveRight, moveLeft }