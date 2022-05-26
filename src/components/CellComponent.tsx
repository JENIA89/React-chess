import React, { FC } from 'react'
import { Cell } from '../models/Cell'

interface CellProps {
  cell: Cell;
  selected: boolean;
  onClick: (cell: Cell) => void;
}
const CellComponent: FC<CellProps> = ({cell, selected, onClick}) => {
  return (
    <div 
      className={['cell', cell.color, selected ? 'selected' : ''].join(' ')}
      onClick={()=>onClick(cell)}
      >
      {cell.figure?.logo && <img src={cell.figure.logo} alt='logo'/>}
    </div>
  )
}

export default CellComponent