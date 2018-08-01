import Jellyfish from '../Jellyfish';
import JellyfishState from './JellyfishState';

export default class EggState extends JellyfishState {

  constructor(jellyfish: Jellyfish) {
    super('egg', jellyfish);
  }

  public planula(): void {
    console.groupCollapsed('> Grow up to planula');
      console.log('> > > > > > >');
      console.log('do something.');
      console.log('< < < < < < <');
    console.groupEnd();

    this.jellyfish.state = this.jellyfish.planulaState;
  }

}
