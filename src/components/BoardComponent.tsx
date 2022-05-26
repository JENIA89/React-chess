import React, { FC, useState } from 'react'
import { Board } from '../models/Board'
import { Cell } from '../models/Cell';
import CellComponent from './CellComponent';

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardProps> = ({board, setBoard}) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  function clickHandler(cell: Cell) {
    if(cell.figure) setSelectedCell(cell)
  }
  return (
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
  )
}

export default BoardComponent