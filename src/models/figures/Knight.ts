import { Cell } from '../Cell';
import { Colors } from '../Colors';
import { Figure, Figurenames } from './Figure';
import blackLogo from '../../assets/black-knight.png';
import whitekLogo from '../../assets/white-knight.png';

export class Knight extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whitekLogo;
    this.name = Figurenames.KNIGHT;
  }

  canMove(target: Cell): boolean {
    if(!super.canMove(target)) return false;
    return true;
  }
}