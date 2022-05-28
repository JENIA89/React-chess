import React, { FC, useEffect, useState } from 'react'
import { Board } from '../models/Board'
import { Cell } from '../models/Cell';
import { Player } from '../models/Player';
import CellComponent from './CellComponent';

interface BoardProps {
  board: Board;
  currentPlayer: Player | null;
  swapPlayer: () => void;
  setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardProps> = ({board, currentPlayer, swapPlayer, setBoard}) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  useEffect(() => {
    highLightCells()
  }, [selectedCell])
  
  function clickHandler(cell: Cell) {
    if(selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
      selectedCell.moveFigure(cell);
      swapPlayer();
      setSelectedCell(null);
    } else {
      if(cell.figure?.color === currentPlayer?.color) {
        setSelectedCell(cell);
      }
    }
  }

  function highLightCells() {
    board.highLightCells(selectedCell)
    updateBoard()
  }

  function updateBoard() {
    const newBoard = board.getCopyBoard()
    setBoard(newBoard)
  }

  return (
    <div>
    <h2 className='title-board'>Текущий игрок: {currentPlayer?.color}</h2>
      <div className='board'>
        {board.cells.map((row, i) =>
          <React.Fragment key={i}>
            {row.map(cell =>
              <CellComponent
                onClick={clickHandler}
                cell={cell}
                key={cell.id}
                selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
              />
              )}
          </React.Fragment>
        )}
      </div>
    </div>
  )
}

export default BoardComponent