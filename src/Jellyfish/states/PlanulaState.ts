import Jellyfish from '../Jellyfish';
import JellyfishState from './JellyfishState';

export default class PlanulaState extends JellyfishState {

  constructor(jellyfish: Jellyfish) {
    super('planula', jellyfish);
  }

  public polyp(): void {
    console.groupCollapsed('> Grow up to polyp');
      console.log('> > > > > > >');
      console.log('do something.');
      console.log('< < < < < < <');
    console.groupEnd();

    this.jellyfish.state = this.jellyfish.polypState;
  }

}
