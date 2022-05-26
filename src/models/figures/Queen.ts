import { Cell } from '../Cell';
import { Colors } from '../Colors';
import { Figure, Figurenames } from './Figure';
import blackLogo from '../../assets/black-queen.png';
import whitekLogo from '../../assets/white-queen.png';

export class Queen extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whitekLogo;
    this.name = Figurenames.QUEEN;
  }
}